const express = require('express')
const router = express.Router()
const db = require('../models')
const axios = require('axios')

// Get posts/
router.get('/', (req, res)=>{
    res.render('posts/main.ejs')
})
// Get posts/new
router.get('/new', async (req, res)=>{
    try{
        const urlClass =  'https://www.dnd5eapi.co/api/classes'
        const classes = await axios.get(urlClass)
        const urlRace =  'https://www.dnd5eapi.co/api/races'
        const races = await axios.get(urlRace)

        res.render('posts/new.ejs', {
            user: res.locals.user,
            classes: classes.data.results,
            races: races.data.results
        })
    } catch(err){
        console.warn(err)
    }
})
// Post posts/  redirect to posts/
router.post('/', async (req, res)=>{
    try{
        res.send('creating post')

    } catch(err){
        console.warn(err)
    }
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