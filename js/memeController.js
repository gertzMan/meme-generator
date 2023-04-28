'use strict'

function renderMeme() {
  const mem = getMem()
  const img = getImg(mem.selectedImgId)
  const canvasImg = new Image()
  canvasImg.src = img.url
  //onload to make sure canvasImg actually loaded the image src I gave it
  canvasImg.onload = () => {
    //calculate canvas height according to formula for correct proportions
    gCanvas.height = (gCanvas.width * canvasImg.height) / canvasImg.width
    //draw the image
    gCtx.drawImage(canvasImg, 0, 0, gCanvas.width, gCanvas.height)
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

function onSetFontSize(diff) {
  setFontSize(diff)
  renderMeme()
}

function onAddTextLine() {
  addLine()
  renderMeme()
}

function onSwitchLine() {
  switchLine()
  renderMeme()
  // TODO change focus
}

function onSetLineText(text) {
  setLineText(text)
  renderMeme()
}

function onTextAlign(alignment) {
  setTextAlignment(alignment)
  renderMeme()
}

function onLineMove(diff) {
  moveLine(diff)
  renderMeme()
}

function onDeleteLine() {
  // TODO fix this :
  deleteLine()
  renderMeme()
}

//private functions
function _drawLines(lines) {
  lines.forEach((line) => drawText(line))
}
