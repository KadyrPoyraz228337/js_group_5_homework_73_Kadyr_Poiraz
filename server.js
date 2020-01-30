const express = require('express');
const cors = require('cors');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.header('Content-Type', 'text/plain');
    res.send(`"Home page"\n`)
});

app.get('/:value', (req, res) => {
    res.header('Content-Type', 'text/plain');
    res.send(`${req.params.value}\n`)
});

app.get('/encode/:value', (req, res) => {
    res.header('Content-Type', 'text/plain');
    res.send(Vigenere.Cipher('password').crypt(req.params.value))
});

app.get('/decode/:value', (req, res) => {
    res.header('Content-Type', 'text/plain');
    res.send(Vigenere.Decipher('password').crypt(req.params.value))
});

app.listen(8000, () => {
    console.log('live in host 8000');
});
