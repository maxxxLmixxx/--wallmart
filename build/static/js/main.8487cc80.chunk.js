(this["webpackJsonpsteam-site"]=this["webpackJsonpsteam-site"]||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/round.85a7cb3e.svg"},30:function(e,t,n){e.exports=n.p+"static/media/sort_az.2efedbd6.svg"},31:function(e,t,n){e.exports=n.p+"static/media/alien.28d5e73c.svg"},38:function(e,t,n){e.exports=n(63)},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(15),c=n.n(r),s=(n(43),n(27)),l=n(32),u=n(65),o=n(36);n(44),n(45);function m(){return i.a.createElement("header",null)}n(46);var d=n(3),v=function(e){return{type:"SET_USER_ACTIVE",payload:{userId:e}}},f=function(e){return{type:"SET_USER_INACTIVE",payload:{userId:e}}},E=n(7);function U(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"keypress",i=Object(a.useRef)(t);Object(a.useEffect)((function(){i.current=t})),Object(a.useEffect)((function(){function t(t){t.code===e&&i.current(t)}return document.addEventListener(n,t),function(){return document.removeEventListener(n,t)}}),[e,n])}var p=n(67),I="user",b=(n(52),n(6));n(53);function O(e){var t=e.placeholder,n=e.filterValue,a=e.setFilterValue;return i.a.createElement(i.a.Fragment,null,i.a.createElement("label",null,i.a.createElement("input",{type:"search",className:"search-users-input",onChange:function(e){var t=e.target.value;return a(t)},value:n,placeholder:t})))}var k={setFilterValue:function(e){return{type:"SET_FILTER_VALUE",payload:{value:e}}}},j=Object(d.b)((function(e){return{filterValue:e.filterValue}}),k)((function(e){var t=e.filterValue,n=e.setFilterValue,a=Object(b.a)(e,["filterValue","setFilterValue"]);return i.a.createElement(O,Object.assign({filterValue:t,setFilterValue:n},a))}));n(54);function A(){return i.a.createElement("div",{className:"room-switches-container"},i.a.createElement("div",{className:"room-switch"}),i.a.createElement("div",{className:"room-switch"}),i.a.createElement("div",{className:"room-switch"}),i.a.createElement("div",{className:"room-switch"}),i.a.createElement("div",{className:"room-switch"}),i.a.createElement("div",{className:"room-switch"}))}var g=n(66),h=(n(55),i.a.memo((function(e){e.icon;var t=e.name,n=e.id,a=e.description,r=void 0===a?"...":a,c=e.isShift,s=e.setUserActive,l=e.setUserInactive,u=e.isActive,o=Object(g.a)({item:{type:I,id:n},collect:function(e){return{isDragging:e.isDragging()}}}),m=Object(E.a)(o,2),d=m[0].isDragging,v=m[1];return i.a.createElement("div",{className:c?"user active-user":"user",ref:v,style:{opacity:d?.55:1},onClick:function(e){e.shiftKey&&(u?l(n):s(n))}},i.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR4xDiny0ZGQDUH9TcdMT_TAbvgiBePIa59w&usqp=CAU",alt:"user-icon",className:"user-icon"}),i.a.createElement("div",{className:"user-description"},i.a.createElement("span",null,t),i.a.createElement("span",null,n),i.a.createElement("span",null,r)))})));var M={setUserActive:v,setUserInactive:f},y=Object(d.b)((function(e){return{}}),M)((function(e){var t=e.setUserActive,n=e.setUserInactive,a=Object(b.a)(e,["setUserActive","setUserInactive"]);return i.a.createElement(h,Object.assign({setUserActive:t,setUserInactive:n},a))}));function S(e){var t=e.users,n=e.activeUsersIds,r=e.filterValue,c=e.setUserInactive,s=Object(p.a)({accept:I,drop:function(e,t){return c(e.id)},collect:function(e){return{isOver:e.isOver(),item:e.getItem()}}}),l=Object(E.a)(s,2),u=l[0],o=u.isOver,m=u.item,d=l[1],v=Object(a.useState)(!1),f=Object(E.a)(v,2),b=f[0],O=f[1];return U("ShiftLeft",(function(){return O(!0)}),"keydown"),U("ShiftLeft",(function(){return O(!1)}),"keyup"),i.a.createElement("div",{className:"users-container ".concat(o&&n.includes(null===m||void 0===m?void 0:m.id)?"droppable--inactive":""),ref:d},i.a.createElement("div",{className:"users--header"},i.a.createElement(j,{placeholder:"Find user..."}),i.a.createElement(A,null)),i.a.createElement("div",{className:"users--main"},Object.values(t).filter((function(e){return e.name.startsWith(r)})).map((function(e){var t=e.name,n=e.id,a=e.icon;return i.a.createElement(y,{name:t,key:n,id:n,icon:a,isShift:b,isActive:!1})}))))}var V={setUserInactive:f},N=Object(d.b)((function(e){var t=e.users,n=t.allUsers,a=t.activeUsersIds,i=t.inactiveUsersIds,r=t.filterValue;return{users:i.map((function(e){return n[e]})),activeUsersIds:a,filterValue:r}}),V)((function(e){var t=e.users,n=e.activeUsersIds,a=e.filterValue,r=e.setUserInactive;return i.a.createElement(S,{users:t,activeUsersIds:n,filterValue:a,setUserInactive:r})}));n(56);function _(e){var t=e.users,n=e.inactiveUsersIds,r=e.setUserActive,c=Object(p.a)({accept:I,drop:function(e,t){return r(e.id)},collect:function(e){return{isOver:e.isOver(),item:e.getItem()}}}),s=Object(E.a)(c,2),l=s[0],u=l.isOver,o=l.item,m=s[1],d=Object(a.useState)(!1),v=Object(E.a)(d,2),f=v[0],b=v[1];return U("ShiftLeft",(function(){return b(!0)}),"keydown"),U("ShiftLeft",(function(){return b(!1)}),"keyup"),i.a.createElement("div",{className:"activeUsers-container  ".concat(u&&n.includes(null===o||void 0===o?void 0:o.id)?"droppable--active":""),ref:m},Object.values(t).map((function(e){var t=e.name,n=e.id,a=e.icon;return i.a.createElement(y,{name:t,key:n,id:n,icon:a,isShift:f,isActive:!0})})))}var T={setUserActive:v},C=Object(d.b)((function(e){var t=e.users,n=t.allUsers,a=t.inactiveUsersIds;return{users:t.activeUsersIds.map((function(e){return n[e]})),inactiveUsersIds:a}}),T)((function(e){var t=e.users,n=e.inactiveUsersIds,a=e.setUserActive,r=Object(b.a)(e,["users","inactiveUsersIds","setUserActive"]);return i.a.createElement(_,Object.assign({users:t,inactiveUsersIds:n,setUserActive:a},r))}));n(57),n(58);function R(){return i.a.createElement("div",{className:"server-actions-container"})}n(59),n(60);function w(e){var t=e.image,n=e.text,a=e.animationClass,r=e.onClick;return i.a.createElement("div",{className:"action"},t?i.a.createElement("img",{draggable:"false",src:t,alt:n||"some-action",className:a,onClick:r}):i.a.createElement("span",null,n))}var L=n(29),x=n.n(L),F=n(30),z=n.n(F),D=n(31),Z=n.n(D);function q(e){var t=e.clearActiveUsers,n=e.sortInactiveUsersAz;return i.a.createElement("div",{className:"page-actions-container"},i.a.createElement(w,{image:x.a,animationClass:"page-action--rotate",clearActiveUsers:t,onClick:t}),i.a.createElement(w,{image:Z.a}),i.a.createElement(w,null),i.a.createElement(w,{image:z.a,onClick:n,animationClass:"page-action--shaking"}))}var B={clearActiveUsers:function(){return{type:"CLEAR_ACTIVE_USERS"}},sortInactiveUsersAz:function(){return{type:"SORT_INACTIVE_USERS_AZ"}}},G=Object(d.b)((function(e){return{}}),B)((function(e){var t=e.clearActiveUsers,n=e.sortInactiveUsersAz,a=Object(b.a)(e,["clearActiveUsers","sortInactiveUsersAz"]);return i.a.createElement(q,Object.assign({clearActiveUsers:t,sortInactiveUsersAz:n},a))}));function J(){return i.a.createElement("div",{className:"actions-container"},i.a.createElement(R,null),i.a.createElement(G,null))}function H(){return i.a.createElement("main",{className:"main-container"},i.a.createElement(N,null),i.a.createElement(C,null),i.a.createElement(J,null))}n(61);function K(){return i.a.createElement("footer",null)}var P=n(5),Q=n(20),W=n(4),X={allUsers:{11:{name:"Mike1",id:"11",icon:""},12:{name:"Mike2",id:"12",icon:""},13:{name:"Mike3",id:"13",icon:""},14:{name:"Mike4",id:"14",icon:""},15:{name:"Mike5",id:"15",icon:""},16:{name:"Mike6",id:"16",icon:""},17:{name:"Mike7",id:"17",icon:""},18:{name:"Mike8",id:"18",icon:""},19:{name:"Mike9",id:"19",icon:""},20:{name:"Mike10",id:"20",icon:""},21:{name:"Mike11",id:"21",icon:""},22:{name:"Mike12",id:"22",icon:""},23:{name:"Mike13",id:"23",icon:""},24:{name:"Mike14",id:"24",icon:""},25:{name:"Mike15",id:"25",icon:""},26:{name:"Mike16",id:"26",icon:""},27:{name:"Mike17",id:"27",icon:""},28:{name:"Mike18",id:"28",icon:""},29:{name:"Mike19",id:"29",icon:""},30:{name:"Mike20",id:"30",icon:""},31:{name:"Mike21",id:"31",icon:""},32:{name:"Mike22",id:"32",icon:""},33:{name:"Mike23",id:"33",icon:""},34:{name:"Mike24",id:"34",icon:""},35:{name:"Mike25",id:"35",icon:""},36:{name:"Mike26",id:"36",icon:""},37:{name:"Mike27",id:"37",icon:""},38:{name:"Mike28",id:"38",icon:""},39:{name:"Mike29",id:"39",icon:""},40:{name:"Mike30",id:"40",icon:""},41:{name:"Mike31",id:"41",icon:""},42:{name:"Mike32",id:"42",icon:""},43:{name:"Mike33",id:"43",icon:""}},filterValue:"",activeUsersIds:[],inactiveUsersIds:["11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43"]},Y=Object(P.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_ACTIVE":var n=e.inactiveUsersIds,a=e.activeUsersIds,i=t.payload.userId;if(a.includes(i))return Object(W.a)({},e);var r=n.indexOf(i),c=n.splice(r,1);return a.push.apply(a,Object(Q.a)(c)),Object(W.a)({},e,{inactiveUsersIds:n,activeUsersIds:a});case"SET_USER_INACTIVE":var s=e.inactiveUsersIds,l=e.activeUsersIds,u=t.payload.userId;if(s.includes(u))return Object(W.a)({},e);var o=l.indexOf(u),m=l.splice(o,1);return s.push.apply(s,Object(Q.a)(m)),Object(W.a)({},e,{inactiveUsersIds:s,activeUsersIds:l});case"SET_FILTER_VALUE":var d=t.payload.value;return Object(W.a)({},e,{filterValue:d});case"CLEAR_ACTIVE_USERS":var v=e.inactiveUsersIds,f=e.activeUsersIds;return v.push.apply(v,Object(Q.a)(f)),Object(W.a)({},e,{inactiveUsersIds:v,activeUsersIds:[]});case"SORT_INACTIVE_USERS_AZ":var E=e.allUsers,U=e.inactiveUsersIds,p=U.map((function(e){return{id:e,name:E[e].name}}));return p.sort((function(e,t){return e.name.localeCompare(t.name)})),Object(W.a)({},e,{inactiveUsersIds:p.map((function(e){return e.id}))});default:return Object(W.a)({},e)}}});function $(){var e=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    min-height: 100vh;\n  "]);return $=function(){return e},e}var ee=Object(P.c)(Y),te=function(e){var t=e.children,n=l.a.div($());return i.a.createElement(n,null,t)},ne=function(){return i.a.createElement(d.a,{store:ee},i.a.createElement(u.a,{backend:o.a},i.a.createElement(te,null,i.a.createElement(m,null),i.a.createElement(H,null),i.a.createElement(K,null))))};c.a.render(i.a.createElement(ne,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.8487cc80.chunk.js.map