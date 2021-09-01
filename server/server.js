const express = require('express');
const cors = require('cors');
const { verifyToken } = require('./firebase-service');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send({data: 'hello'});
});

app.get('/protected', verifyToken, (req, res) => {
    res.send({data: 'hit the endpoint'});
})


app.listen(5000);