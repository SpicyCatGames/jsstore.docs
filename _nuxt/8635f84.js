(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{172:function(t,e,n){var content=n(176);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("4a7957ce",content,!0,{sourceMap:!1})},173:function(t,e,n){"use strict";var r=n(4),o=n(83)(6),l="findIndex",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),r(r.P+r.F*c,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(82)(l)},174:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Select",url:"select",children:[{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Join",url:"join"},{text:"Flatten",url:"flatten"}]},{text:"Where",url:"where",children:[{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Regex",url:"regex"},{text:"Or",url:"or"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Ignore Case (Deprecated)",url:"ignore-case"}]},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Union",url:"union"},{text:"Intersect",url:"intersect"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Schema",url:"change-table-design"},{text:"Helpers",url:"helpers"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Import scripts",url:"import-scripts"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Middleware",url:"middleware"},{text:"Plugin",url:"plugin"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}]},175:function(t,e,n){"use strict";n(172)},176:function(t,e,n){var r=n(32)(!1);r.push([t.i,".b-tutorial[data-v-c208b3e8]{padding:10px 10px 0}.b-tutorial__links[data-v-c208b3e8]{padding-right:30px;border-right:1px solid #e9ecef}.b-tutorial__links__item[data-v-c208b3e8],.b-tutorial__links__item-children[data-v-c208b3e8]{cursor:pointer;padding:10px;color:var(--link-color);font-size:1.1rem}.b-tutorial__links__item-children[data-v-c208b3e8]:hover,.b-tutorial__links__item[data-v-c208b3e8]:hover{background-color:rgba(0,0,0,.05)}.b-tutorial__links__item-children .fas[data-v-c208b3e8],.b-tutorial__links__item .fas[data-v-c208b3e8]{margin-right:5px}.b-tutorial__links__item-children[data-v-c208b3e8]{margin-left:20px;font-size:1rem}.b-tutorial__links__item--active[data-v-c208b3e8]{border:1px solid;border-radius:3px;text-align:center;color:var(--secondary-color);justify-content:center}.b-tutorial__content[data-v-c208b3e8]{padding-left:40px}.b-tutorial__content__btns[data-v-c208b3e8]{display:flex;justify-content:space-between;font-size:2rem;margin-top:30px;margin-bottom:20px}.b-tutorial__content__btns i[data-v-c208b3e8]{cursor:pointer}.b-tutorial__sticky-btn[data-v-c208b3e8]{position:fixed;right:0;bottom:20px;display:flex;flex-direction:column;z-index:1000}.b-tutorial__sticky-btn a[data-v-c208b3e8]{width:56px;height:56px;border-radius:50%;margin-bottom:10px;padding:0}",""]),t.exports=r},177:function(t,e,n){"use strict";n(119),n(173);var r={head:function(){return{title:"JsStore - ".concat(this.title),meta:[{hid:"keywords",name:"keywords",content:this.keywords},{hid:"description",name:"description",content:this.description}]}},props:{contentSrc:String,title:String,description:String,keywords:String},computed:{currentUrl:function(){return this.$route.path},activeUrlIndex:function(){var t=this,e=this.$route.path.split("/"),n=e[e.length-1];return this.links.findIndex((function(e){if(e.url===n)return t.childActiveUrlIndex=-1,!0;var r=e.children;if(r)for(var i=0,o=r.length;i<o;i++)if(r[i].url===n)return t.childActiveUrlIndex=i,!0}))}},data:function(){return{links:[],childActiveUrlIndex:-1}},fetch:function(){var t=n(174);this.links=t},mounted:function(){hljs.highlightAll();var t='Copy <i class="margin-left-10px far fa-copy"></i>';document.querySelectorAll("pre code").forEach((function(e){var div=document.createElement("div");div.className="code-copy ripple",div.innerHTML=t,e.parentNode.prepend(div),div.onclick=function(){!function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}(e.innerText),div.innerHTML='Copied <i class="margin-left-10px fas fa-check"></i>',setTimeout((function(){div.innerHTML=t}),1e3)}}))},methods:{url:function(t){return"/tutorial/"+t},goto:function(t){var path,e=this.childActiveUrlIndex,n=this.links[this.activeUrlIndex];if(e>=0){var r=n.children[e+t];r&&(path=r.url)}return path||(path=this.links[this.activeUrlIndex+t].url),this.$router.push({path:this.url(path)})}}},o=(n(175),n(14)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row b-tutorial"},[n("div",{staticClass:"col-sm-4 col-md-3 col-lg-2 b-tutorial__links"},t._l(t.links,(function(link,e){return n("div",{key:link.text},[n("a",{staticClass:"row content-v-center b-tutorial__links__item ripple",class:{"b-tutorial__links__item--active":e===(!link.children&&t.activeUrlIndex)},attrs:{href:t.url(link.url)}},[link.children?[e===t.activeUrlIndex?n("i",{staticClass:"fas fa-chevron-down"}):n("i",{staticClass:"fas fa-chevron-right"})]:t._e(),t._v("\n        "+t._s(link.text)+"\n      ")],2),t._v(" "),e===t.activeUrlIndex?t._l(link.children,(function(e,r){return n("a",{key:e.url,staticClass:"row content-v-center b-tutorial__links__item-children ripple",class:{"b-tutorial__links__item--active":r===t.childActiveUrlIndex},attrs:{href:t.url(link.url+"/"+e.url)}},[t._v("\n          "+t._s(e.text)+"\n        ")])})):t._e()],2)})),0),t._v(" "),n("div",{staticClass:"b-tutorial__content col-sm-8 col-md-9 col-lg-8"},[t._t("default"),t._v(" "),n("div",{staticClass:"b-tutorial__content__btns"},[n("i",{staticClass:"fas fa-chevron-left",on:{click:function(e){return t.goto(-1)}}}),t._v(" "),n("i",{staticClass:"fas fa-chevron-right",on:{click:function(e){return t.goto(1)}}})])],2),t._v(" "),n("div",{staticClass:"col-lg-2 width-full"},[t._v("Side bar")]),t._v(" "),n("div",{staticClass:"b-tutorial__sticky-btn"},[t._m(0),t._v(" "),n("a",{staticClass:"btn secondary",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/content"+t.currentUrl+".md",fixed:"",bottom:"",right:"",fab:""}},[n("i",{staticClass:"far fa-edit"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn rounded secondary margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby"}},[e("i",{staticClass:"fab fa-gitter"})])}],!1,null,"c208b3e8",null);e.a=component.exports},197:function(t,e,n){"use strict";n.r(e);var r={components:{Layout:n(177).a}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"Case",description:"case is used to change stored value based on some condition.",keywords:"case, query, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/select/case.md"}},[n("p",[t._v("case is an option in select query which is used to change stored value based on some condition. It is similar to multiple if else statetement. So once a condition is true it is stopped and value is returned.")]),t._v(" "),n("pre",[n("code",[t._v("const results = await connection.select({\n    from: 'Customers',\n    case: {\n        city: [{\n            '=': 'London',\n            then: 'London UK'\n        }, {\n            then: 'World'\n        }]\n    }\n})\n")])]),t._v(" "),n("p",[t._v("You can use other operators symbol similar to '=' used above - '>', '>=, '<' ,'<=', '!='")]),t._v(" "),n("p",{staticClass:"margin-top-40px text-center"},[n("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Customers'%2C%0A%20%20%20%20case%3A%20%7B%0A%20%20%20%20%20%20%20%20city%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'%3D'%3A%20'London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20'London%20UK'%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20'World'%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D)"}},[t._v("Example")])]),t._v(" "),n("p",[n("strong",[t._v("Note : -")])]),t._v(" "),n("ul",[n("li",[t._v("If you want to return stored value instead of custom value - provide null value in "),n("code",[t._v("then")]),t._v(" - "),n("code",[t._v("{ then:null }")])]),t._v(" "),n("li",[t._v("This is not used to filter values but to change value. To filter value "),n("code",[t._v("where")]),t._v(" is used.")])]),t._v(" "),n("div",{staticClass:"margin-top-30px top-border margin-bottom-20px"}),t._v(" "),n("h4",{attrs:{id:"order"}},[t._v("Order")]),t._v(" "),n("p",[n("br"),t._v("\ncase can be also used in order query to change the ordering of result.")]),t._v(" "),n("p",[n("strong",[t._v("e.g -")]),t._v(' In Customers table : record contains values -  "Argentina", "Austria" , etc. in column "country". When sorting by coluntry in ascending order - the record "Argentina" comes first & then "Austria". But for some reason we want Austria to comes first.')]),t._v(" "),n("p",[t._v("In this case we will have to use "),n("code",[t._v("case query")]),t._v(" in "),n("code",[t._v("order")]),t._v(' & provide a value for "Austria" which is lesser than "Argentina".')]),t._v(" "),n("pre",[n("code",[t._v("const results = await connection.select({\n    from: 'Customers',\n    order: {\n        by: 'country',\n        case: [{\n            '=': 'Austria',\n            then: \"a\" // telling value of 'Austria is a'\n        }, {\n            then: null\n        }]\n    }\n})\n")])]),t._v(" "),n("p",[n("strong",[t._v("Note :-")]),t._v(" Use same data type as column in "),n("code",[t._v("then")]),t._v(' value otherwise you might get some error. In the above example - i have provided string value "a", as country data type is string.')]),t._v(" "),n("p",{staticClass:"margin-top-40px text-center"},[n("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Customers'%2C%0A%20%20%20%20limit%3A%2010%2C%0A%20%20%20%20order%3A%20%7B%0A%20%20%20%20%20%20%20%20by%3A%20'country'%2C%0A%20%20%20%20%20%20%20%20case%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'%3D'%3A%20'Austria'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20%22a%22%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20null%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D)"}},[t._v("Example")])]),t._v(" "),n("p",[t._v("Another scenario is when you want to change order by column based on some condition. ")]),t._v(" "),n("pre",[n("code",[t._v("select({\n    from: 'Customers',\n    order: {\n        by: {\n            'country': [{\n                '=': 'Spain',\n                then: \"city\"\n            }, {\n                then: 'country'\n            }]\n        }\n    }\n})\n")])]),t._v(" "),n("p",{staticClass:"margin-top-40px text-center"},[n("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Customers'%2C%0A%20%20%20%20order%3A%20%7B%0A%20%20%20%20%20%20%20%20by%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'country'%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'%3D'%3A%20'Spain'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20%22city%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20'country'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)"}},[t._v("Example")])]),t._v(" "),n("h4",{attrs:{id:"groupby"}},[t._v("Group By")]),t._v(" "),n("p",[t._v("case can be used in group by for grouping values dynamically.")]),t._v(" "),n("p",[t._v("e.g - ")]),t._v(" "),n("pre",[n("code",[t._v("const results = await connection.select({\n    from: 'Products',\n    groupBy: {\n        'price': [{\n            '<=': 100,\n            then: 'affordable item'\n        }, {\n            then: 'costly item'\n        }]\n    }\n})\n")])]),t._v(" "),n("p",{staticClass:"margin-top-40px text-center"},[n("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Products'%2C%0A%20%20%20%20groupBy%3A%20%7B%0A%20%20%20%20%20%20%20%20'price'%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'%3C%3D'%3A%20100%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20'affordable%20item'%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20'costly%20item'%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D)"}},[t._v("Example")])])])}),[],!1,null,null,null);e.default=component.exports}}]);