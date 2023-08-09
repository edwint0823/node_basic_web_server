require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('public'))

const dataView = {nombre: 'Edwin Tobias Ariza', titulo: 'curso de node'}

app.get('/generic', (req, res) => {
    res.render('generic', dataView)
})
app.get('/elements', (req, res) => {
    res.render('elements', dataView)
})

app.get('/', (req, res) => {
    res.render('home', dataView)
})
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})