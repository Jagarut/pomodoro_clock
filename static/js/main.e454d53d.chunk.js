(this["webpackJsonpclock-25"]=this["webpackJsonpclock-25"]||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n,a=s(1),i=s.n(a),c=s(3),r=s.n(c),l=(s(12),s(4)),o=s(5),d=s(7),b=s(6),j=(s(13),s(0)),u=document.getElementById("beep"),h=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={title:"Session",sessionL:25,minutes:25,seconds:60,breakL:5,active:!0},e.handleDecrement=function(t){var s=e.state,n=s.minutes,a=s.breakL,i=s.sessionL;"breakL"===t&&a>1?e.setState({breakL:a-1}):"sessionL"===t&&n>1&&e.setState({sessionL:i-1,minutes:n-1})},e.handleIncrement=function(t){var s=e.state,n=s.minutes,a=s.breakL,i=s.sessionL;"breakL"===t&&a<60?e.setState({breakL:a+1}):"sessionL"===t&&i<60&&e.setState({sessionL:i+1,minutes:n+1})},e.timer=function(){var t=e.state,s=t.title,n=t.minutes,a=t.seconds,i=t.breakL;60===a&&e.setState({minutes:n-1}),0===n&&0===a&&(u.play(),e.setState({minutes:i,title:"Session"===s?"Break":"Session"})),e.setState({seconds:0===a?60:a-1})},e.handlePlayPause=function(){var t=e.state.active;e.setState({active:!t}),t?n=setInterval((function(){e.timer()}),1e3):clearInterval(n)},e.handleReset=function(){e.setState({title:"Session",sessionL:25,minutes:25,seconds:60,breakL:5,active:!0}),clearInterval(n),u.pause(),u.currentTime=0},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.title,n=t.minutes,a=t.seconds,i=t.breakL,c=t.sessionL;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"25 + 5 Clock"}),Object(j.jsxs)("div",{className:"labels-container",children:[Object(j.jsxs)("div",{id:"break-label",children:[Object(j.jsx)("h3",{children:"Break Length"}),Object(j.jsx)("button",{onClick:function(){return e.handleDecrement("breakL")},id:"break-decrement",children:Object(j.jsx)("i",{className:"fa fa-arrow-down fa-2x",value:"-"})}),Object(j.jsx)("p",{id:"break-length",style:{display:"inline"},children:i}),Object(j.jsx)("button",{onClick:function(){return e.handleIncrement("breakL")},id:"break-increment",children:Object(j.jsx)("i",{className:"fa fa-arrow-up fa-2x"})})]}),Object(j.jsxs)("div",{id:"session-label",children:[Object(j.jsx)("h3",{children:"Session Length"}),Object(j.jsx)("button",{id:"session-decrement",onClick:function(){return e.handleDecrement("sessionL")},children:Object(j.jsx)("i",{className:"fa fa-arrow-down fa-2x"})}),Object(j.jsx)("p",{id:"session-length",style:{display:"inline"},children:c}),Object(j.jsx)("button",{onClick:function(){return e.handleIncrement("sessionL")},id:"session-increment",children:Object(j.jsx)("i",{className:"fa fa-arrow-up fa-2x"})})]})]}),Object(j.jsxs)("div",{className:"timer",children:[Object(j.jsx)("h4",{id:"timer-label",className:"Break"===s&&"red",children:s}),Object(j.jsxs)("h2",{id:"time-left",className:"Break"===s&&"red",children:[n<10?"0".concat(n):n,":",60===a?"00":a<"10"?"0".concat(a):a]})]}),Object(j.jsxs)("div",{className:"timer-control",children:[Object(j.jsxs)("button",{id:"start_stop",onClick:this.handlePlayPause,children:[Object(j.jsx)("i",{className:"fa fa-play fa-lg"}),Object(j.jsx)("i",{className:"fa fa-pause fa-lg"})]}),Object(j.jsx)("button",{onClick:this.handleReset,children:Object(j.jsx)("i",{id:"reset",className:"fas fa-sync-alt fa-lg"})})]})]})}}]),s}(a.Component);r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e454d53d.chunk.js.map