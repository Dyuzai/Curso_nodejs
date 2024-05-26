const express = require ('express');
const path = require('path')
const app = express();
const port = 5000;

const rotaContato = require('./routes/contato')
const basePath = path.join(__dirname, 'src/pages/')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('src/public'));

app.use('/contato', rotaContato)

app.get('/', (req, res) => {
    res.status(200).sendFile(`${basePath}/index.html`);
});

app.use('/', (req, res) =>{
    res.status(404).sendFile(`${basePath}/404.html`)
});


app.listen(port, () => {
    console.log('Deu bom')
})