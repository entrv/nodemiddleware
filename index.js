const logger = require('./logger')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger)
app.use(express.static('public'))
app.use(helmet())
app.use(morgan('tiny'))
app.get('/', (req, res) => {
	res.send('hellow')
})

app.listen(3000, () => console.log('start'))
