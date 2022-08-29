const router = require('express').Router();
const season4 = require('../mock/season4');

// router.get('/', function (req, res) {
//   res.send('Users Index Page');
// });

// router.get('/episodes', function (req, res) {
//   res.send('Users List Page');
// });
router.get('/', async (req, res) => {
  try {
    res.json(season4);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
