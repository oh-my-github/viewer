# viewer-default

Default Viewer for [oh-my-github](https://github.com/oh-my-github/oh-my-github)

## Usage

```
$ git clone https://github.com/oh-my-github/viewer-default.git oh-my-github && cd oh-my-github
$ rm -rf .git
```

And follow instruction in [oh-my-github](https://github.com/oh-my-github/oh-my-github) to create `oh-my-github.json` and publish it

## Customization

```
$ cd app
$ npm install
$ npm start -s

# edit app in `src/`

$ npm run build
$ npm run dist
$ npm run open:dist
```

## Publish Customized Viewer to NPM and Yeoman

Modify theses fields in `app/package.json`.
 
```json
{
  ...
  
  "name": "oh-my-github-viewer-default",
  "version": "0.0.1",
  "author": "1ambda",
  "description": "",
  "homepage": "https://github.com/oh-my-github/viewer-default#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/oh-my-github/viewer-default.git"
  },
  "bugs": {
    "url": "https://github.com/oh-my-github/viewer-default/issues"
  },
  
  ...
}
```

Then publish to npmjs

```
$ cd app
$ npm login
$ npm publish
```

## Contributors

- [nyybb](https://github.com/nyybb)
- [NohSeho](https://github.com/NohSeho)

## Library

| **Description** | **Library** | **Github**|
|----------|------|------|
| Boilerplate | [react-slingshot](https://github.com/coryhouse/react-slingshot) | [Github](https://github.com/coryhouse/react-slingshot)  |
| UI Layout Library | [Materialize CSS](http://materializecss.com/) | [Github](https://github.com/Dogfalo/materialize) |
| UI Component Library | [Material UI](http://www.material-ui.com/) | [Github](https://github.com/callemall/material-ui) |

## License

MIT
