const router = require('express').Router();
const season2 = require('../endpoints/season2');

router.get('/', async (req, res) => {
  try {
    res.json(season2);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
