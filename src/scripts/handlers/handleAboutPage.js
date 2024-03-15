import aboutTitleImage from '@images/bg-image-about'
import mapImage from '@images/bg-image-map'
import addBackground from '@js-utilities/addBackground'
import initSliderHistory from '@js-utilities/sliderHistory'
import '@s-pages/about'

addBackground('aboutTitleImage', aboutTitleImage)
addBackground('bgImageMap', mapImage)

const mainImage = document.getElementById('our-history-image')
const description = document.getElementById('our-history-description')
const listOfHistory = document.getElementById('our-history-list')
const swapLeft = document.getElementById('our-history-skip-left')
const swapRight = document.getElementById('our-history-skip-right')



initSliderHistory(mainImage, listOfHistory, description, swapLeft, swapRight)