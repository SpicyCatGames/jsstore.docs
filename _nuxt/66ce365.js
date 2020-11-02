(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{188:function(t,e,r){var content=r(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("9ced3eb6",content,!0,{sourceMap:!1})},189:function(t,e,r){"use strict";var n=function(){function t(t){t&&(this.el=document.querySelector(t))}return t.prototype.css=function(t,e){this.el.style[t]=e},t.prototype.attr=function(t,e){this.el.setAttribute(t,e)},Object.defineProperty(t.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),t.prototype.createElement=function(t){return document.createElement(t)},t.prototype.innerTextFromHtml=function(html){try{var t=this.createElement("div");return t.innerHTML=html,t.innerText}catch(t){console.log(t)}return""},t.prototype.val=function(){return this.el.value},t}();e.a=n},190:function(t,e,r){"use strict";r(188)},191:function(t,e,r){(e=r(38)(!1)).push([t.i,".link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center}.link-active a{color:#fff!important}#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0}#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block}#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)}#divMenuContainer ul li.search i{vertical-align:middle}#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px}#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle}#btnMenuToggle i{font-size:30px}.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll}.show-menu ul{border-right:none!important;margin-left:15px}.search .search-wrapper a:hover{background-color:#eee;outline:none}pre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%}pre,pre code{margin:20px 0}pre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400}.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.right-side-button{padding:15px;height:50px;text-align:center}.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid;text-align:center}.ad-container div{color:#000}.ad-container .ad-image,.ad-container img{width:100px;height:auto}.ad-container-text{font-size:30px;text-align:center}",""]),t.exports=e},192:function(t,e,r){"use strict";var n,o=r(17),l=r(189),c=r(50),d=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case (Deprecated)",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Union",url:"union"},{text:"Case (beta)",url:"case"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Schema",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Middleware",url:"middleware"},{text:"Plugin",url:"plugin"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}],h=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},function(t,b){function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},x=function(t){function e(){var e=t.call(this)||this;return e.version=3,e.activeUrl="",e.showMenu=!1,e.searchValue="",e.searchResult="",e.jsstoreText=["Component based framework for nodejs"],e.adIndex=-1,e.catchEvents(),e}return h(e,t),Object.defineProperty(e.prototype,"docToEdit",{get:function(){var t=this.allLinks_[this.getCurrentUrlIndex()];return t?t.url:null},enumerable:!0,configurable:!0}),e.prototype.catchEvents=function(){c.b.$on("version_change",this.onVersionChange),c.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){var t=this,html="";this.links.forEach((function(link){link.text.toLowerCase().indexOf(t.searchValue)>=0&&(html+='<a href="/tutorial/'+link.url+'">'+link.text+"</a>")})),this.searchResult=html},e.prototype.mounted=function(){var t=this;this.showAds(),this.setVersion();var e=this.$route.path,r=this.links.find((function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")}));r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout((function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1}),200)},e.prototype.registerNextBtnEvents=function(){var t=new l.a(".btnNext");t.el&&(t.el.onclick=this.onNextBtnClick.bind(this))},e.prototype.head=function(){return{title:"JsStore - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},e.prototype.getVersion=function(){return new l.a("#selectVersions").val()},e.prototype.setVersion=function(t){this.version=t||Number(this.getVersion())},e.prototype.onVersionChange=function(t){this.setVersion(t);var e=this.$route.path.split("/").reverse(),r=e[0].length>0?e[0]:e[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){var t;switch(this.version){case 1:t=["v1-to-v2","terminate","transaction","regex","connection","v2-to-v3","data-type","initiate-database","event","union","case"];break;case 2:t=["promise","export-json","v2-to-v3","data-type","initiate-database","event","union","case"];case 3:t=["promise","export-json","v1-to-v2","bulk-insert"]}return this.allLinks_.filter((function(e){return t.findIndex((function(t){return t===e.url}))<0}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/v2/tutorial/";case 3:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.getCurrentUrlIndex=function(){var t=this,e=this.$route.path;this.relativeUrl;return this.links.findIndex((function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")}))},e.prototype.onNextBtnClick=function(){var t=this.getCurrentUrlIndex();if(t>=0){var e=d[t+1];e&&this.$router.push(this.relativeUrl+e.url)}},e.prototype.showAds=function(){var t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t},e=f([Object(o.Component)({props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],e)}(c.a),v=(r(190),r(16)),component=Object(v.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),t._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{keyup:t.onSearch,input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),r("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),r("div",{staticClass:"search-results",domProps:{innerHTML:t._s(t.searchResult)}})])],1)],1),t._v(" "),t._l(t.links,(function(link){return r("li",{key:link.text,class:{"link-active":link.url===t.activeUrl}},[r("a",{attrs:{href:t.relativeUrl+link.url}},[t._v(t._s(link.text))])])}))],2)]),t._v(" "),r("v-flex",{class:{"padding-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",xl8:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})]),t._v(" "),r("v-flex",{attrs:{md2:""}},[r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Sponsor Us &\n            "),r("br"),t._v("get your logo here\n        ")]),t._v(" "),r("br"),t._v(" "),r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Be a backer &\n            "),r("br"),t._v("get your logo on our page\n        ")]),t._v(" "),r("a",{staticClass:"margin-top-20px ad-container",attrs:{target:"_blank",href:"http://fortjs.info/"}},[r("div",{staticClass:"ad-container-text"},[t._v("FortJs")]),t._v(" "),r("img",{staticClass:"ad-image",attrs:{src:"//fortjs.info/img/fort_js_logo_200_137.png"}}),t._v(" "),r("div",[t._v(t._s(t.jsstoreText[t.adIndex]))])]),t._v(" "),null!=t.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):t._e(),t._v(" "),null!=t.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/docs/tutorial/"+t.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",[t._v("edit")])],1):t._e(),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("div",{attrs:{id:"codefund"}}),t._v(" "),r("script",{attrs:{src:"https://codefund.app/properties/280/funder.js",async:"async"}})],1)],1)}),[],!1,null,null,null);e.a=component.exports},387:function(t,e,r){"use strict";r.r(e);var n,o=r(17),l=r(192),c=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},function(t,b){function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),d=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EA%20database%20in%20JsStore%20is%20array%20of%20tables.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20database%20=%20%7B%0A%20%20%20%20name:%20%22database%20name%22,%0A%20%20%20%20tables:%20%5Btable1,%20table2,%20table3%5D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20you%20have%20successfully%20defined%20Database,%20lets%20create%20the%20database%20in%20browser.%3C/p%3E%0A%3Cp%3EJsStore%20executes%20everything%20in%20worker.%20So%20we%20need%20to%20supply%20worker%20instance%20for%20initiating%20the%20jsstore.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20connection%20=%20new%20JsStore.Instance(new%20Worker('jsstore%20worker%20location'));%0Aconnection.createDb(Database);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EWhen%20Db%20is%20already%20created.%20You%20can%20open%20the%20connection%20using%20%3Cstrong%3EopenDb%3C/strong%3E.%3C/p%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20'createDb'%20api%20is%20time%20consuming,%20so%20when%20you%20have%20already%20created%20database%20-%20it%20is%20recommended%20to%20use%20'openDb'.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20connection%20=%20new%20JsStore.Instance(new%20Worker('jsstore%20worker%20location'));%0Aconnection.openDb(Database_Name);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EJsStore%20provides%20%3Cstrong%3EisDbExist%3C/strong%3E%20api%20to%20check%20whether%20database%20is%20created%20or%20not.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.isDbExist(db_name).then(function(isExist)%20%7B%0A%20%20%20%20console.log(isExist);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ESo%20if%20we%20will%20wrap%20above%20concept,%20we%20can%20use%20below%20code%20to%20initiate%20database.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20connection%20=%20new%20JsStore.Instance(new%20Worker('jsstore.worker.js'));%0Aconnection.isDbExist(db_name).then(function(isExist)%20%7B%0A%20%20%20%20if%20(isExist)%20%7B%0A%20%20%20%20%20%20%20%20Connection.openDb(db_name);%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20Connection.createDb(Database);%0A%20%20%20%20%7D%0A%7D).catch(function(err)%20%7B%0A%20%20%20%20//this%20will%20be%20fired%20when%20indexedDB%20is%20not%20supported.%0A%20%20%20%20alert(err.message);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EYou%20dont%20need%20to%20open%20the%20db%20multiple%20times.%20Declare%20it%20one%20time%20at%20page%20load%20and%20use%20it%20always.%3C/li%3E%0A%3Cli%3EAt%20a%20time%20one%20db%20can%20be%20handled%20by%20one%20jsstore%20instance.%20So%20if%20you%20want%20to%20open%20multiple%20db,%20create%20multiple%20instance.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3EIf%20you%20are%20finding%20difficult%20to%20understand,%20please%20take%20a%20look%20at%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples%22%3Eexamples%3C/a%3E%20or%20our%20%3Ca%20href=%22https://medium.com/jsstore%22%3Emedium%20page%3C/a%3E%20%3C/p%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E",e.title="DataBase",e.keywords="database, api, query, indexeddb, jsstore",e}return c(e,t),e=d([Object(o.Component)({components:{Tutorial:l.a}})],e)}(o.Vue),f=r(16),component=Object(f.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})}),[],!1,null,null,null);e.default=component.exports}}]);