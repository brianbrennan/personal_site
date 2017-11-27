import React from 'react';

import blogPosts from './../../blog.json';

import './blog-home.scss';

export default class HomePage extends React.Component {
    render() {
        let blogEntries = Object.keys(blogPosts).map((blogPostKey) => {
            return (
                <section key="{blogPostKey}">{blogPosts[blogPostKey].meta.title}</section>
                
            );
        });

        return (
            <section className="blog-home-page">
                {blogEntries}
            </section>
        );
    }
}