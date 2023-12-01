import '@styles/createX'
import '@js-tamplates/header'
import '@js-tamplates/discuss'
import '@js-modules/scrollToTop'
import fetchData from '@js-api/getData'

import title from '@images/bg-image'
const titleImg = document.getElementById('titleImage')
titleImg.src = title

const PROJECTS_API = 'http://localhost:4100/projects'
const data = await fetchData(PROJECTS_API)
console.log(data)