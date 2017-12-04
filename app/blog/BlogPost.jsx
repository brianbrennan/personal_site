import React from 'react';

import blogPosts from './../../blog.json';

export default class BlogPost extends React.Component {
    constructor() {
        super(props);
        console.log('test');
    }
    render() {
        console.log(this.props.params.splat);
    }
}