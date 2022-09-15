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
router.post('/', (req, res)=>{
    res.send('creating post')
})
// Get posts/:id
router.get('/:id', (req, res)=>{
    res.render('posts/show.ejs')
})
// Get posts/edit/:id
router.get('/edit/:id', (req, res)=>{
    res.render('posts/edit.ejs')
})
// Put posts/:id  redirect to posts/:id
router.put('/:id', (req, res)=>{
    res.send('editing post')
})
// Delete posts/:id
router.delete('/:id', (req, res)=>{
    res.send('deleting post')
})
// Post /posts/:id  create new comment at posts id
router.post('/:id', (req, res)=>{
    res.send('creating comment')
})
// Delete /posts/:id  Delete comment on posts id
router.delete('/:id', (req, res)=>{
    res.send('deleting comment')
})

module.exports = router