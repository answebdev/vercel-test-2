const router = require('express').Router();
const season1 = require('../endpoints/season1');

const cache = require('../api/routeCache');

// Get all episodes of season
router.get('/', cache(300), async (req, res) => {
  try {
    res.json(season1);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

// Get by episode id
router.get(`/:id`, cache(300), (req, res) => {
  let items = season1;
  let data = items.find((item) => item.id == req.params.id);
  res.json(data);
});

// Get single episode
// router.get(`/:episode`, (req, res) => {
//   let items = season1;
//   let data = items.find((item) => item.episode === req.params.episode);
//   res.json(data);
// });

// See (toward beginning, 3:30): https://www.youtube.com/watch?v=bHG2MXmtldk

module.exports = router;
