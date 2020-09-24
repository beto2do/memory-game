import React, {Component} from 'react'
import {render} from 'react-dom'

import MemoryGame from '../../src'

export default class Demo extends Component {
  render() {
    return <div>
      <h1>memory-game Demo</h1>
      <MemoryGame/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
