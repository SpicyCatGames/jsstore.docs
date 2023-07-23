"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9717],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(b,d(d({ref:n},c),{},{components:t})):a.createElement(b,d({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,d=new Array(o);d[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:r,d[1]=s;for(var l=2;l<o;l++)d[l]=t[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(4137));const o={sidebar_position:17,keywords:["change","update","schema","database","alter"]},d="Update Database Schema",s={unversionedId:"update-schema",id:"update-schema",title:"Update Database Schema",description:"Database schema can be updated by incrementing the version in database object.",source:"@site/docs/update-schema.md",sourceDirName:".",slug:"/update-schema",permalink:"/docs/update-schema",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/update-schema.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,keywords:["change","update","schema","database","alter"]},sidebar:"tutorialSidebar",previous:{title:"Drop Database",permalink:"/docs/drop-db"},next:{title:"Helpers",permalink:"/docs/helpers"}},i={},l=[{value:"Add new table",id:"add-new-table",level:2},{value:"Alter existing table",id:"alter-existing-table",level:2},{value:"Add column",id:"add-column",level:3},{value:"Modify",id:"modify",level:3},{value:"Drop",id:"drop",level:3},{value:"How to get current db version",id:"how-to-get-current-db-version",level:2},{value:"What is the need of db version",id:"what-is-the-need-of-db-version",level:2},{value:"What happens to data when schema is changed",id:"what-happens-to-data-when-schema-is-changed",level:2},{value:"What happens when Data type is changed",id:"what-happens-when-data-type-is-changed",level:2}],c={toc:l},u="wrapper";function p(e){let{components:n,...o}=e;return(0,r.kt)(u,(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-database-schema"},"Update Database Schema"),(0,r.kt)("p",null,"Database schema can be updated by incrementing the version in database object. "),(0,r.kt)("p",null,"\ud83d\udc49 Let's see some usecases"),(0,r.kt)("h2",{id:"add-new-table"},"Add new table"),(0,r.kt)("p",null,"Let's say your schema looks like this - "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var tblProduct = {\n    name: 'Product',\n        columns: {\n            id:{ primaryKey: true, autoIncrement: true },\n            price:{\n                dataType:'number'\n            },\n            name:{\n                dataType:'string'\n            }\n        }\n    }\n}\nvar db = {\n    name: \"db_name\",\n    tables:[tblProduct],\n}\n")),(0,r.kt)("p",null,"now you need to add another table ",(0,r.kt)("inlineCode",{parentName:"p"},"Customer"),"-"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var tblCustomer = {\n    name: 'Customer',\n        columns: {\n            id:{ primaryKey: true, autoIncrement: true },\n            name:{\n                dataType:'string'\n            },\n            country:{\n                dataType:'string'\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"You need to add the table into the tables array and update the database version -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var db = {\n    name: "db_name",\n    tables: [tblProduct, tblCustomer],\n    version: 2\n}\n')),(0,r.kt)("h2",{id:"alter-existing-table"},"Alter existing table"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("strong",{parentName:"p"},"alter")," option in the schema to ",(0,r.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"modify")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"drop")," column from existing table. You need to define what to change in alter field of table."),(0,r.kt)("p",null,"Let's say your schema looks like this - "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var tblProduct = {\n    name: 'Product',\n    columns: {\n        id:{ primaryKey: true, autoIncrement: true },\n        count:{\n            dataType:'number'\n        }\n    },\n};\nvar db = {\n    name: \"db_name\",\n    tables: [tblProduct]\n}\n")),(0,r.kt)("h3",{id:"add-column"},"Add column"),(0,r.kt)("p",null,"Let's add a column ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," for the version 2 of the database - "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var tblProduct = {\n    name: 'Product',\n    columns: {\n        id:{ primaryKey: true, autoIncrement: true },\n        count:{\n            dataType:'number'\n        }\n    },\n    alter:{\n        // for version 2\n        2: {\n            add:{\n                name:{\n                    dataType:'string'\n                }\n            }\n        }\n    }\n}\nvar db = {\n    name: \"db_name\",\n    tables:[tblProduct],\n    version: 2 \n}\n\n")),(0,r.kt)("h3",{id:"modify"},"Modify"),(0,r.kt)("p",null,"Let's say we want to add ",(0,r.kt)("inlineCode",{parentName:"p"},"notNull")," to the column ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var tblProduct = {\n    name: 'Product',\n    columns: {\n        id:{ primaryKey: true, autoIncrement: true },\n        count:{\n            dataType:'number'\n        }\n    },\n    alter:{\n        // for version 2\n        2: {\n            add:{\n                name:{\n                    dataType:'string'\n                }\n            }\n        },\n        3:{\n            modify:{\n                name:{\n                    notNull:true\n                }\n            }\n        }\n    }\n}\nvar db = {\n    name: \"db_name\",\n    tables:[tblProduct],\n    version: 3\n}\n")),(0,r.kt)("h3",{id:"drop"},"Drop"),(0,r.kt)("p",null,"Drop can be used to drop a column from existing table."),(0,r.kt)("p",null,"Let's say we want to drop the column ",(0,r.kt)("inlineCode",{parentName:"p"},"count")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var tblProduct = {\n    name: 'Product',\n    columns: {\n        id:{ primaryKey: true, autoIncrement: true },\n        count:{\n            dataType:'number'\n        }\n    },\n    alter:{\n        // for version 2\n        2: {\n            add:{\n                name:{\n                    dataType:'string'\n                }\n            }\n        },\n        3:{\n            modify:{\n                name:{\n                    notNull:true\n                }\n            }\n        },\n        4:{\n            drop:{\n                count:{\n\n                }\n            }\n        }\n    }\n}\nvar db = {\n    name: \"db_name\",\n    tables:[tblProduct],\n    version: 4\n}\n")),(0,r.kt)("p",null,"Here is an ",(0,r.kt)("a",{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/change-db-schema",target:"_blank"},"example")," project."),(0,r.kt)("h2",{id:"how-to-get-current-db-version"},"How to get current db version"),(0,r.kt)("p",null,"you can find your current db version in indexedDb section of browser development tools."),(0,r.kt)("img",{style:{maxWidth:"100%"},src:t(9565).Z}),(0,r.kt)("h2",{id:"what-is-the-need-of-db-version"},"What is the need of db version"),(0,r.kt)("p",null,"IndexedDb is a database technology for browser which means if you do some changes in your web application , any one who use your web app should get latest changes including database changes. "),(0,r.kt)("p",null,"Browser decides to change db schema when indexedb is initiated with db version greater than current db version."),(0,r.kt)("h2",{id:"what-happens-to-data-when-schema-is-changed"},"What happens to data when schema is changed"),(0,r.kt)("p",null,"Your data remains constant. Only index specification is changed."),(0,r.kt)("h2",{id:"what-happens-when-data-type-is-changed"},"What happens when Data type is changed"),(0,r.kt)("p",null,"JsStore does not do any change in existing data. But validate for new data based on new data type."),(0,r.kt)("p",null,"So it is recommended to change the existing data into new datatype after db is created."),(0,r.kt)("p",null,"consider your old schema was - "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var tblProduct = {\n    name: 'Product',\n    columns: {\n        id:{ primaryKey: true, autoIncrement: true },\n        count:{\n            dataType:'number'\n        }\n    }\n}\nvar db = {\n    name: \"db_name\",\n    tables:[tblProduct]\n}\n")),(0,r.kt)("p",null,"Now you want to change the datatype of count column. So your new schema is - "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var tblProduct = {\n    name: 'Product',\n    columns: {\n        id:{ primaryKey: true, autoIncrement: true },\n        count:{\n            dataType:'number'\n        }\n    },\n    alter:{\n        2: {\n            modify: {\n                count:{\n                    dataType:'string'\n                }\n            }\n        }\n    }\n}\nvar db = {\n    name: \"db_name\",\n    tables:[tblProduct],\n    version: 2 \n}\n")),(0,r.kt)("p",null,"now let's change db schema & convert data- "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var connection = new JsStore.Connection();\nvar created = await connection.initDb(db);\n\nif(created){\n    if(db.version===2){\n        // change datatype from number to string\n\n        var existingData = await connection.select({\n            from: 'Product'\n        });\n\n        existingData = existingData.map(value=>{\n            value.count = value.count.toString();\n            return value;\n        })\n\n        await connection.insert({\n            into: \"Product\",\n            upsert:true,\n            values:existingData\n        })\n    }\n}\n")))}p.isMDXComponent=!0},9565:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/version_screenshot-18fd3a4bb2fc90e47d3a7f566b42d05e.png"}}]);