const express = require('express')
const app = express()
const port = 3000
const db = require('knex')(require('./../knexfile.js'))
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/api/', async (req, res) => {
  const notes = await db('notes')
  res.json(notes)
})

app.post('/api/insert', async (req, res) => {

  await db('notes').insert({
    
    name: req.body.name,
    notes: req.body.notes
  })

  res.json({})
})

app.get('/api/delete', async (req, res) => {

  await db('notes').where({
    id: req.query.id
  }).del()

  res.json({})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))