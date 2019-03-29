const logger = require('./logger')
const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger)
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.send('hellow')
})

app.listen(3000, () => console.log('start'))
