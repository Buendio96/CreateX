/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  alert('Something went wrong');
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/scripts/pages/homepage.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-modules/videoPlayer */ "./src/scripts/modules/videoPlayer.mjs");

const videoBox = document.getElementById('homepageVideoBox');
(0,_js_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_0__["default"])(videoBox);
})();

/******/ })()
;
//# sourceMappingURL=homepage.js.map