var express = require('express');
var passport = require('../passport');

var router = express.Router();

router.get('/fb', (req, res, next) => {
    if (Object.prototype.hasOwnProperty.call(req.query, 'mobile')) {
        res.cookie('mobile', 1);
    }

    return passport.authenticate('facebook')(req, res, next);
});
router.get('/fb/cb', (req, res, next) => passport.authenticate('facebook', (err, user, info) => {
    if (err) {
        return next(err);
    }

    return res.redirect('/');
})(req, res, next));


module.exports = router;
