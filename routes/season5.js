const router = require('express').Router();
const season5 = require('../endpoints/season5');

router.get('/', async (req, res) => {
  try {
    res.json(season5);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
