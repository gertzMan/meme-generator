'use strict'
const gImgs = [
  {
    id: 1,
    url: 'img/meme-image-square/1.jpg',
    keywords: ['trump', 'politics'],
  },
  {
    id: 2,
    url: 'img/meme-image-square/2.jpg',
    keywords: ['dog', 'pet', 'cute'],
  },
  {
    id: 3,
    url: 'img/meme-image-square/3.jpg',
    keywords: ['dog', 'baby', 'pet', 'cute'],
  },
  { id: 4, url: 'img/meme-image-square/4.jpg', keywords: ['cat', 'pet'] },
  { id: 5, url: 'img/meme-image-square/5.jpg', keywords: ['baby', 'cute'] },
  { id: 6, url: 'img/meme-image-square/6.jpg', keywords: ['funny'] },
  { id: 7, url: 'img/meme-image-square/7.jpg', keywords: ['baby', 'funny'] },
  { id: 8, url: 'img/meme-image-square/8.jpg', keywords: ['funny', 'ironic'] },
  { id: 9, url: 'img/meme-image-square/9.jpg', keywords: ['baby', 'funny'] },
  {
    id: 10,
    url: 'img/meme-image-square/10.jpg',
    keywords: ['politics', 'funny'],
  },
  {
    id: 11,
    url: 'img/meme-image-square/11.jpg',
    keywords: ['sports', 'funny'],
  },
  {
    id: 12,
    url: 'img/meme-image-square/12.jpg',
    keywords: ['funny', 'celebrity'],
  },
  {
    id: 13,
    url: 'img/meme-image-square/13.jpg',
    keywords: ['funny', 'celebrity'],
  },
  {
    id: 14,
    url: 'img/meme-image-square/14.jpg',
    keywords: ['celebrity', 'serious'],
  },
  {
    id: 15,
    url: 'img/meme-image-square/15.jpg',
    keywords: ['celebrity', 'ironic'],
  },
  {
    id: 16,
    url: 'img/meme-image-square/16.jpg',
    keywords: ['funny', 'ironic'],
  },
  { id: 17, url: 'img/meme-image-square/17.jpg', keywords: ['politics'] },
  { id: 18, url: 'img/meme-image-square/18.jpg', keywords: ['cartoon'] },
  { id: 19, url: 'img/mem-imgs/19pic.jpg', keywords: ['funny', 'love'] },
  { id: 20, url: 'img/mem-imgs/20pic.jpg', keywords: ['funny', 'celebrity'] },
  { id: 21, url: 'img/mem-imgs/21pic.jpg', keywords: ['funny', 'celebrity'] },
  { id: 22, url: 'img/mem-imgs/22pic.jpg', keywords: ['funny', 'celebrity'] },
  {
    id: 23,
    url: 'img/mem-imgs/23pic.jpg',
    keywords: ['politics', 'celebrity'],
  },
  { id: 24, url: 'img/mem-imgs/24pic.jpg', keywords: ['pet', 'funny', 'cute'] },
  { id: 25, url: 'img/mem-imgs/25pic.jpg', keywords: ['celebrity', 'funny'] },
]

const gKeywordSearchCountMap = {
  funny: 12,
  cat: 16,
  baby: 2,
  cartoon: 1,
  politics: 1,
  ironic: 1,
  celebrity: 4,
  serious: 2,
  sports: 4,
  cute: 4,
  pet: 7,
  love: 1,
}

const gFilterBy = {
  text: '',
  key: '',
}
// TODO make better id sys
let gImgId = gImgs[gImgs.length - 1].id + 1

//getter functions
function getImg(imgId) {
  return gImgs.find((img) => imgId === img.id)
}

function getImgs() {
  let filteredImgs = gImgs

  if (gFilterBy.text) {
    filteredImgs = filteredImgs.filter((img) =>
      img.keywords.some((key) => key.includes(gFilterBy.text))
    )
  }

  return filteredImgs
}

function getKeyWordsMap() {
  return gKeywordSearchCountMap
}

function getKeyWords() {
  return Object.keys(gKeywordSearchCountMap)
}

//setter functions
function incrementKeywordCount(keyword) {
  getKeyWordsMap()[keyword]++
}

function setTextFilter(text) {
  gFilterBy.text = text
}
