require('dotenv').config()
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const axios = require('axios')
const app = express()
const db = require('./models')
const crypto = require('crypto-js')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')

app.set('view engine', 'ejs')


app.use(methodOverride('_method'))
app.use(express.static('static'))
app.use(express.urlencoded({extended: false}))
app.use(ejsLayouts)
app.use(require('morgan')('dev'))
app.use(cookieParser())
app.use(async (req, res, next)=>{
    res.locals.myData = 'hello, fellow route'
    if(req.cookies.userId) {
        const decryptedId = crypto.AES.decrypt(req.cookies.userId.toString(), process.env.ENC_SECRET)
        const decryptedIdString = decryptedId.toString(crypto.enc.Utf8)
        const user = await db.user.findByPk(decryptedIdString)
        res.locals.user = user
    }else {
        res.locals.user = null
    }
    next()
})

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
    
        res.render('info/races.ejs',{races: fetch.data.results})
    }catch(err){
        console.warn(err)
    }
    
})


app.use('/posts', require('./controllers/posts'))
app.use('/users', require('./controllers/users'))

app.listen(process.env.PORT || 3000, ()=>{console.log('Port working')})
