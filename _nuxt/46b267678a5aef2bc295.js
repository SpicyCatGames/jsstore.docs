(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{176:function(e,t,n){var r=n(179);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(27).default)("7a78b854",r,!0,{})},177:function(e,t,n){"use strict";var r=function(){function e(e){e&&(this.el=document.querySelector(e))}return e.prototype.css=function(e,t){this.el.style[e]=t},e.prototype.attr=function(e,t){this.el.setAttribute(e,t)},Object.defineProperty(e.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),e.prototype.createElement=function(e){return document.createElement(e)},e.prototype.innerTextFromHtml=function(e){try{var t=this.createElement("div");return t.innerHTML=e,t.innerText}catch(e){console.log(e)}return""},e.prototype.val=function(){return this.el.value},e}();t.a=r},178:function(e,t,n){"use strict";var r=n(176);n.n(r).a},179:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,"\n.link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center\n}\n.link-active a{color:#fff!important\n}\n#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0\n}\n#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},180:function(e,t,n){"use strict";var r,o=n(13),i=n(177),a=n(32),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},u=function(e){function t(){var t=e.call(this)||this;return t.version=2,t.activeUrl="",t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return l(t,e),t.prototype.catchEvents=function(){a.b.$on("version_change",this.onVersionChange),a.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this,t="";this.links.forEach(function(n){n.text.toLowerCase().indexOf(e.searchValue)>=0&&(t+="<a href="+n.url+">"+n.text+"</a>")}),this.searchResult=t},t.prototype.mounted=function(){var e=this;this.setVersion();var t=this.$route.path,n=this.links.find(function(n){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")});n&&n.url.length>0&&(this.activeUrl=n.url),this.registerNextBtnEvents()},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.registerNextBtnEvents=function(){var e=new i.a(".btnNext");e.el&&(e.el.onclick=this.onNextBtnClick.bind(this))},t.prototype.head=function(){return{title:"JsStore - "+this.pageTitle}},t.prototype.getVersion=function(){return new i.a("#selectVersions").val()},t.prototype.setVersion=function(e){this.version=e||Number(this.getVersion())},t.prototype.onVersionChange=function(e){this.setVersion(e);var t=this.$route.path.split("/").reverse(),n=t[0].length>0?t[0]:t[1];this.$router.push(this.relativeUrl+n)},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){var e;switch(this.version){case 1:e=["v1-to-v2","terminate","transaction","regex"];break;case 2:e=["promise","export-json"]}return this.allLinks_.filter(function(t){return e.findIndex(function(e){return e===t.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Design",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"Transaction",url:"transaction"},{text:"keyPath",url:"keypath"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.onNextBtnClick=function(){var e=this,t=this.$route.path,n=(this.relativeUrl,this.links),r=n.findIndex(function(n){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")});if(r>=0){var o=n[r+1];o&&this.$router.push(this.relativeUrl+o.url)}},t=s([Object(o.Component)({props:{innerHtml:String,pageTitle:String}})],t)}(a.a),c=(n(178),n(12)),p=Object(c.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[n("ul",[n("li",{staticClass:"search margin-bottom-10px"},[n("v-card",{staticClass:"search-wrapper"},[n("v-card-text",{staticStyle:{padding:"5px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),n("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),n("div",{staticClass:"search-results",domProps:{innerHTML:e._s(e.searchResult)}})])],1)],1),e._v(" "),e._l(e.links,function(t){return n("li",{key:t.text,class:{"link-active":t.url===e.activeUrl}},[n("a",{attrs:{href:e.relativeUrl+t.url}},[e._v(e._s(t.text))])])})],2)]),e._v(" "),n("v-flex",{class:{"margin-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[n("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),n("v-flex",{staticClass:"md1 margin-top-50px"},[n("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("\n      Sponsor\n      "),n("br"),e._v("Us\n    ")]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("Be a backer")]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("div",{attrs:{id:"codefund"}}),e._v(" "),n("script",{attrs:{src:"https://codefund.app/properties/279/funder.js",async:"async"}})],1)],1)},[],!1,null,null,null);p.options.__file="tutorial.vue";t.a=p.exports},314:function(e,t,n){"use strict";n.r(t);var r,o=n(13),i=n(180),a=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EkeyPath%20is%20a%20option%20in%20column.%20It%20is%20used%20to%20add%20multiple%20index,%20so%20that%20query%20execution%20can%20be%20made%20faster.%20It%20takes%20an%20array%20of%20type%20string.%3C/p%3E%0A%3Cp%3EIt%20is%20helpful%20in%20case%20-%20when%20you%20have%20large%20amount%20of%20data%20&amp;%20its%20taking%20long%20time.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Lets%20take%20a%20table%20name%20with%20cities%20having%20column%20pinCodes%20&amp;%20name%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20table%20=%20%7B%0A%20%20%20%20name:%20'cities',%0A%20%20%20%20columns:%20%5B%7B%0A%20%20%20%20%20%20%20%20name:%20'cityName'%0A%20%20%20%20%7D,%20%7B%0A%20%20%20%20%20%20%20%20name:%20'pincCodes'%0A%20%20%20%20%7D%5D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EWe%20want%20to%20query%20on%20pincodes%20&amp;%20name%20so%20a%20select%20query%20will%20be%20like%20this%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20'cities',%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20pinCodes:%2012345,%0A%20%20%20%20%20%20%20%20name:%20'london'%0A%20%20%20%20%7D%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20lets%20define%20the%20table%20using%20keyPath%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20table%20=%20%7B%0A%20%20%20%20name:%20'cities',%0A%20%20%20%20columns:%20%5B%7B%0A%20%20%20%20%20%20%20%20name:%20'cityName'%0A%20%20%20%20%7D,%20%7B%0A%20%20%20%20%20%20%20%20name:%20'pincCodes'%0A%20%20%20%20%7D,%7B%0A%20%20%20%20%20%20%20%20name:'cityPincodes',%0A%20%20%20%20%20%20%20%20keyPath:%5B'cityName','pinCodes'%5D%0A%20%20%20%20%7D%5D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3Eand%20now%20new%20query%20can%20be%20written%20as%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20'cities',%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20cityPincodes:%20%5B'london',12345%5D%20//%20order%20of%20values%20should%20be%20same%20as%20what%20has%20been%20defined%20in%20keyPath%0A%20%20%20%20%7D%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENote%20:-%20Please%20compare%20between%20query%20execution%20time%20if%20there%20is%20no%20difference%20or%20very%20less%20then%20dont%20use%20keyPath.%20Adding%20multiple%20index%20will%20increase%20the%20db%20size%20which%20is%20limited%20for%20users.%3C/p%3E",t.title="keyPath",t}return a(t,e),t=l([Object(o.Component)({components:{Tutorial:i.a}})],t)}(o.Vue),u=n(12),c=Object(u.a)(s,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="keypath.vue";t.default=c.exports}}]);