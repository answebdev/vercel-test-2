const router = require('express').Router();
// const episodes = require('../endpoints/episodes');
// const base = require('./base.html');

router.get('/', async (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <title>Document</title>
</head>

<body style="background-color:tomato;color:#ffffff;font-family: 'Montserrat', sans-serif;">
    <h1>This is the BASE URL page</h1>
</body>

</html>
  `);
});

module.exports = router;
