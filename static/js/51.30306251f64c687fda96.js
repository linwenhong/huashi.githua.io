webpackJsonp([51],{"5W+P":function(t,n){},H8VK:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("8IWg"),a=e("+0rj"),s=e("TNi3"),o=e("9+VK"),c=e("BXxX"),r={name:"hostMeetingDetails",data:function(){return{id:this.$route.params.id,form:{},code:i.a.HostMeeting,dataKeys:i.z,canShow:!1,canSubmit:!0,user:o.a.getUser(),permissionName:"academic_achievements"}},methods:{canEdit:function(){return o.a.canEdit(this.form,this.permissionName)||"new"==this.id},canLocking:function(){return o.a.canLocking(this.form,this.permissionName)},locking:function(){var t=this;confirm("确定提交吗?提交后将不能修改!")&&a.a.getFormVal(this.dataKeys,this.form).then(function(n){n.status=1,t.confirm(n)})},submit:function(){var t=this;a.a.getFormVal(this.dataKeys,this.form).then(function(n){return t.confirm(n)})},confirm:function(t){var n=this;this.canSubmit&&(this.canSubmit=!1,"new"!=this.id?c.a.HostMeeting.edit(this.id,t).then(function(t){return n.responseHandle(t)}):c.a.HostMeeting.add(t).then(function(t){return n.responseHandle(t)}))},responseHandle:function(t){200==t.code?(toastr.success(t.msg),setTimeout(function(){return a.a.tabReload(208)},1e3)):(toastr.error(t.msg),this.canSubmit=!0)},cancel:function(){s.a.closeNowTab()}},created:function(){var t=this;a.a.getTableKeys(c.a,this.code,this.dataKeys).then(function(n){t.dataKeys=n,t.canShow=!0}),"new"!=this.id&&c.a.HostMeeting.details(this.id).then(function(n){200==n.code&&(t.form=n.data)})},mounted:function(){}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper wrapper-content"},[e("div",{staticClass:"ibox"},[t._m(0),t._v(" "),e("div",{staticClass:"ibox-content"},[t.canShow?e("form",{staticClass:"form-horizontal",on:{submit:function(n){return n.preventDefault(),t.submit(n)}}},[e("div",{staticClass:"row"},[e("public-form",{attrs:{dataKeys:t.dataKeys,form:t.form}})],1),t._v(" "),e("div",{staticClass:"text-center row"},[t.canEdit()?[t.canSubmit?e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("保存")]):t._e(),t._v(" "),t.canSubmit?t._e():e("button",{staticClass:"btn btn-default"},[t._v("保存")]),t._v(" "),t.canLocking()?e("b",{staticClass:"btn btn-warning",on:{click:t.locking}},[t._v("提交")]):t._e()]:t._e(),t._v(" "),e("b",{staticClass:"btn btn-white",on:{click:t.cancel}},[t._v("取消")])],2)]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"ibox-title"},[n("h5",[this._v("主办会议/培训详情")])])}]};var d=e("VU/8")(r,u,!1,function(t){e("5W+P")},"data-v-5044457a",null);n.default=d.exports}});
//# sourceMappingURL=51.30306251f64c687fda96.js.map