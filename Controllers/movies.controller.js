require('dotenv').config();
const axios = require('axios');
const Movie = require('../Models/movie.model')

const movieInfo = {};
const movieController = (req, res) => {
  let inputUser = req.query.query;
  let movieKey = process.env.MOVIE_API_KEY;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&query=${inputUser}`;
  if (movieInfo[inputUser] !== undefined) {
    console.log('get from Memory');
    res.send(movieInfo[inputUser]);
  } else {
    axios.get(url).then(result => {
      const movieArray = result.data.results.map(item => {
        return new Movie(item);
      });
      movieInfo[inputUser] = movieArray;
      res.send(movieArray);
    })
    .catch ((error) => {
  res.send(`there is an error in getting the data => ${error}`);
    })
}
}
module.exports = movieController;