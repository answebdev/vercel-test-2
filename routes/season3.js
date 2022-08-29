const router = require('express').Router();
const season3 = require('../mock/season3');

// router.get('/', function (req, res) {
//   res.send('Users Index Page');
// });

// router.get('/episodes', function (req, res) {
//   res.send('Users List Page');
// });
router.get('/', async (req, res) => {
  try {
    res.json(season3);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
