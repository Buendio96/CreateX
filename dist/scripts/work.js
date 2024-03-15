/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/handlers/handleWorkPage.js":
/*!************************************************!*\
  !*** ./src/scripts/handlers/handleWorkPage.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_bg_image_work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @images/bg-image-work */ "./src/assets/images/bg-image-work.png");
/* harmony import */ var _images_homepage_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @images/homepage-support */ "./src/assets/images/homepage-support.jpg");
/* harmony import */ var _js_api_getOpinionsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-api/getOpinionsData */ "./src/scripts/api/getOpinionsData.mjs");
/* harmony import */ var _js_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js-store/store */ "./src/scripts/store/store.mjs");
/* harmony import */ var _js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js-utilities/addBackground */ "./src/scripts/utilities/addBackground.mjs");
/* harmony import */ var _js_utilities_showOpinion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @js-utilities/showOpinion */ "./src/scripts/utilities/showOpinion.mjs");
/* harmony import */ var _js_utilities_showProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js-utilities/showProjects */ "./src/scripts/utilities/showProjects.mjs");
/* harmony import */ var _js_utilities_showSelectedProject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @js-utilities/showSelectedProject */ "./src/scripts/utilities/showSelectedProject.mjs");
/* harmony import */ var _s_pages_work__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @s-pages/work */ "./src/styles/pages/work.scss");









//===================================================
await (0,_js_api_getOpinionsData__WEBPACK_IMPORTED_MODULE_2__["default"])();

//===================================================
(0,_js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_4__["default"])('workTitleImage', _images_bg_image_work__WEBPACK_IMPORTED_MODULE_0__);
(0,_js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_4__["default"])('supportBoxBg', _images_homepage_support__WEBPACK_IMPORTED_MODULE_1__);
const OPINION_EL = document.getElementById(`opinion`);
const OPINION_DOM_ELEMENTS = {
  avatar: document.getElementById(`opinionBoxImg`),
  opinion: document.getElementById(`opinionText`),
  name: document.getElementById(`opinionUserName`),
  companyName: document.getElementById(`opinionUserJob`),
  workPositions: document.getElementById(`opinionUserPosition`)
};
if (_js_store_store__WEBPACK_IMPORTED_MODULE_3__["default"].OPINIONS.length > 0 && OPINION_EL) {
  (0,_js_utilities_showOpinion__WEBPACK_IMPORTED_MODULE_5__.initShowOpinion)(OPINION_DOM_ELEMENTS, _js_store_store__WEBPACK_IMPORTED_MODULE_3__["default"].OPINIONS);
  document.getElementById('opinionToLeft').addEventListener('click', () => (0,_js_utilities_showOpinion__WEBPACK_IMPORTED_MODULE_5__.toLeft)(OPINION_DOM_ELEMENTS, _js_store_store__WEBPACK_IMPORTED_MODULE_3__["default"].OPINIONS));
  document.getElementById('opinionToRight').addEventListener('click', () => (0,_js_utilities_showOpinion__WEBPACK_IMPORTED_MODULE_5__.toRight)(OPINION_DOM_ELEMENTS, _js_store_store__WEBPACK_IMPORTED_MODULE_3__["default"].OPINIONS));
}
//===================================================
const CONTAINER_EL = document.getElementById('all-projects-container');
const SHOW_MORE_BUTTON = document.getElementById('show-more-projects');
const FILTERS_BOX = document.getElementById('projects-filter');
if (CONTAINER_EL) {
  (0,_js_utilities_showProjects__WEBPACK_IMPORTED_MODULE_6__["default"])(CONTAINER_EL, SHOW_MORE_BUTTON, FILTERS_BOX);
} //===================================================
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/work.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/work.scss ***!
  \***************************************************************************************************************************************************************************************/
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

.for-work {
  width: 915px;
  left: calc(100% - 915px);
}

.clients-opinion {
  background: #f4f5f6;
}
.clients-opinion__body {
  display: flex;
  flex-direction: column;
  row-gap: 120px;
  padding: 80px 0 0;
  margin: 0 0 -60px;
}
@media (max-width: 992px) {
  .clients-opinion__body {
    row-gap: 70px;
    padding: 60px 0 10px;
    margin: 0;
  }
}
@media (max-width: 768px) {
  .clients-opinion__body {
    row-gap: 35px;
    padding: 40px 0 10px;
  }
}
@media (max-width: 480px) {
  .clients-opinion__body {
    padding: 20px 0 0;
  }
}

