const express = require('express');
const bodyParser = require('body-parser');
const posts = require('../posts');

const postsRouter = express.Router();

postsRouter.get('/posts', (req, res) => {
    posts.getAll(req.token)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error);
              res.status(500).send({
                 error: 'There was an error.'
          })
        }
      )
});

postsRouter.get('/:category/posts', (req, res) => {
    posts.getByCategory(req.token, req.params.category)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error);
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
});

postsRouter.post('/posts', bodyParser.json(), (req, res) => {
    posts.add(req.token, req.body)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error);
              res.status(500).send({
                 error: 'There was an error.'
          })
        }
      )
});

postsRouter.get('/posts/:id', (req, res) => {
    posts.get(req.token, req.params.id)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error);
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
});

postsRouter.delete('/posts/:id', (req, res) => {
    posts.disable(req.token, req.params.id)
      .then(post => comments.disableByParent(req.token, post))
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error);
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
});

postsRouter.post('/posts/:id', bodyParser.json(), (req, res) => {
    const { option } = req.body;
    const id = req.params.id;
    posts.vote(req.token, id, option)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error);
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
});

postsRouter.put('/posts/:id', bodyParser.json(), (req, res) => {
    posts.edit(req.token, req.params.id, req.body)
      .then(
        (data) => res.send(data),
          (error) => {
              console.error(error);
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
});

module.exports = postsRouter;