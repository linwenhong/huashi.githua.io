webpackJsonp([52],{hZ1P:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("BHhu"),n=a("8IWg"),o=a("TNi3"),s=a("jNku"),d=a("+0rj"),r=a("9+VK"),c=a("BXxX"),l={name:"studentMeetingPaperTable",data:function(){return{code:n.a.StudentMeetingPaper,dataKeys:n.p,items:[],total:0,page:1,pageSize:i.c,operation:{},service:c.a,condition:{page_num:i.c},searchOptions:[{label:"会议日期",key:"time",type:"date"},{label:"姓名",key:"name"},{label:"学号",key:"study_num"},{label:"专业",key:"specialty"},{label:"导师",key:"teacher"},{label:"论文名称",key:"paper_name"},{label:"会议名称",key:"meeting_name"},{label:"会议地点",key:"address"}]}},methods:{publicSearch:function(e){for(var t in e)this.condition[t]=e[t];this.getDataTables(this.page)},search:function(){this.getDataTables()},pageChange:function(e){this.getDataTables(e)},getDataTables:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.pageSize=this.condition.page_num;var a={};for(var i in t&&(a.page=t),this.condition)this.condition[i]&&(a[i]=this.condition[i]);c.a.StudentMeetingPaper.get(a).then(function(a){200==a.code&&(e.page=t,e.items=a.data.data,e.total=a.data.total,setTimeout(function(){return s.a.iCheck()},200))})},download:function(e){this.fileExport({ids:[e.id],model:this.code})},fileExport:function(e){c.a.FileDownload(e).then(function(e){d.a.download(e)})},delConfirm:function(e){var t=this;c.a.StudentMeetingPaper.del(e.id).then(function(e){200==e.code&&t.getDataTables()})},add:function(){o.a.addDetailsTab("/views/studentMeetingPaper/new","学生发表会议论文-新增")},edit:function(e){o.a.addDetailsTab("/views/studentMeetingPaper/"+e.id,"学生发表会议论文-详情-"+e.id)}},created:function(){var e=this;this.operation=r.a.pageOperation("talent_development"),d.a.getTableKeys(c.a,this.code,this.dataKeys).then(function(t){e.dataKeys=t}),this.$route.query.key&&(this.condition.key=this.$route.query.key,this.condition.status=3),this.getDataTables()},mounted:function(){}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper wrapper-content"},[a("div",{staticClass:"ibox float-e-margins"},[e._m(0),e._v(" "),a("div",{staticClass:"ibox-content"},[a("format-table",{attrs:{operation:e.operation,code:e.code,condition:e.condition,searchOptions:e.searchOptions,dataKeys:e.dataKeys,items:e.items,page:e.page,total:e.total,pageSize:e.pageSize,service:e.service},on:{search:e.publicSearch,fileExport:e.fileExport,download:e.download,edit:e.edit,delConfirm:e.delConfirm,pageChange:e.pageChange,add:e.add}})],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ibox-title"},[t("h5",[this._v("学生发表会议论文")])])}]};var p=a("VU/8")(l,u,!1,function(e){a("lPtJ")},"data-v-4cdd4698",null);t.default=p.exports},lPtJ:function(e,t){}});
//# sourceMappingURL=52.184a78c3cd04cad7c486.js.map