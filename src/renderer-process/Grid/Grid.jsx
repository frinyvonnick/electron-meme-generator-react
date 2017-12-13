import React, { Component } from 'react'
import { ipcRenderer } from 'electron'
import path from 'path'

const defaultMemes = [
  {
    title: 'Victory Baby',
    file: 'baby.jpg'
  },
  {
    title: 'Creepy Condescending Wonka',
    file: 'chapelier.jpg'
  },
  {
    title: 'Futurama Fry',
    file: 'futurama.jpg'
  },
  {
    title: 'Grandma Finds The Internet',
    file: 'grandma.jpg'
  },
  {
    title: 'Picard Wtf',
    file: 'startrek.png'
  },
  {
    title: 'X, X Everywhere',
    file: 'toystory.png'
  },
  {
    title: 'Liam Neeson Taken',
    file: 'taken.jpg'
  }
]

export class Grid extends Component {
  render() {
    return defaultMemes.map(({ title, file }, index) => {
      const url = path.join(__dirname, '..', '..', 'assets', 'img', 'defaults', file)
      return (
        <div key={title} className="card meme">
          <div className="img" style={{ backgroundImage: `url('${url}')` }}></div>
          <h3 title={title}><span>{title}</span></h3>
        </div>
      )
    })
  }
}
