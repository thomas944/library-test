const express = require('express')
const router = express.Router()
const Book = require('../models/book')

router.get('/', async (req, res) =>{
    let books
    try {
        books = await Book.find().sort({ createAt: 'desc'}).limit(10).exec()
    } catch{
        books = []
    }
    res.render('index' , {
        books: books
    })  //renders the "index" view
})

module.exports = router