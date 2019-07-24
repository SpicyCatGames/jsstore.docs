(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{176:function(e,t,n){var r=n(179);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(27).default)("7a78b854",r,!0,{})},177:function(e,t,n){"use strict";var r=function(){function e(e){e&&(this.el=document.querySelector(e))}return e.prototype.css=function(e,t){this.el.style[e]=t},e.prototype.attr=function(e,t){this.el.setAttribute(e,t)},Object.defineProperty(e.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),e.prototype.createElement=function(e){return document.createElement(e)},e.prototype.innerTextFromHtml=function(e){try{var t=this.createElement("div");return t.innerHTML=e,t.innerText}catch(e){console.log(e)}return""},e.prototype.val=function(){return this.el.value},e}();t.a=r},178:function(e,t,n){"use strict";var r=n(176);n.n(r).a},179:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,"\n.link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center\n}\n.link-active a{color:#fff!important\n}\n#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0\n}\n#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},180:function(e,t,n){"use strict";var r,o=n(13),i=n(177),a=n(32),s=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Design",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Transaction",url:"transaction"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}],l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},u=function(e){function t(){var t=e.call(this)||this;return t.version=3,t.activeUrl="",t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return l(t,e),Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this.allLinks_[this.getCurrentUrlIndex()];return e?e.url:null},enumerable:!0,configurable:!0}),t.prototype.catchEvents=function(){a.b.$on("version_change",this.onVersionChange),a.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this,t="";this.links.forEach(function(n){n.text.toLowerCase().indexOf(e.searchValue)>=0&&(t+='<a href="/tutorial/'+n.url+'">'+n.text+"</a>")}),this.searchResult=t},t.prototype.mounted=function(){var e=this;this.setVersion();var t=this.$route.path,n=this.links.find(function(n){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")});n&&n.url.length>0&&(this.activeUrl=n.url),this.registerNextBtnEvents()},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.registerNextBtnEvents=function(){var e=new i.a(".btnNext");e.el&&(e.el.onclick=this.onNextBtnClick.bind(this))},t.prototype.head=function(){return{title:"JsStore - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return new i.a("#selectVersions").val()},t.prototype.setVersion=function(e){this.version=e||Number(this.getVersion())},t.prototype.onVersionChange=function(e){this.setVersion(e);var t=this.$route.path.split("/").reverse(),n=t[0].length>0?t[0]:t[1];this.$router.push(this.relativeUrl+n)},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){var e;switch(this.version){case 1:e=["v1-to-v2","terminate","transaction","regex","connection","v2-to-v3","data-type","initiate-database","event"];break;case 2:e=["promise","export-json","v2-to-v3","data-type","initiate-database","event"];case 3:e=["promise","export-json","v1-to-v2"]}return this.allLinks_.filter(function(t){return e.findIndex(function(e){return e===t.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/v2/tutorial/";case 3:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(n){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")})},t.prototype.onNextBtnClick=function(){var e=this.getCurrentUrlIndex();if(e>=0){var t=s[e+1];t&&this.$router.push(this.relativeUrl+t.url)}},t=c([Object(o.Component)({props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(a.a),p=(n(178),n(12)),d=Object(p.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[n("ul",[n("li",{staticClass:"search margin-bottom-10px"},[n("v-card",{staticClass:"search-wrapper"},[n("v-card-text",{staticStyle:{padding:"5px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),n("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),n("div",{staticClass:"search-results",domProps:{innerHTML:e._s(e.searchResult)}})])],1)],1),e._v(" "),e._l(e.links,function(t){return n("li",{key:t.text,class:{"link-active":t.url===e.activeUrl}},[n("a",{attrs:{href:e.relativeUrl+t.url}},[e._v(e._s(t.text))])])})],2)]),e._v(" "),n("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",xl8:""}},[n("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),n("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[n("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("\n            Sponsor Us &\n            "),n("br"),e._v("get your logo here\n        ")]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("\n            Be a backer &\n            "),n("br"),e._v("get your logo on our page\n        ")]),e._v(" "),null!=e.docToEdit?n("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?n("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("v-icon",[e._v("edit")])],1):e._e()],1)],1)},[],!1,null,null,null);d.options.__file="tutorial.vue";t.a=d.exports},363:function(e,t,n){"use strict";n.r(t);var r,o=n(13),i=n(180),a=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EA%20database%20in%20JsStore%20is%20array%20of%20tables.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20Database%20=%20%7B%0A%20%20%20%20Name:%20%22database%20name%22,%0A%20%20%20%20Tables:%20%5BTable1,%20Table2,%20Table3%5D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20you%20have%20successfully%20created%20instance%20of%20Database.%20Lets%20create%20the%20database%20in%20browser%20and%20fetch%20the%20db%20connection.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20Connection%20=%20new%20JsStore.Instance();%0AConnection.createDb(Database);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EYou%20can%20also%20perform%20the%20above%20steps%20in%20one%20line.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20Connection%20=%20new%20JsStore.Instance().createDb(Database);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EWhen%20Db%20is%20already%20created.%20You%20can%20use%20below%20code%20to%20get%20Connection.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20Connection%20=%20new%20JsStore.Instance().openDb('db_name');%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EOr%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20Connection%20=%20new%20JsStore.Instance('db_name');%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EBelow%20code%20is%20recommended%20to%20get%20db%20connection%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20Connection%20=%20new%20JsStore.Instance();%0AJsStore.isDbExist(db_name,%20function(isExist)%20%7B%0A%20%20%20%20%20%20%20%20if%20(isExist)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Connection.openDb(db_name);%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Connection.createDb(Database);%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D,%0A%20%20%20%20function(err)%20%7B%0A%20%20%20%20%20%20%20%20//this%20will%20be%20fired%20when%20indexedDB%20is%20not%20supported.%0A%20%20%20%20%20%20%20%20alert(err._message);%0A%20%20%20%20%7D%0A);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EOr%20using%20promise%3C/p%3E%0A%3Cp%3EFor%20more%20information%20about%20promise%20in%20jsstore%20-%20%3Ca%20href=%22#%22%3EPromise%20in%20JsStore%3C/a%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20Connection%20=%20new%20JsStore.Instance();%0AJsStore.isDbExist(db_name).then(function(isExist)%20%7B%0A%20%20%20%20if%20(isExist)%20%7B%0A%20%20%20%20%20%20%20%20Connection.openDb(db_name);%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20Connection.createDb(Database);%0A%20%20%20%20%7D%0A%7D.catch(err)%20%7B%0A%20%20%20%20//this%20will%20be%20fired%20when%20indexedDB%20is%20not%20supported.%0A%20%20%20%20alert(err._message);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EThe%20connection%20variable%20will%20be%20used%20to%20execute%20the%20further%20query.%3C/li%3E%0A%3Cli%3Eyou%20dont%20need%20to%20open%20the%20db%20multiple%20times.%20Declare%20it%20one%20time%20at%20page%20load%20and%20use%20it%20always.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/create_db%22%3EExample%3C/a%3E%0A%20%20%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E",t.title="DataBase",t}return a(t,e),t=s([Object(o.Component)({components:{Tutorial:i.a}})],t)}(o.Vue),c=n(12),u=Object(c.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);u.options.__file="database.vue";t.default=u.exports}}]);