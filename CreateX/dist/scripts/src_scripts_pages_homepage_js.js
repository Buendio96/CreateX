"use strict";
(self["webpackChunkcreatex"] = self["webpackChunkcreatex"] || []).push([["src_scripts_pages_homepage_js"],{

/***/ "./src/scripts/pages/homepage.js":
/*!***************************************!*\
  !*** ./src/scripts/pages/homepage.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-modules/videoPlayer */ "./src/scripts/modules/videoPlayer.mjs");
/* harmony import */ var _js_modules_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-modules/validator */ "./src/scripts/modules/validator.mjs");
/* harmony import */ var _js_modules_addBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-modules/addBackground */ "./src/scripts/modules/addBackground.mjs");
/* harmony import */ var _images_homepage_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/homepage-services */ "./src/assets/images/homepage-services.png");
/* harmony import */ var _images_homepage_support__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/homepage-support */ "./src/assets/images/homepage-support.jpg");
/* harmony import */ var _js_store_projectsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @js-store/projectsStore */ "./src/scripts/store/projectsStore.mjs");
/* harmony import */ var _js_modules_renderCards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js-modules/renderCards */ "./src/scripts/modules/renderCards.mjs");







//============================================================
const videoBox = document.getElementById('homepageVideoBox');
if (videoBox && _js_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_0__["default"]) (0,_js_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_0__["default"])(videoBox);
//============================================================
const newForm = document.getElementById('questionForm');
const successEl = document.getElementById('questionSuccess');
const closeBtn = document.getElementById('questionClose');
if (newForm) (0,_js_modules_validator__WEBPACK_IMPORTED_MODULE_1__["default"])(newForm, successEl, closeBtn);
//============================================================
(0,_js_modules_addBackground__WEBPACK_IMPORTED_MODULE_2__["default"])('ourServicesBg', _images_homepage_services__WEBPACK_IMPORTED_MODULE_3__);
(0,_js_modules_addBackground__WEBPACK_IMPORTED_MODULE_2__["default"])('supportBoxBg', _images_homepage_support__WEBPACK_IMPORTED_MODULE_4__);
const imageBlocks = ['service-one', 'service-two', 'service-three', 'service-four'];
const bgImages = [__webpack_require__(/*! @images/home-serv-item-0 */ "./src/assets/images/home-serv-item-0.jpg"), __webpack_require__(/*! @images/home-serv-item-1 */ "./src/assets/images/home-serv-item-1.jpg"), __webpack_require__(/*! @images/home-serv-item-2 */ "./src/assets/images/home-serv-item-2.jpg"), __webpack_require__(/*! @images/home-serv-item-3 */ "./src/assets/images/home-serv-item-3.jpg")];
imageBlocks.forEach((blockId, index) => {
  (0,_js_modules_addBackground__WEBPACK_IMPORTED_MODULE_2__["default"])(blockId, bgImages[index]);
});

//============================================================
const todayIs = new Date();
await (0,_js_store_projectsStore__WEBPACK_IMPORTED_MODULE_5__.initGetFiltredData)(todayIs); //As the second argument can be the Number for the date range

const PARAMS = {
  array: _js_store_projectsStore__WEBPACK_IMPORTED_MODULE_5__.PROJECTS_STORE.byDateProjects,
  containerElement: document.getElementById('our-work-container'),
  skipLeft: document.getElementById('our-work-go-left'),
  skipRight: document.getElementById('our-work-go-right')
  /* quantityOfCards: 3 */ //This is an optional option to increase the output cards
};

(0,_js_modules_renderCards__WEBPACK_IMPORTED_MODULE_6__["default"])(PARAMS);
//============================================================
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/assets/images/home-serv-item-0.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/home-serv-item-0.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/home-serv-item-0..jpg";

/***/ }),

/***/ "./src/assets/images/home-serv-item-1.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/home-serv-item-1.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/home-serv-item-1..jpg";

/***/ }),

/***/ "./src/assets/images/home-serv-item-2.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/home-serv-item-2.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/home-serv-item-2..jpg";

/***/ }),

/***/ "./src/assets/images/home-serv-item-3.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/home-serv-item-3.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/home-serv-item-3..jpg";

/***/ }),

/***/ "./src/assets/images/homepage-services.png":
/*!*************************************************!*\
  !*** ./src/assets/images/homepage-services.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/homepage-services..png";

/***/ }),

/***/ "./src/assets/images/homepage-support.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/homepage-support.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/homepage-support..jpg";

/***/ }),

/***/ "./src/scripts/api/getData.mjs":
/*!*************************************!*\
  !*** ./src/scripts/api/getData.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchData = async function (apiUrl) {
  let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  let data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const options = {
    method,
    headers: {
      'Conent-Type': 'applications/json'
    }
  };
  if (method === 'POST' && data) {
    options.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(apiUrl, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);

/***/ }),

