const express = require('express')
const morgan = require('morgan')

const app = express()

/* Setting the port to 3000. */
app.set('port', process.env.PORT || 3000)

/* A middleware that logs all the requests to the console. */
app.use(morgan('dev'))

/* A middleware that parses the body of the request and makes it available in the req.body property. */
app.use(express.json())

/* Telling the app to use the user-router.js file. */
app.use('/api', require('./src/router/user-router'))

module.exports = app