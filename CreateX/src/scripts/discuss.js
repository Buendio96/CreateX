import isValidate from '@js/validator'
import cover from '@images/discuss'

const titleImg = document.getElementById('discussImage')
titleImg.src = cover

const successEl = document.getElementById('discussSuccess');
const closeBtn = document.getElementById('discussClose');
const newForm = document.getElementById('discussForm');
isValidate(newForm, successEl, closeBtn)