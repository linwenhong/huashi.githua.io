webpackJsonp([96],{PijJ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"notice",data:function(){return{state:1,tagsUrl:["/views/notice/school","/views/notice/department","/views/notice/writing"],showTag:!1}},methods:{selectTag:function(t){t!=this.state&&(this.state=t)}},created:function(){var t=$.inArray(this.$route.path,this.tagsUrl);t>-1&&(this.showTag=!0,this.state=t+1)}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.showTag?s("ul",{staticClass:"tag"},[s("router-link",{attrs:{to:"/views/notice/school"}},[s("li",{class:{active:1==t.state},on:{click:function(e){t.selectTag(1)}}},[t._v("学校通知")])]),t._v(" "),s("router-link",{attrs:{to:"/views/notice/department"}},[s("li",{class:{active:2==t.state},on:{click:function(e){t.selectTag(2)}}},[t._v("部处通知")])]),t._v(" "),s("router-link",{attrs:{to:"/views/notice/writing"}},[s("li",{class:{active:3==t.state},on:{click:function(e){t.selectTag(3)}}},[t._v("校内发文")])])],1):t._e(),t._v(" "),t.showTag?s("div",{staticClass:"tagNull"}):t._e(),t._v(" "),s("router-view")],1)},staticRenderFns:[]},n=s("VU/8")(i,a,!1,null,null,null);e.default=n.exports}});
//# sourceMappingURL=96.147cdc914c399b2dcff3.js.map