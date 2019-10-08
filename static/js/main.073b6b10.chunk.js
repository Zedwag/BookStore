(window.webpackJsonpbooks_store=window.webpackJsonpbooks_store||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/oops.138b0508.png"},31:function(e,t,n){e.exports=n(48)},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),i=n(8),l=n(11),u=n(9),s=(n(40),Object(i.b)((function(e){var t=e.shoppingCart,n=t.orderTotal;return{numItems:t.itemsQuantity,total:n}}))((function(e){var t=e.numItems,n=e.total;return r.a.createElement("header",{className:"shop-header row"},r.a.createElement(l.b,{to:"/BookStore/"},r.a.createElement("div",{className:"logo text-dark"},"BookStore")),r.a.createElement(l.b,{to:"/BookStore/cart"},r.a.createElement("div",{className:"shopping-cart"},r.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),t," items ($",n,")")))}))),m=n(12),d=n(13),p=n(19),f=n(18),b=n(20),E=(n(42),function(e){var t=e.book,n=e.onAddedToCart,a=t.title,o=t.author,c=t.price,i=t.coverImage;return r.a.createElement("div",{className:"book-list-item"},r.a.createElement("div",{className:"book-cover"},r.a.createElement("img",{src:i,alt:"cover"})),r.a.createElement("div",{className:"book-details"},r.a.createElement("span",{className:"book-title"},a),r.a.createElement("div",{className:"book-author"},o),r.a.createElement("div",{className:"book-price"},c,"$"),r.a.createElement("button",{onClick:n,className:"btn btn-info add-to-cart"},"Add to cart")))}),h=n(10),g=r.a.createContext(),O=g.Provider,v=g.Consumer,k=function(){return function(e){return function(t){return r.a.createElement(v,null,(function(n){return r.a.createElement(e,Object.assign({},t,{bookstoreService:n}))}))}}},y=function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}},C=function(e){return function(){return function(t){t({type:"FETCH_BOOKS_REQUEST"}),e.getBooks().then((function(e){return t({type:"FETCH_BOOKS_SUCCESS",payload:e})})).catch((function(e){return t({type:"FETCH_BOOKS_FAILURE",payload:e})}))}}},_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},T=(n(43),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-rolling spinner"},r.a.createElement("div",null)),r.a.createElement("style",{type:"text/css"}))}),j=(n(44),n(29)),N=n.n(j),A=function(){return r.a.createElement("div",{className:"error-indicator"},r.a.createElement("img",{src:N.a,alt:"error icon"}),r.a.createElement("span",null,"something has gone terribly wrong"))},S=(n(45),function(e){var t=e.books,n=e.onAddedToCart;return r.a.createElement("ul",{className:"book-list"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(E,{book:e,onAddedToCart:function(){return n(e.id)}}))})))}),B=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.loading,a=e.error,o=e.onAddedToCart;return n?r.a.createElement(T,null):a?r.a.createElement(A,null):r.a.createElement(S,{books:t,onAddedToCart:o})}}]),t}(a.Component),I=_(k(),Object(i.b)((function(e){var t=e.bookList;return{books:t.books,loading:t.loading,error:t.error}}),(function(e,t){var n=t.bookstoreService;return Object(h.b)({fetchBooks:C(n),onAddedToCart:y},e)})))(B),w=function(){return r.a.createElement(I,null)},D=(n(46),{onIncrese:y,onDecrease:function(e){return{type:"BOOK_REMOVED_FROM_CART",payload:e}},onDelete:function(e){return{type:"ALL_BOOKS_REMOVED_FROM_CART",payload:e}}}),R=Object(i.b)((function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}}),D)((function(e){var t=e.items,n=e.total,a=e.onIncrese,o=e.onDecrease,c=e.onDelete;return r.a.createElement("div",{className:"shopping-cart-table"},r.a.createElement("h2",null,"Your Order"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Count"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,t.map((function(e,t){var n=e.id,i=e.title,l=e.count,u=e.total;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t+1),r.a.createElement("td",null,i),r.a.createElement("td",null,l),r.a.createElement("td",null,"$",u),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return c(n)},className:"btn btn-outline-danger btn-sm float-right"},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("button",{onClick:function(){return a(n)},className:"btn btn-outline-success btn-sm float-right"},r.a.createElement("i",{className:"fa fa-plus-circle"})),r.a.createElement("button",{onClick:function(){return o(n)},className:"btn btn-outline-warning btn-sm float-right"},r.a.createElement("i",{className:"fa fa-minus-circle"}))))})))),r.a.createElement("div",{className:"total"},"Total: $",n))})),F=function(){return r.a.createElement(R,null)},K=(n(47),function(){return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(s,{numItems:5,total:210}),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/BookStore/",component:w,exact:!0}),r.a.createElement(u.a,{path:"/BookStore/cart",component:F})))}),M=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(A,null):this.props.children}}]),t}(a.Component),x=function(){function e(){Object(m.a)(this,e),this.data=[{id:1,title:"Angels and Demons",author:"Dan Brown",price:14,coverImage:"https://english-films.com/uploads/posts/2018-03/1521037875_angels-and-demons-brown.jpg"},{id:2,title:"One Flew over the Cuckoo's Nest",author:"Ken Kesey",price:9,coverImage:"https://i.pinimg.com/736x/84/0a/78/840a78c0b462ce8c623ea45580b841f9--the-nest-book-design.jpg"},{id:3,title:"The Minds of Billy Milligan",author:"Daniel Keyes",price:11,coverImage:"https://kbimages1-a.akamaihd.net/1a949dd2-ca0a-4c98-b7d2-73bfc5ad72ef/1200/1200/False/the-minds-of-billy-milligan-2.jpg"},{id:4,title:"Eugene Onegin",author:"Alexander Pushkin",price:13,coverImage:"https://img.yakaboo.ua/media/catalog/product/i/m/img624_1.jpg"},{id:5,title:"The Alchemist",author:"Paulo Coelho",price:7,coverImage:"https://img.buzzfeed.com/buzzfeed-static/static/2015-09/4/12/enhanced/webdr14/original-8582-1441384161-3.jpg?crop=739:1109;0,12"},{id:6,title:"The War of the Worlds",author:"Herbert Wells",price:12,coverImage:"https://www.litres.ru/static/bookimages/44/43/84/44438402.bin.dir/44438402.cover.jpg"},{id:7,title:"The Great Gatsby",author:"Francis Scott Fitzgerald",price:14,coverImage:"https://i.pinimg.com/736x/51/ac/83/51ac83d6099359ca9066f154f031fc0c.jpg"}]}return Object(d.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise((function(t,n){setTimeout((function(){return t(e.data)}),900)}))}}]),e}(),L=n(30),H=function(e,t){if(void 0===e)return{books:[],loading:!0,error:null};switch(t.type){case"FETCH_BOOKS_REQUEST":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:t.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:t.payload};default:return e.bookList}},Q=n(14),U=function(e,t,n){return 0===t.count?[].concat(Object(Q.a)(e.slice(0,n)),Object(Q.a)(e.slice(n+1))):-1===n?[].concat(Object(Q.a)(e),[t]):[].concat(Object(Q.a)(e.slice(0,n)),[t],Object(Q.a)(e.slice(n+1)))},z=function(e,t,n){var a=e.bookList.books,r=e.shoppingCart,o=r.cartItems,c=r.orderTotal,i=r.itemsQuantity,l=a.find((function(e){return e.id===t})),u=o.findIndex((function(e){return e.id===t})),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.id,r=void 0===a?e.id:a,o=t.count,c=void 0===o?0:o,i=t.title,l=void 0===i?e.title:i,u=t.total,s=void 0===u?0:u;return{id:r,title:l,count:c+n,total:s+n*e.price}}(l,o[u],n);return{orderTotal:c+l.price*n,cartItems:U(o,s,u),itemsQuantity:i+1*n}},P=function(e,t){if(void 0===e)return{cartItems:[],orderTotal:0,itemsQuantity:0};switch(t.type){case"BOOK_ADDED_TO_CART":return z(e,t.payload,1);case"BOOK_REMOVED_FROM_CART":return z(e,t.payload,-1);case"ALL_BOOKS_REMOVED_FROM_CART":var n=e.shoppingCart.cartItems.find((function(e){return e.id===t.payload}));return z(e,t.payload,-n.count);default:return e.shoppingCart}},V=function(e,t){return{bookList:H(e,t),shoppingCart:P(e,t)}},$=Object(h.c)(V,Object(h.a)(L.a,(function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}}))),W=new x;c.a.render(r.a.createElement(i.a,{store:$},r.a.createElement(M,null,r.a.createElement(O,{value:W},r.a.createElement(l.a,null,r.a.createElement(K,null))))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.073b6b10.chunk.js.map