const express = require('express');
const bodyParser = require('body-parser');
const comments = require('../comments');

const commentsRouter = express.Router();

commentsRouter.get('/comments/:id', (req, res) => {
    comments.get(req.token, req.params.id)
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

commentsRouter.put('/comments/:id', bodyParser.json(), (req, res) => {
    comments.edit(req.token, req.params.id, req.body)
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

commentsRouter.post('/comments', bodyParser.json(), (req, res) => {
    comments.add(req.token, req.body)
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

commentsRouter.post('/comments/:id', bodyParser.json(), (req, res) => {
    const { option } = req.body;
    comments.vote(req.token, req.params.id, option)
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

commentsRouter.delete('/comments/:id', (req, res) => {
    comments.disable(req.token, req.params.id)
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


commentsRouter.get('/posts/:id/comments', (req, res) => {
    comments.getByParent(req.token, req.params.id)
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

module.exports = commentsRouter;