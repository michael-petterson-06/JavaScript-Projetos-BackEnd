const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
const cors = require('cors');

const PORT = 3001;

app.use(cors());

app.use('/tasks', routes.Tasks);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

