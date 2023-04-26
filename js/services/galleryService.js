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
}

let gImgId = gImgs[gImgs.length - 1].id + 1

//getter functions
function getImg(imgId) {
  return gImgs.find((img) => imgId === img.id)
}

function getImgs() {
  return gImgs
}

function getKeyWordsMap() {
  return gKeywordSearchCountMap
}

function getKeyWords() {
  return gKeywordSearchCountMap.keys()
}

//setter functions
function incrementKeywordCount(keyword) {
  getKeyWordsMap()[keyword]++
}
