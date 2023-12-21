(()=>{"use strict";var n,e,t,r,o,a,i,s,c,u,d,l,p,f,h={442:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n    --white: hsl(0, 0%, 100%);\n    --orange: hsl(25, 97%, 53%);\n    --light-grey: hsl(217, 12%, 63%);\n    --medium-grey: hsl(216, 12%, 54%);\n    --dark-blue: hsl(213, 19%, 18%);\n    --very-dark-blue: hsl(216, 12%, 8%);\n}\n",""]);const s=i},855:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\na {\n    text-decoration: none;\n}\n\nbutton {\n    outline: none;\n}\n\nul,\nli {\n    list-style: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-size: inherit;\n    font-weight: inherit;\n}\n\nimg,\nvideo {\n    max-width: 100%;\n    height: auto;\n}\n",""]);const s=i},908:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap);"]),i.push([n.id,'html {\n    font-size: 15px;\n    font-family: "Overpass", sans-serif;\n    font-weight: 400;\n}\n\np {\n    font-size: 1rem;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-weight: 700;\n}\n\nh1 {\n    font-size: 2.986rem;\n}\n\nh2 {\n    font-size: 2.488rem;\n}\n\nh3 {\n    font-size: 2.074rem;\n}\n\nh4 {\n    font-size: 1.728rem;\n}\n\nh5 {\n    font-size: 1.44rem;\n}\n\nh6 {\n    font-size: 1.2rem;\n}\n',""]);const s=i},340:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(855),c=t(442),u=t(908),d=i()(o());d.i(s.Z),d.i(c.Z),d.i(u.Z),d.push([n.id,"body {\n    background: var(--very-dark-blue);\n}\n",""]);const l=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),u=0;u<a.length;u++){var d=t(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},v={};function m(n){var e=v[n];if(void 0!==e)return e.exports;var t=v[n]={id:n,exports:{}};return h[n](t,t.exports,m),t.exports}m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),m.nc=void 0,n=m(379),e=m.n(n),t=m(795),r=m.n(t),o=m(569),a=m.n(o),i=m(565),s=m.n(i),c=m(216),u=m.n(c),d=m(589),l=m.n(d),p=m(340),(f={}).styleTagTransform=l(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals})();