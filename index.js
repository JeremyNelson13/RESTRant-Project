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

app.get('/', (req,res) => {
    let place = [{
        name: 'H-THAI-ML',
        city: 'Tuscon',
        state: 'AZ',
        cusines: 'Thai, Vegetarian, Tea',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'C#ocoholics',
        city: 'Wilmington',
        state: 'NC',
        cuisines: 'Dessert, Bakery, Coffee',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Cafe Durango',
        city: 'Boston',
        state: 'MA',
        cuisines: 'Fusion, New American',
        pic: 'http://placekitten.com/250/250'
    }]
    res.render('places/index', { place })
})
app.get('*', (req,res) => {
    res.render('error404')
})

app.listen(process.env.PORT)