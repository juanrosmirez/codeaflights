import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import Search from './pages/Search';
import Flights from './pages/Flights';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/flights/:id" component={Flights} />
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
