!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueBulmaAccordion=factory():root.VueBulmaAccordion=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=4)}([function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){__webpack_require__(10);var Component=__webpack_require__(0)(__webpack_require__(5),__webpack_require__(14),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){__webpack_require__(8);var Component=__webpack_require__(0)(__webpack_require__(6),__webpack_require__(12),"data-v-026fc950",null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(global){function install(Vue){Vue.component("bulma-accordion",__WEBPACK_IMPORTED_MODULE_0__components_BulmaAccordion_vue___default.a),Vue.component("bulma-accordion-item",__WEBPACK_IMPORTED_MODULE_1__components_BulmaAccordionItem_vue___default.a)}__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_BulmaAccordion_vue__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_0__components_BulmaAccordion_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_BulmaAccordion_vue__),__WEBPACK_IMPORTED_MODULE_1__components_BulmaAccordionItem_vue__=__webpack_require__(3),__WEBPACK_IMPORTED_MODULE_1__components_BulmaAccordionItem_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_BulmaAccordionItem_vue__);__webpack_require__.d(__webpack_exports__,"BulmaAccordion",function(){return __WEBPACK_IMPORTED_MODULE_0__components_BulmaAccordion_vue___default.a}),__webpack_require__.d(__webpack_exports__,"BulmaAccordionItem",function(){return __WEBPACK_IMPORTED_MODULE_1__components_BulmaAccordionItem_vue___default.a});var plugin={version:"0.2.0",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}.call(__webpack_exports__,__webpack_require__(1))},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.default={name:"bulma-accordion",props:{caretAnimation:{required:!1,type:Object,default:function(){return{duration:"450ms",timerFunc:"ease"}},validator:function(config){return"string"==typeof config.duration&&"string"==typeof config.timerFunc||!0===config.none}},dropdown:{required:!1,type:Boolean,default:!1},icon:{required:!1,type:String,default:"caret",validator:function(choice){return"caret"===choice||"plus-minus"===choice||"custom"===choice}},slide:{required:!1,type:Object,default:function(){return{duration:"700ms",timerFunc:"ease"}},validator:function(config){return"string"==typeof config.duration&&"string"==typeof config.timerFunc}}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__icons_caret_svg__=__webpack_require__(15),__WEBPACK_IMPORTED_MODULE_0__icons_caret_svg___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__icons_caret_svg__),__WEBPACK_IMPORTED_MODULE_1__PlusMinus_vue__=__webpack_require__(11),__WEBPACK_IMPORTED_MODULE_1__PlusMinus_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PlusMinus_vue__);__webpack_exports__.default={name:"bulma-accordion-item",components:{Caret:__WEBPACK_IMPORTED_MODULE_0__icons_caret_svg___default.a,PlusMinus:__WEBPACK_IMPORTED_MODULE_1__PlusMinus_vue___default.a},data:function(){return{isOpen:!1}},mounted:function(){this.$parent.$on("toggle",this.collapse)},destroyed:function(){this.$parent.$off("toggle")},watch:{isOpen:function(_isOpen){this.doTheSlide()}},methods:{collapse:function(){this.isOpen=!1},toggleCollapsed:function(){this.isOpen||this.isDropdown||this.$parent.$emit("toggle"),this.isOpen=!this.isOpen},doTheSlide:function(){var element=this.$refs.body;!0===this.isOpen?this.slideDown(element):this.slideUp(element)},slideDown:function(el){el.style.height=el.scrollHeight+"px"},slideUp:function(el){el.style.height="0px"}},computed:{config:function(){var _$parent=this.$parent,_$parent$caretAnimati=_$parent.caretAnimation,animation=void 0===_$parent$caretAnimati?{duration:"450ms",timerFunc:"ease"}:_$parent$caretAnimati,_$parent$dropdown=_$parent.dropdown,dropdown=void 0!==_$parent$dropdown&&_$parent$dropdown,_$parent$icon=_$parent.icon,icon=void 0===_$parent$icon?"caret":_$parent$icon,_$parent$slide=_$parent.slide;return{animation:animation,dropdown:dropdown,icon:icon,slide:void 0===_$parent$slide?{duration:"700ms",timerFunc:"ease"}:_$parent$slide}},dropdownIconClasses:function(){return{"header-icon":!0,"caret-down":!this.isOpen}},card_classes:function(){return{card:!0,"card-active":this.isOpen}},footerClasses:function(){return{"card-footer":!0,"is-hidden":!this.$slots.footer}},usingCustomIcon:function(){return"custom"===this.config.icon},showCaret:function(){return"caret"===this.config.icon},showPlus:function(){return"plus-minus"===this.config.icon&&!this.isOpen},showMinus:function(){return"plus-minus"===this.config.icon&&this.isOpen},slideStyle:function(){var c=this.config.slide;return{transition:"all "+c.duration+" "+c.timerFunc}},iconStyle:function(){var c=this.config.animation;return!0===c.none?{}:{transition:"all "+c.duration+" "+c.timerFunc}}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.default={props:{minus:{required:!0,type:Boolean}},computed:{verticalClasses:function(){return{vertical:!0,"vertical-rotated":this.minus}}}}},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports,__webpack_require__){__webpack_require__(9);var Component=__webpack_require__(0)(__webpack_require__(7),__webpack_require__(13),null,null);module.exports=Component.exports},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{class:_vm.card_classes},[_c("div",{staticClass:"card-header",on:{click:_vm.toggleCollapsed}},[_c("p",{staticClass:"card-header-title"},[_vm._t("title")],2),_vm._v(" "),_c("p",{staticClass:"card-header-icon"},[_vm.usingCustomIcon?_c("span",{staticClass:"icon"},[_vm._t("icon"),_vm._v(" "),_vm.isOpen?_vm._t("icon-open"):_vm._t("icon-closed")],2):_c("span",{staticClass:"icon"},[_vm.showCaret?_c("Caret",{class:_vm.dropdownIconClasses,style:_vm.iconStyle}):_vm._e(),_vm._v(" "),_vm.showPlus||_vm.showMinus?_c("PlusMinus",{attrs:{minus:_vm.showMinus}}):_vm._e()],1)])]),_vm._v(" "),_c("div",{ref:"body",staticClass:"accordion-body",style:_vm.slideStyle},[_c("div",{staticClass:"card-content"},[_vm._t("content")],2),_vm._v(" "),_c("div",{class:_vm.footerClasses},[_vm._t("footer")],2)])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"plus-minus"},[_c("div",{staticClass:"horizontal"}),_vm._v(" "),_c("div",{class:_vm.verticalClasses})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement;return(_vm._self._c||_h)("div",{staticClass:"accordion"},[_vm._t("default")],2)},staticRenderFns:[]}},function(module,exports){var render=function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 307.054 307.054"}},[_c("path",{attrs:{d:"M302.445 205.788L164.63 67.959c-6.136-6.13-16.074-6.13-22.203 0L4.597 205.788c-6.129 6.132-6.129 16.069 0 22.201l11.101 11.101c6.129 6.136 16.076 6.136 22.209 0l115.62-115.626L269.151 239.09c6.128 6.136 16.07 6.136 22.201 0l11.101-11.101c6.136-6.139 6.136-16.069-.008-22.201z"}})])},toString=function(){return"/home/gabe/Dev/Projects/OSS/vue-bulma-accordion/src/icons/caret.svg"};module.exports={render:render,toString:toString}}])});