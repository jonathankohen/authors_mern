const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/authors', AuthorController.all_authors);
    app.get('/api/authors/:id', AuthorController.single_author);
    app.post('/api/authors/create', AuthorController.create_author);
    app.put('/api/authors/edit/:id', AuthorController.update_author);
    app.delete('/api/authors/delete/:id', AuthorController.delete_author);
};
