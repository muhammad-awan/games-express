const express = require('express')
const Article = require('../models/article')

const router = express.Router()

router.get('/articles', (req, res) => {
  Article.find()
    .then(articles => {
      res.json(articles)
    })
    .catch( (error) => {
      res.status(500).json({ error: error })
    })
})

router.get('/articles/:id', (req, res) => {
  const id = req.params.id
  Article.findById(id)
    .then(article => {
      res.json(article)
    })
    .catch((error) => {
      res.status(404).json({ error: error })
    })
})

router.post('/articles', (req, res) => {
  const newArticle = req.body
  Article.create(newArticle)
    .then(article => {
      res.json(article)
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})

router.put('/articles/:id', (req, res) => {
  const id = req.params.id
  const updatedArticle = req.body
  Article.findByIdAndUpdate(id, updatedArticle)
    .then( article => {
      res.json(article)
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})

router.delete('/articles/:id', (req, res) => {
  const id = req.params.id
  Article.findByIdAndRemove(id)
    .then( article => {
      res.json(article)
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})

module.exports = router