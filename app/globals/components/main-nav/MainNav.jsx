import React from 'react';
import { Link } from 'react-router-dom';

import './main-nav.scss';

export default class MainNav extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        );
    }
}