const { Router } = require('express');
const { cats } = require('../../data/cats');


module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingCat = cats.find((cat) => cat.id === id);
    res.json(matchingCat); 
  })  
  .get('/', (req, res) => {
    const cat = cats.map(({ id, name }) => {
      return { id, name };
    });
    res.json(cat);
  }) ;
