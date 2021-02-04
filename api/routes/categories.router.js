const express = require('express');
const categories = require('../categories');

const categoriesRouter = express.Router();

categoriesRouter.get('/categories', (req, res) => {
    categories.getAll(req.token)
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

module.exports = categoriesRouter;