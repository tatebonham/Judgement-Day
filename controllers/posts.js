const express = require('express')
const router = express.Router()
const db = require('../models')
const axios = require('axios')
const methodOverride = require('method-override')

router.use(methodOverride('X-HTTP-Method-Override'))
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
router.get('/:id', async (req, res)=>{
    try{
      const onePost = await db.post.findOne({
        where:{
            id: req.params.id
        }, 
        include: [db.user, db.comment]
      })

        res.render('posts/show.ejs',{
            onePost: onePost,
            postId: req.params.id,
            userId: res.locals.user.id
        })
    } catch(err){
        console.warn(err)
    }

    res.render('posts/show.ejs')
})
// Get posts/edit/:id
router.get('/edit/:id', async (req, res)=>{
    try{
        const urlClass =  'https://www.dnd5eapi.co/api/classes'
        const classes = await axios.get(urlClass)
        const urlRace =  'https://www.dnd5eapi.co/api/races'
        const races = await axios.get(urlRace)
        const onePost = await db.post.findOne({
            where:{
                id: req.params.id
            }, 
            include: [db.user]
          })

        res.render('posts/edit.ejs', {
            onePost: onePost,
            postId:  req.params.id,
            user: res.locals.user,
            classes: classes.data.results,
            races: races.data.results
        })
    } catch(err){
        console.warn(err)
    }

})
// Put posts/:id  redirect to posts/:id
router.put('/:id', async (req, res)=>{
    try{
        console.log(req.body)
        const newPost = await db.post.update({
            name: req.body.name,
            class: req.body.class,
            race: req.body.race,
            content: req.body.content,
            
        }, {where:{
            id: req.params.id
        }})
        res.redirect(`/posts/${req.params.id}`)
    }catch(err){
        console.warn(err)
    }
})
// Delete posts/:id
router.delete('/:id', async (req, res)=>{
    try{
        const deleteRow = await db.post.destroy({
            where:{
                id: req.params.id
            }
        })
        const deleteComments = await db.comment.destroy({
            where:{
                postId: req.params.id
            }
        })
        res.redirect('/posts')
    }catch(err){
        console.warn(err)
    }
})
// Post /posts/:id  create new comment at posts id
router.post('/:id/comments', async (req, res)=>{
    try{
        const newComment = await db.comment.create({
          content: req.body.content,
          userId: req.body.userId,
          postId: req.body.postId
        })
        res.redirect(`/posts/${req.params.id}`)
    } catch(err){
        console.warn(err)
    }
})
// Delete /posts/:id  Delete comment on posts id
router.delete('/:id/comments', async (req, res)=>{
    try{
        const deleteComments = await db.comment.destroy({
            where:{
                id: req.body.commentId
            }
        })
        res.redirect(`/posts/${req.params.id}`)
    }catch(err){
        console.warn(err)
    }
})

module.exports = router