const summerGamesController = {

    async summerGamesHomePage(req, res) {
        res.render('SummerGamesHomePage');
    },
    
    async summerGamePage(req, res) {
        res.render('summerGames2022Page');
    }    
}

module.exports = summerGamesController;