.our-supports {
  padding: 180px 0 120px;
  background-color: #fff;
}
@media (max-width: 992px) {
  .our-supports {
    padding: 100px 0 40px;
  }
}
@media (max-width: 768px) {
  .our-supports {
    padding: 80px 0 50px;
  }
}
@media (max-width: 480px) {
  .our-supports {
    padding: 30px 0 20px;
  }
}

.projects {
  background-color: #fff;
  text-align: center;
}
.projects__body {
  padding: 0 0 100px;
}
@media (max-width: 992px) {
  .projects__body {
    padding: 0 0 80px;
  }
}
@media (max-width: 768px) {
  .projects__body {
    padding: 0 0 60px;
  }
}
@media (max-width: 480px) {
  .projects__body {
    padding: 0 0 20px;
  }
}
.projects__filters {
  display: flex;
  justify-content: space-between;
  margin: -60px 0 0;
}
.projects__filters li {
  flex: 0 1 18.7%;
}
@media (max-width: 768px) {
  .projects__filters {
    margin: -30px 0 0;
  }
}
@media (max-width: 480px) {
  .projects__filters {
    padding: 20px 0;
    margin: -15px;
    background-color: #f4f5f6;
    flex-wrap: wrap;
    row-gap: 15px;
    column-gap: 10px;
  }
  .projects__filters li:first-child {
    flex: 0 1 100%;
  }
  .projects__filters li:first-child button {
    justify-content: center;
    column-gap: 40px;
  }
  .projects__filters li:not(:first-child) {
    flex: 0 1 calc(50% - 10px);
  }
}
.projects__button {
  display: flex;
  height: 155px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 80px 80px -20px rgba(154, 156, 165, 0.08);
  background: #fff;
  transition: all 0.5s ease;
}
.projects__button span {
  margin: 16px 0 0 0;
  color: #787a80;
  font-size: 16px;
  line-height: 160%;
  font-family: "Ubu-B";
}
.projects__button:hover {
  background-color: #ff5a30;
}
.projects__button:hover img {
  filter: saturate(0) brightness(1000%);
}
.projects__button:hover span {
  color: #fff;
}
@media (max-width: 768px) {
  .projects__button {
    height: 100px;
  }
  .projects__button img {
    width: 30px;
  }
  .projects__button span {
    margin: 10px 0 0 0;
    line-height: 100%;
    font-size: 14px;
  }
}
@media (max-width: 480px) {
  .projects__button {
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 8px 5px 10px;
  }
  .projects__button span {
    margin: 0;
  }
}
.projects__container {
  margin: 120px 0 0;
  background: #fff;
  display: grid;
  grid-gap: 30px;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(0, calc(33.333% - 30px)));
}
@media (max-width: 992px) {
  .projects__container {
    margin: 100px 0 0;
  }
}
@media (max-width: 768px) {
  .projects__container {
    margin: 80px 0 0;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(0, calc(50% - 15px)));
  }
}
@media (max-width: 480px) {
  .projects__container {
    margin: 50px 0 0;
  }
}
.projects__show-more {
  margin: 60px 0 0;
  padding: 20px 30px;
  font-family: "Ubu-B";
  display: inline-flex;
  column-gap: 16px;
  align-items: center;
  font-size: 16px;
  color: #1e212c;
  transition: all 0.3s ease;
}
.projects__show-more:hover {
  transform: scale(1.1);
  color: #ff5a30;
}
.projects__show-more img {
  animation: rotate 1.5s cubic-bezier(0.2, 0.2, 0.6, 0.8) infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/common/_mixins.scss","webpack://./src/styles/common/_vars.scss","webpack://./src/styles/pages/work.scss","webpack://./src/styles/templates/_supported-by.scss","webpack://./src/styles/templates/_portfolio-card.scss","webpack://./src/styles/templates/_opinions.scss"],"names":[],"mappings":"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","sourcesContent":["//==============================================\r\n//BUTTONS=======================================\r\n//==============================================\r\n@mixin buttons {\r\n\tdisplay: inline-flex;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tfont-family: 'Ubu-B';\r\n\ttransition: all 0.4s ease;\r\n\tletter-spacing: 0.5px;\r\n\tborder-radius: 4px;\r\n}\r\n.solid-button {\r\n\tfont-size: 16px;\r\n\theight: 52px;\r\n\tcolor: $text;\r\n\tbackground-color: $primary;\r\n\tpadding: 0 40px;\r\n\tborder: 1px solid transparent;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.regular-button {\r\n\tfont-size: 14px;\r\n\theight: 44px;\r\n\tcolor: $text;\r\n\tbackground-color: $primary;\r\n\tpadding: 0 32px;\r\n\tborder: 1px solid transparent;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.outline-solid-btn {\r\n\tfont-size: 16px;\r\n\tcolor: $primary;\r\n\theight: 52px;\r\n\tbackground-color: transparent;\r\n\tpadding: 0 40px;\r\n\tborder: 1px solid $primary;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.outline-regular-btn {\r\n\tfont-size: 14px;\r\n\tcolor: $primary;\r\n\theight: 44px;\r\n\tbackground-color: transparent;\r\n\tpadding: 0 32px;\r\n\tborder: 1px solid $primary;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tcolor: $text;\r\n\t\tbackground: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.arrow {\r\n\tpadding: 0;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tbackground: white;\r\n\twidth: 48px;\r\n\theight: 48px;\r\n\tborder-radius: 50%;\r\n\ttransition: all 0.4s ease;\r\n\t&:hover {\r\n\t\ttransition: all 0.3s ease;\r\n\t\tbackground: $primary;\r\n\t\timg {\r\n\t\t\ttransition: all 0.4s ease;\r\n\t\t\tfilter: invert(1);\r\n\t\t}\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\twidth: 32px;\r\n\t\theight: 32px;\r\n\t}\r\n}\r\n//==============================================\r\n//FORM TAGS=====================================\r\n//==============================================\r\n@mixin label-text {\r\n\tcolor: $links;\r\n\tfont-size: 14px;\r\n\tfont-style: normal;\r\n\tline-height: 150%;\r\n}\r\n.link-hover {\r\n\t&:hover {\r\n\t\tcolor: $primary;\r\n\t}\r\n}\r\n.label {\r\n\t@include label-text;\r\n}\r\n.input {\r\n\t@include label-text;\r\n\tpadding: 11px 0 12px 16px;\r\n\tborder: 1px solid $input-bor;\r\n\tbackground-color: $input-bg;\r\n\tborder-radius: 4px;\r\n}\r\n//==============================================\r\n//BLOCKS========================================\r\n//==============================================\r\n.title-block {\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\r\n\t&__title {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 46px;\r\n\t\tline-height: 130%;\r\n\t\tcolor: $titles;\r\n\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tfont-size: 40px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 25px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\t}\r\n\t&__subtitle {\r\n\t\tmargin: 24px 0 0;\r\n\t\tfont-size: 18px;\r\n\t\tline-height: 150%;\r\n\t\tcolor: $desc;\r\n\t\tfont-family: 'Ubu-R';\r\n\t\tfont-weight: 400;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tmargin: 12px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 10px 0 0;\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t}\r\n}\r\n.text-left {\r\n\ttext-align: left;\r\n}\r\n.view-more-block {\r\n\tdisplay: flex;\r\n\tcolumn-gap: 40px;\r\n\t&__title {\r\n\t\tcolor: $titles;\r\n\t\tfont-size: 28px;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 24px;\r\n\t\t\tflex: 0 1 100%;\r\n\t\t}\r\n\t}\r\n\t&__link {\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 30px;\r\n\t\t}\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tflex-wrap: wrap;\r\n\t\ttext-align: center;\r\n\t\tjustify-content: center;\r\n\t\trow-gap: 10px;\r\n\t\tmargin: 20px 0 0;\r\n\t}\r\n}\r\n\r\n//==============================================\r\n//ADAPTIVE && DISPLAY======================================\r\n//==============================================\r\n.grid {\r\n\tdisplay: grid;\r\n\tgrid-template: 1fr/1fr minmax(auto, 1230px) 1fr;\r\n\tpadding: 0 15px;\r\n}\r\n.center {\r\n\tgrid-column: 2/3;\r\n}\r\n.image-adaptive {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tobject-fit: cover;\r\n}\r\n","$primary: #ff5a30;\r\n$titles: #1e212c;\r\n$links: #424551;\r\n$desc: #787a80;\r\n$input-bg: #f4f5f6;\r\n$input-bor: #d7dadd;\r\n$text: #fff;\r\n$main-bg: #fff;\r\n$auxiliary-bg: #f4f5f6;\r\n$alternative-bg: #1e212c;\r\n//Output-Displays=========================\r\n$header: 1120px;\r\n$desktop: 992px;\r\n$tablet: 768px;\r\n$phone: 480px;\r\n$phone-s: 320px;\r\n","@import '@s-common/vars';\r\n@import '@s-common/mixins';\r\n@import '@s-templates/supported-by';\r\n@import '@s-templates/portfolio-card';\r\n@import '@s-templates/opinions';\r\n\r\n.for-work {\r\n\twidth: 915px;\r\n\tleft: calc(100% - 915px);\r\n}\r\n.clients-opinion {\r\n\tbackground: $auxiliary-bg;\r\n\t&__body {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\trow-gap: 120px;\r\n\t\tpadding: 80px 0 0;\r\n\t\tmargin: 0 0 -60px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\trow-gap: 70px;\r\n\t\t\tpadding: 60px 0 10px;\r\n\t\t\tmargin: 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\trow-gap: 35px;\r\n\t\t\tpadding: 40px 0 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 20px 0 0;\r\n\t\t}\r\n\t}\r\n}\r\n.our-supports {\r\n\tpadding: 180px 0 120px;\r\n\tbackground-color: $main-bg;\r\n\t@media (max-width: $desktop) {\r\n\t\tpadding: 100px 0 40px;\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tpadding: 80px 0 50px;\r\n\t}\r\n\t@media (max-width: $phone) {\r\n\t\tpadding: 30px 0 20px;\r\n\t}\r\n}\r\n.projects {\r\n\tbackground-color: $main-bg;\r\n\ttext-align: center;\r\n\t&__body {\r\n\t\tpadding: 0 0 100px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 0 0 80px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 0 0 60px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 0 0 20px;\r\n\t\t}\r\n\t}\r\n\t&__filters {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tmargin: -60px 0 0;\r\n\t\tli {\r\n\t\t\tflex: 0 1 18.7%;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: -30px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 20px 0;\r\n\t\t\tmargin: 0 - 15px;\r\n\t\t\tbackground-color: $auxiliary-bg;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\trow-gap: 15px;\r\n\t\t\tcolumn-gap: 10px;\r\n\t\t\tli:first-child {\r\n\t\t\t\tflex: 0 1 100%;\r\n\t\t\t\tbutton {\r\n\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t\tcolumn-gap: 40px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tli:not(:first-child) {\r\n\t\t\t\tflex: 0 1 calc(50% - 10px);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__button {\r\n\t\tdisplay: flex;\r\n\t\theight: 155px;\r\n\t\twidth: 100%;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tborder-radius: 4px;\r\n\t\tbox-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),\r\n\t\t\t0px 12px 10px -6px rgba(154, 156, 165, 0.04),\r\n\t\t\t0px 30px 24px -10px rgba(154, 156, 165, 0.05),\r\n\t\t\t0px 80px 80px -20px rgba(154, 156, 165, 0.08);\r\n\t\tbackground: $text;\r\n\t\ttransition: all 0.5s ease;\r\n\t\tspan {\r\n\t\t\tmargin: 16px 0 0 0;\r\n\t\t\tcolor: $desc;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tline-height: 160%;\r\n\t\t\tfont-family: 'Ubu-B';\r\n\t\t}\r\n\t\t&:hover {\r\n\t\t\tbackground-color: $primary;\r\n\t\t\timg {\r\n\t\t\t\tfilter: saturate(0) brightness(1000%);\r\n\t\t\t}\r\n\t\t\tspan {\r\n\t\t\t\tcolor: $text;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 100px;\r\n\t\t\timg {\r\n\t\t\t\twidth: 30px;\r\n\t\t\t}\r\n\t\t\tspan {\r\n\t\t\t\tmargin: 10px 0 0 0;\r\n\t\t\t\tline-height: 100%;\r\n\t\t\t\tfont-size: 14px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\theight: auto;\r\n\t\t\tflex-direction: row;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tpadding: 5px 8px 5px 10px;\r\n\t\t\tspan {\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__container {\r\n\t\tmargin: 120px 0 0;\r\n\t\tbackground: $text;\r\n\t\tdisplay: grid;\r\n\t\tgap: 30px;\r\n\t\tgrid-template-columns: repeat(auto-fit, minmax(0, calc(33.333% - 30px)));\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 100px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 80px 0 0;\r\n\t\t\tgap: 15px;\r\n\t\t\tgrid-template-columns: repeat(auto-fit, minmax(0, calc(50% - 15px)));\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 50px 0 0;\r\n\t\t}\r\n\t}\r\n\t&__show-more {\r\n\t\tmargin: 60px 0 0;\r\n\t\tpadding: 20px 30px;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tdisplay: inline-flex;\r\n\t\tcolumn-gap: 16px;\r\n\t\talign-items: center;\r\n\t\tfont-size: 16px;\r\n\t\tcolor: $titles;\r\n\t\ttransition: all 0.3s ease;\r\n\t\t&:hover {\r\n\t\t\ttransform: scale(1.1);\r\n\t\t\tcolor: $primary;\r\n\t\t}\r\n\t\timg {\r\n\t\t\tanimation: rotate 1.5s cubic-bezier(0.2, 0.2, 0.6, 0.8) infinite;\r\n\t\t}\r\n\t}\r\n\t@keyframes rotate {\r\n\t\t0% {\r\n\t\t\ttransform: rotate(0);\r\n\t\t}\r\n\t\t100% {\r\n\t\t\ttransform: rotate(-360deg);\r\n\t\t}\r\n\t}\r\n}\r\n",".supported-by {\r\n\t&__title {\r\n\t}\r\n\t&__list {\r\n\t\tmargin: 21px 0 0;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tcolumn-gap: 102px;\r\n\t\tjustify-content: center;\r\n\t\t> div {\r\n\t\t\twidth: 120px;\r\n\t\t\theight: 64px;\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tcolumn-gap: 20px;\r\n\t\t\t> div {\r\n\t\t\t\twidth: 90px;\r\n\t\t\t\theight: 50px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tcolumn-gap: 10px;\r\n\t\t\t> div {\r\n\t\t\t\twidth: calc(33.333% - 10px);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n",".portfolio-card {\r\n\tflex: 0 1 33.3333%;\r\n\ttext-align: center;\r\n\tborder-radius: 4px 4px 0 0;\r\n\tbox-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),\r\n\t\t0px 12px 10px -6px rgba(154, 156, 165, 0.04),\r\n\t\t0px 30px 24px -10px rgba(154, 156, 165, 0.05),\r\n\t\t0px 80px 80px -20px rgba(154, 156, 165, 0.08);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tpadding: 0 0 90px;\r\n\t&:hover .portfolio-card__box {\r\n\t\theight: 37.5%;\r\n\t}\r\n\t@media (max-width: $desktop) {\r\n\t\tpadding: 0 0 50px;\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tflex: 0 1 100%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tpadding: 0;\r\n\t}\r\n\t@media (max-width: $phone) {\r\n\t\tflex-direction: column;\r\n\t\tpadding: 0 0 50px;\r\n\t}\r\n\t&__img {\r\n\t\theight: 345px;\r\n\t\tposition: relative;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 240px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 55%;\r\n\t\t\theight: 180px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\tmin-height: 200px;\r\n\t\t}\r\n\t}\r\n\t&__box {\r\n\t\tposition: absolute;\r\n\t\tbottom: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 21.6%;\r\n\t\tbackground-color: $main-bg;\r\n\t\tpadding: 15px 0 25px;\r\n\t\ttransition: all 0.3s ease-out;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tposition: relative;\r\n\t\t\theight: 100%;\r\n\t\t\twidth: 45%;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\tpadding: 0 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 21.6%;\r\n\t\t\tbottom: 0;\r\n\t\t\tpadding: 25px 3px 5px;\r\n\t\t}\r\n\t}\r\n\t&__box-title {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 20px;\r\n\t\tline-height: 105%;\r\n\t\tcolor: $titles;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 1;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t}\r\n\t&__box-subtitle {\r\n\t\tmargin: 15px 0 0;\r\n\t\tfont-size: 14px;\r\n\t\tcolor: $desc;\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 10px 0 0;\r\n\t\t\tfont-size: 12px;\r\n\t\t\tline-height: 1;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 10px;\r\n\t\t}\r\n\t}\r\n\t&__box-btn {\r\n\t\tmargin: 24px 0 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 13px 0 0;\r\n\t\t\theight: 30px;\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 16px 0 0;\r\n\t\t}\r\n\t}\r\n}\r\n.card {\r\n\tanimation: showCard 1s ease;\r\n}\r\n@keyframes showCard {\r\n\t0% {\r\n\t\tborder-radius: 50%;\r\n\t\ttransform: scale(0, 0);\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\tborder-radius: 4px;\r\n\t\ttransform: scale(100%, 100%);\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n",".opinion {\r\n\tdisplay: flex;\r\n\tcolumn-gap: 135px;\r\n\t@media (max-width: $desktop) {\r\n\t\tcolumn-gap: 40px;\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tcolumn-gap: 20px;\r\n\t\tposition: relative;\r\n\t}\r\n\t&__body {\r\n\t\tmax-width: 600px;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: 400px;\r\n\t\t}\r\n\t\t@media (max-width: calc($tablet - 100px)) {\r\n\t\t\tmax-width: 100%;\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 35px;\r\n\t\t\tz-index: 2;\r\n\t\t\tpadding: 0 10px;\r\n\t\t}\r\n\t}\r\n\t&__title {\r\n\t\ttext-align: left;\r\n\t}\r\n\t&__content {\r\n\t\tmargin: 60px 0 0;\r\n\t\ttransition: all 0.5s ease;\r\n\t}\r\n\t&__content-img {\r\n\t\twidth: 72px;\r\n\t\theight: 72px;\r\n\t\tborder-radius: 50%;\r\n\t\tbackground: rgba($color: $primary, $alpha: 0.5);\r\n\t\tbox-shadow: 0 -3px 10px 0.5px rgba($color: $primary, $alpha: 0.9),\r\n\t\t\t0 -7px 15px 1px rgba($color: $desc, $alpha: 0.4);\r\n\t\tposition: relative;\r\n\t}\r\n\t&__content-text {\r\n\t\tmargin: 24px 0 0;\r\n\t\tfont-size: 16px;\r\n\t\tline-height: 160%;\r\n\t\tcolor: $links;\r\n\t\tmax-height: 80px;\r\n\t\toverflow-x: auto;\r\n\t\ttransition: all 0.5s ease;\r\n\t\t@media (max-width: calc($tablet - 100px)) {\r\n\t\t\tbackground-color: rgba($color: $desc, $alpha: 0.7);\r\n\t\t\tmargin: 10px -10px 0;\r\n\t\t\tpadding: 0 10px;\r\n\t\t\tcolor: $titles;\r\n\t\t}\r\n\t}\r\n\t&__content-info {\r\n\t\tmargin: 24px 0 0;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t@media (max-width: calc($tablet - 100px)) {\r\n\t\t\tbackground-color: rgba($color: $desc, $alpha: 0.7);\r\n\t\t\tmargin: 10px -10px 0;\r\n\t\t\tpadding: 0 10px;\r\n\t\t\tcolor: $titles;\r\n\t\t}\r\n\t}\r\n\t&__content-info-user {\r\n\t}\r\n\t&__content-info-user-name {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 16px;\r\n\t\tline-height: 160%;\r\n\t\tcolor: $titles;\r\n\t}\r\n\t&__content-info-user-work {\r\n\t\tfont-size: 14px;\r\n\t\tline-height: 150%;\r\n\t\tcolor: $desc;\r\n\t}\r\n\t&__content-info-buttons {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tbutton {\r\n\t\t\tbackground-color: $auxiliary-bg;\r\n\t\t\t@media (max-width: calc($tablet - 100px)) {\r\n\t\t\t\tbackground-color: rgba($color: $desc, $alpha: 0.1);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__image-block {\r\n\t\tflex: 0 1 495px;\r\n\t\theight: 550px;\r\n\t\tposition: relative;\r\n\t\tborder-radius: 4px;\r\n\t\toverflow: hidden;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 370px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 35px 0 0;\r\n\t\t\tcolumn-gap: 20px;\r\n\t\t}\r\n\t\t@media (max-width: calc($tablet - 100px)) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\timg {\r\n\t\t\t\topacity: 0.5;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/pages/work.scss":
/*!************************************!*\
  !*** ./src/styles/pages/work.scss ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_work_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./work.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/work.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_work_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_work_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_work_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_work_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/images/bg-image-work.png":
/*!*********************************************!*\
  !*** ./src/assets/images/bg-image-work.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/bg-image-work..png";

/***/ }),

