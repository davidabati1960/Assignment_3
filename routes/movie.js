let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect my router with the movie model
let Movie = require('../models/movie');

/* Read operation - GET all movies */
router.get('/', async  (req, res, next) => {
    try{
        const MovieList = await Movie.find();
        res.render("Movies/list",{
            title: "Movies",
            MovieList: MovieList
        })
    }
    catch(err){
        console.log(err);
        res.render("Movies/list",{
            error: "Error on Server"
    })
    }
})

/* Create operation - POST a new movie */

/* Update operation - PUT an existing movie  */

/* Delete operation - DELETE an existing movie  */