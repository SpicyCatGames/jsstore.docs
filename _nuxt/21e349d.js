(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{172:function(t,e,r){var content=r(176);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("4a7957ce",content,!0,{sourceMap:!1})},173:function(t,e,r){"use strict";var n=r(4),o=r(83)(6),l="findIndex",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),n(n.P+n.F*c,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(82)(l)},174:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Select",url:"select",children:[{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Join",url:"join"},{text:"Flatten",url:"flatten"}]},{text:"Where",url:"where",children:[{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Regex",url:"regex"},{text:"Or",url:"or"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Ignore Case (Deprecated)",url:"ignore-case"}]},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Union",url:"union"},{text:"Intersect",url:"intersect"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Schema",url:"change-table-design"},{text:"Helpers",url:"helpers"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Import scripts",url:"import-scripts"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Middleware",url:"middleware"},{text:"Plugin",url:"plugin"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}]},175:function(t,e,r){"use strict";r(172)},176:function(t,e,r){var n=r(32)(!1);n.push([t.i,".b-tutorial[data-v-c208b3e8]{padding:10px 10px 0}.b-tutorial__links[data-v-c208b3e8]{padding-right:30px;border-right:1px solid #e9ecef}.b-tutorial__links__item[data-v-c208b3e8],.b-tutorial__links__item-children[data-v-c208b3e8]{cursor:pointer;padding:10px;color:var(--link-color);font-size:1.1rem}.b-tutorial__links__item-children[data-v-c208b3e8]:hover,.b-tutorial__links__item[data-v-c208b3e8]:hover{background-color:rgba(0,0,0,.05)}.b-tutorial__links__item-children .fas[data-v-c208b3e8],.b-tutorial__links__item .fas[data-v-c208b3e8]{margin-right:5px}.b-tutorial__links__item-children[data-v-c208b3e8]{margin-left:20px;font-size:1rem}.b-tutorial__links__item--active[data-v-c208b3e8]{border:1px solid;border-radius:3px;text-align:center;color:var(--secondary-color);justify-content:center}.b-tutorial__content[data-v-c208b3e8]{padding-left:40px}.b-tutorial__content__btns[data-v-c208b3e8]{display:flex;justify-content:space-between;font-size:2rem;margin-top:30px;margin-bottom:20px}.b-tutorial__content__btns i[data-v-c208b3e8]{cursor:pointer}.b-tutorial__sticky-btn[data-v-c208b3e8]{position:fixed;right:0;bottom:20px;display:flex;flex-direction:column;z-index:1000}.b-tutorial__sticky-btn a[data-v-c208b3e8]{width:56px;height:56px;border-radius:50%;margin-bottom:10px;padding:0}",""]),t.exports=n},177:function(t,e,r){"use strict";r(119),r(173);var n={head:function(){return{title:"JsStore - ".concat(this.title),meta:[{hid:"keywords",name:"keywords",content:this.keywords},{hid:"description",name:"description",content:this.description}]}},props:{contentSrc:String,title:String,description:String,keywords:String},computed:{currentUrl:function(){return this.$route.path},activeUrlIndex:function(){var t=this,e=this.$route.path.split("/"),r=e[e.length-1];return this.links.findIndex((function(e){if(e.url===r)return t.childActiveUrlIndex=-1,!0;var n=e.children;if(n)for(var i=0,o=n.length;i<o;i++)if(n[i].url===r)return t.childActiveUrlIndex=i,!0}))}},data:function(){return{links:[],childActiveUrlIndex:-1}},fetch:function(){var t=r(174);this.links=t},mounted:function(){hljs.highlightAll();var t='Copy <i class="margin-left-10px far fa-copy"></i>';document.querySelectorAll("pre code").forEach((function(e){var div=document.createElement("div");div.className="code-copy ripple",div.innerHTML=t,e.parentNode.prepend(div),div.onclick=function(){!function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}(e.innerText),div.innerHTML='Copied <i class="margin-left-10px fas fa-check"></i>',setTimeout((function(){div.innerHTML=t}),1e3)}}))},methods:{url:function(t){return"/tutorial/"+t},goto:function(t){var path,e=this.childActiveUrlIndex,r=this.links[this.activeUrlIndex];if(e>=0){var n=r.children[e+t];n&&(path=n.url)}return path||(path=this.links[this.activeUrlIndex+t].url),this.$router.push({path:this.url(path)})}}},o=(r(175),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row b-tutorial"},[r("div",{staticClass:"col-sm-4 col-md-3 col-lg-2 b-tutorial__links"},t._l(t.links,(function(link,e){return r("div",{key:link.text},[r("a",{staticClass:"row content-v-center b-tutorial__links__item ripple",class:{"b-tutorial__links__item--active":e===(!link.children&&t.activeUrlIndex)},attrs:{href:t.url(link.url)}},[link.children?[e===t.activeUrlIndex?r("i",{staticClass:"fas fa-chevron-down"}):r("i",{staticClass:"fas fa-chevron-right"})]:t._e(),t._v("\n        "+t._s(link.text)+"\n      ")],2),t._v(" "),e===t.activeUrlIndex?t._l(link.children,(function(e,n){return r("a",{key:e.url,staticClass:"row content-v-center b-tutorial__links__item-children ripple",class:{"b-tutorial__links__item--active":n===t.childActiveUrlIndex},attrs:{href:t.url(link.url+"/"+e.url)}},[t._v("\n          "+t._s(e.text)+"\n        ")])})):t._e()],2)})),0),t._v(" "),r("div",{staticClass:"b-tutorial__content col-sm-8 col-md-9 col-lg-8"},[t._t("default"),t._v(" "),r("div",{staticClass:"b-tutorial__content__btns"},[r("i",{staticClass:"fas fa-chevron-left",on:{click:function(e){return t.goto(-1)}}}),t._v(" "),r("i",{staticClass:"fas fa-chevron-right",on:{click:function(e){return t.goto(1)}}})])],2),t._v(" "),r("div",{staticClass:"col-lg-2 width-full"},[t._v("Side bar")]),t._v(" "),r("div",{staticClass:"b-tutorial__sticky-btn"},[t._m(0),t._v(" "),r("a",{staticClass:"btn secondary",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/content"+t.currentUrl+".md",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"far fa-edit"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn rounded secondary margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby"}},[e("i",{staticClass:"fab fa-gitter"})])}],!1,null,"c208b3e8",null);e.a=component.exports},225:function(t,e,r){"use strict";r.r(e);var n={components:{Layout:r(177).a}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"Get Started",description:"learn how to use indexeddb with jsstore",keywords:"jsstore, get started, introduction, indexeddb, tutorial",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/get-started.md"}},[r("p",[t._v("In this get started tutorial we will learn how to do crud operation in indexeddb using jsstore. You can download the example of this tutorial from - "),r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example"}},[t._v("Crud implementation")])]),t._v(" "),r("h4",{attrs:{id:"installation"}},[t._v("Installation")]),t._v(" "),r("p",[t._v("JsStore can be installed using npm, cdn or scripts can be also download from jsstore github page. ")]),t._v(" "),r("p",[t._v("IndexedDb query can be executed inside web worker & JsStore preserve this functionality by providing way to execute query inside both web worker & without web worker. But it is highly recommended to use "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"}},[t._v("web worker")]),t._v(" because it runs scripts in background thread. So i am going to use web worker in this tutorial. ")]),t._v(" "),r("p",[t._v("Let's download the script from github. Go to this link - "),r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/JsStore/releases/latest",target:"_blank"}},[t._v("jsstore release")]),t._v(" & download files jsstore.js & jsstore.worker.js. ")]),t._v(" "),r("p",[t._v("Now create a html page & include jsstore.js - ")]),t._v(" "),r("pre",[r("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Crud Demo using jsstore</title>\n    <script src="jsstore.js"><\/script>\n</head>\n<body>\n<h4>We have included JsStore in this html code.</h4>\n</body>\n</html>\n')])]),t._v(" "),r("p",[t._v("For more about installation check out the "),r("a",{attrs:{href:"/tutorial/installation"}},[t._v("installation")]),t._v(" page")]),t._v(" "),r("h4",{attrs:{id:"creatingdatabase"}},[t._v("Creating Database")]),t._v(" "),r("p",[t._v("JsStore follows SQL approach to create database - A database is consist of tables and a table is consist of columns.")]),t._v(" "),r("p",[t._v("Lets see how to create a database schema in JsStore.")]),t._v(" "),r("pre",[r("code",[t._v('var dbName =\'JsStore_Demo\';\nfunction getDbSchema() {\n  var tblProduct = {\n    name: \'Product\',\n    columns: {\n        // Here "Id" is name of column \n        id:{ primaryKey: true, autoIncrement: true },\n        itemName:  { notNull: true, dataType: "string" },\n        price:  { notNull: true, dataType: "number" },\n        quantity : { notNull: true, dataType: "number" }\n    }\n  };\n  var db = {\n      name: dbName,\n      tables: [tblProduct]\n  }\n  return db;\n}\n')])]),t._v(" "),r("p",[t._v("As written in the code you can define constraints like autoincrement, datatype, default, notnull similar to what you can do in SQL.")]),t._v(" "),r("p",[t._v("Now we need to use the above database schema to create the database in indexeddb -")]),t._v(" "),r("pre",[r("code",[t._v('// executing jsstore inside a web worker\nvar connection = new JsStore.Connection(new Worker(\'jsstore.worker.js\'));\n\nasync function initJsStore() {\n      var database = getDbSchema();\n      const isDbCreated = await connection.initDb(database);\n      if(isDbCreated===true){\n          console.log("db created");\n          // here you can prefill database with some data\n      }\n      else {\n          console.log("db opened");\n      }\n}\n')])]),t._v(" "),r("p",[t._v("In the above code -")]),t._v(" "),r("ul",[r("li",[t._v("Line 1 - Storing the JsStore connection in a variable 'connection'.")]),t._v(" "),r("li",[t._v("Line 2 - Declared a function initJsStore which will create the database using provided schema in IndexedDB. ")])]),t._v(" "),r("p",[r("br"),t._v(" "),r("strong",[t._v("Note :-")]),t._v(" The connection object will be used to execute future queries so we dont need to initiate it multiple times.")]),t._v(" "),r("h4",{attrs:{id:"insertingdata"}},[t._v("Inserting data")]),t._v(" "),r("p",[t._v("JsStore provides "),r("a",{attrs:{href:"/tutorial/insert"}},[t._v("insert")]),t._v(" API for inserting data.")]),t._v(" "),r("p",[t._v("Let's say we have below value -")]),t._v(" "),r("pre",[r("code",[t._v("var value = {\n    itemName: 'Blue Jeans',\n    price: 2000,\n    quantity: 1000\n}\n")])]),t._v(" "),r("p",[t._v('One thing to notice is that value does not contain the "id" property. Since it is an autoincrement column, it will be automatically generated by jsstore before inserting data and added with supplied data. ')]),t._v(" "),r("p",[t._v("Now, let's insert this value into db -  ")]),t._v(" "),r("pre",[r("code",[t._v("var noOfDataInserted = await connection.insert({\n    into: 'Product',\n    values: [value]\n});\nif (noOfDataInserted > 0) {\n    alert('successfully added');\n}\n")])]),t._v(" "),r("h4",{attrs:{id:"readdata"}},[t._v("Read data")]),t._v(" "),r("p",[t._v("JsStore provides "),r("a",{attrs:{href:"/tutorial/select"}},[t._v("select")]),t._v(" API for reading data. Lets say I want to retrieve the record with Id of 5.")]),t._v(" "),r("pre",[r("code",[t._v("// results will be array of objects\nvar results = await connection.select({\n    from: 'Product',\n    where: {\n        id: 5\n    }\n});\nalert(results.length + 'record found');\n")])]),t._v(" "),r("p",[t._v('You can also perform operations like- "IN", "LIKE", "BETWEEN", "LIMIT" etc.')]),t._v(" "),r("h4",{attrs:{id:"updatingdata"}},[t._v("Updating data")]),t._v(" "),r("p",[t._v("JsStore provides "),r("a",{attrs:{href:"/tutorial/update"}},[t._v("update")]),t._v(" API for reading data. ")]),t._v(" "),r("p",[t._v("Lets say We want to update Quantity to 2000 on the products with Item Name containing the substring 'black'.")]),t._v(" "),r("pre",[r("code",[t._v("var rowsUpdated = await connection.update({ \n    in: 'Product',\n    where: {\n        itemName: {\n            like: '%black%'\n        }\n    },\n    set: {\n        quantity: 2000\n    }\n});\nalert(rowsUpdated + ' rows updated');\n")])]),t._v(" "),r("h4",{attrs:{id:"removedata"}},[t._v("Remove data")]),t._v(" "),r("p",[t._v("JsStore provides "),r("a",{attrs:{href:"/tutorial/remove"}},[t._v("remove")]),t._v(" API for reading data. ")]),t._v(" "),r("p",[t._v("Lets say I want to delete the product with Id of 10.")]),t._v(" "),r("pre",[r("code",[t._v("var rowsDeleted = await connection.remove({\n    from: 'Product',\n    where: {\n        id: 10\n    }\n});\nalert(rowsDeleted + ' record deleted');\n")])]),t._v(" "),r("p",[t._v("We hope you have understood this article. Now lets make something awesome.")]),t._v(" "),r("h4",{attrs:{id:"checkitoutsometutorialexamplesformoreunderstanding"}},[t._v("* Check it out some tutorial & examples for more understanding -")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/vue"}},[t._v("Vue integration")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/react"}},[t._v("React integration")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/angular"}},[t._v("Angular integration")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/svelte"}},[t._v("Svelte integration")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/electron"}},[t._v("ElectronJs integration")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without_web_worker"}},[t._v("JsStore without web worker")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/webpack"}},[t._v("Building an indexeddb app with webpack")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples"}},[t._v("Crud implementation")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/typescript"}},[t._v("Using jsstore in typescript")])])]),t._v(" "),r("style",[t._v("\n    iframe {\n        height: 300px;\n    }\n")])])}),[],!1,null,null,null);e.default=component.exports}}]);