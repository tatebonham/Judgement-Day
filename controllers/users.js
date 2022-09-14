const express = require('express')
const router = express.Router()
const db = require('../models')
const crypto = require('crypto-js')
const bcrypt = require('bcrypt')

// Get users/new
router.get('/new',(req, res)=>{
    res.render('users/new.ejs')
})
// Post users/  redirect to users/posts

// Get users/login
router.get('/login', (req, res)=>{
    res.render('users/login.ejs')
})
// Get users/posts
router.get('/posts', (req, res)=>{
    res.render('users/posts.ejs')
})



module.exports = router