'use strict'
function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  //offset - width or height of container including  padding and border
  // TODO try clientWith  instead of offset width to compensate for borders
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
