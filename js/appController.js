'use strict'
let gCanvas
let gCtx

function onInit() {
  // Initilize canvas
  gCanvas = document.querySelector('#main-canvas')
  gCtx = gCanvas.getContext('2d')
  window.addEventListener('resize', resizeCanvas)

  renderGallery()
}
