window.kb||(window.kb={}),window.kb.getHtml=function(n,t){const e=document.createElement("div");return e.classList.add(t),e.innerHTML=n,e},function(){const n=document.getElementById("kbAddCardBtnLink");let t=1;function e(n){let e=t;const d=`\n        <div class='kb-card-header'>\n        ${n}\n\n        <button id="kbCardActions${e}" class="kb-btn-link"> <i class="fas fa-ellipsis-h"></i></button>\n        </div>\n        <div class='kb-card-add-task-action' id='kbCardActionBtns${e}'>\n        \n          </div>\n        <div class='kb-card-body'></div>\n        `,a=document.getElementById("kbCardContainer"),i=kb.getHtml(d,"kb-card");!function(n,t){let e=!1;n.querySelector(`button#kbCardActions${t}`).addEventListener("click",(function(){const d=n.querySelector(`#kbCardActionBtns${t}`);if(e)return function(n){for(;n.firstChild;)n.removeChild(n.firstChild)}(d),void(e=!1);const a=`\n            <button id="kbAddTaskBtn${t}" class="kb-btn-link"> <i class="fas fa-plus"></i> Add Task</button>\n            <button id="kbDeleteCardBtn${t}" class="kb-btn-link"> <i class="fas fa-trash-alt"></i> Delete Card</button>    \n            `;d.innerHTML=a,d.querySelector(`#kbAddTaskBtn${t}`).addEventListener("click",(()=>{console.log(`kbAddTaskBtn${t} I am clicked`)})),d.querySelector(`#kbDeleteCardBtn${t}`).addEventListener("click",(()=>{console.log(`kbDeleteCardBtn${t} I am clicked`),n.remove()})),e=!0}))}(i,e),t++,a.append(i)}n.addEventListener("click",(function(){const t=document.getElementById("kbAddConfirmSection"),d=kb.getHtml("\n        <div class='kb-flex'>\n        <textarea id='kbAddCardText' class='kb-add-card-name kb-flex kb-input'></textarea>\n        </div>\n\n        <div class='kb-flex kb-add-btn-section'>\n        <button class='kb-btn kb-btn-blue' style='width: 100%' id='kbConfirmAddCard'>Add</button>\n        <span class='kb-spacer' style='width: 20px'></span>\n        <button class='kb-btn' style='width: 100%'  id='kbCancelAddCard'>Cancel</button>\n        </div>\n        ","kb-add-section");d.querySelector("#kbConfirmAddCard").addEventListener("click",(function(){const t=d.querySelector("#kbAddCardText");e(t&&t.value),d.remove(),n.disabled=!1})),d.querySelector("#kbCancelAddCard").addEventListener("click",(function(){d.remove(),n.disabled=!1})),t.appendChild(d),n.disabled=!0}))}(),async function(){const n=await fetch("../data/version.json"),t=await n.json(),e=document.getElementById("kbVersionList"),d=location.pathname&&location.pathname.split("/")[1];t.forEach((n=>{const t=document.createElement("option");t.value=n,t.innerText=n,t.selected=n===d,e.append(t)})),e.addEventListener("change",(n=>{console.log(n.target.value);const t=n.target.value;t&&-1===location.pathname.indexOf(t)&&window.location.assign(`${location.origin}/${t}/`)}))}();
//# sourceMappingURL=index.8ccec980.js.map
