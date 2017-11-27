import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../main-nav/MainNav.jsx';

import './main-header.scss';

export default class MainHeader extends React.Component {
    render() {
        return (
            <header className="main-header container">
                <div className="row">
                    <Link to="/">
                        <div className="logo">

                        </div>
                    </Link>
                    <MainNav/>
                </div>
            </header>
        );
    }
}