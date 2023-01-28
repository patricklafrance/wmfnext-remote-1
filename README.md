# wmfnext-remote-1

Remote application for [wmfnext-host](https://github.com/patricklafrance/wmfnext-host) to showcase [wmfnext-shell](https://github.com/patricklafrance/wmfnext-shell).

A [live example](https://wmfnext-host.netlify.app) of this application is hosted on Netlify.

- [Installation](#installation)
- [Start developing](#start-developing)
- [Publish the application](#publish-the-application)

## Installation

This project use Yarn, to install Yarn:

```
choco install yarn
``` 

For more options to install Yarn, view https://yarnpkg.com/lang/en/docs/install/#windows-stable.

To install the project, open a terminal at the root of the workspace and execute the following command:

```bash
yarn install-dev
```

> To ease local development symlinks to shell packages are automatically created at installation.

## Start developing

To develop as a remote module:

[Open a terminal in VSCode](https://code.visualstudio.com/docs/editor/integrated-terminal#_managing-multiple-terminals) and execute the following command:

```bash
yarn dev
```

To develop in isolation with an application shell:

[Open a terminal in VSCode](https://code.visualstudio.com/docs/editor/integrated-terminal#_managing-multiple-terminals) and execute the following command:

```bash
yarn dev-local
```

## Publish the application

Push a commit and the application will be automatically deployed on Netlify.

## Other commands

### build

```bash
yarn build
```

### clean

```bash
yarn clean
```

### link-pkg

```bash
yarn link-pkg
```

### reset

```bash
yarn reset
```
