const mongoose = require('mongoose');

//define a schema for the Game model

const gameSchema = new mongoose.Schema({
    title: { type: String, required: 'You need a title'},
    publisher: { type: String, required: 'You need a publisher'},
    image: { type: String, required: 'You need an image URL'},
    year: { type: Number}

});

// make class public

module.exports = mongoose.model('Game', gameSchema);