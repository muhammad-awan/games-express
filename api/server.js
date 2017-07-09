const express = require('express')
const bodyParser = require('body-parser')
const articlesRouter = require('./routes/articles')
const app = express()

app.use(bodyParser.json())
app.use(articlesRouter)

const port = 5000
app.listen(port, () =>{
  console.log(`server started on port ${port}`)
})