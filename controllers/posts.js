const express = require('express')
const router = express.Router()
const db = require('../models')
const axios = require('axios')

// Get posts/
router.get('/', async (req, res)=>{
    try{
        const posts = await db.post.findAll({
            include: [db.user]
        })

        res.render('posts/main.ejs', {
            posts: posts
        })
    }catch(err){
        console.warn(err)
    }
    
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
        const newPost = await db.post.create({
            name: req.body.name,
            class: req.body.class,
            race: req.body.race,
            content: req.body.content,
            userId: req.body.userId
        })
        res.redirect('/posts')
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