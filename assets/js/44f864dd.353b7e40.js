"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8614],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:21,keywords:["import scripts","transaction","query","indexeddb","jsstore"]},s="Import Scripts",a={unversionedId:"import-scripts",id:"import-scripts",title:"Import Scripts",description:"importScripts can be used to add scripts inside jsstore web worker. It internally uses importScripts .",source:"@site/docs/import-scripts.md",sourceDirName:".",slug:"/import-scripts",permalink:"/docs/import-scripts",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/import-scripts.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,keywords:["import scripts","transaction","query","indexeddb","jsstore"]},sidebar:"tutorialSidebar",previous:{title:"Enums",permalink:"/docs/enums"},next:{title:"Migrating from v2 to v3",permalink:"/docs/v3-to-v4"}},c={},p=[],l={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"import-scripts"},"Import Scripts"),(0,o.kt)("p",null,"importScripts can be used to add scripts inside jsstore web worker. It internally uses ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts"},"importScripts")," ."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'await connection.importScripts("file1.js","file2.js");\n')),(0,o.kt)("p",null,"importScripts is useful for executing ",(0,o.kt)("a",{parentName:"p",href:"/docs/transaction"},"transaction")))}m.isMDXComponent=!0}}]);