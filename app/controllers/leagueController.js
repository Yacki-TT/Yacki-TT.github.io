const leagueController = {

    async leaguesHomePage(req, res) {
        res.render('leaguePage');
    },

    async bloodbowlLeaguePage(req, res) {
        res.render('leagueBBPage');
    },
    
}

module.exports = leagueController;