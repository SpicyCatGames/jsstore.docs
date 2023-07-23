"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7800],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},976:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:4,Keywords:["or","api","query","indexeddb","jsstore"]},i="Or",s={unversionedId:"where/or",id:"where/or",title:"Or",description:"or can be used with where to filter records to include records where any of the condition is true.",source:"@site/docs/where/or.md",sourceDirName:"where",slug:"/where/or",permalink:"/docs/where/or",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/where/or.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,Keywords:["or","api","query","indexeddb","jsstore"]},sidebar:"tutorialSidebar",previous:{title:"Regex",permalink:"/docs/where/regex"},next:{title:"Operators",permalink:"/docs/where/operators"}},c={},l=[{value:"Sql",id:"sql",level:2},{value:"JsStore",id:"jsstore",level:2}],u={toc:l},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"or"},"Or"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"or")," can be used with ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," to filter records to include records where any of the condition is true."),(0,o.kt)("h2",{id:"sql"},"Sql"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Select * From Table_Name\nWhere\nColumn1=some_value\nor\nColumn2=some_another_value;\n")),(0,o.kt)("h2",{id:"jsstore"},"JsStore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var results = await connection.select({\n    from: "Table_Name",\n    where: {\n        column1: some_value,\n        or: {\n            column2: some_another_value\n        }\n    }\n});\n//results will be array of objects.\nconsole.log(results);\n')),(0,o.kt)("p",{class:"text--center"},(0,o.kt)("a",{class:"button button--info",target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20where%3A%7B%0A%20%20%20%20%20%20%20%20country%3A'Mexico'%2C%0A%20%20%20%20%20%20%20%20or%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20city%3A'London'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)%3B%0A"},"Example")))}d.isMDXComponent=!0}}]);