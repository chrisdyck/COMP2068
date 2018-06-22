const Game = require('../models/Game');

exports.getGames = (req, res) => {
    Game.find((err, games) => {
        if (err) {
            res.render('error');
        } else {
            res.render('games', { title: 'All games', games });
        }
    });
};