const express = require('express');

const bodyParser= require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: true}))



app.get('/', (req, res) => {
	console.log(__dirname)
 	res.sendFile(__dirname + '/static/index.html')
})

app.post('/quotes', (req, res) => {
	res.send(req.body)
})

app.listen(3000, function() {
	console.log('listening on 3000')
})