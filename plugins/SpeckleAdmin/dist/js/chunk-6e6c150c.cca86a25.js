(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e6c150c"],{"2d1f":function(t,e,s){t.exports=s("42bb")},"42bb":function(t,e,s){s("fd6f"),t.exports=s("a7d3").Object.entries},5176:function(t,e,s){t.exports=s("81ee")},7179:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-xl":""}},[s("div",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%"}},[s("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:!t.processor,expression:"!processor"}],staticClass:"ma-0",attrs:{indeterminate:!0,height:"2"}})],1),t.processor?s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"pa-3"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"display-1 font-weight-light text-capitalize my-5",attrs:{xs12:""}},[s("editable-span",{attrs:{text:t.processor.name},on:{update:t.updateName}})],1),s("v-flex",{staticClass:"ma-0 py-0 mb-2",attrs:{xs12:""}},[s("v-combobox",{attrs:{"menu-props":{maxHeight:0,zIndex:"0"},items:t.processor.tags,hint:"add or remove tags",solo:"","persistent-hint":"","small-chips":"","deletable-chips":"",multiple:"",tags:""},on:{input:t.updateTags},scopedSlots:t._u([{key:"no-data",fn:function(){return[t._v("processor has no tags.")]},proxy:!0}],null,!1,1877306083),model:{value:t.processor.tags,callback:function(e){t.$set(t.processor,"tags",e)},expression:"processor.tags"}})],1)],1),s("v-card-actions",[s("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[s("v-btn",t._g({attrs:{round:"",small:"",depressed:""}},r),[s("v-icon",[t._v("share")]),s("span",{staticClass:"mx-2"},[t._v("share")])],1)]}}],null,!1,3920682888)},[s("v-card",[s("v-card-title",[s("span",{staticClass:"font-weight-light"},[t._v("\n                  Share link\n                ")])]),s("v-card-text",[s("v-text-field",{staticClass:"font-weight-light",attrs:{readonly:!0},model:{value:t.shareLink,callback:function(e){t.shareLink=e},expression:"shareLink"}})],1)],1)],1)],1)],1)],1),s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"my-4"},[s("detail-description",{attrs:{resource:t.processor}})],1)],1),s("v-flex",[s("v-card",[s("v-flex",{staticClass:"pa-4",attrs:{"mb-3":""}},[s("v-icon",{staticClass:"mr-2"},[t._v("\n            code\n          ")]),s("span",{staticClass:"title font-weight-light mr-2"},[t._v("\n            Processor\n          ")])],1)],1),t._l(t.processor.blocks,function(e,r){return s("v-flex",{key:r,attrs:{xs12:""}},[s("processor-block",{attrs:{index:r,block:e,output:t.blockOutput[r],status:t.blockStatus[r],params:t.processor.params[r]},on:{"remove-block":t.removeBlock,"update-param":t.updateParam,"rerun-block":t.rerunBlock}})],1)}),t.processor.blocks.length>0?s("v-flex",{attrs:{xs12:"","mb-3":"","pa-0":""}},[s("v-card",[s("v-flex",{attrs:{"ma-0":"","pa-3":""}},[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n              receipt\n            ")]),s("span",{staticClass:"font-weight-light mr-2"},[t._v("\n              Output\n            ")])],1),t.successRun?s("v-divider"):t._e(),t.successRun?s("v-flex",{attrs:{"pa-3":""}},[s("vue-json-pretty",{attrs:{data:t.responseObject,deep:1,"highlight-mouseover-node":"","show-length":"","show-line":!1,"show-double-quotes":!1}})],1):t._e()],1)],1):t._e(),s("v-card",[s("v-flex",{attrs:{xs12:""}},[s("v-autocomplete",{attrs:{"return-object":"",items:t.lambdas,"item-text":"name","item-value":"name",label:"Add new block"},on:{input:t.addBlock},scopedSlots:t._u([{key:"item",fn:function(e){return[s("v-icon",{staticClass:"mr-2"},[t._v("\n                "+t._s(e.item.icon?e.item.icon:"code")+"\n              ")]),t._v("\n              "+t._s(e.item.name)+"\n            ")]}}],null,!1,1932615675)},[s("template",{slot:"selection"},[t._v("\n              "+t._s(null)+"\n            ")])],2)],1)],1)],2)],1):t._e(),s("v-btn",{attrs:{color:"primary",dark:"",fixed:"",large:"",bottom:"",right:"",fab:""},on:{click:t.runProcessor}},[t.isRunning?s("v-progress-circular",{attrs:{indeterminate:""}}):s("v-icon",[t._v("\n      "+t._s(this.successRun?"replay":"play_arrow")+"\n    ")])],1)],1)},a=[],n=(s("a481"),s("7618")),o=s("a745"),i=s.n(o),c=s("bd86");function l(t){if(i()(t))return t}var u=s("5d73"),p=s.n(u);function h(t,e){var s=[],r=!0,a=!1,n=void 0;try{for(var o,i=p()(t);!(r=(o=i.next()).done);r=!0)if(s.push(o.value),e&&s.length===e)break}catch(c){a=!0,n=c}finally{try{r||null==i["return"]||i["return"]()}finally{if(a)throw n}}return s}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function m(t,e){return l(t)||h(t,e)||d()}var v=s("2d1f"),b=s.n(v),f=s("795b"),k=s.n(f),g=s("75fc"),x=(s("96cf"),s("3b8d")),y=s("a4bb"),_=s.n(y),w=s("f499"),O=s.n(w),j=s("5176"),S=s.n(j),A=(s("7f7f"),s("55dd"),s("f7fe")),P=s.n(A),C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"","ma-0":"","pa-0":""}},[s("v-card",[s("v-card-title",[s("v-icon",{staticClass:"ml-2 mr-2",attrs:{small:""}},[t._v("\n          "+t._s(t.block.icon?t.block.icon:"code")+"\n        ")]),s("span",{staticClass:"font-weight-light mr-2"},[t._v("\n          "+t._s(t.block.name)+"\n        ")]),s("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[s("v-btn",t._g({attrs:{round:"",small:"",depressed:"",color:"primary"}},r),[s("span",[t._v("help")])])]}}])},[s("v-card",[s("v-card-title",[s("span",{staticClass:"font-weight-light"},[t._v("Description")])]),s("v-card-text",[t._v("\n              "+t._s(t.block.description)+"\n            ")])],1)],1),s("v-spacer"),s("span",["success"==t.status?s("v-btn",{attrs:{round:"",small:"",depressed:"",color:"primary"},on:{click:function(e){return t.$emit("rerun-block",t.index)}}},[s("v-icon",{attrs:{small:""}},[t._v("replay")]),s("span",{staticClass:"mx-2"},[t._v("re-run")])],1):t._e(),s("v-btn",{attrs:{fab:"",small:"",depressed:"",color:"primary"},on:{click:function(e){return t.$emit("remove-block",t.index)}}},[s("v-icon",[t._v("close")])],1)],1)],1),this.block.parameters.length>0?s("v-divider",{staticClass:"mx-0 my-0"}):t._e(),t.isAuthenticated?s("div",[this.block.customComponent?s("v-card-text",[s(t.customComponent,{tag:"component",attrs:{block:t.block,params:t.params},on:{"update-param":t.updateParams}})],1):this.block.parameters.length>0&&t.isAuthenticated?s("v-card-text",[s("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.arrayParams,function(e){return s("v-flex",{key:e.name,attrs:{xs12:"",sm6:"",md3:""}},[s("v-combobox",{attrs:{multiple:"","small-chips":"",label:e.name},on:{change:function(e){return t.$emit("update-param",{index:t.index,params:t.params})}},model:{value:t.params[e.name],callback:function(s){t.$set(t.params,e.name,s)},expression:"params[param.name]"}})],1)}),t._l(t.genericParams,function(e){return s("v-flex",{key:e.name,attrs:{xs12:"",sm6:"",md3:""}},[s("v-text-field",{attrs:{label:e.name},on:{change:function(e){return t.$emit("update-param",{index:t.index,params:t.params})}},model:{value:t.params[e.name],callback:function(s){t.$set(t.params,e.name,s)},expression:"params[param.name]"}})],1)}),t._l(t.booleanParams,function(e){return s("v-flex",{key:e.name,attrs:{xs12:"",sm6:"",md3:""}},[s("v-checkbox",{attrs:{label:e.name},on:{change:function(e){return t.$emit("update-param",{index:t.index,params:t.params})}},model:{value:t.params[e.name],callback:function(s){t.$set(t.params,e.name,s)},expression:"params[param.name]"}})],1)}),t._l(t.objectarrayParams,function(e){return s("v-flex",{key:e.name,attrs:{xs12:"",sm12:"",md12:""}},[s("v-card",{attrs:{outlined:""}},[s("v-flex",[s("span",{staticClass:"font-weight-light mr-3"},[t._v(t._s(e.name))]),s("v-dialog",{attrs:{persistent:!0,"max-width":"300"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[s("v-btn",t._g({attrs:{round:"",small:""}},r),[s("v-icon",{attrs:{small:""}},[t._v("add")]),s("span",{staticClass:"mx-2"},[t._v("new entry")])],1)]}}],null,!0),model:{value:t.displayDialog[e.name],callback:function(s){t.$set(t.displayDialog,e.name,s)},expression:"displayDialog[param.name]"}},[s("v-card",[s("v-card-title",{staticClass:"title font-weight-light"},[t._v("\n                        "+t._s(-1==t.objectArrayIndex?"New Entry":"Modify Entry")+"\n                      ")]),s("v-card-text",[s("v-layout",{attrs:{row:"",wrap:""}},t._l(e.headers,function(r){return s("v-flex",{key:e.name+"_"+r,attrs:{xs12:"",sm12:"",md12:""}},[s("v-text-field",{attrs:{label:r},model:{value:t.objectArrayItem[r],callback:function(e){t.$set(t.objectArrayItem,r,e)},expression:"objectArrayItem[header]"}})],1)}),1)],1),s("v-card-actions",[s("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(s){return t.addObjectArrayItem(e)}}},[t._v("\n                          "+t._s(-1==t.objectArrayIndex?"Add":"Modify")+"\n                        ")]),s("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(s){return t.resetObjectArrayDialog(e)}}},[t._v("\n                          Cancel\n                        ")])],1)],1)],1)],1),s("v-data-table",{attrs:{"disable-initial-sort":"","hide-actions":"",headers:t.tableHeader(e.headers),items:t.params[e.name]},scopedSlots:t._u([{key:"items",fn:function(r){return[t._l(Object.entries(r.item),function(e){return s("td",{key:e[0]},[t._v(t._s(e[1]))])}),s("td",{attrs:{width:"200px"}},[s("v-btn",{attrs:{flat:"",icon:"",small:""},on:{click:function(s){return t.deleteObjectArrayItem(e,r.index)}}},[s("v-icon",{attrs:{small:""}},[t._v("\n                          delete\n                        ")])],1),s("v-btn",{attrs:{flat:"",icon:"",small:""},on:{click:function(s){return t.editObjectArrayItem(e,r.index)}}},[s("v-icon",{attrs:{small:""}},[t._v("\n                          edit\n                        ")])],1)],1)]}},{key:"no-data",fn:function(){return[t._l(e.headers,function(t){return s("td",{key:t})}),s("td",{attrs:{width:"10%"}})]},proxy:!0}],null,!0)})],1)],1)})],2)],1):t._e()],1):s("div",[s("v-card-text",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.isAuthenticating?s("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):s("v-btn",{attrs:{round:"",depressed:"",color:"primary"},on:{click:function(e){return t.authenticate()}}},[t._v("\n                Authenticate\n              ")])],1)],1)],1)],1),s("v-progress-linear",{attrs:{color:"primary",indeterminate:"running"==this.status}})],1)],1),s("v-flex",{staticClass:"title font-weight-black",attrs:{xs12:"","ma-0":"","pa-0":"","text-xs-center":""}},[t._v("\n    |\n  ")]),s("v-flex",{attrs:{xs12:"","mt-0":"","pa-0":"","text-xs-center":""}},[null!=t.output?s("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[s("v-btn",t._g({attrs:{round:"",small:"",dark:"",depressed:"",color:"success"==t.status?"green":"red"}},r),[s("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v(t._s("success"==t.status?"check":"stop"))]),s("span",{staticClass:"mx-2"},[t._v("view output")])],1)]}}],null,!1,2748714445)},[s("v-card",[s("v-card-title",[s("span",{staticClass:"font-weight-light"},[t._v("\n            "+t._s("error"==t.status?"Error":"Response")+"\n          ")])]),s("v-card-text",[s("vue-json-pretty",{attrs:{data:t.responseObject,deep:1,"highlight-mouseover-node":"","show-length":"","show-line":!1,"show-double-quotes":!1}})],1)],1)],1):s("v-btn",{attrs:{round:"",small:"",dark:"",depressed:"",color:"running"==t.status?"orange":"primary"}},[s("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v(t._s("running"==t.status?"timer":"drafts"))]),s("span",{staticClass:"mx-2"},[t._v(t._s("running"==t.status?"waiting":"no output"))])],1)],1),s("v-flex",{staticClass:"title font-weight-black",attrs:{xs12:"","pa-0":"","text-xs-center":""}},[s("v-icon",[t._v("arrow_downward")])],1)],1)},$=[],I=s("db0c"),R=s.n(I),D=(s("ac6a"),s("6762"),s("2fdb"),s("d538")),B=s.n(D),E={name:"ProcessorBlock",components:{VueJsonPretty:B.a},props:{index:null,block:Object,output:null,status:"",params:{}},computed:{isAuthenticated:function(){if(this.block.msal){var t="msal|"+this.block.msal.clientId;return!!this.$store.state.tokens.hasOwnProperty(t)}return!0},customComponent:function(){var t=this;return function(){return s("afc9")("./".concat(t.block.function,".vue"))}},arrayParams:function(){return this.block.parameters.filter(function(t){return"array"==t.type})},booleanParams:function(){return this.block.parameters.filter(function(t){return"boolean"==t.type})},genericParams:function(){return this.block.parameters.filter(function(t){return["string","int","double"].includes(t.type)})},objectarrayParams:function(){return this.block.parameters.filter(function(t){return"objectarray"==t.type})},numOutput:function(){return null==this.output?0:"string"==typeof this.output?1:_()(this.output).length},responseObject:function(){if(this.numOutput<=10)return this.removeArraysRecursive(this.output);var t={};for(var e in this.output)if(t[e]=this.output[e],_()(t).length>=10)break;return t["_hidden"]="... (".concat(this.numOutput-10," more objects)"),this.removeArraysRecursive(t)}},data:function(){return{displayDialog:{},objectArrayItem:{},objectArrayIndex:-1,isAuthenticating:!1}},methods:{removeArraysRecursive:function(t){var e={};if("string"==typeof t)return t;for(var s in t)t.hasOwnProperty(s)&&(i()(t[s])?t[s].length<3?e[s]=t[s]:e[s]=[].concat(Object(g["a"])(t[s].slice(0,3)),["... (".concat(t[s].length-3," more values)")]):"object"===Object(n["a"])(t[s])&&null!==t[s]?e[s]=this.removeArraysRecursive(t[s]):e[s]=t[s]);return e},tableHeader:function(t){var e=[];return t.forEach(function(t){e.push({text:t,value:t,sortable:!1})}),e.push({text:"actions",value:"actions",sortable:!1}),e},resetObjectArrayDialog:function(t){this.objectArrayItem={},this.displayDialog[t.name]=!1,this.objectArrayIndex=-1},addObjectArrayItem:function(t){R()(this.objectArrayItem).length==t.headers.length&&(this.params.hasOwnProperty(t.name)||(this.params[t.name]=[]),-1==this.objectArrayIndex?this.params[t.name].push(this.objectArrayItem):this.params[t.name].splice(this.objectArrayIndex,1,this.objectArrayItem),this.objectArrayItem={},this.$emit("update-param",{index:this.index,params:this.params})),this.resetObjectArrayDialog(t)},deleteObjectArrayItem:function(t,e){this.params[t.name].splice(e,1),this.$emit("update-param",{index:this.index,params:this.params})},editObjectArrayItem:function(t,e){this.objectArrayItem=S()({},this.params[t.name][e]),this.objectArrayIndex=e,this.displayDialog[t.name]=!0},updateParams:function(t){this.params=t,this.$emit("update-param",{index:this.index,params:this.params})},authenticate:function(){var t=this;this.isAuthenticated||(this.isAuthenticating=!0,this.$store.dispatch("authenticateBlocks",[this.block]).then(function(e){t.isAuthenticating=!1}).catch(function(e){console.log(e),t.isAuthenticated=!1}))}},created:function(){}},L=E,q=s("2877"),N=Object(q["a"])(L,C,$,!1,null,"35bfa502",null),T=N.exports,U=s("8450"),H=s("bc3a"),J=s.n(H),M={name:"ProcessorView",components:{ProcessorBlock:T,DetailDescription:U["a"],VueJsonPretty:B.a},computed:{lambdas:function(){return this.$store.state.lambdas.sort(function(t,e){return t.name>e.name?1:-1})},shareLink:function(){var t=S()({},this.processor);return delete t._id,delete t.owner,delete t.private,delete t.canRead,delete t.canWrite,delete t.anonymousComments,delete t.comments,window.location.origin+"/#/processors/import?processor="+btoa(encodeURI(O()(t)))},successRun:function(){return this.blockStatus.length>0&&this.blockStatus.length==this.processor.blocks.length&&"success"==this.blockStatus[this.blockStatus.length-1]},responseObject:function(){if(!this.successRun)return null;if("string"==typeof this.blockOutput[this.blockOutput.length-1])return this.blockOutput[this.blockOutput.length-1];if(_()(this.blockOutput[this.blockOutput.length-1]).length<=10)return this.removeArraysRecursive(this.blockOutput[this.blockOutput.length-1]);var t={};for(var e in this.blockOutput[this.blockOutput.length-1])if(t[e]=this.blockOutput[this.blockOutput.length-1][e],_()(t).length>10)break;return t["_hidden"]="... (".concat(_()(this.blockOutput[this.blockOutput.length-1]).length-10," more objects)"),this.removeArraysRecursive(t)}},data:function(){return{initInput:"",isRunning:!1,id:"",processor:null,blockStatus:[],blockOutput:[],toRequest:[],requestBuckets:[],isRequesting:!1,pauseRequesting:!1,bucketInProgress:!1}},mutations:{},methods:{runProcessor:function(){var t=Object(x["a"])(regeneratorRuntime.mark(function t(){var e,s,r,a,n,o,i,c,l,u,p;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.isRunning){t.next=2;break}return t.abrupt("return");case 2:this.isRunning=!0,e=this.initInput,s=0,this.successRun?(this.blockOutput.splice(0,this.blockOutput.length),this.blockStatus.splice(0,this.blockStatus.length)):this.blockStatus.length>0&&(s=this.blockStatus.filter(function(t){return"success"==t}).length,s>0&&(e=this.blockOutput[s-1]),this.blockOutput.splice(s,this.blockOutput.length-s),this.blockStatus.splice(s,this.blockStatus.length-s));case 6:if(!(s<this.processor.blocks.length)){t.next=77;break}if(this.blockStatus.push("running"),r=this.getToken(this.processor.blocks[s]),a=this.processor.params[s]?this.processor.params[s]:new Object,!this.processor.blocks[s].allowBucketing||e.constructor!==Array){t.next=57;break}n=[],o=250,i=[],c=0;case 14:if(!(c<e.length)){t.next=35;break}if(n.push(e[c]),c%o!==0||0===c){t.next=32;break}return t.prev=17,t.next=20,this.callLambda(this.processor.blocks[s].function,n,a,r);case 20:l=t.sent,l.data.constructor===Array?i.push.apply(i,Object(g["a"])(l.data)):i.push(l.data),t.next=31;break;case 24:return t.prev=24,t.t0=t["catch"](17),this.blockStatus.pop(),this.blockStatus.push("error"),this.blockOutput.push(t.t0.response.data),this.isRunning=!1,t.abrupt("return");case 31:n=[];case 32:c++,t.next=14;break;case 35:if(!(n.length>0)){t.next=51;break}return t.prev=36,t.next=39,this.callLambda(this.processor.blocks[s].function,n,a,r);case 39:u=t.sent,u.data.constructor===Array?i.push.apply(i,Object(g["a"])(u.data)):i.push(u.data),t.next=50;break;case 43:return t.prev=43,t.t1=t["catch"](36),this.blockStatus.pop(),this.blockStatus.push("error"),this.blockOutput.push(t.t1.response.data),this.isRunning=!1,t.abrupt("return");case 50:n=[];case 51:this.blockStatus.pop(),this.blockStatus.push("success"),this.blockOutput.push(i),e=i,t.next=74;break;case 57:return t.prev=57,t.next=60,this.callLambda(this.processor.blocks[s].function,e,a,r);case 60:p=t.sent,this.blockStatus.pop(),this.blockStatus.push("success"),this.blockOutput.push(p.data),e=p.data,t.next=74;break;case 67:return t.prev=67,t.t2=t["catch"](57),this.blockStatus.pop(),this.blockStatus.push("error"),this.blockOutput.push(t.t2.response.data),this.isRunning=!1,t.abrupt("return");case 74:s++,t.next=6;break;case 77:this.isRunning=!1;case 78:case"end":return t.stop()}},t,this,[[17,24],[36,43],[57,67]])}));function e(){return t.apply(this,arguments)}return e}(),callLambda:function(t,e,s,r){var a=this;return new k.a(function(n,o){J()({method:"POST",url:".netlify/functions/".concat(t),baseURL:location.protocol+"//"+location.host,data:{baseUrl:a.$store.state.server,token:r,input:e,parameters:s}}).then(function(t){return n(t)}).catch(function(t){return o(t)})})},rerunBlock:function(t){this.isRunning||(this.blockOutput.splice(t,this.blockOutput.length-t),this.blockStatus.splice(t,this.blockStatus.length-t),this.runProcessor())},addBlock:function(t){null!=t&&(this.processor.blocks.push(t),this.processor.params.push({})),this.updateBlock()},removeBlock:function(t){this.blockOutput.splice(t,this.blockOutput.length-t),this.blockStatus.splice(t,this.blockStatus.length-t),this.processor.params.splice(t,1),this.processor.blocks.splice(t,1),this.updateBlock()},updateParam:function(t){this.blockOutput.splice(t.index,this.blockOutput.length-t.index),this.blockStatus.splice(t.index,this.blockStatus.length-t.index),this.processor.params[t.index]=S.a.apply(Object,[{}].concat(Object(g["a"])(b()(t.params).filter(function(t){var e=m(t,2),s=(e[0],e[1]);return null!==s&&("boolean"==typeof s?s:_()(s).length>0)}).map(function(t){var e=m(t,2),s=e[0],r=e[1];return Object(c["a"])({},s,r)})))),this.updateBlock()},updateName:function(t){this.processor.name=t.text,this.$store.dispatch("updateProcessor",{_id:this.id,name:this.processor.name})},updateTags:P()(function(t){this.$store.dispatch("updateProcessor",{_id:this.id,tags:this.processor.tags})},1e3),updateBlock:function(){this.$store.dispatch("updateProcessor",{_id:this.id,blocks:this.processor.blocks,params:this.processor.params})},removeArraysRecursive:function(t){var e={};if("string"==typeof t)return t;for(var s in t)t.hasOwnProperty(s)&&(i()(t[s])?t[s].length<3?e[s]=t[s]:e[s]=[].concat(Object(g["a"])(t[s].slice(0,3)),["... (".concat(t[s].length-3," more values)")]):"object"===Object(n["a"])(t[s])&&null!==t[s]?e[s]=this.removeArraysRecursive(t[s]):e[s]=t[s]);return e},getToken:function(t){if(t.msal){var e="msal|"+t.msal.clientId;if(this.$store.state.tokens.hasOwnProperty(e))return this.$store.state.tokens[e]}return J.a.defaults.headers.common["Authorization"]}},activated:function(){var t=this;if(this.id=this.$route.params.processorId,"import"==this.id){var e=null;try{console.log(this.$route.query.processor),e=JSON.parse(decodeURI(atob(this.$route.query.processor)))}catch(s){console.log("failed to import"),this.$router.push("/processors/")}e&&(e.name="Imported: "+e.name,this.$store.dispatch("createProcessor",e).then(function(e){t.processor=e,t.id=t.processor._id,t.$router.replace("".concat(t.id)),console.log("activated"),t.isLoading=!1}).catch(function(e){console.log("failed to import"),t.$router.push("/processors/")}))}else this.$store.dispatch("getProcessor",{_id:this.id}).then(function(e){null==e&&t.$router.push("/processors/"),t.processor=e,console.log("activated")})},deactivated:function(){this.processor=null,this.blockStatus.splice(0,this.blockStatus.length),this.blockOutput.splice(0,this.blockOutput.length),console.log("de-activated")}},z=M,V=Object(q["a"])(z,r,a,!1,null,"54509cac",null);e["default"]=V.exports},"81ee":function(t,e,s){s("9a51"),t.exports=s("a7d3").Object.assign},8450:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.resource?s("v-card",{staticClass:"elevation-0"},[s("v-toolbar",{staticClass:"elevation-0 transparent"},[s("v-icon",{attrs:{left:"",small:""}},[t._v("book")]),s("span",{staticClass:"title font-weight-light"},[t._v(t._s(t.title)+" Description")]),s("v-spacer"),s("v-toolbar-items",[!1===t.editDescription&&t.canEdit?s("v-btn",{attrs:{flat:"",color:"primary"},nativeOn:{click:function(e){t.editDescription=!0}}},[t._v("Edit")]):t._e(),!0===t.editDescription?s("v-btn",{attrs:{flat:"",color:"primary"},nativeOn:{click:function(e){return t.updateDescription(e)}}},[t._v("Done")]):t._e()],1)],1),s("v-divider"),s("v-card-text",[s("v-layout",{directives:[{name:"show",rawName:"v-show",value:!t.editDescription,expression:"!editDescription"}]},[s("v-flex",{attrs:{xs12:""},domProps:{innerHTML:t._s(t.compiledDescription)}})],1),s("v-layout",{directives:[{name:"show",rawName:"v-show",value:t.editDescription,expression:"editDescription"}],attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"caption",attrs:{xs12:""}},[t._v("\n        Supports "),s("a",{attrs:{target:"_blank",href:"https://en.wikipedia.org/wiki/Markdown#Example"}},[t._v("markdown:")]),s("strong",[t._v(" ** bold **")]),t._v(", "),s("i",[t._v("* italic *")]),t._v(", "),s("code",[t._v("# Heading 1")]),t._v(", "),s("code",[t._v("## Heading 2")]),t._v(", "),s("code",[t._v("[links](http://example.com)")]),t._v(", etc.\n      ")]),s("v-flex",{attrs:{xs12:""}},[s("v-textarea",{attrs:{box:"",rows:"15"},model:{value:t.resource.description,callback:function(e){t.$set(t.resource,"description",e)},expression:"resource.description"}})],1)],1)],1),t.isStream?s("v-toolbar",{staticClass:"elevation-0 transparent",attrs:{transparent:"",dense:""}},[s("v-icon",{attrs:{left:"",small:""}},[t._v("power_input")]),s("span",{staticClass:"title font-weight-light"},[t._v("Units")])],1):t._e(),s("v-divider"),t.resource.baseProperties?s("v-card-text",{staticClass:"md-caption"},[s("span",[s("strong",[t._v("Units:")]),t._v(" "+t._s(t.resource.baseProperties.units))]),t._v(";\n    "),s("span",[s("strong",[t._v("Tolerance:")]),t._v(" "+t._s(t.resource.baseProperties.tolerance))]),t._v(".\n  ")]):t._e()],1):t._e()},a=[],n=(s("f7fe"),s("0e54")),o=s.n(n),i={name:"DetailDescription",props:{resource:Object},computed:{title:function(){return this.isStream?"Stream":this.isProcessor?"Processor":"Project"},compiledDescription:function(){return o()(this.resource.description,{sanitize:!0})},canEdit:function(){return!!this.isOwner||-1!==this.resource.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.resource.owner===this.$store.state.user._id},isStream:function(){return this.resource.hasOwnProperty("streamId")},isProcessor:function(){return this.resource.hasOwnProperty("blocks")}},data:function(){return{editDescription:!1}},methods:{updateDescription:function(){this.editDescription=!1,this.isStream?this.$store.dispatch("updateStream",{streamId:this.resource.streamId,description:this.resource.description}):this.isProcessor?this.$store.dispatch("updateProcessor",{_id:this.resource._id,description:this.resource.description}):this.$store.dispatch("updateProject",{_id:this.resource._id,description:this.resource.description})}}},c=i,l=s("2877"),u=Object(l["a"])(c,r,a,!1,null,"14a82606",null);e["a"]=u.exports},"9a51":function(t,e,s){var r=s("d13f");r(r.S+r.F,"Object",{assign:s("9e44")})},"9e44":function(t,e,s){"use strict";var r=s("7633"),a=s("31c2"),n=s("d74e"),o=s("0185"),i=s("8bab"),c=Object.assign;t.exports=!c||s("d782")(function(){var t={},e={},s=Symbol(),r="abcdefghijklmnopqrst";return t[s]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[s]||Object.keys(c({},e)).join("")!=r})?function(t,e){var s=o(t),c=arguments.length,l=1,u=a.f,p=n.f;while(c>l){var h,d=i(arguments[l++]),m=u?r(d).concat(u(d)):r(d),v=m.length,b=0;while(v>b)p.call(d,h=m[b++])&&(s[h]=d[h])}return s}:c},afc9:function(t,e,s){var r={"./arupCompute.vue":["d6ee","chunk-2d21ed68"]};function a(t){var e=r[t];return e?s.e(e[1]).then(function(){var t=e[0];return s(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}a.keys=function(){return Object.keys(r)},a.id="afc9",t.exports=a},fd6f:function(t,e,s){var r=s("d13f"),a=s("cff3")(!0);r(r.S,"Object",{entries:function(t){return a(t)}})}}]);
//# sourceMappingURL=chunk-6e6c150c.cca86a25.js.map