var ItsABlog = require('itsablog').default,
    itsablog = new ItsABlog({
        dir: __dirname + '/app/blog/blog-posts'
    });

itsablog.outputToFile();
