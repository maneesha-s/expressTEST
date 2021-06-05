var express = require('express');
const app = express()
const path = require('path')

app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', require('hogan-middleware').__express)

app.use(express.static(path.join(__dirname,'public')))

const indexRouter = require('./routes/index')
app.use('/',indexRouter)
// app.get('/', (req,res,next) => {
// 	res.send('Hello!')
// })
// app.get('/json',(req,res,next) =>{
// 	const data={greetings:'Print JSON'}
// 	res.json(data)
// })
// app.get('/home', (req, res, next) => {
// 	res.render('home', null)
// })
app.listen(3000)
console.log('server running in http://localhost/3000')