/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/pages/homepage.js":
/*!***************************************!*\
  !*** ./src/scripts/pages/homepage.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_homepage_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @images/homepage-services */ "./src/assets/images/homepage-services.png");
/* harmony import */ var _images_homepage_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @images/homepage-support */ "./src/assets/images/homepage-support.jpg");
/* harmony import */ var _js_modules_addBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-modules/addBackground */ "./src/scripts/modules/addBackground.mjs");
/* harmony import */ var _js_modules_progressRing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js-modules/progressRing */ "./src/scripts/modules/progressRing.mjs");
/* harmony import */ var _js_modules_showNews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js-modules/showNews */ "./src/scripts/modules/showNews.mjs");
/* harmony import */ var _js_modules_showOpinion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @js-modules/showOpinion */ "./src/scripts/modules/showOpinion.mjs");
/* harmony import */ var _js_modules_showPortfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js-modules/showPortfolio */ "./src/scripts/modules/showPortfolio.mjs");
/* harmony import */ var _js_modules_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @js-modules/validator */ "./src/scripts/modules/validator.mjs");
/* harmony import */ var _js_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @js-modules/videoPlayer */ "./src/scripts/modules/videoPlayer.mjs");
/* harmony import */ var _js_store_newsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @js-store/newsStore */ "./src/scripts/store/newsStore.mjs");
/* harmony import */ var _js_store_opinionsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @js-store/opinionsStore */ "./src/scripts/store/opinionsStore.mjs");
/* harmony import */ var _js_store_projectsStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @js-store/projectsStore */ "./src/scripts/store/projectsStore.mjs");
/* harmony import */ var _src_createX_hbs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../src/createX.hbs */ "./src/createX.hbs");
/* harmony import */ var _src_createX_hbs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_createX_hbs__WEBPACK_IMPORTED_MODULE_12__);














//DATA ACQUISITION==========================================
const todayIs = new Date();
await (0,_js_store_projectsStore__WEBPACK_IMPORTED_MODULE_11__.initGetFilteredData)(todayIs); //As the second argument can be the Number for the date range
await (0,_js_store_opinionsStore__WEBPACK_IMPORTED_MODULE_10__.initGetOpinionData)();
await (0,_js_store_newsStore__WEBPACK_IMPORTED_MODULE_9__.initGetRecentNewsData)(); //The argument can be the number of news required(3 by default)
//BACKGROUND ADDITION========================================
(0,_js_modules_addBackground__WEBPACK_IMPORTED_MODULE_2__["default"])('ourServicesBg', _images_homepage_services__WEBPACK_IMPORTED_MODULE_0__);
(0,_js_modules_addBackground__WEBPACK_IMPORTED_MODULE_2__["default"])('supportBoxBg', _images_homepage_support__WEBPACK_IMPORTED_MODULE_1__);
const imageBlocks = ['service-one', 'service-two', 'service-three', 'service-four'];
const bgImages = [__webpack_require__(/*! @images/home-serv-item-0 */ "./src/assets/images/home-serv-item-0.jpg"), __webpack_require__(/*! @images/home-serv-item-1 */ "./src/assets/images/home-serv-item-1.jpg"), __webpack_require__(/*! @images/home-serv-item-2 */ "./src/assets/images/home-serv-item-2.jpg"), __webpack_require__(/*! @images/home-serv-item-3 */ "./src/assets/images/home-serv-item-3.jpg")];
imageBlocks.forEach((blockId, index) => {
  (0,_js_modules_addBackground__WEBPACK_IMPORTED_MODULE_2__["default"])(blockId, bgImages[index]);
});

//WE-ARE=====================================================
const videoBox = document.getElementById('homepageVideoBox');
if (videoBox && _js_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_8__["default"]) (0,_js_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_8__["default"])(videoBox);
//OUR-CORE===================================================
const newForm = document.getElementById('questionForm');
const successEl = document.getElementById('questionSuccess');
const closeBtn = document.getElementById('questionClose');
if (newForm) (0,_js_modules_validator__WEBPACK_IMPORTED_MODULE_7__["default"])(newForm, successEl, closeBtn);
//OUR-WORK===================================================
const PORTFOLIO_DOM_ELEMENTS = {
  array: _js_store_projectsStore__WEBPACK_IMPORTED_MODULE_11__.PROJECTS_STORE.byDateProjects,
  containerElement: document.getElementById('our-work-container'),
  skipLeft: document.getElementById('our-work-go-left'),
  skipRight: document.getElementById('our-work-go-right')
  /* quantityOfCards: 3 */ //This is an optional option to increase the output cards
};

if (_js_store_projectsStore__WEBPACK_IMPORTED_MODULE_11__.PROJECTS_STORE.byDateProjects.length > 0) (0,_js_modules_showPortfolio__WEBPACK_IMPORTED_MODULE_6__["default"])(PORTFOLIO_DOM_ELEMENTS);
//SUPPORTED===================================================
const OPINION_DOM_ELEMENTS = {
  avatar: document.getElementById(`opinionBoxImg`),
  opinion: document.getElementById(`opinionText`),
  name: document.getElementById(`opinionUserName`),
  companyName: document.getElementById(`opinionUserJob`),
  workPositions: document.getElementById(`opinionUserPosition`)
};
if (_js_store_opinionsStore__WEBPACK_IMPORTED_MODULE_10__.OPINIONS_STORE.length > 0) {
  (0,_js_modules_showOpinion__WEBPACK_IMPORTED_MODULE_5__.initShowOpinion)(OPINION_DOM_ELEMENTS, _js_store_opinionsStore__WEBPACK_IMPORTED_MODULE_10__.OPINIONS_STORE);
  document.getElementById('opinionToLeft').addEventListener('click', () => (0,_js_modules_showOpinion__WEBPACK_IMPORTED_MODULE_5__.toLeft)(OPINION_DOM_ELEMENTS, _js_store_opinionsStore__WEBPACK_IMPORTED_MODULE_10__.OPINIONS_STORE));
  document.getElementById('opinionToRight').addEventListener('click', () => (0,_js_modules_showOpinion__WEBPACK_IMPORTED_MODULE_5__.toRight)(OPINION_DOM_ELEMENTS, _js_store_opinionsStore__WEBPACK_IMPORTED_MODULE_10__.OPINIONS_STORE));
}
//PROGRESS===================================================
const PROGRESS_EL = document.getElementById('progressBox');
const isElementInViewport = element => {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
};
const handleScroll = () => {
  if (isElementInViewport(PROGRESS_EL)) {
    setTimeout(() => {
      (0,_js_modules_progressRing__WEBPACK_IMPORTED_MODULE_3__["default"])(document.getElementById('progressRingClients'), 98);
      (0,_js_modules_progressRing__WEBPACK_IMPORTED_MODULE_3__["default"])(document.getElementById('progressRingExp'), 75);
      (0,_js_modules_progressRing__WEBPACK_IMPORTED_MODULE_3__["default"])(document.getElementById('progressRingHours'), 82);
      (0,_js_modules_progressRing__WEBPACK_IMPORTED_MODULE_3__["default"])(document.getElementById('progressRingProjects'), 100);
    }, 500);
  }
  ;
};
window.addEventListener('scroll', handleScroll);

