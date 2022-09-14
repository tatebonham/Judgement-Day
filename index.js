require('dotenv').config()
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const axios = require('axios')
const app = express()
const db = require('./models')

app.set('view engine', 'ejs')


app.use(express.static('static'))
app.use(express.urlencoded({extended: false}))
app.use(ejsLayouts)
app.use(require('morgan')('dev'))

app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.get('/classes', (req, res)=>{
    res.render('info/classes.ejs')
})

app.get('/races', (req, res)=>{
    res.render('info/races.ejs')
})

// app.use('/posts', require('./controllers/posts'))
// app.use('/users', require('./controllers/users'))

app.listen(process.env.PORT || 3000, ()=>{console.log('Port working')})
