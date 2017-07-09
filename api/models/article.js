const mongoose = require('mongoose')
require('./init')

const articleSchema = mongoose.Schema({
  title: String,
  by: String,
  comments: Number
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article