const express = require('express')
const app = express()
const cors = require("cors");
const port = 3000
const notFound = require('./middlewares/notFound')
const errorsHandler = require('./middlewares/errorsHandler')
const postsRouter = require('./routers/posts')


app.use(express.static('public'))
app.use(cors({
  origin: 'http://localhost:5173' 
  }));
//registro il Body-parser
app.use(express.json());

app.use(`/bacheca`, postsRouter)


app.get('/bacheca', (req, res) => {
  res.json(posts);
});


//middleware 404
app.use(notFound)
//middleware 500
app.use(errorsHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})