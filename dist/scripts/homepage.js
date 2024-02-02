/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/handlers/handleHomepage.js":
/*!************************************************!*\
  !*** ./src/scripts/handlers/handleHomepage.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_homepage_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @images/homepage-services */ "./src/assets/images/homepage-services.png");
/* harmony import */ var _images_homepage_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @images/homepage-support */ "./src/assets/images/homepage-support.jpg");
/* harmony import */ var _js_api_getNewsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-api/getNewsData */ "./src/scripts/api/getNewsData.mjs");
/* harmony import */ var _js_api_getOpinionsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js-api/getOpinionsData */ "./src/scripts/api/getOpinionsData.mjs");
/* harmony import */ var _js_api_getProjectsData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js-api/getProjectsData */ "./src/scripts/api/getProjectsData.mjs");
/* harmony import */ var _js_store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @js-store/store */ "./src/scripts/store/store.mjs");
/* harmony import */ var _js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js-utilities/addBackground */ "./src/scripts/utilities/addBackground.mjs");
/* harmony import */ var _js_utilities_progressRing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @js-utilities/progressRing */ "./src/scripts/utilities/progressRing.mjs");
/* harmony import */ var _js_utilities_showNews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @js-utilities/showNews */ "./src/scripts/utilities/showNews.mjs");
/* harmony import */ var _js_utilities_showOpinion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @js-utilities/showOpinion */ "./src/scripts/utilities/showOpinion.mjs");
/* harmony import */ var _js_utilities_showPortfolio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @js-utilities/showPortfolio */ "./src/scripts/utilities/showPortfolio.mjs");
/* harmony import */ var _js_utilities_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @js-utilities/validator */ "./src/scripts/utilities/validator.mjs");
/* harmony import */ var _js_utilities_videoPlayer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @js-utilities/videoPlayer */ "./src/scripts/utilities/videoPlayer.mjs");













//DATA ACQUISITION==========================================
const todayIs = new Date();
await (0,_js_api_getProjectsData__WEBPACK_IMPORTED_MODULE_4__["default"])(todayIs); //As the second argument can be the Number for the date range
await (0,_js_api_getOpinionsData__WEBPACK_IMPORTED_MODULE_3__["default"])();
await (0,_js_api_getNewsData__WEBPACK_IMPORTED_MODULE_2__["default"])(); //The argument can be the number of news required(3 by default)
//BACKGROUND ADDITION========================================
(0,_js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_6__["default"])('ourServicesBg', _images_homepage_services__WEBPACK_IMPORTED_MODULE_0__);
(0,_js_utilities_addBackground__WEBPACK_IMPORTED_MODULE_6__["default"])('supportBoxBg', _images_homepage_support__WEBPACK_IMPORTED_MODULE_1__);

//WE-ARE=====================================================
const videoBox = document.getElementById('homepageVideoBox');
if (videoBox && _js_utilities_videoPlayer__WEBPACK_IMPORTED_MODULE_12__["default"]) (0,_js_utilities_videoPlayer__WEBPACK_IMPORTED_MODULE_12__["default"])(videoBox);
//OUR-CORE===================================================
const newForm = document.getElementById('questionForm');
const successEl = document.getElementById('questionSuccess');
const closeBtn = document.getElementById('questionClose');
if (newForm) (0,_js_utilities_validator__WEBPACK_IMPORTED_MODULE_11__["default"])(newForm, successEl, closeBtn);
//OUR-WORK===================================================
const PORTFOLIO_DOM_ELEMENTS = {
  array: _js_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].PROJECTS.byDateProjects,
  containerElement: document.getElementById('our-work-container'),
  skipLeft: document.getElementById('our-work-go-left'),
  skipRight: document.getElementById('our-work-go-right')
  /* quantityOfCards: 3 */ //This is an optional option to increase the output cards
};

