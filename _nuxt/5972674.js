(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{188:function(e,t,r){var content=r(191);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("9ced3eb6",content,!0,{sourceMap:!1})},189:function(e,t,r){"use strict";var n=function(){function e(e){e&&(this.el=document.querySelector(e))}return e.prototype.css=function(e,t){this.el.style[e]=t},e.prototype.attr=function(e,t){this.el.setAttribute(e,t)},Object.defineProperty(e.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),e.prototype.createElement=function(e){return document.createElement(e)},e.prototype.innerTextFromHtml=function(html){try{var e=this.createElement("div");return e.innerHTML=html,e.innerText}catch(e){console.log(e)}return""},e.prototype.val=function(){return this.el.value},e}();t.a=n},190:function(e,t,r){"use strict";r(188)},191:function(e,t,r){(t=r(38)(!1)).push([e.i,".link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center}.link-active a{color:#fff!important}#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0}#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block}#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)}#divMenuContainer ul li.search i{vertical-align:middle}#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px}#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle}#btnMenuToggle i{font-size:30px}.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll}.show-menu ul{border-right:none!important;margin-left:15px}.search .search-wrapper a:hover{background-color:#eee;outline:none}pre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%}pre,pre code{margin:20px 0}pre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400}.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.right-side-button{padding:15px;height:50px;text-align:center}.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid;text-align:center}.ad-container div{color:#000}.ad-container .ad-image,.ad-container img{width:100px;height:auto}.ad-container-text{font-size:30px;text-align:center}",""]),e.exports=t},192:function(e,t,r){"use strict";var n,o=r(17),l=r(189),c=r(50),d=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case (Deprecated)",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Union",url:"union"},{text:"Case (beta)",url:"case"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Schema",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Middleware",url:"middleware"},{text:"Plugin",url:"plugin"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}],h=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])},function(e,b){function t(){this.constructor=e}n(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),f=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},m=function(e){function t(){var t=e.call(this)||this;return t.version=3,t.activeUrl="",t.showMenu=!1,t.searchValue="",t.searchResult="",t.jsstoreText=["Component based framework for nodejs"],t.adIndex=-1,t.catchEvents(),t}return h(t,e),Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this.allLinks_[this.getCurrentUrlIndex()];return e?e.url:null},enumerable:!0,configurable:!0}),t.prototype.catchEvents=function(){c.b.$on("version_change",this.onVersionChange),c.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this,html="";this.links.forEach((function(link){link.text.toLowerCase().indexOf(e.searchValue)>=0&&(html+='<a href="/tutorial/'+link.url+'">'+link.text+"</a>")})),this.searchResult=html},t.prototype.mounted=function(){var e=this;this.showAds(),this.setVersion();var t=this.$route.path,r=this.links.find((function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")}));r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout((function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1}),200)},t.prototype.registerNextBtnEvents=function(){var e=new l.a(".btnNext");e.el&&(e.el.onclick=this.onNextBtnClick.bind(this))},t.prototype.head=function(){return{title:"JsStore - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return new l.a("#selectVersions").val()},t.prototype.setVersion=function(e){this.version=e||Number(this.getVersion())},t.prototype.onVersionChange=function(e){this.setVersion(e);var t=this.$route.path.split("/").reverse(),r=t[0].length>0?t[0]:t[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){var e;switch(this.version){case 1:e=["v1-to-v2","terminate","transaction","regex","connection","v2-to-v3","data-type","initiate-database","event","union","case"];break;case 2:e=["promise","export-json","v2-to-v3","data-type","initiate-database","event","union","case"];case 3:e=["promise","export-json","v1-to-v2","bulk-insert"]}return this.allLinks_.filter((function(t){return e.findIndex((function(e){return e===t.url}))<0}))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/v2/tutorial/";case 3:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex((function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")}))},t.prototype.onNextBtnClick=function(){var e=this.getCurrentUrlIndex();if(e>=0){var t=d[e+1];t&&this.$router.push(this.relativeUrl+t.url)}},t.prototype.showAds=function(){var e=++this.adIndex;e>=this.jsstoreText.length&&(e=this.adIndex=0),this.adIndex=e},t=f([Object(o.Component)({props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(c.a),x=(r(190),r(16)),component=Object(x.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),r("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),r("div",{staticClass:"search-results",domProps:{innerHTML:e._s(e.searchResult)}})])],1)],1),e._v(" "),e._l(e.links,(function(link){return r("li",{key:link.text,class:{"link-active":link.url===e.activeUrl}},[r("a",{attrs:{href:e.relativeUrl+link.url}},[e._v(e._s(link.text))])])}))],2)]),e._v(" "),r("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",xl8:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),r("v-flex",{attrs:{md2:""}},[r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("\n            Sponsor Us &\n            "),r("br"),e._v("get your logo here\n        ")]),e._v(" "),r("br"),e._v(" "),r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("\n            Be a backer &\n            "),r("br"),e._v("get your logo on our page\n        ")]),e._v(" "),r("a",{staticClass:"margin-top-20px ad-container",attrs:{target:"_blank",href:"http://fortjs.info/"}},[r("div",{staticClass:"ad-container-text"},[e._v("FortJs")]),e._v(" "),r("img",{staticClass:"ad-image",attrs:{src:"//fortjs.info/img/fort_js_logo_200_137.png"}}),e._v(" "),r("div",[e._v(e._s(e.jsstoreText[e.adIndex]))])]),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",[e._v("edit")])],1):e._e(),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("div",{attrs:{id:"codefund"}}),e._v(" "),r("script",{attrs:{src:"https://codefund.app/properties/280/funder.js",async:"async"}})],1)],1)}),[],!1,null,null,null);t.a=component.exports},399:function(e,t,r){"use strict";r.r(t);var n,o=r(17),l=r(192),c=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])},function(e,b){function t(){this.constructor=e}n(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),d=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EJsStore%20supports%20three%20joins%20-%20Inner,%20Left,%20Right.%3C/p%3E%0A%3Ch4%20id=%22sqlinnerjoinbetweentwotables%22%3ESql%20(inner%20join%20between%20two%20tables)%3C/h4%3E%0A%3Cpre%3E%3Ccode%3ESelect%20*%20From%20Table1;%0AInner%20Join%20Table2%0AOn%20Table1.common_field%20=%20Table2.common_field%0AWhere%0ATable1.Column1=some_value%0AAnd%0ATable2.Column1=some_another_value%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Evar%20joinLogic%20=%20%7B%0A%20%20%20%20table1:%20%7B%0A%20%20%20%20%20%20%20%20table:%20table1_name,%0A%20%20%20%20%20%20%20%20column:%20table1.common_field,%0A%20%20%20%20%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Column1:%20some_value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D,%0A%20%20%20%20join:%20'inner',%0A%20%20%20%20table2:%20%7B%0A%20%20%20%20%20%20%20%20table:%20table2_name,%0A%20%20%20%20%20%20%20%20column:%20table2.common_field,%0A%20%20%20%20%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Column1:%20some_another_value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%0A%0Aconnection.select(%7B%0A%20%20%20%20from:%20joinLogic%0A%7D).then(function(results)%20%7B%0A%20%20%20%20//results%20will%20be%20array%20of%20objects.%0A%20%20%20%20console.log(results);%0A%7D).catch(function(error)%20%7B%0A%20%20%20%20alert(error.message);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20you%20can%20also%20use%20-%20WhereIn,%20Skip,%20Order%20By%20and%20limit%20just%20like%20where%20has%20been%20used%20in%20the%20above%20example.%3C/p%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/simple-join%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E%0A%3Ch4%20id=%22sqlinnerjoinbetweenthreetables%22%3ESql%20(inner%20join%20between%20three%20tables)%3C/h4%3E%0A%3Cpre%3E%3Ccode%3ESelect%20*%20From%20Table1;%0AInner%20Join%20Table2%0AOn%20Table1.common_field%20=%20Table2.common_field%0AInner%20Join%20Table3%0AOn%20Table1.some_column%20=%20Table3.some_common_column%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore-1%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Evar%20joinLogic1%20=%20%7B%0A%20%20%20%20table1:%20%7B%0A%20%20%20%20%20%20%20%20table:%20table1_name,%0A%20%20%20%20%20%20%20%20column:%20common_field%20of%20table1%0A%20%20%20%20%7D,%0A%20%20%20%20join:%20'inner',%0A%20%20%20%20table2:%20%7B%0A%20%20%20%20%20%20%20%20table:%20table2_name,%0A%20%20%20%20%20%20%20%20column:%20common_field%20of%20table2%0A%20%20%20%20%7D,%0A%20%20%20%20nextJoin:%20%7B%0A%20%20%20%20%20%20%20%20table:%20table1_name,%0A%20%20%20%20%20%20%20%20column:%20some_column%20of%20table1%0A%20%20%20%20%7D;%0A%7D;%0Avar%20joinLogic2%20=%20%7B%0A%20%20%20%20table1:%20joinLogic1,%0A%20%20%20%20join:%20'inner',%0A%20%20%20%20table2:%20%7B%0A%20%20%20%20%20%20%20%20table:%20table3_name,%0A%20%20%20%20%20%20%20%20column:%20some_common_column%20of%20table3%0A%20%20%20%20%7D%0A%7D;%0Aconnection.select(%7B%0A%20%20%20%20from:%20joinLogic2%0A%7D).then(function(results)%20%7B%0A%20%20%20%20//results%20will%20contains%20objects%20of%20all%20tables%20at%20a%20index.%0A%20%20%20%20console.log(results);%0A%0A%7D).catch(function(error)%20%7B%0A%20%20%20%20alert(error.message);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/multiple-table-join%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E",t.title="Join",t.keywords="join, left, inner, right, jsstore",t}return c(t,e),t=d([Object(o.Component)({components:{Tutorial:l.a}})],t)}(o.Vue),f=r(16),component=Object(f.a)(h,(function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})}),[],!1,null,null,null);t.default=component.exports}}]);