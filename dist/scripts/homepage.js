/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/handlers/handleHomePage.js":
/*!************************************************!*\
  !*** ./src/scripts/handlers/handleHomePage.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_bg_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @images/bg-image */ "./src/assets/images/bg-image.jpg");
/* harmony import */ var _images_homepage_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @images/homepage-services */ "./src/assets/images/homepage-services.png");
/* harmony import */ var _images_homepage_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @images/homepage-support */ "./src/assets/images/homepage-support.jpg");
/* harmony import */ var _images_services_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/services-0 */ "./src/assets/images/services-0.jpg");
/* harmony import */ var _images_services_1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/services-1 */ "./src/assets/images/services-1.jpg");
/* harmony import */ var _images_services_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @images/services-2 */ "./src/assets/images/services-2.jpg");
/* harmony import */ var _images_services_3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @images/services-3 */ "./src/assets/images/services-3.jpg");
/* harmony import */ var _js_api_getNewsData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @js-api/getNewsData */ "./src/scripts/api/getNewsData.mjs");
/* harmony import */ var _js_api_getOpinionsData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @js-api/getOpinionsData */ "./src/scripts/api/getOpinionsData.mjs");
/* harmony import */ var _js_api_getProjectsData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @js-api/getProjectsData */ "./src/scripts/api/getProjectsData.mjs");
/* harmony import */ var _js_store_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @js-store/store */ "./src/scripts/store/store.mjs");
/* harmony import */ var _js_templates_portfolioCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @js-templates/portfolioCard */ "./src/scripts/templates/portfolioCard.mjs");
/* harmony import */ var _js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @js-utilities/addBackground */ "./src/scripts/utilities/addBackground.mjs");
/* harmony import */ var _js_utilities_addServicesBg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @js-utilities/addServicesBg */ "./src/scripts/utilities/addServicesBg.mjs");
/* harmony import */ var _js_utilities_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @js-utilities/carousel */ "./src/scripts/utilities/carousel.mjs");
/* harmony import */ var _js_utilities_progressRing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @js-utilities/progressRing */ "./src/scripts/utilities/progressRing.mjs");
/* harmony import */ var _js_utilities_showNews__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @js-utilities/showNews */ "./src/scripts/utilities/showNews.mjs");
/* harmony import */ var _js_utilities_showOpinion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @js-utilities/showOpinion */ "./src/scripts/utilities/showOpinion.mjs");
/* harmony import */ var _js_utilities_validator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @js-utilities/validator */ "./src/scripts/utilities/validator.mjs");
/* harmony import */ var _js_utilities_videoPlayer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @js-utilities/videoPlayer */ "./src/scripts/utilities/videoPlayer.mjs");
/* harmony import */ var _p_temp_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @p-temp/slider */ "./src/pages/templates/slider.hbs");
/* harmony import */ var _p_temp_slider__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_p_temp_slider__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _s_pages_homepage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @s-pages/homepage */ "./src/styles/pages/homepage.scss");























//DATA ACQUISITION==========================================
const TODAY = new Date();
await (0,_js_api_getProjectsData__WEBPACK_IMPORTED_MODULE_9__.initGetFilteredData)(TODAY, 4); //As the second argument can be the Number for the date range
await (0,_js_api_getOpinionsData__WEBPACK_IMPORTED_MODULE_8__["default"])();
await (0,_js_api_getNewsData__WEBPACK_IMPORTED_MODULE_7__["default"])(); //The argument can be the number of news required(3 by default)
//BACKGROUND ADDITION========================================
const homepageServices = document.getElementById('homepage-serviceBlock');
(0,_js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_12__["default"])('titleImage', _images_bg_image__WEBPACK_IMPORTED_MODULE_0__);
(0,_js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_12__["default"])('ourServicesBg', _images_homepage_services__WEBPACK_IMPORTED_MODULE_1__);
(0,_js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_12__["default"])('supportBoxBg', _images_homepage_support__WEBPACK_IMPORTED_MODULE_2__);
if (homepageServices) {
  const targetElementsName = ['service-0', 'service-1', 'service-2', 'service-3'];
  const imagesBlock = [_images_services_0__WEBPACK_IMPORTED_MODULE_3__, _images_services_1__WEBPACK_IMPORTED_MODULE_4__, _images_services_2__WEBPACK_IMPORTED_MODULE_5__, _images_services_3__WEBPACK_IMPORTED_MODULE_6__];
  (0,_js_utilities_addServicesBg__WEBPACK_IMPORTED_MODULE_13__["default"])(targetElementsName, imagesBlock);
}
//WE-ARE=====================================================
const videoBox = document.getElementById('homepageVideoBox');
if (videoBox && _js_utilities_videoPlayer__WEBPACK_IMPORTED_MODULE_19__["default"]) (0,_js_utilities_videoPlayer__WEBPACK_IMPORTED_MODULE_19__["default"])(videoBox);
//OUR-CORE===================================================
const newForm = document.getElementById('questionForm');
const successEl = document.getElementById('questionSuccess');
const closeBtn = document.getElementById('questionClose');
if (newForm) (0,_js_utilities_validator__WEBPACK_IMPORTED_MODULE_18__["default"])(newForm, successEl, closeBtn);
//OUR-WORK===================================================
const HOMEPAGE_TEMPLATE_OPTION = {
  title: 'Browse our selected projects and learn more about our work',
  id: 'selected-projects',
  modClass: null
};
const selectedProjectsContainer = document.getElementById('selected-projects');
if (selectedProjectsContainer) {
  const renderHTML = _p_temp_slider__WEBPACK_IMPORTED_MODULE_20___default()(HOMEPAGE_TEMPLATE_OPTION);
  selectedProjectsContainer.innerHTML = renderHTML;
} else {
  console.log('--selectedProjectsContainer-- not found');
}
const SELECTED_PROJECTS_OPTIONS = {
  inputData: _js_store_store__WEBPACK_IMPORTED_MODULE_10__["default"].PROJECTS.byDateProjects,
  containerEl: document.getElementById('selected-projects-container'),
  skipLeft: document.getElementById('selected-projects-skip-left'),
  skipRight: document.getElementById('selected-projects-skip-right'),
  cardTemplate: _js_templates_portfolioCard__WEBPACK_IMPORTED_MODULE_11__["default"]
};
if (_js_store_store__WEBPACK_IMPORTED_MODULE_10__["default"].PROJECTS.byDateProjects && _js_store_store__WEBPACK_IMPORTED_MODULE_10__["default"].PROJECTS.byDateProjects.length > 0) {
  (0,_js_utilities_carousel__WEBPACK_IMPORTED_MODULE_14__["default"])(SELECTED_PROJECTS_OPTIONS);
} else {
  console.log('Projects store not found');
}
//SUPPORTED===================================================
const OPINION_EL = document.getElementById(`opinion`);
const OPINION_DOM_ELEMENTS = {
  avatar: document.getElementById(`opinionBoxImg`),
  opinion: document.getElementById(`opinionText`),
  name: document.getElementById(`opinionUserName`),
  companyName: document.getElementById(`opinionUserJob`),
  workPositions: document.getElementById(`opinionUserPosition`)
};
if (_js_store_store__WEBPACK_IMPORTED_MODULE_10__["default"].OPINIONS.length > 0 && OPINION_EL) {
  (0,_js_utilities_showOpinion__WEBPACK_IMPORTED_MODULE_17__.initShowOpinion)(OPINION_DOM_ELEMENTS, _js_store_store__WEBPACK_IMPORTED_MODULE_10__["default"].OPINIONS);
  document.getElementById('opinionToLeft').addEventListener('click', () => (0,_js_utilities_showOpinion__WEBPACK_IMPORTED_MODULE_17__.toLeft)(OPINION_DOM_ELEMENTS, _js_store_store__WEBPACK_IMPORTED_MODULE_10__["default"].OPINIONS));
  document.getElementById('opinionToRight').addEventListener('click', () => (0,_js_utilities_showOpinion__WEBPACK_IMPORTED_MODULE_17__.toRight)(OPINION_DOM_ELEMENTS, _js_store_store__WEBPACK_IMPORTED_MODULE_10__["default"].OPINIONS));
}
//PROGRESS===================================================
const PROGRESS_EL = document.getElementById('progressBox');
const isElementInViewport = element => {
  if (element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
};
const handleScroll = () => {
  if (isElementInViewport(PROGRESS_EL)) {
    setTimeout(() => {
      (0,_js_utilities_progressRing__WEBPACK_IMPORTED_MODULE_15__["default"])(document.getElementById('progressRingClients'), 98);
      (0,_js_utilities_progressRing__WEBPACK_IMPORTED_MODULE_15__["default"])(document.getElementById('progressRingExp'), 75);
      (0,_js_utilities_progressRing__WEBPACK_IMPORTED_MODULE_15__["default"])(document.getElementById('progressRingHours'), 82);
      (0,_js_utilities_progressRing__WEBPACK_IMPORTED_MODULE_15__["default"])(document.getElementById('progressRingProjects'), 100);
    }, 500);
  }
  ;
};
window.addEventListener('scroll', handleScroll);

//RECENT NEWS===================================================
const RECENT_EL = document.getElementById('recentBox');
if (RECENT_EL) (0,_js_utilities_showNews__WEBPACK_IMPORTED_MODULE_16__["default"])(RECENT_EL, _js_store_store__WEBPACK_IMPORTED_MODULE_10__["default"].NEWS.recentNews);
const showCommentsButton = document.querySelectorAll('#showComments');
if (showCommentsButton) {
  showCommentsButton.forEach(button => {
    button.addEventListener('click', () => {
      const parentBlock = button.closest('.news-card');
      const commentsBlock = parentBlock.querySelector('.news-card__comments-box');
      if (commentsBlock) commentsBlock.classList.toggle('showComments');
    });
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/homepage.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/homepage.scss ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.solid-button {
  font-size: 16px;
  height: 52px;
  color: #fff;
  background-color: #ff5a30;
  padding: 0 40px;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-family: "Ubu-B";
  transition: all 0.4s ease;
  letter-spacing: 0.5px;
  border-radius: 4px;
}
.solid-button:hover {
  background: #fff;
  color: #ff5a30;
  border: 1px solid #ff5a30;
}

.regular-button {
  font-size: 14px;
  height: 44px;
  color: #fff;
  background-color: #ff5a30;
  padding: 0 32px;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-family: "Ubu-B";
  transition: all 0.4s ease;
  letter-spacing: 0.5px;
  border-radius: 4px;
}
.regular-button:hover {
  background: #fff;
  color: #ff5a30;
  border: 1px solid #ff5a30;
}

.outline-solid-btn {
  font-size: 16px;
  color: #ff5a30;
  height: 52px;
  background-color: transparent;
  padding: 0 40px;
  border: 1px solid #ff5a30;
  display: inline-flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-family: "Ubu-B";
  transition: all 0.4s ease;
  letter-spacing: 0.5px;
  border-radius: 4px;
}
.outline-solid-btn:hover {
  background: #fff;
  color: #ff5a30;
  border: 1px solid #ff5a30;
}

.outline-regular-btn {
  font-size: 14px;
  color: #ff5a30;
  height: 44px;
  background-color: transparent;
  padding: 0 32px;
  border: 1px solid #ff5a30;
  display: inline-flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-family: "Ubu-B";
  transition: all 0.4s ease;
  letter-spacing: 0.5px;
  border-radius: 4px;
}
.outline-regular-btn:hover {
  color: #fff;
  background: #ff5a30;
  border: 1px solid #ff5a30;
}

.arrow {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  transition: all 0.4s ease;
}
.arrow:hover {
  transition: all 0.3s ease;
  background: #ff5a30;
}
.arrow:hover img {
  transition: all 0.4s ease;
  filter: invert(1);
}
@media (max-width: 768px) {
  .arrow {
    width: 32px;
    height: 32px;
  }
}

.link-hover:hover {
  color: #ff5a30;
}

.label {
  color: #424551;
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
}

.input {
  color: #424551;
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  padding: 11px 0 12px 16px;
  border: 1px solid #d7dadd;
  background-color: #f4f5f6;
  border-radius: 4px;
}

.title-block {
  margin: 0 auto;
  text-align: center;
}
.title-block__title {
  font-family: "Ubu-B";
  font-size: 46px;
  line-height: 130%;
  color: #1e212c;
}
@media (max-width: 992px) {
  .title-block__title {
    font-size: 40px;
  }
}
@media (max-width: 768px) {
  .title-block__title {
    font-size: 25px;
  }
}
@media (max-width: 480px) {
  .title-block__title {
    font-size: 18px;
  }
}
.title-block__subtitle {
  margin: 24px 0 0;
  font-size: 18px;
  line-height: 150%;
  color: #787a80;
  font-family: "Ubu-R";
  font-weight: 400;
}
@media (max-width: 768px) {
  .title-block__subtitle {
    font-size: 15px;
    margin: 12px 0 0;
  }
}
@media (max-width: 480px) {
  .title-block__subtitle {
    margin: 10px 0 0;
    font-size: 13px;
  }
}

.text-left {
  text-align: left;
}

.view-more-block {
  display: flex;
  column-gap: 40px;
}
.view-more-block__title {
  color: #1e212c;
  font-size: 28px;
  font-family: "Ubu-B";
  line-height: 150%;
}
@media (max-width: 768px) {
  .view-more-block__title {
    font-size: 24px;
    flex: 0 1 100%;
  }
}
@media (max-width: 768px) {
  .view-more-block__link {
    height: 30px;
  }
}
@media (max-width: 768px) {
  .view-more-block {
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    row-gap: 10px;
    margin: 20px 0 0;
  }
}

.grid {
  display: grid;
  grid-template: 1fr/1fr minmax(auto, 1230px) 1fr;
  padding: 0 15px;
}

.center {
  grid-column: 2/3;
}

.image-adaptive {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  -o-object-fit: cover;
     object-fit: cover;
}

@media (max-width: 992px) {
  .slider {
    padding: 80px 0;
  }
}
@media (max-width: 768px) {
  .slider {
    padding: 60px 0;
  }
}
@media (max-width: 480px) {
  .slider {
    padding: 40px 0;
  }
}
.slider__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.slider__title {
  text-align: left;
  max-width: 700px;
  margin: 0;
}
.slider__buttons {
  display: flex;
  column-gap: 24px;
}
.slider__content {
  display: flex;
  margin: 60px 0 0;
  column-gap: 30px;
}
@media (max-width: 992px) {
  .slider__content {
    margin: 30px 0 0;
    column-gap: 20px;
  }
}
@media (max-width: 768px) {
  .slider__content {
    margin: 15px 0 0;
    flex-wrap: wrap;
    row-gap: 10px;
  }
}
.slider__view-more {
  display: flex;
  justify-content: center;
  margin: 85px 0 0;
}
@media (max-width: 992px) {
  .slider__view-more {
    margin: 60px 0 0;
  }
}
@media (max-width: 768px) {
  .slider__view-more {
    margin: 40px 0 0;
  }
}
.portfolio-card {
  flex: 0 1 33.3333%;
  text-align: center;
  border-radius: 4px 4px 0 0;
  box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 80px 80px -20px rgba(154, 156, 165, 0.08);
  position: relative;
  overflow: hidden;
  padding: 0 0 90px;
}
.portfolio-card:hover .portfolio-card__box {
  height: 37.5%;
}
@media (max-width: 992px) {
  .portfolio-card {
    padding: 0 0 50px;
  }
}
@media (max-width: 768px) {
  .portfolio-card {
    flex: 0 1 100%;
    display: flex;
    flex-direction: row;
    padding: 0;
  }
}
@media (max-width: 480px) {
  .portfolio-card {
    flex-direction: column;
    padding: 0 0 50px;
  }
}
.portfolio-card__img {
  height: 345px;
  position: relative;
}
@media (max-width: 992px) {
  .portfolio-card__img {
    height: 240px;
  }
}
@media (max-width: 768px) {
  .portfolio-card__img {
    flex: 0 1 55%;
    height: 180px;
  }
}
@media (max-width: 480px) {
  .portfolio-card__img {
    flex: 0 1 100%;
    min-height: 200px;
  }
}
.portfolio-card__box {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 21.6%;
  background-color: #fff;
  padding: 15px 0 25px;
  transition: all 0.3s ease-out;
}
@media (max-width: 768px) {
  .portfolio-card__box {
    position: relative;
    height: 100%;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }
}
@media (max-width: 480px) {
  .portfolio-card__box {
    position: absolute;
    width: 100%;
    height: 21.6%;
    bottom: 0;
    padding: 25px 3px 5px;
  }
}
.portfolio-card__box-title {
  font-family: "Ubu-B";
  font-size: 20px;
  line-height: 105%;
  color: #1e212c;
}
@media (max-width: 992px) {
  .portfolio-card__box-title {
    font-size: 15px;
    line-height: 1;
  }
}
@media (max-width: 480px) {
  .portfolio-card__box-title {
    font-size: 13px;
  }
}
.portfolio-card__box-subtitle {
  margin: 15px 0 0;
  font-size: 14px;
  color: #787a80;
  line-height: 150%;
}
@media (max-width: 992px) {
  .portfolio-card__box-subtitle {
    margin: 10px 0 0;
    font-size: 12px;
    line-height: 1;
  }
}
@media (max-width: 480px) {
  .portfolio-card__box-subtitle {
    font-size: 10px;
  }
}
.portfolio-card__box-btn {
  margin: 24px 0 0;
}
@media (max-width: 992px) {
  .portfolio-card__box-btn {
    margin: 13px 0 0;
    height: 30px;
    font-size: 13px;
  }
}
@media (max-width: 480px) {
  .portfolio-card__box-btn {
    margin: 16px 0 0;
  }
}

.card {
  animation: showCard 1s ease;
}

@keyframes showCard {
  0% {
    border-radius: 50%;
    transform: scale(0, 0);
    opacity: 0;
  }
  100% {
    border-radius: 4px;
    transform: scale(100%, 100%);
    opacity: 1;
  }
}
.supported-by__list {
  margin: 21px 0 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 102px;
  justify-content: center;
}
.supported-by__list > div {
  width: 120px;
  height: 64px;
  position: relative;
}
@media (max-width: 992px) {
  .supported-by__list {
    column-gap: 20px;
  }
  .supported-by__list > div {
    width: 90px;
    height: 50px;
  }
}
@media (max-width: 480px) {
  .supported-by__list {
    column-gap: 10px;
  }
  .supported-by__list > div {
    width: calc(33.333% - 10px);
  }
}

.opinion {
  display: flex;
  column-gap: 135px;
}
@media (max-width: 992px) {
  .opinion {
    column-gap: 40px;
  }
}
@media (max-width: 768px) {
  .opinion {
    column-gap: 20px;
    position: relative;
  }
}
.opinion__body {
  max-width: 600px;
}
@media (max-width: 768px) {
  .opinion__body {
    max-width: 400px;
  }
}
@media (max-width: 668px) {
  .opinion__body {
    max-width: 100%;
    position: absolute;
    top: 35px;
    z-index: 2;
    padding: 0 10px;
  }
}
.opinion__title {
  text-align: left;
}
.opinion__content {
  margin: 60px 0 0;
  transition: all 0.5s ease;
}
.opinion__content-img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(255, 90, 48, 0.5);
  box-shadow: 0 -3px 10px 0.5px rgba(255, 90, 48, 0.9), 0 -7px 15px 1px rgba(120, 122, 128, 0.4);
  position: relative;
}
.opinion__content-text {
  margin: 24px 0 0;
  font-size: 16px;
  line-height: 160%;
  color: #424551;
  max-height: 80px;
  overflow-x: auto;
  transition: all 0.5s ease;
}
@media (max-width: 668px) {
  .opinion__content-text {
    background-color: rgba(120, 122, 128, 0.7);
    margin: 10px -10px 0;
    padding: 0 10px;
    color: #1e212c;
  }
}
.opinion__content-info {
  margin: 24px 0 0;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 668px) {
  .opinion__content-info {
    background-color: rgba(120, 122, 128, 0.7);
    margin: 10px -10px 0;
    padding: 0 10px;
    color: #1e212c;
  }
}
.opinion__content-info-user-name {
  font-family: "Ubu-B";
  font-size: 16px;
  line-height: 160%;
  color: #1e212c;
}
.opinion__content-info-user-work {
  font-size: 14px;
  line-height: 150%;
  color: #787a80;
}
.opinion__content-info-buttons {
  display: flex;
  align-items: center;
}
.opinion__content-info-buttons button {
  background-color: #f4f5f6;
}
@media (max-width: 668px) {
  .opinion__content-info-buttons button {
    background-color: rgba(120, 122, 128, 0.1);
  }
}
.opinion__image-block {
  flex: 0 1 495px;
  height: 550px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
@media (max-width: 992px) {
  .opinion__image-block {
    height: 370px;
  }
}
@media (max-width: 768px) {
  .opinion__image-block {
    margin: 35px 0 0;
    column-gap: 20px;
  }
}
@media (max-width: 668px) {
  .opinion__image-block {
    flex: 0 1 100%;
  }
  .opinion__image-block img {
    opacity: 0.5;
  }
}

.advantages__content {
  margin: 60px 0 0;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 992px) {
  .advantages__content {
    margin: 40px 0 0;
  }
}
@media (max-width: 768px) {
  .advantages__content {
    margin: 30px 0 0;
    flex-wrap: wrap;
    row-gap: 20px;
  }
}
@media (max-width: 480px) {
  .advantages__content {
    margin: 20px 0 0;
  }
}
.advantages__content-item {
  flex: 0 1 23.1%;
  text-align: center;
}
.advantages__content-item:nth-child(2) {
  position: relative;
}
.advantages__content-item:nth-child(2)::before, .advantages__content-item:nth-child(2)::after {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 1px;
  background: linear-gradient(135deg, rgba(218, 219, 221, 0) 0%, rgba(218, 219, 221, 0.5) 12.33%, #dadbdd 51.91%, rgba(218, 219, 221, 0.5) 87.85%, rgba(218, 219, 221, 0) 100%);
}
.advantages__content-item:nth-child(2)::before {
  left: -94px;
}
.advantages__content-item:nth-child(2)::after {
  right: -94px;
}
@media (max-width: 992px) {
  .advantages__content-item {
    flex: 0 1 30%;
  }
  .advantages__content-item:nth-child(2) {
    position: relative;
  }
  .advantages__content-item:nth-child(2)::before {
    left: -5%;
  }
  .advantages__content-item:nth-child(2)::after {
    right: -5%;
  }
}
@media (max-width: 768px) {
  .advantages__content-item {
    flex: 0 1 100%;
    display: flex;
    align-items: center;
  }
  .advantages__content-item::before, .advantages__content-item::after {
    display: none;
  }
}
@media (max-width: 768px) {
  .advantages__content-item-box {
    text-align: left;
    margin: 0 0 0 20px;
  }
}
.advantages__content-item-title {
  margin: 21px 0 0;
  color: #1e212c;
  font-size: 20px;
  font-family: "Ubu-B";
  line-height: 30px;
}
@media (max-width: 768px) {
  .advantages__content-item-title {
    margin: 0;
    font-size: 17px;
    line-height: 20px;
  }
}
@media (max-width: 480px) {
  .advantages__content-item-title {
    font-size: 15px;
    line-height: 15px;
  }
}
.advantages__content-item-text {
  margin: 8px 0 0;
  font-size: 16px;
  color: #787a80;
  font-family: "Ubu-R";
  line-height: 25.6px;
}
@media (max-width: 768px) {
  .advantages__content-item-text {
    font-size: 15px;
    line-height: 20px;
  }
}
@media (max-width: 480px) {
  .advantages__content-item-text {
    font-size: 12px;
    line-height: 15px;
  }
}

.welcome__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 90px);
  max-width: 720px;
}
.welcome__title {
  color: #fff;
  font-family: "Ubu-B";
  font-size: 72px;
  line-height: 130%;
  letter-spacing: 1px;
}
.welcome__title span {
  color: #ff5a30;
}
@media (max-width: 992px) {
  .welcome__title {
    line-height: 110%;
    font-size: 40px;
  }
}
@media (max-width: 768px) {
  .welcome__title {
    line-height: 1;
    font-size: 35px;
  }
}
.welcome__subtitle {
  margin: 24px 0 0;
  max-width: 595px;
  font-size: 20px;
  line-height: 150%;
  color: #fff;
  font-family: "Ubu-R";
  font-weight: 400;
}
@media (max-width: 992px) {
  .welcome__subtitle {
    margin: 16px 0 0;
    font-size: 16px;
    line-height: 130%;
  }
}
@media (max-width: 768px) {
  .welcome__subtitle {
    margin: 14px 0 0;
    font-size: 14px;
    line-height: 110%;
  }
}
.welcome__buttons {
  margin: 60px 0 0;
  display: flex;
  max-width: 535px;
  column-gap: 25px;
  box-sizing: border-box;
}
@media (max-width: 992px) {
  .welcome__buttons {
    margin: 40px 0 0;
  }
}
@media (max-width: 768px) {
  .welcome__buttons {
    margin: 30px 0 0;
  }
}
@media (max-width: 480px) {
  .welcome__buttons {
    flex-wrap: wrap;
    row-gap: 15px;
  }
}
.welcome__buttons-lb {
  color: #fff;
  border-color: #fff;
}
@media (max-width: 992px) {
  .welcome__buttons-lb {
    height: 35px;
    padding: 0 20px;
    font-size: 15px;
  }
}
@media (max-width: 768px) {
  .welcome__buttons-lb {
    font-size: 12px;
  }
}
@media (max-width: 480px) {
  .welcome__buttons-lb {
    flex: 0 1 50%;
  }
}
@media (max-width: 992px) {
  .welcome__buttons-rb {
    height: 35px;
    padding: 0 20px;
    font-size: 15px;
  }
}
@media (max-width: 768px) {
  .welcome__buttons-rb {
    font-size: 12px;
  }
}
@media (max-width: 480px) {
  .welcome__buttons-rb {
    flex: 0 1 50%;
  }
}
.welcome__list {
  display: flex;
  margin: 160px 0 0;
  column-gap: 8px;
}
@media (max-width: 992px) {
  .welcome__list {
    margin: 60px 0 0;
  }
}
@media (max-width: 768px) {
  .welcome__list {
    margin: 30px 0 0;
  }
}
@media (max-width: 480px) {
  .welcome__list {
    flex-wrap: wrap;
    row-gap: 15px;
  }
}
.welcome__item {
  flex: 0 1 25%;
  height: 54px;
  cursor: pointer;
  position: relative;
}
.welcome__item a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.6);
}
.welcome__item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.6);
}
.welcome__item:hover::after {
  background-color: white;
  height: 2px;
  box-shadow: 0 0 3px 0.5px #f4f5f6;
}
.welcome__item:hover a {
  color: white;
}
@media (max-width: 992px) {
  .welcome__item {
    height: 35px;
  }
  .welcome__item a {
    font-size: 20px;
  }
}
@media (max-width: 768px) {
  .welcome__item {
    height: 35px;
  }
  .welcome__item a {
    font-size: 20px;
  }
}
@media (max-width: 480px) {
  .welcome__item {
    flex: 0 1 100%;
  }
  .welcome__item a {
    font-size: 25px;
  }
}