//RECENT NEWS===================================================
const RECENT_EL = document.getElementById('recentBox');
(0,_js_modules_showNews__WEBPACK_IMPORTED_MODULE_4__["default"])(RECENT_EL, _js_store_newsStore__WEBPACK_IMPORTED_MODULE_9__.NEWS_STORE.recentNews);
const showCommentsButton = document.querySelectorAll('#showComments');
showCommentsButton.forEach(button => {
  button.addEventListener('click', () => {
    const parentBlock = button.closest('.news-card');
    const commentsBlock = parentBlock.querySelector('.news-card__comments-box');
    if (commentsBlock) commentsBlock.classList.toggle('showComments');
  });
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/createX.hbs":
/*!*************************!*\
  !*** ./src/createX.hbs ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n	<meta charset=\"UTF-8\">\r\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n	<link rel=\"icon\" href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"favicon") : depth0), depth0))
    + "\" type=\"image/x-icon\">\r\n	<title>\r\n		"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"filename") : depth0), depth0))
    + "\r\n	</title>\r\n</head>\r\n\r\n<body class=\"body\">\r\n	<div class=\"wrapper\">\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./pages/templates/header.hbs */ "./src/pages/templates/header.hbs"),depth0,{"name":"header","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		<main class=\"main \">\r\n			<section class=\"parallax-block\">\r\n				<img id=\"titleImage\" class=\"image-adaptive\" alt=\"Title image\">\r\n			</section>\r\n			<section class=\"welcome grid \">\r\n				<div class=\"welcome__body center\">\r\n					<h1 class=\"welcome__title\">\r\n						CREATE<span>X</span>\r\n						<br>\r\n						CONSTRUCTION\r\n					</h1>\r\n					<h2 class=\"welcome__subtitle\">\r\n						Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin\r\n						ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.\r\n					</h2>\r\n					<div class=\"welcome__buttons\">\r\n						<button class=\"welcome__buttons-lb outline-solid-btn\">LEARN MORE ABOUT US</button>\r\n						<button class=\"welcome__buttons-rb solid-button\">SUBMIT REQUEST</button>\r\n					</div>\r\n					<ul class=\"welcome__list\">\r\n						<li class=\"welcome__item\">\r\n							<a href=\"#\">01</a>\r\n						</li>\r\n						<li class=\"welcome__item\">\r\n							<a href=\"#\">02</a>\r\n						</li>\r\n						<li class=\"welcome__item\">\r\n							<a href=\"#\">03</a>\r\n						</li>\r\n						<li class=\"welcome__item\">\r\n							<a href=\"#\">04</a>\r\n						</li>\r\n					</ul>\r\n				</div>\r\n			</section>\r\n			<section class=\"we-are grid \">\r\n				<div class=\"we-are__body invisible center\">\r\n					<div class=\"we-are__title title-block\">\r\n						<h2 class=\"title-block__title\">\r\n							We are Createx Construction Bureau\r\n						</h2>\r\n						<h4 class=\"title-block__subtitle\">\r\n							We are rightfully considered to be the best construction company in the USA.\r\n						</h4>\r\n					</div>\r\n					<div class=\"we-are__content\" id=\"homepageVideoBox\">\r\n						<video id=\"homepageVideoBox-video\" class=\"image-adaptive\"\r\n							poster=\"./assets/static-images/videoCoverImage.png\" class=\"we-are__content-video\"\r\n							src=\"/assets/videos/SON OF KICK.mp4\" type=\"video/mp4\">\r\n						</video>\r\n						<input type=\"checkbox\" class=\"we-are__content-play\" id=\"homepageVideoBox-play\">\r\n						<span class=\"we-are__content-play-real\"></span>\r\n						<div class=\"we-are__content-controls\" id=\"videoController\">\r\n							<div class=\"we-are__content-controls-volume\">\r\n								<input type=\"checkbox\" class=\"we-are__content-controls-volume-mute\"\r\n									id=\"homepageVideoBox-mute\">\r\n								<span class=\"we-are__content-controls-volume-mute-real\">\r\n									<svg class=\"off\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"\r\n										viewBox=\"0 0 24 24\" fill=\"none\">\r\n										<path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n											d=\"M14.4 18.7C15.1 19.2 16 18.8 16 17.9V13.4L12.3 17.1L14.4 18.7Z\"\r\n											fill=\"white\" />\r\n										<path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n											d=\"M20.7 5.3C20.3 4.9 19.7 4.9 19.3 5.3L16 8.6V6.1C16 5.3 15 4.8 14.4 5.3L11.6 7.6C11.2 7.8 10.8 8 10.3 8H8C6.9 8 6 8.9 6 10V14C6 15.1 6.9 16 8 16H8.6L5.3 19.3C4.9 19.7 4.9 20.3 5.3 20.7C5.7 21.1 6.3 21.1 6.7 20.7L20.7 6.7C21.1 6.3 21.1 5.7 20.7 5.3Z\"\r\n											fill=\"white\" />\r\n									</svg>\r\n									<svg class=\"on\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"\r\n										viewBox=\"0 0 24 24\" fill=\"none\">\r\n										<path\r\n											d=\"M2 10C2 8.9 2.9 8 4 8H6.3C6.8 8 7.2 7.8 7.5 7.6L10.3 5.3C11 4.8 12 5.2 12 6.1V17.9C12 18.7 11 19.2 10.4 18.7L7.6 16.4C7.2 16.2 6.8 16 6.3 16H4C2.9 16 2 15.1 2 14V10Z\"\r\n											fill=\"white\" />\r\n										<path\r\n											d=\"M15 17C14.7 17 14.5 16.9 14.3 16.7C13.9 16.3 13.9 15.7 14.3 15.3C14.3 15.3 15.5 14 15.5 12C15.5 10 14.3 8.8 14.3 8.7C13.9 8.3 13.9 7.7 14.3 7.3C14.7 6.9 15.3 6.9 15.7 7.3C15.8 7.4 17.5 9.1 17.5 12C17.5 14.9 15.8 16.6 15.7 16.7C15.5 16.9 15.3 17 15 17Z\"\r\n											fill=\"white\" />\r\n										<path\r\n											d=\"M18 21C17.7 21 17.5 20.9 17.3 20.7C16.9 20.3 16.9 19.7 17.3 19.3C17.3 19.3 20.2 16.5 20.2 12C20.2 7.5 17.3 4.8 17.3 4.7C16.9 4.3 16.9 3.7 17.3 3.3C17.7 2.9 18.3 2.9 18.7 3.3C18.8 3.4 22.2 6.7 22.2 12C22.2 17.4 18.8 20.6 18.7 20.7C18.5 20.9 18.2 21 18 21Z\"\r\n											fill=\"white\" />\r\n									</svg>\r\n								</span>\r\n								<input type=\"range\" max=\"100\" value=\"50\" class=\"we-are__content-controls-volume-lvl\"\r\n									id=\"homepageVideoBox-volume\">\r\n							</div>\r\n							<div class=\"we-are__content-controls-bar\">\r\n								<progress class=\"we-are__content-controls-progress\" id=\"homepageVideoBox-progress\"\r\n									max=\"100\" value=\"0\"></progress>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</section>\r\n			<section class=\"our-core grid \">\r\n				<div class=\"our-core__body invisible center\">\r\n					<div class=\"our-core__title title-block\">\r\n						<h2 class=\"title-block__title\">\r\n							Our core values\r\n						</h2>\r\n						<h4 class=\"title-block__subtitle\">\r\n							Our mission is to set the highest standards for construction sphere. </h4>\r\n					</div>\r\n					<div class=\"our-core__content\">\r\n						<div class=\"our-core__content-item\">\r\n							<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"44\" height=\"40\" viewBox=\"0 0 44 40\"\r\n								fill=\"none\">\r\n								<path\r\n									d=\"M42.0166 21.7188C42.6859 20.9716 43.0938 19.9853 43.0938 18.9062C43.0938 16.5803 41.2009 14.6875 38.875 14.6875H30.6869C31.4978 12.2266 31.8438 8.96125 31.8438 7.56156V6.15625C31.8438 3.055 29.32 0.53125 26.2188 0.53125H24.8125C24.1675 0.53125 23.605 0.97 23.4484 1.59625L22.6825 4.66094C21.6091 8.95281 18.2013 13.6881 14.6744 14.5487C14.0566 12.985 12.5312 11.875 10.75 11.875H2.3125C1.53625 11.875 0.90625 12.505 0.90625 13.2812V38.5938C0.90625 39.37 1.53625 40 2.3125 40H10.75C12.4272 40 13.8784 39.0166 14.5581 37.5953L19.39 39.2059C20.9697 39.7328 22.6159 40 24.2819 40H36.0625C38.3884 40 40.2812 38.1072 40.2812 35.7812C40.2812 35.2328 40.1763 34.7078 39.985 34.2269C41.7738 33.7384 43.0938 32.0987 43.0938 30.1562C43.0938 29.0772 42.6859 28.0909 42.0166 27.3438C42.6859 26.5966 43.0938 25.6103 43.0938 24.5312C43.0938 23.4522 42.6859 22.4659 42.0166 21.7188ZM12.1562 35.7812C12.1562 36.5566 11.5253 37.1875 10.75 37.1875H3.71875V14.6875H10.75C11.5253 14.6875 12.1562 15.3184 12.1562 16.0938V35.7812ZM36.0625 23.125H38.875C39.6503 23.125 40.2812 23.7559 40.2812 24.5312C40.2812 25.3066 39.6503 25.9375 38.875 25.9375H36.0625C35.2863 25.9375 34.6562 26.5675 34.6562 27.3438C34.6562 28.12 35.2863 28.75 36.0625 28.75H38.875C39.6503 28.75 40.2812 29.3809 40.2812 30.1562C40.2812 30.9316 39.6503 31.5625 38.875 31.5625H36.0625C35.2863 31.5625 34.6562 32.1925 34.6562 32.9688C34.6562 33.745 35.2863 34.375 36.0625 34.375C36.8378 34.375 37.4688 35.0059 37.4688 35.7812C37.4688 36.5566 36.8378 37.1875 36.0625 37.1875H24.2819C22.9187 37.1875 21.5716 36.9691 20.2787 36.5378L14.9688 34.7678V17.3669C17.1747 16.9478 19.3337 15.5509 21.2828 13.2644C23.1859 11.0313 24.7291 8.07063 25.4106 5.34344L25.9103 3.34375H26.2188C27.7694 3.34375 29.0312 4.60563 29.0312 6.15625V7.56156C29.0312 9.44969 28.4406 13.0712 27.685 14.6875H24.8125C24.0362 14.6875 23.4062 15.3175 23.4062 16.0938C23.4062 16.87 24.0362 17.5 24.8125 17.5H38.875C39.6503 17.5 40.2812 18.1309 40.2812 18.9062C40.2812 19.6816 39.6503 20.3125 38.875 20.3125H36.0625C35.2863 20.3125 34.6562 20.9425 34.6562 21.7188C34.6562 22.495 35.2863 23.125 36.0625 23.125Z\"\r\n									fill=\"#FF5A30\" />\r\n							</svg>\r\n							<div class=\"our-core__content-item-box\">\r\n								<h4 class=\"our-core__content-item-title\">\r\n									Quality\r\n								</h4>\r\n								<p class=\"our-core__content-item-text\">\r\n									Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud\r\n									aliquip sunt.\r\n								</p>\r\n							</div>\r\n						</div>\r\n						<div class=\"our-core__content-item\">\r\n							<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\"\r\n								fill=\"none\">\r\n								<g clip-path=\"url(#clip0_80095_1602)\">\r\n									<path\r\n										d=\"M7 44H1.5C0.672 44 0 43.328 0 42.5V25.5C0 24.672 0.672 24 1.5 24C8.512 24 11.776 26.434 11.91 26.538C12.394 26.908 12.608 27.534 12.448 28.122L8.448 42.894C8.272 43.546 7.678 44 7 44ZM3 41H5.852L9.248 28.458C8.202 27.964 6.158 27.228 3 27.044V41Z\"\r\n										fill=\"#FF5A30\" />\r\n									<path\r\n										d=\"M26.0002 48C21.4822 48 13.1542 44.542 6.96221 41.638C6.21221 41.286 5.89021 40.392 6.24221 39.642C6.59221 38.892 7.48821 38.566 8.23621 38.92C16.4762 42.786 22.9522 45 26.0002 45C30.0562 45 39.2642 40.618 44.0902 38.09C43.5342 37.772 42.7062 37.5 41.5002 37.5C39.7402 37.5 37.5702 38.22 35.4722 38.916C34.7902 39.142 34.1102 39.368 33.4362 39.574C31.9522 40.032 30.2002 40.5 28.4982 40.5C24.2842 40.5 18.7202 38.496 18.4862 38.41C17.7062 38.126 17.3042 37.266 17.5882 36.488C17.8722 35.708 18.7342 35.31 19.5102 35.59C19.5622 35.61 24.8142 37.5 28.4982 37.5C29.8102 37.5 31.3562 37.076 32.5562 36.706C33.2082 36.506 33.8662 36.288 34.5242 36.07C36.8482 35.298 39.2502 34.5 41.4962 34.5C46.4542 34.5 47.8322 37.802 47.8882 37.944C48.1702 38.646 47.8822 39.448 47.2202 39.814C46.6202 40.148 32.3142 48 26.0002 48Z\"\r\n										fill=\"#FF5A30\" />\r\n									<path\r\n										d=\"M32.9998 39.6795C32.1718 39.6795 31.4998 39.0075 31.4998 38.1795V37.2795C31.4998 36.0975 30.6578 35.0655 29.4998 34.8295L10.2378 30.8895C9.42776 30.7235 8.90376 29.9315 9.06976 29.1195C9.23576 28.3075 10.0298 27.7895 10.8398 27.9515L30.1018 31.8915C32.6498 32.4115 34.4998 34.6795 34.4998 37.2815V38.1815C34.4998 39.0075 33.8278 39.6795 32.9998 39.6795Z\"\r\n										fill=\"#FF5A30\" />\r\n									<path\r\n										d=\"M36 27.9991C35.8 27.9991 35.602 27.959 35.414 27.879C34.948 27.681 24 22.915 24 13.107V5.07105C24 4.42905 24.408 3.85905 25.018 3.65105L35.518 0.0790469C35.83 -0.0289531 36.17 -0.0289531 36.482 0.0790469L46.982 3.65105C47.592 3.85705 48 4.42705 48 5.07105V13.107C48 22.915 37.052 27.6831 36.586 27.8811C36.398 27.959 36.2 27.9991 36 27.9991ZM27 6.14505V13.107C27 19.803 33.91 23.789 35.998 24.8391C38.082 23.783 45 19.7771 45 13.107V6.14505L36 3.08305L27 6.14505Z\"\r\n										fill=\"#FF5A30\" />\r\n									<path\r\n										d=\"M35.4995 19.0003C35.1035 19.0003 34.7195 18.8423 34.4395 18.5603L30.4395 14.5603C29.8535 13.9743 29.8535 13.0243 30.4395 12.4383C31.0255 11.8523 31.9755 11.8523 32.5615 12.4383L35.3395 15.2163L40.2995 8.60027C40.7915 7.93828 41.7335 7.80227 42.3995 8.30027C43.0615 8.79827 43.1955 9.73827 42.6975 10.4003L36.6975 18.4003C36.4375 18.7483 36.0395 18.9663 35.6035 18.9963C35.5695 19.0003 35.5355 19.0003 35.4995 19.0003Z\"\r\n										fill=\"#FF5A30\" />\r\n								</g>\r\n								<defs>\r\n									<clipPath id=\"clip0_80095_1602\">\r\n										<rect width=\"48\" height=\"48\" fill=\"white\" />\r\n									</clipPath>\r\n								</defs>\r\n							</svg>\r\n							<div class=\"our-core__content-item-box\">\r\n								<h4 class=\"our-core__content-item-title\">\r\n									Safety\r\n								</h4>\r\n								<p class=\"our-core__content-item-text\">\r\n									Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing.\r\n									Minim empor est ea.\r\n								</p>\r\n							</div>\r\n						</div>\r\n						<div class=\"our-core__content-item\">\r\n							<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\"\r\n								fill=\"none\">\r\n								<path\r\n									d=\"M38.0536 2.09001C31.8843 1.44159 26.3377 5.93317 25.6893 12.1024L24.5623 22.8246C24.4812 23.597 25.0415 24.289 25.8139 24.3702L26.2801 24.4192L25.1041 35.6075C24.5638 40.7486 28.3068 45.3708 33.4478 45.9111C38.5889 46.4515 43.2111 42.7085 43.7514 37.5674L44.9274 26.3791L45.3935 26.4281C46.1659 26.5092 46.8579 25.9489 46.9391 25.1765L48.066 14.4543C48.7144 8.28506 44.2229 2.73842 38.0536 2.09001ZM37.7596 4.8871C42.3866 5.37341 45.7553 9.53339 45.2689 14.1603L44.877 17.8898L28.0944 16.1259L28.4864 12.3964C28.9727 7.76947 33.1327 4.40079 37.7596 4.8871ZM27.5064 21.7201L27.8004 18.923L44.583 20.6869L44.289 23.484L27.5064 21.7201ZM40.9543 37.2735C40.5761 40.8722 37.3405 43.4923 33.7418 43.114C30.1431 42.7358 27.523 39.5003 27.9012 35.9015L29.0772 24.7131L42.1303 26.0851L40.9543 37.2735Z\"\r\n									fill=\"#FF5A30\" />\r\n								<path\r\n									d=\"M32.171 40.1218L35.9004 40.5138C36.6728 40.595 37.3648 40.0346 37.446 39.2622C37.5271 38.4899 36.9668 37.7979 36.1944 37.7167L32.465 37.3247C31.6926 37.2435 31.0006 37.8039 30.9194 38.5763C30.8382 39.3487 31.3986 40.0406 32.171 40.1218Z\"\r\n									fill=\"#FF5A30\" />\r\n								<path\r\n									d=\"M9.94716 2.08968C3.77789 2.7381 -0.713682 8.28473 -0.0652657 14.454L1.06168 25.1762C1.14286 25.9486 1.83485 26.5089 2.60722 26.4277L3.0734 26.3787L4.24935 37.5671C4.7897 42.7082 9.41189 46.4511 14.5529 45.9108C19.694 45.3705 23.437 40.7483 22.8966 35.6072L21.7207 24.4188L22.1869 24.3698C22.9592 24.2887 23.5196 23.5967 23.4384 22.8243L22.3115 12.1021C21.6631 5.93284 16.1164 1.44126 9.94716 2.08968ZM3.71178 23.4837L3.4178 20.6866L20.2004 18.9226L20.4943 21.7197L3.71178 23.4837ZM20.0995 35.9012C20.4778 39.4999 17.8577 42.7355 14.259 43.1137C10.6602 43.492 7.42468 40.8719 7.04644 37.2731L5.8705 26.0848L18.9236 24.7128L20.0995 35.9012ZM19.9064 16.1255L3.12381 17.8895L2.73183 14.16C2.24552 9.53306 5.6142 5.37308 10.2411 4.88677C14.8681 4.40046 19.0281 7.76914 19.5144 12.3961L19.9064 16.1255Z\"\r\n									fill=\"#FF5A30\" />\r\n								<path\r\n									d=\"M12.0998 40.5134L15.8292 40.1214C16.6016 40.0402 17.1619 39.3482 17.0808 38.5759C16.9996 37.8035 16.3076 37.2431 15.5352 37.3243L11.8058 37.7163C11.0334 37.7975 10.473 38.4895 10.5542 39.2618C10.6354 40.0342 11.3274 40.5946 12.0998 40.5134Z\"\r\n									fill=\"#FF5A30\" />\r\n							</svg>\r\n							<div class=\"our-core__content-item-box\">\r\n								<h4 class=\"our-core__content-item-title\">\r\n									Comfort\r\n								</h4>\r\n								<p class=\"our-core__content-item-text\">\r\n									Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco\r\n									proident\r\n									ea ad.\r\n								</p>\r\n							</div>\r\n						</div>\r\n					</div>\r\n					<div class=\"our-core__question-form question-form\">\r\n						<h2 class=\"question-form__title\">\r\n							Want to know more? Ask us a question:\r\n						</h2>\r\n						<form class=\"question-form__body\" id=\"questionForm\">\r\n							<div class=\"question-form__field\" data-error-text=\"Please use only letters\">\r\n								<label class=\"question-form__label label\" for=\"qustionName\">Name</label>\r\n								<input class=\"question-form__input input\" data-typeCheck=\"letters\" data-required=\"true\"\r\n									type=\"text\" id=\"qustionName\" name=\"qustionName\" placeholder=\"Your name\"\r\n									autocomplete=\"name\">\r\n							</div>\r\n\r\n							<div class=\"question-form__field\" data-error-text=\"Please use only numbers\">\r\n								<label class=\"question-form__label label\" for=\"questionPhone\">Phone</label>\r\n								<input class=\"question-form__input input\" data-typeCheck=\"numbers\" data-required=\"true\"\r\n									type=\"text\" id=\"questionPhone\" name=\"questionPhone\" placeholder=\"Your phone number\"\r\n									autocomplete=\"tel\">\r\n							</div>\r\n\r\n							<div class=\"question-form__field width\" data-error-text=\"Ask your qustion\">\r\n								<label class=\"question-form__label label\" for=\"questionMessage\">Message</label>\r\n								<input class=\"question-form__input input\" data-required=\"true\" type=\"text\"\r\n									id=\"questionMessage\" name=\"questionMessage\" placeholder=\"Your message\"></input>\r\n							</div>\r\n\r\n							<button class=\"question-form__btn solid-button\" type=\"submit\">Send</button>\r\n\r\n							<div id=\"questionSuccess\" class=\"success-block qustion-success\">\r\n								<div>\r\n									<h5>Congratulations!</h5>\r\n									<p data-success-text=\"Please expect a call from our consultant soon\">\r\n									</p>\r\n								</div>\r\n								<button id=\"questionClose\" class=\"solid-button\" type=\"submit\">Great!</button>\r\n							</div>\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</section>\r\n			<section class=\"our-service grid \">\r\n				<img class=\"image-adaptive\" id=\"ourServicesBg\" alt=\"Pretty background\">\r\n				<div class=\"our-service__body invisible center\">\r\n					<div class=\"our-service__title title-block\">\r\n						<h2 class=\"title-block__title\">Our services</h2>\r\n						<h4 class=\"title-block__subtitle\">\r\n							Createx Construction Bureau is a construction giant with a full range of construction\r\n							services.\r\n						</h4>\r\n					</div>\r\n					<div class=\"our-service__content\">\r\n						<a href=\"#\" class=\"our-service__item\">\r\n							<img id=\"service-one\" class=\"image-adaptive\" alt=\"\">\r\n							<div class=\"our-service__item-box\" id=\"box\">\r\n								<svg class=\"our-service__item-box-svg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"53\"\r\n									height=\"52\" viewBox=\"0 0 53 52\">\r\n									<g clip-path=\"url(#clip0_80105_2078)\">\r\n										<path\r\n											d=\"M50.9766 27.5234C51.8179 27.5234 52.5 26.8413 52.5 26V14.625C52.5 13.7837 51.8179 13.1016 50.9766 13.1016C49.9146 13.1016 29.168 13.1016 28.0234 13.1016V3.25C28.0234 2.40866 27.3413 1.72656 26.5 1.72656H10.25C9.40866 1.72656 8.72656 2.40866 8.72656 3.25V13.1016H2.02344C1.18209 13.1016 0.5 13.7837 0.5 14.625V26C0.5 26.8413 1.18209 27.5234 2.02344 27.5234H8.72656V35.8516H2.02344C1.18209 35.8516 0.5 36.5337 0.5 37.375V48.75C0.5 49.5913 1.18209 50.2734 2.02344 50.2734H50.9766C51.8179 50.2734 52.5 49.5913 52.5 48.75V37.375C52.5 36.5337 51.8179 35.8516 50.9766 35.8516H44.2734V27.5234H50.9766ZM49.4531 24.4766C47.8232 24.4766 37.7597 24.4766 36.1484 24.4766V16.1484H49.4531V24.4766ZM33.1016 24.4766C31.5059 24.4766 21.5046 24.4766 19.8984 24.4766V16.1484H33.1016V24.4766ZM11.7734 4.77344H24.9766V13.1016C23.3809 13.1016 13.3796 13.1016 11.7734 13.1016V4.77344ZM3.54688 24.4766V16.1484H16.8516V24.4766C15.2396 24.4766 5.17645 24.4766 3.54688 24.4766ZM11.7734 27.5234H24.9766V35.8516C23.3809 35.8516 13.3796 35.8516 11.7734 35.8516V27.5234ZM3.54688 38.8984H16.8516V47.2266H3.54688V38.8984ZM19.8984 38.8984H33.1016V47.2266H19.8984V38.8984ZM49.4531 38.8984V47.2266H36.1484V38.8984H49.4531ZM41.2266 35.8516C39.6309 35.8516 29.6296 35.8516 28.0234 35.8516V27.5234H41.2266V35.8516Z\" />\r\n									</g>\r\n									<defs>\r\n										<clipPath id=\"clip0_80105_2078\">\r\n											<rect width=\"52\" height=\"52\" fill=\"white\" transform=\"translate(0.5)\" />\r\n										</clipPath>\r\n									</defs>\r\n								</svg>\r\n								<h5 class=\"our-service__item-box-title\">Construction</h5>\r\n							</div>\r\n						</a>\r\n						<a href=\"#\" class=\"our-service__item\">\r\n							<img id=\"service-two\" class=\"image-adaptive\" alt=\"\">\r\n							<div class=\"our-service__item-box\">\r\n								<svg class=\"our-service__item-box-svg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"53\"\r\n									height=\"52\" viewBox=\"0 0 53 52\">\r\n									<g clip-path=\"url(#clip0_80105_1786)\">\r\n										<path\r\n											d=\"M46.4062 3.14844C44.1552 3.14844 42.1854 4.37521 41.1303 6.19531H2.02344C1.18209 6.19531 0.5 6.87741 0.5 7.71875V47.3281C0.5 48.1695 1.18209 48.8516 2.02344 48.8516H46.4062C49.7663 48.8516 52.5 46.1179 52.5 42.7578V9.24219C52.5 5.88209 49.7663 3.14844 46.4062 3.14844ZM46.4062 45.8047C45.8103 45.8047 4.1011 45.8047 3.54688 45.8047V9.24219H40.3125V42.7578C40.3125 43.5992 40.9946 44.2812 41.8359 44.2812C42.6773 44.2812 43.3594 43.5992 43.3594 42.7578C43.3594 41.0778 44.7262 39.7109 46.4062 39.7109C48.0863 39.7109 49.4531 41.0778 49.4531 42.7578C49.4531 44.4379 48.0863 45.8047 46.4062 45.8047ZM49.4531 37.4818C48.5563 36.9619 47.5153 36.6641 46.4062 36.6641C45.2972 36.6641 44.2562 36.9619 43.3594 37.4818V9.24219C43.3594 7.56214 44.7262 6.19531 46.4062 6.19531C48.0863 6.19531 49.4531 7.56214 49.4531 9.24219V37.4818Z\" />\r\n										<path\r\n											d=\"M35.6406 12.2891H8.21875C7.37741 12.2891 6.69531 12.9712 6.69531 13.8125V41.2344C6.69531 42.0757 7.37741 42.7578 8.21875 42.7578H23.4531C23.8572 42.7578 24.2446 42.5972 24.5303 42.3115C24.8161 42.0259 24.9766 41.6384 24.9766 41.2344V38.1875C24.9766 36.2013 26.2501 34.507 28.0234 33.8782V41.2344C28.0234 42.0757 28.7055 42.7578 29.5469 42.7578H35.6406C36.482 42.7578 37.1641 42.0757 37.1641 41.2344V13.8125C37.1641 12.9712 36.482 12.2891 35.6406 12.2891ZM34.1172 39.7109H31.0703V32.0938C31.0703 31.2524 30.3882 30.5703 29.5469 30.5703C25.3468 30.5703 21.9297 33.9874 21.9297 38.1875V39.7109H9.74219V30.5703H15.8359V35.1406C15.8359 35.982 16.518 36.6641 17.3594 36.6641C18.2007 36.6641 18.8828 35.982 18.8828 35.1406V29.0469C18.8828 28.2055 18.2007 27.5234 17.3594 27.5234H9.74219V15.3359H18.8828V21.4297H14.3125C13.4712 21.4297 12.7891 22.1118 12.7891 22.9531C12.7891 23.7945 13.4712 24.4766 14.3125 24.4766H20.4062H26.5C27.3413 24.4766 28.0234 23.7945 28.0234 22.9531C28.0234 22.1118 27.3413 21.4297 26.5 21.4297H21.9297V15.3359H34.1172V39.7109Z\" />\r\n									</g>\r\n									<defs>\r\n										<clipPath id=\"clip0_80105_1786\">\r\n											<rect width=\"52\" height=\"52\" fill=\"white\" transform=\"translate(0.5)\" />\r\n										</clipPath>\r\n									</defs>\r\n								</svg>\r\n								<h5 class=\"our-service__item-box-title\">Project Development</h5>\r\n							</div>\r\n						</a>\r\n						<a href=\"#\" class=\"our-service__item\">\r\n							<img id=\"service-three\" class=\"image-adaptive\" alt=\"\">\r\n							<div class=\"our-service__item-box\">\r\n								<svg class=\"our-service__item-box-svg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"53\"\r\n									height=\"52\" viewBox=\"0 0 53 52\">\r\n									<g clip-path=\"url(#clip0_80105_1695)\">\r\n										<path\r\n											d=\"M11.2656 36.6641C8.74555 36.6641 6.69531 38.7143 6.69531 41.2344C6.69531 43.7544 8.74555 45.8047 11.2656 45.8047C13.7857 45.8047 15.8359 43.7544 15.8359 41.2344C15.8359 38.7143 13.7857 36.6641 11.2656 36.6641ZM11.2656 42.7578C10.4256 42.7578 9.74219 42.0744 9.74219 41.2344C9.74219 40.3944 10.4256 39.7109 11.2656 39.7109C12.1056 39.7109 12.7891 40.3944 12.7891 41.2344C12.7891 42.0744 12.1056 42.7578 11.2656 42.7578Z\" />\r\n										<path\r\n											d=\"M49.7504 30.9497C50.7897 29.5433 50.9811 27.582 50.0361 25.9454L43.9455 15.2945C42.8919 13.4696 40.6701 12.6369 38.6882 13.1667C39.1102 11.2698 38.2823 9.23477 36.5124 8.21295L25.9584 2.11961C24.4511 1.24922 22.6489 1.33839 21.2628 2.19568C20.4596 0.880141 19.0104 0 17.3594 0H5.07031C2.55024 0 0.5 2.05024 0.5 4.57031C0.5 5.62707 0.5 46.2132 0.5 47.4297C0.5 49.9498 2.55024 52 5.07031 52C6.25382 52 42.1374 52 47.9297 52C50.4498 52 52.5 49.9498 52.5 47.4297V35.1406C52.5 33.2675 51.3669 31.6547 49.7504 30.9497ZM18.8828 47.4297C18.8828 48.2697 18.1994 48.9531 17.3594 48.9531H5.07031C4.23029 48.9531 3.54688 48.2697 3.54688 47.4297C3.54688 46.7337 3.54688 34.2857 3.54688 33.6172H18.8828V47.4297ZM18.8828 30.5703H3.54688V18.2812H18.8828V30.5703ZM18.8828 15.2344H3.54688V4.57031C3.54688 3.73029 4.23029 3.04688 5.07031 3.04688H17.3594C18.1994 3.04688 18.8828 3.73029 18.8828 4.57031V15.2344ZM21.9297 6.04988L22.3533 5.31609C22.7736 4.58839 23.7073 4.33814 24.4349 4.75831L34.989 10.8516C35.7167 11.2718 35.9668 12.2056 35.5456 12.9353L33.7853 15.9951C33.7412 16.0602 33.7016 16.1278 33.6683 16.1984L21.9297 36.6026V6.04988ZM21.9297 42.7126L36.171 17.9581L39.1156 16.258C39.8621 15.8271 40.8859 16.0888 41.3037 16.8125L47.3944 27.4633C47.8156 28.1929 47.57 29.1283 46.8328 29.5539C45.7449 30.1837 23.0011 43.3507 21.9297 43.971V42.7126ZM49.4531 47.4297C49.4531 48.2697 48.7697 48.9531 47.9297 48.9531H21.6677C21.8301 48.4951 21.9212 48.0039 21.9282 47.4926L45.8954 33.6172H47.9297C48.7697 33.6172 49.4531 34.3006 49.4531 35.1406V47.4297Z\" />\r\n									</g>\r\n									<defs>\r\n										<clipPath id=\"clip0_80105_1695\">\r\n											<rect width=\"52\" height=\"52\" fill=\"white\" transform=\"translate(0.5)\" />\r\n										</clipPath>\r\n									</defs>\r\n								</svg>\r\n								<h5 class=\"our-service__item-box-title\">Interior Design</h5>\r\n							</div>\r\n						</a>\r\n						<a href=\"#\" class=\"our-service__item\">\r\n							<img id=\"service-four\" class=\"image-adaptive\" alt=\"\">\r\n							<div class=\"our-service__item-box\">\r\n								<svg class=\"our-service__item-box-svg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"53\"\r\n									height=\"52\" viewBox=\"0 0 53 52\">\r\n									<path\r\n										d=\"M43.3594 4.57031C43.3594 2.05029 41.3091 0 38.7891 0H8.32031C5.80029 0 3.75 2.05029 3.75 4.57031V13.7109C3.75 16.231 5.80029 18.2813 8.32031 18.2813H38.7891C41.3091 18.2813 43.3594 16.231 43.3594 13.7109V12.1875H44.8828C45.7227 12.1875 46.4063 12.8711 46.4063 13.7109V19.8047C46.4063 20.6446 45.7227 21.3281 44.8828 21.3281H26.6016C24.0815 21.3281 22.0313 23.3784 22.0313 25.8984V30.4688H20.5078C19.6664 30.4688 18.9844 31.1507 18.9844 31.9922V38.003L17.4609 44.1952C16.4703 48.1573 19.464 52 23.5547 52C27.6473 52 30.6379 48.1533 29.65 44.2007L28.125 38.003V31.9922C28.125 31.1507 27.443 30.4688 26.6016 30.4688H25.0781V25.8984C25.0781 25.0586 25.7617 24.375 26.6016 24.375H44.8828C47.4028 24.375 49.4531 22.3247 49.4531 19.8047V13.7109C49.4531 11.1909 47.4028 9.14063 44.8828 9.14063H43.3594V4.57031ZM25.0781 33.5156V36.6641H22.0313V33.5156H25.0781ZM23.5547 48.9531C21.456 48.9531 19.9044 46.9834 20.4182 44.9287L21.702 39.7109H25.4074L26.6924 44.9343C27.2026 46.9746 25.6609 48.9531 23.5547 48.9531ZM8.32031 3.04688H38.7891C39.6289 3.04688 40.3125 3.73044 40.3125 4.57031V6.09375H35.7422C34.2616 6.09375 32.3684 6.64838 30.1761 7.29028C27.2149 8.15753 23.859 9.14063 20.5078 9.14063C17.2412 9.14063 14.9381 8.18649 12.9061 7.34503C11.3525 6.70154 9.88541 6.09375 8.32031 6.09375H6.79688V4.57031C6.79688 3.73044 7.48044 3.04688 8.32031 3.04688ZM40.3125 13.7109C40.3125 14.5508 39.6289 15.2344 38.7891 15.2344H8.32031C7.48044 15.2344 6.79688 14.5508 6.79688 13.7109V9.14063H8.32031C9.27921 9.14063 10.3654 9.59052 11.7401 10.1598C13.9209 11.0632 16.6349 12.1875 20.5078 12.1875C24.2962 12.1875 28.031 11.0933 31.0326 10.2146C32.9179 9.66232 34.6988 9.14063 35.7422 9.14063H40.3125V13.7109Z\" />\r\n								</svg>\r\n								<h5 class=\"our-service__item-box-title\">Repairs</h5>\r\n							</div>\r\n						</a>\r\n					</div>\r\n					<div class=\"our-service__box view-more-block\">\r\n						<p class=\"view-more-block__title\">\r\n							Learn more about our services\r\n						</p>\r\n						<a class=\"view-more-block__link solid-button\" href=\"#\">\r\n							view services\r\n						</a>\r\n					</div>\r\n				</div>\r\n			</section>\r\n			<section class=\"our-work grid \">\r\n				<div class=\"our-work__body invisible center\">\r\n					<div class=\"our-work__body-top\">\r\n						<div class=\"our-work__title title-block\">\r\n							<h2 class=\"title-block__title\">\r\n								Browse our selected projects and learn more about our work\r\n							</h2>\r\n						</div>\r\n						<div class=\"our-work__buttons\">\r\n							<button type=\"button\" id=\"our-work-go-left\" class=\"arrow\">\r\n								<img src=\"assets/vendors/arrow-left.svg\" alt=\"go left\">\r\n							</button>\r\n							<button type=\"button\" id=\"our-work-go-right\" class=\"arrow\">\r\n								<img src=\"assets/vendors/arrow-right.svg\" alt=\"go rigth\">\r\n							</button>\r\n						</div>\r\n					</div>\r\n					<div class=\"our-work__content\" id=\"our-work-container\">\r\n\r\n					</div>\r\n					<div class=\"our-work__box view-more-block\">\r\n						<p class=\"view-more-block__title\">\r\n							Explore all our works\r\n						</p>\r\n						<a class=\"view-more-block__link solid-button\" href=\"#\">\r\n							view portfolio\r\n						</a>\r\n					</div>\r\n				</div>\r\n			</section>\r\n			<section class=\"supported grid \">\r\n				<div class=\"supported__body invisible center\">\r\n					<div class=\"supported__title title-block\">\r\n						<h2 class=\"title-block__title\">\r\n							Supported by 12+ partners\r\n						</h2>\r\n					</div>\r\n					<div class=\"supported__clients\">\r\n						<img src=\"assets/vendors/Support-1.svg\" alt=\"Client one\">\r\n						<img src=\"assets/vendors/Support-2.svg\" alt=\"Client two\">\r\n						<img src=\"assets/vendors/Support-3.svg\" alt=\"Client three\">\r\n						<img src=\"assets/vendors/Support-4.svg\" alt=\"Client four\">\r\n						<img src=\"assets/vendors/Support-5.svg\" alt=\"Client six\">\r\n						<img src=\"assets/vendors/Support-6.svg\" alt=\"Client seven\">\r\n					</div>\r\n					<div class=\"supported__content\">\r\n						<div class=\"supported__content-box\">\r\n							<div class=\"supported__content-box-title title-block\">\r\n								<h2 class=\"title-block__title\">\r\n									What our clients are saying\r\n								</h2>\r\n							</div>\r\n							<div class=\"supported__content-opinion opinion\" id=\"opinion\">\r\n								<div class=\"opinion__img\">\r\n									<img class=\"image-adaptive\" id=\"opinionBoxImg\" alt=\"some face\">\r\n								</div>\r\n								<p class=\"opinion__text\" id=\"opinionText\">\r\n								</p>\r\n								<div class=\"opinion__bottom\">\r\n									<div class=\"opinion__bottom-user\">\r\n										<h3 class=\"opinion__user-name\" id=\"opinionUserName\">\r\n										</h3>\r\n										<div class=\"opinion__user-work\" id=\"opinionUserWork\">\r\n											<span id=\"opinionUserJob\"></span>,\r\n											<span id=\"opinionUserPosition\"></span>\r\n										</div>\r\n									</div>\r\n									<div class=\"opinion__bottom-buttons\">\r\n										<button type=\"button\" class=\"arrow\" id=\"opinionToLeft\">\r\n											<img src=\"assets/vendors/arrow-left.svg\" alt=\"go left\">\r\n										</button>\r\n										<button type=\"button\" class=\"arrow\" id=\"opinionToRight\">\r\n											<img src=\"assets/vendors/arrow-right.svg\" alt=\"go left\">\r\n										</button>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n						<div class=\"supported__content-image\">\r\n							<img id=\"supportBoxBg\" class=\"image-adaptive\" alt=\"Two men shaking hands\">\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</section>\r\n			<section class=\"achievement grid \">\r\n				<div class=\"achievement__body  center\">\r\n					<div class=\"achievement__title title-block\">\r\n						<h2 class=\"title-block__title\">\r\n							Some facts and figures\r\n						</h2>\r\n					</div>\r\n					<div class=\"achievement__content \" id=\"progressBox\">\r\n						<div class=\"achievement__item progress\">\r\n							<div class=\"progress__wrapper yellow\">\r\n								<svg class=\"progress__ring\">\r\n									<circle id=\"progressRingClients\" style class=\"progress__circle yellow__stroke\"\r\n										cx=\"75\" cy=\"75\" r=\"72\" />\r\n								</svg>\r\n								<span>98%</span>\r\n							</div>\r\n							<h4 class=\"progress__name\">\r\n								Totally satisfied clients\r\n							</h4>\r\n						</div>\r\n\r\n						<div class=\"achievement__item progress\">\r\n							<div class=\"progress__wrapper purple\">\r\n								<svg class=\"progress__ring \">\r\n									<circle id=\"progressRingExp\" class=\"progress__circle purple__stroke\" cx=\"75\" cy=\"75\"\r\n										r=\"72\" />\r\n								</svg>\r\n								<span>20</span>\r\n							</div>\r\n							<h4 class=\"progress__name\">\r\n								Years of experience\r\n							</h4>\r\n						</div>\r\n\r\n						<div class=\"achievement__item progress\">\r\n							<div class=\"progress__wrapper blue\">\r\n								<svg class=\"progress__ring\">\r\n									<circle id=\"progressRingHours\" class=\"progress__circle blue__stroke\" cx=\"75\" cy=\"75\"\r\n										r=\"72\" />\r\n								</svg>\r\n								<span>9452</span>\r\n							</div>\r\n							<h4 class=\"progress__name\">\r\n								Working hours spent\r\n							</h4>\r\n						</div>\r\n\r\n						<div class=\"achievement__item progress\">\r\n							<div class=\"progress__wrapper green\">\r\n								<svg class=\"progress__ring\">\r\n									<circle id=\"progressRingProjects\" class=\"progress__circle green__stroke\" cx=\"75\"\r\n										cy=\"75\" r=\"72\" />\r\n								</svg>\r\n								<span>100%</span>\r\n							</div>\r\n							<h4 class=\"progress__name\">\r\n								Succeeded projects\r\n							</h4>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</section>\r\n			<section class=\"recent grid \">\r\n				<div class=\"recent__body  invisible center\">\r\n					<div class=\"recent__title title-block\">\r\n						<h2 class=\"title-block__title\">\r\n							Recent news\r\n						</h2>\r\n					</div>\r\n					<div class=\"recent__content\" id=\"recentBox\">\r\n					</div>\r\n					<div class=\"recent__box view-more-block\">\r\n						<p class=\"view-more-block__title\">\r\n							Explore all our news posts\r\n						</p>\r\n						<a class=\"view-more-block__link solid-button\" href=\"#\">\r\n							View all news\r\n						</a>\r\n					</div>\r\n				</div>\r\n			</section>\r\n		</main>\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./pages/templates/discuss.hbs */ "./src/pages/templates/discuss.hbs"),depth0,{"name":"discuss","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./pages/templates/footer.hbs */ "./src/pages/templates/footer.hbs"),depth0,{"name":"footer","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./pages/templates/goTop.hbs */ "./src/pages/templates/goTop.hbs"),depth0,{"name":"goTop","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	</div>\r\n</body>\r\n\r\n\r\n</html>";
},"usePartial":true,"useData":true});

