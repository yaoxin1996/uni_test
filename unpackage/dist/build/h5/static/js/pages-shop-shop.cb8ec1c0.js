(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-shop"],{"12f9":function(t,e,n){"use strict";n.r(e);var r=n("9336"),i=n("8780");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("af72");var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"dcad9d0e",null,!1,r["a"],a);e["default"]=u.exports},2254:function(t,e,n){"use strict";var r=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("2909")),o=r(n("eb5e")),a={components:{goods:o.default},data:function(){return{goodsList:[],page:1,total:0,flag:!1}},methods:{getGoodsList:function(t){var e=this;this.$myRequest({url:"/goods/search",data:{query:"创维",pagenum:this.page,pagesize:8}}).then((function(n){t&&t(),e.goodsList=[].concat((0,i.default)(e.goodsList),(0,i.default)(n.message.goods)),e.total=n.message.total}))}},created:function(){this.getGoodsList()},onReachBottom:function(){this.goodsList.length!==this.total?(this.page++,this.getGoodsList()):this.flag=!0},onPullDownRefresh:function(){this.goodsList=[],this.page=1,this.total=0,this.flag=!1,this.getGoodsList((function(){uni.stopPullDownRefresh()}))}};e.default=a},2909:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=s(n("6005")),i=s(n("db90")),o=s(n("06c5")),a=s(n("3427"));function s(t){return t&&t.__esModule?t:{default:t}}function u(t){return(0,r.default)(t)||(0,i.default)(t)||(0,o.default)(t)||(0,a.default)()}},3427:function(t,e,n){"use strict";function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"3ab1":function(t,e,n){"use strict";n.r(e);var r=n("8a31"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"5a07":function(t,e,n){var r=n("aeb5");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("00fcb19b",r,!0,{sourceMap:!1,shadowMode:!1})},6005:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=i(n("6b75"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t))return(0,r.default)(t)}},8780:function(t,e,n){"use strict";n.r(e);var r=n("2254"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"880f":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"goods-list"},[t.item.goods_big_logo?n("v-uni-view",{staticClass:"rec-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDetail(t.item.goods_id)}}},[n("v-uni-view",{staticClass:"rec-img"},[n("v-uni-image",{attrs:{src:t.item.goods_big_logo,mode:""}})],1),n("v-uni-text",{staticClass:"rec-cur-price"},[t._v("￥"+t._s(t.item.goods_price))]),n("v-uni-text",{staticClass:"rec-old-price"},[t._v("￥"+t._s(t.item.goods_price-500))]),n("v-uni-view",{staticClass:"rec-title"},[t._v(t._s(t.item.goods_name))])],1):t._e()],1)},o=[]},"8a31":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:["item"],methods:{showDetail:function(t){this.$emit("show",t)}}};e.default=r},9336:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"shop"},[t._l(t.goodsList,(function(t){return[n("goods",{key:t.goods_id+"_0",attrs:{item:t}})]}))],2),t.flag?n("v-uni-view",{staticClass:"line"},[t._v("-------我是有底线的--------")]):t._e()],1)},o=[]},aeb5:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.shop[data-v-dcad9d0e]{background-color:#f2f2f2;padding:%?15?%;display:flex;justify-content:space-between;flex-wrap:wrap}.line[data-v-dcad9d0e]{width:%?750?%;line-height:%?60?%;text-align:center;background:#fff;color:#999}',""]),t.exports=e},af34:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goods-list .rec-item[data-v-eaeaf34e]{width:%?350?%;background:#fff;margin:%?10?% 0;padding:%?15?%;box-sizing:border-box;border-radius:%?10?%}.goods-list .rec-item .rec-img[data-v-eaeaf34e]{width:100%;margin-bottom:%?10?%}.goods-list .rec-item .rec-img uni-image[data-v-eaeaf34e]{width:100%;height:150px}.goods-list .rec-item .rec-cur-price[data-v-eaeaf34e]{color:#c41d01;font-size:%?36?%}.goods-list .rec-item .rec-old-price[data-v-eaeaf34e]{color:#ccc;font-size:%?28?%;text-decoration:line-through;margin-left:%?20?%}.goods-list .rec-item .rec-title[data-v-eaeaf34e]{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:%?28?%;line-height:%?50?%;padding:%?10?% 0}',""]),t.exports=e},af72:function(t,e,n){"use strict";var r=n("5a07"),i=n.n(r);i.a},d36b:function(t,e,n){var r=n("af34");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("1f699e4c",r,!0,{sourceMap:!1,shadowMode:!1})},db90:function(t,e,n){"use strict";function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},dbd3:function(t,e,n){"use strict";var r=n("d36b"),i=n.n(r);i.a},eb5e:function(t,e,n){"use strict";n.r(e);var r=n("880f"),i=n("3ab1");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("dbd3");var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"eaeaf34e",null,!1,r["a"],a);e["default"]=u.exports}}]);