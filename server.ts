import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './server/router';
import connect from './server/db';

const app: express.Application = express();
const port: string | number = process.env.PORT || 3000;

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

const uri: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
connect(uri); // Connect to the database

app.use(cors()); // To enable all CORS requests
app.use(bodyParser.json()); // To parse JSON requests
app.use(bodyParser.urlencoded({ extended: false })); // To parse URL Encoded requests
app.use('/api', router); // To manage all the API routes (like '/api/projects' or '/api/technologies')

// To serve the statics after Webpack compiles the React App
app.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// To manage the contact form and its POST HTTP requests
// app.post('/contact', (req, res) => {
//     // Do something
// });

app.listen(port, (): void => console.log(`Server running on port ${port}`));