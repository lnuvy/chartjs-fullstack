var express = require('express') // express 관련 모듈 불러오기
var app = express()
var cors = require('cors') // cors 설정

var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json()) // 파싱

app.get('/hello', (req, res) => {
  res.send('hello world!')
})

app.use( (req, res, next) => {
  res.status(404).send('Sorry 404')
})

app.use( (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("broken on server")
})

app.listen(5000, () => {
  console.log('server running Test...');
})