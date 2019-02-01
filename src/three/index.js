import App from './App'

export default containerElement => {
  const canvas = _createCanvas()
  const app = new App(canvas)

  function _createCanvas() {
    const canvas = document.createElement('canvas')
    containerElement.appendChild(canvas)

    return canvas
  }

  function render() {
    requestAnimationFrame(render)
    app.update()
  }

  function _resizeCanvas() {
    canvas.style.width = '100%'
    canvas.style.height = '100%'

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    app.resizeScene()
  }

  function _addEventListeners() {
    window.onresize = _resizeCanvas
  }

  _addEventListeners()
  _resizeCanvas()
  render()
}
