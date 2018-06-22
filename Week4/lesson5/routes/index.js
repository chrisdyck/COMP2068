var express = require('express');
var router = express.Router();

const gamesController = require('../controllers/gamesController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/games', gamesController.getGames);

module.exports = router;