/***/ "./src/assets/images/homepage-support.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/homepage-support.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/homepage-support..jpg";

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

/***/ "./src/scripts/api/getProjectsData.mjs":
/*!*********************************************!*\
  !*** ./src/scripts/api/getProjectsData.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initGetData: () => (/* binding */ initGetData),
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
  if (dataType !== null) {
    try {
      const data = await (0,_js_utilities_getData__WEBPACK_IMPORTED_MODULE_2__["default"])(`http://localhost:4100/projects?dataType=${dataType}`);
      _js_store_store__WEBPACK_IMPORTED_MODULE_0__["default"].PROJECTS.relatedProjects = data;
    } catch (error) {
      console.error(error);
    }
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
const initGetData = async id => {
  try {
    const data = await (0,_js_utilities_getData__WEBPACK_IMPORTED_MODULE_2__["default"])(`http://localhost:4100/projects?id=${id}`);
    _js_store_store__WEBPACK_IMPORTED_MODULE_0__["default"].PROJECTS.selectedProject = data;
  } catch (error) {
    console.log(error);
  }
};


/***/ }),

/***/ "./src/scripts/store/handlersLocalStorage.mjs":
/*!****************************************************!*\
  !*** ./src/scripts/store/handlersLocalStorage.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const setDataToLocalStor = (data, key) => {
  if (data && data.length > 0) {
    let storedData = JSON.parse(localStorage.getItem(key)) || [];
    data.forEach(newObject => {
      let existingObject = storedData.find(item => item.id === newObject.id);
      if (!existingObject) {
        storedData.push({
          id: newObject.id,
          name: newObject.name,
          description: newObject.description,
          imageName: newObject.imageName,
          dataType: newObject.dataType
        });
      }
    });
    localStorage.setItem(key, JSON.stringify(storedData));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setDataToLocalStor);

/***/ }),

