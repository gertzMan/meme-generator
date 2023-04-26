'use strict'

const STORAGE_KEY = 'memesDB'

let gMemes
let gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [_createLine('write something!')],
}

_createMems()

// setter functions
function setMemImg(imgId) {
  gMeme.selectedImgId = imgId
}

function setStrokeColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].stroke = color
}

function setFillColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setFontSize(changeAmount) {
  gMeme.lines[gMeme.selectedLineIdx].size += changeAmount
}

// getter function
function getMem() {
  return gMeme
}

function getMems() {
  return gMemes
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

// TODO setLineTxt()

function _createLine(text) {
  return {
    text,
    size: 40,
    align: 'center',
    color: 'red',
    font: 'Impact',
    color: 'white',
    stroke: 'black',
  }
}

function _loadMemesFromStorage() {
  loadFromStorage(STORAGE_KEY, gMemes)
}

function _saveMemesToStorage() {
  saveToStorage(STORAGE_KEY, gMemes)
}
