(this.webpackJsonpaddandremove=this.webpackJsonpaddandremove||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),i=(n(13),n(7)),l=n(1),s=n(2),u=n(4),d=n(3),m=(n(14),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={index:e.index},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{backgroundColor:"gray",width:"800px",height:"150px",margin:"auto"}},o.a.createElement("h2",null,"title:",this.props.name," "),o.a.createElement("h3",null,"info:",this.props.info," "),o.a.createElement("button",{onClick:function(){return e.props.del(e.state.index)},style:{color:"red"}},"x"))}}]),n}(a.Component)),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).validName=function(e){"Orgad"==e.target.value?a.setState({name:e.target.value,backGroundColor:"green"}):a.setState({name:e.target.value,backGroundColor:"white"})},a.validInfo=function(e){e.target.value.length>5?a.setState({info:e.target.value="Error"}):a.setState({info:e.target.value})},a.state={name:"",info:"",backGroundColor:"white"},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{backgroundColor:this.state.backGroundColor}},o.a.createElement("h1",null,"add post"),o.a.createElement("br",null),o.a.createElement("input",{onChange:this.validName,type:"text",placeholder:"name"}),o.a.createElement("br",null),o.a.createElement("input",{onChange:this.validInfo,type:"text",placeholder:"info"}),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){e.props.Add(e.state.name,e.state.info)}},"Add post"))}}]),n}(a.Component),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={post:[{name:"a",info:"aa..."},{name:"b",info:"bb..."},{name:"c",info:"cc..."}]},e.Addpost=function(t,n){e.setState({post:[{name:t,info:n}].concat(Object(i.a)(e.state.post))})},e.deletePost=function(t){var n=e.state.post.filter((function(e,n){return n!=t}));e.setState({post:n})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(f,{Add:this.Addpost}),this.state.post.map((function(t,n){return o.a.createElement(m,{key:n,name:t.name,info:t.info,del:e.deletePost,index:n})})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f4ed7c00.chunk.js.map