/***/ "./src/scripts/store/store.mjs":
/*!*************************************!*\
  !*** ./src/scripts/store/store.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const STORE = {
  PROJECTS: {
    allProjects: [],
    byDateProjects: [],
    relatedProjects: [],
    selectedProject: []
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

/***/ "./src/scripts/utilities/dateFormatter.mjs":
/*!*************************************************!*\
  !*** ./src/scripts/utilities/dateFormatter.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/scripts/utilities/showProjects.mjs":
/*!************************************************!*\
  !*** ./src/scripts/utilities/showProjects.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_api_getProjectsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-api/getProjectsData */ "./src/scripts/api/getProjectsData.mjs");
/* harmony import */ var _js_store_handlersLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-store/handlersLocalStorage */ "./src/scripts/store/handlersLocalStorage.mjs");
/* harmony import */ var _js_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-store/store */ "./src/scripts/store/store.mjs");
/* harmony import */ var _js_templates_portfolioCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js-templates/portfolioCard */ "./src/scripts/templates/portfolioCard.mjs");
/* harmony import */ var _js_utilities_getQueryParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js-utilities/getQueryParams */ "./src/scripts/utilities/getQueryParams.mjs");





const STORE_KEY = 'WorkProjects';
const QUANTITY_OF_DATA = 9;
const initShowProjects = async function (container, button) {
  let boxOfFilters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let startWith = 0;
  let maxFilteredItems = 9;
  let filterType = (0,_js_utilities_getQueryParams__WEBPACK_IMPORTED_MODULE_4__["default"])('filters');
  let localData = await setDataForRender(startWith, maxFilteredItems, filterType);
  render(container, localData, filterType);
  if (button) button.addEventListener('click', async () => {
    startWith += QUANTITY_OF_DATA;
    maxFilteredItems += QUANTITY_OF_DATA;
    localData = await setDataForRender(startWith, maxFilteredItems, filterType);
    if (localData !== null) {
      render(container, localData, filterType);
    } else {
      button.disabled = true;
    }
  });
  if (boxOfFilters) {
    boxOfFilters.addEventListener('click', async target => {
      filterType = getFilterType(target);
      localData = await setDataForRender(0, maxFilteredItems, filterType);
      setNewURL(filterType);
      render(container, localData, filterType);
    });
  }
};
const getDataFromLocalStore = function () {
  let startID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let endIDFilter = arguments.length > 1 ? arguments[1] : undefined;
  let filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const storedData = JSON.parse(localStorage.getItem(STORE_KEY)) || [];
  let endID = startID + QUANTITY_OF_DATA;
  if (filter === null) {
    return storedData.filter(item => item.id >= startID && item.id < endID);
  } else if (filter !== null && filter !== 'all') {
    return storedData.filter(item => item.id >= startID && item.id < endIDFilter && item.dataType === filter);
  } else if (filter === 'all') {
    return storedData.filter(item => item.id >= startID && item.id < endIDFilter);
  }
};
const setDataForRender = async (startWith, maxFilteredItems, filterType) => {
  let localData = getDataFromLocalStore(startWith, maxFilteredItems, filterType);
  if (localData.length === 0 && filterType === null) {
    const getData = await getMoreData(startWith);
    if (getData === null) return null;
    (0,_js_store_handlersLocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"])(getData, STORE_KEY);
    localData = getDataFromLocalStore(startWith, maxFilteredItems);
  } else if (localData.length === 0 && filterType !== null) {
    const getData = await getMoreData(startWith);
    if (getData === null) return null;
    (0,_js_store_handlersLocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"])(getData, STORE_KEY);
    localData = getDataFromLocalStore(undefined, maxFilteredItems, filterType);
  } else if (localData.length > 0 && filterType !== null) {
    localData = getDataFromLocalStore(0, maxFilteredItems, filterType);
  }
  return localData;
};
const getFilterType = event => {
  if (!event || !event.target.closest('button')) {
    return null;
  }
  var filterType = event.target.closest('button').getAttribute('data-filter');
  return filterType === null ? null : filterType;
};
const getMoreData = async from => {
  let end = from + QUANTITY_OF_DATA;
  await (0,_js_api_getProjectsData__WEBPACK_IMPORTED_MODULE_0__.initGetRangedData)(from, end);
  const data = _js_store_store__WEBPACK_IMPORTED_MODULE_2__["default"].PROJECTS.allProjects;
  return data.length > 0 ? data : null;
};
const render = function (container, data) {
  let filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (!container || !data) {
    console.error('Container for render or data not found');
    return;
  }
  if (filter !== null) {
    container.innerHTML = '';
  }
  data.forEach(item => {
    container.appendChild((0,_js_templates_portfolioCard__WEBPACK_IMPORTED_MODULE_3__["default"])(item));
  });
};
const setNewURL = value => {
  if (value !== null) {
    var newUrl = `${window.location.origin}/work.html?filters=${value}`;
    window.history.replaceState({}, document.title, newUrl);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initShowProjects);

/***/ }),

/***/ "./src/scripts/utilities/sortByDate.mjs":
/*!**********************************************!*\
  !*** ./src/scripts/utilities/sortByDate.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
/******/ 			"work": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-464c4e","src_scripts_utilities_getQueryParams_mjs-src_scripts_utilities_showSelectedProject_mjs"], () => (__webpack_require__("./src/scripts/handlers/handleWorkPage.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=work.js.map