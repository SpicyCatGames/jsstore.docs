(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{188:function(t,e,r){var content=r(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("9ced3eb6",content,!0,{sourceMap:!1})},189:function(t,e,r){"use strict";var n=function(){function t(t){t&&(this.el=document.querySelector(t))}return t.prototype.css=function(t,e){this.el.style[t]=e},t.prototype.attr=function(t,e){this.el.setAttribute(t,e)},Object.defineProperty(t.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),t.prototype.createElement=function(t){return document.createElement(t)},t.prototype.innerTextFromHtml=function(html){try{var t=this.createElement("div");return t.innerHTML=html,t.innerText}catch(t){console.log(t)}return""},t.prototype.val=function(){return this.el.value},t}();e.a=n},190:function(t,e,r){"use strict";r(188)},191:function(t,e,r){(e=r(38)(!1)).push([t.i,".link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center}.link-active a{color:#fff!important}#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0}#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block}#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)}#divMenuContainer ul li.search i{vertical-align:middle}#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px}#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle}#btnMenuToggle i{font-size:30px}.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll}.show-menu ul{border-right:none!important;margin-left:15px}.search .search-wrapper a:hover{background-color:#eee;outline:none}pre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%}pre,pre code{margin:20px 0}pre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400}.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.right-side-button{padding:15px;height:50px;text-align:center}.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid;text-align:center}.ad-container div{color:#000}.ad-container .ad-image,.ad-container img{width:100px;height:auto}.ad-container-text{font-size:30px;text-align:center}",""]),t.exports=e},192:function(t,e,r){"use strict";var n,o=r(17),l=r(189),c=r(50),d=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case (Deprecated)",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Union",url:"union"},{text:"Case (beta)",url:"case"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Schema",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Middleware",url:"middleware"},{text:"Plugin",url:"plugin"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}],h=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},function(t,b){function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},x=function(t){function e(){var e=t.call(this)||this;return e.version=3,e.activeUrl="",e.showMenu=!1,e.searchValue="",e.searchResult="",e.jsstoreText=["Component based framework for nodejs"],e.adIndex=-1,e.catchEvents(),e}return h(e,t),Object.defineProperty(e.prototype,"docToEdit",{get:function(){var t=this.allLinks_[this.getCurrentUrlIndex()];return t?t.url:null},enumerable:!0,configurable:!0}),e.prototype.catchEvents=function(){c.b.$on("version_change",this.onVersionChange),c.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){var t=this,html="";this.links.forEach((function(link){link.text.toLowerCase().indexOf(t.searchValue)>=0&&(html+='<a href="/tutorial/'+link.url+'">'+link.text+"</a>")})),this.searchResult=html},e.prototype.mounted=function(){var t=this;this.showAds(),this.setVersion();var e=this.$route.path,r=this.links.find((function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")}));r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout((function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1}),200)},e.prototype.registerNextBtnEvents=function(){var t=new l.a(".btnNext");t.el&&(t.el.onclick=this.onNextBtnClick.bind(this))},e.prototype.head=function(){return{title:"JsStore - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},e.prototype.getVersion=function(){return new l.a("#selectVersions").val()},e.prototype.setVersion=function(t){this.version=t||Number(this.getVersion())},e.prototype.onVersionChange=function(t){this.setVersion(t);var e=this.$route.path.split("/").reverse(),r=e[0].length>0?e[0]:e[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){var t;switch(this.version){case 1:t=["v1-to-v2","terminate","transaction","regex","connection","v2-to-v3","data-type","initiate-database","event","union","case"];break;case 2:t=["promise","export-json","v2-to-v3","data-type","initiate-database","event","union","case"];case 3:t=["promise","export-json","v1-to-v2","bulk-insert"]}return this.allLinks_.filter((function(e){return t.findIndex((function(t){return t===e.url}))<0}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/v2/tutorial/";case 3:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.getCurrentUrlIndex=function(){var t=this,e=this.$route.path;this.relativeUrl;return this.links.findIndex((function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")}))},e.prototype.onNextBtnClick=function(){var t=this.getCurrentUrlIndex();if(t>=0){var e=d[t+1];e&&this.$router.push(this.relativeUrl+e.url)}},e.prototype.showAds=function(){var t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t},e=f([Object(o.Component)({props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],e)}(c.a),m=(r(190),r(16)),component=Object(m.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),t._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{keyup:t.onSearch,input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),r("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),r("div",{staticClass:"search-results",domProps:{innerHTML:t._s(t.searchResult)}})])],1)],1),t._v(" "),t._l(t.links,(function(link){return r("li",{key:link.text,class:{"link-active":link.url===t.activeUrl}},[r("a",{attrs:{href:t.relativeUrl+link.url}},[t._v(t._s(link.text))])])}))],2)]),t._v(" "),r("v-flex",{class:{"padding-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",xl8:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})]),t._v(" "),r("v-flex",{attrs:{md2:""}},[r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Sponsor Us &\n            "),r("br"),t._v("get your logo here\n        ")]),t._v(" "),r("br"),t._v(" "),r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Be a backer &\n            "),r("br"),t._v("get your logo on our page\n        ")]),t._v(" "),r("a",{staticClass:"margin-top-20px ad-container",attrs:{target:"_blank",href:"http://fortjs.info/"}},[r("div",{staticClass:"ad-container-text"},[t._v("FortJs")]),t._v(" "),r("img",{staticClass:"ad-image",attrs:{src:"//fortjs.info/img/fort_js_logo_200_137.png"}}),t._v(" "),r("div",[t._v(t._s(t.jsstoreText[t.adIndex]))])]),t._v(" "),null!=t.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):t._e(),t._v(" "),null!=t.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/docs/tutorial/"+t.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",[t._v("edit")])],1):t._e(),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("div",{attrs:{id:"codefund"}}),t._v(" "),r("script",{attrs:{src:"https://codefund.app/properties/280/funder.js",async:"async"}})],1)],1)}),[],!1,null,null,null);e.a=component.exports},248:function(t,e,r){"use strict";r.r(e);var n,o=r(17),l=r(192),c=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},function(t,b){function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),d=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EColumn%20in%20jsstore%20is%20an%20object%20where%20column%20name%20is%20key%20&amp;%20column%20options%20are%20values.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20columns%20=%20%7B%0A%20%20%20%20%5Bcolumn%20name%5D:%20%7B%7D%20%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ELet's%20see%20an%20example%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20columns%20=%20%7B%0A%20%20%20%20Id:%7B%20primaryKey:%20true,%20autoIncrement:%20true%20%7D,%0A%20%20%20%20ItemName:%20%20%7B%20notNull:%20true,%20dataType:%20%22string%22%20%7D,%0A%20%20%20%20Price:%20%20%7B%20notNull:%20true,%20dataType:%20%22number%22%20%7D,%0A%20%20%20%20Quantity%20:%20%7B%20notNull:%20true,%20dataType:%20%22number%22%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EA%20column%20has%20following%20properties%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3EprimaryKey:%20boolean,%20//%20declare%20this%20column%20as%20primary%20key%20(optional)%0A//%20We%20strongly%20recommend%20to%20create%20the%20primary%20keys%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EnotNull:%20boolean,%20//%20ensure%20this%20column%20value%20should%20not%20be%20null%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EdataType:%20JsStore.DATA_TYPE,%20//%20datatype%20of%20this%20column%20(optional)%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3EFor%20more%20info%20about%20data%20type,%20see%20this%20link%20-%20%3Ca%20href=%22/tutorial/data-type/%22%3EDataType%3C/a%3E%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3EautoIncrement:%20boolean,%20//%20automatically%20increment%20value%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3Eunique:%20boolean%20//%20This%20column%20will%20have%20unique%20value%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3Edefault:%20any,%20//%20Provides%20a%20default%20value%20for%20a%20column%20when%20none%20is%20specified%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22/tutorial/multi-entry%22%3EmultiEntry%3C/a%3E:%20boolean,%20//%20Provides%20support%20to%20search%20inside%20array%20values%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EenableSearch:%20boolean%20-%20default%20value%20is%20true%20//%20Turn%20on/off%20search%20for%20this%20column%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22/tutorial/keypath/%22%3EkeyPath%3C/a%3E%20:%20string%5B%5D%20-%20allows%20you%20to%20use%20multiple%20indexing%20//%20optional%20%3C/p%3E%3C/li%3E%0A%3C/ul%3E",e.title="Column",e.keywords="column, api, query, indexeddb, jsstore",e.description="column in jsstore is an object where column name is key & column options are values.",e}return c(e,t),e=d([Object(o.Component)({components:{Tutorial:l.a}})],e)}(o.Vue),f=r(16),component=Object(f.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})}),[],!1,null,null,null);e.default=component.exports}}]);