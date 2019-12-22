const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

app.get('/', (req, res) => {
    res.send({ host : 'root' });
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})