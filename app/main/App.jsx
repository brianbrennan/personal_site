import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import MainHeader from '../globals/components/main-header/MainHeader.jsx';
import MainFooter from '../globals/components/main-footer/MainFooter.jsx';
import HomePage from '../home/Home.jsx';


class App extends React.Component {

    render() {
        return (
            <Router basename="/">
                <div className="app-container">
                    <MainHeader />
                    <Route exact path="/" component={HomePage} />
                    <MainFooter/>
                </div>
            </Router>
        );
    }
}

render(<App/>, document.getElementById('app'));