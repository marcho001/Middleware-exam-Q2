const express = require('express')
const app = express()
const port = 3000
const middleware = require('./middleware')

app.use(middleware)

app.get('/', (req, res, next) => {
  
  res.send('列出所有 Todo')

})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {

  setTimeout(function(){
    res.send('顯示一筆 Todo')
  },3000)
})

app.post('/', (req, res) => {
  res.send('新增一筆 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})