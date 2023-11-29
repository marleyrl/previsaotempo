require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080
app.listen(port)
app.use(express.static("."));
 /*app.get('/:filename.js', (req, res) => {
   res.sendFile(path.join(__dirname, `${req.params.filename}.js`))
    })
  app.get('/*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })*/