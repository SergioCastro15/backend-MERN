const express = require("express");
const router = express.Router();
const movieController = require("../controllers/MovieControllers");

module.exports = function() {
  router.post('/post-movie', movieController.addNewMovie);
  router.get('/get-movies', movieController.getMovies);
  router.get('/get-movie/:id', movieController.getMovie);
  router.delete('/delete-movie/:id', movieController.deleteMovie);
  router.put('/edit-movie/:id', movieController.editMovie);

  return router;
};