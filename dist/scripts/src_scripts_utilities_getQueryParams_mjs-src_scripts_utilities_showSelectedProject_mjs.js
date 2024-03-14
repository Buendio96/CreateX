(self["webpackChunkcreatex"] = self["webpackChunkcreatex"] || []).push([["src_scripts_utilities_getQueryParams_mjs-src_scripts_utilities_showSelectedProject_mjs"],{

/***/ "./src/pages/templates/selectedProject.hbs":
/*!*************************************************!*\
  !*** ./src/pages/templates/selectedProject.hbs ***!
  \*************************************************/
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

  return "<section class=\"name-page-block \">\r\n	<div class=\"name-page-block__body\">\r\n		<ul class=\"name-page-block__list\">\r\n			<li>\r\n				<a class=\"link-hover\" href=\"/\">\r\n					Homepage / \r\n				</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"link-hover\" href=\"../work.html\">\r\n					Work / \r\n				</a>\r\n			</li>\r\n			<li>\r\n				<a class=\"link-hover\" href=\"./project.html?id="
    + alias4(((helper = (helper = lookupProperty(helpers,"projectId") || (depth0 != null ? lookupProperty(depth0,"projectId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectId","hash":{},"data":data,"loc":{"start":{"line":15,"column":50},"end":{"line":15,"column":63}}}) : helper)))
    + "\">\r\n					"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":16,"column":5},"end":{"line":16,"column":20}}}) : helper)))
    + "\r\n				</a>\r\n			</li>\r\n		</ul>\r\n		<h1 class=\"name-page-block__title \">\r\n			"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":21,"column":3},"end":{"line":21,"column":18}}}) : helper)))
    + "\r\n		</h1>\r\n	</div>\r\n</section>\r\n<section class=\"introduce\">\r\n	<div class=\"introduce__body \">\r\n		<div class=\"introduce__slider\">\r\n			<div class=\"introduce__slider-title-image\">\r\n				<button id=\"project-swap-left\" class=\"arrow\">\r\n					<img src=\"/assets/vendors/arrow-left.svg\" alt=\"\">\r\n				</button>\r\n				<button id=\"project-swap-right\" type=\"button\" class=\"arrow\">\r\n					<img src=\"/assets/vendors/arrow-right.svg\" alt=\"\">\r\n				</button>\r\n				<img id=\"project-main-image\" src=\"/assets/project-images/"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectImage1") || (depth0 != null ? lookupProperty(depth0,"projectImage1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectImage1","hash":{},"data":data,"loc":{"start":{"line":35,"column":61},"end":{"line":35,"column":78}}}) : helper)))
    + "\" class=\"image-adaptive\"\r\n					alt=\"\" onerror=\"this.src='/assets/project-images/not-found.png'\">\r\n			</div>\r\n			<div class=\"introduce__slider-subtitle-body\" id=\"project-secondary-image\">\r\n				<div class=\"introduce__slider-subtitle-image\">\r\n					<img src=\"/assets/project-images/"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectImage1") || (depth0 != null ? lookupProperty(depth0,"projectImage1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectImage1","hash":{},"data":data,"loc":{"start":{"line":40,"column":38},"end":{"line":40,"column":55}}}) : helper)))
    + "\" data-numberOfImage=\"1\" class=\"image-adaptive\"\r\n						alt=\"\" onerror=\"this.src='/assets/project-images/not-found.png'\">\r\n				</div>\r\n				<div class=\"introduce__slider-subtitle-image\">\r\n					<img src=\"/assets/project-images/"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectImage2") || (depth0 != null ? lookupProperty(depth0,"projectImage2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectImage2","hash":{},"data":data,"loc":{"start":{"line":44,"column":38},"end":{"line":44,"column":55}}}) : helper)))
    + "\" data-numberOfImage=\"2\" class=\"image-adaptive\"\r\n						alt=\"\" onerror=\"this.src='/assets/project-images/not-found.png'\">\r\n				</div>\r\n				<div class=\"introduce__slider-subtitle-image\">\r\n					<img src=\"/assets/project-images/"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectImage3") || (depth0 != null ? lookupProperty(depth0,"projectImage3") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectImage3","hash":{},"data":data,"loc":{"start":{"line":48,"column":38},"end":{"line":48,"column":55}}}) : helper)))
    + "\" data-numberOfImage=\"3\" class=\"image-adaptive\"\r\n						alt=\"\" onerror=\"this.src='/assets/project-images/not-found.png'\">\r\n				</div>\r\n				<div class=\"introduce__slider-subtitle-image\">\r\n					<img src=\"/assets/project-images/"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectImage4") || (depth0 != null ? lookupProperty(depth0,"projectImage4") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectImage4","hash":{},"data":data,"loc":{"start":{"line":52,"column":38},"end":{"line":52,"column":55}}}) : helper)))
    + "\" data-numberOfImage=\"4\" class=\"image-adaptive\"\r\n						alt=\"\" onerror=\"this.src='/assets/project-images/not-found.png'\">\r\n				</div>\r\n				<div class=\"introduce__slider-subtitle-image\">\r\n					<img src=\"/assets/project-images/"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectImage5") || (depth0 != null ? lookupProperty(depth0,"projectImage5") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectImage5","hash":{},"data":data,"loc":{"start":{"line":56,"column":38},"end":{"line":56,"column":55}}}) : helper)))
    + "\" data-numberOfImage=\"5\" class=\"image-adaptive\"\r\n						alt=\"\" onerror=\"this.src='/assets/project-images/not-found.png'\">\r\n				</div>\r\n				<div class=\"introduce__slider-subtitle-image\">\r\n					<img src=\"/assets/project-images/"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectImage6") || (depth0 != null ? lookupProperty(depth0,"projectImage6") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectImage6","hash":{},"data":data,"loc":{"start":{"line":60,"column":38},"end":{"line":60,"column":55}}}) : helper)))
    + "\" data-numberOfImage=\"6\" class=\"image-adaptive\"\r\n						alt=\"\" onerror=\"this.src='/assets/project-images/not-found.png'\">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"introduce__description \">\r\n			<div class=\"introduce__description-value\">\r\n				<h3 class=\"introduce__description-value-title\">\r\n					Project goal\r\n				</h3>\r\n				<p class=\"introduce__description-value-text first\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectDescription") || (depth0 != null ? lookupProperty(depth0,"projectDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectDescription","hash":{},"data":data,"loc":{"start":{"line":70,"column":55},"end":{"line":70,"column":77}}}) : helper)))
    + "</p>\r\n				<p class=\"introduce__description-value-text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectGoal") || (depth0 != null ? lookupProperty(depth0,"projectGoal") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectGoal","hash":{},"data":data,"loc":{"start":{"line":71,"column":49},"end":{"line":71,"column":64}}}) : helper)))
    + "</p>\r\n			</div>\r\n			<ul class=\"introduce__description-info\">\r\n				<li class=\"introduce__description-info-item\">\r\n					<span>Location </span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectLocation") || (depth0 != null ? lookupProperty(depth0,"projectLocation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectLocation","hash":{},"data":data,"loc":{"start":{"line":75,"column":27},"end":{"line":75,"column":46}}}) : helper)))
    + "\r\n				</li>\r\n				<li class=\"introduce__description-info-item\">\r\n					<span>Client </span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectClient") || (depth0 != null ? lookupProperty(depth0,"projectClient") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectClient","hash":{},"data":data,"loc":{"start":{"line":78,"column":25},"end":{"line":78,"column":42}}}) : helper)))
    + "\r\n				</li>\r\n				<li class=\"introduce__description-info-item\">\r\n					<span>Architect </span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectArchitect") || (depth0 != null ? lookupProperty(depth0,"projectArchitect") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectArchitect","hash":{},"data":data,"loc":{"start":{"line":81,"column":28},"end":{"line":81,"column":48}}}) : helper)))
    + "\r\n				</li>\r\n				<li class=\"introduce__description-info-item\">\r\n					<span>Size </span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectSize") || (depth0 != null ? lookupProperty(depth0,"projectSize") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectSize","hash":{},"data":data,"loc":{"start":{"line":84,"column":23},"end":{"line":84,"column":38}}}) : helper)))
    + "\r\n				</li>\r\n				<li class=\"introduce__description-info-item\">\r\n					<span>Value </span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectValue") || (depth0 != null ? lookupProperty(depth0,"projectValue") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectValue","hash":{},"data":data,"loc":{"start":{"line":87,"column":24},"end":{"line":87,"column":40}}}) : helper)))
    + "\r\n				</li>\r\n				<li class=\"introduce__description-info-item\">\r\n					<span>Completed </span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectCompleted") || (depth0 != null ? lookupProperty(depth0,"projectCompleted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectCompleted","hash":{},"data":data,"loc":{"start":{"line":90,"column":28},"end":{"line":90,"column":48}}}) : helper)))
    + "\r\n				</li>\r\n		</div>\r\n</section>";
},"useData":true});

