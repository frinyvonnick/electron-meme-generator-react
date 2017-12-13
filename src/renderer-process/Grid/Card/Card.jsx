import React, { Component } from 'react'
import { remote } from 'electron'

const { Menu, MenuItem } = remote

export class Card extends Component {
  setCardRef = element => {
    if (!element) return
    this.element = element
    this.element.addEventListener('contextmenu', this.handleContextMenu)
  }

  handleContextMenu = e => {
    // Open menu here
  }

  componentWillUnMount() {
    this.element.removeEventListener('contextmenu', this.handleContextMenu)
  }

  render() {
    const { title, path } = this.props

    return (
      <div ref={this.setCardRef} className="card meme">
        <div className="img" style={{ backgroundImage: `url('${path.split('\\').join('\\\\')}')` }}></div>
        <h3 title={title}><span>{title}</span></h3>
      </div>
    )
  }
}
