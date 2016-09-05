## WebPack configuration
REF : http://survivejs.com/webpack/advanced-techniques/configuring-react/
Started With https://github.com/astnt/react-redux-universal-heroku
Continue with https://github.com/gaearon/react-hot-boilerplate
Learn hot module setting from :
- http://stackoverflow.com/questions/26203725/how-to-allow-for-webpack-dev-server-to-allow-entry-points-from-react-router
- http://webpack.github.io/docs/webpack-dev-server.html



// install webpack itself
- npm i -D webpack webpack-dev-server

// loader for webpack and core for babel core functionalities
- npm i -D babel-loader babel-core

// added presets required
// es2015-loose used instead of es2015 because it convert es6 code to es5 so that it looks like es5 only
// es2015-loose dependent on es2015, so need to install it even if we are using es2015-loose
- npm i -D babel-preset-{es2015,es2015-loose,react,stage-0}

// use react-lite instead of react because react contains features like server rendering which we don't want.
// - npm i -D react-lite

// babel-preset-react-hmre deprecated so use react-hot-loader
- npm i -D react-hot-loader

// add eslint required packages
- npm i -D eslint eslint-plugin-react babel-eslint

// add webpack-dashboard support
- npm i -D webpack-dashboard

// added splash loading from grommet-blog template
// added grommet ux package
- npm i -S grommet
// added scss support for webpack
- npm i -D css-loader style-loader node-sass sass-loader
// added grommet-template
- npm i -S grommet-template
// Take reference from Starter kit : https://github.com/coryhouse/react-slingshot
// added required packages
- npm i -S react-router redux react-redux react-router-redux redux-thunk object-assign