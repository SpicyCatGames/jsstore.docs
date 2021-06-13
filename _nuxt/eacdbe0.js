(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{198:function(e,t,n){"use strict";n.r(t);var o={components:{Layout:n(172).a}},r=n(14),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{attrs:{title:"Case",description:"case is used to change stored value based on some condition.",keywords:"case, query, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/select/case.md"}},[n("p",[e._v("case is an option in select query which is used to change stored value based on some condition. It is similar to multiple if else statetement. So once a condition is true it is stopped and value is returned.")]),e._v(" "),n("pre",[n("code",[e._v("const results = await connection.select({\n    from: 'Customers',\n    case: {\n        city: [{\n            '=': 'London',\n            then: 'London UK'\n        }, {\n            then: 'World'\n        }]\n    }\n})\n")])]),e._v(" "),n("p",[e._v("You can use other operators symbol similar to '=' used above - '>', '>=, '<' ,'<=', '!='")]),e._v(" "),n("p",{staticClass:"margin-top-40px text-center"},[n("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Customers'%2C%0A%20%20%20%20case%3A%20%7B%0A%20%20%20%20%20%20%20%20city%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'%3D'%3A%20'London'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20'London%20UK'%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20'World'%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D)"}},[e._v("Example")])]),e._v(" "),n("p",[n("strong",[e._v("Note : -")])]),e._v(" "),n("ul",[n("li",[e._v("If you want to return stored value instead of custom value - provide null value in "),n("code",[e._v("then")]),e._v(" - "),n("code",[e._v("{ then:null }")])]),e._v(" "),n("li",[e._v("This is not used to filter values but to change value. To filter value "),n("code",[e._v("where")]),e._v(" is used.")])]),e._v(" "),n("div",{staticClass:"mt-20px top-border mb-20px"}),e._v(" "),n("h4",{attrs:{id:"order"}},[e._v("Order")]),e._v(" "),n("p",[n("br"),e._v("\ncase can be also used in order query to change the ordering of result.")]),e._v(" "),n("p",[n("strong",[e._v("e.g -")]),e._v(' In Customers table : record contains values -  "Argentina", "Austria" , etc. in column "country". When sorting by coluntry in ascending order - the record "Argentina" comes first & then "Austria". But for some reason we want Austria to comes first.')]),e._v(" "),n("p",[e._v("In this case we will have to use "),n("code",[e._v("case query")]),e._v(" in "),n("code",[e._v("order")]),e._v(' & provide a value for "Austria" which is lesser than "Argentina".')]),e._v(" "),n("pre",[n("code",[e._v("const results = await connection.select({\n    from: 'Customers',\n    order: {\n        by: 'country',\n        case: [{\n            '=': 'Austria',\n            then: \"a\" // telling value of 'Austria is a'\n        }, {\n            then: null\n        }]\n    }\n})\n")])]),e._v(" "),n("p",[n("strong",[e._v("Note :-")]),e._v(" Use same data type as column in "),n("code",[e._v("then")]),e._v(' value otherwise you might get some error. In the above example - i have provided string value "a", as country data type is string.')]),e._v(" "),n("p",{staticClass:"text-center"},[n("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Customers'%2C%0A%20%20%20%20limit%3A%2010%2C%0A%20%20%20%20order%3A%20%7B%0A%20%20%20%20%20%20%20%20by%3A%20'country'%2C%0A%20%20%20%20%20%20%20%20case%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'%3D'%3A%20'Austria'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20%22a%22%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20null%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D)"}},[e._v("Example")])]),e._v(" "),n("p",[e._v("Another scenario is when you want to change order by column based on some condition. ")]),e._v(" "),n("pre",[n("code",[e._v("select({\n    from: 'Customers',\n    order: {\n        by: {\n            'country': [{\n                '=': 'Spain',\n                then: \"city\"\n            }, {\n                then: 'country'\n            }]\n        }\n    }\n})\n")])]),e._v(" "),n("p",{staticClass:"margin-top-40px text-center"},[n("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Customers'%2C%0A%20%20%20%20order%3A%20%7B%0A%20%20%20%20%20%20%20%20by%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'country'%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'%3D'%3A%20'Spain'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20%22city%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20'country'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)"}},[e._v("Example")])]),e._v(" "),n("h4",{attrs:{id:"groupby"}},[e._v("Group By")]),e._v(" "),n("p",[e._v("case can be used in group by for grouping values dynamically.")]),e._v(" "),n("p",[e._v("e.g - ")]),e._v(" "),n("pre",[n("code",[e._v("const results = await connection.select({\n    from: 'Products',\n    groupBy: {\n        'price': [{\n            '<=': 100,\n            then: 'affordable item'\n        }, {\n            then: 'costly item'\n        }]\n    }\n})\n")])]),e._v(" "),n("p",{staticClass:"margin-top-40px text-center"},[n("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Products'%2C%0A%20%20%20%20groupBy%3A%20%7B%0A%20%20%20%20%20%20%20%20'price'%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'%3C%3D'%3A%20100%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20'affordable%20item'%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20then%3A%20'costly%20item'%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D)"}},[e._v("Example")])])])}),[],!1,null,null,null);t.default=component.exports}}]);