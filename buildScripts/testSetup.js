//this file isnt transpiled, so must use CommonJS and ES5

//Register babel to transpile beofre our tests run
require('babel-register')();

//Disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function() {};