/***/ "./src/scripts/modules/addBackground.mjs":
/*!***********************************************!*\
  !*** ./src/scripts/modules/addBackground.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addBackground = (idOfElement, imageEl) => {
  const targetElement = document.getElementById(`${idOfElement}`);
  if (targetElement && imageEl) targetElement.src = imageEl;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addBackground);

/***/ }),

/***/ "./src/scripts/modules/filterByDate.mjs":
/*!**********************************************!*\
  !*** ./src/scripts/modules/filterByDate.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YYYY_MM_DD: () => (/* binding */ YYYY_MM_DD),
/* harmony export */   filterByDate: () => (/* binding */ filterByDate)
/* harmony export */ });
const YYYY_MM_DD = date => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  return `${year}-${month}-${day}`;
};
const filterByDate = targetTime => {
  const sometimeAgo = new Date();
  sometimeAgo.setMonth(sometimeAgo.getMonth() - targetTime);
  return YYYY_MM_DD(sometimeAgo);
};


/***/ }),

/***/ "./src/scripts/modules/renderCards.mjs":
/*!*********************************************!*\
  !*** ./src/scripts/modules/renderCards.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_templates_work_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-templates/work-item */ "./src/scripts/templates/work-item.mjs");

const showCards = _ref => {
  let {
    array,
    quantityOfCards = 3,
    skipLeft,
    skipRight,
    containerElement
  } = _ref;
  let currentIndex = 0;
  const renderCards = () => {
    containerElement.innerHTML = '';
    for (let x = 0; x < quantityOfCards; x++) {
      const index = currentIndex + x;
      if (index < array.length) {
        const card = (0,_js_templates_work_item__WEBPACK_IMPORTED_MODULE_0__["default"])(array[index]);
        containerElement.appendChild(card);
      }
    }
  };
  const handleRightButtonClick = () => {
    currentIndex += quantityOfCards;
    if (currentIndex >= array.length) {
      currentIndex = 0;
    }
    renderCards();
  };
  const handleLeftButtonClick = () => {
    currentIndex -= quantityOfCards;
    if (currentIndex < 0) {
      currentIndex = Math.max(0, array.length - quantityOfCards);
    }
    renderCards();
  };
  if (skipLeft) skipLeft.addEventListener('click', handleLeftButtonClick);
  if (skipRight) skipRight.addEventListener('click', handleRightButtonClick);
  renderCards();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCards);

/***/ }),

/***/ "./src/scripts/modules/validator.mjs":
/*!*******************************************!*\
  !*** ./src/scripts/modules/validator.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//Error toggle
const showError = input => {
  input.classList.add('error__box');
  input.parentElement.classList.add('error');
};
const hideError = input => {
  input.classList.remove('error__box');
  input.parentElement.classList.remove('error');
};

//Helped function
const convertToText = field => {
  if (field) return field.value.trim();else console.log('Field not found');
};
const clearElements = element => {
  element.addEventListener('change', () => {
    hideError(element);
  });
};
const regexCheck = (field, dataType) => {
  const regexPatterns = {
    'letters': /^[a-zA-Z\s]+$/,
    'numbers': /^[+]?\d+$/,
    'email': /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  };
  return regexPatterns[dataType] ? regexPatterns[dataType].test(convertToText(field)) : true;
};
const emptyFieldsCheck = field => {
  if (convertToText(field) === '') {
    return false;
  } else {
    return true;
  }
};

//Main function
const checkRegexInputs = fields => {
  fields.forEach(field => {
    field.addEventListener('change', () => {
      if (convertToText(field) === '' || regexCheck(field, field.getAttribute('data-typecheck'))) {
        hideError(field);
      } else {
        showError(field);
      }
    });
  });
};
const checkRequiredInputs = fields => {
  let result = true;
  fields.forEach(field => {
    if (emptyFieldsCheck(field)) {
      hideError(field);
    } else {
      showError(field);
      result = false;
    }
  });
  return result;
};
const checkCheckbox = element => {
  let result = true;
  if (element.checked) {
    hideError(element);
  } else {
    showError(element);
    result = false;
  }
  ;
  return result;
};

//Init function
const isValidate = (form, successBlock, closeButton) => {
  const requiredInputs = form.querySelectorAll('[data-required="true"]');
  const regexInputs = form.querySelectorAll('[data-typecheck]');
  const checkboxEl = form.querySelector('input[type="checkbox"]');
  if (checkboxEl) clearElements(checkboxEl);
  if (regexInputs) checkRegexInputs(regexInputs);
  form.addEventListener('submit', e => {
    e.preventDefault();
    requiredInputs.forEach(field => {
      clearElements(field);
    });
    if (checkboxEl) checkCheckbox(checkboxEl);
    if (requiredInputs) checkRequiredInputs(requiredInputs);
    if (regexInputs) checkRegexInputs(regexInputs);
    if (checkRequiredInputs(requiredInputs) && (!checkboxEl || checkCheckbox(checkboxEl))) {
      successBlock.style.transform = 'scaleY(1)';
      closeButton.addEventListener('click', () => {
        successBlock.style.transform = 'scaleY(0)';
      });
      form.reset();
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValidate);

/***/ }),

