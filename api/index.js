const episodes = require('../routes/episodes');
const season1 = require('../routes/season1');
const season2 = require('../routes/season2');
const season3 = require('../routes/season3');
const season4 = require('../routes/season4');
const season5 = require('../routes/season5');

const app = require('express')();

const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/api/episodes', episodes);
app.use('/api/season1', season1);
app.use('/api/season2', season2);
app.use('/api/season3', season3);
app.use('/api/season4', season4);
app.use('/api/season5', season5);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
