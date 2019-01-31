import React from 'react'
import initThreeApp from '../three'

class ThreeContainer extends React.Component {
  componentDidMount() {
    initThreeApp(this.ThreeContainerElement)
  }

  render() {
    return <div ref={element => (this.ThreeContainerElement = element)} />
  }
}

export default ThreeContainer
