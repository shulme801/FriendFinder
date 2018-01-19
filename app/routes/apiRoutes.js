// Dependencies
var friends = require('../data/friends.js');

// Export the function
module.exports = function(app) {

    // Sets the get for the api/friends route
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // Set the post for the api/friends route
    app.post('/api/friends', function(req, res) {
    		// Set variables only needed for the post
        var lowestDifference = 50;
        var matchName = '';
        var matchPhoto = '';

        // For-each loop that processes each "friend" in the friends data structure.
        // The friend's answers to each question are compared, one at a time, to the user's answers.
        friends.forEach(function(friend) {
        		// Variables for comparing matches
            var matchedScoresArray = [];
            var currentDifference = 50;

            // Function to assist in the addition reduce() below
            function add(total, num) {
                return total + num;
            }

            // This loops through each item of the scores arrays
            // It subtracts the friend's score from that of the user, sets it to its absolute value, and pushes the 
            // new value to the matchedScoresArray
           
            
            for (var i = 0; i < friend.scores.length; i++) {
                matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));

            }

            // This stmt sums up the values in matchedScoresArray and stores that single value into totalDifference
            currentDifference = matchedScoresArray.reduce(add, 0);
            
            // If the above value is smaller than the previous difference...
            if (currentDifference < lowestDifference) {
            		// Set it as the previous difference...
                lowestDifference = currentDifference;
                // And save off the matching friend and photo
                matchName = friend.name;
                matchPhoto = friend.photo;
            }
        });
        // Once we've looked at the scores for all the friends, the match with the least difference will remain,
        // and that data will be sent as a json object back to the client
        res.json({
            name: matchName,
            photo: matchPhoto
        });

        // This push adds the new users sent data object to friends.js
        friends.push(req.body);
    });
}
