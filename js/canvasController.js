'use strict'
function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')

  gCanvas.width = elContainer.offsetWidth

  renderMeme()
}

function drawImg(img) {
  gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function drawText({ text, size, color, stroke, font }) {
  gCtx.fillStyle = color
  gCtx.strokeStyle = stroke
  gCtx.font = `${size}px ${font}`
  let x = gCanvas.width / 2
  let y = gCanvas.height
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}
