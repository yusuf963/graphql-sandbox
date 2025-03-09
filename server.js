import express from 'express'

import routes from './route.js'

const app = express()

app.use((req, res, next) => {
  console.log(req.url)
  console.log(req.method)
  next()
})

app.use('/graph', routes);

app.listen(5000)