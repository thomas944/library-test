const mongoose = require('mongoose')
const Book = require('./book')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

authorSchema.pre('remove', function(callback){
  Book.find({ author: this.id}, (err, books) =>{
      if(err){
          callback(err)
      }else if (books.length > 0){
          callback(new Error('This author has books still'))
      }else{
        callback()
      }
  })
})

module.exports = mongoose.model('Author', authorSchema)