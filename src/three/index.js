import App from './App'

export default containerElement => {
  const app = new App()
  containerElement.appendChild(app.renderer.domElement)

  function render() {
    requestAnimationFrame(render)
    app.update()
  }

  render()
}
