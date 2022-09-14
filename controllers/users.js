const express = require('express')
const router = express.Router()
const db = require('../models')
const crypto = require('crypto-js')
const bcrypt = require('bcrypt')

router.get('/new',(req, res)=>{
    res.render('users/new.ejs')
})




module.exports = router