/***/ }),

/***/ "./src/pages/templates/discuss.hbs":
/*!*****************************************!*\
  !*** ./src/pages/templates/discuss.hbs ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"discuss grid\">\r\n	<section class=\"discuss-cover\">\r\n		<img id=\"discussImage\" class=\"image-adaptive\" alt=\"Image not found...\">\r\n	</section>\r\n	<div class=\"discuss__box\">\r\n		<div class=\"discuss__body\">\r\n			<h2 class=\"discuss__title\">\r\n				A quick way to discuss details\r\n			</h2>\r\n			<form class=\"discuss__form\" id=\"discussForm\">\r\n				<div class=\"discuss__form-field\" data-error-text=\"Please use only letters\">\r\n					<label class=\"discuss__label label\" for=\"name\">Name*</label>\r\n					<input class=\"discuss__input input\" data-typeCheck=\"letters\" data-required=\"true\" type=\"text\"\r\n						id=\"name\" name=\"name\" placeholder=\"Your name\" autocomplete=\"name\">\r\n				</div>\r\n\r\n				<div class=\"discuss__form-field\" data-error-text=\"Please use only numbers\">\r\n					<label class=\"discuss__label label\" for=\"phone\">Phone*</label>\r\n					<input class=\"discuss__input input\" data-typeCheck=\"numbers\" data-required=\"true\" type=\"text\"\r\n						id=\"phone\" name=\"phone\" placeholder=\"Your phone number\" autocomplete=\"tel\">\r\n				</div>\r\n\r\n				<div class=\"discuss__form-field\" data-error-text=\"Please enter valid Email(example@mail.com)\">\r\n					<label class=\"discuss__label label\" for=\"email\">Email:</label>\r\n					<input class=\"discuss__input input\" data-typeCheck=\"email\" type=\"text\" id=\"email\" name=\"email\"\r\n						placeholder=\"Your working email\" autocomplete=\"email\">\r\n				</div>\r\n\r\n				<div class=\"discuss__form-field\" data-error-text=\"Ask your qustion\">\r\n					<label class=\"discuss__label label\" for=\"message\">Message*</label>\r\n					<textarea class=\"discuss__textarea input\" data-required=\"true\" id=\"message\" name=\"message\"\r\n						placeholder=\"Your message\"></textarea>\r\n				</div>\r\n\r\n				<div class=\"discuss__form-field-checkbox\"\r\n					data-error-text=\"&dArr;	This agreement allows us to contact you\">\r\n					<label for=\"agreement\" class=\"discuss__label\">\r\n						I agree to receive communications from Createx Construction Bureau.\r\n					</label>\r\n					<input class=\"discuss__checkbox\" type=\"checkbox\" id=\"agreement\" name=\"agreement\">\r\n					<span class=\"discuss__custom-checkbox\"></span>\r\n				</div>\r\n\r\n				<button class=\"discuss__btn regular-button\" type=\"submit\">Send request</button>\r\n			</form>\r\n			<div id=\"discussSuccess\" class=\"success-block\">\r\n				<h5>Congratulations!</h5>\r\n				<p\r\n					data-success-text=\"Your question has been sent to our consultant, please wait for the answer to your contact details.\">\r\n				</p>\r\n				<button id=\"discussClose\" class=\"regular-button\">Great!</button>\r\n			</div>\r\n		</div>\r\n	</div>\r\n\r\n</div>";
},"useData":true});

/***/ }),

