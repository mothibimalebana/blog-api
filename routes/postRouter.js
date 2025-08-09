const { Router } = require('express');

const postRouter = Router();

postRouter.get('/', (req, res) => {
    res.send('Get request for all blog posts');
});

postRouter.get('/:id', (req, res) => {
    res.send('Get request for a single post')
});

postRouter.post('/', (req, res) => {
    res.send('Create a new user');
});

postRouter.put('/:id', (req, res) => {
    res.send('Edit a single post');
});

postRouter.delete('/:id', (req,res) => {
    res.send('Delete a single post');
});

module.exports = postRouter;