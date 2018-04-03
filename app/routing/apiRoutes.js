var users = require('../data/friends');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(users);
    });
    app.post('/api/friends', function(req, res) {
        var userInput = req.body;
        users.push(userInput);
        res.json(users);

        for(var i=0; i<users.length; i++) {
            var scoresArray = users[i].scores;
            var sum = eval(scoresArray.join('+'));
        }
        
    });
};