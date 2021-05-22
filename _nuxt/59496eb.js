(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{227:function(e,t,r){"use strict";r.r(t);var o={components:{Layout:r(172).a}},n=r(14),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",{attrs:{title:"Get Started",description:"learn how to use indexeddb with jsstore",keywords:"jsstore, get started, introduction, indexeddb, tutorial",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/get-started.md"}},[r("p",[e._v("In this get started tutorial we will learn how to do crud operation in indexeddb using jsstore. You can download the example of this tutorial from - "),r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example"}},[e._v("Crud implementation")])]),e._v(" "),r("h4",{attrs:{id:"introduction"}},[e._v("Introduction")]),e._v(" "),r("p",[e._v("JsStore is a wrapper for "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"}},[e._v("IndexedDB")]),e._v(". It provides simple SQL like api which is easy to learn & use.")]),e._v(" "),r("p",[e._v("IndexedDb query can be executed inside web worker & JsStore preserve this functionality by providing a seperate worker file. ")]),e._v(" "),r("p",[e._v("So query can be executed both way - inside web worker or without web worker. But it is strongly recommended to use "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"}},[e._v("web worker")]),e._v(" because it runs scripts in background thread.")]),e._v(" "),r("h4",{attrs:{id:"installation"}},[e._v("Installation")]),e._v(" "),r("p",[e._v("There are various ways to install JsStore. For more about installation check out the "),r("a",{attrs:{href:"/tutorial/installation"}},[e._v("installation")]),e._v(" page")]),e._v(" "),r("p",[e._v("Let's download the script from github. Go to this link - "),r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/JsStore/releases/latest",target:"_blank"}},[e._v("jsstore release")]),e._v(" & download files jsstore.js & jsstore.worker.js. ")]),e._v(" "),r("p",[e._v("Now create a html page & include jsstore.js - ")]),e._v(" "),r("pre",[r("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Crud Demo using jsstore</title>\n    <script src="jsstore.js"><\/script>\n</head>\n<body>\n<h4>We have included JsStore in this html code.</h4>\n</body>\n</html>\n')])]),e._v(" "),r("h4",{attrs:{id:"connection"}},[e._v("Connection")]),e._v(" "),r("p",[e._v("A connection allow you to query database. It can be initialized with web worker file or without web worker file. ")]),e._v(" "),r("p",[e._v("When initialized with worker file - jsstore create a web worker and query is executed inside web worker. For more info, check out the "),r("a",{attrs:{href:"/tutorial/connection"}},[e._v("Connection")]),e._v(" page")]),e._v(" "),r("pre",[r("code",[e._v("var connection = new JsStore.Connection(new Worker('jsstore.worker.js'));\n")])]),e._v(" "),r("h4",{attrs:{id:"creatingdatabase"}},[e._v("Creating Database")]),e._v(" "),r("p",[e._v("JsStore follows SQL approach to create database - A database is consist of tables and a table is consist of columns.")]),e._v(" "),r("p",[e._v("Lets see an example - ")]),e._v(" "),r("pre",[r("code",[e._v('var dbName =\'JsStore_Demo\';\nvar tblProduct = {\n    name: \'Product\',\n    columns: {\n        // Here "Id" is name of column \n        id:{ primaryKey: true, autoIncrement: true },\n        itemName:  { notNull: true, dataType: "string" },\n        price:  { notNull: true, dataType: "number" },\n        quantity : { notNull: true, dataType: "number" }\n    }\n};\nvar database = {\n    name: dbName,\n    tables: [tblProduct]\n}\n')])]),e._v(" "),r("p",[e._v("As written in the code you can define constraints like autoincrement, data type, default, not null similar to what you can do in SQL. Read mor about column "),r("a",{attrs:{href:"/tutorial/database/column"}},[e._v("here")])]),e._v(" "),r("p",[e._v("Now we need to use the above database schema to create the database in indexeddb.")]),e._v(" "),r("h4",{attrs:{id:"initdb"}},[e._v("initDb")]),e._v(" "),r("p",[r("a",{attrs:{href:"/tutorial/database#2callinitdb"}},[e._v("initDb")]),e._v(" api is used to initiate the database. It accepts database schema & creates or open database. ")]),e._v(" "),r("p",[e._v("It returns boolean value which can be used to know if db is created or opened.")]),e._v(" "),r("pre",[r("code",[e._v('const isDbCreated = await connection.initDb(database);\nif(isDbCreated === true){\n    console.log("db created");\n    // here you can prefill database with some data\n}\nelse {\n    console.log("db opened");\n}\n')])]),e._v(" "),r("p",[r("br"),e._v(" "),r("strong",[e._v("Note :-")]),e._v(" The connection variable will be used to execute future queries so we don't need to initiate it multiple times.")]),e._v(" "),r("h4",{attrs:{id:"insertingdata"}},[e._v("Inserting data")]),e._v(" "),r("p",[e._v("JsStore provides "),r("a",{attrs:{href:"/tutorial/insert"}},[e._v("insert")]),e._v(" API for inserting data.")]),e._v(" "),r("p",[e._v("Let's say we have below value -")]),e._v(" "),r("pre",[r("code",[e._v("var value = {\n    itemName: 'Blue Jeans',\n    price: 2000,\n    quantity: 1000\n}\n")])]),e._v(" "),r("p",[e._v('One thing to notice is that value does not contain the "id" property. Since it is an autoincrement column, it will be automatically generated by jsstore before inserting data and added with supplied data. ')]),e._v(" "),r("p",[e._v("Now, let's insert this value into db -  ")]),e._v(" "),r("pre",[r("code",[e._v("var insertCount = await connection.insert({\n    into: 'Product',\n    values: [value]\n});\n\nconsole.log(`${insertCount} rows inserted`);\n")])]),e._v(" "),r("h4",{attrs:{id:"readdata"}},[e._v("Read data")]),e._v(" "),r("p",[e._v("JsStore provides "),r("a",{attrs:{href:"/tutorial/select"}},[e._v("select")]),e._v(" API for reading data. Let's say I want to retrieve the record with Id of 5.")]),e._v(" "),r("pre",[r("code",[e._v("// results will be array of objects\nvar results = await connection.select({\n    from: 'Product',\n    where: {\n        id: 5\n    }\n});\n\nalert(results.length + 'record found');\n")])]),e._v(" "),r("p",[e._v('You can also perform operations like- "IN", "LIKE", "BETWEEN", "LIMIT" etc. For more filtering option , read '),r("a",{attrs:{href:"/tutorial/where"}},[e._v("where doc")]),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"updatingdata"}},[e._v("Updating data")]),e._v(" "),r("p",[e._v("JsStore provides "),r("a",{attrs:{href:"/tutorial/update"}},[e._v("update")]),e._v(" API for reading data. ")]),e._v(" "),r("p",[e._v("Consider we want to update Quantity to 2000 on the products with item name containing substring 'black'.")]),e._v(" "),r("pre",[r("code",[e._v("var rowsUpdated = await connection.update({ \n    in: 'Product',\n    where: {\n        itemName: {\n            like: '%black%'\n        }\n    },\n    set: {\n        quantity: 2000\n    }\n});\nalert(rowsUpdated + ' rows updated');\n")])]),e._v(" "),r("h4",{attrs:{id:"removedata"}},[e._v("Remove data")]),e._v(" "),r("p",[e._v("JsStore provides "),r("a",{attrs:{href:"/tutorial/remove"}},[e._v("remove")]),e._v(" API for reading data. ")]),e._v(" "),r("p",[e._v("Consider we want to delete the product with Id of 10.")]),e._v(" "),r("pre",[r("code",[e._v("var rowsDeleted = await connection.remove({\n    from: 'Product',\n    where: {\n        id: 10\n    }\n});\nalert(rowsDeleted + ' record deleted');\n")])]),e._v(" "),r("p",[e._v("We hope you have understood this article. Now let's make something awesome.")]),e._v(" "),r("h4",{attrs:{id:"checkitoutsometutorialexamplesformoreunderstanding"}},[e._v("* Check it out some tutorial & examples for more understanding -")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/vue"}},[e._v("Vue integration")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/react"}},[e._v("React integration")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/angular"}},[e._v("Angular integration")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/svelte"}},[e._v("Svelte integration")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/electron"}},[e._v("ElectronJs integration")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without_web_worker"}},[e._v("JsStore without web worker")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/webpack"}},[e._v("Building an indexeddb app with webpack")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples"}},[e._v("Crud implementation")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/typescript"}},[e._v("Using jsstore in typescript")])])])])}),[],!1,null,null,null);t.default=component.exports}}]);