.we-are {
  background-color: #fff;
}
.we-are__body {
  display: flex;
  flex-direction: column;
  padding: 120px 0;
}
@media (max-width: 992px) {
  .we-are__body {
    padding: 70px 0;
  }
}
@media (max-width: 768px) {
  .we-are__body {
    padding: 50px 0;
  }
}
@media (max-width: 480px) {
  .we-are__body {
    padding: 30px 0;
  }
}
.we-are__content {
  margin: 60px 0 0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  height: 500px;
}
@media (max-width: 992px) {
  .we-are__content {
    margin: 40px 0 0;
    height: 60vh;
  }
}
@media (max-width: 768px) {
  .we-are__content {
    margin: 30px 0 0;
  }
}
@media (max-width: 480px) {
  .we-are__content {
    margin: 20px 0 0;
    height: 250px;
  }
}
.we-are__content-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.we-are__content-play {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.we-are__content-play-real {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(30, 33, 44, 0.6);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}
.we-are__content-play-real::before {
  content: "";
  border-radius: 50%;
  position: absolute;
  background-color: #ff5a30;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
}
@media (max-width: 992px) {
  .we-are__content-play-real::before {
    transform: translate(-50%, -50%) scale(0.8);
  }
}
@media (max-width: 768px) {
  .we-are__content-play-real::before {
    transform: translate(-50%, -50%) scale(0.6);
  }
}
@media (max-width: 480px) {
  .we-are__content-play-real::before {
    transform: translate(-50%, -50%) scale(0.5);
  }
}
.we-are__content-play-real::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -50%);
  border: 18px solid transparent;
  border-left: 25px solid white;
  transition: all 0.3s ease;
}
@media (max-width: 992px) {
  .we-are__content-play-real::after {
    transform: translate(-25%, -50%) scale(0.8);
  }
}
@media (max-width: 768px) {
  .we-are__content-play-real::after {
    transform: translate(-25%, -50%) scale(0.6);
  }
}
@media (max-width: 480px) {
  .we-are__content-play-real::after {
    transform: translate(-25%, -50%) scale(0.5);
  }
}
.we-are__content-controls {
  position: absolute;
  z-index: 1;
  bottom: -200px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  margin: 0 0 32px 32px;
}
@media (max-width: 768px) {
  .we-are__content-controls {
    margin: 0 0 15px 15px;
  }
}
.we-are__content-controls-volume {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
}
@media (max-width: 768px) {
  .we-are__content-controls-volume {
    width: 30px;
    height: 30px;
  }
}
.we-are__content-controls-volume-mute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.we-are__content-controls-volume-mute-real {
  display: flex;
}
.we-are__content-controls-volume-mute-real .on {
  display: none;
}
.we-are__content-controls-volume-lvl {
  position: absolute;
  transform: rotate(-90deg);
  bottom: 70px;
  width: 75px;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  height: 0;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}
.we-are__content-controls-volume-lvl::-webkit-slider-runnable-track {
  background-color: rgba(30, 33, 44, 0.4);
  overflow: hidden;
}
.we-are__content-controls-volume-lvl::-moz-range-track {
  background-color: rgba(30, 33, 44, 0.4);
  border-radius: 4px;
  overflow: hidden;
}
.we-are__content-controls-volume-lvl::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #ecf0f1;
  cursor: pointer;
  width: 10px;
  height: 15px;
  border-radius: 8px;
  box-shadow: -200px 0 0 195px #ff5a30;
}
.we-are__content-controls-volume-lvl::-moz-range-thumb {
  -webkit-appearance: none;
  background: #ecf0f1;
  cursor: pointer;
  width: 12px;
  height: 15px;
  border-radius: 8px;
  box-shadow: -200px 0 0 198px #ff5a30;
}
.we-are__content-controls-bar {
  margin: 0 0 0 30px;
  width: 80%;
}
.we-are__content-controls-progress {
  width: 100%;
  height: 5px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #1e212c;
}
.we-are__content-controls-progress::-webkit-progress-value {
  background: #ff5a30;
}
.we-are__content-controls-progress::-moz-progress-bar {
  background: #ff5a30;
}
.we-are__content-play:hover + .we-are__content-play-real::before {
  box-shadow: 0 0 0 10px rgba(255, 90, 48, 0.62);
}
.we-are__content:hover .we-are__content-controls {
  bottom: 0;
}
.we-are__content-play:checked + .we-are__content-play-real {
  background: rgba(30, 33, 44, 0);
}
.we-are__content-play:checked + .we-are__content-play-real::before, .we-are__content-play:checked + .we-are__content-play-real::after {
  transform: translate(-50%, -400%) scale(0);
}
.we-are__content-controls-volume-mute:checked + .we-are__content-controls-volume-mute-real .on {
  display: block;
}
.we-are__content-controls-volume-mute:checked + .we-are__content-controls-volume-mute-real .off {
  display: none;
}
.we-are__content-controls-volume-mute:hover ~ .we-are__content-controls-volume-lvl {
  height: 15px;
}
.we-are__content-controls-volume-lvl:hover {
  height: 15px;
}

