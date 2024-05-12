const Cat = require('../models/cat.js');

module.exports = {
    index, 
    show
}

function index(req, res) {
    const cats = Cat.getAll();
    res.json(cats);
}

function show(req, res) {
    const cat = Cat.getOne(req.params.id);
    res.json(cat || {message: 'Cat not found'});
}
  