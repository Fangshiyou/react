(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),u=n.n(c),r=n(1),i=n(2),l=n(4),s=n(3),h=n(5),p=(a.Component,n(15),n(9)),d=n(6),m=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).handleInput=function(t){13===t.keyCode&&e.props.add(t.target.value)},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.name,parseInt(""===t.target.value?0:t.target.value)))},e.handleInput=e.handleInput.bind(Object(d.a)(e)),e.state={a:"",b:"",c:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.a.focus()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("input",{ref:function(t){e.a=t},name:"a",onChange:this.handleChange,value:this.state.a,onKeyDown:this.handleInput,type:"text"}),"+",o.a.createElement("input",{ref:"b",name:"b",onChange:this.handleChange,value:this.state.b,onKeyDown:this.handleInput,type:"text"}),"+",o.a.createElement("input",{name:"c",onChange:this.handleChange,value:this.state.c,onKeyDown:this.handleInput,type:"text"}),"=",o.a.createElement("p",null,this.state.a+this.state.b+this.state.c),o.a.createElement("input",{ref:function(t){e.inp=t},type:"text"}),o.a.createElement("button",{onClick:function(){console.log(e.inp.value)}},"\u63d0\u4ea4"))}}]),t}(a.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todo;return o.a.createElement("ul",null,t.map((function(t,n){return o.a.createElement("li",{key:n},t,"---",o.a.createElement("button",{onClick:function(){return e.props.del(n)}},"\u5220\u9664"))})))}}]),t}(a.Component);b.defaultProps={todo:[1,2,3,4,4]};var f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).state={todo:[1,2,3]},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"addItem",value:function(){console.log(123)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,{add:this.addItem}),o.a.createElement(b,{todo:this.state.todo}))}}]),t}(a.Component);u.a.render(o.a.createElement(f,null),document.getElementById("root"));document.getElementById("root").className="active"}},[[10,1,2]]]);
//# sourceMappingURL=main.7b33db4d.chunk.js.map