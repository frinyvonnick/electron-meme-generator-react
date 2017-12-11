// Let use path aliases like src/main-process/windows instead of ../main-process/windows
require('module-alias/register')

const { app, BrowserWindow } = require('electron')
const glob = require('glob')
const path = require('path')
const { createMainWindow } = require('main-process/windows')

// Install Devtron in development
if (process.env.NODE_ENV === 'development') {
	require('electron-debug')()
	require('electron-reload')('src/{assets,renderer-process,windows}/**/*.*')
}

// Prevent window being garbage collected
let mainWindow

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow()
  }
})

app.on('ready', () => {
  mainWindow = createMainWindow()
})

// Require each JS file in the main-process/listeners dir
glob.sync(path.join(__dirname, 'main-process/listeners/**/*.js'))
	.forEach((file) => {
		require(file)
	})
