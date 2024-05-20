const _ = require('lodash')
const express = require('express')
const cors = require('cors')

const Boot =  require('./application/boot')


const app = express()
app.use(express.json())
app.use(cors())
const port = 5001

// Error handling middleware
app.use((err, req, res, next) => {
  // Set the response status based on the error or default to 500
  res.status(err.status || 500)

  // Send JSON response with error message
  res.json({
    error: {
      message: err.message
    }
  })
})


app.all('*', async (req, res) => {
  let result = {}
  try {
    payload = _.get(req, 'body', {})
    result = await Boot.invoke(payload)
    _.set(result, 'engine', 'express')
  } catch (error) {
    result = error.stack
  }
  return res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})