.our-core {
  background-color: #fff;
  z-index: 2;
}
.our-core__body {
  padding: 60px 0 0px;
  margin: 0 0 -90px 0;
  position: relative;
}
@media (max-width: 992px) {
  .our-core__body {
    padding: 45px 0;
    margin: 0 0 -45px 0;
  }
}
@media (max-width: 768px) {
  .our-core__body {
    padding: 35px 0;
    margin: 0;
  }
}
@media (max-width: 480px) {
  .our-core__body {
    padding: 15px 0;
  }
}
.our-core__question-form {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 48px 60px;
  margin: 120px 0 0;
  text-align: center;
  background-color: #fff;
  border-radius: 4px;
}
@media (max-width: 992px) {
  .our-core__question-form {
    padding: 35px 45px;
  }
}
@media (max-width: 768px) {
  .our-core__question-form {
    padding: 25px 30px;
  }
}
@media (max-width: 480px) {
  .our-core__question-form {
    padding: 5px;
  }
}
.our-core .question-form__title {
  color: #1e212c;
  font-family: "Ubu-B";
  font-size: 28px;
  line-height: 150%;
}
@media (max-width: 768px) {
  .our-core .question-form__title {
    font-size: 20px;
  }
}
.our-core .question-form__body {
  padding: 32px 0 0;
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
}
@media (max-width: 942px) {
  .our-core .question-form__body {
    flex-wrap: wrap;
    column-gap: 15px;
    row-gap: 10px;
    justify-content: space-between;
  }
}
@media (max-width: 768px) {
  .our-core .question-form__body {
    padding: 10px 0 0;
  }
}
.our-core .question-form__field {
  display: flex;
  flex-direction: column;
  flex: 0 1 23.5%;
}
@media (max-width: 942px) {
  .our-core .question-form__field {
    flex: 0 1 48%;
  }
}
@media (max-width: 718px) {
  .our-core .question-form__field {
    flex: 0 1 100%;
  }
}
.our-core .question-form .width {
  flex: 0 1 37.5%;
}
@media (max-width: 942px) {
  .our-core .question-form .width {
    flex: 0 1 70%;
  }
}
@media (max-width: 718px) {
  .our-core .question-form .width {
    flex: 0 1 100%;
  }
}
.our-core .question-form__label {
  text-align-last: left;
}
.our-core .question-form__input {
  margin: 8px 0 0;
}
.our-core .question-form__btn {
  height: 46px;
}
@media (max-width: 942px) {
  .our-core .question-form__btn {
    flex: 0 1 25%;
  }
}
@media (max-width: 718px) {
  .our-core .question-form__btn {
    margin: 0 auto;
  }
}
.our-core .qustion-success {
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;
  justify-content: space-around;
}
@media (max-width: 768px) {
  .our-core .qustion-success {
    height: 70%;
    top: 30%;
  }
}
@media (max-width: 480px) {
  .our-core .qustion-success {
    height: 40%;
    top: 60%;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
  }
}
.our-core .qustion-success p {
  margin: 0;
}
@media (max-width: 768px) {
  .our-core .qustion-success p {
    margin: 10px;
    font-size: 18px;
  }
}
.our-core .qustion-success h5 {
  margin: 0;
}
@media (max-width: 768px) {
  .our-core .qustion-success h5 {
    margin: 10px;
    font-size: 24px;
  }
}
.our-core .qustion-success button {
  width: 250px;
  margin: 0 0 10px 0;
}
@media (max-width: 768px) {
  .our-core .qustion-success button {
    width: 150px;
  }
}

.our-service {
  background: #f4f5f6;
  position: relative;
}
.our-service__body {
  padding: 210px 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}
@media (max-width: 992px) {
  .our-service__body {
    padding: 100px 0 60px;
  }
}
@media (max-width: 768px) {
  .our-service__body {
    padding: 60px 0 40px;
  }
}
@media (max-width: 480px) {
  .our-service__body {
    padding: 40px 0 20px;
  }
}
.our-service__content {
  margin: 60px 0 0;
  display: flex;
  column-gap: 30px;
  width: 100%;
}
@media (max-width: 992px) {
  .our-service__content {
    margin: 40px 0 0;
  }
}
@media (max-width: 768px) {
  .our-service__content {
    margin: 30px 0 0;
    column-gap: 15px;
    row-gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
.our-service__item {
  flex: 0 1 25%;
  height: 285px;
  background: #fff;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #e5e8ed;
  overflow: hidden;
  box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 80px 80px -20px rgba(154, 156, 165, 0.08);
  position: relative;
}
.our-service__item img {
  transition: all 0.8s;
}
@media (max-width: 992px) {
  .our-service__item {
    height: 200px;
  }
}
@media (max-width: 768px) {
  .our-service__item {
    flex: 0 1 calc(50% - 15px);
    height: 150px;
  }
}
.our-service__item-box {
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 2;
  transition: all 0.3s;
}
.our-service__item-box-svg {
  fill: #ff5a30;
  transition: all 0.2s ease;
}
@media (max-width: 768px) {
  .our-service__item-box-svg {
    width: 35px;
  }
}
.our-service__item-box-title {
  margin: 24px 0 0;
  font-size: 20px;
  font-family: "Ubu-B";
  line-height: 150%;
  transition: all 0.2s ease;
}
@media (max-width: 992px) {
  .our-service__item-box-title {
    font-size: 17px;
  }
}
@media (max-width: 768px) {
  .our-service__item-box-title {
    margin: 15px 0 0;
    font-size: 14px;
  }
}
.our-service__box {
  margin: 80px 0 0;
}

.our-service__item-box:hover {
  background: rgba(30, 33, 44, 0.6);
}
.our-service__item-box:hover .our-service__item-box-title,
.our-service__item-box:hover .our-service__item-box-svg {
  color: #fff;
  filter: saturate(0) brightness(1000%);
}

.our-service__item:hover > img {
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
}

.our-work {
  background-color: #fff;
}
.our-work__body {
  padding: 120px 0;
}
@media (max-width: 992px) {
  .our-work__body {
    padding: 80px 0;
  }
}
@media (max-width: 768px) {
  .our-work__body {
    padding: 50px 0;
  }
}
@media (max-width: 480px) {
  .our-work__body {
    padding: 20px 0;
  }
}

.supported {
  background: #f4f5f6;
}
.supported__body {
  padding: 80px 0 0;
  margin: 0 0 -60px;
  display: flex;
  flex-direction: column;
  row-gap: 170px;
}
@media (max-width: 992px) {
  .supported__body {
    row-gap: 70px;
    padding: 60px 0 10px;
    margin: 0;
  }
}
@media (max-width: 768px) {
  .supported__body {
    row-gap: 35px;
    padding: 40px 0 10px;
  }
}
@media (max-width: 480px) {
  .supported__body {
    padding: 20px 0 0;
  }
}

.achievement {
  background: #fff;
}
.achievement__body {
  padding: 180px 0 90px;
}
@media (max-width: 992px) {
  .achievement__body {
    padding: 60px 0 10px;
  }
}
@media (max-width: 768px) {
  .achievement__body {
    padding: 40px 0 10px;
  }
}
@media (max-width: 480px) {
  .achievement__body {
    padding: 20px 0 0;
  }
}
.achievement__content {
  margin: 60px 0 0;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .achievement__content {
    flex-wrap: wrap;
    row-gap: 15px;
  }
}
.achievement__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 768px) {
  .achievement__item {
    flex: 0 1 40%;
  }
}

.progress__wrapper {
  display: flex;
  position: relative;
  box-sizing: border-box;
}
.progress__wrapper span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #1e212c;
  font-family: "Ubu-B";
  font-size: 32px;
}
.progress__wrapper::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.progress__ring {
  width: 150px;
  height: 150px;
  fill: none;
}
.progress__circle {
  stroke-width: 6px;
  transform-origin: center;
  transform: rotate(-90deg);
}
.progress__name {
  margin: 20px 0 0;
  font-size: 14px;
  color: #1e212c;
}
.progress .yellow__stroke {
  stroke: #f89828;
}
.progress .yellow::before {
  border: 6px solid rgba(248, 152, 40, 0.3);
}
.progress .purple__stroke {
  stroke: #f52f6e;
}
.progress .purple::before {
  border: 6px solid rgba(245, 47, 110, 0.3);
}
.progress .blue__stroke {
  stroke: #5a87fc;
}
.progress .blue::before {
  border: 6px solid rgba(90, 135, 252, 0.3);
}
.progress .green__stroke {
  stroke: #03cea4;
}
.progress .green::before {
  border: 6px solid rgba(3, 206, 164, 0.3);
}

