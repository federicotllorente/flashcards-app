import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Practice from '../pages/Practice';
import Settings from '../pages/Settings';
import Contact from '../pages/Contact';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/practice" component={Practice} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;