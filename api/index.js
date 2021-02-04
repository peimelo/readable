require('dotenv').config();

const express = require('express');
const cors = require('cors');
const config = require('./config');

const categoriesRouter = require('./routes/categories.router');
const commentsRouter = require('./routes/comments.router');
const postsRouter = require('./routes/posts.router');

const app = express();

app.use(express.static('frontend/build'));
app.use(cors());


app.get('/api', (req, res) => {
  const help = `
  <pre>
    Welcome to the Readable API!

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    GET /categories
      USAGE:
        Get all of the categories available for the app. List is found in categories.js.
        Feel free to extend this list as you desire.

    GET /:category/posts
      USAGE:
        Get all of the posts for a particular category

    GET /posts
      USAGE:
        Get all of the posts. Useful for the main page when no category is selected.

    POST /posts
      USAGE:
        Add a new post

      PARAMS:
        id - UUID should be fine, but any unique id will work
        timestamp - timestamp in whatever format you like, you can use Date.now() if you like
        title - String
        body - String
        author - String
        category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.

    GET /posts/:id
      USAGE:
        Get the details of a single post

    POST /posts/:id
      USAGE:
        Used for voting on a post
      PARAMS:
        option - String: Either "upVote" or "downVote"

    PUT /posts/:id
      USAGE:
        Edit the details of an existing post
      PARAMS:
        title - String
        body - String

    DELETE /posts/:id
      USAGE:
        Sets the deleted flag for a post to 'true'.
        Sets the parentDeleted flag for all child comments to 'true'.

    GET /posts/:id/comments
      USAGE:
        Get all the comments for a single post

    POST /comments
      USAGE:
        Add a comment to a post

      PARAMS:
        id: Any unique ID. As with posts, UUID is probably the best here.
        timestamp: timestamp. Get this however you want.
        body: String
        author: String
        parentId: Should match a post id in the database.

    GET /comments/:id
      USAGE:
        Get the details for a single comment

    POST /comments/:id
      USAGE:
        Used for voting on a comment.
      PARAMS:
        option - String: Either "upVote" or "downVote"

    PUT /comments/:id
      USAGE:
        Edit the details of an existing comment

      PARAMS:
        timestamp: timestamp. Get this however you want.
        body: String

    DELETE /comments/:id
      USAGE:
        Sets a comment's deleted flag to 'true'
 </pre>
  `;

  res.send(help)
});

app.use((req, res, next) => {
  const token = req.get('Authorization');

  if (token) {
    req.token = token;
    next()
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    })
  }
});

app.use('/api', categoriesRouter);
app.use('/api', commentsRouter);
app.use('/api', postsRouter);

if (process.env.HEROKU) {
  app.listen(config.port, () => {
    console.log('Server listening on port %s, Ctrl+C to stop', config.port)
  });
}

module.exports = app;
