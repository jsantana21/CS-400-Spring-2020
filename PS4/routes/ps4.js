var express = require('express');
var router = express.Router();

//Weather Unlocked API call

//Code generated from Postman
var request = require('request');
var options = {
    'method': 'GET',
    //API data on BU's zipcode: 02215
    'url': 'http://api.weatherunlocked.com/api/current/us.02215?app_id=2f7f2116&app_key=2b1a7e9e890732c6c5aa5b8b77714fb0',
    // I didn't bother hiding my APP ID and API key this time since my Github repo is private so only the grader and I can see it :P
    'headers': {
    }
};

let api_data;
request(options, function (error, response) {
    if (error) throw new Error(error);
    api_data = response.body;
    console.log(response.body);
});

router.route('/')
    .post((req, res, next) => {
        res.render('ps4',{
            weather_data: api_data
        });
    });

module.exports = router;