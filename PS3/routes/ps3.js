const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.render('ps3', {string:"Hello World!"});
    })
    .post((req, res, next) => {
        let returnString = req.body.string;
        const postStr = {OriginalString: returnString, OriginalStringLength: returnString.length};
        res.render('ps3', postStr);
    });

module.exports = router;