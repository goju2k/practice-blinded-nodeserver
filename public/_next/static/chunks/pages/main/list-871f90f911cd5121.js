(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{3607:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main/list",function(){return e(1650)}])},6168:function(n,t,e){"use strict";e.d(t,{Z:function(){return c}});var i=e(5893),r=e(7294),o={itemSizing:"auto",direction:"column"};function c(n){var t=n.children,e=n.config,c={};Object.assign(c,o),Object.assign(c,e),console.log("thisConfig => ",c);var s={width:"100%"};return(0,i.jsx)("div",{style:{width:"100%"},children:r.Children.map(t,(function(n,t){return(0,i.jsx)("div",{style:s,children:n},t)}))})}},1650:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return p}});var i=e(4051),r=e.n(i),o=e(5893),c=e(6168);function s(n){n.children;var t=n.items,e=n.itemClick;console.log("[TopMenu] start");var i={display:"flex",justifyContent:"center",alignItems:"center",padding:"5px 20px",whiteSpace:"nowrap",width:"fit-content"},r=Object.assign({},i);return r.color="white",r.fontSize="15px",(0,o.jsx)("div",{style:{width:"100%",height:"50px",overflowX:"auto",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",fontSize:"12px",color:"gray",background:"black",fontWeight:"600"},children:t?t.map((function(n,c){return(0,o.jsx)("div",{style:n.focus?r:i,onClick:e.bind(null,n,t),children:n.name},n.id)})):(0,o.jsx)("div",{children:"loading..."})})}var a=e(9669),u=e.n(a),l=e(7294);function d(n,t,e,i,r,o,c){try{var s=n[o](c),a=s.value}catch(u){return void e(u)}s.done?t(a):Promise.resolve(a).then(i,r)}function f(n){return function(){var t=this,e=arguments;return new Promise((function(i,r){var o=n.apply(t,e);function c(n){d(o,i,r,c,s,"next",n)}function s(n){d(o,i,r,c,s,"throw",n)}c(void 0)}))}}function p(){console.log("[MainList] start");var n=(0,l.useState)(),t=n[0],e=n[1];(0,l.useEffect)(f(r().mark((function n(){var t;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/api/category/list");case 2:(t=n.sent.data)&&t.forEach((function(n){1==n.id?n.focus=!0:n.focus=!1})),e(t);case 5:case"end":return n.stop()}}),n)}))),[]);var i=(0,l.useState)(1),a=i[0],d=i[1],p=(0,l.useState)([]),h=p[0],v=p[1];(0,l.useEffect)(f(r().mark((function n(){var t;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/api/board/list",{params:{inqType:"1",id:a}});case 2:t=n.sent.data,v(t);case 4:case"end":return n.stop()}}),n)}))),[a]);return(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(s,{items:t,itemClick:function(n,t){var e;t.forEach((function(t){n.id!=t.id?t.focus=!1:(t.focus=!0,e=t.id)})),e>=0&&(console.log("target ID changed!!!"),v(null),d(e))}}),console.log("[render] boardList => ",h),h?h.map((function(n,t){return(0,o.jsx)("div",{style:{padding:"15px 10px"},children:n.title},n.cid)})):(0,o.jsx)("div",{style:{padding:"15px 10px"},children:"loading..."})]})}}},function(n){n.O(0,[669,774,888,179],(function(){return t=3607,n(n.s=t);var t}));var t=n.O();_N_E=t}]);