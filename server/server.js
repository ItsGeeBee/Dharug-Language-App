const express = require('express');
const path = require('path');
const routes = require('./routes');
const db = require('./config/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

// GET Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use(routes);


db.once('open', () => {
  app.listen(PORT, () => {

    console.log(`App listening on port ${PORT}!`);
  });
});
