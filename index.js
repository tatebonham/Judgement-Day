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
    res.send('Hello from the other siiiide!')
})

app.listen(process.env.PORT || 3000)
