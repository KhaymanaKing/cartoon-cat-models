const { Router } = require('express');
const Cat = require('../models/cat');

module.exports = Router()
  .get('/:id', async(req, res) => {
    const id = req.params.id;
    const matchingCat = await Cat.getById(id);
    res.json(matchingCat); 
  })  
  .get('/', async (req, res) => {
    const dataCats = await Cat.getAll();
    const finalData = dataCats.map(({ id, name }) => {
      return{
        id,
        name
      };
    });
    res.json(finalData);
  }) ;
