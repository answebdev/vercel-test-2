const router = require('express').Router();
const season1 = require('../endpoints/season1');

// Get all episdoes of season
router.get('/', async (req, res) => {
  try {
    res.json(season1);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

// Get single episode
router.get(`/:episode`, (req, res) => {
  let items = season1;
  let data = items.find((item) => item.episode === req.params.episode);
  res.json(data);
});

// See (toward beginning, 3:30): https://www.youtube.com/watch?v=bHG2MXmtldk

module.exports = router;
