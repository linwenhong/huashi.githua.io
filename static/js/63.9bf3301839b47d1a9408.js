webpackJsonp([63],{Ffyj:function(e,t){},"L+aK":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("BHhu"),r=a("8IWg"),c=a("9+VK"),s=a("TNi3"),i=a("jNku"),o=a("+0rj"),l=a("BXxX"),u={name:"approval",data:function(){return{canRefuseAll:n.d,code:r.a.AcademicWorks,CodeTree:r.b,codeTree:[],canShow:!1,items:[],total:0,page:1,pageSize:n.c,select:[0,0,0],condition:{},searchOptions:[],type:"",imgUrl:""}},methods:{publicSearch:function(e){var t=this.codeTree[this.select[0]].children[this.select[1]];for(var a in t.children?this.type=t.children[this.select[2]].code:this.type=t.code,e)this.condition[a]=e[a];this.getDataTables()},search:function(){this.getDataTables()},pageChange:function(e){this.getDataTables(e)},getDataTables:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a={type:this.type};for(var n in t&&(a.page=t),this.condition)this.condition[n]&&(a[n]=this.condition[n]);l.a.Approval.get(a).then(function(a){200==a.code&&(e.page=t,e.items=a.data.data,e.total=a.data.total,setTimeout(function(){return i.a.iCheck()},200))})},fileExport:function(e){l.a.FileDownload(e).then(function(e){o.a.download(e)})},agreeSelect:function(){var e=this,t=o.a.getChecked("select");0!=t.length?swal({title:"确定勾选选项批量审核通过吗",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"确认",cancelButtonText:"取消",closeOnConfirm:!1},function(){t.map(function(t){e.agreeConfirm(t)})}):toastr.warning("请勾选选项")},agree:function(e){var t=this;swal({title:"确定审核通过吗",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"确认",cancelButtonText:"取消",closeOnConfirm:!1},function(){t.agreeConfirm(e.id)})},agreeConfirm:function(e){var t=this;l.a.Approval.agree(e,{type:this.type}).then(function(e){200==e.code&&(swal("审核成功！","","success"),t.getDataTables(t.page))})},refuse:function(e){var t=prompt("确定审核驳回吗?");null!=t&&this.refuseConfirm(e.id,t)},refuseConfirm:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";l.a.Approval.refuse(e,{type:this.type,detail:a}).then(function(e){200==e.code&&(swal("驳回成功！","","error"),t.getDataTables(t.page))})},refuseAll:function(){var e=this;swal({title:"确定驳回当前分页所有申请吗?",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"确认",cancelButtonText:"取消",closeOnConfirm:!1},function(){e.items.map(function(t){e.refuseConfirm(t.id)})})},details:function(e){var t=void 0,a=void 0;switch(this.type){case r.a.Researcher:t="collegePersonnel/scientificResearchPersonnel",a="科研人员";break;case r.a.TalentPlan:t="collegePersonnel/talentPlan",a="人才计划";break;case r.a.AcademicCommittee:t="collegePersonnel/academicCommittee",a="学术委员会";break;case r.a.EthicsCommittee:t="collegePersonnel/ethicsCommittee",a="伦理委员会";break;case r.a.CollegeArea:t="collegeFacilities/area",a="实验场地";break;case r.a.CollegeDevice:t="collegeFacilities/device",a="研究设备";break;case r.a.AcademicWorks:t="academicWorks",a="学术著作";break;case r.a.PeriodicalPaperChinese:t="periodicalPaper/periodicalPaperChinese",a="期刊论文-中文";break;case r.a.PeriodicalPaperEnglish:t="periodicalPaper/periodicalPaperEnglish",a="期刊论文-英文";break;case r.a.ResearchProjectsCountry:t="researchProjects/country",a="科研项目(国家级项目)";break;case r.a.ResearchProjectsProvince:t="researchProjects/province",a="科研项目(省部级项目)";break;case r.a.ResearchProjectsOther:t="researchProjects/other",a="科研项目(其他纵向项目)";break;case r.a.ResearchProjectsLandscape:t="researchProjects/landscape",a="科研项目(横向项目)";break;case r.a.ResearchAwards:t="researchAwards",a="科研获奖";break;case r.a.Patent:t="patent",a="发明专利";break;case r.a.MeetingPaper:t="meetingPaper",a="会议论文";break;case r.a.ResearchReport:t="researchReport",a="研究报告";break;case r.a.HostMeeting:t="hostMeeting",a="主办会议/培训";break;case r.a.ParticipateMeeting:t="participateMeeting",a="参与会议/培训";break;case r.a.Score:t="score",a="评分";break;case r.a.MasterTraining:t="masterTraining",a="硕士培养";break;case r.a.DoctorTraining:t="doctorTraining",a="博士培养";break;case r.a.TeacherAward:t="teacherAward",a="教学获奖";break;case r.a.GoodCourse:t="goodCourse",a="精品课程";break;case r.a.TeachingMaterialConstruction:t="teachingMaterialConstruction",a="教材建设";break;case r.a.StudentAwards:t="studentAwards",a="学生获奖情况";break;case r.a.StudentWorks:t="studentWorks",a="学生发表著作情况";break;case r.a.StudentMeeting:t="studentMeeting",a="学生境内/境外参加会议";break;case r.a.StudentStudy:t="studentStudy",a="学生境内/境外交流学习情况";break;case r.a.StudentMeetingPaper:t="studentMeetingPaper",a="学生发表会议论文";break;case r.a.PracticeBase:t="practiceBase",a="实践基地";break;case r.a.PartTimeTutor:t="partTimeTutor",a="兼职导师";break;case r.a.ParticipateProfessionalPractice:t="participateProfessionalPractice",a="参加专业实践活动";break;case r.a.GraduateEnrollment:t="graduateEnrollment",a="招生与毕业情况";break;case r.a.RulesRegulations:t="rules",a="规则制度";break;default:return void alert("请配置url")}s.a.addDetailsTab("/views/"+t+"/"+e.id,a+"-详情-"+e.id)}},created:function(){var e=this;l.a.PageSet.get().then(function(t){if(200==t.code){var a=t.data;e.codeTree=e.CodeTree.filter(function(e){if(1==a[e.model]&&c.a.hasPermission(e.permission))return e})}else e.codeTree=e.CodeTree;i.a.iCheck(),e.canShow=!0})},mounted:function(){}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper wrapper-content"},[a("div",{staticClass:"ibox float-e-margins"},[e._m(0),e._v(" "),a("div",{staticClass:"ibox-content"},[e.canShow?a("div",{staticClass:"code"},[a("span",[e._v("模块")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.select[0],expression:"select[0]"}],staticClass:"form-control",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.select,0,t.target.multiple?a:a[0])},function(t){e.select[1]=0}]}},e._l(e.codeTree,function(t,n){return a("option",{domProps:{value:n}},[e._v(e._s(t.name))])})),e._v(" "),e.select[0]>=0&&e.codeTree[e.select[0]].children?[a("span",[e._v("子模块")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.select[1],expression:"select[1]"}],staticClass:"form-control",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.select,1,t.target.multiple?a:a[0])},function(t){e.select[2]=0}]}},e._l(e.codeTree[e.select[0]].children,function(t,n){return a("option",{domProps:{value:n}},[e._v(e._s(t.name))])}))]:e._e(),e._v(" "),e.select[1]>=0&&e.codeTree[e.select[0]].children[e.select[1]].children?[a("span",[e._v("二级子模块")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.select[2],expression:"select[2]"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.select,2,t.target.multiple?a:a[0])}}},e._l(e.codeTree[e.select[0]].children[e.select[1]].children,function(t,n){return a("option",{domProps:{value:n}},[e._v(e._s(t.name))])}))]:e._e()],2):e._e(),e._v(" "),a("public-search",{attrs:{pageName:e.code,condition:e.condition,searchOptions:e.searchOptions,hideStatus:!0},on:{search:e.publicSearch}}),e._v(" "),a("div",[a("button",{staticClass:"btn btn-sm btn-warning",on:{click:function(t){e.agreeSelect()}}},[e._v("选中通过")]),e._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:e.canRefuseAll,expression:"canRefuseAll"}],staticClass:"btn btn-sm btn-danger",on:{click:function(t){e.refuseAll()}}},[e._v("驳回当前分页所有申请")])]),e._v(" "),a("div",{staticClass:"table-page"},[a("table",{staticClass:"table table-bordered text-center"},[e._m(1),e._v(" "),a("tbody",e._l(e.items,function(t,n){return a("tr",{key:t.id},[a("td",[a("div",{staticClass:"checkbox i-checks"},[a("label",[a("input",{attrs:{name:"select",type:"checkbox"},domProps:{value:t.id}}),e._v(" "),a("i")])])]),e._v(" "),a("td",[e._v(e._s(t.id))]),e._v(" "),a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.created_at))]),e._v(" "),a("td",[e._v(e._s(e._f("approvalStatus")(t.status)))]),e._v(" "),a("td",[a("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(a){e.details(t)}}},[e._v("详情")]),e._v(" "),a("button",{staticClass:"btn btn-sm btn-warning",on:{click:function(a){e.agree(t)}}},[e._v("同意")]),e._v(" "),a("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(a){e.refuse(t)}}},[e._v("驳回")])])])}))]),e._v(" "),a("vue-pagination",{attrs:{"current-page":e.page,total:e.total,"page-size":e.pageSize,theme:"gray"},on:{"current-change":e.pageChange}})],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ibox-title"},[t("h5",[this._v("审批")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th"),e._v(" "),a("th",[e._v("ID")]),e._v(" "),a("th",[e._v("标题")]),e._v(" "),a("th",[e._v("添加时间")]),e._v(" "),a("th",[e._v("审核状态")]),e._v(" "),a("th",[e._v("操作")])])])}]};var p=a("VU/8")(u,d,!1,function(e){a("Ffyj")},"data-v-3f3c21a3",null);t.default=p.exports}});
//# sourceMappingURL=63.9bf3301839b47d1a9408.js.map