'use strict'

//rendering
function renderGallerySection() {
  renderGallery()
  renderKeywords()
  renderKeywordsDatalist()
}

function renderGallery() {
  const images = getImgs()
  const elGalleryDisplay = document.querySelector('.gallery-container')

  let strHTML = '<ul class="image-gallery">'
  strHTML += images
    .map(
      (img) => `<li class="gallery-item" onclick="onImgSelect(${img.id})">
  <img src="${img.url}"  alt="" />
  <div class="overlay"><span>Choose Me!</span></div>
  </li>`
    )
    .join('')
  strHTML += '</ul>'
  elGalleryDisplay.innerHTML = strHTML
}

function renderKeywords() {
  //trying out different style than we use in the course. don't be mad ori(:
  const keywordsMap = gKeywordSearchCountMap
  const elKeywordContainer = document.querySelector('.keywords-container')
  elKeywordContainer.innerHTML = ''
  for (const key in keywordsMap) {
    if (keywordsMap[key] >= 4) {
      const span = document.createElement('span')
      // classList.add('keyword-item')
      span.textContent = key
      const fontSize =
        keywordsMap[key] < 15 ? keywordsMap[key] * 3 : keywordsMap[key]
      span.style.fontSize = `${fontSize}px`
      span.classList.add('keyword-item')
      span.addEventListener('click', () => onKeywordClick(`${key}`))
      elKeywordContainer.appendChild(span)
    }
  }
}

//event handlers
function renderKeywordsDatalist() {
  const keywords = getKeyWords()

  const strHTML = keywords
    .map((keyword) => `<option value="${keyword}" />`)
    .join('')
  document.querySelector('#keywords-data-list').innerHTML = strHTML
}

// event handlers

function onImgSelect(imgId) {
  setMemImg(imgId)

  document.querySelector('section.gallery').style.display = 'none'
  document.querySelector('.editor-controls').style.display = 'block'
  document.querySelector('section.editor').style.display = 'flex'

  resizeCanvas()
}

function onFilterText(text) {
  setTextFilter(text)
  renderGallery()
}

function onKeywordClick(keyword) {
  console.log('keyword', keyword)
  incrementKeywordCount(keyword)
  setTextFilter(keyword)
  renderGallery()
  renderKeywords()
}
