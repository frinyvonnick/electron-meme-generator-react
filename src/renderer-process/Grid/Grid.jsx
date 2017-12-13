import React, { Component } from 'react'
import { ipcRenderer } from 'electron'

import { Card } from './Card'

export class Grid extends Component {
  state = {
    memes: []
  }

  componentWillMount() {
    ipcRenderer.on('memes-sent', this.handleMemesSent)
    ipcRenderer.on('selected-files', this.getMemes)

    this.getMemes()
  }

  componentWillUnMount() {
    ipcRenderer.removeListener('memes-sent', this.handleMemesSent)
    ipcRenderer.removeListener('selected-files', this.getMemes)
  }

  handleMemesSent = (e, memes) => {
    this.setState({ memes })
  }

  getMemes() {
    ipcRenderer.send('get-memes', {})
  }

  onClick = () => {
    ipcRenderer.send('open-file-dialog')
  }

  deleteMeme = index => {
    ipcRenderer.send('delete-selected-meme', this.state.memes[index])
  }

  render() {
    return [
      ...this.state.memes.map(({ title, path }, index) => {
        return (
          <Card
            key={title}
            index={index}
            title={title}
            path={path}
            deleteMeme={this.deleteMeme}
            saveMeme={this.saveMeme}
          />
        )
      }), (
        <div
          className="card"
          key="new-meme"
          id="new-meme"
          onClick={this.onClick}
        >
          <div className="img"></div>
          <h3><span>New</span></h3>
        </div>
      )
    ]
  }
}
