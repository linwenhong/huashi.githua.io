webpackJsonp([53],{Zp0B:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("8IWg"),i=a("+0rj"),s=a("TNi3"),c=a("9+VK"),o=a("BXxX"),r={name:"patentDetails",data:function(){return{id:this.$route.params.id,form:{},code:e.a.Patent,dataKeys:e.C,canShow:!1,canSubmit:!0,user:c.a.getUser(),permissionName:"academic_achievements"}},methods:{canEdit:function(){return c.a.canEdit(this.form,this.permissionName)||"new"==this.id},canLocking:function(){return c.a.canLocking(this.form,this.permissionName)},locking:function(){var t=this;confirm("确定提交吗?提交后将不能修改!")&&i.a.getFormVal(this.dataKeys,this.form).then(function(n){n.status=1,t.confirm(n)})},submit:function(){var t=this;i.a.getFormVal(this.dataKeys,this.form).then(function(n){return t.confirm(n)})},confirm:function(t){var n=this;this.canSubmit&&(this.canSubmit=!1,"new"!=this.id?o.a.Patent.edit(this.id,t).then(function(t){return n.responseHandle(t)}):o.a.Patent.add(t).then(function(t){return n.responseHandle(t)}))},responseHandle:function(t){200==t.code?(toastr.success(t.msg),setTimeout(function(){return i.a.tabReload(205)},1e3)):(toastr.error(t.msg),this.canSubmit=!0)},cancel:function(){s.a.closeNowTab()}},created:function(){var t=this;i.a.getTableKeys(o.a,this.code,this.dataKeys).then(function(n){t.dataKeys=n,t.canShow=!0}),"new"!=this.id&&o.a.Patent.details(this.id).then(function(n){200==n.code&&(t.form=n.data)})},mounted:function(){}},u={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"wrapper wrapper-content"},[a("div",{staticClass:"ibox"},[t._m(0),t._v(" "),a("div",{staticClass:"ibox-content"},[t.canShow?a("form",{staticClass:"form-horizontal",on:{submit:function(n){return n.preventDefault(),t.submit(n)}}},[a("div",{staticClass:"row"},[a("public-form",{attrs:{dataKeys:t.dataKeys,form:t.form}})],1),t._v(" "),a("div",{staticClass:"text-center row"},[t.canEdit()?[t.canSubmit?a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("保存")]):t._e(),t._v(" "),t.canSubmit?t._e():a("button",{staticClass:"btn btn-default"},[t._v("保存")]),t._v(" "),t.canLocking()?a("b",{staticClass:"btn btn-warning",on:{click:t.locking}},[t._v("提交")]):t._e()]:t._e(),t._v(" "),a("b",{staticClass:"btn btn-white",on:{click:t.cancel}},[t._v("取消")])],2)]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"ibox-title"},[n("h5",[this._v("发明专利详情")])])}]};var d=a("VU/8")(r,u,!1,function(t){a("nj0p")},"data-v-4cb7e15b",null);n.default=d.exports},nj0p:function(t,n){}});
//# sourceMappingURL=53.0df62e33aab8552e129d.js.map