import React from 'react'
import styled from 'styled-components'
import initThreeApp from '../three'

class ThreeContainer extends React.Component {
  componentDidMount() {
    initThreeApp(this.ThreeContainerElement)
  }

  render() {
    return <Wrapper ref={element => (this.ThreeContainerElement = element)} />
  }
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

export default ThreeContainer
