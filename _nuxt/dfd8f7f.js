(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{189:function(t,e,n){"use strict";var r=function(){function t(t){t&&(this.el=document.querySelector(t))}return t.prototype.css=function(t,e){this.el.style[t]=e},t.prototype.attr=function(t,e){this.el.setAttribute(t,e)},Object.defineProperty(t.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),t.prototype.createElement=function(t){return document.createElement(t)},t.prototype.innerTextFromHtml=function(html){try{var t=this.createElement("div");return t.innerHTML=html,t.innerText}catch(t){console.log(t)}return""},t.prototype.val=function(){return this.el.value},t}();e.a=r},195:function(t,e,n){var content=n(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("006530c7",content,!0,{sourceMap:!1})},200:function(t,e,n){"use strict";n(195)},201:function(t,e,n){(e=n(38)(!1)).push([t.i,"iframe{width:100%;height:100%;border:none}#footer,.toolbar{display:none}.container{padding:0;top:0;position:absolute}.application--wrap{overflow:hidden}",""]),t.exports=e},202:function(t,e,n){"use strict";var r,o=n(17),c=n(189),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},d=function(t){function e(){var e=t.call(this)||this;return e.iframeUrl="https://ujjwalguptaofficial.github.io/idbstudio",e.version=2,e}return l(e,t),e.prototype.head=function(){return{title:"Example - "+this.pageTitle}},e.prototype.mounted=function(){var t=new c.a("iframe");t.css("height",t.innerHeight+"px"),t.attr("src",this.url)},Object.defineProperty(e.prototype,"url",{get:function(){var t=this.iframeUrl,e=new c.a,n={query:encodeURI(e.innerTextFromHtml(decodeURI(this.innerHtml))),db:"Demo"};return t+="/?"+Object.keys(n).map((function(t){return t+"="+n[t]})).join("&")},enumerable:!0,configurable:!0}),e=f([Object(o.Component)({props:{innerHtml:String,pageTitle:String}})],e)}(o.Vue),y=(n(200),n(16)),component=Object(y.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("iframe")])],1)}),[],!1,null,null,null);e.a=component.exports},360:function(t,e,n){"use strict";n.r(e);var r,o=n(17),c=n(202),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.exampleContent="%3Cpre%3E%3Ccode%3EexportJson(%7B%0A%20%20%20%20from:%20%22Customers%22%0A%7D);%0A%3C/code%3E%3C/pre%3E",e.title="Export Json",e}return l(e,t),e=f([Object(o.Component)({components:{IdbStudioAppender:c.a}})],e)}(o.Vue),y=n(16),component=Object(y.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("IdbStudioAppender",{attrs:{innerHtml:this.exampleContent,pageTitle:this.title}})}),[],!1,null,null,null);e.default=component.exports}}]);