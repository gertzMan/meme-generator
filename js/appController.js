'use strict'
let gCanvas
let gCtx

function onInit() {
  // Initilize canvas
  gCanvas = document.querySelector('#main-canvas')
  gCtx = gCanvas.getContext('2d')
  // TODO add to fnction initilize eventlisteners
  window.addEventListener('resize', resizeCanvas)
  renderGallerySection()
}
