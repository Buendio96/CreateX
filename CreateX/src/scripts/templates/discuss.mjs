import cover from '@images/discuss'
import addBackground from '@js-modules/addBackground'
import isValidate from '@js-modules/validator'

addBackground('discussImage', cover)

const successEl = document.getElementById('discussSuccess')
const closeBtn = document.getElementById('discussClose')
const newForm = document.getElementById('discussForm')
isValidate(newForm, successEl, closeBtn)