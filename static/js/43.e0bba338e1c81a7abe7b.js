webpackJsonp([43],{oyQq:function(t,e){},"p/i7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("TNi3"),a=i("+0rj"),n=i("jNku"),o=i("BXxX"),l={name:"RoleDetails",data:function(){return{id:this.$route.params.id,permissions:[],name:"",groups:[{title:"内容管理",group:[{title:"审批&页面设置",id:2,key:"content_management"}]},{title:"字段管理",group:[{title:"添加字段",id:3,key:"add_field"},{title:"修改字段",id:4,key:"update_field"},{title:"删除字段",id:5,key:"drop_field"}]},{title:"用户组管理",group:[{title:"添加用户组",id:9,key:"post_role"},{title:"修改用户组",id:11,key:"update_role"},{title:"删除用户组",id:10,key:"delete_role"}]},{title:"用户管理",group:[{title:"添加用户",id:6,key:"post_user"},{title:"修改用户",id:7,key:"update_user"},{title:"删除用户",id:8,key:"delete_user"}]},{title:"公告管理",group:[{title:"添加公告",id:14,key:"post_notification"},{title:"修改公告",id:12,key:"update_notification"},{title:"删除公告",id:13,key:"delete_notification"},{title:"置顶公告",id:15,key:"top_notification"}]},{title:"数据管理",group:[{title:"备份数据库",id:16,key:"back_up"}]},{title:"管理模块",group:[{title:"基本信息",id:17,key:"basic_information"},{title:"学术成果",id:18,key:"academic_achievements"},{title:"人才培养",id:19,key:"talent_development"},{title:"评分系统",id:20,key:"score"},{title:"管理工作",id:21,key:"management_work"}]}]}},methods:{selectGroup:function(t){a.a.setCheckBoxVal(this.groups[t].group,"permissions")},cancelGroup:function(t){$(".checkbox .checked input[name=permissions]").each(function(){this.checked=!1}),$(".checkbox input[data-name=permissions-"+t+"]").parent().removeClass("checked")},submit:function(){var t=this;if(this.name){var e=a.a.getChecked("permissions");if(0!=e.length){var i={name:this.name,permission_id:e};"new"==this.id?o.a.Roles.add(i).then(function(e){return t.responseHandle(e)}):o.a.Roles.edit(this.id,i).then(function(e){return t.responseHandle(e)})}else toastr.warning("请勾选用户组权限")}else toastr.warning("请输入用户组名称")},responseHandle:function(t){200==t.code?(toastr.success(t.msg),setTimeout(function(){return a.a.tabReload(601)},1e3)):(toastr.error(t.msg),this.canSubmit=!0)},cancel:function(){s.a.closeNowTab()}},created:function(){},mounted:function(){var t=this;n.a.iCheck(),"new"!=this.id&&o.a.Roles.details(this.id).then(function(e){if(200==e.code){var i=[];t.name=e.data.name,t.groups.map(function(t){t.group.map(function(t){$.inArray(t.key,e.data.permission)>-1&&i.push(t.id)})}),a.a.setCheckBoxVal(i,"permissions")}})}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper wrapper-content"},[i("div",{staticClass:"ibox float-e-margins"},[t._m(0),t._v(" "),i("div",{staticClass:"ibox-content"},[i("form",{staticClass:"form-horizontal",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[i("div",{staticClass:"form-group"},[i("div",{staticClass:"col-lg-4 col-sm-6"},[i("label",{staticClass:"col-sm-4 control-label"},[t._v("用户组名称")]),t._v(" "),i("div",{staticClass:"col-sm-8"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-lg-3 col-sm-6"},[i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("保存")]),t._v(" "),i("b",{staticClass:"btn btn-white",on:{click:t.cancel}},[t._v("取消")])])]),t._v(" "),t._l(t.groups,function(e,s){return i("div",{staticClass:"form-group"},[i("div",{staticClass:"col-lg-3 col-sm-12"},[i("div",{staticClass:"checkbox i-checks"},[i("label",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),i("a",{on:{click:function(e){t.selectGroup(s)}}},[t._v("全选")]),t._v(" "),i("a",{on:{click:function(e){t.cancelGroup(s)}}},[t._v("全不选")])])]),t._v(" "),i("div",{staticClass:"col-lg-9 col-sm-12"},t._l(e.group,function(e){return i("div",{staticClass:"col-lg-4 col-sm-6"},[i("div",{staticClass:"checkbox i-checks"},[i("label",[i("input",{attrs:{name:"permissions","data-name":"permissions-"+s,type:"checkbox"},domProps:{value:e.id}}),i("i"),t._v(t._s(e.title))])])])}))])})],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ibox-title"},[e("h5",[this._v("用户组详情")])])}]};var r=i("VU/8")(l,c,!1,function(t){i("oyQq")},"data-v-5d232b22",null);e.default=r.exports}});
//# sourceMappingURL=43.e0bba338e1c81a7abe7b.js.map