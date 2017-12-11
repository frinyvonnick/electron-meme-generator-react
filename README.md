# electron-start

`electron-start` is an electron boilerplate based on github `electron-api-demos` folder architecture.

## Install

In your directory you can run

```bash
$ curl -fsSL https://github.com/frinyvonnick/electron-start/archive/master.tar.gz | tar -xz --strip-components 2
```

You can also `git clone` or [download](https|//github.com/frinyvonnick/electron-start/archive/master.tar.gz) this repository.

## Folder architecture

The folder architecture is based on `electron-api-demos` app from github. Here is a [markdown document](https|//github.com/electron/electron-api-demos/blob/master/docs.md#folder-structure) that explains in details this architecture.

All files in the folder **src/main-process/listeners** are automatically required in the application.

## Features

### Path aliases

`module-alias` lets you define alias for paths in your **package.json**.

A few are already defined:

alias| path
-----|-----
src| src
assets| src/assets
windows| src/windows
main-process| src/main-process
renderer-process| src/renderer-process

### Livereload

`nodemon` watch files in **src/main-process** with the extension **.js** and reload your application if any change occurs.

### Shorthand for creating windows

The file **src/main-process/windows.js** exports a method `createWindow` that facilitate create new windows.

It takes an object of options as parameter:

property | type | isRequired | options
-----|-----|-----|-----
file| string | yes | The path to a HTML file to inject in the new window
data | object | no | This is an optional object that is injected in the renderer process as a global variable called [`__args__`](https://github.com/jprichardson/electron-window#showurlhttporfileurl-argsforrenderer-callback)
options | object | no | This is regular [options](https://electron.atom.io/docs/api/browser-window/#new-browserwindowoptions) for BrowserWindow's constructor


## License

MIT © FRIN Yvonnick
