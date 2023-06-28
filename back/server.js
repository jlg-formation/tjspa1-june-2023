const express = require('express')
const serveIndex = require('serve-index')
const app = express()

const publicDir = '.'

app.use((req, res, next)=>{
  console.log('req: ', req.url, req.method);
  next()
})

app.use(express.static(publicDir))
app.use(serveIndex(publicDir, {icons: true}))

app.listen(3000, ()=>{
  console.log('Server started on port 3000');
})