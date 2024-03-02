/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/handlers/handleServicesPage.js":
/*!****************************************************!*\
  !*** ./src/scripts/handlers/handleServicesPage.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_bg_image_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @images/bg-image-service */ "./src/assets/images/bg-image-service.png");
/* harmony import */ var _images_services_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @images/services-0 */ "./src/assets/images/services-0.jpg");
/* harmony import */ var _images_services_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @images/services-1 */ "./src/assets/images/services-1.jpg");
/* harmony import */ var _images_services_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/services-2 */ "./src/assets/images/services-2.jpg");
/* harmony import */ var _images_services_3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/services-3 */ "./src/assets/images/services-3.jpg");
/* harmony import */ var _js_api_getProjectsData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @js-api/getProjectsData */ "./src/scripts/api/getProjectsData.mjs");
/* harmony import */ var _js_store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js-store/store */ "./src/scripts/store/store.mjs");
/* harmony import */ var _js_templates_portfolioCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @js-templates/portfolioCard */ "./src/scripts/templates/portfolioCard.mjs");
/* harmony import */ var _js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @js-utilities/addBackground */ "./src/scripts/utilities/addBackground.mjs");
/* harmony import */ var _js_utilities_addServicesBg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @js-utilities/addServicesBg */ "./src/scripts/utilities/addServicesBg.mjs");
/* harmony import */ var _js_utilities_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @js-utilities/carousel */ "./src/scripts/utilities/carousel.mjs");
/* harmony import */ var _p_temp_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @p-temp/slider */ "./src/pages/templates/slider.hbs");
/* harmony import */ var _p_temp_slider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_p_temp_slider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _s_pages_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @s-pages/services */ "./src/styles/pages/services.scss");













