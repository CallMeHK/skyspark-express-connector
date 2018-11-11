const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const calls = require('./routes/api/calls');

app.use('/api/calls', calls)

const port = process.env.PORT || 666;

app.listen(port, () => console.log(`Server started on port ${port}`));