(function(){"use strict";var a={4315:function(a,e,t){t(7461),t(2708);var i=t(5471),n=t(8292);t(9313);i["default"].use(n.Ay$);var s=function(){var a=this,e=a._self._c;return e("div",{attrs:{id:"app"}},[e("b-container",{attrs:{fluid:""}},[e("a",{staticClass:"skip-link",attrs:{href:"#main-content"}},[a._v(" Saltar al contenido principal ")]),e("Cabecera"),e("main",{staticClass:"my-5",attrs:{id:"main-content"}}),e("Pie")],1)],1)},o=[],r=function(){var a=this,e=a._self._c;return e("header",{staticClass:"site-header"},[e("nav",{staticClass:"menuSuperior"},[e("router-link",{attrs:{to:"/"}},[a._v("Inicio")]),a._v(" | "),e("router-link",{attrs:{to:"/about"}},[a._v("Información")])],1),a._m(0),e("div",{staticClass:"textoPrincipal_interno"},[e("h3",[a._v("Selecciona una discapacidad y vive la experiencia digital desde su perspectiva:")]),e("nav",{staticClass:"navDiscapacidad"},[e("router-link",{attrs:{to:"/visual"}},[a._v("Visual")]),a._v(" | ")],1),e("p",[a._v("O también puedes... Seleccionar el botón para ser aleatorio")]),e("b-button",{attrs:{size:"lg",pill:"",variant:"light"},on:{click:a.enlacerandom}},[a._v("Haz clic y sorpréndete!")])],1)])},c=[function(){var a=this,e=a._self._c;return e("h1",[a._v(" Experiencia Digital Inclusiva: "),e("br"),a._v(" ¡Pon a prueba tu "),e("strong",[a._v("empatía ")]),a._v("hacia las personas con discapacidad! ")])}],l=(t(4114),{name:"app",data:function(){return{numMax:5,numRandom:1,numRandomAhora:0}},methods:{enlacerandom:function(){do{this.numRandomAhora=this.numRandom,this.numRandom=Math.floor(Math.random()*this.numMax)}while(this.numRandom==this.numRandomAhora);switch(this.numRandom){case 0:return this.$router.push({path:"/visual"});case 1:return this.$router.push({path:"/bajavision"});case 2:return this.$router.push({path:"/auditivo"});case 3:return this.$router.push({path:"/cognitivo"});case 4:return this.$router.push({path:"/motriz"})}}}}),u=l,d=t(1656),p=(0,d.A)(u,r,c,!1,null,null,null),v=p.exports,m=function(){var a=this,e=a._self._c;return e("footer",{staticClass:"pie"},[e("p",[e("b-link",{attrs:{href:"http://www.graudissenydigitalitec.udl.cat/"}},[a._v("Grado Diseño Digital y Tecnologías Creativas")]),a._v(" || "),e("b-link",{attrs:{href:"http://www.udl.cat/"}},[a._v("Universitat de Lleida")]),a._v(". ")],1),e("p",[e("router-link",{attrs:{to:"/about",target:"_blank"}},[a._v(" Información del proyecto ")])],1)])},f=[],h={},_=h,b=(0,d.A)(_,m,f,!1,null,"5061f5d9",null),g=b.exports,y={name:"app",components:{Cabecera:v,Pie:g}},w=y,x=(0,d.A)(w,s,o,!1,null,null,null),C=x.exports,k=t(173),A=function(){var a=this,e=a._self._c;return e("div",{staticClass:"home"},[e("b-container",{attrs:{fluid:"sm"}},[e("h2",[a._v("Objetivo de este sitio web")]),e("p",[a._v(" Este sitio web ha sido diseñado para ofrecer una experiencia de acceso que permita a las personas sin discapacidad enfrentarse a algunas de las barreras cotidianas que experimentan quienes sí las tienen. ")]),e("p",[a._v(" Queremos que experimentes cómo las barreras tecnológicas afectan el día a día de quienes dependen de la accesibilidad para disfrutar de una experiencia plena en línea. ")]),e("p",[a._v(" El objetivo es fomentar la empatía y la comprensión hacia los desafíos que muchas personas con discapacidad encuentran al usar tecnología y navegar en internet. ")])]),e("h2",[a._v("Propósito de este sitio web")]),e("p",[a._v("Colección de ejemplos sobre elementos web pero observados desde la perspectiva de personas con discapacidad. ")]),e("p",[a._v(" El proposito es percibir una sensación parecida a cuando las personas con discapacidad impactan con barreras de acceso a contenido web. ")]),e("p",[a._v(" De este modo, empatizar con ellas para poder ponerse en su piel. ")]),e("div",[e("b-img",{attrs:{src:t(8253),fluid:"",alt:"Conocer al otro fomenta la empatia"}})],1)],1)},j=[],q={name:"Home",components:{}},E=q,S=(0,d.A)(E,A,j,!1,null,null,null),z=S.exports,O=function(){var a=this,e=a._self._c;return e("div",{staticClass:"about"},[e("h2",[a._v("Presentación del proyecto ")]),e("p",[a._v(" Es una web que presenta barreras de acceso de forma directa a usuarios sin discapacidad para que al interactuar con ellas, empaticen con los problemas habituales que tienen los usuarios con discapacidad al usar la tecnología ")]),e("h2",[a._v("Lista de Barrras ")]),a._v(" Para cada discapacidad se han incliuido distintas barreras. Esta información se encuentra en las propias páginas: "),e("div",[e("router-link",{attrs:{to:"/visual"}},[a._v("Visual")]),a._v(" | "),e("router-link",{attrs:{to:"/bajavision"}},[a._v("Baja Visión")]),a._v(" | "),e("router-link",{attrs:{to:"/auditivo"}},[a._v("Auditivo")]),a._v(" | "),e("router-link",{attrs:{to:"/motriz"}},[a._v("Motriz")]),a._v(" | "),e("router-link",{attrs:{to:"/cognitivo"}},[a._v("Cognitivo")])],1),e("h2",[a._v(" Reflexión")]),e("p",[a._v("En esta web se ha intentado ofrecer una buena experiencia a las personas con discapacidad y una experiencia limitante a las personas sin discapacidad")]),e("h3",[a._v("Accesible User Experience, AUX")]),a._m(0),e("p",[a._v(" El proposito es percibir una sensación parecida a cuando las personas con discapacidad impactan con barreras de acceso a contenido web. ")]),e("p",[a._v(" De este modo, empatizar con ellas para poder ponerse en su piel. ")]),e("b-link",{attrs:{href:"https://accessibleux.wordpress.com/manifesto/"}},[a._v("Enlace al manifiesto de Experiencia de Usuario Accesible")]),a._v(". "),e("div",[e("b-img",{attrs:{src:t(7724),fluid:"",alt:"Conocer al otro fomenta la empatia"}})],1)],1)},D=[function(){var a=this,e=a._self._c;return e("p",[a._v(" Es el conjunto de factores y elementos relativos a la interacción del usuario con discapacidad en un entorno o dispositivo concretos, dando como resultado una percepción positiva de dicho servicio, producto o dispositivo. "),e("br"),a._v(" Dicho de otro modo, que las personas con discapacidad y que utilizan tecnología asistencial, tengan un fácil acceso e interacción en la web para que disfruten de la experiencia. ")])}],P={},M=(0,d.A)(P,O,D,!1,null,null,null),R=M.exports,V=function(){var a=this,e=a._self._c;return e("b-container",[e("div",{staticClass:"visual"},[e("h2",[a._v("Visual")]),e("p",[a._v("Ejemplo de empatia con personas con discapacidad visual total")]),e("section",[e("h3",[a._v("Ejemplo de Imágenes ocultas")]),e("p",[a._v('Solo pueden "verse" con el lector de voz.')]),e("button",{on:{click:function(e){a.mostrar=!a.mostrar}}},[a.mostrar?e("span",[a._v(" Oculta las imágenes ")]):e("span",[a._v(" Muestra las imágenes ")])]),e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-no-animation",interval:1e4,controls:"",fade:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480","label-next":"Siguiente Diapositiva","label-prev":"Anterior Diapositiva","label-goto-slide":"Ir a la diapositiva","label-indicators":"Seleccionada para mostrar"},on:{"sliding-start":a.onSlideStart,"sliding-end":a.onSlideEnd},model:{value:a.slide,callback:function(e){a.slide=e},expression:"slide"}},a._l(a.proyectos,(function(t){return e("div",{key:t.id},[a.mostrar?e("p",[e("Diapos",{attrs:{srcimg:t.srcimg,alt:t.alt}})],1):a._e(),a.mostrar?a._e():e("p",[e("Diapos",{attrs:{srcimg:a.imgVacia,alt:t.alt}})],1)])})),0)],1),e("section",[e("h3",[a._v("Tabla de datos")]),e("p",[a._v(" Esta tabla se presenta de forma adecuada para personas que utilizan lector de voz, pero se visualiza mal porque los usuarios que ven no saben a que corresponde cada celda/columna")]),e("table",[e("caption",[a._v("Horario de apertura")]),e("tr",[e("td"),e("th",{attrs:{scope:"col"}},[e("span",{staticClass:"sr-only"},[a._v("Lunes")]),a._v("   ")]),e("th",{attrs:{scope:"col"}},[e("span",{staticClass:"sr-only"},[a._v("Martes")]),a._v("   ")]),e("th",{attrs:{scope:"col"}},[e("span",{staticClass:"sr-only"},[a._v("Miercoles")]),a._v("   ")]),e("th",{attrs:{scope:"col"}},[e("span",{staticClass:"sr-only"},[a._v("Jueves")]),a._v("   ")]),e("th",{attrs:{scope:"col"}},[e("span",{staticClass:"sr-only"},[a._v("Viernes")]),a._v("   ")])]),e("tr",[e("th",{attrs:{scope:"row"}},[e("span",{staticClass:"sr-only"},[a._v("09:00 – 11:00 horas")]),a._v(" ")]),e("td",[a._v("Abierto")]),e("td",[a._v("Cerrado")]),e("td",[a._v("Abierto")]),e("td",[a._v("Abierto")]),e("td",[a._v("Abierto")])]),e("tr",[e("th",{attrs:{scope:"row"}},[e("span",{staticClass:"sr-only"},[a._v("11:00 – 13:00")]),a._v(" ")]),e("td",[a._v("Abierto")]),e("td",[a._v("Abierto")]),e("td",[a._v("Cerrado")]),e("td",[a._v("Cerrado")]),e("td",[a._v("Cerrado")])])])]),e("section",[e("h3",[a._v("Gráfico")]),e("p",[a._v(" Grafico que con una explicación de los datos que contiene.")])])])])},T=[],$=function(){var a=this,e=a._self._c;return e("div",{staticClass:"diapos"},[e("b-carousel-slide",{attrs:{"content-visible-up":"sm",caption:a.alt,"img-src":a.srcimg,"img-alt":a.alt,width:"1024",height:"600",html:"https://graudissenydigitalitec.udl.cat/ca/"}})],1)},I=[],U={props:["id","srcimg","alt"]},G=U,H=(0,d.A)(G,$,I,!1,null,null,null),L=H.exports;const B="https://raw.githubusercontent.com/afrikiudl/proyectoswd2425/refs/heads/main/WD_Practica1_2425.json";var F={name:"Visual",props:{name:{type:String,default:"visual"}},components:{Diapos:L},data(){return{proyectos:[],githubPage:1,page:1,loading:!1,perPage:5,mostrar:!1,imgVacia:"https://img.freepik.com/vector-gratis/marco-gris-rectangulo-vector-fondo-negro_53876-167869.jpg?t=st=1731584898~exp=1731588498~hmac=f0b6dfcac6b3992909dcbd4bc660f1969576e4e8ecb73712a9713d060c5344d7&w=1380"}},mounted(){this.fetchData()},methods:{async fetchData(){const a=await fetch(B),e=await a.json();this.proyectos=e,console.log(e)}}},J=F,Q=(0,d.A)(J,V,T,!1,null,"1e4a3b3c",null),W=Q.exports;i["default"].use(k.Ay);const X=[{path:"/",name:"home",component:z},{path:"/about",name:"About",component:R},{path:"/visual",name:"Visual",component:W}],K=new k.Ay({mode:"history",base:"/arteempatizar/",routes:X});var N=K;i["default"].config.productionTip=!1,new i["default"]({router:N,render:a=>a(C)}).$mount("#app")},7724:function(a,e,t){a.exports=t.p+"img/accessible-user-experience.9ae40fbd.webp"},8253:function(a,e,t){a.exports=t.p+"img/empatia.f4d7a209.jpg"}},e={};function t(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={exports:{}};return a[i].call(s.exports,s,s.exports,t),s.exports}t.m=a,function(){var a=[];t.O=function(e,i,n,s){if(!i){var o=1/0;for(u=0;u<a.length;u++){i=a[u][0],n=a[u][1],s=a[u][2];for(var r=!0,c=0;c<i.length;c++)(!1&s||o>=s)&&Object.keys(t.O).every((function(a){return t.O[a](i[c])}))?i.splice(c--,1):(r=!1,s<o&&(o=s));if(r){a.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=a.length;u>0&&a[u-1][2]>s;u--)a[u]=a[u-1];a[u]=[i,n,s]}}(),function(){t.d=function(a,e){for(var i in e)t.o(e,i)&&!t.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p="/arteempatizar/"}(),function(){var a={524:0};t.O.j=function(e){return 0===a[e]};var e=function(e,i){var n,s,o=i[0],r=i[1],c=i[2],l=0;if(o.some((function(e){return 0!==a[e]}))){for(n in r)t.o(r,n)&&(t.m[n]=r[n]);if(c)var u=c(t)}for(e&&e(i);l<o.length;l++)s=o[l],t.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return t.O(u)},i=self["webpackChunkarteempatizar"]=self["webpackChunkarteempatizar"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[504],(function(){return t(4315)}));i=t.O(i)})();
//# sourceMappingURL=app.40bfb870.js.map