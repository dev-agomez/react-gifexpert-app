(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(1),o=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(l.a)(a,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i&&(t((function(e){return[i]})),o(""))}},r.a.createElement("input",{type:"text",placeholder:"Buscar gifs",value:i,onChange:function(e){o(e.target.value)}}))},u=a(2),m=a.n(u),s=a(5),d=function(){var e=Object(s.a)(m.a.mark((function e(t){var a,n,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=100&api_key=LlK3FOYeTY24ARY87cme0200VTjSVO7a"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,r=n.data,c=1,i=r.map((function(e){var t;return{index:c++,id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),console.log(r),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.id,a=e.title,n=e.url,c=e.index;return console.log(t,a,n),r.a.createElement("div",{className:"card animate__animated animate__lightSpeedInLeft"},r.a.createElement("a",{href:n,target:"_blank"},r.a.createElement("img",{src:n,alt:a})),r.a.createElement("p",null,c+".- "+a))},f=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0,notFound:!0}),a=Object(l.a)(t,2),r=a[0],c=a[1];return console.log(e),Object(n.useEffect)((function(){d(e).then((function(e){console.log(e),e.length>0?c({data:e,loading:!1,notFound:!1}):c({data:e,loading:!1,notFound:!0})}))}),[e]),r}(t),c=a.data,i=a.loading,o=a.notFound;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__lightSpeedInLeft"},t),i&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Cargando..."),o&&r.a.createElement("p",{className:"animate__animated animate__bounceInDown"},"No hay elementos para mostrar..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))))},g=function(){var e=Object(n.useState)([""]),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Buscador de im\xe1genes GIF"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e,t){return r.a.createElement(f,{key:t,category:e})}))))};a(12);i.a.render(r.a.createElement(g,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.d467eeb1.chunk.js.map