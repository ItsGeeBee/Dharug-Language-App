const express = require("express");
const path = require("path");
const routes = require('./routes');
const db = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/build")));


// I think this should be in Routes index.js - To confirm //
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.use(routes);

// eslint-disable-next-line no-shadow, no-unused-vars
db.once('open', () => {
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${PORT}!`);
});
});