'use strict'
//globals
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

let gStartPos

// Handle Drawings
function drawImg(img) {
  gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  //offset - width or height of container including  padding and border
  // TODO try clientWidth instead of offset width to compensate for borders
  gCanvas.width = elContainer.offsetWidth
  gCanvas.height = elContainer.offsetHeight
  renderMeme()
}

function drawText({ align, text, size, color, stroke, font, linePos }) {
  gCtx.fillStyle = color
  gCtx.strokeStyle = stroke
  gCtx.font = `${size}px ${font}`

  gCtx.textAlign = align
  gCtx.textBaseline = ''

  gCtx.fillText(text, linePos.x, linePos.y)
  gCtx.strokeText(text, linePos.x, linePos.y)
}
