import React from 'react';
import { Link } from 'react-router-dom';

import blogPosts from './../../blog.json';

import './blog-home.scss';

export default class BlogHome extends React.Component {
    render() {
        let blogEntries = Object.keys(blogPosts).map((blogPostKey) => {
            return (
                <section key={blogPostKey}>
                    <Link to={"/blog/" + blogPostKey}>
                    {blogPosts[blogPostKey].meta.title}
                    </Link>
                </section>
            );
        });

        return (
            <section className="blog-home-page">
                {blogEntries}
            </section>
        );
    }
}