/***/ "./src/scripts/modules/videoPlayer.mjs":
/*!*********************************************!*\
  !*** ./src/scripts/modules/videoPlayer.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const playAndPause = videoElement => {
  videoElement.paused ? videoElement.play() : videoElement.pause();
};
const volumeMute = videoElement => {
  videoElement.muted = !videoElement.muted;
};
const volumeLvl = (videoElement, volumeControl) => {
  let v = volumeControl.value;
  videoElement.volume = v / 100;
};
const progress = (videoElement, progressControl) => {
  videoElement.addEventListener('timeupdate', () => {
    let d = videoElement.duration;
    let c = videoElement.currentTime;
    progressControl.value = 100 * c / d;
  });
};
const rewide = (videoElement, progressControl, event) => {
  let w = progressControl.offsetWidth;
  let o = event.offsetX;
  progressControl.value = 100 * o / w;
  videoElement.currentTime = videoElement.duration * (o / w);
};
const errorMessage = elementName => {
  console.error(`${elementName} isn't found`);
};
const setFunction = (control, func, targetElement) => {
  if (!control) {
    console.error(`${targetElement.id} - control not found`);
  } else {
    control.addEventListener('change' in control ? 'change' : 'click', e => {
      func(targetElement, control, e);
    });
  }
};
const player = box => {
  const videoElement = box.querySelector(`#${box.id}-video`);
  if (!videoElement) {
    errorMessage(`${box.id}-video`);
  } else {
    const playControl = box.querySelector(`#${box.id}-play`);
    const progressControl = box.querySelector(`#${box.id}-progress`);
    const muteControl = box.querySelector(`#${box.id}-mute`);
    const volumeControl = box.querySelector(`#${box.id}-volume`);
    setFunction(playControl, playAndPause, videoElement);
    setFunction(muteControl, volumeMute, videoElement);
    setFunction(volumeControl, volumeLvl, videoElement);
    setFunction(progressControl, rewide, videoElement);
    progress(videoElement, progressControl);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);

/***/ }),

/***/ "./src/scripts/store/projectsStore.mjs":
/*!*********************************************!*\
  !*** ./src/scripts/store/projectsStore.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PROJECTS_STORE: () => (/* binding */ PROJECTS_STORE),
/* harmony export */   initGetFiltredData: () => (/* binding */ initGetFiltredData)
/* harmony export */ });
/* harmony import */ var _js_api_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-api/getData */ "./src/scripts/api/getData.mjs");
/* harmony import */ var _js_modules_filterByDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-modules/filterByDate */ "./src/scripts/modules/filterByDate.mjs");


const PROJECTS_STORE = {
  allProjects: [],
  byDateProjects: []
};
const sortByDate = data => {
  return data.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (!isNaN(dateA) && !isNaN(dateB)) {
      return dateB - dateA;
    }
  });
};
const initGetFiltredData = async function (from) {
  let to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  try {
    if (_js_modules_filterByDate__WEBPACK_IMPORTED_MODULE_1__.filterByDate !== undefined) {
      const FROM_DATE = (0,_js_modules_filterByDate__WEBPACK_IMPORTED_MODULE_1__.YYYY_MM_DD)(from);
      const TO_DATE = (0,_js_modules_filterByDate__WEBPACK_IMPORTED_MODULE_1__.filterByDate)(to);
      const PROJECTS_API = `http://localhost:4100/projects?date_gte=${TO_DATE}&date_lte=${FROM_DATE}`;
      const DATA = await (0,_js_api_getData__WEBPACK_IMPORTED_MODULE_0__["default"])(PROJECTS_API);
      PROJECTS_STORE.byDateProjects = sortByDate(DATA);
    }
    ;
  } catch (error) {
    console.log(error);
  }
};


/***/ }),

/***/ "./src/scripts/templates/work-item.mjs":
/*!*********************************************!*\
  !*** ./src/scripts/templates/work-item.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createCard = item => {
  const htmlString = `
	  <div class="portfolio-card card">
		<div class="portfolio-card__img">
		  <img class="image-adaptive" src="assets/static-images/${item.imageName}" alt="The picture with ${item.name}">
		</div>
		<div class="portfolio-card__box">
		  <h3 class="portfolio-card__box-title">
			${item.name}
		  </h3>
		  <h3 class="portfolio-card__box-subtitle">
			${item.description}
		  </h3>
		  <a href="#" class="portfolio-card__box-btn outline-regular-btn">
			View Project
		  </a>
		</div>
	  </div>
	`;
  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = htmlString;
  return tempContainer.firstElementChild;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCard);

/***/ })

}]);
//# sourceMappingURL=src_scripts_pages_homepage_js.js.map