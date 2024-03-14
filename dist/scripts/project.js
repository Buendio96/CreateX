/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/handlers/handleProjectPage.js":
/*!***************************************************!*\
  !*** ./src/scripts/handlers/handleProjectPage.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_api_getProjectsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-api/getProjectsData */ "./src/scripts/api/getProjectsData.mjs");
/* harmony import */ var _js_store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-store/store */ "./src/scripts/store/store.mjs");
/* harmony import */ var _js_templates_portfolioCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-templates/portfolioCard */ "./src/scripts/templates/portfolioCard.mjs");
/* harmony import */ var _js_utilities_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js-utilities/carousel */ "./src/scripts/utilities/carousel.mjs");
/* harmony import */ var _js_utilities_getQueryParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js-utilities/getQueryParams */ "./src/scripts/utilities/getQueryParams.mjs");
/* harmony import */ var _js_utilities_showSelectedProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @js-utilities/showSelectedProject */ "./src/scripts/utilities/showSelectedProject.mjs");
/* harmony import */ var _js_utilities_sliderProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js-utilities/sliderProject */ "./src/scripts/utilities/sliderProject.mjs");
/* harmony import */ var _p_temp_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @p-temp/slider */ "./src/pages/templates/slider.hbs");
/* harmony import */ var _p_temp_slider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_p_temp_slider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _s_pages_project__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @s-pages/project */ "./src/styles/pages/project.scss");