.recent {
  background: #fff;
}
.recent__body {
  padding: 90px 0 120px;
}
@media (max-width: 992px) {
  .recent__body {
    padding: 60px;
  }
}
@media (max-width: 768px) {
  .recent__body {
    padding: 50px;
  }
}
@media (max-width: 480px) {
  .recent__body {
    padding: 30px;
  }
}
.recent__content {
  margin: 60px 0 0 0;
  display: grid;
  grid-template: repeat(2, minmax(auto, 255px))/minmax(auto, 705px) minmax(auto, 495px);
  grid-gap: 30px;
  gap: 30px;
}
@media (max-width: 992px) {
  .recent__content {
    gap: 15px;
    grid-template: repeat(auto-fill, minmax(255px, auto))/1fr;
  }
}
.recent__box {
  margin: 85px 0 0 0;
  display: flex;
  justify-content: center;
}
.recent .news-card {
  height: 100%;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 80px 80px -20px rgba(154, 156, 165, 0.08);
}
.recent .news-card__image {
  width: 100%;
  height: 155px;
  position: relative;
  overflow: hidden;
}
@media (max-width: 992px) {
  .recent .news-card__image {
    height: 300px;
  }
}
.recent .news-card__comments-box {
  z-index: 1;
  background: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
}
.recent .news-card__box {
  padding: 16px 24px 24px;
}
.recent .news-card__box-title {
  font-family: "Ubu-B";
  font-size: 20px;
  line-height: 150%;
  color: #1e212c;
  transition: all 0.3s ease-out;
}
.recent .news-card__box-info {
  display: flex;
  align-items: center;
  column-gap: 24px;
  color: #787a80;
  font-size: 14px;
  line-height: 21px;
  margin: 8px 0 0 0;
}
.recent .news-card__box-info span,
.recent .news-card__box-info button {
  display: flex;
  align-items: center;
  color: #787a80;
  font-size: 14px;
  line-height: 21px;
}
.recent .news-card__box-info > span:nth-child(2) {
  position: relative;
}
.recent .news-card__box-info > span:nth-child(2)::before, .recent .news-card__box-info > span:nth-child(2)::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 12px;
  background-color: #787a80;
}
.recent .news-card__box-info > span:nth-child(2)::before {
  left: -12px;
}
.recent .news-card__box-info > span:nth-child(2)::after {
  right: -12px;
}
.recent .news-card__box-svg {
  width: 16px;
  height: 16px;
  margin: 0 8px 0 0;
  fill: #787a80;
}
.recent .news-card__box-describe {
  margin: 16px 0 0 0;
  font-size: 16px;
  line-height: 160%;
  color: #424551;
}
@media (max-width: 992px) {
  .recent .news-card__box-describe {
    display: none;
  }
}
.recent .news-card__comments-box {
  min-width: 100%;
  height: 100%;
  overflow-y: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  left: 0;
  right: 0;
  transition: all 0.5s ease;
  padding: 20px 30px 0;
  row-gap: 15px;
}
.recent .news-card .showComments {
  top: 0;
}
.recent .news-card:hover .news-card__box-title {
  color: #ff5a30;
}
.recent .news-card:hover .news-card__box-info button span {
  color: #ff5a30;
}
@media (max-width: 992px) {
  .recent .news-card {
    height: 350px;
  }
}
.recent .news-card:first-child {
  grid-column: 1/2;
  grid-row: 1/3;
}
@media (max-width: 992px) {
  .recent .news-card:first-child {
    grid-column: auto;
    grid-row: auto;
  }
}
.recent .news-card:first-child .news-card__image {
  height: 355px;
}
@media (max-width: 992px) {
  .recent .news-card:first-child .news-card__image {
    height: 300px;
  }
}
.recent .news-card:first-child .news-card__box {
  padding: 24px;
}
.recent .news-card:not(:first-child) .news-card__box-describe {
  display: none;
}
.recent .comment__image {
  position: relative;
  width: 40px;
  height: 40px;
}
.comment {
  display: flex;
  width: 100%;
  border-bottom: 2px solid #ff5a30;
  padding: 0 0 15px;
}
.comment__image {
  width: 40px;
  height: 40px;
}
.comment__info {
  max-width: 85%;
  margin: 0 0 0 20px;
}
.comment__info-name {
  font-size: 21px;
  font-family: "Ubu-B";
  letter-spacing: 0.6px;
}
.comment__info-text {
  margin: 10px 0 0;
  font-family: "Ubu-B";
  font-size: 15px;
  line-height: 150%;
}
.comment__info-date {
  margin: 8px 0 0;
  font-size: 14px;
  color: #787a80;
}`, "",{"version":3,"sources":["webpack://./src/styles/common/_mixins.scss","webpack://./src/styles/common/_vars.scss","webpack://./src/styles/pages/homepage.scss","webpack://./src/styles/templates/_slider.scss","webpack://./src/styles/templates/_portfolio-card.scss","webpack://./src/styles/templates/_supported-by.scss","webpack://./src/styles/templates/_opinions.scss","webpack://./src/styles/templates/_advantages.scss"],"names":[],"mappings":"AAaA;EACC,eAAA;EACA,YAAA;EACA,WCVM;EDWN,yBCjBS;EDkBT,eAAA;EACA,6BAAA;EAfA,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,oBAAA;EACA,yBAAA;EACA,qBAAA;EACA,kBAAA;AEID;AFMC;EACC,gBChBK;EDiBL,cCvBQ;EDwBR,yBAAA;AEJF;;AFOA;EACC,eAAA;EACA,YAAA;EACA,WCxBM;EDyBN,yBC/BS;EDgCT,eAAA;EACA,6BAAA;EA7BA,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,oBAAA;EACA,yBAAA;EACA,qBAAA;EACA,kBAAA;AE0BD;AFFC;EACC,gBC9BK;ED+BL,cCrCQ;EDsCR,yBAAA;AEIF;;AFDA;EACC,eAAA;EACA,cC3CS;ED4CT,YAAA;EACA,6BAAA;EACA,eAAA;EACA,yBAAA;EA3CA,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,oBAAA;EACA,yBAAA;EACA,qBAAA;EACA,kBAAA;AEgDD;AFVC;EACC,gBC5CK;ED6CL,cCnDQ;EDoDR,yBAAA;AEYF;;AFTA;EACC,eAAA;EACA,cCzDS;ED0DT,YAAA;EACA,6BAAA;EACA,eAAA;EACA,yBAAA;EAzDA,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,oBAAA;EACA,yBAAA;EACA,qBAAA;EACA,kBAAA;AEsED;AFlBC;EACC,WC1DK;ED2DL,mBCjEQ;EDkER,yBAAA;AEoBF;;AFjBA;EACC,UAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;AEoBD;AFnBC;EACC,yBAAA;EACA,mBCjFQ;ACsGV;AFpBE;EACC,yBAAA;EACA,iBAAA;AEsBH;AFnBC;EAlBD;IAmBE,WAAA;IACA,YAAA;EEsBA;AACF;;AFVC;EACC,cCvGQ;ACoHV;;AFVA;EAVC,cC9FO;ED+FP,eAAA;EACA,kBAAA;EACA,iBAAA;AEwBD;;AFdA;EAbC,cC9FO;ED+FP,eAAA;EACA,kBAAA;EACA,iBAAA;EAYA,yBAAA;EACA,yBAAA;EACA,yBC7GU;ED8GV,kBAAA;AEoBD;;AFfA;EACC,cAAA;EACA,kBAAA;AEkBD;AFhBC;EACC,oBAAA;EACA,eAAA;EACA,iBAAA;EACA,cC9HO;ACgJT;AFhBE;EAND;IAOE,eAAA;EEmBD;AACF;AFlBE;EATD;IAUE,eAAA;EEqBD;AACF;AFpBE;EAZD;IAaE,eAAA;EEuBD;AACF;AFrBC;EACC,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cC5IK;ED6IL,oBAAA;EACA,gBAAA;AEuBF;AFtBE;EAPD;IAQE,eAAA;IACA,gBAAA;EEyBD;AACF;AFxBE;EAXD;IAYE,gBAAA;IACA,eAAA;EE2BD;AACF;;AFxBA;EACC,gBAAA;AE2BD;;AFzBA;EACC,aAAA;EACA,gBAAA;AE4BD;AF3BC;EACC,cClKO;EDmKP,eAAA;EACA,oBAAA;EACA,iBAAA;AE6BF;AF5BE;EALD;IAME,eAAA;IACA,cAAA;EE+BD;AACF;AF5BE;EADD;IAEE,YAAA;EE+BD;AACF;AF7BC;EAlBD;IAmBE,eAAA;IACA,kBAAA;IACA,uBAAA;IACA,aAAA;IACA,gBAAA;EEgCA;AACF;;AF1BA;EACC,aAAA;EACA,+CAAA;EACA,eAAA;AE6BD;;AF3BA;EACC,gBAAA;AE8BD;;AF5BA;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,oBAAA;KAAA,iBAAA;AE+BD;;ACzOC;EADD;IAEE,eAAA;ED6OA;AACF;AC5OC;EAJD;IAKE,eAAA;ED+OA;AACF;AC9OC;EAPD;IAQE,eAAA;EDiPA;AACF;AChPC;EACC,aAAA;EACA,8BAAA;EACA,qBAAA;ADkPF;AChPC;EACC,gBAAA;EACA,gBAAA;EACA,SAAA;ADkPF;AChPC;EACC,aAAA;EACA,gBAAA;ADkPF;AChPC;EACC,aAAA;EACA,gBAAA;EACA,gBAAA;ADkPF;ACjPE;EAJD;IAKE,gBAAA;IACA,gBAAA;EDoPD;AACF;ACnPE;EARD;IASE,gBAAA;IACA,eAAA;IACA,aAAA;EDsPD;AACF;AClPC;EACC,aAAA;EACA,uBAAA;EACA,gBAAA;ADoPF;ACnPE;EAJD;IAKE,gBAAA;EDsPD;AACF;ACrPE;EAPD;IAQE,gBAAA;EDwPD;AACF;AEzSA;EACC,kBAAA;EACA,kBAAA;EACA,0BAAA;EACA,+LAAA;EAIA,kBAAA;EACA,gBAAA;EACA,iBAAA;AFwSD;AEvSC;EACC,aAAA;AFySF;AEvSC;EAdD;IAeE,iBAAA;EF0SA;AACF;AEzSC;EAjBD;IAkBE,cAAA;IACA,aAAA;IACA,mBAAA;IACA,UAAA;EF4SA;AACF;AE3SC;EAvBD;IAwBE,sBAAA;IACA,iBAAA;EF8SA;AACF;AE7SC;EACC,aAAA;EACA,kBAAA;AF+SF;AE9SE;EAHD;IAIE,aAAA;EFiTD;AACF;AEhTE;EAND;IAOE,aAAA;IACA,aAAA;EFmTD;AACF;AElTE;EAVD;IAWE,cAAA;IACA,iBAAA;EFqTD;AACF;AEnTC;EACC,kBAAA;EACA,SAAA;EACA,WAAA;EACA,aAAA;EACA,sBHxCQ;EGyCR,oBAAA;EACA,6BAAA;AFqTF;AEpTE;EARD;IASE,kBAAA;IACA,YAAA;IACA,UAAA;IACA,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;IACA,eAAA;EFuTD;AACF;AEtTE;EAlBD;IAmBE,kBAAA;IACA,WAAA;IACA,aAAA;IACA,SAAA;IACA,qBAAA;EFyTD;AACF;AEvTC;EACC,oBAAA;EACA,eAAA;EACA,iBAAA;EACA,cHvEO;ACgYT;AExTE;EALD;IAME,eAAA;IACA,cAAA;EF2TD;AACF;AExTE;EAXD;IAYE,eAAA;EF2TD;AACF;AEzTC;EACC,gBAAA;EACA,eAAA;EACA,cHnFK;EGoFL,iBAAA;AF2TF;AE1TE;EALD;IAME,gBAAA;IACA,eAAA;IACA,cAAA;EF6TD;AACF;AE1TE;EAZD;IAaE,eAAA;EF6TD;AACF;AE3TC;EACC,gBAAA;AF6TF;AE5TE;EAFD;IAGE,gBAAA;IACA,YAAA;IACA,eAAA;EF+TD;AACF;AE5TE;EATD;IAUE,gBAAA;EF+TD;AACF;;AE5TA;EACC,2BAAA;AF+TD;;AE7TA;EACC;IACC,kBAAA;IACA,sBAAA;IACA,UAAA;EFgUA;EE9TD;IACC,kBAAA;IACA,4BAAA;IACA,UAAA;EFgUA;AACF;AG3bC;EACC,gBAAA;EACA,aAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;AH6bF;AG5bE;EACC,YAAA;EACA,YAAA;EACA,kBAAA;AH8bH;AG5bE;EAXD;IAYE,gBAAA;EH+bD;EG9bC;IACC,WAAA;IACA,YAAA;EHgcF;AACF;AG9bE;EAlBD;IAmBE,gBAAA;EHicD;EGhcC;IACC,2BAAA;EHkcF;AACF;;AI3dA;EACC,aAAA;EACA,iBAAA;AJ8dD;AI7dC;EAHD;IAIE,gBAAA;EJgeA;AACF;AI/dC;EAND;IAOE,gBAAA;IACA,kBAAA;EJkeA;AACF;AIjeC;EACC,gBAAA;AJmeF;AIleE;EAFD;IAGE,gBAAA;EJqeD;AACF;AIpeE;EALD;IAME,eAAA;IACA,kBAAA;IACA,SAAA;IACA,UAAA;IACA,eAAA;EJueD;AACF;AIreC;EACC,gBAAA;AJueF;AIreC;EACC,gBAAA;EACA,yBAAA;AJueF;AIreC;EACC,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,8FAAA;EAEA,kBAAA;AJseF;AIpeC;EACC,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cLzCM;EK0CN,gBAAA;EACA,gBAAA;EACA,yBAAA;AJseF;AIreE;EARD;IASE,0CAAA;IACA,oBAAA;IACA,eAAA;IACA,cLlDM;EC0hBP;AACF;AIteC;EACC,gBAAA;EACA,aAAA;EACA,8BAAA;AJweF;AIveE;EAJD;IAKE,0CAAA;IACA,oBAAA;IACA,eAAA;IACA,cL7DM;ECuiBP;AACF;AIteC;EACC,oBAAA;EACA,eAAA;EACA,iBAAA;EACA,cLtEO;AC8iBT;AIteC;EACC,eAAA;EACA,iBAAA;EACA,cLzEK;ACijBP;AIteC;EACC,aAAA;EACA,mBAAA;AJweF;AIveE;EACC,yBL1EY;ACmjBf;AIxeG;EAFD;IAGE,0CAAA;EJ2eF;AACF;AIxeC;EACC,eAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;AJ0eF;AIzeE;EAND;IAOE,aAAA;EJ4eD;AACF;AI3eE;EATD;IAUE,gBAAA;IACA,gBAAA;EJ8eD;AACF;AI7eE;EAbD;IAcE,cAAA;EJgfD;EI/eC;IACC,YAAA;EJifF;AACF;;AKzlBC;EACC,gBAAA;EACA,aAAA;EACA,8BAAA;AL4lBF;AK3lBE;EAJD;IAKE,gBAAA;EL8lBD;AACF;AK7lBE;EAPD;IAQE,gBAAA;IACA,eAAA;IACA,aAAA;ELgmBD;AACF;AK/lBE;EAZD;IAaE,gBAAA;ELkmBD;AACF;AKhmBC;EACC,eAAA;EACA,kBAAA;ALkmBF;AKjmBE;EACC,kBAAA;ALmmBH;AKlmBG;EAEC,WAAA;EACA,kBAAA;EACA,MAAA;EACA,YAAA;EACA,UAAA;EACA,6KAAA;ALmmBJ;AK1lBG;EACC,WAAA;AL4lBJ;AK1lBG;EACC,YAAA;AL4lBJ;AKzlBE;EA5BD;IA6BE,aAAA;EL4lBD;EK3lBC;IACC,kBAAA;EL6lBF;EK5lBE;IACC,SAAA;EL8lBH;EK5lBE;IACC,UAAA;EL8lBH;AACF;AK3lBE;EAxCD;IAyCE,cAAA;IACA,aAAA;IACA,mBAAA;EL8lBD;EK7lBC;IAEC,aAAA;EL8lBF;AACF;AK1lBE;EADD;IAEE,gBAAA;IACA,kBAAA;EL6lBD;AACF;AK3lBC;EACC,gBAAA;EACA,cN1EO;EM2EP,eAAA;EACA,oBAAA;EACA,iBAAA;AL6lBF;AK5lBE;EAND;IAOE,SAAA;IACA,eAAA;IACA,iBAAA;EL+lBD;AACF;AK9lBE;EAXD;IAYE,eAAA;IACA,iBAAA;ELimBD;AACF;AK/lBC;EACC,eAAA;EACA,eAAA;EACA,cNzFK;EM0FL,oBAAA;EACA,mBAAA;ALimBF;AKhmBE;EAND;IAOE,eAAA;IACA,iBAAA;ELmmBD;AACF;AKlmBE;EAVD;IAWE,eAAA;IACA,iBAAA;ELqmBD;AACF;;AAlsBC;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,0BAAA;EACA,gBAAA;AAqsBF;AAnsBC;EACC,WDXK;ECYL,oBAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;AAqsBF;AApsBE;EACC,cDvBO;AC6tBV;AApsBE;EATD;IAUE,iBAAA;IACA,eAAA;EAusBD;AACF;AAtsBE;EAbD;IAcE,cAAA;IACA,eAAA;EAysBD;AACF;AAvsBC;EACC,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,WDjCK;ECkCL,oBAAA;EACA,gBAAA;AAysBF;AAxsBE;EARD;IASE,gBAAA;IACA,eAAA;IACA,iBAAA;EA2sBD;AACF;AA1sBE;EAbD;IAcE,gBAAA;IACA,eAAA;IACA,iBAAA;EA6sBD;AACF;AA3sBC;EACC,gBAAA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,sBAAA;AA6sBF;AA5sBE;EAND;IAOE,gBAAA;EA+sBD;AACF;AA9sBE;EATD;IAUE,gBAAA;EAitBD;AACF;AAhtBE;EAZD;IAaE,eAAA;IACA,aAAA;EAmtBD;AACF;AAjtBC;EACC,WDjEK;ECkEL,kBDlEK;ACqxBP;AAltBE;EAHD;IAIE,YAAA;IACA,eAAA;IACA,eAAA;EAqtBD;AACF;AAptBE;EARD;IASE,eAAA;EAutBD;AACF;AAttBE;EAXD;IAYE,aAAA;EAytBD;AACF;AAttBE;EADD;IAEE,YAAA;IACA,eAAA;IACA,eAAA;EAytBD;AACF;AAxtBE;EAND;IAOE,eAAA;EA2tBD;AACF;AA1tBE;EATD;IAUE,aAAA;EA6tBD;AACF;AA3tBC;EACC,aAAA;EACA,iBAAA;EACA,eAAA;AA6tBF;AA5tBE;EAJD;IAKE,gBAAA;EA+tBD;AACF;AA9tBE;EAPD;IAQE,gBAAA;EAiuBD;AACF;AAhuBE;EAVD;IAWE,eAAA;IACA,aAAA;EAmuBD;AACF;AAjuBC;EACC,aAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;AAmuBF;AAluBE;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,+BAAA;AAouBH;AAluBE;EACC,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,0CAAA;AAouBH;AAjuBG;EACC,uBAAA;EACA,WAAA;EACA,iCAAA;AAmuBJ;AAjuBG;EACC,YAAA;AAmuBJ;AAhuBE;EAjCD;IAkCE,YAAA;EAmuBD;EAluBC;IACC,eAAA;EAouBF;AACF;AAluBE;EAvCD;IAwCE,YAAA;EAquBD;EApuBC;IACC,eAAA;EAsuBF;AACF;AApuBE;EA7CD;IA8CE,cAAA;EAuuBD;EAtuBC;IACC,eAAA;EAwuBF;AACF;;AAnuBA;EACC,sBDjKS;ACu4BV;AAruBC;EACC,aAAA;EACA,sBAAA;EACA,gBAAA;AAuuBF;AAtuBE;EAJD;IAKE,eAAA;EAyuBD;AACF;AAxuBE;EAPD;IAQE,eAAA;EA2uBD;AACF;AA1uBE;EAVD;IAWE,eAAA;EA6uBD;AACF;AA3uBC;EACC,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;AA6uBF;AA5uBE;EAND;IAOE,gBAAA;IACA,YAAA;EA+uBD;AACF;AA9uBE;EAVD;IAWE,gBAAA;EAivBD;AACF;AAhvBE;EAbD;IAcE,gBAAA;IACA,aAAA;EAmvBD;AACF;AAjvBC;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;AAmvBF;AAjvBC;EACC,kBAAA;EACA,UAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AAmvBF;AAjvBC;EACC,cAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,iCAAA;EACA,sBAAA;EACA,2BAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;AAmvBF;AAlvBE;EACC,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBDzOO;EC0OP,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,gCAAA;EACA,yBAAA;AAovBH;AAnvBG;EAXD;IAYE,2CAAA;EAsvBF;AACF;AArvBG;EAdD;IAeE,2CAAA;EAwvBF;AACF;AAvvBG;EAjBD;IAkBE,2CAAA;EA0vBF;AACF;AAxvBE;EACC,WAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,8BAAA;EACA,6BAAA;EACA,yBAAA;AA0vBH;AAzvBG;EATD;IAUE,2CAAA;EA4vBF;AACF;AA3vBG;EAZD;IAaE,2CAAA;EA8vBF;AACF;AA7vBG;EAfD;IAgBE,2CAAA;EAgwBF;AACF;AA7vBC;EACC,kBAAA;EACA,UAAA;EACA,cAAA;EACA,OAAA;EACA,QAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,qBAAA;AA+vBF;AA9vBE;EAVD;IAWE,qBAAA;EAiwBD;AACF;AA/vBC;EACC,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,0CAAA;AAiwBF;AAhwBE;EATD;IAUE,WAAA;IACA,YAAA;EAmwBD;AACF;AAjwBC;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AAmwBF;AAjwBC;EACC,aAAA;AAmwBF;AAlwBE;EACC,aAAA;AAowBH;AAjwBC;EACC,kBAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,wBAAA;EAEA,gBAAA;EACA,aAAA;EACA,SAAA;EACA,kBAAA;EACA,yBAAA;EACA,eAAA;EACA,gBAAA;AAmwBF;AAjwBE;EACC,uCAAA;EACA,gBAAA;AAmwBH;AAjwBE;EACC,uCAAA;EACA,kBAAA;EACA,gBAAA;AAmwBH;AAjwBE;EACC,wBAAA;EACA,mBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oCAAA;AAmwBH;AAjwBE;EACC,wBAAA;EACA,mBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oCAAA;AAmwBH;AAhwBC;EACC,kBAAA;EACA,UAAA;AAkwBF;AAhwBC;EACC,WAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBD3WO;AC6mCT;AAjwBE;EACC,mBD9WO;ACinCV;AAjwBE;EACC,mBDjXO;AConCV;AAhwBC;EACC,8CAAA;AAkwBF;AAhwBC;EACC,SAAA;AAkwBF;AAhwBC;EACC,+BAAA;AAkwBF;AAjwBE;EAEC,0CAAA;AAkwBH;AA7vBE;EACC,cAAA;AA+vBH;AA7vBE;EACC,aAAA;AA+vBH;AA5vBC;EACC,YAAA;AA8vBF;AA5vBC;EACC,YAAA;AA8vBF;;AA1vBA;EACC,sBD5YS;EC6YT,UAAA;AA6vBD;AA5vBC;EACC,mBAAA;EACA,mBAAA;EACA,kBAAA;AA8vBF;AA7vBE;EAJD;IAKE,eAAA;IACA,mBAAA;EAgwBD;AACF;AA/vBE;EARD;IASE,eAAA;IACA,SAAA;EAkwBD;AACF;AAjwBE;EAZD;IAaE,eAAA;EAowBD;AACF;AAjwBC;EACC,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBDtaQ;ECuaR,kBAAA;AAmwBF;AAlwBE;EATD;IAUE,kBAAA;EAqwBD;AACF;AApwBE;EAZD;IAaE,kBAAA;EAuwBD;AACF;AAtwBE;EAfD;IAgBE,YAAA;EAywBD;AACF;AArwBE;EACC,cD3bM;EC4bN,oBAAA;EACA,eAAA;EACA,iBAAA;AAuwBH;AAtwBG;EALD;IAME,eAAA;EAywBF;AACF;AAvwBE;EACC,iBAAA;EACA,aAAA;EACA,qBAAA;EACA,gBAAA;AAywBH;AAxwBG;EALD;IAME,eAAA;IACA,gBAAA;IACA,aAAA;IACA,8BAAA;EA2wBF;AACF;AA1wBG;EAXD;IAYE,iBAAA;EA6wBF;AACF;AA3wBE;EACC,aAAA;EACA,sBAAA;EACA,eAAA;AA6wBH;AA5wBG;EAJD;IAKE,aAAA;EA+wBF;AACF;AA9wBG;EAPD;IAQE,cAAA;EAixBF;AACF;AA/wBE;EACC,eAAA;AAixBH;AAhxBG;EAFD;IAGE,aAAA;EAmxBF;AACF;AAlxBG;EALD;IAME,cAAA;EAqxBF;AACF;AAnxBE;EACC,qBAAA;AAqxBH;AAnxBE;EACC,eAAA;AAqxBH;AAnxBE;EACC,YAAA;AAqxBH;AApxBG;EAFD;IAGE,aAAA;EAuxBF;AACF;AAtxBG;EALD;IAME,cAAA;EAyxBF;AACF;AAtxBC;EACC,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,6BAAA;AAwxBF;AAvxBE;EAND;IAOE,WAAA;IACA,QAAA;EA0xBD;AACF;AAzxBE;EAVD;IAWE,WAAA;IACA,QAAA;IACA,sBAAA;IACA,kBAAA;IACA,8BAAA;EA4xBD;AACF;AA3xBE;EACC,SAAA;AA6xBH;AA5xBG;EAFD;IAGE,YAAA;IACA,eAAA;EA+xBF;AACF;AA7xBE;EACC,SAAA;AA+xBH;AA9xBG;EAFD;IAGE,YAAA;IACA,eAAA;EAiyBF;AACF;AA/xBE;EACC,YAAA;EACA,kBAAA;AAiyBH;AAhyBG;EAHD;IAIE,YAAA;EAmyBF;AACF;;AA9xBA;EACC,mBDzhBc;EC0hBd,kBAAA;AAiyBD;AAhyBC;EACC,qBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,UAAA;AAkyBF;AAjyBE;EAND;IAOE,qBAAA;EAoyBD;AACF;AAnyBE;EATD;IAUE,oBAAA;EAsyBD;AACF;AAryBE;EAZD;IAaE,oBAAA;EAwyBD;AACF;AAtyBC;EACC,gBAAA;EACA,aAAA;EACA,gBAAA;EACA,WAAA;AAwyBF;AAvyBE;EALD;IAME,gBAAA;EA0yBD;AACF;AAzyBE;EARD;IASE,gBAAA;IACA,gBAAA;IACA,aAAA;IACA,eAAA;IACA,8BAAA;EA4yBD;AACF;AA1yBC;EACC,aAAA;EACA,aAAA;EACA,gBD/jBQ;ECgkBR,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,+LAAA;EAIA,kBAAA;AAyyBF;AAxyBE;EACC,oBAAA;AA0yBH;AAxyBE;EAlBD;IAmBE,aAAA;EA2yBD;AACF;AA1yBE;EArBD;IAsBE,0BAAA;IACA,aAAA;EA6yBD;AACF;AA3yBC;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,UAAA;EACA,oBAAA;AA6yBF;AA3yBC;EACC,aD1mBQ;EC2mBR,yBAAA;AA6yBF;AA5yBE;EAHD;IAIE,WAAA;EA+yBD;AACF;AA7yBC;EACC,gBAAA;EACA,eAAA;EACA,oBAAA;EACA,iBAAA;EACA,yBAAA;AA+yBF;AA9yBE;EAND;IAOE,eAAA;EAizBD;AACF;AAhzBE;EATD;IAUE,gBAAA;IACA,eAAA;EAmzBD;AACF;AAjzBC;EACC,gBAAA;AAmzBF;;AAhzBA;EACC,iCAAA;AAmzBD;AAlzBC;;EAEC,WDhoBK;ECioBL,qCAAA;AAozBF;;AAjzBA;EACC,UAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,wBAAA;EACA,yBAAA;AAozBD;;AAjzBA;EACC,sBD7oBS;ACi8CV;AAnzBC;EACC,gBAAA;AAqzBF;AApzBE;EAFD;IAGE,eAAA;EAuzBD;AACF;AAtzBE;EALD;IAME,eAAA;EAyzBD;AACF;AAxzBE;EARD;IASE,eAAA;EA2zBD;AACF;;AAvzBA;EACC,mBD5pBc;ACs9Cf;AAzzBC;EACC,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;AA2zBF;AA1zBE;EAND;IAOE,aAAA;IACA,oBAAA;IACA,SAAA;EA6zBD;AACF;AA5zBE;EAXD;IAYE,aAAA;IACA,oBAAA;EA+zBD;AACF;AA9zBE;EAfD;IAgBE,iBAAA;EAi0BD;AACF;;AA7zBA;EACC,gBDprBS;ACo/CV;AA/zBC;EACC,qBAAA;AAi0BF;AA/zBE;EAHD;IAIE,oBAAA;EAk0BD;AACF;AAj0BE;EAND;IAOE,oBAAA;EAo0BD;AACF;AAn0BE;EATD;IAUE,iBAAA;EAs0BD;AACF;AAl0BC;EACC,gBAAA;EACA,aAAA;EACA,8BAAA;AAo0BF;AAn0BE;EAJD;IAKE,eAAA;IACA,aAAA;EAs0BD;AACF;AAp0BC;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;AAs0BF;AAr0BE;EAJD;IAKE,aAAA;EAw0BD;AACF;;AAp0BC;EACC,aAAA;EACA,kBAAA;EACA,sBAAA;AAu0BF;AAt0BE;EACC,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,cDtuBM;ECuuBN,oBAAA;EACA,eAAA;AAw0BH;AAt0BE;EACC,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,kBAAA;AAw0BH;AAr0BC;EACC,YAAA;EACA,aAAA;EACA,UAAA;AAu0BF;AAr0BC;EACC,iBAAA;EACA,wBAAA;EACA,yBAAA;AAu0BF;AAp0BC;EACC,gBAAA;EACA,eAAA;EACA,cDpwBO;AC0kDT;AAl0BE;EACC,eAAA;AAo0BH;AAl0BE;EACC,yCAAA;AAo0BH;AAh0BE;EACC,eAAA;AAk0BH;AAh0BE;EACC,yCAAA;AAk0BH;AA9zBE;EACC,eAAA;AAg0BH;AA9zBE;EACC,yCAAA;AAg0BH;AA5zBE;EACC,eAAA;AA8zBH;AA5zBE;EACC,wCAAA;AA8zBH;;AAzzBA;EACC,gBDpyBS;ACgmDV;AA3zBC;EACC,qBAAA;AA6zBF;AA5zBE;EAFD;IAGE,aAAA;EA+zBD;AACF;AA9zBE;EALD;IAME,aAAA;EAi0BD;AACF;AAh0BE;EARD;IASE,aAAA;EAm0BD;AACF;AAj0BC;EACC,kBAAA;EACA,aAAA;EACA,qFACC;EAED,cAAA;EAAA,SAAA;AAi0BF;AAh0BE;EAPD;IAQE,SAAA;IACA,yDAAA;EAm0BD;AACF;AAj0BC;EACC,kBAAA;EACA,aAAA;EACA,uBAAA;AAm0BF;AAj0BC;EACC,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,sBAAA;EACA,+LAAA;AAm0BF;AA/zBE;EACC,WAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;AAi0BH;AAh0BG;EALD;IAME,aAAA;EAm0BF;AACF;AAj0BE;EACC,UAAA;EACA,gBDx1BO;ECy1BP,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,gBAAA;AAm0BH;AAj0BE;EACC,uBAAA;AAm0BH;AAj0BE;EACC,oBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD72BM;EC82BN,6BAAA;AAm0BH;AAj0BE;EACC,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,cDl3BI;ECm3BJ,eAAA;EACA,iBAAA;EACA,iBAAA;AAm0BH;AAl0BG;;EAEC,aAAA;EACA,mBAAA;EACA,cD13BG;EC23BH,eAAA;EACA,iBAAA;AAo0BJ;AAl0BG;EACC,kBAAA;AAo0BJ;AAn0BI;EAEC,WAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,yBDt4BE;AC0sDP;AAl0BI;EACC,WAAA;AAo0BL;AAl0BI;EACC,YAAA;AAo0BL;AAh0BE;EACC,WAAA;EACA,YAAA;EACA,iBAAA;EACA,aDp5BI;ACstDP;AAh0BE;EACC,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,cD35BK;AC6tDR;AAj0BG;EALD;IAME,aAAA;EAo0BF;AACF;AAl0BE;EACC,eAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,yBAAA;EACA,oBAAA;EACA,aAAA;AAo0BH;AAl0BE;EACC,MAAA;AAo0BH;AAj0BG;EACC,cDr7BM;ACwvDV;AAj0BG;EACC,cDx7BM;AC2vDV;AAh0BE;EAlHD;IAmHE,aAAA;EAm0BD;AACF;AAj0BC;EACC,gBAAA;EACA,aAAA;AAm0BF;AAl0BE;EAHD;IAIE,iBAAA;IACA,cAAA;EAq0BD;AACF;AAp0BE;EACC,aAAA;AAs0BH;AAr0BG;EAFD;IAGE,aAAA;EAw0BF;AACF;AAt0BE;EACC,aAAA;AAw0BH;AAp0BE;EACC,aAAA;AAs0BH;AAl0BE;EACC,kBAAA;EACA,WAAA;EACA,YAAA;AAo0BH;AAvzBA;EACC,aAAA;EACA,WAAA;EACA,gCAAA;EACA,iBAAA;AAyzBD;AAxzBC;EACC,WAAA;EACA,YAAA;AA0zBF;AAxzBC;EACC,cAAA;EACA,kBAAA;AA0zBF;AAxzBC;EACC,eAAA;EACA,oBAAA;EACA,qBAAA;AA0zBF;AAxzBC;EACC,gBAAA;EACA,oBAAA;EACA,eAAA;EACA,iBAAA;AA0zBF;AAxzBC;EACC,eAAA;EACA,eAAA;EACA,cD9/BK;ACwzDP","sourcesContent":["//==============================================\r\n//BUTTONS=======================================\r\n//==============================================\r\n@mixin buttons {\r\n\tdisplay: inline-flex;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tfont-family: 'Ubu-B';\r\n\ttransition: all 0.4s ease;\r\n\tletter-spacing: 0.5px;\r\n\tborder-radius: 4px;\r\n}\r\n.solid-button {\r\n\tfont-size: 16px;\r\n\theight: 52px;\r\n\tcolor: $text;\r\n\tbackground-color: $primary;\r\n\tpadding: 0 40px;\r\n\tborder: 1px solid transparent;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.regular-button {\r\n\tfont-size: 14px;\r\n\theight: 44px;\r\n\tcolor: $text;\r\n\tbackground-color: $primary;\r\n\tpadding: 0 32px;\r\n\tborder: 1px solid transparent;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.outline-solid-btn {\r\n\tfont-size: 16px;\r\n\tcolor: $primary;\r\n\theight: 52px;\r\n\tbackground-color: transparent;\r\n\tpadding: 0 40px;\r\n\tborder: 1px solid $primary;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.outline-regular-btn {\r\n\tfont-size: 14px;\r\n\tcolor: $primary;\r\n\theight: 44px;\r\n\tbackground-color: transparent;\r\n\tpadding: 0 32px;\r\n\tborder: 1px solid $primary;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tcolor: $text;\r\n\t\tbackground: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.arrow {\r\n\tpadding: 0;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tbackground: white;\r\n\twidth: 48px;\r\n\theight: 48px;\r\n\tborder-radius: 50%;\r\n\ttransition: all 0.4s ease;\r\n\t&:hover {\r\n\t\ttransition: all 0.3s ease;\r\n\t\tbackground: $primary;\r\n\t\timg {\r\n\t\t\ttransition: all 0.4s ease;\r\n\t\t\tfilter: invert(1);\r\n\t\t}\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\twidth: 32px;\r\n\t\theight: 32px;\r\n\t}\r\n}\r\n//==============================================\r\n//FORM TAGS=====================================\r\n//==============================================\r\n@mixin label-text {\r\n\tcolor: $links;\r\n\tfont-size: 14px;\r\n\tfont-style: normal;\r\n\tline-height: 150%;\r\n}\r\n.link-hover {\r\n\t&:hover {\r\n\t\tcolor: $primary;\r\n\t}\r\n}\r\n.label {\r\n\t@include label-text;\r\n}\r\n.input {\r\n\t@include label-text;\r\n\tpadding: 11px 0 12px 16px;\r\n\tborder: 1px solid $input-bor;\r\n\tbackground-color: $input-bg;\r\n\tborder-radius: 4px;\r\n}\r\n//==============================================\r\n//BLOCKS========================================\r\n//==============================================\r\n.title-block {\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\r\n\t&__title {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 46px;\r\n\t\tline-height: 130%;\r\n\t\tcolor: $titles;\r\n\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tfont-size: 40px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 25px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\t}\r\n\t&__subtitle {\r\n\t\tmargin: 24px 0 0;\r\n\t\tfont-size: 18px;\r\n\t\tline-height: 150%;\r\n\t\tcolor: $desc;\r\n\t\tfont-family: 'Ubu-R';\r\n\t\tfont-weight: 400;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tmargin: 12px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 10px 0 0;\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t}\r\n}\r\n.text-left {\r\n\ttext-align: left;\r\n}\r\n.view-more-block {\r\n\tdisplay: flex;\r\n\tcolumn-gap: 40px;\r\n\t&__title {\r\n\t\tcolor: $titles;\r\n\t\tfont-size: 28px;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 24px;\r\n\t\t\tflex: 0 1 100%;\r\n\t\t}\r\n\t}\r\n\t&__link {\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 30px;\r\n\t\t}\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tflex-wrap: wrap;\r\n\t\ttext-align: center;\r\n\t\tjustify-content: center;\r\n\t\trow-gap: 10px;\r\n\t\tmargin: 20px 0 0;\r\n\t}\r\n}\r\n\r\n//==============================================\r\n//ADAPTIVE && DISPLAY======================================\r\n//==============================================\r\n.grid {\r\n\tdisplay: grid;\r\n\tgrid-template: 1fr/1fr minmax(auto, 1230px) 1fr;\r\n\tpadding: 0 15px;\r\n}\r\n.center {\r\n\tgrid-column: 2/3;\r\n}\r\n.image-adaptive {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tobject-fit: cover;\r\n}\r\n","$primary: #ff5a30;\r\n$titles: #1e212c;\r\n$links: #424551;\r\n$desc: #787a80;\r\n$input-bg: #f4f5f6;\r\n$input-bor: #d7dadd;\r\n$text: #fff;\r\n$main-bg: #fff;\r\n$auxiliary-bg: #f4f5f6;\r\n$alternative-bg: #1e212c;\r\n//Output-Displays=========================\r\n$header: 1120px;\r\n$desktop: 992px;\r\n$tablet: 768px;\r\n$phone: 480px;\r\n$phone-s: 320px;\r\n","@import '@s-common/vars';\r\n@import '@s-common/mixins';\r\n@import '@s-templates/slider';\r\n@import '@s-templates/portfolio-card';\r\n@import '@s-templates/supported-by';\r\n@import '@s-templates/opinions';\r\n@import '@s-templates/advantages';\r\n\r\n.welcome {\r\n\t&__body {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: center;\r\n\t\theight: calc(100vh - 90px);\r\n\t\tmax-width: 720px;\r\n\t}\r\n\t&__title {\r\n\t\tcolor: $text;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 72px;\r\n\t\tline-height: 130%;\r\n\t\tletter-spacing: 1px;\r\n\t\tspan {\r\n\t\t\tcolor: $primary;\r\n\t\t}\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tline-height: 110%;\r\n\t\t\tfont-size: 40px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tline-height: 1;\r\n\t\t\tfont-size: 35px;\r\n\t\t}\r\n\t}\r\n\t&__subtitle {\r\n\t\tmargin: 24px 0 0;\r\n\t\tmax-width: 595px;\r\n\t\tfont-size: 20px;\r\n\t\tline-height: 150%;\r\n\t\tcolor: $text;\r\n\t\tfont-family: 'Ubu-R';\r\n\t\tfont-weight: 400;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 16px 0 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tline-height: 130%;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 14px 0 0;\r\n\t\t\tfont-size: 14px;\r\n\t\t\tline-height: 110%;\r\n\t\t}\r\n\t}\r\n\t&__buttons {\r\n\t\tmargin: 60px 0 0;\r\n\t\tdisplay: flex;\r\n\t\tmax-width: 535px;\r\n\t\tcolumn-gap: 25px;\r\n\t\tbox-sizing: border-box;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 40px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 30px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\trow-gap: 15px;\r\n\t\t}\r\n\t}\r\n\t&__buttons-lb {\r\n\t\tcolor: $text;\r\n\t\tborder-color: $text;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 35px;\r\n\t\t\tpadding: 0 20px;\r\n\t\t\tfont-size: 15px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 12px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 50%;\r\n\t\t}\r\n\t}\r\n\t&__buttons-rb {\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 35px;\r\n\t\t\tpadding: 0 20px;\r\n\t\t\tfont-size: 15px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 12px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 50%;\r\n\t\t}\r\n\t}\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\tmargin: 160px 0 0;\r\n\t\tcolumn-gap: 8px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 60px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 30px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\trow-gap: 15px;\r\n\t\t}\r\n\t}\r\n\t&__item {\r\n\t\tflex: 0 1 25%;\r\n\t\theight: 54px;\r\n\t\tcursor: pointer;\r\n\t\tposition: relative;\r\n\t\ta {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\tfont-size: 28px;\r\n\t\t\tcolor: rgba($color: $text, $alpha: 0.6);\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tcontent: '';\r\n\t\t\tposition: absolute;\r\n\t\t\tbottom: 0;\r\n\t\t\tleft: 0;\r\n\t\t\tright: 0;\r\n\t\t\theight: 1px;\r\n\t\t\tbackground-color: rgba($color: $text, $alpha: 0.6);\r\n\t\t}\r\n\t\t&:hover {\r\n\t\t\t&::after {\r\n\t\t\t\tbackground-color: rgba($color: $text, $alpha: 1);\r\n\t\t\t\theight: 2px;\r\n\t\t\t\tbox-shadow: 0 0 3px 0.5px $input-bg;\r\n\t\t\t}\r\n\t\t\ta {\r\n\t\t\t\tcolor: rgba($color: $text, $alpha: 1);\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 35px;\r\n\t\t\ta {\r\n\t\t\t\tfont-size: 20px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 35px;\r\n\t\t\ta {\r\n\t\t\t\tfont-size: 20px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\ta {\r\n\t\t\t\tfont-size: 25px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n//==========================================\r\n.we-are {\r\n\tbackground-color: $main-bg;\r\n\t&__body {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tpadding: 120px 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 70px 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 50px 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 30px 0;\r\n\t\t}\r\n\t}\r\n\t&__content {\r\n\t\tmargin: 60px 0 0;\r\n\t\tborder-radius: 4px;\r\n\t\toverflow: hidden;\r\n\t\tposition: relative;\r\n\t\theight: 500px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 40px 0 0;\r\n\t\t\theight: 60vh;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 30px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 20px 0 0;\r\n\t\t\theight: 250px;\r\n\t\t}\r\n\t}\r\n\t&__content-video {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tobject-fit: cover;\r\n\t}\r\n\t&__content-play {\r\n\t\tposition: absolute;\r\n\t\tz-index: 1;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\topacity: 0;\r\n\t}\r\n\t&__content-play-real {\r\n\t\tdisplay: block;\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tbackground: rgba($color: $titles, $alpha: 0.6);\r\n\t\tbackground-size: cover;\r\n\t\tbackground-position: center;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttransition: all 0.3s ease;\r\n\t\t&::before {\r\n\t\t\tcontent: '';\r\n\t\t\tborder-radius: 50%;\r\n\t\t\tposition: absolute;\r\n\t\t\tbackground-color: $primary;\r\n\t\t\ttop: 50%;\r\n\t\t\tleft: 50%;\r\n\t\t\twidth: 80px;\r\n\t\t\theight: 80px;\r\n\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\ttransition: all 0.3s ease;\r\n\t\t\t@media (max-width: $desktop) {\r\n\t\t\t\ttransform: translate(-50%, -50%) scale(0.8);\r\n\t\t\t}\r\n\t\t\t@media (max-width: $tablet) {\r\n\t\t\t\ttransform: translate(-50%, -50%) scale(0.6);\r\n\t\t\t}\r\n\t\t\t@media (max-width: $phone) {\r\n\t\t\t\ttransform: translate(-50%, -50%) scale(0.5);\r\n\t\t\t}\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tcontent: '';\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 50%;\r\n\t\t\tleft: 50%;\r\n\t\t\ttransform: translate(-25%, -50%);\r\n\t\t\tborder: 18px solid transparent;\r\n\t\t\tborder-left: 25px solid white;\r\n\t\t\ttransition: all 0.3s ease;\r\n\t\t\t@media (max-width: $desktop) {\r\n\t\t\t\ttransform: translate(-25%, -50%) scale(0.8);\r\n\t\t\t}\r\n\t\t\t@media (max-width: $tablet) {\r\n\t\t\t\ttransform: translate(-25%, -50%) scale(0.6);\r\n\t\t\t}\r\n\t\t\t@media (max-width: $phone) {\r\n\t\t\t\ttransform: translate(-25%, -50%) scale(0.5);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__content-controls {\r\n\t\tposition: absolute;\r\n\t\tz-index: 1;\r\n\t\tbottom: -200px;\r\n\t\tleft: 0;\r\n\t\tright: 0;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\ttransition: all 0.4s ease;\r\n\t\tmargin: 0 0 32px 32px;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 0 0 15px 15px;\r\n\t\t}\r\n\t}\r\n\t&__content-controls-volume {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tposition: relative;\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t\tborder-radius: 50%;\r\n\t\tbackground-color: rgba($color: white, $alpha: 0.2);\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\twidth: 30px;\r\n\t\t\theight: 30px;\r\n\t\t}\r\n\t}\r\n\t&__content-controls-volume-mute {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\topacity: 0;\r\n\t}\r\n\t&__content-controls-volume-mute-real {\r\n\t\tdisplay: flex;\r\n\t\t.on {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\t&__content-controls-volume-lvl {\r\n\t\tposition: absolute;\r\n\t\ttransform: rotate(-90deg);\r\n\t\tbottom: 70px;\r\n\t\twidth: 75px;\r\n\t\t-webkit-appearance: none;\r\n\t\t-moz-appearance: none;\r\n\t\tappearance: none;\r\n\t\toutline: none;\r\n\t\theight: 0;\r\n\t\tborder-radius: 8px;\r\n\t\ttransition: all 0.3s ease;\r\n\t\tcursor: pointer;\r\n\t\toverflow: hidden;\r\n\r\n\t\t&::-webkit-slider-runnable-track {\r\n\t\t\tbackground-color: rgba($color: $titles, $alpha: 0.4);\r\n\t\t\toverflow: hidden;\r\n\t\t}\r\n\t\t&::-moz-range-track {\r\n\t\t\tbackground-color: rgba($color: $titles, $alpha: 0.4);\r\n\t\t\tborder-radius: 4px;\r\n\t\t\toverflow: hidden;\r\n\t\t}\r\n\t\t&::-webkit-slider-thumb {\r\n\t\t\t-webkit-appearance: none;\r\n\t\t\tbackground: #ecf0f1;\r\n\t\t\tcursor: pointer;\r\n\t\t\twidth: 10px;\r\n\t\t\theight: 15px;\r\n\t\t\tborder-radius: 8px;\r\n\t\t\tbox-shadow: -200px 0 0 195px $primary;\r\n\t\t}\r\n\t\t&::-moz-range-thumb {\r\n\t\t\t-webkit-appearance: none;\r\n\t\t\tbackground: #ecf0f1;\r\n\t\t\tcursor: pointer;\r\n\t\t\twidth: 12px;\r\n\t\t\theight: 15px;\r\n\t\t\tborder-radius: 8px;\r\n\t\t\tbox-shadow: -200px 0 0 198px $primary;\r\n\t\t}\r\n\t}\r\n\t&__content-controls-bar {\r\n\t\tmargin: 0 0 0 30px;\r\n\t\twidth: 80%;\r\n\t}\r\n\t&__content-controls-progress {\r\n\t\twidth: 100%;\r\n\t\theight: 5px;\r\n\t\tborder-radius: 5px;\r\n\t\toverflow: hidden;\r\n\t\tbackground-color: $titles;\r\n\t\t&::-webkit-progress-value {\r\n\t\t\tbackground: $primary;\r\n\t\t}\r\n\t\t&::-moz-progress-bar {\r\n\t\t\tbackground: $primary;\r\n\t\t}\r\n\t}\r\n\t&__content-play:hover + .we-are__content-play-real::before {\r\n\t\tbox-shadow: 0 0 0 10px rgba($color: $primary, $alpha: 0.62);\r\n\t}\r\n\t&__content:hover .we-are__content-controls {\r\n\t\tbottom: 0;\r\n\t}\r\n\t&__content-play:checked + .we-are__content-play-real {\r\n\t\tbackground: rgba($color: $titles, $alpha: 0);\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\ttransform: translate(-50%, -400%) scale(0);\r\n\t\t}\r\n\t}\r\n\t&__content-controls-volume-mute:checked\r\n\t\t+ .we-are__content-controls-volume-mute-real {\r\n\t\t.on {\r\n\t\t\tdisplay: block;\r\n\t\t}\r\n\t\t.off {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\t&__content-controls-volume-mute:hover ~ .we-are__content-controls-volume-lvl {\r\n\t\theight: 15px;\r\n\t}\r\n\t&__content-controls-volume-lvl:hover {\r\n\t\theight: 15px;\r\n\t}\r\n}\r\n//==========================================\r\n.our-core {\r\n\tbackground-color: $main-bg;\r\n\tz-index: 2;\r\n\t&__body {\r\n\t\tpadding: 60px 0 0px;\r\n\t\tmargin: 0 0 -90px 0;\r\n\t\tposition: relative;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 45px 0;\r\n\t\t\tmargin: 0 0 -45px 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 35px 0;\r\n\t\t\tmargin: 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 15px 0;\r\n\t\t}\r\n\t}\r\n\r\n\t&__question-form {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tposition: relative;\r\n\t\tpadding: 48px 60px;\r\n\t\tmargin: 120px 0 0;\r\n\t\ttext-align: center;\r\n\t\tbackground-color: $main-bg;\r\n\t\tborder-radius: 4px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 35px 45px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 25px 30px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 5px;\r\n\t\t}\r\n\t}\r\n\r\n\t.question-form {\r\n\t\t&__title {\r\n\t\t\tcolor: $titles;\r\n\t\t\tfont-family: 'Ubu-B';\r\n\t\t\tfont-size: 28px;\r\n\t\t\tline-height: 150%;\r\n\t\t\t@media (max-width: $tablet) {\r\n\t\t\t\tfont-size: 20px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__body {\r\n\t\t\tpadding: 32px 0 0;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: flex-end;\r\n\t\t\tcolumn-gap: 24px;\r\n\t\t\t@media (max-width: calc($desktop - 50px)) {\r\n\t\t\t\tflex-wrap: wrap;\r\n\t\t\t\tcolumn-gap: 15px;\r\n\t\t\t\trow-gap: 10px;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t}\r\n\t\t\t@media (max-width: $tablet) {\r\n\t\t\t\tpadding: 10px 0 0;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__field {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tflex: 0 1 23.5%;\r\n\t\t\t@media (max-width: calc($desktop - 50px)) {\r\n\t\t\t\tflex: 0 1 48%;\r\n\t\t\t}\r\n\t\t\t@media (max-width: calc($tablet - 50px)) {\r\n\t\t\t\tflex: 0 1 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t\t.width {\r\n\t\t\tflex: 0 1 37.5%;\r\n\t\t\t@media (max-width: calc($desktop - 50px)) {\r\n\t\t\t\tflex: 0 1 70%;\r\n\t\t\t}\r\n\t\t\t@media (max-width: calc($tablet - 50px)) {\r\n\t\t\t\tflex: 0 1 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__label {\r\n\t\t\ttext-align-last: left;\r\n\t\t}\r\n\t\t&__input {\r\n\t\t\tmargin: 8px 0 0;\r\n\t\t}\r\n\t\t&__btn {\r\n\t\t\theight: 46px;\r\n\t\t\t@media (max-width: calc($desktop - 50px)) {\r\n\t\t\t\tflex: 0 1 25%;\r\n\t\t\t}\r\n\t\t\t@media (max-width: calc($tablet - 50px)) {\r\n\t\t\t\tmargin: 0 auto;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.qustion-success {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\ttext-align: left;\r\n\t\talign-items: center;\r\n\t\tjustify-content: space-around;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 70%;\r\n\t\t\ttop: 30%;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\theight: 40%;\r\n\t\t\ttop: 60%;\r\n\t\t\tflex-direction: column;\r\n\t\t\ttext-align: center;\r\n\t\t\tjustify-content: space-between;\r\n\t\t}\r\n\t\tp {\r\n\t\t\tmargin: 0;\r\n\t\t\t@media (max-width: $tablet) {\r\n\t\t\t\tmargin: 10px;\r\n\t\t\t\tfont-size: 18px;\r\n\t\t\t}\r\n\t\t}\r\n\t\th5 {\r\n\t\t\tmargin: 0;\r\n\t\t\t@media (max-width: $tablet) {\r\n\t\t\t\tmargin: 10px;\r\n\t\t\t\tfont-size: 24px;\r\n\t\t\t}\r\n\t\t}\r\n\t\tbutton {\r\n\t\t\twidth: 250px;\r\n\t\t\tmargin: 0 0 10px 0;\r\n\t\t\t@media (max-width: $tablet) {\r\n\t\t\t\twidth: 150px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n//==========================================\r\n.our-service {\r\n\tbackground: $auxiliary-bg;\r\n\tposition: relative;\r\n\t&__body {\r\n\t\tpadding: 210px 0 80px;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t\tz-index: 1;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 100px 0 60px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 60px 0 40px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 40px 0 20px;\r\n\t\t}\r\n\t}\r\n\t&__content {\r\n\t\tmargin: 60px 0 0;\r\n\t\tdisplay: flex;\r\n\t\tcolumn-gap: 30px;\r\n\t\twidth: 100%;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 40px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 30px 0 0;\r\n\t\t\tcolumn-gap: 15px;\r\n\t\t\trow-gap: 10px;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tjustify-content: space-between;\r\n\t\t}\r\n\t}\r\n\t&__item {\r\n\t\tflex: 0 1 25%;\r\n\t\theight: 285px;\r\n\t\tbackground: $main-bg;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\tborder-radius: 4px;\r\n\t\tborder-radius: 4px;\r\n\t\tborder: 1px solid #e5e8ed;\r\n\t\toverflow: hidden;\r\n\t\tbox-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),\r\n\t\t\t0px 12px 10px -6px rgba(154, 156, 165, 0.04),\r\n\t\t\t0px 30px 24px -10px rgba(154, 156, 165, 0.05),\r\n\t\t\t0px 80px 80px -20px rgba(154, 156, 165, 0.08);\r\n\t\tposition: relative;\r\n\t\timg {\r\n\t\t\ttransition: all 0.8s;\r\n\t\t}\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 200px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 calc(50% - 15px);\r\n\t\t\theight: 150px;\r\n\t\t}\r\n\t}\r\n\t&__item-box {\r\n\t\ttext-align: center;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tbackground: #fff;\r\n\t\tz-index: 2;\r\n\t\ttransition: all 0.3s;\r\n\t}\r\n\t&__item-box-svg {\r\n\t\tfill: $primary;\r\n\t\ttransition: all 0.2s ease;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\twidth: 35px;\r\n\t\t}\r\n\t}\r\n\t&__item-box-title {\r\n\t\tmargin: 24px 0 0;\r\n\t\tfont-size: 20px;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tline-height: 150%;\r\n\t\ttransition: all 0.2s ease;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tfont-size: 17px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 15px 0 0;\r\n\t\t\tfont-size: 14px;\r\n\t\t}\r\n\t}\r\n\t&__box {\r\n\t\tmargin: 80px 0 0;\r\n\t}\r\n}\r\n.our-service__item-box:hover {\r\n\tbackground: rgba($color: $titles, $alpha: 0.6);\r\n\t.our-service__item-box-title,\r\n\t.our-service__item-box-svg {\r\n\t\tcolor: $text;\r\n\t\tfilter: saturate(0) brightness(1000%);\r\n\t}\r\n}\r\n.our-service__item:hover > img {\r\n\ttop: -10px;\r\n\tright: -10px;\r\n\tbottom: -10px;\r\n\tleft: -10px;\r\n\twidth: calc(100% + 10px);\r\n\theight: calc(100% + 10px);\r\n}\r\n//==========================================\r\n.our-work {\r\n\tbackground-color: $main-bg;\r\n\t&__body {\r\n\t\tpadding: 120px 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 80px 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 50px 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 20px 0;\r\n\t\t}\r\n\t}\r\n}\r\n//==========================================\r\n.supported {\r\n\tbackground: $auxiliary-bg;\r\n\t&__body {\r\n\t\tpadding: 80px 0 0;\r\n\t\tmargin: 0 0 -60px;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\trow-gap: 170px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\trow-gap: 70px;\r\n\t\t\tpadding: 60px 0 10px;\r\n\t\t\tmargin: 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\trow-gap: 35px;\r\n\t\t\tpadding: 40px 0 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 20px 0 0;\r\n\t\t}\r\n\t}\r\n}\r\n//==========================================\r\n.achievement {\r\n\tbackground: $main-bg;\r\n\t&__body {\r\n\t\tpadding: 180px 0 90px;\r\n\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 60px 0 10px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 40px 0 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 20px 0 0;\r\n\t\t}\r\n\t}\r\n\t&__title {\r\n\t}\r\n\t&__content {\r\n\t\tmargin: 60px 0 0;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\trow-gap: 15px;\r\n\t\t}\r\n\t}\r\n\t&__item {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 40%;\r\n\t\t}\r\n\t}\r\n}\r\n.progress {\r\n\t&__wrapper {\r\n\t\tdisplay: flex;\r\n\t\tposition: relative;\r\n\t\tbox-sizing: border-box;\r\n\t\tspan {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 50%;\r\n\t\t\tleft: 50%;\r\n\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\tcolor: $titles;\r\n\t\t\tfont-family: 'Ubu-B';\r\n\t\t\tfont-size: 32px;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\tcontent: '';\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\tposition: absolute;\r\n\t\t\tbox-sizing: border-box;\r\n\t\t\ttop: 50%;\r\n\t\t\tleft: 50%;\r\n\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\tborder-radius: 50%;\r\n\t\t}\r\n\t}\r\n\t&__ring {\r\n\t\twidth: 150px;\r\n\t\theight: 150px;\r\n\t\tfill: none;\r\n\t}\r\n\t&__circle {\r\n\t\tstroke-width: 6px;\r\n\t\ttransform-origin: center;\r\n\t\ttransform: rotate(-90deg);\r\n\t}\r\n\r\n\t&__name {\r\n\t\tmargin: 20px 0 0;\r\n\t\tfont-size: 14px;\r\n\t\tcolor: $titles;\r\n\t}\r\n\r\n\t.yellow {\r\n\t\t&__stroke {\r\n\t\t\tstroke: #f89828;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\tborder: 6px solid rgba($color: #f89828, $alpha: 0.3);\r\n\t\t}\r\n\t}\r\n\t.purple {\r\n\t\t&__stroke {\r\n\t\t\tstroke: #f52f6e;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\tborder: 6px solid rgba($color: #f52f6e, $alpha: 0.3);\r\n\t\t}\r\n\t}\r\n\t.blue {\r\n\t\t&__stroke {\r\n\t\t\tstroke: #5a87fc;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\tborder: 6px solid rgba($color: #5a87fc, $alpha: 0.3);\r\n\t\t}\r\n\t}\r\n\t.green {\r\n\t\t&__stroke {\r\n\t\t\tstroke: #03cea4;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\tborder: 6px solid rgba($color: #03cea4, $alpha: 0.3);\r\n\t\t}\r\n\t}\r\n}\r\n//==========================================\r\n.recent {\r\n\tbackground: $main-bg;\r\n\t&__body {\r\n\t\tpadding: 90px 0 120px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 60px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 50px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 30px;\r\n\t\t}\r\n\t}\r\n\t&__content {\r\n\t\tmargin: 60px 0 0 0;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template:\r\n\t\t\trepeat(2, minmax(auto, 255px)) /\r\n\t\t\tminmax(auto, 705px) minmax(auto, 495px);\r\n\t\tgap: 30px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tgap: 15px;\r\n\t\t\tgrid-template: repeat(auto-fill, minmax(255px, auto)) / 1fr;\r\n\t\t}\r\n\t}\r\n\t&__box {\r\n\t\tmargin: 85px 0 0 0;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t}\r\n\t.news-card {\r\n\t\theight: 100%;\r\n\t\tposition: relative;\r\n\t\tborder-radius: 4px;\r\n\t\toverflow: hidden;\r\n\t\tdisplay: inline-flex;\r\n\t\tflex-direction: column;\r\n\t\tbox-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),\r\n\t\t\t0px 12px 10px -6px rgba(154, 156, 165, 0.04),\r\n\t\t\t0px 30px 24px -10px rgba(154, 156, 165, 0.05),\r\n\t\t\t0px 80px 80px -20px rgba(154, 156, 165, 0.08);\r\n\t\t&__image {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 155px;\r\n\t\t\tposition: relative;\r\n\t\t\toverflow: hidden;\r\n\t\t\t@media (max-width: $desktop) {\r\n\t\t\t\theight: 300px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__comments-box {\r\n\t\t\tz-index: 1;\r\n\t\t\tbackground: $main-bg;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\toverflow-y: auto;\r\n\t\t}\r\n\t\t&__box {\r\n\t\t\tpadding: 16px 24px 24px;\r\n\t\t}\r\n\t\t&__box-title {\r\n\t\t\tfont-family: 'Ubu-B';\r\n\t\t\tfont-size: 20px;\r\n\t\t\tline-height: 150%;\r\n\t\t\tcolor: $titles;\r\n\t\t\ttransition: all 0.3s ease-out;\r\n\t\t}\r\n\t\t&__box-info {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tcolumn-gap: 24px;\r\n\t\t\tcolor: $desc;\r\n\t\t\tfont-size: 14px;\r\n\t\t\tline-height: 21px;\r\n\t\t\tmargin: 8px 0 0 0;\r\n\t\t\tspan,\r\n\t\t\tbutton {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tcolor: $desc;\r\n\t\t\t\tfont-size: 14px;\r\n\t\t\t\tline-height: 21px;\r\n\t\t\t}\r\n\t\t\t> span:nth-child(2) {\r\n\t\t\t\tposition: relative;\r\n\t\t\t\t&::before,\r\n\t\t\t\t&::after {\r\n\t\t\t\t\tcontent: '';\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\twidth: 1px;\r\n\t\t\t\t\theight: 12px;\r\n\t\t\t\t\tbackground-color: $desc;\r\n\t\t\t\t}\r\n\t\t\t\t&::before {\r\n\t\t\t\t\tleft: -12px;\r\n\t\t\t\t}\r\n\t\t\t\t&::after {\r\n\t\t\t\t\tright: -12px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__box-svg {\r\n\t\t\twidth: 16px;\r\n\t\t\theight: 16px;\r\n\t\t\tmargin: 0 8px 0 0;\r\n\t\t\tfill: $desc;\r\n\t\t}\r\n\t\t&__box-describe {\r\n\t\t\tmargin: 16px 0 0 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tline-height: 160%;\r\n\t\t\tcolor: $links;\r\n\t\t\t@media (max-width: $desktop) {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__comments-box {\r\n\t\t\tmin-width: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\toverflow-y: auto;\r\n\t\t\tposition: absolute;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\ttop: 100%;\r\n\t\t\tleft: 0;\r\n\t\t\tright: 0;\r\n\t\t\ttransition: all 0.5s ease;\r\n\t\t\tpadding: 20px 30px 0;\r\n\t\t\trow-gap: 15px;\r\n\t\t}\r\n\t\t.showComments {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&:hover {\r\n\t\t\t.news-card__box-title {\r\n\t\t\t\tcolor: $primary;\r\n\t\t\t}\r\n\t\t\t.news-card__box-info button span {\r\n\t\t\t\tcolor: $primary;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 350px;\r\n\t\t}\r\n\t}\r\n\t.news-card:first-child {\r\n\t\tgrid-column: 1/2;\r\n\t\tgrid-row: 1/3;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tgrid-column: auto;\r\n\t\t\tgrid-row: auto;\r\n\t\t}\r\n\t\t.news-card__image {\r\n\t\t\theight: 355px;\r\n\t\t\t@media (max-width: $desktop) {\r\n\t\t\t\theight: 300px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t.news-card__box {\r\n\t\t\tpadding: 24px;\r\n\t\t}\r\n\t}\r\n\t.news-card:not(:first-child) {\r\n\t\t.news-card__box-describe {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\t.comment {\r\n\t\t&__image {\r\n\t\t\tposition: relative;\r\n\t\t\twidth: 40px;\r\n\t\t\theight: 40px;\r\n\t\t}\r\n\t\t&__info {\r\n\t\t}\r\n\t\t&__info-name {\r\n\t\t}\r\n\t\t&__info-text {\r\n\t\t}\r\n\t\t&__info-date {\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.comment {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tborder-bottom: 2px solid $primary;\r\n\tpadding: 0 0 15px;\r\n\t&__image {\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t}\r\n\t&__info {\r\n\t\tmax-width: 85%;\r\n\t\tmargin: 0 0 0 20px;\r\n\t}\r\n\t&__info-name {\r\n\t\tfont-size: 21px;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tletter-spacing: 0.6px;\r\n\t}\r\n\t&__info-text {\r\n\t\tmargin: 10px 0 0;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 15px;\r\n\t\tline-height: 150%;\r\n\t}\r\n\t&__info-date {\r\n\t\tmargin: 8px 0 0;\r\n\t\tfont-size: 14px;\r\n\t\tcolor: $desc;\r\n\t}\r\n}\r\n",".slider {\r\n\t@media (max-width: $desktop) {\r\n\t\tpadding: 80px 0;\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tpadding: 60px 0;\r\n\t}\r\n\t@media (max-width: $phone) {\r\n\t\tpadding: 40px 0;\r\n\t}\r\n\t&__top {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: flex-end;\r\n\t}\r\n\t&__title {\r\n\t\ttext-align: left;\r\n\t\tmax-width: 700px;\r\n\t\tmargin: 0;\r\n\t}\r\n\t&__buttons {\r\n\t\tdisplay: flex;\r\n\t\tcolumn-gap: 24px;\r\n\t}\r\n\t&__content {\r\n\t\tdisplay: flex;\r\n\t\tmargin: 60px 0 0;\r\n\t\tcolumn-gap: 30px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 30px 0 0;\r\n\t\t\tcolumn-gap: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 15px 0 0;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\trow-gap: 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t}\r\n\t}\r\n\t&__view-more {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\tmargin: 85px 0 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 60px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 40px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t}\r\n\t}\r\n}\r\n",".portfolio-card {\r\n\tflex: 0 1 33.3333%;\r\n\ttext-align: center;\r\n\tborder-radius: 4px 4px 0 0;\r\n\tbox-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),\r\n\t\t0px 12px 10px -6px rgba(154, 156, 165, 0.04),\r\n\t\t0px 30px 24px -10px rgba(154, 156, 165, 0.05),\r\n\t\t0px 80px 80px -20px rgba(154, 156, 165, 0.08);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tpadding: 0 0 90px;\r\n\t&:hover .portfolio-card__box {\r\n\t\theight: 37.5%;\r\n\t}\r\n\t@media (max-width: $desktop) {\r\n\t\tpadding: 0 0 50px;\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tflex: 0 1 100%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tpadding: 0;\r\n\t}\r\n\t@media (max-width: $phone) {\r\n\t\tflex-direction: column;\r\n\t\tpadding: 0 0 50px;\r\n\t}\r\n\t&__img {\r\n\t\theight: 345px;\r\n\t\tposition: relative;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 240px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 55%;\r\n\t\t\theight: 180px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\tmin-height: 200px;\r\n\t\t}\r\n\t}\r\n\t&__box {\r\n\t\tposition: absolute;\r\n\t\tbottom: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 21.6%;\r\n\t\tbackground-color: $main-bg;\r\n\t\tpadding: 15px 0 25px;\r\n\t\ttransition: all 0.3s ease-out;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tposition: relative;\r\n\t\t\theight: 100%;\r\n\t\t\twidth: 45%;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\tpadding: 0 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 21.6%;\r\n\t\t\tbottom: 0;\r\n\t\t\tpadding: 25px 3px 5px;\r\n\t\t}\r\n\t}\r\n\t&__box-title {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 20px;\r\n\t\tline-height: 105%;\r\n\t\tcolor: $titles;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 1;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t}\r\n\t&__box-subtitle {\r\n\t\tmargin: 15px 0 0;\r\n\t\tfont-size: 14px;\r\n\t\tcolor: $desc;\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 10px 0 0;\r\n\t\t\tfont-size: 12px;\r\n\t\t\tline-height: 1;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 10px;\r\n\t\t}\r\n\t}\r\n\t&__box-btn {\r\n\t\tmargin: 24px 0 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 13px 0 0;\r\n\t\t\theight: 30px;\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 16px 0 0;\r\n\t\t}\r\n\t}\r\n}\r\n.card {\r\n\tanimation: showCard 1s ease;\r\n}\r\n@keyframes showCard {\r\n\t0% {\r\n\t\tborder-radius: 50%;\r\n\t\ttransform: scale(0, 0);\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\tborder-radius: 4px;\r\n\t\ttransform: scale(100%, 100%);\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n",".supported-by {\r\n\t&__title {\r\n\t}\r\n\t&__list {\r\n\t\tmargin: 21px 0 0;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tcolumn-gap: 102px;\r\n\t\tjustify-content: center;\r\n\t\t> div {\r\n\t\t\twidth: 120px;\r\n\t\t\theight: 64px;\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tcolumn-gap: 20px;\r\n\t\t\t> div {\r\n\t\t\t\twidth: 90px;\r\n\t\t\t\theight: 50px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tcolumn-gap: 10px;\r\n\t\t\t> div {\r\n\t\t\t\twidth: calc(33.333% - 10px);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n",".opinion {\r\n\tdisplay: flex;\r\n\tcolumn-gap: 135px;\r\n\t@media (max-width: $desktop) {\r\n\t\tcolumn-gap: 40px;\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tcolumn-gap: 20px;\r\n\t\tposition: relative;\r\n\t}\r\n\t&__body {\r\n\t\tmax-width: 600px;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: 400px;\r\n\t\t}\r\n\t\t@media (max-width: calc($tablet - 100px)) {\r\n\t\t\tmax-width: 100%;\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 35px;\r\n\t\t\tz-index: 2;\r\n\t\t\tpadding: 0 10px;\r\n\t\t}\r\n\t}\r\n\t&__title {\r\n\t\ttext-align: left;\r\n\t}\r\n\t&__content {\r\n\t\tmargin: 60px 0 0;\r\n\t\ttransition: all 0.5s ease;\r\n\t}\r\n\t&__content-img {\r\n\t\twidth: 72px;\r\n\t\theight: 72px;\r\n\t\tborder-radius: 50%;\r\n\t\tbackground: rgba($color: $primary, $alpha: 0.5);\r\n\t\tbox-shadow: 0 -3px 10px 0.5px rgba($color: $primary, $alpha: 0.9),\r\n\t\t\t0 -7px 15px 1px rgba($color: $desc, $alpha: 0.4);\r\n\t\tposition: relative;\r\n\t}\r\n\t&__content-text {\r\n\t\tmargin: 24px 0 0;\r\n\t\tfont-size: 16px;\r\n\t\tline-height: 160%;\r\n\t\tcolor: $links;\r\n\t\tmax-height: 80px;\r\n\t\toverflow-x: auto;\r\n\t\ttransition: all 0.5s ease;\r\n\t\t@media (max-width: calc($tablet - 100px)) {\r\n\t\t\tbackground-color: rgba($color: $desc, $alpha: 0.7);\r\n\t\t\tmargin: 10px -10px 0;\r\n\t\t\tpadding: 0 10px;\r\n\t\t\tcolor: $titles;\r\n\t\t}\r\n\t}\r\n\t&__content-info {\r\n\t\tmargin: 24px 0 0;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t@media (max-width: calc($tablet - 100px)) {\r\n\t\t\tbackground-color: rgba($color: $desc, $alpha: 0.7);\r\n\t\t\tmargin: 10px -10px 0;\r\n\t\t\tpadding: 0 10px;\r\n\t\t\tcolor: $titles;\r\n\t\t}\r\n\t}\r\n\t&__content-info-user {\r\n\t}\r\n\t&__content-info-user-name {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 16px;\r\n\t\tline-height: 160%;\r\n\t\tcolor: $titles;\r\n\t}\r\n\t&__content-info-user-work {\r\n\t\tfont-size: 14px;\r\n\t\tline-height: 150%;\r\n\t\tcolor: $desc;\r\n\t}\r\n\t&__content-info-buttons {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tbutton {\r\n\t\t\tbackground-color: $auxiliary-bg;\r\n\t\t\t@media (max-width: calc($tablet - 100px)) {\r\n\t\t\t\tbackground-color: rgba($color: $desc, $alpha: 0.1);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__image-block {\r\n\t\tflex: 0 1 495px;\r\n\t\theight: 550px;\r\n\t\tposition: relative;\r\n\t\tborder-radius: 4px;\r\n\t\toverflow: hidden;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 370px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 35px 0 0;\r\n\t\t\tcolumn-gap: 20px;\r\n\t\t}\r\n\t\t@media (max-width: calc($tablet - 100px)) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\timg {\r\n\t\t\t\topacity: 0.5;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n",".advantages {\r\n\t&__content {\r\n\t\tmargin: 60px 0 0;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 40px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 30px 0 0;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\trow-gap: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 20px 0 0;\r\n\t\t}\r\n\t}\r\n\t&__content-item {\r\n\t\tflex: 0 1 23.1%;\r\n\t\ttext-align: center;\r\n\t\t&:nth-child(2) {\r\n\t\t\tposition: relative;\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\tcontent: '';\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\twidth: 1px;\r\n\t\t\t\tbackground: linear-gradient(\r\n\t\t\t\t\t135deg,\r\n\t\t\t\t\trgba(218, 219, 221, 0) 0%,\r\n\t\t\t\t\trgba(218, 219, 221, 0.5) 12.33%,\r\n\t\t\t\t\t#dadbdd 51.91%,\r\n\t\t\t\t\trgba(218, 219, 221, 0.5) 87.85%,\r\n\t\t\t\t\trgba(218, 219, 221, 0) 100%\r\n\t\t\t\t);\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\tleft: -94px;\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tright: -94px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tflex: 0 1 30%;\r\n\t\t\t&:nth-child(2) {\r\n\t\t\t\tposition: relative;\r\n\t\t\t\t&::before {\r\n\t\t\t\t\tleft: -5%;\r\n\t\t\t\t}\r\n\t\t\t\t&::after {\r\n\t\t\t\t\tright: -5%;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__content-item-box {\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\ttext-align: left;\r\n\t\t\tmargin: 0 0 0 20px;\r\n\t\t}\r\n\t}\r\n\t&__content-item-title {\r\n\t\tmargin: 21px 0 0;\r\n\t\tcolor: $titles;\r\n\t\tfont-size: 20px;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tline-height: 30px;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 0;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 15px;\r\n\t\t}\r\n\t}\r\n\t&__content-item-text {\r\n\t\tmargin: 8px 0 0;\r\n\t\tfont-size: 16px;\r\n\t\tcolor: $desc;\r\n\t\tfont-family: 'Ubu-R';\r\n\t\tline-height: 25.6px;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 12px;\r\n\t\t\tline-height: 15px;\r\n\t\t}\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/pages/homepage.scss":
/*!****************************************!*\
  !*** ./src/styles/pages/homepage.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./homepage.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/homepage.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/images/bg-image.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/bg-image.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/bg-image..jpg";

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

/***/ "./src/assets/images/services-0.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/services-0.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/services-0..jpg";

/***/ }),

/***/ "./src/assets/images/services-1.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/services-1.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/services-1..jpg";

/***/ }),

/***/ "./src/assets/images/services-2.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/services-2.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/services-2..jpg";

/***/ }),

/***/ "./src/assets/images/services-3.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/services-3.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/services-3..jpg";

/***/ }),

/***/ "./src/scripts/api/getNewsData.mjs":
/*!*****************************************!*\
  !*** ./src/scripts/api/getNewsData.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-store/store */ "./src/scripts/store/store.mjs");
/* harmony import */ var _js_utilities_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-utilities/getData */ "./src/scripts/utilities/getData.mjs");
/* harmony import */ var _js_utilities_sortByDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-utilities/sortByDate */ "./src/scripts/utilities/sortByDate.mjs");



const initGetRecentNewsData = async function () {
  let amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  try {
    const NEWS_API = `http://localhost:4100/news?_sort=date&_order=desc&_limit=${amount}`;
    const DATA = await (0,_js_utilities_getData__WEBPACK_IMPORTED_MODULE_1__["default"])(NEWS_API);
    _js_store_store__WEBPACK_IMPORTED_MODULE_0__["default"].NEWS.recentNews = (0,_js_utilities_sortByDate__WEBPACK_IMPORTED_MODULE_2__["default"])(DATA);
  } catch (error) {
    console.error(error);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initGetRecentNewsData);

