const router = require('express').Router();
const episodes = require('../endpoints/episodes');

router.get('/', async (req, res) => {
  try {
    res.json(episodes);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
