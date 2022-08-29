const express = require('express');
const router = express.Router();
const episodes = require('./db');

// GET Products
router.get('/', async (req, res) => {
  try {
    res.json(episodes);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
