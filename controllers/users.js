const express = require('express')
const router = express.Router()
const db = require('../models')
const crypto = require('crypto-js')
const bcrypt = require('bcrypt')
const axios = require('axios')

// Get users/new
router.get('/new',(req, res)=>{
    res.render('users/new.ejs')
})
// Post users/  redirect to users/posts
router.post('/', async (req, res)=>{
    try{
        const hashedPassword = bcrypt.hashSync(req.body.password, 12)
        const [newUser, created] = await db.user.findOrCreate({
            where:{
                email: req.body.email
            },
            defaults:{
                username: req.body.username,
                password: hashedPassword
            }
        })

        if(!created){
            console.log('user exists already')
            res.redirect('users/login?message=Please log into your account to continue.')
        }else{
            const encryptetUserId = crypto.AES.encrypt(newUser.id.toString(), process.env.ENC_SECRET)
            const encryptedUserIdString = encryptetUserId.toString()
            res.cookie('userId', encryptedUserIdString)
            res.redirect('/')
        }

    } catch(err){
        console.warn(err)
        res.send('server error')
    }
})

// Get users/login
router.get('/login', (req, res)=>{
    res.render('users/login.ejs', {
        message: req.query.message ? req.query.message : null
    })
})
// Post users/login
router.post('/login', async (req, res)=>{
    try{
        const user = await db.user.findOne({
            where: {
                email: req.body.email
            }
        })

        const noLoginMessage = 'Incorrect username or password'

        if(!user){
            res.redirect('/users/login?message='+noLoginMessage)
        } else if (!bcrypt.compareSync(req.body.password, user.password)){
            res.redirect('/users/login?message='+noLoginMessage)
        } else {
        const encryptetUserId = crypto.AES.encrypt(user.id.toString(), process.env.ENC_SECRET)
        const encryptedUserIdString = encryptetUserId.toString()
        res.cookie('userId', encryptedUserIdString)
            res.redirect('/')
        }


    }catch(err){
        console.warn(err)
        res.send('server error')
    }
})
// Get /users/logout 
router.get('/logout', (req, res)=>{
    res.clearCookie('userId')
    res.redirect('/')
})
// Get users/posts
router.get('/posts', async (req, res)=>{
    try{
        if(!res.locals.user){
            res.redirect('/users/login?message=You must authenticate before you are authorized to view this resource.')
    
        } else {
            const urlClass =  'https://www.dnd5eapi.co/api/classes'
            const classes = await axios.get(urlClass)
            const urlRace =  'https://www.dnd5eapi.co/api/races'
            const races = await axios.get(urlRace)

            const posts = await db.post.findAll({
                where: {
                    userId: res.locals.user.id
                }
            })
    
            res.render('users/posts.ejs', {
                posts: posts,
                user: res.locals.user,
                classes: classes.data.results,
                races: races.data.results
            })
        }
    }catch(err){
        console.warn(err)
    }
    console.log(res.locals.user)
})



module.exports = router