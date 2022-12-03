const mongoose = require('mongoose')

/* Connecting to the MongoDB database. */
mongoose.connect('mongodb://127.0.0.1/contacts')
    .then(db => console.log('Successful connection to MongoDB database'))
    .catch(err => console.log(err))