"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[454],{8454:function(e,n,s){s.r(n),s.d(n,{default:function(){return k}});s(2791);var t=s(8687),a=s(6916),c=s(6837),r=s(525),i=s(3329),l=(0,t.$j)(null,(function(e){return{clearItem:function(n){e((0,r.X_)(n))},addItem:function(n){e((0,r.jX)(n))},removeItem:function(n){e((0,r.cl)(n))}}}))((function(e){var n=e.cartItem,s=e.clearItem,t=e.addItem,a=e.removeItem,c=n.name,r=n.imageUrl,l=n.price,o=n.quantity;return(0,i.jsxs)("div",{className:"checkout-item",children:[(0,i.jsx)("div",{className:"image-container",children:(0,i.jsx)("img",{alt:"item",src:r})}),(0,i.jsx)("span",{className:"name",children:c}),(0,i.jsxs)("span",{className:"quantity",children:[(0,i.jsx)("div",{className:"arrow",onClick:function(){return a(n)},children:"\u276e"}),(0,i.jsx)("span",{className:"value",children:o}),(0,i.jsx)("div",{className:"arrow",onClick:function(){return t(n)},children:"\u276f"})]}),(0,i.jsxs)("span",{className:"price",children:[" $",l]}),(0,i.jsx)("div",{className:"remove-button",onClick:function(){return s(n)},children:"\u2715"})]})})),o=s(4165),d=s(5861),u=s(8210),m=s(1243),h=s(1830),p=s.n(h),j=s(8086),f=s.n(j)()(p()),x=function(e){var n=e.price,s=1e3*n,t=function(){var e=(0,d.Z)((0,o.Z)().mark((function e(n){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,m.Z)({url:"payment",method:"post",data:{amount:s,token:n}}).then((function(e){200===e.status&&f.fire({icon:"success",title:"Payment was succesful",confirmButtonText:"Cool"})})).catch((function(e){f.fire({icon:"error",title:"Invalid payment, please ensure you use the provided card details ",confirmButtonText:"Oh Okay"})}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,i.jsx)(u.Z,{label:"Pay Now",name:"Toyin Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is ".concat(n),amount:s,panelLabel:"Pay Now",token:t,stripeKey:"pk_test_51MkabaKMI64olOgIfSzkqlSbBnZmAUsX8JtH4RqFMUlFZOdnzCfDtISUGTbo85jaBwSLFtugBQj51j2fMUyJPOVS00HDBovth7"})},v=(0,a.zB)({CartItems:c.D1,total:c.ej}),k=(0,t.$j)(v)((function(e){var n=e.CartItems,s=e.total;return(0,i.jsxs)("div",{className:"checkout-page",children:[(0,i.jsxs)("div",{className:"checkout-header",children:[(0,i.jsx)("div",{className:"header-block",children:(0,i.jsx)("span",{children:"Product"})}),(0,i.jsx)("div",{className:"header-block",children:(0,i.jsx)("span",{children:"Description"})}),(0,i.jsx)("div",{className:"header-block",children:(0,i.jsx)("span",{children:"Quantity"})}),(0,i.jsx)("div",{className:"header-block",children:(0,i.jsx)("span",{children:"price"})}),(0,i.jsx)("div",{className:"header-block",children:(0,i.jsx)("span",{children:"Remove"})})]}),n.map((function(e){return(0,i.jsx)(l,{cartItem:e},e.id)})),(0,i.jsx)("div",{className:"total",children:(0,i.jsxs)("span",{children:["TOTAL: $",s]})}),(0,i.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",(0,i.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/32 - CVV:123"]}),(0,i.jsx)(x,{price:s})]})}))}}]);
//# sourceMappingURL=454.545ee190.chunk.js.map