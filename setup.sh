#! /bin/bash

mkdir Vendor

cd Vendor

git clone git://github.com/components/ember.git ember
cd ember
git checkout tags/1.3.2

cd ../
git clone git://github.com/components/handlebars.js.git handlebars
cd handlebars
git checkout tags/v1.3.0

cd ../
git clone git://github.com/jquery/jquery.git jquery
cd jquery
git checkout tags/2.0.3
cd ../