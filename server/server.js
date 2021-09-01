const express = require('express');
const cors = require('cors');
const { verifyToken, verifyTokenExists } = require('./firebase-service');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send({data: 'hello'});
});

app.get('/verify-token', (req, res) => {
    verifyTokenExists(req, res);
})

app.get('/protected', verifyToken, (req, res) => {
    res.send({data: 'hit the endpoint'});
})


app.listen(5000);