/***/ "./src/pages/templates/footer.hbs":
/*!****************************************!*\
  !*** ./src/pages/templates/footer.hbs ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer class=\"footer grid\">\r\n	<div class=\"footer__box\">\r\n		<div class=\"footer__box-head head\">\r\n			<div class=\"head__description\">\r\n				<div class=\"head__description-social\">\r\n					<img src=\"assets/vendors/logo-white.svg\" alt=\"CREATEX\">\r\n					<ul class=\"head__description-list\">\r\n						<li>\r\n							<a href=\"\" class=\"head__description-link \">\r\n								<svg class=\"svg-social whatsapp\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n									xmlns=\"http://www.w3.org/2000/svg\">\r\n									<g opacity=\"0.6\">\r\n										<path\r\n											d=\"M22 11.7424C22 17.1231 17.6047 21.4849 12.1818 21.4849C10.4602 21.4849 8.84289 21.0449 7.43578 20.2727L2 22L3.77222 16.7729C2.87822 15.3049 2.36333 13.5831 2.36333 11.7424C2.36333 6.36178 6.75911 2 12.1818 2C17.6051 2 22 6.36178 22 11.7424ZM12.1818 3.55156C7.62978 3.55156 3.92711 7.226 3.92711 11.7424C3.92711 13.5347 4.51133 15.1944 5.49956 16.5447L4.46822 19.5867L7.64044 18.5784C8.94378 19.4342 10.5051 19.9333 12.182 19.9333C16.7333 19.9333 20.4367 16.2593 20.4367 11.7429C20.4367 7.22644 16.7336 3.55156 12.1818 3.55156ZM17.1398 13.9862C17.0791 13.8869 16.9189 13.8269 16.6784 13.7076C16.4376 13.5882 15.254 13.0102 15.034 12.9309C14.8133 12.8513 14.6524 12.8113 14.4922 13.0502C14.332 13.2893 13.8707 13.8269 13.73 13.9862C13.5896 14.146 13.4493 14.166 13.2084 14.0464C12.968 13.9271 12.1927 13.6747 11.2733 12.8613C10.558 12.2284 10.0749 11.4471 9.93444 11.2078C9.79422 10.9689 9.91978 10.8398 10.04 10.7209C10.1484 10.6138 10.2809 10.442 10.4011 10.3027C10.5218 10.1631 10.5618 10.0638 10.6416 9.90422C10.7222 9.74489 10.682 9.60556 10.6216 9.48578C10.5616 9.36644 10.0798 8.19133 9.87933 7.71311C9.67889 7.23533 9.47867 7.31489 9.338 7.31489C9.19778 7.31489 9.03711 7.29489 8.87667 7.29489C8.71622 7.29489 8.45533 7.35467 8.23467 7.59356C8.01422 7.83267 7.39267 8.41044 7.39267 9.58533C7.39267 10.7604 8.25467 11.8958 8.37533 12.0549C8.49556 12.214 10.0398 14.7038 12.4864 15.66C14.9333 16.6158 14.9333 16.2969 15.3747 16.2569C15.8156 16.2171 16.7982 15.6793 16.9996 15.122C17.1996 14.5638 17.1996 14.0858 17.1398 13.9862Z\" />\r\n									</g>\r\n								</svg>\r\n							</a>\r\n						</li>\r\n						<li>\r\n							<a href=\"\" class=\"head__description-link \">\r\n								<svg class=\"svg-social messanger\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n									xmlns=\"http://www.w3.org/2000/svg\">\r\n									<g opacity=\"0.6\">\r\n										<path\r\n											d=\"M12 2C6.4775 2 2 6.145 2 11.2587C2 14.1725 3.45375 16.7712 5.72625 18.4688V22L9.13125 20.1313C10.04 20.3825 11.0025 20.5187 12 20.5187C17.5225 20.5187 22 16.3737 22 11.26C22 6.14625 17.5225 2 12 2ZM12.9937 14.4688L10.4475 11.7525L5.47875 14.4688L10.945 8.66625L13.5538 11.3825L18.46 8.66625L12.9937 14.4688Z\" />\r\n									</g>\r\n								</svg>\r\n							</a>\r\n						</li>\r\n						<li>\r\n							<a href=\"\" class=\"head__description-link \">\r\n								<svg class=\"svg-social  facebook\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n									xmlns=\"http://www.w3.org/2000/svg\">\r\n									<g opacity=\"0.6\">\r\n										<path\r\n											d=\"M17.5628 1.00458L14.7856 1C11.6654 1 9.64903 3.12509 9.64903 6.41423V8.91055H6.85662C6.61532 8.91055 6.41992 9.1115 6.41992 9.35937V12.9763C6.41992 13.2241 6.61554 13.4249 6.85662 13.4249H9.64903V22.5514C9.64903 22.7993 9.84443 23 10.0857 23H13.729C13.9703 23 14.1657 22.799 14.1657 22.5514V13.4249H17.4307C17.672 13.4249 17.8674 13.2241 17.8674 12.9763L17.8688 9.35937C17.8688 9.24036 17.8226 9.12638 17.7409 9.04215C17.6591 8.95793 17.5477 8.91055 17.4318 8.91055H14.1657V6.79439C14.1657 5.77728 14.4017 5.26094 15.6915 5.26094L17.5624 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8037 1.00504 17.5628 1.00458Z\" />\r\n									</g>\r\n								</svg>\r\n							</a>\r\n						</li>\r\n						<li>\r\n							<a href=\"\" class=\"head__description-link \">\r\n								<svg class=\"svg-social twitter\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n									xmlns=\"http://www.w3.org/2000/svg\">\r\n									<g opacity=\"0.6\">\r\n										<path\r\n											d=\"M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z\" />\r\n									</g>\r\n								</svg>\r\n							</a>\r\n						</li>\r\n						<li>\r\n							<a href=\"\" class=\"head__description-link \">\r\n								<svg class=\"svg-social youtube\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n									xmlns=\"http://www.w3.org/2000/svg\">\r\n									<g opacity=\"0.6\">\r\n										<path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n											d=\"M21.3903 4.11358C22.4182 4.39044 23.2288 5.20086 23.5055 6.22899C24.0197 8.10691 23.9999 12.0213 23.9999 12.0213C23.9999 12.0213 23.9999 15.9158 23.5057 17.7939C23.2288 18.8218 22.4184 19.6324 21.3903 19.9091C19.5122 20.4035 12 20.4035 12 20.4035C12 20.4035 4.50731 20.4035 2.60961 19.8895C1.58148 19.6127 0.771054 18.802 0.4942 17.7741C0 15.9158 0 12.0015 0 12.0015C0 12.0015 0 8.10691 0.4942 6.22899C0.770871 5.20104 1.60125 4.37066 2.60943 4.09399C4.48753 3.59961 11.9998 3.59961 11.9998 3.59961C11.9998 3.59961 19.5122 3.59961 21.3903 4.11358ZM15.8549 12.0016L9.60788 15.5996V8.40355L15.8549 12.0016Z\" />\r\n									</g>\r\n								</svg>\r\n							</a>\r\n						</li>\r\n					</ul>\r\n				</div>\r\n				<p class=\"head__description-text\">\r\n					Createx Construction Bureau has been successfully operating in the USA construction market since\r\n					2000. We are proud to offer you quality construction and exemplary service. Our mission is to\r\n					set the highest standards for construction sphere.\r\n				</p>\r\n			</div>\r\n			<div class=\"head__subscribe\">\r\n				<h4 class=\"head__subscribe-title\">\r\n					Let’s stay in touch\r\n				</h4>\r\n				<div class=\"head__subscribe-area\">\r\n					<input class=\"head__subscribe-input\" name=\"subscribe-input\" placeholder=\"Enter your Email\"\r\n						type=\"text\">\r\n					<button class=\"head__subscribe-btn regular-button\">subscribe</button>\r\n				</div>\r\n				<p class=\"head__subscribe-note\">\r\n					*Subscribe to our newsletter to receive communications and early updates from Createx\r\n					Construction Bureau.\r\n				</p>\r\n			</div>\r\n		</div>\r\n		<div class=\"footer__box-bottom bottom\">\r\n			<div class=\"bottom__column\">\r\n				<h4 class=\"bottom__column-title\">\r\n					HEAD OFFICE\r\n				</h4>\r\n				<ul class=\"bottom__column-list\">\r\n					<li>\r\n						<a href=\"https://maps.app.goo.gl/9acEZNNAnFxfDRNr8\" target=\"_blank\"\r\n							class=\"bottom__column-link link-hover open-iframe\">\r\n							<span> Address: </span>15200 Roger Balet, Uruguay, Atlantida\r\n							<iframe class=\"close-iframe\"\r\n								src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26221.670271890172!2d-55.778821186925384!3d-34.7629280093892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959ff53a7d09b749%3A0xf1a0b86c0ebe409e!2zMTUyMDAg0JDRgtC70LDQvdGC0LjQtNCwLCDQmtCw0L3QtdC70L7QvdC10YEsINCj0YDRg9Cz0LLQsNC5!5e0!3m2!1sru!2spl!4v1699364616801!5m2!1sru!2spl\"\r\n								loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\r\n						</a>\r\n					</li>\r\n					<li>\r\n						<a href=\"tel:+14055550128\" class=\"bottom__column-link link-hover\">\r\n							<span>Call: </span>(405) 555-0128\r\n						</a>\r\n					</li>\r\n					<li>\r\n						<a href=\"mailto:dmitriivitenko@gmail.com\" class=\"bottom__column-link link-hover\">\r\n							<span>Email: </span>hello@createx.com\r\n						</a>\r\n					</li>\r\n				</ul>\r\n			</div>\r\n			<div class=\"bottom__column\">\r\n				<h4 class=\"bottom__column-title\">\r\n					WHO WE ARE\r\n				</h4>\r\n				<ul class=\"bottom__column-list\">\r\n					<li>\r\n						<a href=\"./About.html\" class=\"bottom__column-link link-hover\">\r\n							About Us\r\n						</a>\r\n					</li>\r\n					<li>\r\n						<a href=\"#\" class=\"bottom__column-link link-hover\">\r\n							Available Positions\r\n						</a>\r\n					</li>\r\n					<li>\r\n						<a href=\"./Contacts.html\" class=\"bottom__column-link link-hover\">\r\n							Contacts\r\n						</a>\r\n					</li>\r\n				</ul>\r\n			</div>\r\n			<div class=\"bottom__column\">\r\n				<h4 class=\"bottom__column-title\">\r\n					OUR EXPERIENCE\r\n				</h4>\r\n				<ul class=\"bottom__column-list\">\r\n					<li>\r\n						<a href=\"./Services.html\" class=\"bottom__column-link link-hover\">\r\n							Services\r\n						</a>\r\n					</li>\r\n					<li>\r\n						<a href=\"./Work.html\" class=\"bottom__column-link link-hover\">\r\n							Work\r\n						</a>\r\n					</li>\r\n					<li>\r\n						<a href=\"./News.html\" class=\"bottom__column-link link-hover\">\r\n							News\r\n						</a>\r\n					</li>\r\n				</ul>\r\n			</div>\r\n		</div>\r\n		<p class=\"footer__box-copy\">\r\n			&copy;All rights reserved. Made with &#10084; by Createx Studio\r\n		</p>\r\n	</div>\r\n</footer>";
},"useData":true});

/***/ }),

