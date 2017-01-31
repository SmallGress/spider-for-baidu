/*!
 * Vue Material v0.6.3
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)})({0:function(e,t,r){e.exports=r(100)},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},100:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){e.component("md-toolbar",e.extend(a.default)),e.material.styles.push(u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var s=r(307),a=o(s),d=r(246),u=o(d);e.exports=t.default},161:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),s=o(n);t.default={mixins:[s.default]},e.exports=t.default},208:function(e,t){},246:function(e,t){e.exports=".THEME_NAME.md-toolbar{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-toolbar.md-accent{background-color:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME.md-toolbar.md-warn{background-color:WARN-COLOR;color:WARN-CONTRAST}.THEME_NAME.md-toolbar.md-transparent{background-color:transparent;color:BACKGROUND-CONTRAST}\n"},307:function(e,t,r){var o,n;r(208),o=r(161);var s=r(347);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=o},347:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"md-toolbar",class:[e.themeClass]},[e._t("default")],2)},staticRenderFns:[]}}})}));