'use strict'
let gCanvas
let gCtx

function onInit() {
  gCanvas = document.querySelector('#main-canvas')
  gCtx = gCanvas.getContext('2d')
  window.addEventListener('resize', resizeCanvas)
  renderGallerySection()
  renderEmojis()
}
