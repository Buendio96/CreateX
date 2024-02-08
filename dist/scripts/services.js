/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/handlers/handleServicesPage.js":
/*!****************************************************!*\
  !*** ./src/scripts/handlers/handleServicesPage.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_bg_image_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @images/bg-image-service */ "./src/assets/images/bg-image-service.png");
/* harmony import */ var _images_services_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @images/services-0 */ "./src/assets/images/services-0.jpg");
/* harmony import */ var _images_services_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @images/services-1 */ "./src/assets/images/services-1.jpg");
/* harmony import */ var _images_services_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/services-2 */ "./src/assets/images/services-2.jpg");
/* harmony import */ var _images_services_3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/services-3 */ "./src/assets/images/services-3.jpg");
/* harmony import */ var _js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @js-utilities/addBackground */ "./src/scripts/utilities/addBackground.mjs");
/* harmony import */ var _js_utilities_addServicesBg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js-utilities/addServicesBg */ "./src/scripts/utilities/addServicesBg.mjs");
/* harmony import */ var _p_temp_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @p-temp/slider */ "./src/pages/templates/slider.hbs");
/* harmony import */ var _p_temp_slider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_p_temp_slider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _s_pages_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @s-pages/services */ "./src/styles/pages/services.scss");









const services = document.getElementById('services-serviceBlock');
const relatedServices = document.getElementById('related-serviceBlock');
(0,_js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_5__["default"])('serviceTitleImage', _images_bg_image_service__WEBPACK_IMPORTED_MODULE_0__);
if (services || relatedServices) {
  const targetElementsName = ['service-0', 'service-1', 'service-2', 'service-3'];
  const imagesBlock = [_images_services_0__WEBPACK_IMPORTED_MODULE_1__, _images_services_1__WEBPACK_IMPORTED_MODULE_2__, _images_services_2__WEBPACK_IMPORTED_MODULE_3__, _images_services_3__WEBPACK_IMPORTED_MODULE_4__];
  (0,_js_utilities_addServicesBg__WEBPACK_IMPORTED_MODULE_6__["default"])(targetElementsName, imagesBlock);
}

