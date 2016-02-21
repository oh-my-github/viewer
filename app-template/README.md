# yo-omg-basic: app-template 

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


