/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!***************************************!*\
  !*** ./src/scripts/pages/homepage.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-modules/videoPlayer */ "./src/scripts/modules/videoPlayer.mjs");
/* harmony import */ var _js_modules_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-modules/validator */ "./src/scripts/modules/validator.mjs");
/* harmony import */ var _images_homepage_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @images/homepage-services */ "./src/assets/images/homepage-services.png");




//============================================================
const videoBox = document.getElementById('homepageVideoBox');
if (videoBox) (0,_js_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_0__["default"])(videoBox);

//============================================================
const newForm = document.getElementById('questionForm');
const successEl = document.getElementById('questionSuccess');
const closeBtn = document.getElementById('questionClose');
if (newForm) (0,_js_modules_validator__WEBPACK_IMPORTED_MODULE_1__["default"])(newForm, successEl, closeBtn);

//============================================================
const targetBlock = document.getElementById('ourServicesBg');
if (targetBlock && _images_homepage_services__WEBPACK_IMPORTED_MODULE_2__) targetBlock.src = _images_homepage_services__WEBPACK_IMPORTED_MODULE_2__;
const imageBlocks = ['service-one', 'service-two', 'service-three', 'service-four'];
const bgImages = [__webpack_require__(/*! @images/home-serv-item-0 */ "./src/assets/images/home-serv-item-0.jpg"), __webpack_require__(/*! @images/home-serv-item-1 */ "./src/assets/images/home-serv-item-1.jpg"), __webpack_require__(/*! @images/home-serv-item-2 */ "./src/assets/images/home-serv-item-2.jpg"), __webpack_require__(/*! @images/home-serv-item-3 */ "./src/assets/images/home-serv-item-3.jpg")];
imageBlocks.forEach((blockId, index) => {
  const serviceBox = document.getElementById(blockId);
  if (serviceBox) {
    serviceBox.src = bgImages[index];
  }
});
})();

/******/ })()
;
//# sourceMappingURL=homepageJS.js.map