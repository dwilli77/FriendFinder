let friends = require('../data/friends');

module.exports = function(app) {

    app.get('/api/friends', function(req,res){
        res.json(friends);
    });

    app.post('/api/tables', function(req,res) {
        friends.push(req.body);
        let userScoresArr = req.body.scores;
        //send back user's match
    })
}