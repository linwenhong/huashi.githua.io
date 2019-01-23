webpackJsonp([36],{ei0a:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("//Fk"),s=a.n(i),n=a("BO1k"),r=a.n(n),o=(a("8IWg"),a("9+VK")),l=a("+0rj"),c=(a("TNi3"),a("BXxX")),m={name:"customFormDetails",data:function(){return{code:this.$route.query.code,types:[{name:"文本",value:"varchar",type:"text"},{name:"数字",value:"varchar",type:"number"},{name:"日期",value:"varchar",type:"isDateTime"}],form:{},dataKeys:[{name:"能否为空",key:"can_null"},{name:"表头文本",key:"display"},{name:"数据表列名",key:"field_name"},{name:"长度",key:"length"}],items:[],editItem:{},canSubmit:!0,showDetails:!1,operation:{},validate:null}},methods:{getName:function(t){var e=!0,a=!1,i=void 0;try{for(var s,n=r()(this.types);!(e=(s=n.next()).done);e=!0){var o=s.value;if(t==o.type)return o.name}}catch(t){a=!0,i=t}finally{try{!e&&n.return&&n.return()}finally{if(a)throw i}}},typeChange:function(){"isDateTime"==this.form.type&&(this.form.length=20)},getDataTables:function(){var t=this;c.a.Customize.get({model:this.code}).then(function(e){200==e.code&&(t.items=e.data)})},add:function(){this.clear(),this.showDetails=!0},edit:function(t){this.showDetails=!0,this.editItem=t,this.form={can_null:t.can_null,display:t.display,type:t.type,field_type:t.field_type,length:t.length,field_name:t.name}},submit:function(){var t=this;this.form.display?this.form.field_name?this.form.length?l.a.getFormVal(this.dataKeys,this.form).then(function(e){return t.confirm(e)}):toastr.warning("请填写字符长度"):toastr.warning("请填写数据表列名"):toastr.warning("请填写页面文本")},verification:function(){var t=this;return new s.a(function(e){return t.canSubmit?(t.canSubmit=!1,$("#form").valid()?void e(!0):(toastr.warning("请完善提交数据"),e(!1))):e(!1)})},confirm:function(t){var e=this;switch(t.type=this.form.type,t.type){case"text":case"number":case"isDateTime":t.field_type="varchar"}this.verification().then(function(a){if(a)if(t.model=e.code,t.from="add",e.editItem.id){var i={display:e.form.display};c.a.Customize.edit(e.editItem.id,i).then(function(t){return e.responseHandle(t)}).catch(function(t){return e.canSubmit=!0})}else c.a.Customize.add(t).then(function(t){return e.responseHandle(t)}).catch(function(t){return e.canSubmit=!0});else e.canSubmit=!0})},responseHandle:function(t){200==t.code?(toastr.success(t.msg),this.clear(),this.getDataTables()):toastr.error(t.msg),this.canSubmit=!0},delConfirm:function(t){var e=this;c.a.Customize.add({model:this.code,from:"drop",field_name:t.name}).then(function(t){200==t.code&&(swal("删除成功！","您已经永久删除了这条数据。","success"),e.getDataTables())})},clear:function(){this.showDetails=!1,this.form={type:"text",can_null:1},this.editItem={},l.a.resetForm(this.validate)},cancel:function(){l.a.tabReload(603)}},created:function(){o.a.hasPermission("add_field")&&(this.operation.add=!0),o.a.hasPermission("update_field")&&(this.operation.edit=!0),o.a.hasPermission("drop_field")&&(this.operation.del=!0),this.getDataTables()},mounted:function(){this.validate=l.a.validate("#form")}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper wrapper-content"},[a("div",{staticClass:"ibox"},[t._m(0),t._v(" "),a("div",{staticClass:"ibox-content"},[a("div",{staticClass:"text-left"},[t.operation.add?a("button",{staticClass:"btn btn-primary",on:{click:function(e){t.add()}}},[t._v("新增")]):t._e(),t._v(" "),a("b",{staticClass:"btn btn-white",on:{click:t.cancel}},[t._v("返回数据表列表")])]),t._v(" "),a("table",{staticClass:"table table-bordered text-center"},[t._m(1),t._v(" "),a("tbody",t._l(t.items,function(e,i){return a("tr",[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(t.getName(e.type)))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(1==e.can_null?"能":"否"))]),t._v(" "),a("td",[t._v(t._s(e.length))]),t._v(" "),a("td",[t._v(t._s(e.display))]),t._v(" "),a("td",[t.operation.edit?a("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(a){t.edit(e)}}},[t._v("编辑")]):t._e(),t._v(" "),t.operation.del?a("delete",{attrs:{item:e},on:{delConfirm:t.delConfirm}}):t._e()],1)])}))])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetails,expression:"showDetails"}],staticClass:"ibox"},[t._m(2),t._v(" "),a("div",{staticClass:"ibox-content"},[a("form",{staticClass:"form-horizontal",attrs:{id:"form"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-5 control-label"},[t._v("字段类型")]),t._v(" "),a("div",{staticClass:"col-sm-4 right"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],staticClass:"form-control",attrs:{required:"","aria-required":"true",name:"field_type",disabled:t.editItem.id},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"type",e.target.multiple?a:a[0])},function(e){t.typeChange()}]}},t._l(t.types,function(e){return a("option",{domProps:{value:e.type}},[t._v(t._s(e.name))])}))])])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-5 control-label"},[t._v("能否为空")]),t._v(" "),a("div",{staticClass:"col-sm-4 right"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.can_null,expression:"form.can_null"}],staticClass:"form-control",attrs:{required:"","aria-required":"true",name:"can_null",disabled:t.editItem.id},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"can_null",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"1"}},[t._v("能")]),t._v(" "),a("option",{attrs:{value:"0"}},[t._v("不能")])])])])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-5 control-label"},[t._v("页面文本")]),t._v(" "),a("div",{staticClass:"col-sm-4 right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.display,expression:"form.display"}],staticClass:"form-control",attrs:{required:"","aria-required":"true",name:"display"},domProps:{value:t.form.display},on:{input:function(e){e.target.composing||t.$set(t.form,"display",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-5 control-label"},[t._v("数据表列名")]),t._v(" "),a("div",{staticClass:"col-sm-4 right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.field_name,expression:"form.field_name"}],staticClass:"form-control",attrs:{required:"","aria-required":"true",name:"field_name",disabled:t.editItem.id,onkeyup:"this.value=this.value.replace(/[^a-zA-Z]/g,'')"},domProps:{value:t.form.field_name},on:{input:function(e){e.target.composing||t.$set(t.form,"field_name",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-5 control-label"},[t._v("字符长度")]),t._v(" "),a("div",{staticClass:"col-sm-4 right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.length,expression:"form.length"}],staticClass:"form-control",attrs:{type:"number",required:"","aria-required":"true",name:"length",disabled:t.editItem.id||"isDateTime"==t.form.type},domProps:{value:t.form.length},on:{input:function(e){e.target.composing||t.$set(t.form,"length",e.target.value)}}})])])]),t._v(" "),t._m(3)]),t._v(" "),a("div",{staticClass:"text-center row"},[t.canSubmit?a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("保存")]):t._e(),t._v(" "),t.canSubmit?t._e():a("button",{staticClass:"btn btn-default"},[t._v("保存")]),t._v(" "),a("b",{staticClass:"btn btn-white",on:{click:t.clear}},[t._v("关闭")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ibox-title"},[e("h5",[this._v("自定义数据表字段")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("字段类型")]),t._v(" "),a("th",[t._v("数据表列名")]),t._v(" "),a("th",[t._v("能否为空")]),t._v(" "),a("th",[t._v("字符长度")]),t._v(" "),a("th",[t._v("表头文本")]),t._v(" "),a("th",[t._v("操作")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ibox-title"},[e("h5",[this._v("详情")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"remark"},[a("p",[t._v("说明：")]),t._v(" "),a("p",[t._v("1、"),a("span",{staticStyle:{color:"red"}},[t._v("“数据表列名”")]),t._v("请输入"),a("span",{staticStyle:{color:"red"}},[t._v("英文单词格式")]),t._v(",不能使用空格及特殊字符,且是"),a("span",{staticStyle:{color:"red"}},[t._v("唯一值")])]),t._v(" "),a("p",[t._v("2、系统已使用的“数据表列名”不可再设置(如id, name)")]),t._v(" "),a("p",[t._v("3、一个字母或数字占用一个字符,一个汉字占用两个字符")])])}]};var u=a("VU/8")(m,d,!1,function(t){a("f9LX")},"data-v-6ece63af",null);e.default=u.exports},f9LX:function(t,e){}});
//# sourceMappingURL=36.0c1b1faf3e5b74b3ee1f.js.map