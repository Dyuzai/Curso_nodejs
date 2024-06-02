const express = require('express')
const exphbl = require('express-handlebars')

const app = express()
const hbs = exphbl.create({
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './src/views')

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static('src/public'))

app.get('/user/all', (req, res) => {
    const users = [
        {
            name: 'Diego',
            email: 'diego@gmail.com'
        },

        {
            name: 'Endryw',
            email: 'endryw@gmail.com'
        }
        
    ]
})


app.get('/user', (req, res) => {

    const user = {
        name: 'Diego',
        email: 'diego@gmail.com'
    }

    const auth = false

    res.status(200).render('user', { user, auth })
})

app.get('/', (req, res) => {

    try {
        res.status(200).render('home')
    } catch (error) {
        console.error(error)
    }
})

app.get('/contatos/:id', (req, res) => {

    const id = req.params.id

    res.status(200).render('users', {id})
})

app.get('/contato', (req, res) => {
    res.status(200).render('contato')
})

app.listen(3000)