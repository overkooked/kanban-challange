window.kb||(window.kb={}),window.kb.getHtml=function(n,t){const e=document.createElement("div");return e.classList.add(t),e.innerHTML=n,e},function(){const n=document.getElementById("kbAddCardBtnLink");let t=1;function e(t,e){let d=!1;t.querySelector(`button#kbCardActions${e}`).addEventListener("click",(function(){const a=t.querySelector(`#kbCardActionBtns${e}`);if(d)return function(n){for(;n.firstChild;)n.removeChild(n.firstChild)}(a),void(d=!1);const i=`<div class='kb-flex'>\n            <button id="kbEditTaskBtn${e}" class="kb-btn-link"> <i class="fas fa-edit"></i> Edit Card</button>\n            <button id="kbAddTaskBtn${e}" class="kb-btn-link"> <i class="fas fa-plus"></i> Add Task</button>\n            <button id="kbDeleteCardBtn${e}" class="kb-btn-link"> <i class="fas fa-trash-alt"></i> Delete Card</button>    \n            </div>\n            <div class='kb-flex-column kb-add-task-section' id='kbAddCardSection'></div>\n            `;a.innerHTML=i,a.querySelector(`#kbAddTaskBtn${e}`).addEventListener("click",(()=>{console.log(`kbAddTaskBtn${e} I am clicked`),function(t){const e="\n        <div class='kb-flex-column'>\n        <textarea id='kbTaskText' class='kb-add-task-name kb-input'></textarea>\n        <input type='date' id='kbTaskDate' class='kb-add-task-date kb-input' />\n        <select id='kbTaskPriority' class='kb-add-task-priority kb-input'>\n        <option value='1'>1</option>\n        <option value='2'>2</option>\n        <option value='3'>3</option>\n        <option value='4'>4</option>\n        <option value='5'>5</option>\n        </select>\n        </div>\n\n        <div class='kb-flex kb-add-btn-section'>\n        <button class='kb-btn kb-btn-blue' style='width: 100%' id='kbConfirmAddCard'>Add</button>\n        <span class='kb-spacer' style='width: 20px'></span>\n        <button class='kb-btn' style='width: 100%'  id='kbCancelAddCard'>Cancel</button>\n        </div>\n        ",d=kb.getHtml(e,"kb-add-section"),a=function(){const t=d.querySelector("#kbTaskText");t&&t.value,d.remove(),n.disabled=!1},i=function(){d.remove(),n.disabled=!1};d.querySelector("#kbConfirmAddCard").addEventListener("click",a),d.querySelector("#kbCancelAddCard").addEventListener("click",i),t.querySelector("#kbAddCardSection").append(d),n.disabled=!0}(a)})),a.querySelector(`#kbDeleteCardBtn${e}`).addEventListener("click",(()=>{console.log(`kbDeleteCardBtn${e} I am clicked`),t.remove()})),d=!0}))}n.addEventListener("click",(function(){const d=document.getElementById("kbAddConfirmSection"),a=kb.getHtml("\n        <div class='kb-flex'>\n        <textarea id='kbAddCardText' class='kb-add-card-name kb-flex kb-input'></textarea>\n        </div>\n\n        <div class='kb-flex kb-add-btn-section'>\n        <button class='kb-btn kb-btn-blue' style='width: 100%' id='kbConfirmAddCard'>Add</button>\n        <span class='kb-spacer' style='width: 20px'></span>\n        <button class='kb-btn' style='width: 100%'  id='kbCancelAddCard'>Cancel</button>\n        </div>\n        ","kb-add-section");a.querySelector("#kbConfirmAddCard").addEventListener("click",(function(){const d=a.querySelector("#kbAddCardText");!function(n){let d=t;const a=`\n        <div class='kb-card-header'>\n        ${n}\n\n        <button id="kbCardActions${d}" class="kb-btn-link"> <i class="fas fa-ellipsis-h"></i></button>\n        </div>\n        <div class='kb-card-add-task-action kb-flex-column' id='kbCardActionBtns${d}'>\n        \n          </div>\n        <div class='kb-card-body'></div>\n        `,i=document.getElementById("kbCardContainer"),s=kb.getHtml(a,"kb-card");e(s,d),t++,i.append(s)}(d&&d.value),a.remove(),n.disabled=!1})),a.querySelector("#kbCancelAddCard").addEventListener("click",(function(){a.remove(),n.disabled=!1})),d.appendChild(a),n.disabled=!0}))}(),async function(){const n=await fetch("../data/version.json"),t=await n.json(),e=document.getElementById("kbVersionList"),d=location.pathname&&location.pathname.split("/")[1];t.forEach((n=>{const t=document.createElement("option");t.value=n,t.innerText=n,t.selected=n===d,e.append(t)})),e.addEventListener("change",(n=>{console.log(n.target.value);const t=n.target.value;t&&-1===location.pathname.indexOf(t)&&window.location.assign(`${location.origin}/${t}/`)}))}();
//# sourceMappingURL=index.56f36cab.js.map