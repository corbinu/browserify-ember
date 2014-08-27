Browserify Ember
=================

***
Please note I no longer support the idea of using Browserify.

For Ember please refer to [http://www.ember-cli.com](http://www.ember-cli.com)

For front-end packages use bower: [http://bower.io](http://bower.io)

If you need an AMD loader use this: [http://www.github.com/stefanpenner/loader.js](http://www.github.com/stefanpenner/loader.js)

If you need a ES6 module transpiler: [http://esnext.github.io/es6-module-transpiler/](http://esnext.github.io/es6-module-transpiler/)

Still need browserify? Feel free to either ask me an alternative to your specific problem

OR

Refer for the official way to use it in browserify [https://github.com/thlorenz/browserify-shim](https://github.com/thlorenz/browserify-shim)
***

An attempt to demonstrate how to browserify Ember.js

To install simply run:

`sudo npm install; bower install`

To test simply run:

`browserify . -d -o bundle.js`

This version does not work but there there is a branch 'shim-2.x' based on [browserify-shim](https://github.com/thlorenz/browserify-shim) v2 that does.

An issue for making this work with browserify shim is located [here](https://github.com/thlorenz/browserify-shim/issues/30)
