'use strict'

function renderMeme() {
  const mem = getMem()
  const img = getImg(mem.selectedImgId)
  const canvasImg = new Image()
  canvasImg.src = img.url

  canvasImg.onload = () => {
    gCanvas.height = (gCanvas.width * canvasImg.height) / canvasImg.width

    drawImg(canvasImg)
    _drawLines(mem.lines)
  }
}

//event handlers
function onStrokeChange(color) {
  setStrokeColor(color)
  renderMeme()
}

function onTextColorChange(color) {
  setFillColor(color)
  renderMeme()
}

function onChangeFontSize(changeAmount) {
  setFontSize(changeAmount)
  renderMeme()
}

//private functions
function _drawLines(lines) {
  lines.forEach((line) => drawText(line))
}
