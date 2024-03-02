(self["webpackChunkcreatex"] = self["webpackChunkcreatex"] || []).push([["src_pages_templates_slider_hbs-src_assets_images_services-0_jpg-src_assets_images_services-1_-e878c4"],{

/***/ "./src/pages/templates/slider.hbs":
/*!****************************************!*\
  !*** ./src/pages/templates/slider.hbs ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"slider "
    + alias4(((helper = (helper = lookupProperty(helpers,"modClass") || (depth0 != null ? lookupProperty(depth0,"modClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":19},"end":{"line":1,"column":31}}}) : helper)))
    + " center\">\r\n	<div class=\"slider__top "
    + alias4(((helper = (helper = lookupProperty(helpers,"modClass") || (depth0 != null ? lookupProperty(depth0,"modClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modClass","hash":{},"data":data,"loc":{"start":{"line":2,"column":25},"end":{"line":2,"column":37}}}) : helper)))
    + "\">\r\n		<div class=\"slider__title "
    + alias4(((helper = (helper = lookupProperty(helpers,"modClass") || (depth0 != null ? lookupProperty(depth0,"modClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modClass","hash":{},"data":data,"loc":{"start":{"line":3,"column":28},"end":{"line":3,"column":40}}}) : helper)))
    + " title-block\">\r\n			<h2 class=\"title-block__title "
    + alias4(((helper = (helper = lookupProperty(helpers,"modClass") || (depth0 != null ? lookupProperty(depth0,"modClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modClass","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":45}}}) : helper)))
    + "\">\r\n				"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":13}}}) : helper)))
    + "\r\n			</h2>\r\n		</div>\r\n		<div class=\"slider__buttons "
    + alias4(((helper = (helper = lookupProperty(helpers,"modClass") || (depth0 != null ? lookupProperty(depth0,"modClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modClass","hash":{},"data":data,"loc":{"start":{"line":8,"column":30},"end":{"line":8,"column":42}}}) : helper)))
    + "\">\r\n			<button type=\"button\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":29},"end":{"line":9,"column":35}}}) : helper)))
    + "-skip-left\" class=\"arrow "
    + alias4(((helper = (helper = lookupProperty(helpers,"modClass") || (depth0 != null ? lookupProperty(depth0,"modClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modClass","hash":{},"data":data,"loc":{"start":{"line":9,"column":60},"end":{"line":9,"column":72}}}) : helper)))
    + "\">\r\n				<img src=\"/assets/vendors/arrow-left.svg\" alt=\"go left\">\r\n			</button>\r\n			<button type=\"button\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":12,"column":29},"end":{"line":12,"column":35}}}) : helper)))
    + "-skip-right\" class=\"arrow "
    + alias4(((helper = (helper = lookupProperty(helpers,"modClass") || (depth0 != null ? lookupProperty(depth0,"modClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modClass","hash":{},"data":data,"loc":{"start":{"line":12,"column":61},"end":{"line":12,"column":73}}}) : helper)))
    + "\">\r\n				<img src=\"/assets/vendors/arrow-right.svg\" alt=\"go right\">\r\n			</button>\r\n		</div>\r\n	</div>\r\n	<div class=\"slider__content "
    + alias4(((helper = (helper = lookupProperty(helpers,"modClass") || (depth0 != null ? lookupProperty(depth0,"modClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modClass","hash":{},"data":data,"loc":{"start":{"line":17,"column":29},"end":{"line":17,"column":41}}}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":47},"end":{"line":17,"column":53}}}) : helper)))
    + "-container\">\r\n\r\n	</div>\r\n	<div class=\"slider__view-more "
    + alias4(((helper = (helper = lookupProperty(helpers,"modClass") || (depth0 != null ? lookupProperty(depth0,"modClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modClass","hash":{},"data":data,"loc":{"start":{"line":20,"column":31},"end":{"line":20,"column":43}}}) : helper)))
    + " view-more-block\">\r\n		<p class=\"view-more-block__title \">\r\n			Explore all our works\r\n		</p>\r\n		<a class=\"view-more-block__link "
    + alias4(((helper = (helper = lookupProperty(helpers,"modClass") || (depth0 != null ? lookupProperty(depth0,"modClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modClass","hash":{},"data":data,"loc":{"start":{"line":24,"column":34},"end":{"line":24,"column":46}}}) : helper)))
    + " solid-button\" href=\"#\">\r\n			view portfolio\r\n		</a>\r\n	</div>\r\n</div>";
},"useData":true});

/***/ }),

/***/ "./src/assets/images/services-0.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/services-0.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/services-0..jpg";

/***/ }),

