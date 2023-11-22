/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/createX.scss":
/*!*********************************!*\
  !*** ./src/styles/createX.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/images/bg-image.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/bg-image.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/oImages/bg-image..jpg";

/***/ }),

/***/ "./src/assets/images/discuss.png":
/*!***************************************!*\
  !*** ./src/assets/images/discuss.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/oImages/discuss..png";

/***/ }),

/***/ "./src/scripts/modules/discuss.mjs":
/*!*****************************************!*\
  !*** ./src/scripts/modules/discuss.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-modules/validator */ "./src/scripts/modules/validator.mjs");
/* harmony import */ var _images_discuss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @images/discuss */ "./src/assets/images/discuss.png");


const titleImg = document.getElementById('discussImage');
titleImg.src = _images_discuss__WEBPACK_IMPORTED_MODULE_1__;
const successEl = document.getElementById('discussSuccess');
const closeBtn = document.getElementById('discussClose');
const newForm = document.getElementById('discussForm');
(0,_js_modules_validator__WEBPACK_IMPORTED_MODULE_0__["default"])(newForm, successEl, closeBtn);

/***/ }),

/***/ "./src/scripts/modules/header.mjs":
/*!****************************************!*\
  !*** ./src/scripts/modules/header.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const burgerMenuEl = document.getElementById('burgerMenu');
document.getElementById('burgerToggle').addEventListener('click', () => {
  burgerMenuEl.classList.toggle('active-burger');
});

/***/ }),

/***/ "./src/scripts/modules/scrollToTop.mjs":
/*!*********************************************!*\
  !*** ./src/scripts/modules/scrollToTop.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const scrollToTopButton = document.getElementById("scrollToTopBtn");
const scrollFunction = () => {
  if (document.documentElement.scrollTop > 100) {
    scrollToTopButton.style.opacity = 1;
    scrollToTopButton.style.cursor = 'pointer';
  } else {
    scrollToTopButton.style.opacity = 0;
  }
};
window.onscroll = function () {
  scrollFunction();
};
scrollToTopButton.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});

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
  console.log(result);
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
  console.log(result);
  return result;
};

//Init function
const isValidate = (form, successBlock, closeButton) => {
  const requiredInputs = form.querySelectorAll('[data-required="true"]');
  const regexInputs = form.querySelectorAll('[data-typecheck]');
  const checkboxEl = form.querySelector('input[type="checkbox"]');
  checkRegexInputs(regexInputs);
  clearElements(checkboxEl);
  form.addEventListener('submit', e => {
    e.preventDefault();
    requiredInputs.forEach(field => {
      clearElements(field);
    });
    checkCheckbox(checkboxEl);
    checkRequiredInputs(requiredInputs);
    checkRegexInputs(regexInputs);
    if (checkRequiredInputs(requiredInputs) && checkCheckbox(checkboxEl)) {
      successBlock.style.transform = 'scaleY(1)';
      closeButton.addEventListener('click', () => {
        successBlock.style.transform = 'scaleY(0)';
      });
      form.reset();
    }
    ;
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValidate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_createX__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styles/createX */ "./src/styles/createX.scss");
/* harmony import */ var _js_modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-modules/header */ "./src/scripts/modules/header.mjs");
/* harmony import */ var _js_modules_discuss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-modules/discuss */ "./src/scripts/modules/discuss.mjs");
/* harmony import */ var _js_modules_scrollToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js-modules/scrollToTop */ "./src/scripts/modules/scrollToTop.mjs");
/* harmony import */ var _images_bg_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/bg-image */ "./src/assets/images/bg-image.jpg");





const titleImg = document.getElementById('titleImage');
titleImg.src = _images_bg_image__WEBPACK_IMPORTED_MODULE_4__;
})();

/******/ })()
;
//# sourceMappingURL=main.js.map