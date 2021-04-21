require('dotenv').config();
const path = require('path');

const express = require('express');
const webpack = require('webpack');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./server/router');
const connect = require('./server/db');

const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
    console.log('[server] Development environment');
    const webpackConfig = require('./webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const serverConfig = { port: port, hot: true };
    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));
} else {
    console.log('[server] Production environment');
    app.use(express.static(path.join(__dirname, 'build')));
    app.use(helmet());
    app.use(helmet.permittedCrossDomainPolicies()); // To prevent loading content with Adobe Flash and Acrobat
    app.disable('x-powered-by'); // To prevent possible attacks to certain dependencies we're using
}

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
connect(uri); // Connect to the database

app.use(cors()); // To enable all CORS requests
app.use(bodyParser.json()); // To parse JSON requests
app.use(bodyParser.urlencoded({ extended: false })); // To parse URL Encoded requests
app.use('/api', router); // To manage all the API routes (like '/api/projects' or '/api/technologies')

// To serve the statics after Webpack compiles the React App
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// To manage the contact form and its POST HTTP requests
app.post('/contact', (req, res) => {
    sendMessage(req.body, res);
});

app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server running on port ${port}`);
    }
});