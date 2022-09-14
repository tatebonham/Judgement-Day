const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req, res)=>{
    res.render('posts/main.ejs')
})

router.get('/new', (req, res)=>{
    res.render('posts/new.ejs')
})

router.get('/:id', (req, res)=>{
    res.render('posts/show.ejs')
})

router.get('/edit/:id', (req, res)=>{
    res.render('posts/edit.ejs')
})


module.exports = router