const express = require('express')
const router = express.Router()
const db = require('../models')

// Get posts/
router.get('/', (req, res)=>{
    res.render('posts/main.ejs')
})
// Get posts/new
router.get('/new', (req, res)=>{
    res.render('posts/new.ejs')
})
// Post posts/  redirect to posts/

// Get posts/:id
router.get('/:id', (req, res)=>{
    res.render('posts/show.ejs')
})
// Get posts/edit/:id
router.get('/edit/:id', (req, res)=>{
    res.render('posts/edit.ejs')
})
// Put posts/:id  redirect to posts/:id

// Delete posts/:id

// Post /posts/:id  create new comment at posts id

// Delete /posts/:id  Delete comment on posts id


module.exports = router