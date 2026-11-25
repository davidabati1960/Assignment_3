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

/* Create/Add Operation */
/* Get Operation */
router.get('/add', async (req, res, next) => {});
/* Post Operation */
router.post('/add', async (req, res, next) => {});
/* Update Operation */
router.get('/edit/:id', async (req, res, next) => {});
/* Post Operation */
router.post('/edit/:id', async (req, res, next) => {});
/* Delete Operation */
router.get('/delete/:id', async (req, res, next) => {});

module.exports = router;