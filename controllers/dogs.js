const Dog = require('../models/dog.js');

module.exports = {
    index, 
    show
}

function index(req, res) {
    const dogs = Dog.getAll();
    res.json(dogs);
}

function show(req, res) {
    const dog = Dog.getOne(req.params.breed);
    res.json(dog || {message: 'Dog not found'});
}
  