/***/ }),

/***/ "./src/scripts/api/getOpinionsData.mjs":
/*!*********************************************!*\
  !*** ./src/scripts/api/getOpinionsData.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_utilities_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-utilities/getData */ "./src/scripts/utilities/getData.mjs");
/* harmony import */ var _js_utilities_sortByDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-utilities/sortByDate */ "./src/scripts/utilities/sortByDate.mjs");
/* harmony import */ var _js_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-store/store */ "./src/scripts/store/store.mjs");



const initGetOpinionData = async () => {
  try {
    const OPINIONS_API = 'http://localhost:4100/opinions';
    const DATA = await (0,_js_utilities_getData__WEBPACK_IMPORTED_MODULE_0__["default"])(OPINIONS_API);
    _js_store_store__WEBPACK_IMPORTED_MODULE_2__["default"].OPINIONS = (0,_js_utilities_sortByDate__WEBPACK_IMPORTED_MODULE_1__["default"])(DATA);
  } catch (error) {
    console.log(error);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initGetOpinionData);

/***/ }),

/***/ "./src/scripts/templates/comments.mjs":
/*!********************************************!*\
  !*** ./src/scripts/templates/comments.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_utilities_dateFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-utilities/dateFormatter */ "./src/scripts/utilities/dateFormatter.mjs");

