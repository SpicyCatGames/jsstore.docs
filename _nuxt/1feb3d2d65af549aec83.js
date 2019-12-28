(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{176:function(t,e,n){var r=n(179);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(27).default)("478f6032",r,!0,{})},177:function(t,e,n){"use strict";var r=function(){function t(t){t&&(this.el=document.querySelector(t))}return t.prototype.css=function(t,e){this.el.style[t]=e},t.prototype.attr=function(t,e){this.el.setAttribute(t,e)},Object.defineProperty(t.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),t.prototype.createElement=function(t){return document.createElement(t)},t.prototype.innerTextFromHtml=function(t){try{var e=this.createElement("div");return e.innerHTML=t,e.innerText}catch(t){console.log(t)}return""},t.prototype.val=function(){return this.el.value},t}();e.a=r},178:function(t,e,n){"use strict";var r=n(176);n.n(r).a},179:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,"\n.link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center\n}\n.link-active a{color:#fff!important\n}\n#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0\n}\n#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid;text-align:center\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100px;height:auto\n}\n.ad-container-text{font-size:30px;text-align:center\n}",""])},180:function(t,e,n){"use strict";var r,o=n(13),i=n(177),a=n(32),s=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Union",url:"union"},{text:"Case",url:"case"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Design",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}],l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},u=function(t){function e(){var e=t.call(this)||this;return e.version=3,e.activeUrl="",e.showMenu=!1,e.searchValue="",e.searchResult="",e.jsstoreText=["Component based framework for nodejs"],e.adIndex=-1,e.catchEvents(),e}return l(e,t),Object.defineProperty(e.prototype,"docToEdit",{get:function(){var t=this.allLinks_[this.getCurrentUrlIndex()];return t?t.url:null},enumerable:!0,configurable:!0}),e.prototype.catchEvents=function(){a.b.$on("version_change",this.onVersionChange),a.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){var t=this,e="";this.links.forEach(function(n){n.text.toLowerCase().indexOf(t.searchValue)>=0&&(e+='<a href="/tutorial/'+n.url+'">'+n.text+"</a>")}),this.searchResult=e},e.prototype.mounted=function(){var t=this;this.showAds(),this.setVersion();var e=this.$route.path,n=this.links.find(function(n){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")});n&&n.url.length>0&&(this.activeUrl=n.url),this.registerNextBtnEvents()},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.registerNextBtnEvents=function(){var t=new i.a(".btnNext");t.el&&(t.el.onclick=this.onNextBtnClick.bind(this))},e.prototype.head=function(){return{title:"JsStore - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},e.prototype.getVersion=function(){return new i.a("#selectVersions").val()},e.prototype.setVersion=function(t){this.version=t||Number(this.getVersion())},e.prototype.onVersionChange=function(t){this.setVersion(t);var e=this.$route.path.split("/").reverse(),n=e[0].length>0?e[0]:e[1];this.$router.push(this.relativeUrl+n)},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){var t;switch(this.version){case 1:t=["v1-to-v2","terminate","transaction","regex","connection","v2-to-v3","data-type","initiate-database","event","union","case"];break;case 2:t=["promise","export-json","v2-to-v3","data-type","initiate-database","event","union","case"];case 3:t=["promise","export-json","v1-to-v2","bulk-insert"]}return this.allLinks_.filter(function(e){return t.findIndex(function(t){return t===e.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/v2/tutorial/";case 3:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.getCurrentUrlIndex=function(){var t=this,e=this.$route.path;this.relativeUrl;return this.links.findIndex(function(n){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")})},e.prototype.onNextBtnClick=function(){var t=this.getCurrentUrlIndex();if(t>=0){var e=s[t+1];e&&this.$router.push(this.relativeUrl+e.url)}},e.prototype.showAds=function(){var t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t},e=c([Object(o.Component)({props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],e)}(a.a),p=(n(178),n(12)),d=Object(p.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},[n("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[n("ul",[n("li",{staticClass:"search margin-bottom-10px"},[n("v-card",{staticClass:"search-wrapper"},[n("v-card-text",{staticStyle:{padding:"5px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{keyup:t.onSearch,input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),n("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),n("div",{staticClass:"search-results",domProps:{innerHTML:t._s(t.searchResult)}})])],1)],1),t._v(" "),t._l(t.links,function(e){return n("li",{key:e.text,class:{"link-active":e.url===t.activeUrl}},[n("a",{attrs:{href:t.relativeUrl+e.url}},[t._v(t._s(e.text))])])})],2)]),t._v(" "),n("v-flex",{class:{"padding-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",xl8:""}},[n("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})]),t._v(" "),n("v-flex",{attrs:{md2:""}},[n("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Sponsor Us &\n            "),n("br"),t._v("get your logo here\n        ")]),t._v(" "),n("br"),t._v(" "),n("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Be a backer &\n            "),n("br"),t._v("get your logo on our page\n        ")]),t._v(" "),n("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://fortjs.info/"}},[n("div",{staticClass:"ad-container-text"},[t._v("FortJs")]),t._v(" "),n("img",{staticClass:"ad-image",attrs:{src:"http://fortjs.info/img/fort_js_logo_200_137.png"}}),t._v(" "),n("div",[t._v(t._s(t.jsstoreText[t.adIndex]))])]),t._v(" "),null!=t.docToEdit?n("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("i",{staticClass:"fab fa-gitter"})]):t._e(),t._v(" "),null!=t.docToEdit?n("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/docs/tutorial/"+t.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("v-icon",[t._v("edit")])],1):t._e(),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{attrs:{id:"codefund"}}),t._v(" "),n("script",{attrs:{src:"https://codefund.app/properties/280/funder.js",async:"async"}})],1)],1)},[],!1,null,null,null);d.options.__file="tutorial.vue";e.a=d.exports},253:function(t,e,n){"use strict";n.r(e);var r,o=n(13),i=n(180),a=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EkeyPath%20is%20a%20option%20in%20column.%20It%20is%20used%20to%20add%20multiple%20index,%20so%20that%20query%20execution%20can%20be%20made%20faster.%20It%20takes%20an%20array%20of%20type%20string.%3C/p%3E%0A%3Cp%3EIt%20is%20helpful%20in%20case%20-%20when%20you%20have%20large%20amount%20of%20data%20&amp;%20its%20taking%20long%20time.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Lets%20take%20a%20table%20name%20with%20cities%20having%20column%20pinCodes%20&amp;%20name%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20table%20=%20%7B%0A%20%20%20%20name:%20'cities',%0A%20%20%20%20columns:%20%7B%0A%20%20%20%20%20%20%20%20cityName:%7B%7D,%0A%20%20%20%20%20%20%20%20pincCodes:%7B%7D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EWe%20want%20to%20query%20on%20pincodes%20&amp;%20name%20so%20a%20select%20query%20will%20be%20like%20this%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20'cities',%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20pinCodes:%2012345,%0A%20%20%20%20%20%20%20%20name:%20'london'%0A%20%20%20%20%7D%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20lets%20define%20the%20table%20using%20keyPath%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20table%20=%20%7B%0A%20%20%20%20name:%20'cities',%0A%20%20%20%20columns:%20%7B%0A%20%20%20%20%20%20%20%20cityName:%7B%7D,%0A%20%20%20%20%20%20%20%20pincCodes:%7B%7D,%0A%20%20%20%20%20%20%20%20cityPincodes:%7BkeyPath:%5B'cityName','pinCodes'%5D%7D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3Eand%20now%20new%20query%20can%20be%20written%20as%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20'cities',%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20cityPincodes:%20%5B'london',12345%5D%20//%20order%20of%20values%20should%20be%20same%20as%20what%20has%20been%20defined%20in%20keyPath%0A%20%20%20%20%7D%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENote%20:-%20Please%20compare%20between%20query%20execution%20time%20if%20there%20is%20no%20difference%20or%20very%20less%20then%20dont%20use%20keyPath.%20Adding%20multiple%20index%20will%20increase%20the%20db%20size%20which%20is%20limited%20for%20users.%3C/p%3E",e.title="keyPath",e.keywords="keypath, column, indexing, indexeddb, jsstore",e.description="learn how to use keypath for querying faster in indexeddb",e}return a(e,t),e=s([Object(o.Component)({components:{Tutorial:i.a}})],e)}(o.Vue),c=n(12),u=Object(c.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);u.options.__file="keypath.vue";e.default=u.exports}}]);