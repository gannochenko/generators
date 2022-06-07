# Brand new package "<%- package_name %>"!

Add to the `scripts` folder of `package.json`:

~~~
"worker:dev": "webpack --watch --config ./worker.webpack.config.js --mode=development",
"worker:build": "webpack build --config ./worker.webpack.config.js --mode=production",
"serve": "serve ./build"
~~~
