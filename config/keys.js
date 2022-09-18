//keys.js - logic needed to figure out what set of credentials to return

// Heroku sets the 'NODE_ENV' value.
if (process.env.NODE_ENV === 'production') {
    //we are in production so return the production set of keys
    //we are importing and exporting the prod.js file
    module.exports = require('./prod');
} else {
    //we are in development so return the development keys.
    //we are importing and exporting the dev.js file
    module.exports = require('./dev');
}