const express = require('express')
const exhbs = require('express-handlebars')
const movieList = require('./movies.json')
const app = express()
const port = 3000

app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { movies: movieList.results })
})

app.get('/movies/:movie_id', (req, res) => {
  const movie = movieList.results.find(movie => movie.id.toString() === req.params.movie_id)
  res.render('show', {movie})
})

app.listen(port, () => {
  console.log(`Express is listening to http://localhost:${port}`)
})