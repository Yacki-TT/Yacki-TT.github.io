const express = require('express');
const mainController = require('./controllers/mainController');
const assoController = require('./controllers/assoController');
const leagueController = require('./controllers/leagueController');
const summerGamesController = require('./controllers/summerGamesController');

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/association', assoController.associationPage);

router.get('/ligues', leagueController.leaguesHomePage);
router.get('/ligues/bloodbowl', leagueController.bloodbowlLeaguePage);

router.get('/summer-games', summerGamesController.summerGamesHomePage);
router.get('/summer-games/:id', summerGamesController.summerGamePage);



module.exports = router;