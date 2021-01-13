(()=>{"use strict";var t={890:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(645),i=n.n(o)()((function(t){return t[1]}));i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap);"]),i.push([t.id,"body {\n  box-sizing: border-box;\n  background-color: teal;\n  font-size: 1.3rem;\n  font-family: 'Caveat', cursive;\n  margin: 0;\n}\n\nmain {\n  display: flex;\n}\n\n/* Project sections */\n.project-display-container {\n  width: 40%;\n  padding: 40px;\n  height: 100vh;\n  background-color: #00aeae;\n}\n\n.project-add-container {\n  margin: 50px 0 30px 0;\n}\n\n.project-container {\n  display: flex;\n  align-items: center;\n  margin: 15px 0;\n  padding: 10px 0;\n}\n\n.project-title {\n  margin: 0 20px;\n  cursor: pointer;\n}\n\n.project-add-input {\n  width: 70%;\n  height: 20px;\n}\n\n.project-add-btn {\n  cursor: pointer;\n  background-color: #fff;\n  padding: 1rem;\n  margin: 10px 0;\n  font-size: 1rem;\n  border-radius: 45px;\n}\n\n.project-add-btn:hover {\n  border-color: rgba(255, 255, 255, 1);\n}\n\n.current {\n  border-bottom: 2px solid #fff;\n}\n\n/* Todo Add button */\n\n.add-todo-btn {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  background-color: #fff;\n  border: 1px solid #000;\n  border-radius: 50%;\n  cursor: pointer;\n  text-align: center;\n  font-size: 34px;\n}\n\n.add-container {\n  padding: 15px;\n  border: 1px solid #000;\n}\n\n/* todo section */\n\n.todo-display-container {\n  padding: 50px;\n  width: 100%;\n}\n\n.todo-container {\n  display: flex;\n  align-items: center;\n  margin: 18px 0;\n  width: 100%;\n}\n\n.todo-container > div {\n  margin: 0 10px;\n}\n\n.priority-display {\n  margin: 0 10px 0 5px;\n}\n\n.todo-container > button {\n  width: 80px;\n}\n\n.finish-btn {\n  margin-left: 3rem;\n}\n\n.done {\n  text-decoration: line-through;\n}\n\n.btn {\n  font-size: 1.2rem;\n  padding: 5px 10px;\n  margin: 0 5px;\n  background-color:#fff;\n  border-radius: 15px;\n  cursor: pointer;\n  font-family: 'Caveat', cursive;\n}\n\n/* popup display section */\n.popup-display-container {\n  width: 100%;\n  height: 100%;\n  margin: 80px 20px;\n  background-color: yellow;\n}\n\n/* Toggle */\n\n.close-btn {\n  display: flex;\n  width: 30px;\n  height: 30px;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  cursor: pointer;\n  position: relative;\n  left: 350px;\n  bottom: 65px;\n}\n\n.input-container {\n  margin: 10px 0;\n  font-size: 1.4rem;\n}\n\n.input {\n  width: 100%;\n  font-size: 1.2rem;\n  padding: 10px 0 10px 5px;\n}\n\ninput[type=\"text\"] {\n  width: 80%;\n  font-size: 0.9em;\n  border-radius: 7px;\n  padding-top: 0.5rem;\n}\n\n.add-btn {\n  background-color: #fff;\n  border-radius: 45px;\n  cursor: pointer;\n  margin-top: 30px;\n  padding: 10px 15px;\n  font-size: 1.3rem;\n}\n",""]);const r=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(i[d]=!0)}for(var s=0;s<t.length;s++){var a=[].concat(t[s]);o&&i[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),e.push(a))}},e}},379:(t,e,n)=>{var o,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),r=[];function d(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},o=[],i=0;i<t.length;i++){var s=t[i],a=e.base?s[0]+e.base:s[0],c=n[a]||0,l="".concat(a," ").concat(c);n[a]=c+1;var u=d(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:l,updater:f(p,e),references:1}),o.push(l)}return o}function a(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var d=i(t.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(e)}return e}var c,l=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function u(t,e,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=l(e,i);else{var r=document.createTextNode(i),d=t.childNodes;d[e]&&t.removeChild(d[e]),d.length?t.insertBefore(r,d[e]):t.appendChild(r)}}function p(t,e,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,m=0;function f(t,e){var n,o,i;if(e.singleton){var r=m++;n=h||(h=a(e)),o=u.bind(null,n,r,!1),i=u.bind(null,n,r,!0)}else n=a(e),o=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var i=d(n[o]);r[i].references--}for(var a=s(t,e),c=0;c<n.length;c++){var l=d(n[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=a}}}}},e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),o=n(890);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const i=class{static getProjects(){let t=[{title:"Default",todos:[]}];return localStorage.getItem("todoApp")||localStorage.setItem("todoApp",JSON.stringify(t)),t=JSON.parse(localStorage.getItem("todoApp")),t}static saveProject(t){const e=JSON.parse(localStorage.getItem("todoApp"));e.push(t),localStorage.setItem("todoApp",JSON.stringify(e))}static removeProject(t){const e=JSON.parse(localStorage.getItem("todoApp")),n=document.querySelector(".todos-container"),o=e.findIndex((e=>e.title===t));e.splice(o,1),localStorage.setItem("todoApp",JSON.stringify(e)),n.innerHTML="Project deleted, please choose other project"}static getTodos(t){return this.getProjects()[t].todos}static saveTodo(t,e){const n=this.getProjects();n[e].todos.push(t),localStorage.setItem("todoApp",JSON.stringify(n))}static removeTodo(t,e){const n=this.getProjects();n[t].todos.splice(e,1),localStorage.setItem("todoApp",JSON.stringify(n))}static modifyTodo(t,e,...n){const o=this.getProjects(),i=[...n];o[t].todos[e]={title:`${i[0]}`,priority:`${i[1]}`,due:`${i[2]}`,done:i[3]},localStorage.setItem("todoApp",JSON.stringify(o))}},r=document.querySelector(".todos-container"),d=t=>{const e=document.querySelectorAll(".project-container");e.forEach((t=>t.classList.remove("current"))),e[t].classList.add("current")},s=(t=0)=>{const e=i.getTodos(t);if(r.innerHTML="",d(t),e.length>0)e.forEach(((t,e)=>{const n=new l(t.title,t.due,t.priority,e,t.done);r.appendChild(n.div)}));else{const t=document.createElement("div");t.textContent="Empty Todo List",r.appendChild(t)}},a=()=>{document.querySelectorAll(".project-title").forEach((t=>{t.addEventListener("click",(()=>{const e=t.parentElement.getAttribute("data-index");-1!==e&&(d(e),s(e))}))}))};class c{constructor(t,e,n){this.title=t,this.due=e,this.priority=n,this.done=!1}}class l{constructor(t,e,n,o,i){this.title=t,this.due=e,this.priority=n,this.index=o,this.done=i,this.div=document.createElement("div"),this.priorityDiv=document.createElement("div"),this.titleDiv=document.createElement("div"),this.dueDiv=document.createElement("div"),this.checkButton=document.createElement("button"),this.modifyButton=document.createElement("button"),this.deleteButton=document.createElement("button"),this.div.classList.add("todo-container"),this.priorityDiv.classList.add("priority-display"),this.titleDiv.classList.add("title-display"),this.dueDiv.classList.add("due-display"),this.checkButton.classList.add("btn","finish-btn"),this.modifyButton.classList.add("btn","modify-btn"),this.deleteButton.classList.add("btn","delet-btn"),this.done?this.div.classList.add("done"):this.div.classList.remove("done"),this.priorityDiv.textContent=n,this.titleDiv.textContent=t,this.dueDiv.textContent=e,this.checkButton.textContent="Check",this.modifyButton.textContent="Modify",this.deleteButton.textContent="Delete",this.div.setAttribute("data-index",o),this.checkButton.onclick=this.onClickCheck.bind(this),this.modifyButton.onclick=this.onClickModify.bind(this),this.deleteButton.onclick=this.onClickDelete.bind(this),this.div.appendChild(this.priorityDiv),this.div.appendChild(this.titleDiv),this.div.appendChild(this.dueDiv),this.div.appendChild(this.checkButton),this.div.appendChild(this.modifyButton),this.div.appendChild(this.deleteButton)}onClickCheck(){const t=document.querySelector(".todos-container");let e;document.querySelectorAll(".project-container").forEach((t=>{t.classList.contains("current")&&(e=t.getAttribute("data-index"))}));const n=i.getTodos(e)[this.index];i.modifyTodo(e,this.index,n.title,n.priority,n.due,!n.done),n.done?t.querySelector(`[data-index='${this.index}']`).classList.remove("done"):t.querySelector(`[data-index='${this.index}']`).classList.add("done")}onClickModify(){const t=document.querySelectorAll(".project-container"),e=document.querySelector(".popup-display-container");let n;if(t.forEach((t=>{t.classList.contains("current")&&(n=t.getAttribute("data-index"))})),u(),h(),!p)return;const o=document.querySelector(".input-form"),r=document.getElementById("title"),d=document.getElementById("date"),a=document.getElementById("priority"),c=i.getTodos(n)[this.index];r.value=c.title,d.value=c.due,a.value=c.priority,o.addEventListener("submit",(t=>{t.preventDefault(),i.modifyTodo(n,this.index,r.value,a.value,d.value,c.done),s(n),e.innerHTML=""}))}onClickDelete(){const t=document.querySelector(".todo-display-container");let e;document.querySelectorAll(".project-container").forEach((t=>{t.classList.contains("current")&&(e=t.getAttribute("data-index"))})),i.removeTodo(e,this.index),t.querySelector(`[data-index='${this.index}']`).remove()}}const u=()=>{document.querySelector(".popup-display-container").innerHTML='\n        <div class="add-container">\n            <h2>New Todo</h2>\n            <div class="close-btn">X</div>\n            <form class="input-form">\n                <div class="input-container">\n                    <label for="title" class="input-label">Todo:</label>\n                    <input type="text" name="title" class="input" id="title" required/>\n                </div>\n\n                <div class="input-container">\n                    <label for="date" class="input-label">Due:</label>\n                    <input type="date" name="date" id="date" class="input" required />\n                </div>\n                <input type="date" id="due-date" name="due-date" required /><br />\n                <div class="input-container">\n                    <label for="priority" class="input-label">Priority:</label>\n                    <select class="input" name="priority" id="priority">\n                        <option class="input" value="high">High</option>\n                        <option class="input" value="medium">Medium</option>\n                        <option class="input" value="low">Low</option>\n                    </select>\n                </div>\n\n                <button class="add-btn" id="add-todo" role="add-todo">Add New</button>\n            </form>\n        </div>\n    '},p=()=>!!document.getElementById("title").value.trim(),h=()=>{const t=document.querySelector(".close-btn"),e=document.querySelector(".popup-display-container");t.addEventListener("click",(()=>{e.innerHTML=""}))};class m{constructor(t,e=[]){this.title=t,this.todos=e}}class f{constructor(t,e){this.title=t,this.index=e,this.div=document.createElement("div"),this.h3=document.createElement("h3"),this.deleteButton=document.createElement("button"),this.div.classList.add("project-container"),this.h3.classList.add("project-title"),this.deleteButton.classList.add("btn","project-delet-btn"),this.div.setAttribute("data-index",e),this.h3.textContent=t,this.deleteButton.textContent="Delete",this.deleteButton.onclick=this.onClickDelete.bind(this),this.div.appendChild(this.h3),this.div.appendChild(this.deleteButton)}onClickDelete(){const t=document.querySelector(".project-display-container");i.getProjects().length>1&&(i.removeProject(this.title),t.querySelector(`[data-index='${this.index}']`).remove())}}const v=document.getElementById("project-add-form");i.getProjects(),document.querySelector(".add-todo-btn").addEventListener("click",(()=>{u(),(()=>{const t=document.querySelector(".input-form"),e=document.getElementById("title"),n=document.getElementById("date"),o=document.getElementById("priority"),r=document.querySelectorAll(".project-container"),d=document.querySelector(".popup-display-container");let a;t.addEventListener("submit",(t=>{if(t.preventDefault(),r.forEach((t=>{t.classList.contains("current")&&(a=t.getAttribute("data-index"))})),p()){const t=new c(e.value.trim(),n.value,o.value);i.saveTodo(t,a),s(a),d.innerHTML=""}}))})(),h()})),v.addEventListener("submit",(t=>{t.preventDefault(),(()=>{const t=document.querySelector(".project-display-container"),e=document.getElementById("project-add").value.trim(),n=i.getProjects().length,o=new m(e),r=new f(e,n);i.saveProject(o),t.appendChild(r.div),a(),document.getElementById("project-add").value=""})()})),(()=>{const t=document.querySelector(".project-display-container");i.getProjects().forEach(((e,n)=>{const o=new f(e.title,n);t.appendChild(o.div)}))})(),s(),a()})()})();