//======================================
const SERVICES_TEMPLATE_OPTION = {
  title: 'Related projects',
  id: 'construction',
  modClass: ''
};
const relatedProjectsContainer = document.getElementById('related-projects');
if (relatedProjectsContainer) {
  const renderHTML = _p_temp_slider__WEBPACK_IMPORTED_MODULE_7___default()(SERVICES_TEMPLATE_OPTION);
  relatedProjectsContainer.innerHTML = renderHTML;
} else {
  console.log('--relatedProjectsContainer-- not found');
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/services.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/pages/services.scss ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    padding: 25px 10px 5px;
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

.for-service {
  left: calc(100% - 975px);
  width: 975px;
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
.slider .card {
  animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
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
}`, "",{"version":3,"sources":["webpack://./src/styles/common/_mixins.scss","webpack://./src/styles/common/_vars.scss","webpack://./src/styles/pages/services.scss","webpack://./src/styles/templates/_how-we-do-it.scss","webpack://./src/styles/templates/_benefits.scss","webpack://./src/styles/templates/_slider.scss"],"names":[],"mappings":"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","sourcesContent":["//==============================================\r\n//BUTTONS=======================================\r\n//==============================================\r\n@mixin buttons {\r\n\tdisplay: inline-flex;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tfont-family: 'Ubu-B';\r\n\ttransition: all 0.4s ease;\r\n\tletter-spacing: 0.5px;\r\n\tborder-radius: 4px;\r\n}\r\n.solid-button {\r\n\tfont-size: 16px;\r\n\theight: 52px;\r\n\tcolor: $text;\r\n\tbackground-color: $primary;\r\n\tpadding: 0 40px;\r\n\tborder: 1px solid transparent;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.regular-button {\r\n\tfont-size: 14px;\r\n\theight: 44px;\r\n\tcolor: $text;\r\n\tbackground-color: $primary;\r\n\tpadding: 0 32px;\r\n\tborder: 1px solid transparent;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.outline-solid-btn {\r\n\tfont-size: 16px;\r\n\tcolor: $primary;\r\n\theight: 52px;\r\n\tbackground-color: transparent;\r\n\tpadding: 0 40px;\r\n\tborder: 1px solid $primary;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tbackground: $text;\r\n\t\tcolor: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.outline-regular-btn {\r\n\tfont-size: 14px;\r\n\tcolor: $primary;\r\n\theight: 44px;\r\n\tbackground-color: transparent;\r\n\tpadding: 0 32px;\r\n\tborder: 1px solid $primary;\r\n\t@include buttons;\r\n\t&:hover {\r\n\t\tcolor: $text;\r\n\t\tbackground: $primary;\r\n\t\tborder: 1px solid $primary;\r\n\t}\r\n}\r\n.arrow {\r\n\tpadding: 0;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tbackground: white;\r\n\twidth: 48px;\r\n\theight: 48px;\r\n\tborder-radius: 50%;\r\n\ttransition: all 0.4s ease;\r\n\t&:hover {\r\n\t\ttransition: all 0.3s ease;\r\n\t\tbackground: $primary;\r\n\t\timg {\r\n\t\t\ttransition: all 0.4s ease;\r\n\t\t\tfilter: invert(1);\r\n\t\t}\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\twidth: 32px;\r\n\t\theight: 32px;\r\n\t}\r\n}\r\n//==============================================\r\n//FORM TAGS=====================================\r\n//==============================================\r\n@mixin label-text {\r\n\tcolor: $links;\r\n\tfont-size: 14px;\r\n\tfont-style: normal;\r\n\tline-height: 150%;\r\n}\r\n.link-hover {\r\n\t&:hover {\r\n\t\tcolor: $primary;\r\n\t}\r\n}\r\n.label {\r\n\t@include label-text;\r\n}\r\n.input {\r\n\t@include label-text;\r\n\tpadding: 11px 0 12px 16px;\r\n\tborder: 1px solid $input-bor;\r\n\tbackground-color: $input-bg;\r\n\tborder-radius: 4px;\r\n}\r\n//==============================================\r\n//BLOCKS========================================\r\n//==============================================\r\n.title-block {\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\r\n\t&__title {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 46px;\r\n\t\tline-height: 130%;\r\n\t\tcolor: $titles;\r\n\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tfont-size: 40px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 25px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\t}\r\n\t&__subtitle {\r\n\t\tmargin: 24px 0 0;\r\n\t\tfont-size: 18px;\r\n\t\tline-height: 150%;\r\n\t\tcolor: $desc;\r\n\t\tfont-family: 'Ubu-R';\r\n\t\tfont-weight: 400;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tmargin: 12px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 10px 0 0;\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t}\r\n}\r\n.text-left {\r\n\ttext-align: left;\r\n}\r\n.view-more-block {\r\n\tdisplay: flex;\r\n\tcolumn-gap: 40px;\r\n\t&__title {\r\n\t\tcolor: $titles;\r\n\t\tfont-size: 28px;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 24px;\r\n\t\t\tflex: 0 1 100%;\r\n\t\t}\r\n\t}\r\n\t&__link {\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 30px;\r\n\t\t}\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tflex-wrap: wrap;\r\n\t\ttext-align: center;\r\n\t\tjustify-content: center;\r\n\t\trow-gap: 10px;\r\n\t\tmargin: 20px 0 0;\r\n\t}\r\n}\r\n.portfolio-card {\r\n\tflex: 0 1 33.3333%;\r\n\ttext-align: center;\r\n\tborder-radius: 4px 4px 0 0;\r\n\tbox-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),\r\n\t\t0px 12px 10px -6px rgba(154, 156, 165, 0.04),\r\n\t\t0px 30px 24px -10px rgba(154, 156, 165, 0.05),\r\n\t\t0px 80px 80px -20px rgba(154, 156, 165, 0.08);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tpadding: 0 0 90px;\r\n\t&:hover .portfolio-card__box {\r\n\t\theight: 37.5%;\r\n\t}\r\n\t@media (max-width: $desktop) {\r\n\t\tpadding: 0 0 50px;\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tflex: 0 1 100%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tpadding: 0;\r\n\t}\r\n\t@media (max-width: $phone) {\r\n\t\tflex-direction: column;\r\n\t\tpadding: 0 0 50px;\r\n\t}\r\n\t&__img {\r\n\t\theight: 345px;\r\n\t\tposition: relative;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 240px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 55%;\r\n\t\t\theight: 180px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\tmin-height: 200px;\r\n\t\t}\r\n\t}\r\n\t&__box {\r\n\t\tposition: absolute;\r\n\t\tbottom: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 21.6%;\r\n\t\tbackground-color: $main-bg;\r\n\t\tpadding: 15px 0 25px;\r\n\t\ttransition: all 0.3s ease-out;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tposition: relative;\r\n\t\t\theight: 100%;\r\n\t\t\twidth: 45%;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\tpadding: 0 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 21.6%;\r\n\t\t\tbottom: 0;\r\n\t\t\tpadding: 25px 10px 5px;\r\n\t\t}\r\n\t}\r\n\t&__box-title {\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 20px;\r\n\t\tline-height: 105%;\r\n\t\tcolor: $titles;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 1;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t}\r\n\t}\r\n\t&__box-subtitle {\r\n\t\tmargin: 15px 0 0;\r\n\t\tfont-size: 14px;\r\n\t\tcolor: $desc;\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 10px 0 0;\r\n\t\t\tfont-size: 12px;\r\n\t\t\tline-height: 1;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t}\r\n\t}\r\n\t&__box-btn {\r\n\t\tmargin: 24px 0 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 13px 0 0;\r\n\t\t\theight: 30px;\r\n\t\t\tfont-size: 13px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t}\r\n\t}\r\n}\r\n//==============================================\r\n//ADAPTIVE && DISPLAY======================================\r\n//==============================================\r\n.grid {\r\n\tdisplay: grid;\r\n\tgrid-template: 1fr/1fr minmax(auto, 1230px) 1fr;\r\n\tpadding: 0 15px;\r\n}\r\n.center {\r\n\tgrid-column: 2/3;\r\n}\r\n.image-adaptive {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tobject-fit: cover;\r\n}\r\n.for-service {\r\n\tleft: calc(100% - 975px);\r\n\twidth: 975px;\r\n}\r\n","$primary: #ff5a30;\r\n$titles: #1e212c;\r\n$links: #424551;\r\n$desc: #787a80;\r\n$input-bg: #f4f5f6;\r\n$input-bor: #d7dadd;\r\n$text: #fff;\r\n$main-bg: #fff;\r\n$auxiliary-bg: #f4f5f6;\r\n$alternative-bg: #1e212c;\r\n//Output-Displays=========================\r\n$header: 1120px;\r\n$desktop: 992px;\r\n$tablet: 768px;\r\n$phone: 480px;\r\n$phone-s: 320px;\r\n","@import '@s-common/vars';\r\n@import '@s-common/mixins';\r\n@import '@s-templates/how-we-do-it';\r\n@import '@s-templates/benefits';\r\n@import '@s-templates/slider';\r\n\r\n.services {\r\n\tbackground-color: $main-bg;\r\n\t&__body {\r\n\t\tpadding: 120px 0 180px;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\trow-gap: 120px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 80px 0 30px;\r\n\t\t\trow-gap: 90px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 40px 0 30px;\r\n\t\t\trow-gap: 30px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 20px 0;\r\n\t\t\trow-gap: 30px;\r\n\t\t}\r\n\t}\r\n\t&__item {\r\n\t\twidth: 100%;\r\n\t\theight: 420px;\r\n\t\tdisplay: flex;\r\n\t\tcolumn-gap: 80px;\r\n\t\toverflow: hidden;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 350px;\r\n\t\t\tcolumn-gap: 30px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 270px;\r\n\t\t}\r\n\t\t@media (max-width: 700px) {\r\n\t\t\tposition: relative;\r\n\t\t\theight: auto;\r\n\t\t}\r\n\t\t&:nth-child(even) {\r\n\t\t\tflex-direction: row-reverse;\r\n\t\t}\r\n\t}\r\n\t&__item-image {\r\n\t\tflex: 0 1 50%;\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\toverflow: hidden;\r\n\t\tborder-radius: 4px;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 35%;\r\n\t\t}\r\n\t\t@media (max-width: 700px) {\r\n\t\t\tposition: absolute;\r\n\t\t}\r\n\t}\r\n\t&__item-content {\r\n\t\tflex: 0 1 50%;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 65%;\r\n\t\t}\r\n\t\t@media (max-width: 700px) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\tz-index: 1;\r\n\t\t\tbackground-color: rgba($color: white, $alpha: 0.5);\r\n\t\t\tpadding: 10px 15px;\r\n\t\t}\r\n\t}\r\n\t&__item-title {\r\n\t\tmargin: 90px 0 0 0;\r\n\t\tfont-size: 32px;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tline-height: 150%;\r\n\t\tcolor: $titles;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 20px 0 0 0;\r\n\t\t\tfont-size: 24px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 20px;\r\n\t\t\tmargin: 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 10px 0 0 0;\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\t}\r\n\t&__item-description {\r\n\t\tmargin: 24px 0 0 0;\r\n\t\tline-height: 160%;\r\n\t\tcolor: $desc;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 10px 0 0 0;\r\n\t\t}\r\n\t\t@media (max-width: 700px) {\r\n\t\t\tcolor: $titles;\r\n\t\t\tbackground-color: rgba($color: white, $alpha: 0.8);\r\n\t\t\tmargin: 10px -15px 0;\r\n\t\t\tpadding: 0 15px;\r\n\t\t}\r\n\t}\r\n\t&__item-btn {\r\n\t\tmargin: 50px 0 0 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 20px 0 0 0;\r\n\t\t}\r\n\t}\r\n}\r\n.we-offer {\r\n\tbackground-color: $main-bg;\r\n\t&__body {\r\n\t\tpadding: 120px 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 70px 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 50px 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 30px 0;\r\n\t\t}\r\n\t}\r\n\t&__top {\r\n\t\twidth: 100%;\r\n\t\theight: 440px;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\theight: 350px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\theight: 250px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\theight: 150px;\r\n\t\t}\r\n\t}\r\n\t&__image {\r\n\t\tposition: relative;\r\n\t\tflex: 0 1 57%;\r\n\t\theight: 100%;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tflex: 0 1 50%;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 30%;\r\n\t\t}\r\n\t\timg {\r\n\t\t\tbox-shadow: 0 0 20px 0.5px rgba($color: black, $alpha: 0.6);\r\n\t\t\tborder-radius: 10px;\r\n\t\t}\r\n\t}\r\n\t&__information {\r\n\t\tflex: 0 1 34.2%;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tflex: 0 1 45%;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 65%;\r\n\t\t}\r\n\t}\r\n\t&__information-title {\r\n\t\tfont-size: 40px;\r\n\t}\r\n\t&__information-list {\r\n\t\tmargin: 60px 0 0 0px;\r\n\t\tdisplay: inline-flex;\r\n\t\tflex-direction: column;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 20px 0 0 0;\r\n\t\t}\r\n\t}\r\n\t&__information-item {\r\n\t\t&:not(:first-child) {\r\n\t\t\tmargin: 24px 0 0 0;\r\n\t\t}\r\n\t\tp {\r\n\t\t\tmargin: 12px 0 0 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tline-height: 160%;\r\n\t\t\tcolor: $desc;\r\n\t\t\tpadding: 0 0 0 45px;\r\n\t\t\theight: 0;\r\n\t\t\twidth: 0;\r\n\t\t\toverflow-y: hidden;\r\n\t\t\ttransition: width 0.2s ease;\r\n\t\t\t@media (max-width: $phone) {\r\n\t\t\t\tfont-size: 12px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\t&:not(:first-child) {\r\n\t\t\t\tmargin: 12px 0 0 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__information-button {\r\n\t\twidth: 100%;\r\n\t\tdisplay: inline-flex;\r\n\t\talign-items: center;\r\n\t\tcolumn-gap: 20px;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 28px;\r\n\t\tline-height: 150%;\r\n\t\ttext-align: left;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tfont-size: 22px;\r\n\t\t\tcolumn-gap: 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 16px;\r\n\t\t}\r\n\t\tdiv {\r\n\t\t\tposition: relative;\r\n\t\t\tmin-width: 25px;\r\n\t\t\theight: 25px;\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\tcontent: '';\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\twidth: 22px;\r\n\t\t\t\theight: 2px;\r\n\t\t\t\tborder-radius: 1px;\r\n\t\t\t\tbackground-color: $primary;\r\n\t\t\t\ttransition: all 0.6s ease;\r\n\t\t\t\t@media (max-width: $desktop) {\r\n\t\t\t\t\twidth: 16px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\ttransform: rotate(90deg);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__information-button:focus {\r\n\t\t~ p {\r\n\t\t\theight: 130px;\r\n\t\t\twidth: 100%;\r\n\t\t\toverflow-y: auto;\r\n\t\t\t@media (max-width: $phone) {\r\n\t\t\t\theight: 60px;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\t\t}\r\n\t\tdiv {\r\n\t\t\ttransform: rotate(360deg);\r\n\t\t\t&::after {\r\n\t\t\t\ttransform: rotate(0);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n.related-projects {\r\n\tbackground-color: $main-bg;\r\n\t&__body {\r\n\t\tpadding: 180px 0 100px;\r\n\t}\r\n}\r\n",".do-it {\r\n\tmargin: 180px 0 0 0;\r\n\t@media (max-width: $desktop) {\r\n\t\tmargin: 80px 0 0 0;\r\n\t}\r\n\t@media (max-width: $phone) {\r\n\t\tmargin: 60px 0 0 0;\r\n\t}\r\n\t&__list {\r\n\t\tmargin: 60px 0 0 0;\r\n\t\tdisplay: flex;\r\n\t\tcolumn-gap: 30px;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 30px 0 0 0;\r\n\t\t\tcolumn-gap: 15px;\r\n\t\t\trow-gap: 50px;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\trow-gap: 20px;\r\n\t\t}\r\n\t}\r\n\t&__item {\r\n\t\tflex: 0 1 25%;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 47%;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t}\r\n\t\t> div h2 {\r\n\t\t\tcolor: $input-bor;\r\n\t\t}\r\n\t\t> div {\r\n\t\t\tposition: relative;\r\n\t\t\ttransform: translateY(-50%);\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tcolumn-gap: 23px;\r\n\t\t\t.dash-line {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 2px;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\tspan {\r\n\t\t\t\t\tflex: 0 1 5px;\r\n\t\t\t\t\theight: 2px;\r\n\t\t\t\t\tborder-radius: 1px;\r\n\t\t\t\t\tbackground-color: $input-bor;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&:hover {\r\n\t\t\t> div h2 {\r\n\t\t\t\tcolor: $primary;\r\n\t\t\t}\r\n\t\t\t.dash-line span {\r\n\t\t\t\tbackground-color: $primary;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__item-title {\r\n\t\tmargin: 16px 0 0 0;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 20px;\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 5px 0 0 0;\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\t}\r\n\t&__item-description {\r\n\t\tmargin: 8px 0 0 0;\r\n\t\tfont-size: 16px;\r\n\t\tline-height: 160%;\r\n\t\tcolor: $desc;\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 14px;\r\n\t\t\tline-height: 140%;\r\n\t\t}\r\n\t}\r\n}\r\n",".benefits {\r\n\tbackground-color: $alternative-bg;\r\n\t&__body {\r\n\t\tpadding: 80px 0 125px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tpadding: 45px 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tpadding: 35px 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tpadding: 15px 0 40px;\r\n\t\t}\r\n\t}\r\n\t&__title {\r\n\t\th2 {\r\n\t\t\tcolor: $main-bg;\r\n\t\t}\r\n\t}\r\n\t&__list {\r\n\t\tmargin: 60px 0 0;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tposition: relative;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 40px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 30px 0 0;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\trow-gap: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 20px 0 0;\r\n\t\t}\r\n\t\timg {\r\n\t\t\twidth: 48px;\r\n\t\t\theight: 48px;\r\n\t\t}\r\n\t}\r\n\t&__item {\r\n\t\tflex: 0 1 23.2%;\r\n\t\t&:nth-child(2) {\r\n\t\t\tposition: relative;\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\tcontent: '';\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\twidth: 1px;\r\n\t\t\t\tbackground: linear-gradient(\r\n\t\t\t\t\t135deg,\r\n\t\t\t\t\trgba(218, 219, 221, 0) 0%,\r\n\t\t\t\t\trgba(218, 219, 221, 0.5) 12.33%,\r\n\t\t\t\t\t#dadbdd 51.91%,\r\n\t\t\t\t\trgba(218, 219, 221, 0.5) 87.85%,\r\n\t\t\t\t\trgba(218, 219, 221, 0) 100%\r\n\t\t\t\t);\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\tleft: -94px;\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tright: -94px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tflex: 0 1 30%;\r\n\t\t\t&:nth-child(2) {\r\n\t\t\t\tposition: relative;\r\n\t\t\t\t&::before {\r\n\t\t\t\t\tleft: -5%;\r\n\t\t\t\t}\r\n\t\t\t\t&::after {\r\n\t\t\t\t\tright: -5%;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tflex: 0 1 100%;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__item-box {\r\n\t\tmargin: 24px 0 0;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\ttext-align: left;\r\n\t\t\tmargin: 0 0 0 20px;\r\n\t\t}\r\n\t}\r\n\t&__item-title {\r\n\t\tcolor: $main-bg;\r\n\t\tfont-family: 'Ubu-B';\r\n\t\tfont-size: 20px;\r\n\t\tline-height: 150%;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 0;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 15px;\r\n\t\t}\r\n\t}\r\n\t&__item-text {\r\n\t\tmargin: 8px 0 0;\r\n\t\tfont-size: 16px;\r\n\t\tline-height: 160%;\r\n\t\tcolor: $desc;\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tfont-size: 12px;\r\n\t\t\tline-height: 15px;\r\n\t\t}\r\n\t}\r\n\t&__button {\r\n\t\tposition: absolute;\r\n\t\tmargin: 100px 0 0 0;\r\n\t\tleft: 50%;\r\n\t\ttransform: translateX(-50%);\r\n\t\tpadding: 0 112px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 15px 0 0 0;\r\n\t\t\tpadding: 0 70px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t\tmargin: 20px 0 0 0;\r\n\t\t\theight: 40px;\r\n\t\t\tfont-size: 15px;\r\n\t\t\tpadding: 0 20px;\r\n\t\t}\r\n\t}\r\n}\r\n",".slider {\r\n\t@media (max-width: $desktop) {\r\n\t\tpadding: 80px 0;\r\n\t}\r\n\t@media (max-width: $tablet) {\r\n\t\tpadding: 60px 0;\r\n\t}\r\n\t@media (max-width: $phone) {\r\n\t\tpadding: 40px 0;\r\n\t}\r\n\t&__top {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: flex-end;\r\n\t}\r\n\t&__title {\r\n\t\ttext-align: left;\r\n\t\tmax-width: 700px;\r\n\t\tmargin: 0;\r\n\t}\r\n\t&__buttons {\r\n\t\tdisplay: flex;\r\n\t\tcolumn-gap: 24px;\r\n\t}\r\n\t&__content {\r\n\t\tdisplay: flex;\r\n\t\tmargin: 60px 0 0;\r\n\t\tcolumn-gap: 30px;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 30px 0 0;\r\n\t\t\tcolumn-gap: 20px;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 15px 0 0;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\trow-gap: 10px;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t}\r\n\t}\r\n\t&__view-more {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\tmargin: 85px 0 0;\r\n\t\t@media (max-width: $desktop) {\r\n\t\t\tmargin: 60px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmargin: 40px 0 0;\r\n\t\t}\r\n\t\t@media (max-width: $phone) {\r\n\t\t}\r\n\t}\r\n\t.card {\r\n\t\tanimation: fadeIn 0.5s ease-out;\r\n\t}\r\n\r\n\t@keyframes fadeIn {\r\n\t\tfrom {\r\n\t\t\topacity: 0;\r\n\t\t\ttransform: translateX(-100px);\r\n\t\t}\r\n\t\tto {\r\n\t\t\topacity: 1;\r\n\t\t\ttransform: translateX(0);\r\n\t\t}\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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

/***/ "./src/styles/pages/services.scss":
/*!****************************************!*\
  !*** ./src/styles/pages/services.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
module.exports = __webpack_require__.p + "assets/images/bg-image-service..png";

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-464c4e"], () => (__webpack_require__("./src/scripts/handlers/handleServicesPage.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=services.js.map