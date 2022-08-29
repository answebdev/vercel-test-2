const router = require('express').Router();
const season1 = require('../endpoints/season1');

router.get('/', async (req, res) => {
  try {
    res.json(season1);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
