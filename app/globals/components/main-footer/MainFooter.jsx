import React from 'react';
import pageMap from './../../utils/page-map.js';

import './main-footer.scss';

export default class MainFooter extends React.Component {
    render() {
        let listItems = Object.keys(pageMap).map((listItem) => {
            return (
                <li key="{pageMap[listItem].name}">{pageMap[listItem].name}</li>
            );
        });

        return (
            <footer className="main-footer diagonal-left-section bg-black">
                <div className="container">
                    <div className="row">
                        <ul>
                            {listItems}
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}