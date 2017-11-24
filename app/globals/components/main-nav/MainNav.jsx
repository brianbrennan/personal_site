import React from 'react';
import { Link } from 'react-router-dom';

export default class MainNav extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        );
    }
}