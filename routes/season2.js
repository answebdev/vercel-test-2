const router = require('express').Router();
const season2 = require('../endpoints/season2');

// Get all episdoes of season
router.get('/', async (req, res) => {
  try {
    res.json(season2);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

// Get single episode
router.get(`/:episode`, (req, res) => {
  let items = season2;
  let data = items.find((item) => item.episode === req.params.episode);
  res.json(data);
});

module.exports = router;
