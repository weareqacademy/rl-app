(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{115:function(e,t){},118:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(30),o=a.n(c),l=(a(74),a(56)),u=a.n(l),s=a(16),i=a(4),m=a(3),p=a.n(m),d=a(6),b=a(2),h=a(57),f=a.n(h).a.create({baseURL:"http://localhost:3333"});function E(e){var t=e.history,a=Object(n.useState)(""),c=Object(b.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(""),s=Object(b.a)(u,2),i=s[0],m=s[1],h=Object(n.useState)(""),E=Object(b.a)(h,2),g=E[0],v=E[1],O=Object(n.useState)("Entrar"),j=Object(b.a)(O,2),k=j[0],y=j[1];function x(){return(x=Object(d.a)(p.a.mark((function e(a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),/\S+@\S+\.\S+/.test(o)&&o){e.next=5;break}return v("Oops. Informe um email v\xe1lido!"),e.abrupt("return");case 5:if(i){e.next=8;break}return v("Oops. Informe sua senha secreta!"),e.abrupt("return");case 8:return e.prev=8,y("Aguarde..."),e.next=12,f.post("/sessions",{email:o,password:i});case 12:n=e.sent,(r=n.data.user_token)?(localStorage.setItem("user_token",r),setTimeout((function(){t.push("/dashboard")}),500)):v("Oops. Algo errado ocorreu!"),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(8),v("Usu\xe1rio e/ou senha inv\xe1lidos."),setTimeout((function(){y("Entrar")}),300);case 21:case"end":return e.stop()}}),e,null,[[8,17]])})))).apply(this,arguments)}return localStorage.getItem("user_token")&&t.push("/dashboard"),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Fa\xe7a parte da maior comunidade de aluguel de equipamentos musicais!"),r.a.createElement("form",{onSubmit:function(e){return x.apply(this,arguments)}},r.a.createElement("input",{id:"user_email",type:"text",placeholder:"Seu email",value:o,onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{id:"user_password",type:"password",placeholder:"Sua senha secreta",value:i,onChange:function(e){return m(e.target.value)}}),g.length>0&&r.a.createElement("div",{className:"alert alert-dark"},g),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},k),r.a.createElement("small",{className:"link"},"N\xe3o tem conta? ",r.a.createElement("a",{href:"/signup"},"Cadastre-se"))))}a(92);function g(e){var t=e.history,a=Object(n.useState)(""),c=Object(b.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(""),s=Object(b.a)(u,2),i=s[0],m=s[1],h=Object(n.useState)(""),E=Object(b.a)(h,2),g=E[0],v=E[1],O=Object(n.useState)(""),j=Object(b.a)(O,2),k=j[0],y=j[1],x=Object(n.useState)(""),S=Object(b.a)(x,2),N=S[0],w=S[1],_=Object(n.useState)("Cadastrar"),C=Object(b.a)(_,2),I=C[0],F=C[1];function A(){return(A=Object(d.a)(p.a.mark((function e(a){var n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),localStorage.clear(),n=/\S+@\S+\.\S+/,o){e.next=6;break}return y("Oops. Informe seu nome completo!"),e.abrupt("return");case 6:if(n.test(i)&&i){e.next=9;break}return y("Oops. Informe um email v\xe1lido!"),e.abrupt("return");case 9:if(g){e.next=12;break}return y("Oops. Informe sua senha secreta!"),e.abrupt("return");case 12:return e.prev=12,F("Aguarde..."),e.next=16,f.post("/signup",{name:o,email:i,password:g});case 16:r=e.sent,(c=r.data._id)?(localStorage.setItem("user_token",c),setTimeout((function(){t.push("/dashboard")}),500)):y("Oops. Algo errado ocorreu!"),e.next=27;break;case 21:if(e.prev=21,e.t0=e.catch(12),1001!==e.t0.response.data.code){e.next=27;break}return w("\ud83e\udd2d Email j\xe1 cadastrado."),F("Cadastrar"),e.abrupt("return");case 27:case"end":return e.stop()}}),e,null,[[12,21]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Cadastre-se para an\xfanciar!"),r.a.createElement("form",{onSubmit:function(e){return A.apply(this,arguments)}},r.a.createElement("input",{id:"fullName",type:"text",placeholder:"Seu nome completo",value:o,onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{id:"email",type:"text",placeholder:"Seu melhor email",value:i,onChange:function(e){return m(e.target.value)}}),r.a.createElement("input",{id:"password",type:"password",placeholder:"Sua senha secreta",value:g,onChange:function(e){return v(e.target.value)}}),r.a.createElement("div",{className:"survey-radio"},r.a.createElement("input",{type:"radio",value:"0",name:"customer-radio",id:"player"}),r.a.createElement("label",{htmlFor:"player"},"Sou musico"),r.a.createElement("input",{type:"radio",value:"1",name:"customer-radio",id:"dealer"}),r.a.createElement("label",{htmlFor:"dealer"},"Sou loja")),r.a.createElement("div",{className:"survey-check"},r.a.createElement("p",{className:"subtitle"},"Equipos de sua prefer\xeancia:"),r.a.createElement("input",{type:"checkbox",value:"0",name:"acordeon",id:"acordeon"}),r.a.createElement("label",{htmlFor:"acordeon"},"Acordeon"),r.a.createElement("input",{type:"checkbox",value:"0",name:"bass",id:"bass"}),r.a.createElement("label",{htmlFor:"bass"},"Contra Baixo"),r.a.createElement("input",{type:"checkbox",value:"0",name:"guitar",id:"guitar"}),r.a.createElement("label",{htmlFor:"guitar"},"Guitarra"),r.a.createElement("input",{type:"checkbox",value:"0",name:"banjo",id:"banjo"}),r.a.createElement("label",{htmlFor:"banjo"},"Banjo"),r.a.createElement("input",{type:"checkbox",value:"0",name:"piano",id:"piano"}),r.a.createElement("label",{htmlFor:"piano"},"Piano"),r.a.createElement("input",{type:"checkbox",value:"0",name:"violao",id:"violao"}),r.a.createElement("label",{htmlFor:"violao"},"Viol\xe3o"),r.a.createElement("input",{type:"checkbox",value:"0",name:"conga",id:"conga"}),r.a.createElement("label",{htmlFor:"conga"},"Conga"),r.a.createElement("input",{type:"checkbox",value:"0",name:"bateria",id:"bateria"}),r.a.createElement("label",{htmlFor:"bateria"},"Bateria"),r.a.createElement("input",{type:"checkbox",value:"0",name:"mic",id:"mic"}),r.a.createElement("label",{htmlFor:"mic"},"Microfone"),r.a.createElement("input",{type:"checkbox",value:"0",name:"sax",id:"sax"}),r.a.createElement("label",{htmlFor:"sax"},"Saxofone"),r.a.createElement("input",{type:"checkbox",value:"0",name:"clarin",id:"clarin"}),r.a.createElement("label",{htmlFor:"clarin"},"Clarinete"),r.a.createElement("input",{type:"checkbox",value:"0",name:"outros",id:"outros"}),r.a.createElement("label",{htmlFor:"outros"},"Outros")),k.length>0&&r.a.createElement("div",{className:"alert alert-dark"},k),N.length>0&&r.a.createElement("div",{className:"alert alert-error"},N),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},I),r.a.createElement("small",{className:"link"},"J\xe1 tem conta? ",r.a.createElement("a",{href:"/"},"Fa\xe7a Login"))))}var v=a(68),O=a(58),j=a.n(O),k=a(63),y=a(65),x=a(64),S=(a(118),a(59)),N=(a(121),a(60)),w=a.n(N),_=a(61),C=a.n(_);function I(e){var t=e.history,a=Object(n.useState)([]),c=Object(b.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)([]),i=Object(b.a)(u,2),m=i[0],h=i[1],E=Object(n.useState)([]),g=Object(b.a)(E,2),O=g[0],N=g[1],_=Object(n.useState)([]),I=Object(b.a)(_,2),F=I[0],A=I[1],q=Object(n.useState)([]),R=Object(b.a)(q,2),T=R[0],B=R[1],L=localStorage.getItem("user_token");L||t.push("/");var U=Object(n.useMemo)((function(){return j()("http://localhost:3333",{query:{user_token:L}})}),[L]);function D(){return(D=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("/renting/".concat(t,"/approvals"));case 2:h(m.filter((function(e){return e._id!==t})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("/renting/".concat(t,"/rejections"));case 2:h(m.filter((function(e){return e._id!==t})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return V.apply(this,arguments)}function V(){return(V=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.src=C.a;case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B(""),f.get("/equipos",{headers:{user_token:localStorage.getItem("user_token")},params:{name:O}}).then((function(e){0===e.data.length&&B("Nenhum an\xfancio encontrado!"),e.data.length>=4?A(!0):A(!1),l(e.data)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return($=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(S.confirmAlert)({title:"Aten\xe7\xe3o",message:'O an\xfancio "'.concat(t.name,'", ser\xe1 apagado do sistema. Voc\xea est\xe1 certo disso?'),buttons:[{label:"Sim",onClick:function(){var e=Object(d.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("user_token"),e.next=3,f.delete("/equipos/".concat(t._id),{headers:{user_token:a}});case 3:l(o.filter((function(e){return e._id!==t._id})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{label:"N\xe3o",onClick:function(){}}]});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){U.on("renting_request",(function(e){h([].concat(Object(v.a)(m),[e]))}))}),[m,U]),Object(n.useEffect)((function(){B(""),f.get("/equipos",{headers:{user_token:localStorage.getItem("user_token")}}).then((function(e){0===e.data.length&&B("Nenhum an\xfancio cadastrado!"),e.data.length>=4?A(!0):A(!1),l(e.data)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dashboard"},r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"welcome"},r.a.createElement("h1",null,"Meus an\xfancios")),r.a.createElement("div",{className:"actions"},r.a.createElement(s.b,{to:"/",className:"do-Logout",onClick:function(){return function(){return G.apply(this,arguments)}()}},r.a.createElement(k.a,{size:"25",color:"#444"})))),r.a.createElement("ul",{className:"notifications"},m.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("p",null,r.a.createElement("strong",null,e.user.email)," deseja alugar o equipamento: ",r.a.createElement("strong",null,e.equipo.name)," : ",r.a.createElement("strong",null,e.date)),r.a.createElement("button",{className:"accept",onClick:function(){return function(e){return D.apply(this,arguments)}(e._id)}},"ACEITAR"),r.a.createElement("button",{className:"reject",onClick:function(){return function(e){return M.apply(this,arguments)}(e._id)}},"REJEITAR"))}))),r.a.createElement("form",{id:"search"},r.a.createElement("div",{className:"search-box"},r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",id:"equipoName",className:"searchTerm",placeholder:"Buscar...",value:O,onChange:function(e){return N(e.target.value)}}),r.a.createElement("button",{type:"button",className:"searchButton",onClick:function(){return J.apply(this,arguments)}},r.a.createElement(x.a,null))))),r.a.createElement("table",{className:"equipo-table"},r.a.createElement("tbody",null,o.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement("img",{src:e.thumbnail_url,alt:e.name,onError:P,width:"50px",className:"thumbnail"})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price?"R$".concat(e.price,"/dia"):"GRATUITO"),r.a.createElement("td",null,r.a.createElement("i",{className:"material-icons delete-icon",onClick:function(){return function(e){return $.apply(this,arguments)}(e)}},"delete_forever")))})))),r.a.createElement("div",{className:"buttons"},T.length>0&&r.a.createElement("div",{className:"alert alert-oops"},r.a.createElement("img",{src:w.a,alt:"oops"}),r.a.createElement("div",null,T)),!1===F&&r.a.createElement(s.b,{to:"/equipos"},r.a.createElement("button",{className:"btn btn-primary btn-full"},r.a.createElement(y.a,null)," Criar an\xfancio")),!0===F&&r.a.createElement("button",{className:"btn btn-dark btn-full"},"Voc\xea pode cadastrar at\xe9 4 Equipos"))))}var F=a(67),A=a(66),q=a.n(A);a(124);function R(e){var t=e.history,a=Object(n.useState)(null),c=Object(b.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)("0"),s=Object(b.a)(u,2),i=s[0],m=s[1],h=Object(n.useState)(""),E=Object(b.a)(h,2),g=E[0],v=E[1],O=Object(n.useState)(""),j=Object(b.a)(O,2),k=j[0],y=j[1],x=Object(n.useState)(!1),S=Object(b.a)(x,2),N=S[0],w=S[1],_=Object(n.useState)(!1),C=Object(b.a)(_,2),I=C[0],A=C[1],R=Object(n.useState)(!1),T=Object(b.a)(R,2),B=T[0],L=T[1],U=Object(n.useState)(!1),D=Object(b.a)(U,2),M=D[0],P=D[1];localStorage.getItem("user_token")||t.push("/");var V=Object(n.useMemo)((function(){return o?URL.createObjectURL(o):null}),[o]),J=function(e){return new Promise((function(t){var a=new Image;a.onload=function(){t({height:a.height,width:a.width})},a.src=e}))};function G(){return(G=Object(d.a)(p.a.mark((function e(a){var n,r,c,o,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),(n={thumbnail:a.target[0].files[0],name:a.target.name.value,category:a.target.category.value,price:a.target.price.value}).thumbnail){e.next=6;break}w(!0),e.next=15;break;case 6:return w(!1),r=window.URL.createObjectURL(n.thumbnail),e.next=10,J(r);case 10:if(c=e.sent,console.log(c),250===c.height||250===c.width){e.next=15;break}return v("A resolu\xe7\xe3o da foto deve ser de 250x250 pixels."),e.abrupt("return");case 15:if(n.name?A(!1):A(!0),"0"===n.category?L(!0):L(!1),n.price?P(!1):P(!0),!(n.price.length>0)){e.next=23;break}if(/^[-]?\d+$/.test(n.price)){e.next=23;break}return v("O valor da di\xe1ria deve ser num\xe9rico."),e.abrupt("return");case 23:n.thumbnail&&n.name&&"0"!==n.category&&n.price&&(v(""),o=new FormData,l=localStorage.getItem("user_token"),o.append("thumbnail",n.thumbnail),o.append("name",n.name),o.append("category",n.category),o.append("price",n.price),f.post("/equipos",o,{headers:{user_token:l}}).then((function(){t.push("/dashboard")})).catch((function(e){console.log(e.response),1003!==e.response.data.code||y("An\xfancio j\xe1 existe :/")})));case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("form",{onSubmit:function(e){return G.apply(this,arguments)},id:"equipoForm"},r.a.createElement("label",{id:"thumbnail",style:{backgroundImage:"url(".concat(V,")")},className:o?"has-thumbnail":""},r.a.createElement("input",{type:"file",onChange:function(e){return l(e.target.files[0])}}),r.a.createElement("img",{src:q.a,alt:"Select img"})),N&&r.a.createElement("span",{className:"alert-form"},"Adicione uma foto no seu an\xfancio."),r.a.createElement("label",{htmlFor:"name"},"EQUIPAMENTO *"),r.a.createElement("input",{id:"name",placeholder:"Descreva o seu equipamento"}),I&&r.a.createElement("span",{className:"alert-form"},"Informe a descri\xe7\xe3o do an\xfancio."),r.a.createElement("label",{htmlFor:"category"},"CATEGORIA *"),r.a.createElement("select",{id:"category",value:i,onChange:function(e){return m(e.target.value)}},r.a.createElement("option",{value:"0",disabled:!0},"Escolha uma categoria"),r.a.createElement("option",{value:"Amplificadores"},"Amplificadores"),r.a.createElement("option",{value:"\xc1udio e Tecnologia"},"\xc1udio e Tecnologia"),r.a.createElement("option",{value:"Cordas"},"Cordas"),r.a.createElement("option",{value:"Baterias e Percuss\xe3o"},"Baterias e Percuss\xe3o"),r.a.createElement("option",{value:"Teclas"},"Teclas"),r.a.createElement("option",{value:"Sopros"},"Sopros"),r.a.createElement("option",{value:"Outros"},"Outros")),B&&r.a.createElement("span",{className:"alert-form"},"Escolha uma categoria."),r.a.createElement("label",{htmlFor:"price"},"VALOR DA DI\xc1RIA ",r.a.createElement("span",null,"(n\xe3o use virgulas)")),r.a.createElement("input",{id:"price",name:"price",placeholder:"Valor cobrado por dia"}),M&&r.a.createElement("span",{className:"alert-form"},"Informe o valor da di\xe1ria."),g.length>0&&r.a.createElement("div",{className:"alert alert-dark"},g),k.length>0&&r.a.createElement("div",{className:"alert alert-error"},k),r.a.createElement("button",{type:"submit",className:"btn btn-success"},r.a.createElement(F.a,null)," Cadastrar"))}function T(){return r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:E}),r.a.createElement(i.a,{path:"/signup",exact:!0,component:g}),r.a.createElement(i.a,{path:"/dashboard",component:I}),r.a.createElement(i.a,{path:"/equipos",component:R})))}var B=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:u.a,className:"category",alt:"Rocklov"}),r.a.createElement("div",{className:"content"},r.a.createElement(T,null)))};o.a.render(r.a.createElement(B,null),document.getElementById("root"))},56:function(e,t,a){e.exports=a.p+"static/media/logo.5dcbb283.svg"},60:function(e,t,a){e.exports=a.p+"static/media/oops.84384ca3.svg"},61:function(e,t,a){e.exports=a.p+"static/media/default.63e50965.svg"},66:function(e,t,a){e.exports=a.p+"static/media/camera.234a4ab9.svg"},69:function(e,t,a){e.exports=a(125)},74:function(e,t,a){},92:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.2115bb9c.chunk.js.map