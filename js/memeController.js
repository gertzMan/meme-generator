'use strict'

//rendering

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

function renderEmojis() {
  // TODO: question for ori if you read this: should I make a getter for a global var?
  const elEmojiControls = document.querySelector('.emoji-controls')

  const strHTML = gEmojis
    .map((emoji) => `<span onclick="onAddTextLine('${emoji}')">${emoji}</span>`)
    .join('')

  elEmojiControls.innerHTML = strHTML
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

function onAddTextLine(text) {
  addLine(text)
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
  deleteLine()
  renderMeme()
}

//private functions
function _drawLines(lines) {
  lines.forEach((line) => drawText(line))
}
