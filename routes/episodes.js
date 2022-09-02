const router = require('express').Router();
const episodes = require('../endpoints/episodes');

const cache = require('../api/routeCache');

// Get all episodes
router.get('/', cache(300), async (req, res) => {
  try {
    res.json(episodes);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

// Get by episode id (note '==' instead of '===' since the id is a number and not a string)
router.get(`/:id`, cache(300), (req, res) => {
  let items = episodes;
  let data = items.find((item) => item.id == req.params.id);
  res.json(data);
});

module.exports = router;
