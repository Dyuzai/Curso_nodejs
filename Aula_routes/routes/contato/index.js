const express = require('express')
const path = require('path')

const rotaContato = express.Router()
const basePath = path.join(__dirname, '../../src/pages')

rotaContato.post('/save', (req, res) =>{
    const nome = req.body.nome;
    const telefone = req.body.telefone;

    res.redirect(`/`);

    console.log(nome);
    console.log(telefone);
});

rotaContato.get('/', (req, res) => {
    res.status(200).sendFile(`${basePath}/contato.html`)
});

module.exports = rotaContato;