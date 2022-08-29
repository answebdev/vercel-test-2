const router = require('express').Router();
const season4 = require('../endpoints/season4');

router.get('/', async (req, res) => {
  try {
    res.json(season4);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
