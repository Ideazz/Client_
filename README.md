# Client_

```bash
.
├── README.md
├── app
│   ├── 404.html
│   ├── actions
│   │   └── index.js
│   ├── components
│   │   ├── App
│   │   │   └── index.js
│   │   ├── Footer
│   │   │   └── index.js
│   │   ├── Navigation
│   │   │   └── index.js
│   │   ├── Routes
│   │   │   └── index.js
│   ├── constants
│   │   └── action-types.js
│   ├── index.html
│   ├── index.js
│   └── reducers
│       ├── index.js
├── assets
│   ├── favicon.ico
│   └── styles
│       ├── components
│       │   ├── App.scss
│       └── index.scss
├── dist
│   └── report.html
├── package.json
├── webpack.config.build.js
├── webpack.config.dev.js
├── webpack.config.js
```


## Requirements
You only need <b>node.js</b> pre-installed and you’re good to go.

## Setup
Install dependencies
```sh
$ yarn install
```

## Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:8081/](http://localhost:8081/)
```sh
$ yarn dev
```
## Deployment
Build the current application
```sh
$ yarn build
```

## Stats
Check the stats of the bundle
```sh
$ yarn stats
```
