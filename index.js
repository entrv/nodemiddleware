const config = require('config');
const logger = require('./logger');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

//use set DEBUG=app:* or set DEBUG=app:startup,app:db
//DEBUG=app:* nodemon index.js
const startupDebugger = require('debug')('app:startup');
//const dbDebugger = require('debug')('app:db');

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app_env: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(express.static('public'));
app.use(helmet());

//config
console.log('app name' + config.get('name'));
console.log('mail server' + config.get('mail.host'));
console.log('password server' + config.get('mail.password'));
if (app.get('env') == 'development') {
	app.use(morgan('tiny'));
	startupDebugger('morgan stat');
}

//db work
dbDebugger('connected to database....');

app.get('/', (req, res) => {
	res.send('hellow');
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('start' + port));
