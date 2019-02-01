# Minimal webpack4+AngularJS project

This is [Benedikt Ritter's `angular-webpack`
project](https://github.com/britter/angular-webpack), heavily stripped down to
the barest essentials needed to compile and build a web application using
webpack4 and AngularJS.

I did this to better understand the build systems used in modern web
applications.  A lot has changed since I did my web design course back in 2001
(when the dinosaurs roamed, dial-up modems screeched and Netscape
Communications were still trading) and so the purpose of this was to really cut
away the cruft to get to something I could understand.

## Building the project

`npm run build` should do the deed.  It'll whistle up `webpack` which will do
a few things:

1. JavaScript files will first be filtered through
   [`ng-annotate-loader`](https://github.com/huston007/ng-annotate-loader)
   which will be appropriately annotated so that critical AngularJS variable
   names are preserved.
2. Those annotated files are then passed through
   [`eslint-loader`](https://github.com/webpack-contrib/eslint-loader)
   which itself feeds the files to
   [`eslint`](https://github.com/eslint/eslint) which checks the files for
   validity.
3. HTML files are passed through
   [`html-loader`](https://github.com/webpack-contrib/html-loader)
   which parses the HTML and identifies other assets that `webpack` needs to process.
4. `webpack` then takes the annotated and linted JavaScript, and the HTML and compiles
   a few output files which it places in `app/dist`.

## Changes to make

* I'd like to split up `app` into `src` and `dist` directories -- this will
  require using `file-loader` to copy those files across to the output directory.

* Tests are a really good idea, but the original approach didn't wish to behave
  on my system.  Researching how `protractor`+`mocha`+`karma`+`selenium` interact to
  execute unit tests is something for another day.
