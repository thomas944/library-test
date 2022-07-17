require('dotenv').config();


const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')   //set view engine
app.set('views', __dirname + '/views')  //views come from view directory
app.set('layout', 'layouts/layout')  
app.use(expressLayouts)  //set layout
app.use(express.static('public'))  //style sheet, images, json files

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to Mongoose'))


app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)