/***/ "./src/pages/templates/goTop.hbs":
/*!***************************************!*\
  !*** ./src/pages/templates/goTop.hbs ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<button id=\"scrollToTopBtn\" class=\"go-top\">\r\n	<span class=\"go-top__text\">GO TO TOP</span>\r\n	<div class=\"go-top__squer\"></div>\r\n</button>";
},"useData":true});

/***/ }),

/***/ "./src/pages/templates/header.hbs":
/*!****************************************!*\
  !*** ./src/pages/templates/header.hbs ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header class=\"header grid\">\r\n	<div class=\"header__body\">\r\n		<div class=\"header__logo\">\r\n			<a href=\"index.html\">\r\n				<img src=\"./assets/vendors/logo.svg\" alt=\"CREATEX\">\r\n			</a>\r\n		</div>\r\n		<div class=\"burger\" id=\"burgerToggle\">\r\n			<span></span><span></span><span></span>\r\n		</div>\r\n		<nav id=\"burgerMenu\" class=\"header__menu\">\r\n			<ul class=\"header__list\">\r\n				<li>\r\n					<a class=\"header__link link-hover\" href=\"./about.html\">About us</a>\r\n				</li>\r\n				<li>\r\n					<a class=\"header__link link-hover\" href=\"./services.html\">Services</a>\r\n				</li>\r\n				<li>\r\n					<a class=\"header__link link-hover\" href=\"./work.html\">Work</a>\r\n				</li>\r\n				<li>\r\n					<a class=\"header__link link-hover\" href=\"./news.html\">News</a>\r\n				</li>\r\n				<li>\r\n					<a class=\"header__link link-hover\" href=\"./contacts.html\">Contacts</a>\r\n				</li>\r\n			</ul>\r\n		</nav>\r\n		<div class=\"header__contacts\">\r\n			<a href=\"tel:+14055550128\" class=\"header__contact\">\r\n				<div class=\"header__contact-img\">\r\n					<img src=\"./assets/vendors/phone.svg\" alt=\"Phone\">\r\n				</div>\r\n				<div class=\"header__contact-data\">\r\n					<h2 class=\"header__contact-data-title\">Call us</h2>\r\n					<p class=\"header__contact-data-subtitle\">(405) 555-0128</p>\r\n				</div>\r\n			</a>\r\n			<a href=\"mailto:dmitriivitenko1@gmail.com\" class=\"header__contact\">\r\n				<div class=\"header__contact-img\">\r\n					<img src=\"./assets/vendors/chat.svg\" alt=\"Chat\">\r\n				</div>\r\n				<div class=\"header__contact-data\">\r\n					<h2 class=\"header__contact-data-title\">Talk to us</h2>\r\n					<p class=\"header__contact-data-subtitle\">hello@createx.com</p>\r\n				</div>\r\n			</a>\r\n		</div>\r\n	</div>\r\n</header>";
},"useData":true});

/***/ }),

