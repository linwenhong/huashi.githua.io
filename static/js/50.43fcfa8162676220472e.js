webpackJsonp([50],{drNY:function(t,i){},dt0v:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("8IWg"),a=e("+0rj"),s=e("TNi3"),r=e("9+VK"),o=e("BXxX"),c={name:"periodicalPaperEnglishDetails",data:function(){return{id:this.$route.params.id,form:{},code:n.a.PeriodicalPaperEnglish,dataKeys:n.E,canShow:!1,canSubmit:!0,user:r.a.getUser(),permissionName:"academic_achievements"}},methods:{canEdit:function(){return r.a.canEdit(this.form,this.permissionName)||"new"==this.id},canLocking:function(){return r.a.canLocking(this.form,this.permissionName)},locking:function(){var t=this;confirm("确定提交吗?提交后将不能修改!")&&a.a.getFormVal(this.dataKeys,this.form).then(function(i){i.status=1,t.confirm(i)})},submit:function(){var t=this;"华师"==this.form.selectUnit666?(this.form.hua_shi=this.form.selectRemark666,this.form.other_unit=null):(this.form.other_unit=this.form.selectRemark666,this.form.hua_shi=null),a.a.getFormVal(this.dataKeys,this.form).then(function(i){return t.confirm(i)})},confirm:function(t){var i=this;if(this.canSubmit){var e={};for(var n in t)"selectUnit666"==n||"selectRemark666"==n||(e[n]=t[n]);this.canSubmit=!1,"new"!=this.id?o.a.PeriodicalPaperEnglish.edit(this.id,e).then(function(t){return i.responseHandle(t)}):o.a.PeriodicalPaperEnglish.add(e).then(function(t){return i.responseHandle(t)})}},responseHandle:function(t){200==t.code?(toastr.success(t.msg),setTimeout(function(){return a.a.tabReload(202)},1e3)):(toastr.error(t.msg),this.canSubmit=!0)},cancel:function(){s.a.closeNowTab()}},created:function(){var t=this;a.a.getTableKeys(o.a,this.code,this.dataKeys).then(function(i){t.dataKeys=i,t.canShow=!0}),"new"!=this.id&&o.a.PeriodicalPaperEnglish.details(this.id).then(function(i){200==i.code&&(t.form=i.data,t.form.hua_shi?(t.form.selectUnit666="华师",t.form.selectRemark666=t.form.hua_shi):(t.form.selectUnit666="外单位",t.form.selectRemark666=t.form.other_unit))})},mounted:function(){}},u={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"wrapper wrapper-content"},[e("div",{staticClass:"ibox"},[t._m(0),t._v(" "),e("div",{staticClass:"ibox-content"},[t.canShow?e("form",{staticClass:"form-horizontal",on:{submit:function(i){return i.preventDefault(),t.submit(i)}}},[e("div",{staticClass:"row"},[e("public-form",{attrs:{dataKeys:t.dataKeys,form:t.form}})],1),t._v(" "),e("div",{staticClass:"text-center row"},[t.canEdit()?[t.canSubmit?e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("保存")]):t._e(),t._v(" "),t.canSubmit?t._e():e("button",{staticClass:"btn btn-default"},[t._v("保存")]),t._v(" "),t.canLocking()?e("b",{staticClass:"btn btn-warning",on:{click:t.locking}},[t._v("提交")]):t._e()]:t._e(),t._v(" "),e("b",{staticClass:"btn btn-white",on:{click:t.cancel}},[t._v("取消")])],2)]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"ibox-title"},[i("h5",[this._v("期刊论文-英文-详情")])])}]};var m=e("VU/8")(c,u,!1,function(t){e("drNY")},"data-v-512165e0",null);i.default=m.exports}});
//# sourceMappingURL=50.43fcfa8162676220472e.js.map