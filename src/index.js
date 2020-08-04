require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()


// Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

//Middlewares
app.use(morgan('dev'))

// Routes
app.use(require('./routes/index'))

//Static files
app.use(express.static(path.join(__dirname, 'public')))

// Listening the server
app.listen(app.get('port'), () => {
  console.log('Server listen on', app.get('port'))
})
