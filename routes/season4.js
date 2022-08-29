const router = require('express').Router();
const season4 = require('../endpoints/season4');

// Get all episdoes of season
router.get('/', async (req, res) => {
  try {
    res.json(season4);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

// Get single episode
router.get(`/:episode`, (req, res) => {
  let items = season4;
  let data = items.find((item) => item.episode === req.params.episode);
  res.json(data);
});

module.exports = router;