/***/ "./src/assets/images/services-1.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/services-1.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/services-1..jpg";

/***/ }),

/***/ "./src/assets/images/services-2.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/services-2.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/services-2..jpg";

/***/ }),

/***/ "./src/assets/images/services-3.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/services-3.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/services-3..jpg";

/***/ }),

/***/ "./src/scripts/api/getProjectsData.mjs":
/*!*********************************************!*\
  !*** ./src/scripts/api/getProjectsData.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initGetFilteredData: () => (/* binding */ initGetFilteredData),
/* harmony export */   initGetRangedData: () => (/* binding */ initGetRangedData),
/* harmony export */   initGetRelatedData: () => (/* binding */ initGetRelatedData)
/* harmony export */ });
/* harmony import */ var _js_store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-store/store */ "./src/scripts/store/store.mjs");
/* harmony import */ var _js_utilities_dateFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-utilities/dateFormatter */ "./src/scripts/utilities/dateFormatter.mjs");
/* harmony import */ var _js_utilities_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-utilities/getData */ "./src/scripts/utilities/getData.mjs");
/* harmony import */ var _js_utilities_sortByDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js-utilities/sortByDate */ "./src/scripts/utilities/sortByDate.mjs");




const initGetFilteredData = async function (from) {
  let to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  try {
    const FROM_DATE = (0,_js_utilities_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.YYYY_MM_DD)(from);
    const TO_DATE = (0,_js_utilities_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.setNeededMonth)(to);
    const data = await (0,_js_utilities_getData__WEBPACK_IMPORTED_MODULE_2__["default"])(`http://localhost:4100/projects?date_gte=${TO_DATE}&date_lte=${FROM_DATE}`);
    _js_store_store__WEBPACK_IMPORTED_MODULE_0__["default"].PROJECTS.byDateProjects = (0,_js_utilities_sortByDate__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
  } catch (error) {
    console.error(error);
  }
};
const initGetRelatedData = async dataType => {
  try {
    const data = await (0,_js_utilities_getData__WEBPACK_IMPORTED_MODULE_2__["default"])(`http://localhost:4100/projects?dataType=${dataType}`);
    _js_store_store__WEBPACK_IMPORTED_MODULE_0__["default"].PROJECTS.relatedProjects[dataType] = data;
  } catch (error) {
    console.error(error);
  }
};
const initGetRangedData = async function () {
  let start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;
  try {
    const data = await (0,_js_utilities_getData__WEBPACK_IMPORTED_MODULE_2__["default"])(`http://localhost:4100/projects?_start=${start}&_end=${end}`);
    _js_store_store__WEBPACK_IMPORTED_MODULE_0__["default"].PROJECTS.allProjects = data;
  } catch (error) {
    console.log(error);
  }
};


/***/ }),

/***/ "./src/scripts/store/store.mjs":
/*!*************************************!*\
  !*** ./src/scripts/store/store.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const STORE = {
  PROJECTS: {
    allProjects: [],
    byDateProjects: [],
    relatedProjects: {
      construction: [],
      interior: [],
      project: [],
      repairs: []
    }
  },
  OPINIONS: {},
  NEWS: {
    recentNews: [],
    allNews: []
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (STORE);

/***/ }),

/***/ "./src/scripts/templates/portfolioCard.mjs":
/*!*************************************************!*\
  !*** ./src/scripts/templates/portfolioCard.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createPortfolioCard = item => {
  const htmlString = `
	  <div class="portfolio-card card ${item.dataType}">
		<div class="portfolio-card__img">
		  <img class="image-adaptive" src="/assets/static-images/portfolio/${item.imageName}" alt="The picture with ${item.name}">
		</div>
		<div class="portfolio-card__box">
		  <h3 class="portfolio-card__box-title">
			${item.name}
		  </h3>
		  <h3 class="portfolio-card__box-subtitle">
			${item.description}
		  </h3>
		  <a href="work/project.html?id=${item.id}" class="portfolio-card__box-btn outline-regular-btn">
			View Project
		  </a>
		</div>
	  </div>
	`;
  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = htmlString;
  return tempContainer.firstElementChild;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPortfolioCard);

/***/ }),