const dateToStroke = date => (0,_js_utilities_dateFormatter__WEBPACK_IMPORTED_MODULE_0__.MM_DD_YYYY)(new Date(date));
const createComment = comment => {
  const htmlComment = `<div class="comment">
					<div class="comment__image">
						<img src="assets/static-images/opinion/${comment.imageName}.png "class="image-adaptive" alt="User Photo">
					</div>
					<div class="comment__info">
						<h4 class="comment__info-name">${comment.name}</h4>
						<p class="comment__info-text">${comment.text}</p>
						<h4 class="comment__info-date">${dateToStroke(comment.date)}</h4>
					</div>
				</div>`;
  return htmlComment;
};
const createCommentsBlock = function () {
  let comments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let commentsHTML = '';
  comments.forEach(comment => {
    commentsHTML += createComment(comment);
  });
  const htmlCommentsBlock = `
		<div id="commentsBlock" class="news-card__comments-box">
			${commentsHTML}
		</div>`;
  return htmlCommentsBlock;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCommentsBlock);

/***/ }),

/***/ "./src/scripts/templates/newsCard.mjs":
/*!********************************************!*\
  !*** ./src/scripts/templates/newsCard.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_utilities_dateFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-utilities/dateFormatter */ "./src/scripts/utilities/dateFormatter.mjs");
