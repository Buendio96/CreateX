import '@styles/createX'
import '@js/header'
import '@js/discuss'
import isValidate from '@js/validator'
import title from '@images/bg-image'
const titleImg = document.getElementById('titleImage')
titleImg.src = title

const newForm = document.getElementById('discussForm')
isValidate(newForm)