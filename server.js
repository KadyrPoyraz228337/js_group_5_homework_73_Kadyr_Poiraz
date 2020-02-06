const express = require('express');
const cors = require('cors');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();

app.use(express.json());
app.use(cors());

app.post('/encode', (req, res) => {
    res.header('Content-Type', 'text/plain');
    res.send(Vigenere.Cipher(req.body.password).crypt(req.body.value))
});

app.post('/decode', (req, res) => {
    res.header('Content-Type', 'text/plain');
    res.send(Vigenere.Decipher(req.body.password).crypt(req.body.value))
});

app.listen(5000, () => {
    console.log('live in host 5000');
});
