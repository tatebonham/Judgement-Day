const express = require('express')
const router = express.Router()
const db = require('../models')
const crypto = require('crypto-js')
const bcrypt = require('bcrypt')

router.get('/new',(req, res)=>{
    res.render('users/new.ejs')
})

router.get('/login', (req, res)=>{
    res.render('users/login.ejs')
})

router.get('/posts', (req, res)=>{
    res.render('users/posts.ejs')
})

module.exports = router