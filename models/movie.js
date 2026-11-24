const {default: mongoose, Collection} = require('mongoose');

let movieModel = mongoose.Schema({
    title:  String,
    director:String,
    releaseYear: Number,
    genre: String,
    rating:  Number
}, 
{
    Collection: "movies"
})