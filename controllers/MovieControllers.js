const Movie = require("../models/Movies");

// post request
exports.addNewMovie = async (req, res, next) => {
  console.log(req.body);
  const movie = new Movie(req.body);
  try {
    await movie.save();
    res.json({
      message: 'movie has been added successfully',
    })
  } catch(err) {
    console.log(err);
    next();
  }
};

// get movies
exports.getMovies = async (req, res, next) => {
  try{
    const movies = await Movie.find({});
    res.json(movies);
  } catch(err) {
    console.log(err);
    next();
  }
};

// get movie
exports.getMovie = async (req, res, next) => {
  try{
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
  } catch(err) {
    console.log(err);
    next();
  }
};

// delete movie
exports.deleteMovie = async (req, res, next) => {
  try {
    await Movie.findByIdAndDelete({_id: req.params.id});
    res.json({
      message: 'Movie has been deleted successfully'
    })
  } catch (err) {
    console.log(err);
    next();
  }
};

// editMovie

exports.editMovie = async (req, res, next) => {
  try {
    const movieByEdit = await Movie.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.json(movieByEdit);
  } catch (err) {
    console.log(err);
    next();
  }
};