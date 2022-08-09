(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),a=n(21),i=n.n(a),o=(n(29),n(9)),j=n(2),l=(n(30),function(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("h1",{children:"Wellsbury Hotel & Restaurant"}),Object(c.jsxs)("nav",{children:[Object(c.jsx)(o.b,{to:"/",className:"NavLink",children:"Home"}),Object(c.jsx)(o.b,{to:"/hotel",className:"NavLink",children:"Hotel"}),Object(c.jsx)(o.b,{to:"/restaurant",className:"NavLink",children:"Restaurant"})]})]})}),b=(n(31),function(){return Object(c.jsxs)("div",{className:"home",children:[Object(c.jsxs)("div",{className:"welcome",children:[Object(c.jsx)("h2",{children:"Welcome..."}),Object(c.jsxs)("div",{className:"text-and-image",children:[Object(c.jsx)("p",{children:"Welcome to Wellsbury Hotel & Restaurant, with over 300 rooms furnished to designer standards, a restaurant offering a choice of exquisite dishes from around the world and a range of other facilities, we have everything needed to make the most of your stay in Wellsbury."}),Object(c.jsx)("img",{alt:"hand opening hotel room door",src:"https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330850__480.jpg"})]})]}),Object(c.jsxs)("div",{className:"facilities",children:[Object(c.jsx)("h2",{children:"Our Facilities:"}),Object(c.jsxs)("div",{className:"text-and-image",children:[Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Gym"}),Object(c.jsx)("li",{children:"Indoor swimming pool and jacuzzi"}),Object(c.jsx)("li",{children:"Outdoor tennis court"}),Object(c.jsx)("li",{children:"Function rooms for business and social events"})]}),Object(c.jsx)("img",{alt:"function room",src:"https://cdn.pixabay.com/photo/2016/07/05/19/59/christening-1499314__480.jpg"})]})]})]})}),u=n(3),h=n(6),d=n.n(h),O=n(8),m=n(7),x=n.n(m);x.a.defaults.headers.common={"Content-Type":"application/json"};var p=function(){var e=Object(O.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x.a.get("rooms?type=".concat(t)),e.abrupt("return",n.then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=(n(49),function(e){var t=function(t){e.setType(t.target.value)};return Object(s.useEffect)((function(){e.type&&p(e.type).then((function(t){return e.setRoom(t)}))})),Object(c.jsx)("div",{className:"roomradios",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"radio",id:"single-room",name:"room",value:"single-room",onChange:t}),Object(c.jsx)("label",{htmlFor:"single-room",children:" Single Room"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"radio",id:"double-room",name:"room",value:"double-room",onChange:t}),Object(c.jsx)("label",{htmlFor:"double-room",children:" Double Room"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"radio",id:"royal-suite",name:"room",value:"royal-suite",onChange:t}),Object(c.jsx)("label",{htmlFor:"royal-suite",children:" Royal Suite"})]})})}),v=(n(50),function(e){return Object(c.jsx)("div",{children:e.room&&Object(c.jsxs)("div",{className:"roomresult",children:[Object(c.jsx)("img",{src:e.room[0].image,alt:e.room[0].type}),Object(c.jsxs)("h4",{children:["Cost: \xa3",e.room[0].cost," p/n"]}),Object(c.jsxs)("p",{children:["Amenities: ",e.room[0].amenities]})]})})}),g=(n(51),function(e){var t=Object(s.useState)(""),n=Object(u.a)(t,2),r=n[0],a=n[1];return Object(c.jsxs)("div",{className:"rooms",children:[Object(c.jsx)("h3",{children:"Please select a room to book:"}),Object(c.jsx)(f,{type:e.type,setType:e.setType,setRoom:a}),Object(c.jsx)(v,{room:r})]})});x.a.defaults.headers.common={"Content-Type":"application/json"};var y=function(){var e=Object(O.a)(d.a.mark((function e(t,n,c,s,r){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=x.a.post("bookings",{firstName:t,surname:n,roomType:c,dateFrom:s,nights:r}),e.abrupt("return",a.then((function(e){return console.log("this got sent back from the backend",e),e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,c,s,r){return e.apply(this,arguments)}}(),N=(n(52),function(e){var t=Object(s.useState)(""),n=Object(u.a)(t,2),r=n[0],a=n[1],i=Object(s.useState)(""),o=Object(u.a)(i,2),l=o[0],b=o[1],h=Object(s.useState)(""),d=Object(u.a)(h,2),O=d[0],m=d[1],x=Object(s.useState)(""),p=Object(u.a)(x,2),f=p[0],v=p[1],g=Object(s.useState)(null),N=Object(u.a)(g,2),k=N[0],S=N[1],C=Object(j.f)();Object(s.useEffect)((function(){k&&C(k)}));var F=new Date,w=F.getDate(),D=F.getMonth()+1,R=F.getFullYear();w<10&&(w="0"+w),D<10&&(D="0"+D),F=R+"-"+D+"-"+w;var T=Number(R)+1+"-"+D+"-"+w;return Object(c.jsx)("div",{className:"bookingsdiv",children:e.type&&Object(c.jsxs)("form",{className:"bookings",onSubmit:function(t){t.preventDefault(),y(r,l,e.type,O,f),S("/booked")},children:[Object(c.jsx)("h3",{children:"Book:"}),Object(c.jsx)("label",{htmlFor:"firstname",children:"First Name:"}),Object(c.jsx)("input",{type:"text",id:"firstname",name:"firstname",required:!0,onChange:function(e){a(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:"surname",children:"Surname:"}),Object(c.jsx)("input",{type:"text",id:"surname",name:"surname",required:!0,onChange:function(e){b(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("h4",{children:"Dates:"}),Object(c.jsx)("label",{htmlFor:"from",children:"From:"}),Object(c.jsx)("input",{type:"date",id:"from",name:"from",min:F,max:T,required:!0,onChange:function(e){m(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:"nights",children:"Number of Nights:"}),Object(c.jsx)("input",{type:"number",id:"nights",name:"nights",min:"1",max:"30",required:!0,onChange:function(e){v(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"submit",value:"Book"})]})})}),k=(n(53),function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{className:"hotel",children:[Object(c.jsx)("h2",{children:"Hotel"}),Object(c.jsx)(g,{type:n,setType:r}),Object(c.jsx)(N,{type:n})]})});x.a.defaults.headers.common={"Content-Type":"application/json"};var S=function(){var e=Object(O.a)(d.a.mark((function e(t,n,c,s){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=x.a.get("menu?type=".concat(t,"&region=").concat(n,"&vegetarian=").concat(c,"&vegan=").concat(s)),e.abrupt("return",r.then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,c,s){return e.apply(this,arguments)}}(),C=(n(54),function(){var e=Object(s.useState)("all"),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)("all"),i=Object(u.a)(a,2),o=i[0],j=i[1],l=Object(s.useState)(!1),b=Object(u.a)(l,2),h=b[0],m=b[1],x=Object(s.useState)(!1),p=Object(u.a)(x,2),f=p[0],v=p[1],g=Object(s.useState)(""),y=Object(u.a)(g,2),N=y[0],k=y[1],C=Object(s.useState)(""),F=Object(u.a)(C,2),w=F[0],D=F[1],R=Object(s.useState)(""),T=Object(u.a)(R,2),B=T[0],I=T[1],W=function(){var e=Object(O.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),k(""),D(""),I(""),"starter"===n&&S("starter",o,h,f).then((function(e){k(e)})),"main"===n&&S("main",o,h,f).then((function(e){D(e)})),"dessert"===n&&S("dessert",o,h,f).then((function(e){I(e)})),"all"===n&&(S("starter",o,h,f).then((function(e){k(e)})),S("main",o,h,f).then((function(e){D(e)})),S("dessert",o,h,f).then((function(e){I(e)})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"restaurant",children:[Object(c.jsxs)("div",{className:"restaurantSearchBar",children:[Object(c.jsx)("h2",{children:"Restaurant"}),Object(c.jsxs)("form",{onSubmit:W,children:[Object(c.jsx)("label",{htmlFor:"type",children:"Type:"}),Object(c.jsxs)("select",{id:"type",name:"type",onChange:function(e){r(e.target.value)},children:[Object(c.jsx)("option",{value:"all",children:"All"}),Object(c.jsx)("option",{value:"starter",children:"Starter"}),Object(c.jsx)("option",{value:"main",children:"Main"}),Object(c.jsx)("option",{value:"dessert",children:"Dessert"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:"region",children:"Region:"}),Object(c.jsxs)("select",{id:"region",name:"region",onChange:function(e){j(e.target.value)},children:[Object(c.jsx)("option",{value:"all",children:"All"}),Object(c.jsx)("option",{value:"chinese",children:"Chinese"}),Object(c.jsx)("option",{value:"french",children:"French"}),Object(c.jsx)("option",{value:"indian",children:"Indian"}),Object(c.jsx)("option",{value:"italian",children:"Italian"}),Object(c.jsx)("option",{value:"japanese",children:"Japanese"}),Object(c.jsx)("option",{value:"mexican",children:"Mexican"}),Object(c.jsx)("option",{value:"spanish",children:"Spanish"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:"vegetarian",children:"Vegetarian"}),Object(c.jsx)("input",{type:"checkbox",id:"vegetarian",name:"vegetarian",onChange:function(){m(document.getElementById("vegetarian").checked)}}),Object(c.jsx)("label",{htmlFor:"vegan",children:"Vegan"}),Object(c.jsx)("input",{type:"checkbox",id:"vegan",name:"vegan",onChange:function(){v(document.getElementById("vegan").checked)}}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"submit",value:"Search"})]})]}),Object(c.jsxs)("div",{className:"meals",children:[Object(c.jsx)("h3",{children:"Starters"}),""===N?Object(c.jsx)("p",{children:"Please search our choice of starters."}):Object(c.jsx)("p",{}),N&&0===N.length?Object(c.jsx)("p",{children:"No starters found."}):Object(c.jsx)("p",{}),N&&N.map((function(e,t){return Object(c.jsxs)("div",{className:"meal",children:[Object(c.jsx)("img",{src:e.image}),Object(c.jsx)("h4",{children:e.name}),Object(c.jsx)("p",{children:e.description}),Object(c.jsxs)("p",{children:["Cost: \xa3",e.cost]})]},t)}))]}),Object(c.jsxs)("div",{className:"meals",children:[Object(c.jsx)("h3",{children:"Mains"}),""===w?Object(c.jsx)("p",{children:"Please search our choice of mains."}):Object(c.jsx)("p",{}),w&&0===w.length?Object(c.jsx)("p",{children:"No mains found."}):Object(c.jsx)("p",{}),w&&w.map((function(e,t){return Object(c.jsxs)("div",{className:"meal",children:[Object(c.jsx)("img",{src:e.image}),Object(c.jsx)("h4",{children:e.name}),Object(c.jsx)("p",{children:e.description}),Object(c.jsxs)("p",{children:["Cost: \xa3",e.cost]})]},t)}))]}),Object(c.jsxs)("div",{className:"meals",children:[Object(c.jsx)("h3",{children:"Desserts"}),""===B?Object(c.jsx)("p",{children:"Please search our choice of desserts."}):Object(c.jsx)("p",{}),B&&0===B.length?Object(c.jsx)("p",{children:"No desserts found."}):Object(c.jsx)("p",{}),B&&B.map((function(e,t){return Object(c.jsxs)("div",{className:"meal",children:[Object(c.jsx)("img",{src:e.image}),Object(c.jsx)("h4",{children:e.name}),Object(c.jsx)("p",{children:e.description}),Object(c.jsxs)("p",{children:["Cost: \xa3",e.cost]})]},t)}))]})]})}),F=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"Thank you for your booking."})})},w=(n(55),function(){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("p",{children:"Charles Davis Web Development 2022"})})});var D=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Cormorant+Garamond:700i|Fira+Sans",rel:"stylesheet",type:"text/css"}),Object(c.jsx)(o.a,{children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",element:Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{})," ",Object(c.jsx)(b,{}),Object(c.jsx)(w,{})]})}),Object(c.jsx)(j.a,{exact:!0,path:"/hotel",element:Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{})," ",Object(c.jsx)(k,{}),Object(c.jsx)(w,{})]})}),Object(c.jsx)(j.a,{exact:!0,path:"/restaurant",element:Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{})," ",Object(c.jsx)(C,{}),Object(c.jsx)(w,{})]})}),Object(c.jsx)(j.a,{exact:!0,path:"/booked",element:Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{})," ",Object(c.jsx)(F,{}),Object(c.jsx)(w,{})]})})]})})]})};n(56);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.4cc2000c.chunk.js.map