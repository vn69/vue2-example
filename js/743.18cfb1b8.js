"use strict";(self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[]).push([[743],{7743:function(e,t,o){o.r(t),o.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h2",[e._v("Todo 2")]),t("el-input",{ref:"refInput",staticClass:"w-25 me-2",attrs:{placeholder:"Please input"},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo.apply(null,arguments)}},model:{value:e.todoName,callback:function(t){e.todoName=t},expression:"todoName"}}),t("el-button",{attrs:{type:"primary",disabled:0==e.todoName.trim().length},on:{click:e.addTodo}},[e._v("Add")]),t("div",{staticClass:"body my-2"},e._l(e.filterTask,(function(o,a){return t("div",{key:a},[t("el-checkbox",{attrs:{value:o.isDone},on:{change:()=>e.checkTodolist(a)}},[t("div",{class:{checked:o.isDone}},[e._v(e._s(o.name))])])],1)})),0),e.getTodolist.length?t("div",[1==e.unCompleteTask.length?t("span",[e._v(e._s(e.unCompleteTask.length)+" item left -")]):t("span",[e._v(e._s(e.unCompleteTask.length)+" items left -")]),t("el-radio-group",{staticClass:"mx-2",attrs:{size:"mini"},model:{value:e.typeTodo,callback:function(t){e.typeTodo=t},expression:"typeTodo"}},[t("el-radio-button",{attrs:{label:"all"}}),t("el-radio-button",{attrs:{label:"uncomplete"}}),t("el-radio-button",{attrs:{label:"complete"}})],1),t("el-button",{attrs:{disabled:!e.completedTask.length,type:"danger",plain:"",size:"mini"},on:{click:e.clearDoneTask}},[e._v("Clear")])],1):e._e()],1)},l=[],s=o(629),n={data(){return{todoName:"",typeTodo:"all"}},methods:{...(0,s.OI)("todo",["addTask","clearDoneTask","checkTodolist"]),addTodo(){this.todoName=this.todoName.trim(),this.todoName&&(this.addTask(this.todoName),this.todoName="",this.$refs.refInput.focus())}},computed:{...(0,s.Se)("todo",["completedTask","unCompleteTask","getTodolist"]),filterTask(){switch(this.typeTodo){case"uncomplete":return this.unCompleteTask;case"complete":return this.completedTask;default:return this.getTodolist}}}},d=n,i=o(1001),r=(0,i.Z)(d,a,l,!1,null,"233295ae",null),c=r.exports}}]);
//# sourceMappingURL=743.18cfb1b8.js.map