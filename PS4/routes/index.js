const express = require('express');
const router = express.Router();
const request = require('request');

//Weather Unlocked API call

//Code generated from Postman

/* GET home page. */
router.get('/', function(req, res, next) {
  const options = {
    'method': 'GET',
    //API data on BU's zipcode: 02215
    'url': 'http://api.weatherunlocked.com/api/current/us.02215?app_id=2f7f2116&app_key=2b1a7e9e890732c6c5aa5b8b77714fb0',
    // I didn't bother hiding my APP ID and API key this time since my Github repo is private so only the grader and I can see it :P
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.render('index', {API_Data: JSON.parse(response.body)})
  });
});

module.exports = router;
