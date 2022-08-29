// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router(require('./mock/db.js')());
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3000;

// server.use(middlewares);
// server.use(router);

// server.listen(port);

const express = require('express');
// const season = require('./mock/endpoints');

const episodes = require('./routes/episodes');
const season1 = require('./routes/season1');
const season2 = require('./routes/season2');
const season3 = require('./routes/season3');
const season4 = require('./routes/season4');
const season5 = require('./routes/season5');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

// app.use('/api/seasons', season);
app.use('/api/episodes', episodes);
app.use('/api/season1', season1);
app.use('/api/season2', season2);
app.use('/api/season3', season3);
app.use('/api/season4', season4);
app.use('/api/season5', season5);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
