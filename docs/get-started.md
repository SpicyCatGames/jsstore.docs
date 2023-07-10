---
sidebar_position: 1
keywords: [jsstore, get started, introduction, indexeddb, tutorial]
---

# Get started

In this get started tutorial we will learn how to do crud operation in indexeddb using jsstore. You can download the example of this tutorial from - [Crud implementation](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example)

## Introduction

JsStore is a wrapper for [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API). It provides simple SQL like api which is easy to learn & use.

IndexedDb query can be executed inside web worker & JsStore preserve this functionality by providing a seperate worker file. 

So query can be executed both way - inside web worker or without web worker. But it is strongly recommended to use [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) because it runs scripts in background thread.

## Installation

There are various ways to install JsStore. For more about installation check out the [installation](/docs/installation.md) page

Let's download the script from github. Go to this link - <a href="https://github.com/ujjwalguptaofficial/JsStore/releases/latest" target="_blank">jsstore release</a> & download files jsstore.js & jsstore.worker.js. 

Now create a html page & include jsstore.js - 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Crud Demo using jsstore</title>
    <script src="jsstore.js"></script>
</head>
<body>
<h4>We have included JsStore in this html code.</h4>
</body>
</html>

```

## Connection

A connection allow you to query database. It can be initialized with web worker file or without web worker file. 

When initialized with worker file - jsstore create a web worker and query is executed inside web worker. For more info, check out the [Connection](/docs/connection.md) page

```javascript
var connection = new JsStore.Connection(new Worker('jsstore.worker.js'));
```

## Creating Database

JsStore follows SQL approach to create database - A database is consist of tables and a table is consist of columns.

Lets see an example - 

```javascript
var dbName ='JsStore_Demo';
var tblProduct = {
    name: 'Product',
    columns: {
        // Here "Id" is name of column 
        id:{ primaryKey: true, autoIncrement: true },
        itemName:  { notNull: true, dataType: "string" },
        price:  { notNull: true, dataType: "number" },
        quantity : { notNull: true, dataType: "number" }
    }
};
var database = {
    name: dbName,
    tables: [tblProduct]
}
```
As written in the code you can define constraints like autoincrement, data type, default, not null similar to what you can do in SQL. Read more about column [here](/docs/database/column.md)

Now we need to use the above database schema to create the database in indexeddb.

## initDb

[initDb](/docs/database#2callinitdb) api is used to initiate the database. It accepts database schema & creates or open database. 

It returns boolean value which can be used to know if db is created or opened.

```javascript
const isDbCreated = await connection.initDb(database);
if(isDbCreated === true){
    console.log("db created");
    // here you can prefill database with some data
}
else {
    console.log("db opened");
}
```

**Note :-** The connection variable will be used to execute future queries so we don't need to initiate it multiple times.

## Inserting data

JsStore provides [insert](/docs/insert/index.md) API for inserting data.

Let's say we have below value -

```javascript
var value = {
    itemName: 'Blue Jeans',
    price: 2000,
    quantity: 1000
}
```

>value does not contains id property because it is an autoincrement column. It will be automatically generated before storing data. 

Now, let's insert this value into db -  

```javascript
var insertCount = await connection.insert({
    into: 'Product',
    values: [value]
});

console.log(`${insertCount} rows inserted`);
```
  
## Read data

JsStore provides [select](/docs/select/index.md) API for reading data. Let's say I want to retrieve the record with Id of 5.

```javascript
// results will be array of objects
var results = await connection.select({
    from: 'Product',
    where: {
        id: 5
    }
});

alert(results.length + 'record found');
```
You can also perform operations like- "IN", "LIKE", "BETWEEN", "LIMIT" etc. For more filtering option , read [where doc](/docs/where/index.md).

## Updating data

JsStore provides [update](/docs/update/index.md) API for reading data. 

Consider we want to update Quantity to 2000 on the products with item name containing substring 'black'.

```javascript
var rowsUpdated = await connection.update({ 
    in: 'Product',
    where: {
        itemName: {
            like: '%black%'
        }
    },
    set: {
        quantity: 2000
    }
});
alert(rowsUpdated + ' rows updated');
```

## Remove data

JsStore provides [remove](/docs/remove.md) API for reading data. 

Consider we want to delete the product with Id of 10.

```javascript
var rowsDeleted = await connection.remove({
    from: 'Product',
    where: {
        id: 10
    }
});
alert(rowsDeleted + ' record deleted');
```
    
We hope you have understood this article. Now let's make something awesome.

---

## Tutorial and examples

Check it out some tutorial & examples for more understanding -

* [Vue integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/vue)
* [React integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/react)
* [Angular integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/angular)
* [Svelte integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/svelte)
* [ElectronJs integration](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/electron)
* [JsStore without web worker](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without_web_worker)
* [Building an indexeddb app with webpack](https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/webpack)
* [Crud implementation](https://github.com/ujjwalguptaofficial/jsstore-examples)
* [Using jsstore in typescript](https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/typescript)
