const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Cat = require('../lib/models/cat');


describe('cats routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/cats should return a list of cats', async () => {
    const res = await request(app).get('/cats');
    const cats = await Cat.getAll();
    const expected = cats.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
    expect(res.body).toEqual(expected);
  });
  
  it('/cats/:id should return cat detail', async () => {
    const res = await request(app).get('/cats/1');
    const cat = await Cat.getById(1);
    expect(res.body).toEqual(cat);
  });

  afterAll(() => {
    pool.end();
  });
});
