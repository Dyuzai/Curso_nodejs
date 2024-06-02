const express = require('express')
const exphbl = require('express-handlebars')

const app = express()
const hbs = exphbl.create({
    extname: 'hbs'
})

const dbPosts = []

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './src/views')

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static('src/public'))


app.get('/posts', (req, res) => {
    res.render('posts')
})

app.get('/post/create', (req, res) => {
    const name = req.body.nome

    const post = {
        name
    }

    dbPosts.push(post)
    res.redirect('/posts')
})

app.get('/post', (req, res) => {
    res.render('post')
})

