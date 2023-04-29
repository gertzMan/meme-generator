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

//event handlers
function onDown(e) {
  const x = e.clientX - gCanvas.offsetLeft
  const y = e.clientY - gCanvas.offsetTop

  for (let i = 0; i < gMeme.lines.length; i++) {
    const text = gMeme.lines[i]

    // Measure the width and height of the text
    gCtx.font = text.font
    const width = gCtx.measureText(text.text).width
    const height = gCtx.measureText('M').width // Approximate height using capital M

    // Check if the mouse coordinates fall within the boundaries of the text object
    if (
      x >= text.x - 10 &&
      x <= text.x + width &&
      y >= text.y &&
      y <= text.y + height
    ) {
      console.log('Clicked on text:', text.text)
      break
    }
  }
}

function getEvPos(ev) {
  // Gets the offset pos , the default pos
  let pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }
  // console.log('pos:', pos)
  // Check if its a touch ev
  if (TOUCH_EVS.includes(ev.type)) {
    //soo we will not trigger the mouse ev
    ev.preventDefault()
    //Gets the first touch point
    ev = ev.changedTouches[0]
    //Calc the right pos according to the touch screen
    // console.log('ev.pageX:', ev.pageX)
    // console.log('ev.pageY:', ev.pageY)
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    }
    // console.log('pos:', pos)
  }
  return pos
}