if (_js_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].PROJECTS.byDateProjects.length > 0) (0,_js_utilities_showPortfolio__WEBPACK_IMPORTED_MODULE_10__["default"])(PORTFOLIO_DOM_ELEMENTS);
//SUPPORTED===================================================
const OPINION_DOM_ELEMENTS = {
  avatar: document.getElementById(`opinionBoxImg`),
  opinion: document.getElementById(`opinionText`),
  name: document.getElementById(`opinionUserName`),
  companyName: document.getElementById(`opinionUserJob`),
  workPositions: document.getElementById(`opinionUserPosition`)
};
if (_js_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].OPINIONS.length > 0) {
  (0,_js_utilities_showOpinion__WEBPACK_IMPORTED_MODULE_9__.initShowOpinion)(OPINION_DOM_ELEMENTS, _js_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].OPINIONS);
  document.getElementById('opinionToLeft').addEventListener('click', () => (0,_js_utilities_showOpinion__WEBPACK_IMPORTED_MODULE_9__.toLeft)(OPINION_DOM_ELEMENTS, _js_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].OPINIONS));
  document.getElementById('opinionToRight').addEventListener('click', () => (0,_js_utilities_showOpinion__WEBPACK_IMPORTED_MODULE_9__.toRight)(OPINION_DOM_ELEMENTS, _js_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].OPINIONS));
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
      (0,_js_utilities_progressRing__WEBPACK_IMPORTED_MODULE_7__["default"])(document.getElementById('progressRingClients'), 98);
      (0,_js_utilities_progressRing__WEBPACK_IMPORTED_MODULE_7__["default"])(document.getElementById('progressRingExp'), 75);
      (0,_js_utilities_progressRing__WEBPACK_IMPORTED_MODULE_7__["default"])(document.getElementById('progressRingHours'), 82);
      (0,_js_utilities_progressRing__WEBPACK_IMPORTED_MODULE_7__["default"])(document.getElementById('progressRingProjects'), 100);
    }, 500);
  }
  ;
};
window.addEventListener('scroll', handleScroll);

//RECENT NEWS===================================================
const RECENT_EL = document.getElementById('recentBox');
if (RECENT_EL) (0,_js_utilities_showNews__WEBPACK_IMPORTED_MODULE_8__["default"])(RECENT_EL, _js_store_store__WEBPACK_IMPORTED_MODULE_5__["default"].NEWS.recentNews);
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

/***/ "./src/scripts/api/getNewsData.mjs":
/*!*****************************************!*\
  !*** ./src/scripts/api/getNewsData.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_store_store_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-store/store.mjs */ "./src/scripts/store/store.mjs");
/* harmony import */ var _js_utilities_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-utilities/getData */ "./src/scripts/utilities/getData.mjs");
/* harmony import */ var _js_utilities_sortByDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js-utilities/sortByDate */ "./src/scripts/utilities/sortByDate.mjs");



const initGetRecentNewsData = async function () {
  let amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  try {
    const NEWS_API = `http://localhost:4100/news?_sort=date&_order=desc&_limit=${amount}`;
    const DATA = await (0,_js_utilities_getData__WEBPACK_IMPORTED_MODULE_1__["default"])(NEWS_API);
    _js_store_store_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].NEWS.recentNews = (0,_js_utilities_sortByDate__WEBPACK_IMPORTED_MODULE_2__["default"])(DATA);
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
/* harmony import */ var _store_store_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store.mjs */ "./src/scripts/store/store.mjs");



const initGetOpinionData = async () => {
  try {
    const OPINIONS_API = 'http://localhost:4100/opinions';
    const DATA = await (0,_js_utilities_getData__WEBPACK_IMPORTED_MODULE_0__["default"])(OPINIONS_API);
    _store_store_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].OPINIONS = (0,_js_utilities_sortByDate__WEBPACK_IMPORTED_MODULE_1__["default"])(DATA);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
    const PROJECTS_API = `http://localhost:4100/projects?date_gte=${TO_DATE}&date_lte=${FROM_DATE}`;
    const DATA = await (0,_js_utilities_getData__WEBPACK_IMPORTED_MODULE_2__["default"])(PROJECTS_API);
    _js_store_store__WEBPACK_IMPORTED_MODULE_0__["default"].PROJECTS.byDateProjects = (0,_js_utilities_sortByDate__WEBPACK_IMPORTED_MODULE_3__["default"])(DATA);
  } catch (error) {
    console.error(error);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initGetFilteredData);

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
    byDateProjects: []
  },
  OPINIONS: {},
  NEWS: {
    recentNews: [],
    allNews: []
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (STORE);

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

/***/ "./src/scripts/utilities/showPortfolio.mjs":
/*!*************************************************!*\
  !*** ./src/scripts/utilities/showPortfolio.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/handlers/handleHomepage.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=homepage.js.map