'use strict'
let gCanvas
let gCtx

function onInit() {
  // Initilize canvas
  gCanvas = document.querySelector('#main-canvas')
  gCtx = gCanvas.getContext('2d')
  // TODO add to fnction initilize eventlisteners
  addMouseListeners()
  addTouchListeners()
  window.addEventListener('resize', resizeCanvas)
  renderGallerySection()
  renderEmojis()
}

function addMouseListeners() {
  gCanvas.addEventListener('mousedown', onDown)
  // gCanvas.addEventListener('mousemove', onMove)
  // gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
  gCanvas.addEventListener('touchstart', onDown)
  // gCanvas.addEventListener('touchmove', onMove)
  // gCanvas.addEventListener('touchend', onUp)
}
