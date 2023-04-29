'use strict'

const STORAGE_KEY = 'memesDB'

let gMemes
let gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [_createLine('write something!')],
}

const gEmojis = [
  '😁',
  '👅',
  '😆',
  '😅',
  '😂',
  ' 🧚‍♂️',
  '👩🏻‍🦰',
  '🤣',
  '🥲',
  '😊',
  '😗',
  '😙',
  '😚',
  '🤮',
  '👺',
  '💩',
  '👻',
  '👓',
  '💋',
  '💅',
]
_createMems()

// setter functions
function setMemImg(imgId) {
  gMeme.selectedImgId = imgId
}

function setLineText(text) {
  let { selectedLineIdx: idx } = gMeme

  gMeme.lines[idx].text = text
}

function setStrokeColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].stroke = color
}

function setFillColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setFontSize(diff) {
  gMeme.lines[gMeme.selectedLineIdx].size += diff
}

function setTextAlignment(alignment) {
  let line = getSelectedLine()
  line.align = alignment
  if (alignment === 'start') {
    line.linePos.x = 5
  } else if (alignment === 'center') {
    line.linePos.x = gCanvas.width / 2
  } else {
    line.linePos.x = gCanvas.width - 10
  }
}

function addLine(text = 'write something!') {
  let newPos = _calcNewPos()
  gMeme.lines.push(_createLine(text, newPos))

  //update selected line
  gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function switchLine() {
  // debugger
  // let { selectedLineIdx } = gMeme
  console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx)
  console.log('gMeme.lines.length-1', gMeme.lines.length - 1)

  gMeme.selectedLineIdx =
    gMeme.selectedLineIdx === gMeme.lines.length - 1
      ? 0
      : gMeme.selectedLineIdx + 1
  console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx)
}

function moveLine(diff) {
  //TODO add out of bound protection
  gMeme.lines[gMeme.selectedLineIdx].linePos.y += diff
}

function deleteLine() {
  if (gMeme.lines.length === 1) return
  gMeme.lines.splice(gMeme.selectedLineIdx, 1)
  gMeme.selectedLineIdx = gMeme.lines.length - 1
}

// getter function
function getMem() {
  return gMeme
}

function getMems() {
  return gMemes
}

function getSelectedLine() {
  return gMeme.lines[gMeme.selectedLineIdx]
}

// private functions
function _createMems() {
  let memes = _loadMemesFromStorage()
  if (!memes || !memes.length) {
    memes = []
  }

  //   TODO this may be redundant thinks about it some more
  gMemes = memes
  _saveMemesToStorage()
}

function _createLine(text, pos = { x: 200, y: 380 }) {
  return {
    text,
    size: 30,
    linePos: pos,
    align: 'center',
    getTextMeasurements: function () {
      return gCtx.measureText(this.text)
    },
    color: 'red',
    font: 'Impact',
    color: 'white',
    stroke: 'black',
    isDrag: false,
  }
}

function _calcNewPos() {
  // let lastLineIdx = gMeme.lines.length-1
  let lastLine = gMeme.lines[gMeme.lines.length - 1]
  return {
    x: lastLine.linePos.x,
    y: lastLine.linePos.y - 37,
  }
}

function _loadMemesFromStorage() {
  loadFromStorage(STORAGE_KEY, gMemes)
}

function _saveMemesToStorage() {
  saveToStorage(STORAGE_KEY, gMemes)
}
