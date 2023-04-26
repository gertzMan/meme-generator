'use strict'

//rendering
function renderGallery() {
  const elGalleryDisplay = document.querySelector('.gallery-container')

  let strHTML = ''
  const imgs = getImgs()

  strHTML = imgs
    .map(
      (img) =>
        `<article class="gallery-item" onclick="onImgSelect(${img.id})"><img src="${img.url}" alt=""`
    )
    .join('')

  elGalleryDisplay.innerHTML = strHTML
}

function renderKeywords() {
  const keywords = getKeyWordsMap()

  let strHTML = ''
  for (const key in keywords) {
    strHTML += `<p class="keyword-item" onclick="onKeywordClick('${key}')" >${key}</p>`
  }
  document.querySelector('.keywords-container').innerHTML = strHTML
}

// event handlers

function onImgSelect(imgId) {
  setMemImg(imgId)

  document.querySelector('.gallery-container').style.display = 'none'
  document.querySelector('.editor-container').classList.add('flex')

  //  TODO add things
  resizeCanvas()
}
