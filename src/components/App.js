import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Category from '../pages/Category';
import NewCard from '../pages/NewCard';
import CardDetails from '../pages/CardDetails';
import Practice from '../pages/Practice';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/flashcards" component={Categories} />
                    <Route exact path="/flashcards/:path" component={Category} />
                    <Route exact path="/flashcards/:path/add" component={NewCard} />
                    <Route exact path="/flashcards/:id" component={CardDetails} />
                    <Route exact path="/practice" component={Practice} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;