/***/ "./src/assets/images/home-serv-item-0.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/home-serv-item-0.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/home-serv-item-0..jpg";

/***/ }),

/***/ "./src/assets/images/home-serv-item-1.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/home-serv-item-1.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/home-serv-item-1..jpg";

/***/ }),

/***/ "./src/assets/images/home-serv-item-2.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/home-serv-item-2.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/home-serv-item-2..jpg";

/***/ }),

/***/ "./src/assets/images/home-serv-item-3.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/home-serv-item-3.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/home-serv-item-3..jpg";

/***/ }),

/***/ "./src/assets/images/homepage-services.png":
/*!*************************************************!*\
  !*** ./src/assets/images/homepage-services.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/homepage-services..png";

/***/ }),

/***/ "./src/assets/images/homepage-support.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/homepage-support.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/homepage-support..jpg";

/***/ }),

/***/ "./src/scripts/api/getData.mjs":
/*!*************************************!*\
  !*** ./src/scripts/api/getData.mjs ***!
  \*************************************/
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

/***/ "./src/scripts/modules/dateFormatter.mjs":
/*!***********************************************!*\
  !*** ./src/scripts/modules/dateFormatter.mjs ***!
  \***********************************************/
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

/***/ "./src/scripts/modules/progressRing.mjs":
/*!**********************************************!*\
  !*** ./src/scripts/modules/progressRing.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/scripts/modules/showNews.mjs":
/*!******************************************!*\
  !*** ./src/scripts/modules/showNews.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/scripts/modules/showOpinion.mjs":
/*!*********************************************!*\
  !*** ./src/scripts/modules/showOpinion.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/scripts/modules/showPortfolio.mjs":
/*!***********************************************!*\
  !*** ./src/scripts/modules/showPortfolio.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_templates_portfolioCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-templates/portfolioCard */ "./src/scripts/templates/portfolioCard.mjs");

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
        const card = (0,_js_templates_portfolioCard__WEBPACK_IMPORTED_MODULE_0__["default"])(array[index]);
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

