const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

mongoose.connect('mongodb://localhost/twitter_practice');

const Tweet = mongoose.model('Tweet', {
  text: String,
  timeStamp: Date,
  user: [
    {
      userName: String,
      userEmail: String,
      userPassword: String,
      followees: [String]
    }
  ]

});

//***********************************
// find all the tweets
//***********************************

// Tweet.find()
//   .then(function(tweets) {
//     console.log('all the tweets:', tweets);
//   })
//   .catch(function(err) {
//     console.log('reporting err', err.message);
//   });

//*******************************************************************
// Finds all the tweets belonging to all of Pigsty's followers
// (not including Pigsty's own tweets) lines 38 - 74
//*******************************************************************

// begin by finding all of the tweets
Tweet.find()
  .then(function(allTweets) {

    // find a specific tweet made by Pigsty using the tweet id
    // we do that to gain access of his followees which are stored inside the returned tweet info
    Tweet.find({ _id: "58507361856fdc168d9e4692"})
      .then(function(tweetInfo) {

        // assign all of Pigsty's followees to allFollowees variable
        var allFollowees = tweetInfo[0].user[0].followees;

        // loop through all the tweets ever made
        allTweets.forEach(function(tweet, index) {

          // assign each tweet's author to tweetUser variable
          var tweetUser = tweet.user[0].userName;

          // loop through all of pigsty's followers
          allFollowees.forEach(function(eachFollowee) {

            // check if any of Pigsty's followers has a tweet
            if (tweetUser === eachFollowee) {
              // if the tweet belongs to any of Pigsty's followers, assign the tweet to a variable
              var tweetText = tweet.text;
              // below, we console log the user and that user's tweet
              console.log('\n' + tweetUser + ' tweeted: "' + tweetText + '"');
            }
          });

        });

      })
  })
  .catch(function(err) {
    console.log('reporting err', err.message);
  });


//*******************************************************************
// Finds all the tweets belonging to all of Pigsty's followers
// (including Pigsty's own tweets) lines 82 - 121
//*******************************************************************

// begin by finding all of the tweets
Tweet.find()
  .then(function(allTweets) {

    // find a specific tweet made by Pigsty using the tweet id
    // we do that to gain access of his followees which are stored inside the returned tweet info
    Tweet.find({ _id: "58507361856fdc168d9e4692"})
      .then(function(tweetInfo) {

        // assign all of Pigsty's followees to userAndFollowees variable
        var userAndFollowees = tweetInfo[0].user[0].followees;

        // push Pigsty into the userAndFollowees array because we also want to find tweets made by him
        userAndFollowees.push(tweetInfo[0].user[0].userName);

        // loop through all the tweets ever made
        allTweets.forEach(function(tweet, index) {

          // assign each tweet's author to tweetUser variable
          var tweetUser = tweet.user[0].userName;

          // loop through all of pigsty's followers, including Pigsty himself
          userAndFollowees.forEach(function(eachFollowee) {

            // check if any of Pigsty's followers has a tweet, including himself
            if (tweetUser === eachFollowee) {
              // if the tweet belongs to Pigsty or one of his followers, assign the tweet to a variable
              var tweetText = tweet.text;
              // below, we console log the user and that user's tweet
              console.log('\n' + tweetUser + ' tweeted: "' + tweetText + '"');
            }
          });

        });

      })
  })
  .catch(function(err) {
    console.log('reporting err', err.message);
  });
