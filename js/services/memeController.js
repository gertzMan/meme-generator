'use strict'
function renderMeme() {
  const img = new Image()
  img.src = 'img/02.jpg'
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xEnd,yEnd
  }
}
