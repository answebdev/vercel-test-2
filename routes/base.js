// const router = require('express').Router();

// router.get('/', async (req, res) => {
//   res.send(`
//   <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
//     <title>Document</title>
// </head>

// <body style="background-color:tomato;color:#ffffff;font-family: 'Montserrat', sans-serif;">
//     <h1>This is the BASE URL page</h1>
// </body>

// </html>
//   `);
// });

// module.exports = router;

const router = require('express').Router();
//const base = require('../endpoints/base.html');
const path = require('path');

// router.get('/', async (req, res) => {
//   try {
//     res.json(base);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send('Server error');
//   }
// });
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/base.html'));
});
module.exports = router;
