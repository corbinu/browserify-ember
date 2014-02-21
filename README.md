Browserify Ember
=================
An attempt to demonstrate how to browserify Ember.js

To install simply run:

`sudo npm install`

`./setup.sh`

To test simply run:

`browserify . -d -o bundle.js`

This version does not work but there there is a branch 'shim-2.x' based on [browserify-shim](https://github.com/thlorenz/browserify-shim) v2 that does.

An issue for making this work with browserify shim is located [here](https://github.com/thlorenz/browserify-shim/issues/30)