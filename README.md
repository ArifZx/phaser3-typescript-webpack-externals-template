# phaser3-typescript-webpack-externals-template

A Phaser 3 project template with ES6 support via [Webpack 4](https://webpack.js.org/) and [Babel 7](https://babeljs.io/)
that includes hot-reloading for development and production-ready builds with externals `phaser.min.js`.

Loading files via JavaScript module `import` is also supported (see at the [#Writing Code](#writing-code)).

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command            | Description                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| `npm install`      | Install project dependencies                                                                       |
| `npm run dev`      | Build project and open web server running project in development mode                              |
| `npm run dev-stat` | Generate `stat.json` of project with development mode                                              |
| `npm run dev-host` | Build project and open web server running project in development mode that run at host = "0.0.0.0" |
| `npm run stat`     | Generate `stat.json` of project with production mode                                               |
| `npm run build`    | Builds code bundle with production settings (minification, uglification, etc..)                    |
| `npm run start`    | Start server running project                                                                       |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development
server by running `npm run dev`.

After starting the development server with `npm run dev`, you can edit any files in the `src` folder
and webpack will automatically recompile and reload your server (available at `http://localhost:9000`
by default).

You **don't need** to import `phaser` on any files in the `src` folder. Except `src/app.ts`.

You can **import files** with `const name = require("path").default`.

You can **change** the phaser 3 version with edit `script-src` of phaser.min.js at `src/index.html`.

## Config

You can **change** phaser version and other depedency in `phaser.config.js`.

## Import Files

You have two options to import files:

### copy assets (default)

You can copy all asset files into your `dist` folder. Config `CopyPlugin` in webpack.config for development or production.

### import require (optional)

You can **import files** with `const name = require("path").default`. If you want to import any types of assets. Check in `src/types` to add your custom types.

## Webpack

If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can
modify the `webpack.dev.config.js` file for cross-project changes, or you can modify and/or create
new configuration files and target them in specific npm tasks inside of `package.json'.

## Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at
`dist/game.[hash].min.js` along with any other assets you project depended.

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`),
you should be able to open `http://mycoolserver.com/index.html` and play your game.
