(this["webpackJsonpart-gallery"]=this["webpackJsonpart-gallery"]||[]).push([[0],{32:function(e,a,t){e.exports=t(68)},37:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){e.exports=t.p+"static/media/logo.0fa74170.png"},45:function(e,a,t){},56:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){e.exports=t.p+"static/media/music.b1933435.mp3"},68:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(28),o=t.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(5),i=(t(37),t(6)),s=t.n(i),u=t(8),m=t(29),d=t.n(m),f=t(69),h=(t(42),t(43),function(e){var a=Object(n.useState)(e.search),t=Object(l.a)(a,2),c=t[0],o=t[1];Object(n.useEffect)((function(){o(e.search.charAt(0).toUpperCase()+e.search.slice(1))}),[e.search]);return r.a.createElement("div",{id:"searchContainer",className:"search-container"},r.a.createElement("i",{id:"searchIcon",className:"fa fa-search search-icon"}),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.handleSearch(c)}},r.a.createElement("input",{id:"searchInput",className:"search-input",onChange:function(a){var t=a.target.value.substr(0,30).toLowerCase();o(t),e.handleSearch(t)},placeholder:"Search",value:c})),r.a.createElement("i",{className:c?"fas fa-times delete-icon show":"fas fa-times delete-icon hide",onClick:function(){o(""),e.handleSearch("")}}))}),v=function(e){var a=Object(n.useState)(e.search),c=Object(l.a)(a,2),o=(c[0],c[1]),i=Object(n.useCallback)((function(a){o(e),e.handleNavSearch(a)}),[]);return r.a.createElement("div",{id:"navContainer",className:"nav-container"},r.a.createElement("div",{id:"logoContainer",className:"logo-container"},r.a.createElement("img",{id:"logoImage",className:"logo-image",alt:"logo",src:t(44)})),r.a.createElement(h,{search:e.search,handleSearch:i}),r.a.createElement("div",{id:"iconsContainer",className:"icons-container"},r.a.createElement("div",{id:"homeIconContainer",className:"icon-container"},r.a.createElement("a",{href:"https://www.facebook.com/zozorender3d",target:"_blank"},r.a.createElement("i",{id:"home",className:"fa fa-home icon bar-icon"}))),r.a.createElement("div",{id:"contactIconContainer",className:"icon-container"},r.a.createElement("a",{href:"https://audition-plth.onrender.com/",target:"_blank"},r.a.createElement("i",{class:"fa-solid fa-gamepad icon bar-icon"})))))},E=(t(45),t(15)),g=t.n(E);try{g.a.initializeApp({apiKey:"AIzaSyBbkn86NAs0iCCE6i3dMjxctS-r93_d50s",authDomain:"artgallery-4c02e.firebaseapp.com",databaseURL:"https://artgallery-4c02e.firebaseio.com",projectId:"artgallery-4c02e",storageBucket:"artgallery-4c02e.appspot.com",messagingSenderId:"955387804026",appId:"1:955387804026:web:d9fa5f3954d08b61983ec3",measurementId:"G-E986Y4Q017"})}catch(D){/already exists/.test(D.message)}g.a.database(),new g.a.auth.GoogleAuthProvider,g.a.auth(),g.a,t(56);function p(e){var a=e.currentCard;return r.a.createElement("div",{id:"cardContainer",className:"card-container card-border"},r.a.createElement("div",{className:"card-image-container"},r.a.createElement("img",{id:"cardImage",className:"card-image",alt:a.title,src:a.url})),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{id:"cardTitleContainer",className:"items card-title-container"},r.a.createElement("p",{id:"cardTitle"},a.title),r.a.createElement("hr",null)),r.a.createElement("div",{id:"cardDateContainer",className:"items card-date-container"},r.a.createElement("p",{id:"cardDate"},a.created_at))))}var b=function(e){return r.a.createElement("li",{onClick:function(a){a.preventDefault();var t=e.currentCard;e.handleClickedCard(t)}},r.a.createElement(p,{currentCard:e.currentCard}))},O="https://server-gallery-react.onrender.com",C=function(e){var a=Object(n.useState)([]),t=Object(l.a)(a,2),c=t[0],o=t[1],i=Object(n.useState)(!0),m=Object(l.a)(i,2),d=m[0],h=m[1],v=Object(n.useState)([]),E=Object(l.a)(v,2),g=(E[0],E[1]),p=Object(n.useCallback)((function(a){var t=a;g(t),e.handleGalleryClickedCard(t)}),[]);Object(n.useEffect)((function(){var e=setInterval(function(){var a=Object(u.a)(s.a.mark((function a(){var t;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(O+"/status");case 3:return t=a.sent,a.next=6,t.json();case 6:"ready"===a.sent.status&&(console.log("thanh cong"),clearInterval(e),h(!1)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.error("Error checking server status:",a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(){return a.apply(this,arguments)}}(),2e3);return function(){return clearInterval(e)}}),[]),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get(O+"/images");case 3:a=e.sent,h(!1),o(a.data),console.log(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching images:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[d]);var C=function(e,a,t){var n,c=Object.values(a);n=e?function(e,a){return e.filter((function(e){var t=-1!==e.title.toLowerCase().indexOf(a),n=!1;return!t&&e.tags&&e.tags.filter((function(e){n||(n=-1!==e.toLowerCase().indexOf(a))})),t||n}))}(c,e):c;return n.map((function(e){return r.a.createElement(b,{currentCard:e,key:e.id.toString(),handleClickedCard:t})}))}(e.search,c,p);return r.a.createElement("div",{id:"galleryContainer",className:"gallery-container"},r.a.createElement("ul",{id:"gallery",className:"gallery\r "},d?r.a.createElement("span",{class:"loader"}):C),r.a.createElement("p",{id:"cardsCounter",className:"cards-counter"},C.length," items found"))};t(63);var N=function(){return r.a.createElement("a",{href:"#"},r.a.createElement("div",{className:"arrow-container"},r.a.createElement("div",{className:"round"},r.a.createElement("i",{className:"fa fa-angle-up arrow"}),r.a.createElement("i",{className:"fa fa-angle-up arrow bottom-arrow"}))))},j=t(30),w=(t(64),t(25)),k=function(e){var a=e.card;console.log(a);var t=Object(n.useState)(""),c=Object(l.a)(t,2),o=(c[0],c[1]),i=Object(n.useCallback)((function(a){o(a),e.handleTagSearch(a)}),[]),s=function(e,a){return e.map((function(e){return r.a.createElement(y,{currentTag:e,key:e,handleTagSearch:a})}))}(a.tags,i);return r.a.createElement("div",{className:"zoom-container"},r.a.createElement(S,{card:a}),r.a.createElement("div",{id:"detailsContainer",className:"details-container"},r.a.createElement("p",{id:"title",className:"title"},a.title),r.a.createElement("hr",null),r.a.createElement("p",{id:"description"},a.description),r.a.createElement("p",{id:"date",className:"date"},"\u2013 ",a.created_at),r.a.createElement("ul",null,s)))};function y(e){var a=Object(n.useState)(""),t=Object(l.a)(a,2),c=(t[0],t[1]),o=Object(n.useState)(e.currentTag.toString()),i=Object(l.a)(o,2),s=i[0];i[1];return r.a.createElement("li",{className:"tag",onClick:function(a){a.preventDefault(),c(s),e.handleTagSearch(s)}},"#",s)}function S(e){var a=e.card;return r.a.createElement("div",{id:"imageContainer",className:"image-container"},r.a.createElement(w.b,null,(function(e){var t=e.zoomIn,n=e.zoomOut,c=e.resetTransform;Object(j.a)(e,["zoomIn","zoomOut","resetTransform"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"image-wrapper"},r.a.createElement(w.a,null,r.a.createElement("img",{id:"image",className:"image",src:a.url,alt:a.title}))),r.a.createElement("div",{className:"tools"},r.a.createElement("button",{className:"zoom-in-btn",onClick:t},r.a.createElement("i",{className:"fas fa-search-plus zoom-in-icon"})),r.a.createElement("button",{className:"zoom-out-btn",onClick:n},r.a.createElement("i",{className:"fas fa-search-minus zoom-out-icon"})),r.a.createElement("button",{className:"zoom-reset-btn",onClick:c},r.a.createElement("i",{className:"fas fa-expand zoom-reset-icon"}))))})))}t(65);var x=function(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),c=t[0],o=t[1],i=Object(n.useState)(""),m=Object(l.a)(i,2),h=m[0],E=m[1],g=Object(n.useState)([]),p=Object(l.a)(g,2),b=p[0],j=p[1],w=Object(n.useState)(!1),y=Object(l.a)(w,2),S=y[0],x=y[1];Object(n.useEffect)((function(){e.windowWidth<501?(console.log("narrow"),x(!1)):x(!0)}),[e.windowWidth]);var z=Object(n.useCallback)((function(e){E(e)}),[]),I=Object(n.useCallback)((function(e){o(!1),E(e.toLowerCase())}),[]),A=Object(n.useCallback)((function(e){var a=e.id;console.log("from recieveCardDetails",a),function(e){T.apply(this,arguments)}(a)}),[]);function T(){return(T=Object(u.a)(s.a.mark((function e(a){var t,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.prev=1,e.next=4,f.a.get("".concat(O,"/images/").concat(a),{headers:{Authorization:"Basic ".concat(btoa("0Ag49RB9uUxpHCw-KHR-yxHK6yI"))}});case 4:r=e.sent,c={id:r.data.id,url:r.data.url,title:r.data.title||"No title",description:r.data.description||"No description",tags:(null===(t=r.data.context)||void 0===t||null===(n=t.custom)||void 0===n?void 0:n.tags)||[],created_at:new Date(r.data.created_at).toLocaleString()},j(c),console.log(b),o(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("Error fetching card details from Cloudinary:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return r.a.createElement("div",{id:"ArtGallery",className:"wide-art-gallery"},r.a.createElement("div",{className:c?S?"art-gallery-background avoid-clicks":"art-gallery-background avoid-clicks no-scroll":""},r.a.createElement(v,{search:h,handleNavSearch:z}),r.a.createElement(C,{search:h,handleGalleryClickedCard:A}),S&&c&&r.a.createElement(d.a,null)),void 0!==b&&0!==b.length&&c?r.a.createElement("div",{className:S?"zoom-card-wide":"zoom-card-narrow"},r.a.createElement("i",{className:"fas fa-times exit-icon",onClick:function(){return o(!1)}}),r.a.createElement(k,{card:b,handleTagSearch:I})):r.a.createElement(N,null))},z=(t(66),function(){var e=Object(n.useState)(new Audio(t(67))),a=Object(l.a)(e,1)[0],c=Object(n.useState)(!0),o=Object(l.a)(c,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){}),[a]),r.a.createElement("div",null,i&&r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("p",null,"Click OK to play music!"),r.a.createElement("button",{onClick:function(){console.log(a.play()),a.loop=!0,a.play().catch((function(e){console.error("Error playing audio:",e)})),s(!1)}},"OK"))))});function I(){var e=function(){var e=Object(n.useState)(A()),a=Object(l.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){function e(){r(A())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}(),a=(e.height,e.width);return r.a.createElement("div",{className:"App"},r.a.createElement(z,null),r.a.createElement(x,{windowWidth:a}))}function A(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var T=document.getElementById("root");o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),T),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.458d6433.chunk.js.map