const PROJECT_ID = (0,_js_utilities_getQueryParams__WEBPACK_IMPORTED_MODULE_4__["default"])('id');
const containerElement = document.getElementById('selected-project');
const similarProjectsContainer = document.getElementById('similar-projects');
const dataType = await (0,_js_utilities_showSelectedProject__WEBPACK_IMPORTED_MODULE_5__["default"])(PROJECT_ID, containerElement);
if (similarProjectsContainer) {
  await (0,_js_api_getProjectsData__WEBPACK_IMPORTED_MODULE_0__.initGetRelatedData)(dataType);
  const SERVICES_TEMPLATE_OPTIONS = {
    title: 'Similar projects',
    id: 'similar-projects',
    modClass: ''
  };
  const renderHTML = _p_temp_slider__WEBPACK_IMPORTED_MODULE_7___default()(SERVICES_TEMPLATE_OPTIONS);
  similarProjectsContainer.innerHTML = renderHTML;
}
if (_js_store_store__WEBPACK_IMPORTED_MODULE_1__["default"].PROJECTS.relatedProjects && _js_store_store__WEBPACK_IMPORTED_MODULE_1__["default"].PROJECTS.relatedProjects.length > 0) {
  const RELATED_PROJECTS_OPTIONS = {
    inputData: _js_store_store__WEBPACK_IMPORTED_MODULE_1__["default"].PROJECTS.relatedProjects,
    containerEl: document.getElementById('similar-projects-container'),
    skipLeft: document.getElementById('similar-projects-skip-left'),
    skipRight: document.getElementById('similar-projects-skip-right'),
    cardTemplate: _js_templates_portfolioCard__WEBPACK_IMPORTED_MODULE_2__["default"]
  };
  (0,_js_utilities_carousel__WEBPACK_IMPORTED_MODULE_3__["default"])(RELATED_PROJECTS_OPTIONS);
}
const mainImage = document.getElementById('project-main-image');
const imagesContainer = document.getElementById('project-secondary-image');
const swapLeft = document.getElementById('project-swap-left');
const swapRight = document.getElementById('project-swap-right');
(0,_js_utilities_sliderProject__WEBPACK_IMPORTED_MODULE_6__["default"])(mainImage, swapLeft, swapRight, imagesContainer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/project.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/project.scss ***!
  \******************************************************************************************************************************************************************************************/
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
.project {
  position: relative;
  overflow: hidden;
}
.project > img {
  width: 850px;
  height: 820px;
  left: calc(100% - 210px);
}
.project .name-page-block {
  height: auto;
}
.project .name-page-block__body {
  max-width: 100%;
}

.introduce__body {
  margin: 60px 0 120px;
}
@media (max-width: 992px) {
  .introduce__body {
    margin: 30px 0 70px;
  }
}
.introduce__slider {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.introduce__slider-title-image {
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
}
.introduce__slider-title-image .arrow {
  z-index: 1;
  margin: 0 32px;
  background: rgba(255, 255, 255, 0.6);
}
.introduce__slider-title-image .arrow:hover {
  background: #ff5a30;
}
@media (max-width: 768px) {
  .introduce__slider-title-image {
    height: 350px;
  }
  .introduce__slider-title-image::before {
    font-size: 20px;
  }
  .introduce__slider-title-image .arrow {
    margin: 0 10px;
  }
}
.introduce__slider-subtitle-body {
  width: 700px;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .introduce__slider-subtitle-body {
    width: 100%;
    justify-content: left;
    column-gap: 10px;
    row-gap: 15px;
    flex-wrap: wrap;
  }
}
.introduce__slider-subtitle-image {
  position: relative;
  flex: 0 1 100px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
}
.introduce__description {
  display: flex;
  justify-content: space-between;
  margin: 100px 0 0;
  width: 100%;
}
@media (max-width: 992px) {
  .introduce__description {
    margin: 50px 0 0;
  }
}
@media (max-width: 768px) {
  .introduce__description {
    flex-wrap: wrap;
  }
}
.introduce__description-value {
  flex: 0 1 49%;
}
.introduce__description-value .first {
  margin: 60px 0 20px;
}
@media (max-width: 992px) {
  .introduce__description-value .first {
    margin: 20px 0 10px;
  }
}
@media (max-width: 768px) {
  .introduce__description-value {
    flex: 0 1 80%;
  }
}
.introduce__description-value-title {
  font-family: "Ubu-B";
  font-size: 46px;
  line-height: 130%;
  color: #1e212c;
}
@media (max-width: 768px) {
  .introduce__description-value-title {
    font-size: 30px;
  }
}
.introduce__description-value-text {
  font-size: 18px;
  line-height: 150%;
  color: #424551;
}
@media (max-width: 768px) {
  .introduce__description-value-text {
    font-size: 15px;
  }
}
.introduce__description-info {
  flex: 0 1 495px;
  padding: 40px 60px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 80px 80px -20px rgba(154, 156, 165, 0.08);
}
@media (max-width: 768px) {
  .introduce__description-info {
    margin: 20px 0 0;
    flex: 0 1 100%;
    padding: 15px 5px;
    flex-direction: row;
    row-gap: 0;
    text-align: center;
    flex-wrap: wrap;
    row-gap: 30px;
  }
}
.introduce__description-info-item {
  font-family: "Ubu-R";
  text-transform: capitalize;
  color: #787a80;
  font-size: 16px;
  line-height: 160%;
  display: flex;
}
@media (max-width: 768px) {
  .introduce__description-info-item {
    flex-direction: column;
    flex: 0 1 33.333%;
  }
}
@media (max-width: 480px) {
  .introduce__description-info-item {
    font-size: 14px;
  }
}
.introduce__description-info-item span {
  font-family: "Ubu-B";
  text-transform: uppercase;
  color: #1e212c;
  display: block;
  min-width: 130px;
}
@media (max-width: 768px) {
  .introduce__description-info-item span {
    min-width: auto;
  }
}

.decision {
  background-color: #f4f5f6;
  margin: 0 0 60px;
}
@media (max-width: 992px) {
  .decision {
    margin: 0 0 30px;
  }
}
@media (max-width: 768px) {
  .decision {
    margin: 0;
  }
}
.decision__body {
  margin: 80px 0 -60px;
  display: flex;
}
.decision__body > div {
  flex: 0 1 50%;
}
@media (max-width: 992px) {
  .decision__body {
    margin: 40px 0 -30px;
  }
}
@media (max-width: 768px) {
  .decision__body {
    margin: 0;
    padding: 20px 0;
  }
}
@media (max-width: 480px) {
  .decision__body {
    flex-direction: column;
    padding: 0 0 20px;
    row-gap: 20px;
    margin: 0 -15px;
  }
}
.decision__image {
  position: relative;
  width: 495px;
  height: 550px;
}
@media (max-width: 992px) {
  .decision__image {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .decision__image {
    height: 400px;
  }
}
@media (max-width: 480px) {
  .decision__image {
    height: 200px;
  }
}
.decision__checklist-title {
  font-family: "Ubu-B";
  font-size: 46px;
  line-height: 130%;
  margin: 0 0 0 15px;
}
@media (max-width: 768px) {
  .decision__checklist-title {
    font-size: 30px;
  }
}
@media (max-width: 480px) {
  .decision__checklist-title {
    font-size: 24px;
  }
}
.decision__checklist-body {
  margin: 60px 0 0 15px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
@media (max-width: 768px) {
  .decision__checklist-body {
    margin: 30px 0 0 15px;
  }
}
@media (max-width: 480px) {
  .decision__checklist-body {
    flex-wrap: wrap;
    flex-direction: row;
    margin: 15px 0 0 15px;
    row-gap: 15px;
    column-gap: 10px;
  }
}
.decision__checklist-item {
  display: flex;
  align-items: center;
  column-gap: 16px;
  font-size: 16px;
  color: #424551;
}
@media (max-width: 768px) {
  .decision__checklist-item {
    column-gap: 10px;
  }
  .decision__checklist-item img {
    width: 15px;
  }
}
@media (max-width: 480px) {
  .decision__checklist-item {
    flex: 0 1 calc(50% - 10px);
    align-items: flex-start;
  }
}

.similar-projects__body {
  padding: 120px 0;
}
@media (max-width: 768px) {
  .similar-projects__body {
    padding: 50px 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/common/_mixins.scss","webpack://./src/styles/common/_vars.scss","webpack://./src/styles/pages/project.scss","webpack://./src/styles/templates/_portfolio-card.scss","webpack://./src/styles/templates/_slider.scss"],"names":[],"mappings":"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","sourcesContent":["//==============================================\r\n//BUTTONS=======================================\r\n//==============================================\r\n@mixin buttons {\r\n\tdisplay: inline-flex;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tfont-family: 'Ubu-B';\r\n\ttransition: all 0.4s ease;\r\n\tletter-spacing: 0.5px;\r\n\tborder-radius: 4px;\r\n}\r\n.solid-button {\r\n\tfont-size: 16px;\r\n\theight: 52px;\r\n\tcolor: $text;\r\n\tbackground-color: $primary;\r\n\tpadding: 0 40px;\r\n\tborder: 1px solid transparent;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.regular-button {\r\n\tfont-size: 14px;\r\n\theight: 44px;\r\n\tcolor: $text;\r\n\tbackground-color: $primary;\r\n\tpadding: 0 32px;\r\n\tborder: 1px solid transparent;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.outline-solid-btn {\r\n\tfont-size: 16px;\r\n\tcolor: $primary;\r\n\theight: 52px;\r\n\tbackground-color: transparent;\r\n\tpadding: 0 40px;\r\n\tborder: 1px solid $primary;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.outline-regular-btn {\r\n\tfont-size: 14px;\r\n\tcolor: $primary;\r\n\theight: 44px;\r\n\tbackground-color: transparent;\r\n\tpadding: 0 32px;\r\n\tborder: 1px solid $primary;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tcolor: $text;\r\n\t\tbackground: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.arrow {\r\n\tpadding: 0;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tbackground: white;\r\n\twidth: 48px;\r\n\theight: 48px;\r\n\tborder-radius: 50%;\r\n\ttransition: all 0.4s ease;\r\n\t&:hover {\r\n\t\ttransition: all 0.3s ease;\r\n\t\tbackground: $primary;\r\n\t\timg {\r\n\t\t\ttransition: all 0.4s ease;\r\n\t\t\tfilter: invert(1);\r\n\t\t}\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\twidth: 32px;\r\n\t\theight: 32px;\r\n\t}\r\n}\r\n//==============================================\r\n//FORM TAGS=====================================\r\n//==============================================\r\n@mixin label-text {\r\n\tcolor: $links;\r\n\tfont-size: 14px;\r\n\tfont-style: normal;\r\n\tline-height: 150%;\r\n}\r\n.link-hover {\r\n\t&:hover {\r\n\t\tcolor: $primary;\r\n\t}\r\n}\r\n.label {\r\n\t@include label-text;\r\n}\r\n.input {\r\n\t@include label-text;\r\n\tpadding: 11px 0 12px 16px;\r\n\tborder: 1px solid $input-bor;\r\n\tbackground-color: $input-bg;\r\n\tborder-radius: 4px;\r\n}\r\n//==============================================\r\n//BLOCKS========================================\r\n//==============================================\r\n.title-block {\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\r\n\t&__title {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 46px;\r\n\t\tline-height: 130%;\r\n\t\tcolor: $titles;\r\n\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tfont-size: 40px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 25px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\t}\r\n\t&__subtitle {\r\n\t\tmargin: 24px 0 0;\r\n\t\tfont-size: 18px;\r\n\t\tline-height: 150%;\r\n\t\tcolor: $desc;\r\n\t\tfont-family: 'Ubu-R';\r\n\t\tfont-weight: 400;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tmargin: 12px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 10px 0 0;\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t}\r\n}\r\n.text-left {\r\n\ttext-align: left;\r\n}\r\n.view-more-block {\r\n\tdisplay: flex;\r\n\tcolumn-gap: 40px;\r\n\t&__title {\r\n\t\tcolor: $titles;\r\n\t\tfont-size: 28px;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 24px;\r\n\t\t\tflex: 0 1 100%;\r\n\t\t}\r\n\t}\r\n\t&__link {\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 30px;\r\n\t\t}\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tflex-wrap: wrap;\r\n\t\ttext-align: center;\r\n\t\tjustify-content: center;\r\n\t\trow-gap: 10px;\r\n\t\tmargin: 20px 0 0;\r\n\t}\r\n}\r\n\r\n//==============================================\r\n//ADAPTIVE && DISPLAY======================================\r\n//==============================================\r\n.grid {\r\n\tdisplay: grid;\r\n\tgrid-template: 1fr/1fr minmax(auto, 1230px) 1fr;\r\n\tpadding: 0 15px;\r\n}\r\n.center {\r\n\tgrid-column: 2/3;\r\n}\r\n.image-adaptive {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tobject-fit: cover;\r\n}\r\n","$primary: #ff5a30;\r\n$titles: #1e212c;\r\n$links: #424551;\r\n$desc: #787a80;\r\n$input-bg: #f4f5f6;\r\n$input-bor: #d7dadd;\r\n$text: #fff;\r\n$main-bg: #fff;\r\n$auxiliary-bg: #f4f5f6;\r\n$alternative-bg: #1e212c;\r\n//Output-Displays=========================\r\n$header: 1120px;\r\n$desktop: 992px;\r\n$tablet: 768px;\r\n$phone: 480px;\r\n$phone-s: 320px;\r\n","@import '@s-common/vars';\r\n@import '@s-common/mixins';\r\n@import '@s-templates/portfolio-card';\r\n@import '@s-templates/slider';\r\n.project {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\t> img {\r\n\t\twidth: 850px;\r\n\t\theight: 820px;\r\n\t\tleft: calc(100% - 210px);\r\n\t}\r\n\t&__body {\r\n\t}\r\n\t.name-page-block {\r\n\t\theight: auto;\r\n\t}\r\n\t.name-page-block__body {\r\n\t\tmax-width: 100%;\r\n\t}\r\n}\r\n.introduce {\r\n\t&__body {\r\n\t\tmargin: 60px 0 120px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 30px 0 70px;\r\n\t\t}\r\n\t}\r\n\t&__slider {\r\n\t\twidth: 100%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\trow-gap: 20px;\r\n\t}\r\n\t&__slider-title-image {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\theight: 500px;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\t\toverflow: hidden;\r\n\t\tborder-radius: 8px;\r\n\t\t.arrow {\r\n\t\t\tz-index: 1;\r\n\t\t\tmargin: 0 32px;\r\n\t\t\tbackground: rgba($color: white, $alpha: 0.6);\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground: $primary;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 350px;\r\n\t\t\t&::before {\r\n\t\t\t\tfont-size: 20px;\r\n\t\t\t}\r\n\t\t\t.arrow {\r\n\t\t\t\tmargin: 0 10px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__slider-subtitle-body {\r\n\t\twidth: 700px;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\twidth: 100%;\r\n\t\t\tjustify-content: left;\r\n\t\t\tcolumn-gap: 10px;\r\n\t\t\trow-gap: 15px;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t}\r\n\t}\r\n\t&__slider-subtitle-image {\r\n\t\tposition: relative;\r\n\t\tflex: 0 1 100px;\r\n\t\theight: 100px;\r\n\t\tborder-radius: 4px;\r\n\t\toverflow: hidden;\r\n\t}\r\n\t&__description {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tmargin: 100px 0 0;\r\n\t\twidth: 100%;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 50px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex-wrap: wrap;\r\n\t\t}\r\n\t}\r\n\t&__description-value {\r\n\t\tflex: 0 1 49%;\r\n\t\t.first {\r\n\t\t\tmargin: 60px 0 20px;\r\n\t\t}\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\t.first {\r\n\t\t\t\tmargin: 20px 0 10px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 80%;\r\n\t\t}\r\n\t}\r\n\t&__description-value-title {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 46px;\r\n\t\tline-height: 130%;\r\n\t\tcolor: $titles;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 30px;\r\n\t\t}\r\n\t}\r\n\t&__description-value-text {\r\n\t\tfont-size: 18px;\r\n\t\tline-height: 150%;\r\n\t\tcolor: $links;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 15px;\r\n\t\t}\r\n\t}\r\n\t&__description-info {\r\n\t\tflex: 0 1 495px;\r\n\t\tpadding: 40px 60px;\r\n\t\tbackground-color: $main-bg;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\trow-gap: 16px;\r\n\t\tbox-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),\r\n\t\t\t0px 12px 10px -6px rgba(154, 156, 165, 0.04),\r\n\t\t\t0px 30px 24px -10px rgba(154, 156, 165, 0.05),\r\n\t\t\t0px 80px 80px -20px rgba(154, 156, 165, 0.08);\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 20px 0 0;\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\tpadding: 15px 5px;\r\n\t\t\tflex-direction: row;\r\n\t\t\trow-gap: 0;\r\n\t\t\ttext-align: center;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\trow-gap: 30px;\r\n\t\t}\r\n\t}\r\n\t&__description-info-item {\r\n\t\tfont-family: 'Ubu-R';\r\n\t\ttext-transform: capitalize;\r\n\t\tcolor: $desc;\r\n\t\tfont-size: 16px;\r\n\t\tline-height: 160%;\r\n\t\tdisplay: flex;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex-direction: column;\r\n\t\t\tflex: 0 1 33.333%;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 14px;\r\n\t\t}\r\n\t\tspan {\r\n\t\t\tfont-family: 'Ubu-B';\r\n\t\t\ttext-transform: uppercase;\r\n\t\t\tcolor: $titles;\r\n\t\t\tdisplay: block;\r\n\t\t\tmin-width: 130px;\r\n\t\t\t@media (max-width: $tablet) {\r\n\t\t\t\tmin-width: auto;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.decision {\r\n\tbackground-color: $auxiliary-bg;\r\n\tmargin: 0 0 60px;\r\n\t@media (max-width: $desktop) {\r\n\t\tmargin: 0 0 30px;\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tmargin: 0;\r\n\t}\r\n\t&__body {\r\n\t\tmargin: 80px 0 -60px;\r\n\t\tdisplay: flex;\r\n\t\t> div {\r\n\t\t\tflex: 0 1 50%;\r\n\t\t}\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 40px 0 -30px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 0;\r\n\t\t\tpadding: 20px 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex-direction: column;\r\n\t\t\tpadding: 0 0 20px;\r\n\t\t\trow-gap: 20px;\r\n\t\t\tmargin: 0 -15px;\r\n\t\t}\r\n\t}\r\n\t&__image {\r\n\t\tposition: relative;\r\n\t\twidth: 495px;\r\n\t\theight: 550px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 400px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\theight: 200px;\r\n\t\t}\r\n\t}\r\n\t&__checklist-title {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 46px;\r\n\t\tline-height: 130%;\r\n\t\tmargin: 0 0 0 15px;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 30px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 24px;\r\n\t\t}\r\n\t}\r\n\t&__checklist-body {\r\n\t\tmargin: 60px 0 0 15px;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\trow-gap: 20px;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 30px 0 0 15px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tflex-direction: row;\r\n\t\t\tmargin: 15px 0 0 15px;\r\n\t\t\trow-gap: 15px;\r\n\t\t\tcolumn-gap: 10px;\r\n\t\t}\r\n\t}\r\n\t&__checklist-item {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tcolumn-gap: 16px;\r\n\t\tfont-size: 16px;\r\n\t\tcolor: $links;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tcolumn-gap: 10px;\r\n\t\t\timg {\r\n\t\t\t\twidth: 15px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 calc(50% - 10px);\r\n\t\t\talign-items: flex-start;\r\n\t\t}\r\n\t}\r\n}\r\n.similar-projects {\r\n\t&__body {\r\n\t\tpadding: 120px 0;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 50px 0;\r\n\t\t}\r\n\t}\r\n}\r\n",".portfolio-card {\r\n\tflex: 0 1 33.3333%;\r\n\ttext-align: center;\r\n\tborder-radius: 4px 4px 0 0;\r\n\tbox-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),\r\n\t\t0px 12px 10px -6px rgba(154, 156, 165, 0.04),\r\n\t\t0px 30px 24px -10px rgba(154, 156, 165, 0.05),\r\n\t\t0px 80px 80px -20px rgba(154, 156, 165, 0.08);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tpadding: 0 0 90px;\r\n\t&:hover .portfolio-card__box {\r\n\t\theight: 37.5%;\r\n\t}\r\n\t@media (max-width: $desktop) {\r\n\t\tpadding: 0 0 50px;\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tflex: 0 1 100%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tpadding: 0;\r\n\t}\r\n\t@media (max-width: $phone) {\r\n\t\tflex-direction: column;\r\n\t\tpadding: 0 0 50px;\r\n\t}\r\n\t&__img {\r\n\t\theight: 345px;\r\n\t\tposition: relative;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 240px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 55%;\r\n\t\t\theight: 180px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\tmin-height: 200px;\r\n\t\t}\r\n\t}\r\n\t&__box {\r\n\t\tposition: absolute;\r\n\t\tbottom: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 21.6%;\r\n\t\tbackground-color: $main-bg;\r\n\t\tpadding: 15px 0 25px;\r\n\t\ttransition: all 0.3s ease-out;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tposition: relative;\r\n\t\t\theight: 100%;\r\n\t\t\twidth: 45%;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\tpadding: 0 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 21.6%;\r\n\t\t\tbottom: 0;\r\n\t\t\tpadding: 25px 3px 5px;\r\n\t\t}\r\n\t}\r\n\t&__box-title {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 20px;\r\n\t\tline-height: 105%;\r\n\t\tcolor: $titles;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 1;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t}\r\n\t&__box-subtitle {\r\n\t\tmargin: 15px 0 0;\r\n\t\tfont-size: 14px;\r\n\t\tcolor: $desc;\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 10px 0 0;\r\n\t\t\tfont-size: 12px;\r\n\t\t\tline-height: 1;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 10px;\r\n\t\t}\r\n\t}\r\n\t&__box-btn {\r\n\t\tmargin: 24px 0 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 13px 0 0;\r\n\t\t\theight: 30px;\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 16px 0 0;\r\n\t\t}\r\n\t}\r\n}\r\n.card {\r\n\tanimation: showCard 1s ease;\r\n}\r\n@keyframes showCard {\r\n\t0% {\r\n\t\tborder-radius: 50%;\r\n\t\ttransform: scale(0, 0);\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\tborder-radius: 4px;\r\n\t\ttransform: scale(100%, 100%);\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n",".slider {\r\n\t@media (max-width: $desktop) {\r\n\t\tpadding: 80px 0;\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tpadding: 60px 0;\r\n\t}\r\n\t@media (max-width: $phone) {\r\n\t\tpadding: 40px 0;\r\n\t}\r\n\t&__top {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: flex-end;\r\n\t}\r\n\t&__title {\r\n\t\ttext-align: left;\r\n\t\tmax-width: 700px;\r\n\t\tmargin: 0;\r\n\t}\r\n\t&__buttons {\r\n\t\tdisplay: flex;\r\n\t\tcolumn-gap: 24px;\r\n\t}\r\n\t&__content {\r\n\t\tdisplay: flex;\r\n\t\tmargin: 60px 0 0;\r\n\t\tcolumn-gap: 30px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 30px 0 0;\r\n\t\t\tcolumn-gap: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 15px 0 0;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\trow-gap: 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t}\r\n\t}\r\n\t&__view-more {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\tmargin: 85px 0 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 60px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 40px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t}\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/pages/project.scss":
/*!***************************************!*\
  !*** ./src/styles/pages/project.scss ***!
  \***************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_project_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./project.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/project.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_project_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_project_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_project_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_project_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scripts/utilities/sliderProject.mjs":
/*!*************************************************!*\
  !*** ./src/scripts/utilities/sliderProject.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initSliderProject = (mainImage, toLeft, toRight, imagesContainer) => {
  let counter = 1;
  let newPath;
  let blur = 4;
  setBlurEffect(imagesContainer, mainImage, blur);
  if (imagesContainer) {
    imagesContainer.addEventListener('click', event => {
      newPath = getImagesPath(event);
      counter = getNumber(event);
      if (newPath !== null) {
        mainImage.src = newPath;
        setBlurEffect(imagesContainer, mainImage, blur);
      }
    });
  }
  if (toLeft) {
    toLeft.addEventListener('click', () => {
      counter -= 1;
      if (counter < 1) counter = 6;
      updateMainImage(mainImage, counter);
      setBlurEffect(imagesContainer, mainImage, blur);
    });
  }
  if (toRight) {
    toRight.addEventListener('click', () => {
      counter += 1;
      if (counter > 6) counter = 1;
      updateMainImage(mainImage, counter);
      setBlurEffect(imagesContainer, mainImage, blur);
    });
  }
};
const updateMainImage = (mainImage, counter) => {
  const newImage = document.querySelector(`[data-numberOfImage="${counter}"]`);
  if (newImage) {
    mainImage.src = newImage.getAttribute('src');
  }
};
const getImagesPath = event => {
  if (!event || !event.target.closest('img')) {
    return null;
  }
  var pathToImage = event.target.closest('img').getAttribute('src');
  return pathToImage;
};
const getNumber = event => {
  if (!event || !event.target.closest('img')) {
    return null;
  }
  var numberOfImage = event.target.closest('img').getAttribute('data-numberOfImage');
  return Number(numberOfImage);
};
const setBlurEffect = (container, mainImage, blurValue) => {
  let mainImageSrc = mainImage.src;
  container.querySelectorAll('img').forEach(img => {
    img.style.filter = 'blur(0)';
    if (mainImageSrc !== img.src) {
      img.style.filter = `blur(${blurValue}px)`;
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSliderProject);

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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"project": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-464c4e","src_pages_templates_slider_hbs-src_scripts_api_getProjectsData_mjs-src_scripts_templates_port-9f2d00","src_scripts_utilities_getQueryParams_mjs-src_scripts_utilities_showSelectedProject_mjs"], () => (__webpack_require__("./src/scripts/handlers/handleProjectPage.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=project.js.map