/***/ "./src/scripts/utilities/addBackground.mjs":
/*!*************************************************!*\
  !*** ./src/scripts/utilities/addBackground.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/scripts/utilities/addServicesBg.mjs":
/*!*************************************************!*\
  !*** ./src/scripts/utilities/addServicesBg.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-utilities/addBackground */ "./src/scripts/utilities/addBackground.mjs");

const addServicesBackground = (targetBlock, imageArray) => {
  if (targetBlock.length > 0 && imageArray.length > 0) {
    for (let index = 0; targetBlock.length > index; index++) {
      const imageId = targetBlock[index];
      const imageName = imageArray[index];
      if (imageName) (0,_js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_0__["default"])(imageId, imageName);else console.log('Image not found');
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addServicesBackground);

/***/ }),

/***/ "./src/scripts/utilities/carousel.mjs":
/*!********************************************!*\
  !*** ./src/scripts/utilities/carousel.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const carousel = OPTIONS => {
  const {
    inputData,
    containerEl,
    skipLeft,
    skipRight,
    cardTemplate
  } = OPTIONS;
  let currentIndex = 0;
  renderCards(containerEl, cardTemplate, inputData, currentIndex);
  if (skipRight) {
    skipRight.addEventListener('click', () => {
      currentIndex = handleRightClick(currentIndex, inputData);
      renderCards(containerEl, cardTemplate, inputData, currentIndex);
    });
  } else {
    console.log('SkipRight not found');
  }
  if (skipLeft) {
    skipLeft.addEventListener('click', () => {
      currentIndex = handleLeftClick(currentIndex, inputData);
      renderCards(containerEl, cardTemplate, inputData, currentIndex);
    });
  } else {
    console.log('SkipLeft not found');
  }
};
const renderCards = (container, cardTemplate, array, currentIndex) => {
  if ((container || cardTemplate || array || currentIndex) === undefined) {
    console.log('All arguments were not transmitted in --RENDER CARDS--', container, cardTemplate, array, container);
    return;
  } else {
    container.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      let index = currentIndex + i;
      if (index < array.length) {
        const card = cardTemplate(array[index]);
        container.appendChild(card);
      }
    }
  }
};
const handleRightClick = (currentIndex, array) => {
  currentIndex += 3;
  if (currentIndex >= array.length) {
    currentIndex = 0;
  }
  return currentIndex;
};
const handleLeftClick = (currentIndex, array) => {
  currentIndex -= 3;
  if (currentIndex < 0) {
    currentIndex = Math.max(0, array.length - 3);
  }
  return currentIndex;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);

/***/ }),

/***/ "./src/scripts/utilities/dateFormatter.mjs":
/*!*************************************************!*\
  !*** ./src/scripts/utilities/dateFormatter.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MM_DD_YYYY: () => (/* binding */ MM_DD_YYYY),
/* harmony export */   YYYY_MM_DD: () => (/* binding */ YYYY_MM_DD),
/* harmony export */   setNeededMonth: () => (/* binding */ setNeededMonth)
/* harmony export */ });
const YYYY_MM_DD = date => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  return `${year}-${month}-${day}`;
};
const MM_DD_YYYY = date => {
  let day = date.getDate();
  let monthName = date.toLocaleDateString('en-US', {
    month: 'long'
  });
  let year = date.getFullYear();
  return `${monthName} ${day}, ${year}`;
};
const setNeededMonth = targetTime => {
  const current = new Date();
  current.setMonth(current.getMonth() - targetTime);
  return YYYY_MM_DD(current);
};


/***/ }),

/***/ "./src/scripts/utilities/getData.mjs":
/*!*******************************************!*\
  !*** ./src/scripts/utilities/getData.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      'Content-Type': 'applications/json'
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

/***/ "./src/scripts/utilities/sortByDate.mjs":
/*!**********************************************!*\
  !*** ./src/scripts/utilities/sortByDate.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sortByDate = data => {
  if (data.length > 0) {
    return data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (!isNaN(dateA) && !isNaN(dateB)) {
        return dateB - dateA;
      }
    });
  } else console.log('Data not found');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByDate);

/***/ })

}]);
//# sourceMappingURL=src_pages_templates_slider_hbs-src_assets_images_services-0_jpg-src_assets_images_services-1_-e878c4.js.map