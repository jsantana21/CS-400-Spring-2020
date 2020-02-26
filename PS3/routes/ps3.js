const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.render('ps3', {string:"Hello World!"});
    })
    .post((req, res, next) => {
        const postString = {OriginalString: req.body.string, OriginalStringLength: req.body.string.length};
        res.render('ps3', postString);
    });

module.exports = router;
