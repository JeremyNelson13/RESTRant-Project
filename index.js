require('dotenv').config()
const express = require('express')
const app = express ()

//defines view engine, in this case jsx
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))
//res.send must be changed to res.render to work with the view engine
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)