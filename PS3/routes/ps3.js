const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.render('ps3', {string:"Hello World!"});
    })
    .post((req, res, next) => {
        res.render('ps3', {OriginalString: req.body.string, OriginalStringLength: req.body.string.length});
    });

module.exports = router;
