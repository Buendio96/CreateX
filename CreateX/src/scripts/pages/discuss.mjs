import cover from '@images/discuss'
import isValidate from '@js-modules/validator'

const titleImg = document.getElementById('discussImage')
if (titleImg) titleImg.src = cover

const successEl = document.getElementById('discussSuccess')
const closeBtn = document.getElementById('discussClose')
const newForm = document.getElementById('discussForm')
isValidate(newForm, successEl, closeBtn)