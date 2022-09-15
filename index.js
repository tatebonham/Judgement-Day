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

// Get /
app.get('/', (req, res)=>{
    res.render('home.ejs')
})
// Get /classes
app.get('/classes', async (req, res)=>{
    try{
        const url =  'https://www.dnd5eapi.co/api/classes'
        const fetch = await axios.get(url)
    
        res.render('info/classes.ejs',{classes: fetch.data.results})
    }catch(err){
        console.warn(err)
    }
})
// Get /races
app.get('/races', async (req, res)=>{
    try{
        const url =  'https://www.dnd5eapi.co/api/races'
        const fetch = await axios.get(url)
        console.log(fetch)
    
        res.render('info/races.ejs',{races: fetch.data.results})
    }catch(err){
        console.warn(err)
    }
    
})


app.use('/posts', require('./controllers/posts'))
app.use('/users', require('./controllers/users'))

app.listen(process.env.PORT || 3000, ()=>{console.log('Port working')})
