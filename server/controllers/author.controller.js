const Author = require('../models/author.model');

module.exports = {
    all_authors: (req, res) => {
        Author.find()
            .then(authors => res.json({ results: authors }))
            .catch(err => res.status(400).json(err));
    },

    single_author: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(author => res.json({ results: author }))
            .catch(err => res.status(400).json(err));
    },

    create_author: (req, res) => {
        Author.create(req.body)
            .then(author => res.json({ results: author }))
            .catch(err => res.status(400).json(err));
    },

    update_author: (req, res) => {
        Author.updateOne({ _id: req.params.id }, req.body, {
            new: true,
            useFindAndModify: false,
            runValidators: true,
        })
            .then(author => res.json({ results: author }))
            .catch(err => res.status(400).json(err));
    },

    delete_author: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(author => res.json({ results: author }))
            .catch(err => res.status(400).json(err));
    },
};
