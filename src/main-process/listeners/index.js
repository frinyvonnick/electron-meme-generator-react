const {ipcMain, dialog} = require('electron')
const {
  getMemes,
  deleteMeme
} = require('../../assets/storage')
const {newEditWindow} = require('./edit')
const fs = require('fs')

ipcMain.on('get-memes', (e) => {
  getMemes((memes) => {
    e.sender.send('memes-sent', memes)
  })
})
