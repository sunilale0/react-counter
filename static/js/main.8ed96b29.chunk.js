(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(3),r=n.n(c),s=(n(2),n(4)),u=n(5),i=n(7),l=n(6),m=n(8),h=function(t){return a.a.createElement("p",null,"Hello ",t.name," ",t.value,"! This is the greeting that I have for now.")},g=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(i.a)(this,Object(l.a)(e).call(this))).increment=function(){t.setState({counter:t.state.counter+t.state.togCount})},t.decrement=function(e){t.state.counter>0&&t.setState({counter:t.state.counter-t.state.togCount})},t.reset=function(){t.setState({counter:0})},t.toggle=function(){t.setState({togCount:1===t.state.togCount?2:1,tog:"Single Count"===t.state.tog?"Double Count":"Single Count"})},t.state={counter:0,tog:"Single Count",togCount:1},t}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return console.log("this is line number 13",this.state.counter),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"navbar"},"Counter.JS"),a.a.createElement("div",{className:"counter"},a.a.createElement("h1",null," ",this.state.counter," "),a.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),a.a.createElement("button",{type:"button",onClick:this.increment,className:"buttons"},"Increment"),a.a.createElement("button",{type:"button",onClick:this.decrement,className:"buttons"},"Decrement"),a.a.createElement("button",{type:"button",onClick:this.toggle,className:"buttons"},this.state.tog),a.a.createElement(h,{name:"React User",value:this.state.counter})))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},2:function(t,e,n){},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.8ed96b29.chunk.js.map