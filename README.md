Browserify Ember
=================
An attempt to demonstrate how to browserify Ember.js

To install simply run:

`sudo npm install; bower install`

To test simply run:

`browserify . -d -o bundle.js`

This version does not work but there there is a branch 'shim-2.x' based on [browserify-shim](https://github.com/thlorenz/browserify-shim) v2 that does.

An issue for making this work with browserify shim is located [here](https://github.com/thlorenz/browserify-shim/issues/30)

## FIX

Don't use bower!! It puts invalid `package.json`s. So now if `Ember` says `require('jquery')`, `browserify` will look
inside `ember/package.json` for a `browser` field. That is not defined, so the `jquery` alias doesn't get picked up
since you defined it in the root `package.json`.

`browserify-shim` is a bit smarter and will look one `package.json` higher in the chain, but in these cases where
modules `require` things inside a bower package things break. I also don't think that `browserify` will nor should ever
*fix* this, since it's actually `bower` that is just damn broken.

Ember `requires` jquery, but doesn't have it as a dependency that tells `browserify` or anyone else trying to resolve
this where it is - and that is just wrong.

## Workaround

Remove all `package.json` files inside `bower_components`, i.e.: 

    rm -rf `find ./bower_components -name package.json -print`

I did this for both the `npm start` and `npm test` scripts.

So either one will now generate your bundle and launch a page.
`handlebars` and `jquery` are now loaded (visible in the sources tab).

Ember still gives an error regarding handlebars versioning, but that seems to be a separate issue.
