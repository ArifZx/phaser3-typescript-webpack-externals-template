# phaser3-typescript-webpack-externals-template

A Phaser 3 project template with ES6 support via [Webpack 4](https://webpack.js.org/)
that includes hot-reloading for development and production-ready builds.

Loading images via JavaScript module `import` is also supported (see at the #Writing Code).

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command            | Description                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| `npm install`      | Install project dependencies                                                                      |
| `npm run dev`      | Build project and open web server running project in development mode                             |
| `npm run dev-host` | Build project and open web server running project in development mode and rut at host = "0.0.0.0" |
| `npm run build`    | Builds code bundle with production settings (minification, uglification, etc..)                   |
| `npm run start`    | Start server running project                                                                      |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development
server by running `npm run dev`.

After starting the development server with `npm run dev`, you can edit any files in the `src` folder
and webpack will automatically recompile and reload your server (available at `http://localhost:8080`
by default).

You **don't need** to import `phaser` in any files in the `src` folder. Except `src/app.ts`.

You can **import assets** with `const name = require("path").default`.

### Webpack

If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can
modify the `webpack.dev.config.js` file for cross-project changes, or you can modify and/or create
new configuration files and target them in specific npm tasks inside of `package.json'.

## Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at
`dist/game.[hash].min.js` along with any other assets you project depended.

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`),
you should be able to open `http://mycoolserver.com/index.html` and play your game.