/***/ "./src/scripts/modules/sortByDate.mjs":
/*!********************************************!*\
  !*** ./src/scripts/modules/sortByDate.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sortByDate = data => {
  return data.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (!isNaN(dateA) && !isNaN(dateB)) {
      return dateB - dateA;
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortByDate);

/***/ }),

/***/ "./src/scripts/modules/validator.mjs":
/*!*******************************************!*\
  !*** ./src/scripts/modules/validator.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./src/scripts/store/newsStore.mjs":
/*!*****************************************!*\
  !*** ./src/scripts/store/newsStore.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NEWS_STORE: () => (/* binding */ NEWS_STORE),
/* harmony export */   initGetRecentNewsData: () => (/* binding */ initGetRecentNewsData)
/* harmony export */ });
/* harmony import */ var _js_api_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-api/getData */ "./src/scripts/api/getData.mjs");
/* harmony import */ var _js_modules_sortByDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-modules/sortByDate */ "./src/scripts/modules/sortByDate.mjs");


const NEWS_STORE = {
  recentNews: [],
  allNews: []
};
const initGetRecentNewsData = async function () {
  let amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  try {
    const NEWS_API = `http://localhost:4100/news?_sort=date&_order=desc&_limit=${amount}`;
    const DATA = await (0,_js_api_getData__WEBPACK_IMPORTED_MODULE_0__["default"])(NEWS_API);
    NEWS_STORE.recentNews = (0,_js_modules_sortByDate__WEBPACK_IMPORTED_MODULE_1__["default"])(DATA);
  } catch (error) {
    console.error(error);
  }
};


