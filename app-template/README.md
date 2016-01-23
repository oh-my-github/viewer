# yo-omg-basic: App Template

## Library


| **Description** | **Library** | **Github**|
|----------|------|------|
| Boilerplate | [react-slingshot](https://github.com/coryhouse/react-slingshot) | [Github](https://github.com/coryhouse/react-slingshot)  |
| UI Layout Library | [Materialize CSS](http://materializecss.com/) | [Github](https://github.com/Dogfalo/materialize) |
| UI Component Library | [Material UI](http://www.material-ui.com/) | [Github](https://github.com/callemall/material-ui) |


## Script

| **Script** | **Description** |
|----------|-------|
| prestart | Runs automatically before start. Calls remove-dist script which deletes the dist folder. This helps remind you to run the build script before committing since the dist folder will be deleted if you don't. ;) |
| start | Runs tests, lints, starts dev webserver, and opens the app in your default browser. |
| open | Opens the app in your default browser. |
| lint | Runs ESLint. |
| lint:watch | Runs ESLint and watches all files so that they are automatically linted upon save. |
| clean-dist | Removes everything from the dist folder. |
| remove-dist | Deletes the dist folder. |
| create-dist | Creates the dist folder and the necessary subfolders. |
| build:html | Adds trackJS tracking script and copies to /dist. |
| build:sass | Compiles SASS, minifies, generates sourcemap, and stores in /dist. |
| prebuild | Runs automatically before build script (due to naming convention). Cleans dist folder, builds html, and builds sass. |
| build | Bundles all JavaScript using webpack and writes it to /dist. |
| build:verbose | Same as above, but verbose so you can see all the details happening including warnings. |
| test | Runs tests (files ending in .spec.js) using Mocha and outputs results to the command line. Watches all files so tests are re-run upon save. |

## Directory Structure
```
.
├── .babelrc                  # Configures Babel
├── .editorconfig             # Configures editor rules
├── .eslintrc                 # Configures ESLint
├── .gitignore                # Tells git which files to ignore
├── README.md                 # This file.
├── dist                      # Folder where the build script places the built app. Use this in prod.
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── src                       # Source code
│   ├── actions               # Flux/Redux actions. List of distinct actions that can occur in the app.  
│   ├── businessLogic         # Plain old JS objects (POJOs). Pure logic. No framework specific code here.
│   ├── components            # React components
│   ├── constants             # Application constants including constants for Redux
│   ├── containers            # App container for Redux
│   ├── favicon.ico           # favicon to keep your browser from throwing a 404 during dev. Not actually used in prod build.
│   ├── index.html            # Start page 
│   ├── index.js              # Entry point for your app
│   ├── reducers              # Redux reducers. Your state is altered here based on actions
│   ├── store                 # Redux store configuration
│   └── styles                # CSS Styles, typically written in Sass
├── tools                     # Node scripts that run build related tools
│   ├── build.js              # Runs the production build
│   ├── buildHtml.js          # Builds index.html
│   ├── distServer.js         # Starts webserver and opens final built app that's in dist in your default browser
│   ├── srcServer.js          # Starts dev webserver with hot reloading and opens your app in your default browser
└── webpack.config.js         # Configures webpack
```
