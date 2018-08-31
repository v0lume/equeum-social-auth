var passport = require('passport');
var passportFb = require('passport-facebook');

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new passportFb.Strategy({
        clientID: '1510248652410278',
        clientSecret: 'f9182478d83b0149b5394fed8103830d',
        callbackURL: 'http://localhost:3000/auth/fb/cb',
        profileFields: ['id', 'email', 'first_name', 'last_name', 'middle_name', 'displayName', 'birthday', 'gender'],
        scope: ['email', 'public_profile'],
    }, processAuth
));

function processAuth(access_token, refresh_token, params, profile, done) {
    process.nextTick(function() {
        console.log(profile);

        done(null, profile);
    });
};

module.exports = passport;
