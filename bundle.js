(()=>{"use strict";var n={442:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"* {\n    --white: #ffffff;\n    --orange: #fb7413;\n    --light-grey: #959eac;\n    --medium-grey: #7c8798;\n    --dark-blue-2: #262f38;\n    --dark-blue: #171e28;\n    --very-dark-blue: #141519;\n}\n",""]);const s=a},855:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\na {\n    text-decoration: none;\n}\n\nbutton {\n    outline: none;\n}\n\nul,\nli {\n    list-style: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-size: inherit;\n    font-weight: inherit;\n}\n\nimg,\nvideo {\n    max-width: 100%;\n    height: auto;\n}\n",""]);const s=a},908:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap);"]),a.push([n.id,'html {\n    font-size: 15px;\n    font-family: "Overpass", sans-serif;\n    font-weight: 400;\n}\n\np {\n    font-size: 1rem;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-weight: 700;\n}\n\nh1 {\n    font-size: 2.986rem;\n}\n\nh2 {\n    font-size: 2.488rem;\n}\n\nh3 {\n    font-size: 2.074rem;\n}\n\nh4 {\n    font-size: 1.728rem;\n}\n\nh5 {\n    font-size: 1.44rem;\n}\n\nh6 {\n    font-size: 1.2rem;\n}\n',""]);const s=a},340:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),s=t(855),d=t(442),l=t(908),c=a()(r());c.i(s.Z),c.i(d.Z),c.i(l.Z),c.push([n.id,"body {\n    --system-base: calc((1rem / 2) * 1.06);\n    background: var(--very-dark-blue);\n    min-height: 100vh;\n    width: 100vw;\n}\n\nbody main {\n    min-height: inherit;\n    min-width: inherit;\n    padding: 0 calc(var(--system-base) * 3);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nbody main section {\n    min-height: 21rem;\n    max-width: 25rem;\n    padding: calc(var(--system-base) * 3);\n    color: var(--light-grey);\n    background: var(--dark-blue);\n    background-image: linear-gradient(\n        to top,\n        #171e28,\n        #19202a,\n        #1a212b,\n        #1c232d,\n        #1e252f\n    );\n    border-radius: 16px;\n}\n\n/* Voting Element | START */\nbody main section .voting-element {\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--system-base) * 4);\n}\n\nbody main section .voting-element .voting-element-header {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\nbody main section .voting-element .voting-element-header h4 {\n    color: var(--white);\n}\n\nbody main section .voting-element .voting-element-header p {\n    color: var(--light-grey);\n    line-height: 1.6rem;\n}\n\nbody main section .voting-element .voting-element-header svg {\n    padding: 12px;\n    border-radius: 50%;\n    background: var(--dark-blue-2);\n}\n\nbody main section .voting-element .voting-element-form {\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n    box-sizing: border-box;\n}\n\nbody main section .voting-element .voting-element-form-items {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\nbody main section .voting-element .voting-element-form-items div label {\n    background: var(--dark-blue-2);\n    line-height: 0.8;\n    padding: 8px 16px;\n    padding-top: 10px;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\nbody main section .voting-element .voting-element-form-items div label:hover {\n    background: var(--orange);\n    color: var(--white);\n    transition: background ease-in-out 200ms;\n}\n\n.selected {\n    background: var(--light-grey) !important;\n    color: var(--white) !important;\n}\n\nbody main section .voting-element .voting-element-form-submit {\n    display: flex;\n    width: 100%;\n}\n\nbody main section .voting-element .voting-element-form-submit button {\n    width: inherit;\n    color: var(--white);\n    background: var(--orange);\n    border: none;\n    text-transform: uppercase;\n    font-weight: 700;\n    padding: 16px 0px;\n    border-radius: 24px;\n    cursor: pointer;\n    letter-spacing: 0.1rem;\n    transition: background ease-in-out 200ms;\n}\n\n.disabled {\n    background: var(--dark-blue-2) !important;\n    color: var(--dark-grey) !important;\n    cursor: not-allowed !important;\n}\n\n.disabled:hover {\n    background: var(--dark-blue-2) !important;\n    color: var(--dark-grey) !important;\n    cursor: not-allowed !important;\n}\n\nbody main section .voting-element .voting-element-form-submit button:hover {\n    background: var(--white);\n    color: var(--orange);\n}\n\n/* Voting Element | END */\n\n/* Voting Message | START */\nbody main section .voting-message {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    align-items: center;\n    text-align: center;\n    display: none;\n}\n\nbody main section .voting-message .voting-message-header {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n}\n\nbody main section .voting-message .voting-message-header p {\n    background: var(--dark-blue);\n    padding: 8px 16px;\n    border-radius: 16px;\n    color: var(--orange);\n    box-shadow: var(--very-dark-blue) 3px 2px 8px 2px;\n}\n\nbody main section .voting-message .voting-message-body {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\nbody main section .voting-message .voting-message-body h3 {\n    color: var(--white);\n}\nbody main section .voting-message .voting-message-body p {\n    line-height: 1.6rem;\n}\n/* Voting Message | END */\n",""]);const m=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],l=o.base?d[0]+o.base:d[0],c=i[l]||0,m="".concat(l," ").concat(c);i[l]=c+1;var u=t(m),g={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var p=r(g,o);o.byIndex=s,e.splice(s,0,{identifier:m,updater:p,references:1})}a.push(m)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=o(n,r),l=0;l<i.length;l++){var c=t(i[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),s=t(565),d=t.n(s),l=t(216),c=t.n(l),m=t(589),u=t.n(m),g=t(340),p={};p.styleTagTransform=u(),p.setAttributes=d(),p.insert=a().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=c(),e()(g.Z,p),g.Z&&g.Z.locals&&g.Z.locals;let v=document.getElementById("myForm"),f=v.getElementsByTagName("label"),h=v.getElementsByTagName("input"),b=document.getElementById("submitButton"),y=document.getElementById("votingElement"),x=document.getElementById("votingMessage"),w=0,k=document.getElementById("ratingResult");for(let n=0;n<f.length;n++)f[n].addEventListener("click",E);function E(){let n=event.target.nextElementSibling.value;0!=w&&w!=n&&h[w-1].previousElementSibling.classList.remove("selected"),b.removeAttribute("disabled"),b.classList.remove("disabled"),event.target.classList.add("selected"),w=n}v.addEventListener("submit",(function(){event.preventDefault(),0!=w&&(y.style.display="none",x.style.display="flex",k.innerHTML=w)}))})()})();