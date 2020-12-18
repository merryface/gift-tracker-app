(this["webpackJsonpgift-tracker-app"]=this["webpackJsonpgift-tracker-app"]||[]).push([[0],{36:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),c=n.n(a),d=n(12),s=n.n(d),r=(n(36),n(6)),u=n(7),l=n(9),o=n(8),h=n(3),b=n(2),j=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={name:i.props.name,editingName:!1,editingBudget:!1,budget:i.props.budget,id:i.props.id},i.handleName=i.handleName.bind(Object(b.a)(i)),i.handleBudget=i.handleBudget.bind(Object(b.a)(i)),i.handleEditingName=i.handleEditingName.bind(Object(b.a)(i)),i.handleEditingBudget=i.handleEditingBudget.bind(Object(b.a)(i)),i}return Object(u.a)(n,[{key:"handleName",value:function(e){this.setState({name:e.currentTarget.value})}},{key:"handleBudget",value:function(e){this.setState({budget:e.currentTarget.value})}},{key:"handleEditingName",value:function(){this.state.editingName&&this.props.editFriend({id:this.props.id,name:this.state.name,budget:this.state.budget}),this.setState({editingName:!this.state.editingName})}},{key:"handleEditingBudget",value:function(){this.state.editingBudget&&this.props.editFriend({id:this.props.id,name:this.state.name,budget:this.state.budget}),this.setState({editingBudget:!this.state.editingBudget})}},{key:"render",value:function(){var e=this.state.name;return Object(i.jsx)(i.Fragment,{children:this.state.editingName?Object(i.jsxs)("div",{className:"friendHolder",children:[Object(i.jsx)("input",{onChange:this.handleName,className:"card friendCard editing",placeholder:e}),Object(i.jsx)("button",{className:this.state.editingName?"button saveButtonTwo":"button editButtonTwo",id:"pencil",onClick:this.handleEditingName})]}):Object(i.jsxs)("div",{className:"friendHolder",children:[Object(i.jsx)("h2",{className:"card friendCard",children:e}),Object(i.jsx)("button",{className:"button editButtonTwo",id:"pencil",onClick:this.handleEditingName})]})})}}]),n}(a.Component),g=function(e){return{type:"ADD_GIFT",payload:{id:e.id,item_name:e.item_name,price:e.price,bought:e.bought,total:e.total,friend_id:e.friend_id}}},m=n(29),f=n.n(m).a.create({baseURL:"https://appy-wrapping.developme.space/api",headers:{Accept:"application/json",Authorization:""}}),p=function(){return function(e){f.get("friends/1/gifts").then((function(t){t.data.data.forEach((function(t){e(g({id:t.id,item_name:t.item_name,price:t.price,bought:t.bought,total:0,friend_id:1}))}))}))}},O=function(e){return function(t){f.delete("gifts/".concat(e)).then(t(function(e){return{type:"REMOVE_GIFT",payload:e}}(e)))}},x=function(e){var t=e.item_name,n=e.price,i=e.bought,a=e.id;return function(e){f.patch("gifts/".concat(a),{item_name:t,price:n,bought:i}).then((function(t){var n,i=t.data;e({type:"EDIT_GIFT",payload:{id:(n={item_name:i.item_name,price:i.price,bought:i.bought,id:i.id}).id,item_name:n.item_name,price:n.price,bought:n.bought}})}))}},v=function(e){var t=e.name,n=e.budget,i=e.id;return function(e){f.patch("friends/".concat(i),{name:t,budget:n}).then((function(t){var n,i=t.data;e({type:"EDIT_FRIEND",payload:{id:(n={name:i.name,budget:i.budget,id:i.id}).id,name:n.name,budget:n.budget}})}))}},N=Object(h.b)((function(e){return{id:e.friends[0].id,name:e.friends[0].name,budget:e.friends[0].budget}}),(function(e){return{editFriend:function(t){var n=t.id,i=t.name,a=t.budget;e(v({id:n,name:i,budget:a}))}}}))(j),_=function(e){var t=e.handleChange,n=e.value,a=e.type,c=e.bought,d=e.placeholder;return"text"===a?Object(i.jsx)("td",{className:"tableInputs",children:Object(i.jsx)("input",{className:"tableTextInput editing",type:"text",value:n,onChange:t,placeholder:d})}):"number"===a?Object(i.jsx)("td",{className:"tableInputs",children:Object(i.jsx)("input",{className:"tableTextInput editing",type:"number",value:n,onChange:t,placeholder:d})}):Object(i.jsx)("td",{className:"tableInputs",children:Object(i.jsx)("div",{className:"buttonCentre",children:Object(i.jsx)("button",{className:c?"button tickButton":"button crossButton",onClick:t,placeholder:d})})})},y=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={item_name:"",price:""},i.handleAdd=i.handleAdd.bind(Object(b.a)(i)),i.handleGiftName=i.handleGiftName.bind(Object(b.a)(i)),i.handlePrice=i.handlePrice.bind(Object(b.a)(i)),i}return Object(u.a)(n,[{key:"handleGiftName",value:function(e){this.setState({item_name:e.currentTarget.value})}},{key:"handlePrice",value:function(e){this.setState({price:e.currentTarget.value<0?0:e.currentTarget.value})}},{key:"handleAdd",value:function(){this.props.addGift({item_name:this.state.item_name,price:this.state.price}),this.setState({item_name:"",price:0})}},{key:"render",value:function(){var e=this.state,t=e.item_name,n=e.price;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("tr",{className:"tableRow",children:[Object(i.jsx)("td",{}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{onClick:this.handleAdd,class:"tableButton addButton",disabled:!t})}),Object(i.jsx)(_,{label:"Gift Name",value:t,placeholder:"Your gift here",checkbox:!1,handleChange:this.handleGiftName,type:"text"}),Object(i.jsx)(_,{label:"Price",value:n,placeholder:"\xa30.00",checkbox:!1,handleChange:this.handlePrice,type:"number"}),Object(i.jsx)(_,{handleChange:this.handlePrice})]})})}}]),n}(a.Component),B=Object(h.b)(null,(function(e){return{addGift:function(t){e(function(e){var t=e.item_name,n=e.price;return function(e){f.post("friends/1/gifts",{item_name:t,price:n}).then((function(t){var n=t.data;e(g({id:n.id,item_name:n.item_name,price:n.price,bought:!1,total:0,friend_id:n.friend_id}))}))}}(t))}}}))(y),k=function(e){var t=e.priceSum,n=e.budget;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("h2",{className:"footer",style:t>n?{color:"#CC5B3D"}:{},children:["Total: \xa3",t.toFixed(2)]})})},C=Object(h.b)((function(e){return{priceSum:e.gifts.map((function(e){return e.price})).reduce((function(e,t){return+e+ +t}),0),budget:e.friends[0].budget}}))(k),T=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={item_name:i.props.gift.item_name,price:i.props.gift.price,bought:i.props.gift.bought,editing:!1},i.handleGiftName=i.handleGiftName.bind(Object(b.a)(i)),i.handlePrice=i.handlePrice.bind(Object(b.a)(i)),i.handleBought=i.handleBought.bind(Object(b.a)(i)),i.handleEditing=i.handleEditing.bind(Object(b.a)(i)),i.handleDelete=i.handleDelete.bind(Object(b.a)(i)),i}return Object(u.a)(n,[{key:"handleGiftName",value:function(e){this.setState({item_name:e.currentTarget.value})}},{key:"handlePrice",value:function(e){this.setState({price:e.currentTarget.value})}},{key:"handleBought",value:function(){this.setState({bought:!this.state.bought})}},{key:"handleEditing",value:function(){this.state.editing&&this.props.editGift({id:this.props.gift.id,item_name:this.state.item_name,price:this.state.price,bought:this.state.bought}),this.setState({editing:!this.state.editing})}},{key:"handleDelete",value:function(){this.props.deleteGift(this.props.gift.id)}},{key:"render",value:function(){var e=this.state,t=e.item_name,n=e.price,a=e.bought;return Object(i.jsxs)("article",{className:"giftcard",children:[Object(i.jsxs)("header",{className:"giftcardHeader",children:[Object(i.jsx)("h2",{children:"Bought?"}),Object(i.jsx)("button",{className:a?"button tickButton":"button crossButton"})]}),Object(i.jsx)("h2",{className:"giftcard",children:"Description"}),this.state.editing?Object(i.jsx)("input",{onChange:this.handleGiftName,value:t,className:"giftcardText editing"}):Object(i.jsx)("p",{className:"giftcardText",children:t}),Object(i.jsx)("h2",{className:"giftcard",children:"Price"}),this.state.editing?Object(i.jsx)("input",{onChange:this.handlePrice,value:n,className:"giftcardText editing"}):Object(i.jsx)("p",{className:"giftcardText",children:"\xa3".concat(n)}),Object(i.jsxs)("footer",{className:"giftcardFooter",children:[Object(i.jsx)("button",{className:"button deleteButton",onClick:this.handleDelete}),Object(i.jsx)("button",{onClick:this.handleEditing,className:this.state.editing?"button saveButton":"button editButton"})]})]})}}]),n}(a.Component),G=Object(h.b)(null,(function(e){return{deleteGift:function(t){e(O(t))},editGift:function(t){e(x(t))},getGifts:function(){e(p())}}}))(T),E=function(e){var t=e.item_name,n=e.price,a=e.bought,c=(e.editing,e.handleClick);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("td",{className:"tableInputs",children:t}),Object(i.jsx)("td",{className:"tableInputs",children:"\xa3".concat(n)}),Object(i.jsx)("td",{className:"tableInputs",children:Object(i.jsx)("div",{className:"buttonCentre",children:Object(i.jsx)("button",{onClick:c,className:a?"button tickButton":"button crossButton"})})})]})},D=function(e){var t=e.item_name,n=e.price,a=e.bought,c=e.handleGiftName,d=e.handlePrice,s=e.handleBought;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(_,{label:"Gift Name",value:t,type:"text",handleChange:c}),Object(i.jsx)(_,{label:"Price",value:n,type:"number",handleChange:d}),Object(i.jsx)(_,{label:"Bought",type:"checkbox",checkbox:!0,handleChange:s,bought:a})]})},F=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={item_name:i.props.gift.item_name,price:i.props.gift.price,bought:i.props.gift.bought,editing:!1},i.handleGiftName=i.handleGiftName.bind(Object(b.a)(i)),i.handlePrice=i.handlePrice.bind(Object(b.a)(i)),i.handleBought=i.handleBought.bind(Object(b.a)(i)),i.handleEditing=i.handleEditing.bind(Object(b.a)(i)),i.handleDelete=i.handleDelete.bind(Object(b.a)(i)),i}return Object(u.a)(n,[{key:"handleGiftName",value:function(e){this.setState({item_name:e.currentTarget.value})}},{key:"handlePrice",value:function(e){this.setState({price:e.currentTarget.value<0||""===e.currentTarget.value?0:e.currentTarget.value})}},{key:"handleBought",value:function(){this.setState({bought:!this.state.bought}),this.props.editGift({id:this.props.gift.id,item_name:this.state.item_name,price:this.state.price,bought:!this.state.bought})}},{key:"handleEditing",value:function(){this.state.editing&&this.props.editGift({id:this.props.gift.id,item_name:this.state.item_name,price:this.state.price,bought:this.state.bought}),this.setState({editing:!this.state.editing})}},{key:"handleDelete",value:function(){this.props.deleteGift(this.props.gift.id)}},{key:"render",value:function(){var e=this.state,t=e.item_name,n=e.price,a=e.bought;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("tr",{className:"tableRow",children:[" ",Object(i.jsx)("td",{className:"tdNarrow",children:Object(i.jsx)("button",{className:"tableButtons deleteButton",onClick:this.handleDelete})}),Object(i.jsx)("td",{className:"tdNarrow",children:Object(i.jsx)("button",{onClick:this.handleEditing,className:this.state.editing?"button tableButtons saveButton":"tableButtons editButton"})}),this.state.editing?Object(i.jsx)(D,{item_name:t,price:n,bought:a,handleGiftName:this.handleGiftName,handlePrice:this.handlePrice,handleBought:this.handleBought}):Object(i.jsx)(E,{item_name:t,price:n,bought:a,handleClick:this.handleBought})]})})}}]),n}(a.Component),w=Object(h.b)(null,(function(e){return{deleteGift:function(t){e(O(t))},editGift:function(t){e(x(t))},getGifts:function(){e(p())}}}))(F),S=n(19),I=function(e){var t=e.id,n=e.name,c=e.propBudget,d=e.editFriend,s=Object(a.useState)(!1),r=Object(S.a)(s,2),u=r[0],l=r[1],o=Object(a.useState)(c),h=Object(S.a)(o,2),b=h[0],j=h[1],g=function(){u&&d({id:t,name:n,budget:b}),l(!u)};return Object(i.jsx)(i.Fragment,{children:u?Object(i.jsxs)("div",{className:"budgetHolder",children:[Object(i.jsx)("input",{type:"number",onChange:function(e){j(e.currentTarget.value)},className:"card budgetCard editing",value:"".concat(b)}),Object(i.jsx)("button",{className:u?"button saveButtonTwo":"button editButtonTwo",id:"pencil",onClick:g})]}):Object(i.jsxs)("div",{className:"budgetHolder",children:[Object(i.jsxs)("h2",{className:"card budgetCard",children:["Budget: \xa3",b]}),Object(i.jsx)("button",{className:"button editButtonTwo",id:"pencil",onClick:g})]})})},P=Object(h.b)((function(e){var t,n,i;return{id:null===(t=e.friends[0])||void 0===t?void 0:t.id,name:null===(n=e.friends[0])||void 0===n?void 0:n.name,propBudget:null===(i=e.friends[0])||void 0===i?void 0:i.budget}}),(function(e){return{editFriend:function(t){var n=t.id,i=t.name,a=t.budget;e(v({id:n,name:i,budget:a}))}}}))(I),L=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={mobileView:window.innerWidth<768},i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.getGifts(),window.addEventListener("resize",(function(){e.setState({mobileView:window.innerWidth<768})})),this.props.getFriends()}},{key:"render",value:function(){return Object(i.jsxs)("section",{children:[Object(i.jsx)("nav",{children:Object(i.jsx)("h1",{className:"header",children:"Gift Tracker"})}),Object(i.jsxs)("div",{className:"introText",children:[Object(i.jsx)("p",{children:"Add a friend"}),Object(i.jsx)("div",{class:"arrow"}),Object(i.jsx)("p",{children:"Set your budget"}),Object(i.jsx)("div",{class:"arrow"}),Object(i.jsx)("p",{children:"Track your gift spending"})]}),Object(i.jsx)("div",{className:"cardHolder",children:this.props.friendsLoaded?Object(i.jsx)(N,{}):Object(i.jsx)("p",{children:"Loading..."})}),Object(i.jsxs)("div",{className:"stickyHeader",children:[this.props.friendsLoaded?Object(i.jsx)(P,{}):null,this.props.friendsLoaded?Object(i.jsx)(C,{}):null]}),Object(i.jsx)("main",{className:"main",children:this.state.mobileView?Object(i.jsxs)("div",{children:[this.props.gifts.map((function(e){return Object(i.jsx)(G,{gift:e},e.id)})),Object(i.jsx)(B,{})]}):Object(i.jsx)("article",{className:"table",children:Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"tdNarrow"}),Object(i.jsx)("th",{className:"tdNarrow"}),Object(i.jsx)("th",{children:Object(i.jsx)("h3",{children:"Description"})}),Object(i.jsx)("th",{children:Object(i.jsx)("h3",{children:"Price"})}),Object(i.jsx)("th",{children:Object(i.jsx)("h3",{children:"Bought?"})})]})}),Object(i.jsxs)("tbody",{children:[this.props.gifts.map((function(e){return Object(i.jsx)(w,{gift:e},e.id)})),Object(i.jsx)(B,{})]})]})})})]})}}]),n}(a.Component),A=Object(h.b)((function(e){var t,n,i;return{gifts:e.gifts,friendsLoaded:e.friendsLoaded,budget:null===(t=e.friends[0])||void 0===t?void 0:t.budget,id:null===(n=e.friends[0])||void 0===n?void 0:n.id,name:null===(i=e.friends[0])||void 0===i?void 0:i.name}}),(function(e){return{getGifts:function(){e(p())},getFriends:function(){e((function(e){f.get("friends").then((function(t){t.data.data.forEach((function(t){var n;e({type:"ADD_FRIEND",payload:{id:(n={id:t.id,name:t.name,budget:t.budget}).id,name:n.name,budget:n.budget}})}))}))}))},editFriend:function(t){var n=t.id,i=t.name,a=t.budget;e(v({id:n,name:i,budget:a}))}}}))(L),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,d=t.getTTFB;n(e),i(e),a(e),c(e),d(e)}))},H={gifts:[],friends:[],friendsLoaded:!1},V=n(18),M=n(4),z=function(e,t){switch(t.type){case"ADD_GIFT":return Object(M.a)(Object(M.a)({},e),{},{gifts:[].concat(Object(V.a)(e.gifts),[t.payload])});case"ADD_FRIEND":return Object(M.a)(Object(M.a)({},e),{},{friends:[].concat(Object(V.a)(e.friends),[t.payload]),friendsLoaded:!0});case"REMOVE_GIFT":return Object(M.a)(Object(M.a)({},e),{},{gifts:e.gifts.filter((function(e){return e.id!==t.payload}))});case"EDIT_GIFT":return Object(M.a)(Object(M.a)({},e),{},{gifts:e.gifts.map((function(e){return e.id!==t.payload.id?e:Object(M.a)(Object(M.a)({},e),t.payload)}))});case"EDIT_FRIEND":return Object(M.a)(Object(M.a)({},e),{},{friends:e.friends.map((function(e){return e.id!==t.payload.id?e:Object(M.a)(Object(M.a)({},e),t.payload)}))});default:return e}},J=n(10),U=n(30),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.c,X=Object(J.d)(z,H,W(Object(J.a)(U.a)));s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(h.a,{store:X,children:Object(i.jsx)(A,{})})}),document.getElementById("root")),R()}},[[60,1,2]]]);
//# sourceMappingURL=main.b9d802f3.chunk.js.map