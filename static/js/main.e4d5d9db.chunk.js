(this["webpackJsonpchucknorris.io"]=this["webpackJsonpchucknorris.io"]||[]).push([[0],{46:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),o=n.n(r),i=(n(46),n(2)),s=n(15),j=n(16),h=n(20),l=n(19),u=n(75),b=n(74),d=n(76),g=n(77),O=n(25),p=n.n(O),f=n(78),x=n(1),m=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)(f.a,{style:{width:"18rem",alignContent:"center"},children:Object(x.jsx)(f.a.Body,{children:Object(x.jsx)(f.a.Text,{children:this.props.joke})})})})}}]),n}(c.a.Component),v=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={categories:[],categoryItems:[]},e.getCategoryItems=function(t){p.a.get("https://api.chucknorris.io/jokes/random?category="+t).then((function(t){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{categoryItems:t.data}))})).catch((function(e){console.log(e)}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getCategories()}},{key:"getCategories",value:function(){var e=this;p.a.get("https://api.chucknorris.io/jokes/categories").then((function(t){e.setState({categories:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{children:[Object(x.jsx)(u.a,{bg:"light",expand:"lg",children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(u.a.Brand,{href:"#home",children:"Joseph Kithome"}),Object(x.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(u.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsxs)(d.a,{className:"me-auto",children:[Object(x.jsx)(d.a.Link,{href:"#home",children:"Home"}),Object(x.jsx)(d.a.Link,{href:"#link"}),Object(x.jsxs)(g.a.Select,{"aria-label":"Default select example",onChange:function(t){return e.getCategoryItems(t.target.value)},children:[Object(x.jsx)("option",{children:"Select category"}),this.state.categories.map((function(e){return Object(x.jsx)("option",{value:e,children:e},e.id)}))]})]})})]})}),Object(x.jsx)(m,{joke:this.state.categoryItems.value})]})}}]),n}(a.Component);n(71);o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.e4d5d9db.chunk.js.map