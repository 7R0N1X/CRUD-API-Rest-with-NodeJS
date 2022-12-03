require('./database')
const app = require('./app')

/* Listening to the port that is set in the app.set('port', process.env.PORT || 3000) */
app.listen(app.get('port'))
console.log('Server on port', app.get('port'))