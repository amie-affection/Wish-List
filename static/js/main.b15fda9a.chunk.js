(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"wish":{"placeholder":"enter your wish","name":"wish","label":"Wish"},"description":{"placeholder":"about your wish","name":"description","label":"Description"}}')},13:function(e,t,n){e.exports=n(26)},26:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),s=n(10),l=n.n(s),c=n(12),o=n(4),h=n(5),u=n(7),m=n(6),p=n(8),d=n(2),b=n(11),g=n.n(b),f=function(e){var t=e.inputLabel,n=e.name,a=e.value,r=e.onChange,s=e.placeholder;return i.a.createElement("label",null,t,i.a.createElement("input",{name:n,value:a,onChange:r,placeholder:s}))},w=n(1);console.log(w),console.log(Object.keys(w));var v=(a={},Object(d.a)(a,w.wish.name,""),Object(d.a)(a,w.description.name,""),a),j=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state=v,e.handleSubmit=function(t){t.preventDefault();var n=Object(p.a)(Object(p.a)({},e.state),{},{date:(new Date).toDateString(),id:g()()});e.state.wish.trim()&&e.props.getWishes(n),e.setState(v)},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(d.a)({},a,r))},e}return Object(h.a)(n,[{key:"render",value:function(){return console.log("re-render"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement(f,Object.assign({},w.wish,{onChange:this.handleChange,value:this.state.wish})),i.a.createElement(f,Object.assign({},w.description,{onChange:this.handleChange,value:this.state.description})),i.a.createElement("button",{type:"submit"},"add"))}}]),n}(r.Component),O=function(e){var t=e.wish,n=e.description,a=e.deleteWish,r=e.id;return i.a.createElement("div",null,i.a.createElement("h2",null,t),i.a.createElement("p",null,n),i.a.createElement("button",{onClick:function(){return a(r)}},"delete"))},E=function(){return i.a.createElement("img",{style:{width:500,paddingTop:20},src:"https://s-english.ru/images/likatama/3-17.jpg",alt:"wish"})},y=function(e){var t=e.wishes,n=e.deleteWish;return 0!==t.length?t.map((function(e){return i.a.createElement(O,Object.assign({deleteWish:n,key:e.id},e))})):i.a.createElement(E,null)},W=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={wishes:[]},e.getWishes=function(t){console.log(t),e.setState((function(e){return{wishes:[].concat(Object(c.a)(e.wishes),[t])}}))},e.deleteWish=function(t){e.setState((function(e){return{wishes:e.wishes.filter((function(e){return e.id!==t}))}}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state.wishes;return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{getWishes:this.getWishes}),i.a.createElement(y,{wishes:e,deleteWish:this.deleteWish}))}}]),n}(r.Component);l.a.render(i.a.createElement(W,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b15fda9a.chunk.js.map