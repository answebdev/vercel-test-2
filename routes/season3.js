const router = require('express').Router();
const season3 = require('../endpoints/season3');

router.get('/', async (req, res) => {
  try {
    res.json(season3);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