/***/ }),

/***/ "./src/scripts/utilities/getQueryParams.mjs":
/*!**************************************************!*\
  !*** ./src/scripts/utilities/getQueryParams.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initGetQueryParams = queryRequire => {
  var queryParams = new URLSearchParams(window.location.search);
  const filterValue = queryParams.get(queryRequire);
  return filterValue !== '' ? filterValue : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initGetQueryParams);

/***/ }),

/***/ "./src/scripts/utilities/showSelectedProject.mjs":
/*!*******************************************************!*\
  !*** ./src/scripts/utilities/showSelectedProject.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_api_getProjectsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-api/getProjectsData */ "./src/scripts/api/getProjectsData.mjs");
/* harmony import */ var _js_store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js-store/store */ "./src/scripts/store/store.mjs");
/* harmony import */ var _p_temp_selectedProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @p-temp/selectedProject */ "./src/pages/templates/selectedProject.hbs");



const initShowSelectedProject = async (id, container) => {
  if (id !== null) {
    await (0,_js_api_getProjectsData__WEBPACK_IMPORTED_MODULE_0__.initGetData)(id);
  }
  const PROJECT = _js_store_store__WEBPACK_IMPORTED_MODULE_1__["default"].PROJECTS.selectedProject[0];
  const templateOptions = setTemplateOptions(PROJECT);
  const renderHTML = _p_temp_selectedProject__WEBPACK_IMPORTED_MODULE_2__(templateOptions);
  if (!renderHTML || !container) {
    console.log('Container element or PROJECT template not found');
  } else {
    container.innerHTML = renderHTML;
  }
  const typeOfProject = PROJECT?.dataType || null;
  return typeOfProject;
};
const setTemplateOptions = project => {
  return {
    projectId: project?.id || null,
    projectName: project?.name || 'Nameless',
    projectDescription: project?.introduce?.text || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Obcaecati a ipsam illo voluptatem esse reiciendis ut accusamus rem sapiente! Quasi.',
    projectGoal: project?.introduce?.goal || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Obcaecati a ipsam illo voluptatem esse reiciendis ut accusamus rem sapiente! Quasi.',
    projectLocation: project?.details?.location || 'Not found',
    projectClient: project?.details?.client || 'Not found',
    projectArchitect: project?.details?.architect || 'Not found',
    projectSize: project?.details?.size || 'Not found',
    projectValue: project?.details?.value || 'Not found',
    projectCompleted: project?.details?.completed || 'Not found',
    projectImage1: project?.introduce?.pathToImages?.one || 'not-found.png',
    projectImage2: project?.introduce?.pathToImages?.two || 'not-found.png',
    projectImage3: project?.introduce?.pathToImages?.three || 'not-found.png',
    projectImage4: project?.introduce?.pathToImages?.four || 'not-found.png',
    projectImage5: project?.introduce?.pathToImages?.five || 'not-found.png',
    projectImage6: project?.introduce?.pathToImages?.six || 'not-found.png'
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initShowSelectedProject);

/***/ })

}]);
//# sourceMappingURL=src_scripts_utilities_getQueryParams_mjs-src_scripts_utilities_showSelectedProject_mjs.js.map