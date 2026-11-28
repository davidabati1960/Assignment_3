// Import Mongoose 
const {default: mongoose, Collection} = require('mongoose');

// Define the schema structure for a Movie document in MongoDB
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

module.exports = mongoose.model('Movie', movieModel);