/* harmony import */ var _js_templates_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-templates/comments */ "./src/scripts/templates/comments.mjs");


const checking = (check, data) => {
  if (check) return (0,_js_templates_comments__WEBPACK_IMPORTED_MODULE_1__["default"])(data);else return null;
};
const dateToStroke = date => (0,_js_utilities_dateFormatter__WEBPACK_IMPORTED_MODULE_0__.MM_DD_YYYY)(new Date(date));
const createNewsCard = item => {
  const commentsCheck = item.comments.length > 0;
  const quantity = commentsCheck > 0 ? item.comments.length : 'No';
  const htmlString = `
		<div class="news-card">
			<div class="news-card__image">
				${checking(commentsCheck, item.comments)}
				<img src="assets/static-images/news/${item.imageName}.png" class="image-adaptive" alt="Sorry, the image doesn't found">
			</div>
			<div class="news-card__box">
				<a class="news-card__box-title" href="#">
				${item.title}
				</a>
				<div class="news-card__box-info">
					<span>${item.type}</span>
					<span>${dateToStroke(item.date)}</span>
					<button id="showComments" type="button">
						<svg  class="news-card__box-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M36.5387 17.6113C36.3013 19.2559 35.7387 20.8189 34.905 22.2563C34.9675 22.6121 34.9996 22.9719 34.9996 23.3331C34.9996 24.5878 34.636 25.7886 33.9626 26.8796C33.6264 27.4242 33.5399 28.0623 33.5067 28.4839C33.4685 28.9671 33.4814 29.4958 33.5159 30.0037C33.5546 30.5735 33.6246 31.1717 33.7048 31.736C33.0543 31.5463 32.3492 31.3558 31.6763 31.204C31.1166 31.0777 30.5439 30.9701 30.0252 30.9165C29.5727 30.8698 28.9188 30.8336 28.3341 31.0226C27.0556 31.4359 25.6488 31.6665 24.1662 31.6665C22.403 31.6665 20.7837 31.3535 19.3643 30.8098C19.0229 30.8253 18.679 30.8331 18.3328 30.8331C16.3252 30.8331 14.3929 30.5691 12.585 30.0811C15.2132 33.1209 19.546 34.9998 24.1662 34.9998C25.9711 34.9998 27.7034 34.7227 29.2999 34.2135C29.3027 34.2136 29.3078 34.2135 29.3153 34.2133C29.3563 34.2125 29.4701 34.2103 29.6827 34.2322C30.017 34.2667 30.4469 34.3438 30.9428 34.4556C31.9301 34.6783 33.0395 35.007 33.9041 35.2814C35.7377 35.8635 37.5143 34.2634 37.1866 32.4027C37.0456 31.6019 36.899 30.6245 36.8415 29.7778C36.8126 29.3521 36.8094 29.0026 36.8297 28.7462C36.8381 28.6399 36.8488 28.5733 36.8556 28.5379C37.7933 26.9846 38.3329 25.216 38.3329 23.3331C38.3329 21.2105 37.6736 19.2723 36.5387 17.6113Z" />
						<path fill-rule="evenodd" clip-rule="evenodd" d="M9.32773 9.49661C7.08113 11.2146 5.83266 13.4698 5.83266 15.833C5.83266 17.0114 6.13943 18.1463 6.71496 19.2017C6.93417 19.6037 6.99636 20.0183 7.0186 20.299C7.04285 20.6051 7.03076 20.9197 7.00414 21.2139C6.95085 21.8028 6.82372 22.4701 6.67124 23.1274C6.49287 23.8962 6.26431 24.7162 6.03239 25.486C6.91281 25.166 7.87508 24.8381 8.78733 24.5719C9.52461 24.3568 10.2692 24.1702 10.9318 24.0654C11.5027 23.9751 12.3311 23.8864 13.0443 24.1332C14.6448 24.6869 16.4353 24.9997 18.3327 24.9997C21.9113 24.9997 25.0895 23.8886 27.3376 22.1694C29.5842 20.4514 30.8327 18.1962 30.8327 15.833C30.8327 13.4698 29.5842 11.2146 27.3376 9.49661C25.0895 7.77745 21.9113 6.66634 18.3327 6.66634C14.754 6.66634 11.5759 7.77745 9.32773 9.49661ZM7.30289 6.84875C10.1821 4.64702 14.0872 3.33301 18.3327 3.33301C22.5781 3.33301 26.4832 4.64702 29.3624 6.84875C32.2431 9.05167 34.166 12.2131 34.166 15.833C34.166 19.4529 32.2431 22.6143 29.3624 24.8173C26.4832 27.019 22.5781 28.333 18.3327 28.333C16.0942 28.333 13.9561 27.9681 12.0148 27.3041C12.0128 27.3095 11.8554 27.2941 11.4524 27.3578C10.988 27.4313 10.3952 27.5751 9.72089 27.7719C8.37845 28.1635 6.87087 28.7176 5.72255 29.1645C3.73317 29.9387 1.70658 28.0281 2.37685 25.9929C2.7321 24.9142 3.15108 23.5511 3.42414 22.3741C3.5617 21.7812 3.65096 21.2827 3.68437 20.9135C3.69596 20.7853 3.69896 20.6919 3.69829 20.6288C2.93115 19.1629 2.49932 17.5417 2.49932 15.833C2.49932 12.2131 4.42216 9.05167 7.30289 6.84875ZM3.6928 20.5379C3.69296 20.5377 3.69377 20.5422 3.69475 20.5518C3.69313 20.5429 3.69264 20.5381 3.6928 20.5379Z"/>
						</svg>
						<span>${quantity} comments </span>
					</button>
				</div>
				<p class="news-card__box-describe">
				${item.description}
				</p>
			</div>
		</div>
	`;
  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = htmlString;
  return tempContainer.firstElementChild;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewsCard);