const services = document.getElementById('services-serviceBlock');
const relatedServices = document.getElementById('related-serviceBlock');
(0,_js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_8__["default"])('serviceTitleImage', _images_bg_image_service__WEBPACK_IMPORTED_MODULE_0__);
if (services || relatedServices) {
  const targetElementsName = ['service-0', 'service-1', 'service-2', 'service-3'];
  const imagesBlock = [_images_services_0__WEBPACK_IMPORTED_MODULE_1__, _images_services_1__WEBPACK_IMPORTED_MODULE_2__, _images_services_2__WEBPACK_IMPORTED_MODULE_3__, _images_services_3__WEBPACK_IMPORTED_MODULE_4__];
  (0,_js_utilities_addServicesBg__WEBPACK_IMPORTED_MODULE_9__["default"])(targetElementsName, imagesBlock);
}
//======================================
const relatedProjectsContainer = document.getElementById('related-projects');
if (relatedProjectsContainer) {
  const dataType = relatedProjectsContainer.getAttribute('data-related-projects');
  await (0,_js_api_getProjectsData__WEBPACK_IMPORTED_MODULE_5__.initGetRelatedData)(dataType);
  const SERVICES_TEMPLATE_OPTIONS = {
    title: 'Related projects',
    id: 'related-projects',
    modClass: ''
  };
  const renderHTML = _p_temp_slider__WEBPACK_IMPORTED_MODULE_11___default()(SERVICES_TEMPLATE_OPTIONS);
  relatedProjectsContainer.innerHTML = renderHTML;
  const RELATED_PROJECTS_OPTIONS = {
    inputData: _js_store_store__WEBPACK_IMPORTED_MODULE_6__["default"].PROJECTS.relatedProjects[dataType],
    containerEl: document.getElementById('related-projects-container'),
    skipLeft: document.getElementById('related-projects-skip-left'),
    skipRight: document.getElementById('related-projects-skip-right'),
    cardTemplate: _js_templates_portfolioCard__WEBPACK_IMPORTED_MODULE_7__["default"]
  };
  if (_js_store_store__WEBPACK_IMPORTED_MODULE_6__["default"].PROJECTS.relatedProjects[dataType] && _js_store_store__WEBPACK_IMPORTED_MODULE_6__["default"].PROJECTS.relatedProjects[dataType].length > 0) {
    (0,_js_utilities_carousel__WEBPACK_IMPORTED_MODULE_10__["default"])(RELATED_PROJECTS_OPTIONS);
  } else {
    console.log('Related projects store store not found');
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/services.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/services.scss ***!
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

.do-it {
  margin: 180px 0 0 0;
}
@media (max-width: 992px) {
  .do-it {
    margin: 80px 0 0 0;
  }
}
@media (max-width: 480px) {
  .do-it {
    margin: 60px 0 0 0;
  }
}
.do-it__list {
  margin: 60px 0 0 0;
  display: flex;
  column-gap: 30px;
}
@media (max-width: 768px) {
  .do-it__list {
    margin: 30px 0 0 0;
    column-gap: 15px;
    row-gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
  }
}
@media (max-width: 480px) {
  .do-it__list {
    row-gap: 20px;
  }
}
.do-it__item {
  flex: 0 1 25%;
}
@media (max-width: 768px) {
  .do-it__item {
    flex: 0 1 47%;
  }
}
@media (max-width: 480px) {
  .do-it__item {
    flex: 0 1 100%;
  }
}
.do-it__item > div h2 {
  color: #d7dadd;
}
.do-it__item > div {
  position: relative;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  column-gap: 23px;
}
.do-it__item > div .dash-line {
  width: 100%;
  height: 2px;
  display: flex;
  justify-content: space-between;
}
.do-it__item > div .dash-line span {
  flex: 0 1 5px;
  height: 2px;
  border-radius: 1px;
  background-color: #d7dadd;
}
.do-it__item:hover > div h2 {
  color: #ff5a30;
}
.do-it__item:hover .dash-line span {
  background-color: #ff5a30;
}
.do-it__item-title {
  margin: 16px 0 0 0;
  font-family: "Ubu-B";
  font-size: 20px;
  line-height: 150%;
}
@media (max-width: 480px) {
  .do-it__item-title {
    margin: 5px 0 0 0;
    font-size: 18px;
  }
}
.do-it__item-description {
  margin: 8px 0 0 0;
  font-size: 16px;
  line-height: 160%;
  color: #787a80;
}
@media (max-width: 480px) {
  .do-it__item-description {
    font-size: 14px;
    line-height: 140%;
  }
}

.benefits {
  background-color: #1e212c;
}
.benefits__body {
  padding: 80px 0 125px;
}
@media (max-width: 992px) {
  .benefits__body {
    padding: 45px 0;
  }
}
@media (max-width: 768px) {
  .benefits__body {
    padding: 35px 0;
  }
}
@media (max-width: 480px) {
  .benefits__body {
    padding: 15px 0 40px;
  }
}
.benefits__title h2 {
  color: #fff;
}
.benefits__list {
  margin: 60px 0 0;
  display: flex;
  justify-content: space-between;
  position: relative;
}
@media (max-width: 992px) {
  .benefits__list {
    margin: 40px 0 0;
  }
}
@media (max-width: 768px) {
  .benefits__list {
    margin: 30px 0 0;
    flex-wrap: wrap;
    row-gap: 20px;
  }
}
@media (max-width: 480px) {
  .benefits__list {
    margin: 20px 0 0;
  }
}
.benefits__list img {
  width: 48px;
  height: 48px;
}
.benefits__item {
  flex: 0 1 23.2%;
}
.benefits__item:nth-child(2) {
  position: relative;
}
.benefits__item:nth-child(2)::before, .benefits__item:nth-child(2)::after {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 1px;
  background: linear-gradient(135deg, rgba(218, 219, 221, 0) 0%, rgba(218, 219, 221, 0.5) 12.33%, #dadbdd 51.91%, rgba(218, 219, 221, 0.5) 87.85%, rgba(218, 219, 221, 0) 100%);
}
.benefits__item:nth-child(2)::before {
  left: -94px;
}
.benefits__item:nth-child(2)::after {
  right: -94px;
}
@media (max-width: 992px) {
  .benefits__item {
    flex: 0 1 30%;
  }
  .benefits__item:nth-child(2) {
    position: relative;
  }
  .benefits__item:nth-child(2)::before {
    left: -5%;
  }
  .benefits__item:nth-child(2)::after {
    right: -5%;
  }
}
@media (max-width: 768px) {
  .benefits__item {
    flex: 0 1 100%;
    display: flex;
    align-items: center;
  }
  .benefits__item::before, .benefits__item::after {
    display: none;
  }
}
.benefits__item-box {
  margin: 24px 0 0;
}
@media (max-width: 768px) {
  .benefits__item-box {
    text-align: left;
    margin: 0 0 0 20px;
  }
}
.benefits__item-title {
  color: #fff;
  font-family: "Ubu-B";
  font-size: 20px;
  line-height: 150%;
}
@media (max-width: 768px) {
  .benefits__item-title {
    margin: 0;
    font-size: 17px;
    line-height: 20px;
  }
}
@media (max-width: 480px) {
  .benefits__item-title {
    font-size: 15px;
    line-height: 15px;
  }
}
.benefits__item-text {
  margin: 8px 0 0;
  font-size: 16px;
  line-height: 160%;
  color: #787a80;
}
@media (max-width: 768px) {
  .benefits__item-text {
    font-size: 15px;
    line-height: 20px;
  }
}
@media (max-width: 768px) {
  .benefits__item-text {
    font-size: 12px;
    line-height: 15px;
  }
}
.benefits__button {
  position: absolute;
  margin: 100px 0 0 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 112px;
}
@media (max-width: 992px) {
  .benefits__button {
    margin: 15px 0 0 0;
    padding: 0 70px;
  }
}
@media (max-width: 480px) {
  .benefits__button {
    margin: 20px 0 0 0;
    height: 40px;
    font-size: 15px;
    padding: 0 20px;
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
.pricing {
  position: relative;
  background-color: #f4f5f6;
}
.pricing__background {
  position: absolute;
  left: 0;
  top: 0;
}
.pricing__body {
  z-index: 1;
  padding: 80px 0 110px;
}
@media (max-width: 992px) {
  .pricing__body {
    padding: 60px 0 70px;
  }
}
@media (max-width: 768px) {
  .pricing__body {
    padding: 40px 0 30px;
  }
}
@media (max-width: 480px) {
  .pricing__body {
    padding: 20px 0;
  }
}
.pricing__table {
  margin: 60px 0 120px;
  width: 100%;
}
@media (max-width: 768px) {
  .pricing__table {
    margin: 40px 0 80px;
  }
}
@media (max-width: 480px) {
  .pricing__table {
    margin: 25px 0 30px;
  }
}
.pricing__table-row {
  text-align: center;
}
.pricing__table-row:nth-child(odd) {
  background-color: #fff;
}
.pricing__table-title {
  color: #1e212c;
  font-family: "Ubu-B";
  padding: 32px 0 24px;
  font-size: 24px;
  text-transform: uppercase;
  line-height: 150%;
}
@media (max-width: 768px) {
  .pricing__table-title {
    padding: 20px 0;
    font-size: 20px;
  }
}
@media (max-width: 480px) {
  .pricing__table-title {
    font-size: 18px;
  }
}
.pricing__table-title span {
  font-size: 18px;
  color: #787a80;
  line-height: 150%;
}
@media (max-width: 768px) {
  .pricing__table-title span {
    font-size: 14px;
  }
}
@media (max-width: 480px) {
  .pricing__table-title span {
    font-size: 12px;
  }
}
.pricing__service-name {
  font-size: 16px;
  line-height: 160%;
  color: #424551;
  font-family: "Ubu-R";
  margin: 16px 0 16px 24px;
  text-align: left;
}
@media (max-width: 480px) {
  .pricing__service-name {
    font-size: 12px;
    line-height: 130%;
  }
}
.pricing .first {
  font-family: "Ubu-B";
  font-weight: 700;
  color: #1e212c;
  text-transform: capitalize;
  font-size: 18px;
}
.pricing__value {
  color: #424551;
}
@media (max-width: 480px) {
  .pricing__value {
    font-size: 12px;
  }
}
.pricing .table-button {
  margin: 32px 0;
  padding: 0 24px;
  height: 36px;
  font-size: 12px;
}
@media (max-width: 768px) {
  .pricing .table-button {
    margin: 25px 5px;
  }
}
@media (max-width: 480px) {
  .pricing .table-button {
    margin: 15px 5px;
    font-size: 10px;
  }
}

.supported-by__list {
  margin: 21px 0 0;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 992px) {
  .supported-by__list {
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 15px;
  }
  .supported-by__list img {
    flex: 0 1 25%;
  }
}

.for-service {
  left: calc(100% - 975px);
  width: 975px;
}

.services {
  background-color: #fff;
}
.services__body {
  padding: 120px 0 180px;
  display: flex;
  flex-direction: column;
  row-gap: 120px;
}
@media (max-width: 992px) {
  .services__body {
    padding: 80px 0 30px;
    row-gap: 90px;
  }
}
@media (max-width: 768px) {
  .services__body {
    padding: 40px 0 30px;
    row-gap: 30px;
  }
}
@media (max-width: 480px) {
  .services__body {
    padding: 20px 0;
    row-gap: 30px;
  }
}
.services__item {
  width: 100%;
  height: 420px;
  display: flex;
  column-gap: 80px;
  overflow: hidden;
}
@media (max-width: 992px) {
  .services__item {
    height: 350px;
    column-gap: 30px;
  }
}
@media (max-width: 768px) {
  .services__item {
    height: 270px;
  }
}
@media (max-width: 700px) {
  .services__item {
    position: relative;
    height: auto;
  }
}
.services__item:nth-child(even) {
  flex-direction: row-reverse;
}
.services__item-image {
  flex: 0 1 50%;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
}
@media (max-width: 768px) {
  .services__item-image {
    flex: 0 1 35%;
  }
}
@media (max-width: 700px) {
  .services__item-image {
    position: absolute;
  }
}
.services__item-content {
  flex: 0 1 50%;
}
@media (max-width: 768px) {
  .services__item-content {
    flex: 0 1 65%;
  }
}
@media (max-width: 700px) {
  .services__item-content {
    flex: 0 1 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 10px 15px;
  }
}
.services__item-title {
  margin: 90px 0 0 0;
  font-size: 32px;
  font-family: "Ubu-B";
  line-height: 150%;
  color: #1e212c;
}
@media (max-width: 992px) {
  .services__item-title {
    margin: 20px 0 0 0;
    font-size: 24px;
  }
}
@media (max-width: 768px) {
  .services__item-title {
    font-size: 20px;
    margin: 0;
  }
}
@media (max-width: 480px) {
  .services__item-title {
    margin: 10px 0 0 0;
    font-size: 18px;
  }
}
.services__item-description {
  margin: 24px 0 0 0;
  line-height: 160%;
  color: #787a80;
}
@media (max-width: 992px) {
  .services__item-description {
    margin: 10px 0 0 0;
  }
}
@media (max-width: 700px) {
  .services__item-description {
    color: #1e212c;
    background-color: rgba(255, 255, 255, 0.8);
    margin: 10px -15px 0;
    padding: 0 15px;
  }
}
.services__item-btn {
  margin: 50px 0 0 0;
}
@media (max-width: 992px) {
  .services__item-btn {
    margin: 20px 0 0 0;
  }
}

.we-offer {
  background-color: #fff;
}
.we-offer__body {
  padding: 120px 0;
}
@media (max-width: 992px) {
  .we-offer__body {
    padding: 70px 0;
  }
}
@media (max-width: 768px) {
  .we-offer__body {
    padding: 50px 0;
  }
}
@media (max-width: 480px) {
  .we-offer__body {
    padding: 30px 0;
  }
}
.we-offer__top {
  width: 100%;
  height: 440px;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 992px) {
  .we-offer__top {
    height: 350px;
  }
}
@media (max-width: 768px) {
  .we-offer__top {
    height: 250px;
  }
}
@media (max-width: 480px) {
  .we-offer__top {
    height: 150px;
  }
}
.we-offer__image {
  position: relative;
  flex: 0 1 57%;
  height: 100%;
}
@media (max-width: 992px) {
  .we-offer__image {
    flex: 0 1 50%;
  }
}
@media (max-width: 480px) {
  .we-offer__image {
    flex: 0 1 30%;
  }
}
.we-offer__image img {
  box-shadow: 0 0 20px 0.5px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}
.we-offer__information {
  flex: 0 1 34.2%;
}
@media (max-width: 992px) {
  .we-offer__information {
    flex: 0 1 45%;
  }
}
@media (max-width: 480px) {
  .we-offer__information {
    flex: 0 1 65%;
  }
}
.we-offer__information-title {
  font-size: 40px;
}
.we-offer__information-list {
  margin: 60px 0 0 0px;
  display: inline-flex;
  flex-direction: column;
}
@media (max-width: 992px) {
  .we-offer__information-list {
    margin: 20px 0 0 0;
  }
}
.we-offer__information-item:not(:first-child) {
  margin: 24px 0 0 0;
}
.we-offer__information-item p {
  margin: 12px 0 0 0;
  font-size: 16px;
  line-height: 160%;
  color: #787a80;
  padding: 0 0 0 45px;
  height: 0;
  width: 0;
  overflow-y: hidden;
  transition: width 0.2s ease;
}
@media (max-width: 480px) {
  .we-offer__information-item p {
    font-size: 12px;
  }
}
@media (max-width: 992px) {
  .we-offer__information-item:not(:first-child) {
    margin: 12px 0 0 0;
  }
}
.we-offer__information-button {
  width: 100%;
  display: inline-flex;
  align-items: center;
  column-gap: 20px;
  font-family: "Ubu-B";
  font-size: 28px;
  line-height: 150%;
  text-align: left;
}
@media (max-width: 992px) {
  .we-offer__information-button {
    font-size: 22px;
    column-gap: 10px;
  }
}
@media (max-width: 480px) {
  .we-offer__information-button {
    font-size: 16px;
  }
}
.we-offer__information-button div {
  position: relative;
  min-width: 25px;
  height: 25px;
}
.we-offer__information-button div::before, .we-offer__information-button div::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  background-color: #ff5a30;
  transition: all 0.6s ease;
}
@media (max-width: 992px) {
  .we-offer__information-button div::before, .we-offer__information-button div::after {
    width: 16px;
  }
}
.we-offer__information-button div::after {
  transform: rotate(90deg);
}
.we-offer__information-button:focus ~ p {
  height: 130px;
  width: 100%;
  overflow-y: auto;
}
@media (max-width: 480px) {
  .we-offer__information-button:focus ~ p {
    height: 60px;
    margin: 0;
  }
}
.we-offer__information-button:focus div {
  transform: rotate(360deg);
}
.we-offer__information-button:focus div::after {
  transform: rotate(0);
}

.related-projects {
  background-color: #fff;
}
.related-projects__body {
  padding: 180px 0 100px;
}
@media (max-width: 992px) {
  .related-projects__body {
    padding: 150px 0 100px;
  }
}
@media (max-width: 768px) {
  .related-projects__body {
    padding: 80px 0;
  }
}
@media (max-width: 480px) {
  .related-projects__body {
    padding: 40px 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/common/_mixins.scss","webpack://./src/styles/common/_vars.scss","webpack://./src/styles/pages/services.scss","webpack://./src/styles/templates/_how-we-do-it.scss","webpack://./src/styles/templates/_benefits.scss","webpack://./src/styles/templates/_slider.scss","webpack://./src/styles/templates/_portfolio-card.scss","webpack://./src/styles/templates/_price-table.scss","webpack://./src/styles/templates/_supported-by.scss"],"names":[],"mappings":"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","sourcesContent":["//==============================================\r\n//BUTTONS=======================================\r\n//==============================================\r\n@mixin buttons {\r\n\tdisplay: inline-flex;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tfont-family: 'Ubu-B';\r\n\ttransition: all 0.4s ease;\r\n\tletter-spacing: 0.5px;\r\n\tborder-radius: 4px;\r\n}\r\n.solid-button {\r\n\tfont-size: 16px;\r\n\theight: 52px;\r\n\tcolor: $text;\r\n\tbackground-color: $primary;\r\n\tpadding: 0 40px;\r\n\tborder: 1px solid transparent;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.regular-button {\r\n\tfont-size: 14px;\r\n\theight: 44px;\r\n\tcolor: $text;\r\n\tbackground-color: $primary;\r\n\tpadding: 0 32px;\r\n\tborder: 1px solid transparent;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.outline-solid-btn {\r\n\tfont-size: 16px;\r\n\tcolor: $primary;\r\n\theight: 52px;\r\n\tbackground-color: transparent;\r\n\tpadding: 0 40px;\r\n\tborder: 1px solid $primary;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.outline-regular-btn {\r\n\tfont-size: 14px;\r\n\tcolor: $primary;\r\n\theight: 44px;\r\n\tbackground-color: transparent;\r\n\tpadding: 0 32px;\r\n\tborder: 1px solid $primary;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tcolor: $text;\r\n\t\tbackground: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.arrow {\r\n\tpadding: 0;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tbackground: white;\r\n\twidth: 48px;\r\n\theight: 48px;\r\n\tborder-radius: 50%;\r\n\ttransition: all 0.4s ease;\r\n\t&:hover {\r\n\t\ttransition: all 0.3s ease;\r\n\t\tbackground: $primary;\r\n\t\timg {\r\n\t\t\ttransition: all 0.4s ease;\r\n\t\t\tfilter: invert(1);\r\n\t\t}\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\twidth: 32px;\r\n\t\theight: 32px;\r\n\t}\r\n}\r\n//==============================================\r\n//FORM TAGS=====================================\r\n//==============================================\r\n@mixin label-text {\r\n\tcolor: $links;\r\n\tfont-size: 14px;\r\n\tfont-style: normal;\r\n\tline-height: 150%;\r\n}\r\n.link-hover {\r\n\t&:hover {\r\n\t\tcolor: $primary;\r\n\t}\r\n}\r\n.label {\r\n\t@include label-text;\r\n}\r\n.input {\r\n\t@include label-text;\r\n\tpadding: 11px 0 12px 16px;\r\n\tborder: 1px solid $input-bor;\r\n\tbackground-color: $input-bg;\r\n\tborder-radius: 4px;\r\n}\r\n//==============================================\r\n//BLOCKS========================================\r\n//==============================================\r\n.title-block {\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\r\n\t&__title {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 46px;\r\n\t\tline-height: 130%;\r\n\t\tcolor: $titles;\r\n\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tfont-size: 40px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 25px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\t}\r\n\t&__subtitle {\r\n\t\tmargin: 24px 0 0;\r\n\t\tfont-size: 18px;\r\n\t\tline-height: 150%;\r\n\t\tcolor: $desc;\r\n\t\tfont-family: 'Ubu-R';\r\n\t\tfont-weight: 400;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tmargin: 12px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 10px 0 0;\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t}\r\n}\r\n.text-left {\r\n\ttext-align: left;\r\n}\r\n.view-more-block {\r\n\tdisplay: flex;\r\n\tcolumn-gap: 40px;\r\n\t&__title {\r\n\t\tcolor: $titles;\r\n\t\tfont-size: 28px;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 24px;\r\n\t\t\tflex: 0 1 100%;\r\n\t\t}\r\n\t}\r\n\t&__link {\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 30px;\r\n\t\t}\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tflex-wrap: wrap;\r\n\t\ttext-align: center;\r\n\t\tjustify-content: center;\r\n\t\trow-gap: 10px;\r\n\t\tmargin: 20px 0 0;\r\n\t}\r\n}\r\n\r\n//==============================================\r\n//ADAPTIVE && DISPLAY======================================\r\n//==============================================\r\n.grid {\r\n\tdisplay: grid;\r\n\tgrid-template: 1fr/1fr minmax(auto, 1230px) 1fr;\r\n\tpadding: 0 15px;\r\n}\r\n.center {\r\n\tgrid-column: 2/3;\r\n}\r\n.image-adaptive {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tobject-fit: cover;\r\n}\r\n","$primary: #ff5a30;\r\n$titles: #1e212c;\r\n$links: #424551;\r\n$desc: #787a80;\r\n$input-bg: #f4f5f6;\r\n$input-bor: #d7dadd;\r\n$text: #fff;\r\n$main-bg: #fff;\r\n$auxiliary-bg: #f4f5f6;\r\n$alternative-bg: #1e212c;\r\n//Output-Displays=========================\r\n$header: 1120px;\r\n$desktop: 992px;\r\n$tablet: 768px;\r\n$phone: 480px;\r\n$phone-s: 320px;\r\n","@import '@s-common/vars';\r\n@import '@s-common/mixins';\r\n@import '@s-templates/how-we-do-it';\r\n@import '@s-templates/benefits';\r\n@import '@s-templates/slider';\r\n@import '@s-templates/portfolio-card';\r\n@import '@s-templates/price-table';\r\n@import '@s-templates/supported-by';\r\n.for-service {\r\n\tleft: calc(100% - 975px);\r\n\twidth: 975px;\r\n}\r\n.services {\r\n\tbackground-color: $main-bg;\r\n\r\n\t&__body {\r\n\t\tpadding: 120px 0 180px;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\trow-gap: 120px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 80px 0 30px;\r\n\t\t\trow-gap: 90px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 40px 0 30px;\r\n\t\t\trow-gap: 30px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 20px 0;\r\n\t\t\trow-gap: 30px;\r\n\t\t}\r\n\t}\r\n\t&__item {\r\n\t\twidth: 100%;\r\n\t\theight: 420px;\r\n\t\tdisplay: flex;\r\n\t\tcolumn-gap: 80px;\r\n\t\toverflow: hidden;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 350px;\r\n\t\t\tcolumn-gap: 30px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 270px;\r\n\t\t}\r\n\t\t@media (max-width: 700px) {\r\n\t\t\tposition: relative;\r\n\t\t\theight: auto;\r\n\t\t}\r\n\t\t&:nth-child(even) {\r\n\t\t\tflex-direction: row-reverse;\r\n\t\t}\r\n\t}\r\n\t&__item-image {\r\n\t\tflex: 0 1 50%;\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\toverflow: hidden;\r\n\t\tborder-radius: 4px;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 35%;\r\n\t\t}\r\n\t\t@media (max-width: 700px) {\r\n\t\t\tposition: absolute;\r\n\t\t}\r\n\t}\r\n\t&__item-content {\r\n\t\tflex: 0 1 50%;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 65%;\r\n\t\t}\r\n\t\t@media (max-width: 700px) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\tz-index: 1;\r\n\t\t\tbackground-color: rgba($color: white, $alpha: 0.5);\r\n\t\t\tpadding: 10px 15px;\r\n\t\t}\r\n\t}\r\n\t&__item-title {\r\n\t\tmargin: 90px 0 0 0;\r\n\t\tfont-size: 32px;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tline-height: 150%;\r\n\t\tcolor: $titles;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 20px 0 0 0;\r\n\t\t\tfont-size: 24px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 20px;\r\n\t\t\tmargin: 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 10px 0 0 0;\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\t}\r\n\t&__item-description {\r\n\t\tmargin: 24px 0 0 0;\r\n\t\tline-height: 160%;\r\n\t\tcolor: $desc;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 10px 0 0 0;\r\n\t\t}\r\n\t\t@media (max-width: 700px) {\r\n\t\t\tcolor: $titles;\r\n\t\t\tbackground-color: rgba($color: white, $alpha: 0.8);\r\n\t\t\tmargin: 10px -15px 0;\r\n\t\t\tpadding: 0 15px;\r\n\t\t}\r\n\t}\r\n\t&__item-btn {\r\n\t\tmargin: 50px 0 0 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 20px 0 0 0;\r\n\t\t}\r\n\t}\r\n}\r\n.we-offer {\r\n\tbackground-color: $main-bg;\r\n\t&__body {\r\n\t\tpadding: 120px 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 70px 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 50px 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 30px 0;\r\n\t\t}\r\n\t}\r\n\t&__top {\r\n\t\twidth: 100%;\r\n\t\theight: 440px;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 350px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 250px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\theight: 150px;\r\n\t\t}\r\n\t}\r\n\t&__image {\r\n\t\tposition: relative;\r\n\t\tflex: 0 1 57%;\r\n\t\theight: 100%;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tflex: 0 1 50%;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 30%;\r\n\t\t}\r\n\t\timg {\r\n\t\t\tbox-shadow: 0 0 20px 0.5px rgba($color: black, $alpha: 0.6);\r\n\t\t\tborder-radius: 10px;\r\n\t\t}\r\n\t}\r\n\t&__information {\r\n\t\tflex: 0 1 34.2%;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tflex: 0 1 45%;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 65%;\r\n\t\t}\r\n\t}\r\n\t&__information-title {\r\n\t\tfont-size: 40px;\r\n\t}\r\n\t&__information-list {\r\n\t\tmargin: 60px 0 0 0px;\r\n\t\tdisplay: inline-flex;\r\n\t\tflex-direction: column;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 20px 0 0 0;\r\n\t\t}\r\n\t}\r\n\t&__information-item {\r\n\t\t&:not(:first-child) {\r\n\t\t\tmargin: 24px 0 0 0;\r\n\t\t}\r\n\t\tp {\r\n\t\t\tmargin: 12px 0 0 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tline-height: 160%;\r\n\t\t\tcolor: $desc;\r\n\t\t\tpadding: 0 0 0 45px;\r\n\t\t\theight: 0;\r\n\t\t\twidth: 0;\r\n\t\t\toverflow-y: hidden;\r\n\t\t\ttransition: width 0.2s ease;\r\n\t\t\t@media (max-width: $phone) {\r\n\t\t\t\tfont-size: 12px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\t&:not(:first-child) {\r\n\t\t\t\tmargin: 12px 0 0 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__information-button {\r\n\t\twidth: 100%;\r\n\t\tdisplay: inline-flex;\r\n\t\talign-items: center;\r\n\t\tcolumn-gap: 20px;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 28px;\r\n\t\tline-height: 150%;\r\n\t\ttext-align: left;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tfont-size: 22px;\r\n\t\t\tcolumn-gap: 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 16px;\r\n\t\t}\r\n\t\tdiv {\r\n\t\t\tposition: relative;\r\n\t\t\tmin-width: 25px;\r\n\t\t\theight: 25px;\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\tcontent: '';\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\twidth: 22px;\r\n\t\t\t\theight: 2px;\r\n\t\t\t\tborder-radius: 1px;\r\n\t\t\t\tbackground-color: $primary;\r\n\t\t\t\ttransition: all 0.6s ease;\r\n\t\t\t\t@media (max-width: $desktop) {\r\n\t\t\t\t\twidth: 16px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\ttransform: rotate(90deg);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__information-button:focus {\r\n\t\t~ p {\r\n\t\t\theight: 130px;\r\n\t\t\twidth: 100%;\r\n\t\t\toverflow-y: auto;\r\n\t\t\t@media (max-width: $phone) {\r\n\t\t\t\theight: 60px;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\t\t}\r\n\t\tdiv {\r\n\t\t\ttransform: rotate(360deg);\r\n\t\t\t&::after {\r\n\t\t\t\ttransform: rotate(0);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n.related-projects {\r\n\tbackground-color: $main-bg;\r\n\t&__body {\r\n\t\tpadding: 180px 0 100px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 150px 0 100px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 80px 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 40px 0;\r\n\t\t}\r\n\t}\r\n}\r\n",".do-it {\r\n\tmargin: 180px 0 0 0;\r\n\t@media (max-width: $desktop) {\r\n\t\tmargin: 80px 0 0 0;\r\n\t}\r\n\t@media (max-width: $phone) {\r\n\t\tmargin: 60px 0 0 0;\r\n\t}\r\n\t&__list {\r\n\t\tmargin: 60px 0 0 0;\r\n\t\tdisplay: flex;\r\n\t\tcolumn-gap: 30px;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 30px 0 0 0;\r\n\t\t\tcolumn-gap: 15px;\r\n\t\t\trow-gap: 50px;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\trow-gap: 20px;\r\n\t\t}\r\n\t}\r\n\t&__item {\r\n\t\tflex: 0 1 25%;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 47%;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t}\r\n\t\t> div h2 {\r\n\t\t\tcolor: $input-bor;\r\n\t\t}\r\n\t\t> div {\r\n\t\t\tposition: relative;\r\n\t\t\ttransform: translateY(-50%);\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tcolumn-gap: 23px;\r\n\t\t\t.dash-line {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 2px;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\tspan {\r\n\t\t\t\t\tflex: 0 1 5px;\r\n\t\t\t\t\theight: 2px;\r\n\t\t\t\t\tborder-radius: 1px;\r\n\t\t\t\t\tbackground-color: $input-bor;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&:hover {\r\n\t\t\t> div h2 {\r\n\t\t\t\tcolor: $primary;\r\n\t\t\t}\r\n\t\t\t.dash-line span {\r\n\t\t\t\tbackground-color: $primary;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__item-title {\r\n\t\tmargin: 16px 0 0 0;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 20px;\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 5px 0 0 0;\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\t}\r\n\t&__item-description {\r\n\t\tmargin: 8px 0 0 0;\r\n\t\tfont-size: 16px;\r\n\t\tline-height: 160%;\r\n\t\tcolor: $desc;\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 14px;\r\n\t\t\tline-height: 140%;\r\n\t\t}\r\n\t}\r\n}\r\n",".benefits {\r\n\tbackground-color: $alternative-bg;\r\n\t&__body {\r\n\t\tpadding: 80px 0 125px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 45px 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 35px 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 15px 0 40px;\r\n\t\t}\r\n\t}\r\n\t&__title {\r\n\t\th2 {\r\n\t\t\tcolor: $main-bg;\r\n\t\t}\r\n\t}\r\n\t&__list {\r\n\t\tmargin: 60px 0 0;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tposition: relative;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 40px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 30px 0 0;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\trow-gap: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 20px 0 0;\r\n\t\t}\r\n\t\timg {\r\n\t\t\twidth: 48px;\r\n\t\t\theight: 48px;\r\n\t\t}\r\n\t}\r\n\t&__item {\r\n\t\tflex: 0 1 23.2%;\r\n\t\t&:nth-child(2) {\r\n\t\t\tposition: relative;\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\tcontent: '';\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\twidth: 1px;\r\n\t\t\t\tbackground: linear-gradient(\r\n\t\t\t\t\t135deg,\r\n\t\t\t\t\trgba(218, 219, 221, 0) 0%,\r\n\t\t\t\t\trgba(218, 219, 221, 0.5) 12.33%,\r\n\t\t\t\t\t#dadbdd 51.91%,\r\n\t\t\t\t\trgba(218, 219, 221, 0.5) 87.85%,\r\n\t\t\t\t\trgba(218, 219, 221, 0) 100%\r\n\t\t\t\t);\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\tleft: -94px;\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tright: -94px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tflex: 0 1 30%;\r\n\t\t\t&:nth-child(2) {\r\n\t\t\t\tposition: relative;\r\n\t\t\t\t&::before {\r\n\t\t\t\t\tleft: -5%;\r\n\t\t\t\t}\r\n\t\t\t\t&::after {\r\n\t\t\t\t\tright: -5%;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__item-box {\r\n\t\tmargin: 24px 0 0;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\ttext-align: left;\r\n\t\t\tmargin: 0 0 0 20px;\r\n\t\t}\r\n\t}\r\n\t&__item-title {\r\n\t\tcolor: $main-bg;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 20px;\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 0;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 15px;\r\n\t\t}\r\n\t}\r\n\t&__item-text {\r\n\t\tmargin: 8px 0 0;\r\n\t\tfont-size: 16px;\r\n\t\tline-height: 160%;\r\n\t\tcolor: $desc;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 12px;\r\n\t\t\tline-height: 15px;\r\n\t\t}\r\n\t}\r\n\t&__button {\r\n\t\tposition: absolute;\r\n\t\tmargin: 100px 0 0 0;\r\n\t\tleft: 50%;\r\n\t\ttransform: translateX(-50%);\r\n\t\tpadding: 0 112px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 15px 0 0 0;\r\n\t\t\tpadding: 0 70px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 20px 0 0 0;\r\n\t\t\theight: 40px;\r\n\t\t\tfont-size: 15px;\r\n\t\t\tpadding: 0 20px;\r\n\t\t}\r\n\t}\r\n}\r\n",".slider {\r\n\t@media (max-width: $desktop) {\r\n\t\tpadding: 80px 0;\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tpadding: 60px 0;\r\n\t}\r\n\t@media (max-width: $phone) {\r\n\t\tpadding: 40px 0;\r\n\t}\r\n\t&__top {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: flex-end;\r\n\t}\r\n\t&__title {\r\n\t\ttext-align: left;\r\n\t\tmax-width: 700px;\r\n\t\tmargin: 0;\r\n\t}\r\n\t&__buttons {\r\n\t\tdisplay: flex;\r\n\t\tcolumn-gap: 24px;\r\n\t}\r\n\t&__content {\r\n\t\tdisplay: flex;\r\n\t\tmargin: 60px 0 0;\r\n\t\tcolumn-gap: 30px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 30px 0 0;\r\n\t\t\tcolumn-gap: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 15px 0 0;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\trow-gap: 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t}\r\n\t}\r\n\t&__view-more {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\tmargin: 85px 0 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 60px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 40px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t}\r\n\t}\r\n}\r\n",".portfolio-card {\r\n\tflex: 0 1 33.3333%;\r\n\ttext-align: center;\r\n\tborder-radius: 4px 4px 0 0;\r\n\tbox-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),\r\n\t\t0px 12px 10px -6px rgba(154, 156, 165, 0.04),\r\n\t\t0px 30px 24px -10px rgba(154, 156, 165, 0.05),\r\n\t\t0px 80px 80px -20px rgba(154, 156, 165, 0.08);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tpadding: 0 0 90px;\r\n\t&:hover .portfolio-card__box {\r\n\t\theight: 37.5%;\r\n\t}\r\n\t@media (max-width: $desktop) {\r\n\t\tpadding: 0 0 50px;\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tflex: 0 1 100%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tpadding: 0;\r\n\t}\r\n\t@media (max-width: $phone) {\r\n\t\tflex-direction: column;\r\n\t\tpadding: 0 0 50px;\r\n\t}\r\n\t&__img {\r\n\t\theight: 345px;\r\n\t\tposition: relative;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 240px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 55%;\r\n\t\t\theight: 180px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\tmin-height: 200px;\r\n\t\t}\r\n\t}\r\n\t&__box {\r\n\t\tposition: absolute;\r\n\t\tbottom: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 21.6%;\r\n\t\tbackground-color: $main-bg;\r\n\t\tpadding: 15px 0 25px;\r\n\t\ttransition: all 0.3s ease-out;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tposition: relative;\r\n\t\t\theight: 100%;\r\n\t\t\twidth: 45%;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\tpadding: 0 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 21.6%;\r\n\t\t\tbottom: 0;\r\n\t\t\tpadding: 25px 3px 5px;\r\n\t\t}\r\n\t}\r\n\t&__box-title {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 20px;\r\n\t\tline-height: 105%;\r\n\t\tcolor: $titles;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 1;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t}\r\n\t&__box-subtitle {\r\n\t\tmargin: 15px 0 0;\r\n\t\tfont-size: 14px;\r\n\t\tcolor: $desc;\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 10px 0 0;\r\n\t\t\tfont-size: 12px;\r\n\t\t\tline-height: 1;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 10px;\r\n\t\t}\r\n\t}\r\n\t&__box-btn {\r\n\t\tmargin: 24px 0 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 13px 0 0;\r\n\t\t\theight: 30px;\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 16px 0 0;\r\n\t\t}\r\n\t}\r\n}\r\n.card {\r\n\tanimation: showCard 1s ease;\r\n}\r\n@keyframes showCard {\r\n\t0% {\r\n\t\tborder-radius: 50%;\r\n\t\ttransform: scale(0, 0);\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\tborder-radius: 4px;\r\n\t\ttransform: scale(100%, 100%);\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n",".pricing {\r\n\tposition: relative;\r\n\tbackground-color: $auxiliary-bg;\r\n\t&__background {\r\n\t\tposition: absolute;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t}\r\n\t&__body {\r\n\t\tz-index: 1;\r\n\t\tpadding: 80px 0 110px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 60px 0 70px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 40px 0 30px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 20px 0;\r\n\t\t}\r\n\t}\r\n\t&__table {\r\n\t\tmargin: 60px 0 120px;\r\n\t\twidth: 100%;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 40px 0 80px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 25px 0 30px;\r\n\t\t}\r\n\t}\r\n\t&__table-row {\r\n\t\t&:nth-child(odd) {\r\n\t\t\tbackground-color: $main-bg;\r\n\t\t}\r\n\t\ttext-align: center;\r\n\t}\r\n\t&__table-title {\r\n\t\tcolor: $titles;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tpadding: 32px 0 24px;\r\n\t\tfont-size: 24px;\r\n\t\ttext-transform: uppercase;\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 20px 0;\r\n\t\t\tfont-size: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\t\tspan {\r\n\t\t\tfont-size: 18px;\r\n\t\t\tcolor: $desc;\r\n\t\t\tline-height: 150%;\r\n\t\t\t@media (max-width: $tablet) {\r\n\t\t\t\tfont-size: 14px;\r\n\t\t\t}\r\n\t\t\t@media (max-width: $phone) {\r\n\t\t\t\tfont-size: 12px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__service-name {\r\n\t\tfont-size: 16px;\r\n\t\tline-height: 160%;\r\n\t\tcolor: $links;\r\n\t\tfont-family: 'Ubu-R';\r\n\t\tmargin: 16px 0 16px 24px;\r\n\t\ttext-align: left;\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 12px;\r\n\t\t\tline-height: 130%;\r\n\t\t}\r\n\t}\r\n\t.first {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-weight: 700;\r\n\t\tcolor: $titles;\r\n\t\ttext-transform: capitalize;\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t&__value {\r\n\t\tcolor: $links;\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 12px;\r\n\t\t}\r\n\t}\r\n\t.table-button {\r\n\t\tmargin: 32px 0;\r\n\t\tpadding: 0 24px;\r\n\t\theight: 36px;\r\n\t\tfont-size: 12px;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 25px 5px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 15px 5px;\r\n\t\t\tfont-size: 10px;\r\n\t\t}\r\n\t}\r\n}\r\n",".supported-by {\r\n\t&__title {\r\n\t}\r\n\t&__list {\r\n\t\tmargin: 21px 0 0;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tcolumn-gap: 10px;\r\n\t\t\trow-gap: 15px;\r\n\t\t\timg {\r\n\t\t\t\tflex: 0 1 25%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/pages/services.scss":
/*!****************************************!*\
  !*** ./src/styles/pages/services.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_services_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./services.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/services.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_services_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_services_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_services_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_services_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/images/bg-image-service.png":
/*!************************************************!*\
  !*** ./src/assets/images/bg-image-service.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/bg-image-service..png";

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
/******/ 			"services": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-464c4e","src_pages_templates_slider_hbs-src_assets_images_services-0_jpg-src_assets_images_services-1_-e878c4"], () => (__webpack_require__("./src/scripts/handlers/handleServicesPage.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=services.js.map