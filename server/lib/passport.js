var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, config) {
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        if (user) {
            done(null, user);
        } else {
            done(null, null);
        }
    });
};