/***/ }),

/***/ "./src/scripts/store/opinionsStore.mjs":
/*!*********************************************!*\
  !*** ./src/scripts/store/opinionsStore.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OPINIONS_STORE: () => (/* binding */ OPINIONS_STORE),
/* harmony export */   initGetOpinionData: () => (/* binding */ initGetOpinionData)
/* harmony export */ });
/* harmony import */ var _js_api_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-api/getData */ "./src/scripts/api/getData.mjs");
/* harmony import */ var _js_modules_sortByDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-modules/sortByDate */ "./src/scripts/modules/sortByDate.mjs");


let OPINIONS_STORE = [];
const initGetOpinionData = async () => {
  try {
    const OPINIONS_API = 'http://localhost:4100/opinions';
    const DATA = await (0,_js_api_getData__WEBPACK_IMPORTED_MODULE_0__["default"])(OPINIONS_API);
    OPINIONS_STORE = (0,_js_modules_sortByDate__WEBPACK_IMPORTED_MODULE_1__["default"])(DATA);
  } catch (error) {
    console.log(error);
  }
};


/***/ }),

/***/ "./src/scripts/store/projectsStore.mjs":
/*!*********************************************!*\
  !*** ./src/scripts/store/projectsStore.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PROJECTS_STORE: () => (/* binding */ PROJECTS_STORE),
/* harmony export */   initGetFilteredData: () => (/* binding */ initGetFilteredData)
/* harmony export */ });
/* harmony import */ var _js_api_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-api/getData */ "./src/scripts/api/getData.mjs");
/* harmony import */ var _js_modules_dateFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-modules/dateFormatter */ "./src/scripts/modules/dateFormatter.mjs");
/* harmony import */ var _js_modules_sortByDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-modules/sortByDate */ "./src/scripts/modules/sortByDate.mjs");



const PROJECTS_STORE = {
  allProjects: [],
  byDateProjects: []
};
const initGetFilteredData = async function (from) {
  let to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  try {
    const FROM_DATE = (0,_js_modules_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.YYYY_MM_DD)(from);
    const TO_DATE = (0,_js_modules_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.setNeededMonth)(to);
    const PROJECTS_API = `http://localhost:4100/projects?date_gte=${TO_DATE}&date_lte=${FROM_DATE}`;
    const DATA = await (0,_js_api_getData__WEBPACK_IMPORTED_MODULE_0__["default"])(PROJECTS_API);
    PROJECTS_STORE.byDateProjects = (0,_js_modules_sortByDate__WEBPACK_IMPORTED_MODULE_2__["default"])(DATA);
  } catch (error) {
    console.error(error);
  }
};


/***/ }),

/***/ "./src/scripts/templates/comments.mjs":
/*!********************************************!*\
  !*** ./src/scripts/templates/comments.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_modules_dateFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-modules/dateFormatter */ "./src/scripts/modules/dateFormatter.mjs");

const dateToStroke = date => (0,_js_modules_dateFormatter__WEBPACK_IMPORTED_MODULE_0__.MM_DD_YYYY)(new Date(date));
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_modules_dateFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-modules/dateFormatter */ "./src/scripts/modules/dateFormatter.mjs");
/* harmony import */ var _js_templates_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-templates/comments */ "./src/scripts/templates/comments.mjs");


const checking = (check, data) => {
  if (check) return (0,_js_templates_comments__WEBPACK_IMPORTED_MODULE_1__["default"])(data);else return null;
};
const dateToStroke = date => (0,_js_modules_dateFormatter__WEBPACK_IMPORTED_MODULE_0__.MM_DD_YYYY)(new Date(date));
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
	  <div class="portfolio-card card">
		<div class="portfolio-card__img">
		  <img class="image-adaptive" src="assets/static-images/portfolio/${item.imageName}" alt="The picture with ${item.name}">
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPortfolioCard);

/***/ }),

/***/ "./src/scripts/templates/progressFrame.mjs":
/*!*************************************************!*\
  !*** ./src/scripts/templates/progressFrame.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_handlebars_runtime_js"], () => (__webpack_require__("./src/scripts/pages/homepage.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=homepage.js.map