(this.webpackJsonpemployee=this.webpackJsonpemployee||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},79:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(0),c=n.n(a),s=n(8),o=n.n(s),i=(n(60),n(13)),l=n(16),d=n(28),u=n(19),j=n(48),h=n(47);n(61);var m=function(){return Object(r.jsx)("div",{className:"header jumbotron text-center",children:Object(r.jsx)("h1",{children:"Employee Directory"})})},b=n(45),p=n.n(b),f=function(){return p.a.get("https://randomuser.me/api/?results=200&nat=us")},y=n(126),O=n(130),x=n(129),g=n(121),v=n(127),C=n(128),N=n(133),S=n(125);n(79);var B=function(e){return Object(r.jsx)(g.a,{className:"tableStyle",component:S.a,children:Object(r.jsxs)(y.a,{stickyHeader:!0,"aria-label":"Employee Table",children:[Object(r.jsx)(v.a,{children:Object(r.jsxs)(C.a,{children:[Object(r.jsx)(x.a,{align:"center",children:"Image"}),Object(r.jsxs)(x.a,{align:"center",children:["First Name",Object(r.jsx)(N.a,{active:"firstName"===e.orderBy,direction:e.order,onClick:function(){return e.handleSort("firstName",e.order)}})]}),Object(r.jsxs)(x.a,{align:"center",children:["Last Name",Object(r.jsx)(N.a,{active:"lastName"===e.orderBy,direction:e.order,onClick:function(){return e.handleSort("lastName",e.order)}})]}),Object(r.jsx)(x.a,{align:"center",children:"Phone Number"}),Object(r.jsxs)(x.a,{align:"center",children:["Email",Object(r.jsx)(N.a,{active:"email"===e.orderBy,direction:e.order,onClick:function(){return e.handleSort("email",e.order)}})]})]})}),Object(r.jsx)(O.a,{children:e.employees.map((function(e){return Object(r.jsxs)(C.a,{hover:!0,children:[Object(r.jsx)(x.a,{align:"center",children:Object(r.jsx)("img",{alt:"".concat(e.firstName," ").concat(e.lastName),src:e.image})}),Object(r.jsx)(x.a,{align:"center",children:e.firstName}),Object(r.jsx)(x.a,{align:"center",children:e.lastName}),Object(r.jsx)(x.a,{align:"center",children:e.phone}),Object(r.jsx)(x.a,{align:"center",children:e.email})]},e.id)}))})]})})},w=n(132);n(83);var L=function(e){return Object(r.jsx)(w.a,{className:"searchBox",color:"secondary",variant:"outlined",label:"Search Here",type:"search",name:"search",onChange:e.handleInputChange})},k=function(e,t){return t.filter((function(t){return t.firstName.toLowerCase().includes(e.toLowerCase())||t.lastName.toLowerCase().includes(e.toLowerCase())||t.phone.toLowerCase().includes(e.toLowerCase())||t.email.toLowerCase().includes(e.toLowerCase())}))},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(n,r){var a=n[e].toUpperCase(),c=r[e].toUpperCase(),s=0;return a>c?s=1:a<c&&(s=-1),"desc"===t?-1*s:s}},I=n(131),F=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={employees:[],renderedEmployees:[],search:"",orderBy:"",order:"asc"},e.handleInputChange=function(t){var n=t.target.value,r=t.target.name;e.setState(Object(l.a)({},r,n),(function(){if(e.state.search){var t=k(e.state.search,e.state.renderedEmployees);e.setState({employees:t,orderBy:""})}else e.setState({employees:e.state.renderedEmployees,orderBy:""})}))},e.handleSort=function(t,n){var r=Object(i.a)(e.state.employees).sort(E(t,n)),a="asc"===n?"desc":"asc";e.setState({employees:r,order:a,orderBy:t})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){var n=t.data.results.map((function(e){return{id:e.id.value,image:e.picture.medium,firstName:e.name.first,lastName:e.name.last,phone:e.cell,email:e.email}}));e.setState({employees:n,renderedEmployees:n})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{}),Object(r.jsx)(I.a,{container:!0,justify:"center",children:Object(r.jsx)(L,{employees:this.state.employees,handleInputChange:this.handleInputChange})}),Object(r.jsx)(B,{employees:this.state.employees,handleSort:this.handleSort,orderBy:this.state.orderBy,order:this.state.order})]})}}]),n}(c.a.Component);var D=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(F,{})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(84);o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(D,{})}),document.getElementById("root")),P()}},[[85,1,2]]]);
//# sourceMappingURL=main.734222f6.chunk.js.map