webpackJsonp([18],{"+Qyd":function(t,e){},EV1k:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),o=a("BHhu"),r=a("9+VK"),n={name:"login",data:function(){return{username:null,password:null,pageSet:{}}},created:function(){var t=this;s.a.http.get(o.a+"page_set").then(function(e){t.pageSet=e.data.data,t.pageSet.web_name&&$("title.projectTitle").text(t.pageSet.web_name)}),r.a.clear()},methods:{register:function(){this.$router.push("/register")},login:function(){var t=this;if(this.username&&this.password){s.a.http.options.headers={};var e={username:this.username,password:this.password};s.a.http.post(o.a+"login",e,{}).then(function(e){var a=e.data.data;200==e.data.code?(r.a.setToken(a.token),r.a.setUser(a),setTimeout(function(){return t.$router.push("/user")},1e3)):500==e.data.code&&toastr.error(e.data.msg)})}else toastr.error("用户名或密码不能为空!")}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center loginscreen  animated fadeInDown login"},[a("div",{staticClass:"row mt"},[a("div",{staticClass:"box"},[a("h1",[t._v(t._s(t.pageSet.web_name))]),t._v(" "),a("div",{staticClass:"m-t form-horizontal middle-box"},[a("form",{staticClass:"form-horizontal",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label col-sm-3"},[t._v("账号")]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label col-sm-3"},[t._v("密码")]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",onkeyup:"this.value=this.value.replace(/[^0-9a-zA-Z]/g,'')"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-sm-offset-3 col-sm-9"},[a("button",{staticClass:"btn btn-primary block full-width",attrs:{type:"submit"}},[t._v("登 录")]),t._v(" "),a("a",{on:{click:t.register}},[t._v("注册用户？")])])])])])])])},staticRenderFns:[]};var l=a("VU/8")(n,i,!1,function(t){a("+Qyd")},"data-v-9165ad80",null);e.default=l.exports}});
//# sourceMappingURL=18.b7b9da288d4dd4286980.js.map