/***/ }),

/***/ "./src/scripts/templates/progressFrame.mjs":
/*!*************************************************!*\
  !*** ./src/scripts/templates/progressFrame.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const keyframeProgressBar = (id, from, to) => {
  return `
	@keyframes draw-${id} {
		from {
			stroke-dashoffset: ${from}px;
		}
		to {
			stroke-dashoffset: calc(${from}px - ${to}px);
		}
	}
`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyframeProgressBar);

/***/ }),

/***/ "./src/scripts/utilities/addBackground.mjs":
/*!*************************************************!*\
  !*** ./src/scripts/utilities/addBackground.mjs ***!
  \*************************************************/
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

/***/ "./src/scripts/utilities/addServicesBg.mjs":
/*!*************************************************!*\
  !*** ./src/scripts/utilities/addServicesBg.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/scripts/utilities/progressRing.mjs":
/*!************************************************!*\
  !*** ./src/scripts/utilities/progressRing.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_templates_progressFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-templates/progressFrame */ "./src/scripts/templates/progressFrame.mjs");

const style = new CSSStyleSheet();
document.adoptedStyleSheets = [style];
const showProgress = (element, to) => {
  if (element) {
    const radius = element.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const toPercent = circumference / 100 * to;
    const keyframeRule = (0,_js_templates_progressFrame__WEBPACK_IMPORTED_MODULE_0__["default"])(element.id, circumference, toPercent);
    style.insertRule(keyframeRule);
    element.style.strokeDasharray = `${circumference} ${circumference}`;
    element.style.animation = `draw-${element.id} 2s ease forwards`;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showProgress);

/***/ }),

/***/ "./src/scripts/utilities/showNews.mjs":
/*!********************************************!*\
  !*** ./src/scripts/utilities/showNews.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_templates_newsCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-templates/newsCard */ "./src/scripts/templates/newsCard.mjs");

const showNews = (container, data) => {
  container.innerHTML = '';
  data.forEach(element => {
    const card = (0,_js_templates_newsCard__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
    container.appendChild(card);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showNews);

/***/ }),

/***/ "./src/scripts/utilities/showOpinion.mjs":
/*!***********************************************!*\
  !*** ./src/scripts/utilities/showOpinion.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initShowOpinion: () => (/* binding */ initShowOpinion),
/* harmony export */   toLeft: () => (/* binding */ toLeft),
/* harmony export */   toRight: () => (/* binding */ toRight)
/* harmony export */ });
let currentIndex = 0;
const cleaner = elements => {
  for (let key in elements) {
    const element = elements[key];
    if ('innerText' in element) element.innerText = '';
    if ('src' in element) element.src = '';
  }
};
const fillContent = (elements, data) => {
  for (let key in elements) {
    const element = elements[key];
    if (data.hasOwnProperty(key)) {
      if ('innerText' in element) element.innerText = data[key];
      if ('src' in element) element.src = `assets/static-images/opinion/${data[key]}.png`;
    }
  }
};
const toLeft = (elements, data) => {
  if (elements && data) {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    const currentOpinion = data[currentIndex];
    cleaner(elements);
    fillContent(elements, currentOpinion);
  }
  ;
};
const toRight = (elements, data) => {
  if (elements && data) {
    currentIndex = (currentIndex + 1) % data.length;
    const currentOpinion = data[currentIndex];
    cleaner(elements);
    fillContent(elements, currentOpinion);
  }
  ;
};
const initShowOpinion = (elements, data) => {
  if (data.length > 0) {
    const firstOpinion = data[currentIndex];
    cleaner(elements);
    fillContent(elements, firstOpinion);
  }
  ;
};


/***/ }),

/***/ "./src/scripts/utilities/validator.mjs":
/*!*********************************************!*\
  !*** ./src/scripts/utilities/validator.mjs ***!
  \*********************************************/
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

/***/ "./src/scripts/utilities/videoPlayer.mjs":
/*!***********************************************!*\
  !*** ./src/scripts/utilities/videoPlayer.mjs ***!
  \***********************************************/
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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"homepage": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcreatex"] = self["webpackChunkcreatex"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-464c4e","src_pages_templates_slider_hbs-src_scripts_api_getProjectsData_mjs-src_scripts_templates_port-9f2d00"], () => (__webpack_require__("./src/scripts/handlers/handleHomePage.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=homepage.js.map