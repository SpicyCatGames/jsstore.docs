"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3,Keywords:["database","connection","query","indexeddb","jsstore"]},i="Connection",l={unversionedId:"connection",id:"connection",title:"Connection",description:"Connection is a Class which contains all apis like select, count etc. Under the hood it talks with indexeddb and return results.",source:"@site/docs/connection.md",sourceDirName:".",slug:"/connection",permalink:"/docs/connection",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/connection.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,Keywords:["database","connection","query","indexeddb","jsstore"]},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Database",permalink:"/docs/database/"}},s={},c=[{value:"With Web Worker",id:"with-web-worker",level:2},{value:"Without web worker",id:"without-web-worker",level:2},{value:"Connection in webpack",id:"connection-in-webpack",level:2},{value:"With Web Worker",id:"with-web-worker-1",level:3},{value:"Without Web Worker",id:"without-web-worker-1",level:3},{value:"Important points",id:"important-points",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connection"},"Connection"),(0,o.kt)("p",null,"Connection is a Class which contains all apis like ",(0,o.kt)("inlineCode",{parentName:"p"},"select"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," etc. Under the hood it talks with indexeddb and return results."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Connection can be initialize with web worker or without web worker. If initialized with web worker, then all logic will be executed inside web worker. It is strongly recommended to use web worker.")),(0,o.kt)("h2",{id:"with-web-worker"},"With Web Worker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var connection = new JsStore.Connection(new Worker('jsstore worker path'));\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example")," - ",(0,o.kt)("a",{target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example"},"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example"))),(0,o.kt)("h2",{id:"without-web-worker"},"Without web worker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var connection = new JsStore.Connection();\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example")," - ",(0,o.kt)("a",{target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without_web_worker"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without%5C_web_worker"},"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without\\_web_worker"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"connection-in-webpack"},"Connection in webpack"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install jsstore using npm or yarn - ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i jsstore"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install file-loader -  ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i file-loader -D"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a file jsstore","_","con.js or jsstore","_","con.ts (for typescript). This file will be used to create the jsstore connection. You can choose any file name.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Inside the file jsstore","_","con.js, write below code - "))),(0,o.kt)("h3",{id:"with-web-worker-1"},"With Web Worker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const getWorkerPath = () => {\n\n    // return dev build when env is development\n    if (process.env.NODE_ENV === \'development\') {\n        \n        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js");\n\n    }\n    else { // return prod build when env is production\n        \n        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js");\n        \n    }\n};\n\nconst workerPath = getWorkerPath().default;\nexport const connection = new JsStore.Connection(new Worker(workerPath));\n')),(0,o.kt)("p",null,"\ud83d\udc49 In the above code we are using ",(0,o.kt)("strong",{parentName:"p"},"file-loader")," to load jsstore worker file but you are free to use your own technique to load jsstore worker. The simplest approach is download jsstore.worker.js and then specify its path. "),(0,o.kt)("h3",{id:"without-web-worker-1"},"Without Web Worker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import workerInjector from "jsstore/dist/worker_injector";\nconst connection = new Connection();\n\nconnection.addPlugin(workerInjector);\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Step 4 creates a connection and export the connection variable. You can import this connection variable to anywhere in your code.")),(0,o.kt)("p",null,"If you are finding difficult to understand, please take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ujjwalguptaofficial/jsstore-examples"},"examples")," or our ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/jsstore"},"medium page")),(0,o.kt)("h2",{id:"important-points"},"Important points"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The connection variable will be used to execute the all query for a single database."),(0,o.kt)("li",{parentName:"ul"},"A connection will handle one db at a time."),(0,o.kt)("li",{parentName:"ul"},"You can create mutiple connection for multiple database but do not create multiple connection for one database as it will lead you to some data stale issue. A single connection can handle all the query and it executes query one by one, so you have always latest data.")))}d.isMDXComponent=!0}}]);