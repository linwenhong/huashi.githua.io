webpackJsonp([38],{CFX7:function(t,e){},aFhj:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("9+VK"),r=s("TNi3"),i=s("+0rj"),o=(s("jNku"),s("BXxX")),n={name:"UserDetails",data:function(){return{id:this.$route.params.id,roles:[],form:{},permissions:a.a.getUser("permission"),isSuper:$.inArray("admin",this.permissions)>-1,canEditRole:!1,validate:null}},methods:{submit:function(){var t=this;if($("#form").valid())if(this.form.phone&&11!=this.form.phone.length)toastr.warning("请输入11位数的电话号码");else if(this.form.password&&(this.form.password==Number(this.form.password)||this.form.password.length<6))toastr.warning("请输入6位以上的字母加数字");else{var e={};for(var s in this.form)"r_id"==s?0!=this.form[s]&&(e[s]=this.form[s]):$.inArray(s,["email","name","username","password","phone"])>-1&&(e[s]=this.form[s]);"new"==this.id?o.a.Users.add(e).then(function(e){return t.responseHandle(e)}):o.a.Users.edit(this.id,e).then(function(e){return t.responseHandle(e)})}else toastr.warning("请补贴提交数据")},responseHandle:function(t){200==t.code?(toastr.success(t.msg),setTimeout(function(){return i.a.tabReload(602)},1e3)):(toastr.error(t.msg),this.canSubmit=!0)},cancel:function(){r.a.closeNowTab()}},created:function(){var t=this;this.isSuper&&(this.canEditRole=!0),o.a.Roles.get().then(function(e){200==e.code&&(t.roles=e.data)})},mounted:function(){var t=this;this.validate=i.a.validate("#form"),"new"!=this.id&&o.a.Users.details(this.id).then(function(e){200==e.code&&(t.form=e.data,t.form.r_id=e.data.roles[0].id)})}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper wrapper-content"},[s("div",{staticClass:"ibox float-e-margins"},[t._m(0),t._v(" "),s("div",{staticClass:"ibox-content"},[s("form",{staticClass:"form-horizontal",attrs:{id:"form"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"form-group"},[t._m(1),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{type:"text",required:"","aria-required":"true",name:"username",disabled:"new"!=t.id},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}})])]),t._v(" "),"admin"!=t.form.username?s("div",{staticClass:"form-group"},[t._m(2),t._v(" "),s("div",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.r_id,expression:"form.r_id"}],staticClass:"form-control",attrs:{required:"","aria-required":"true",name:"role"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"r_id",e.target.multiple?s:s[0])}}},t._l(t.roles,function(e){return s("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])}))])]):t._e(),t._v(" "),s("div",{staticClass:"form-group"},[t._m(3),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",required:"","aria-required":"true",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"control-label"},[t._v("联系电话")]),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-control",attrs:{type:"text",maxlength:"11",name:"phone",onkeyup:"this.value=this.value.replace(/[^0-9a-zA-Z]/g,'')"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}})])]),t._v(" "),"new"==t.id?s("div",{staticClass:"form-group"},[t._m(4),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",required:"","aria-required":"true",name:"password",onkeyup:"this.value=this.value.replace(/[^0-9a-zA-Z]/g,'')"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]):t._e(),t._v(" "),s("div",{staticClass:"form-group"},[t._m(5),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",required:"","aria-required":"true",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("保存")]),t._v(" "),s("b",{staticClass:"btn btn-white",on:{click:t.cancel}},[t._v("取消")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ibox-title"},[e("h5",[this._v("用户详情")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"control-label"},[e("span",{staticClass:"MustFill"},[this._v("*")]),this._v("登录名")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"control-label"},[e("span",{staticClass:"MustFill"},[this._v("*")]),this._v("用户组")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"control-label"},[e("span",{staticClass:"MustFill"},[this._v("*")]),this._v("用户名称")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"control-label"},[e("span",{staticClass:"MustFill"},[this._v("*")]),this._v("密码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"control-label"},[e("span",{staticClass:"MustFill"},[this._v("*")]),this._v("邮箱")])}]};var m=s("VU/8")(n,l,!1,function(t){s("CFX7")},"data-v-69db73e6",null);e.default=m.exports}});
//# sourceMappingURL=38.748c4ebf9c82ebdf08c0.js.map