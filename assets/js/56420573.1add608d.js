"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3256],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),g=a,f=m["".concat(s,".").concat(g)]||m[g]||p[g]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4,keywords:["aggregate","count","avg","min","max","indexeddb"]},l="Aggregate Functions",i={unversionedId:"select/aggregate",id:"select/aggregate",title:"Aggregate Functions",description:"An aggregate function performs a calculation on multiple values and returns a single value.",source:"@site/docs/select/aggregate.md",sourceDirName:"select",slug:"/select/aggregate",permalink:"/docs/select/aggregate",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/select/aggregate.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,keywords:["aggregate","count","avg","min","max","indexeddb"]},sidebar:"tutorialSidebar",previous:{title:"Order By",permalink:"/docs/select/order-by"},next:{title:"Group By",permalink:"/docs/select/group-by"}},s={},u=[{value:"Sql",id:"sql",level:2},{value:"JsStore",id:"jsstore",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aggregate-functions"},"Aggregate Functions"),(0,a.kt)("p",null,"An aggregate function performs a calculation on multiple values and returns a single value."),(0,a.kt)("p",null,"JsStore supports following aggregate functions : -"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"count :")," Returns the number of rows of specified column."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sum :")," Returns the total sum of numeric column."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"avg :")," Returns the average value of numeric column."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"max :")," Returns the maximum value of specified column."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"min :")," Returns the minimum value of specified column."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"list :")," Returns all matching value inside an array.")),(0,a.kt)("h2",{id:"sql"},"Sql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"Select min(Column_Name) From Table_Name;\n")),(0,a.kt)("h2",{id:"jsstore"},"JsStore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const results = await connection.select({\n    from: \"Table_Name\",\n    aggregate: {\n        min: Column_Name,\n        // You can specify multiple columns at a time by providing columns name in an array.\n        // count:['column1','column2']\n    }\n});\n//aggregate result will be in the first row only.\nconsole.log(results[0]);\n")),(0,a.kt)("p",{class:"text--center"},(0,a.kt)("a",{class:"button button--info",target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Products%22%2C%0A%20%20%20%20aggregate%3A%20%7B%0A%20%20%20%20%20%20%20%20min%3A%20%22price%22%0A%20%20%20%20%7D%0A%7D)%3B"},"Example")))}p.isMDXComponent=!0}}]);