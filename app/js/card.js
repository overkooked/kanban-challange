
(function () {

    const addBtn = document.getElementById('kbAddCardBtnLink');
    let count = 1;

    function toggleCardActions(card, id) {
        let hasActionSectionOpen = false;
        function cardActions() {
            const actionsDiv = card.querySelector(`#kbCardActionBtns${id}`);
            if (hasActionSectionOpen) {
                removeAllChildNodes(actionsDiv);
                hasActionSectionOpen = false;
                return;
            }

            const actionHtml = `
            <button id="kbAddTaskBtn${id}" class="kb-btn-link"> <i class="fas fa-plus"></i> Add Task</button>
            <button id="kbDeleteCardBtn${id}" class="kb-btn-link"> <i class="fas fa-trash-alt"></i> Delete Card</button>    
            `
            actionsDiv.innerHTML = actionHtml;
            actionsDiv.querySelector(`#kbAddTaskBtn${id}`).addEventListener('click', () => {
                console.log(`kbAddTaskBtn${id} I am clicked`);
            });

            actionsDiv.querySelector(`#kbDeleteCardBtn${id}`).addEventListener('click', () => {
                console.log(`kbDeleteCardBtn${id} I am clicked`);
                card.remove();
            });

            hasActionSectionOpen = true;

        }
        card.querySelector(`button#kbCardActions${id}`).addEventListener('click', cardActions);
    }


    function addCard(text) {

        let counter = count;
        const cardHtml = `
        <div class='kb-card-header'>
        ${text}

        <button id="kbCardActions${counter}" class="kb-btn-link"> <i class="fas fa-ellipsis-h"></i></button>
        </div>
        <div class='kb-card-add-task-action' id='kbCardActionBtns${counter}'>
        
          </div>
        <div class='kb-card-body'></div>
        `

        const kbCardContainer = document.getElementById('kbCardContainer');
        const card = kb.getHtml(cardHtml, 'kb-card');

        toggleCardActions(card, counter);

        count++;
        kbCardContainer.append(card);
    }

    function showCardAddSection() {
        const html = `
        <div class='kb-flex'>
        <textarea id='kbAddCardText' class='kb-add-card-name kb-flex kb-input'></textarea>
        </div>

        <div class='kb-flex kb-add-btn-section'>
        <button class='kb-btn kb-btn-blue' style='width: 100%' id='kbConfirmAddCard'>Add</button>
        <span class='kb-spacer' style='width: 20px'></span>
        <button class='kb-btn' style='width: 100%'  id='kbCancelAddCard'>Cancel</button>
        </div>
        `;


        const cardsSection = document.getElementById('kbAddConfirmSection');

        const div = kb.getHtml(html, "kb-add-section");

        const confirmAddCard = function confirmAddCard() {
            const textarea = div.querySelector('#kbAddCardText');
            const val = textarea && textarea.value;
            addCard(val);
            div.remove();
            addBtn.disabled = false;
        }

        const cancelAddCard = function confirmAddCard() {
            div.remove();
            addBtn.disabled = false;
        }

        div.querySelector('#kbConfirmAddCard').addEventListener('click', confirmAddCard);
        div.querySelector('#kbCancelAddCard').addEventListener('click', cancelAddCard);

        cardsSection.appendChild(div);
        addBtn.disabled = true;
    }

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    addBtn.addEventListener('click', showCardAddSection);
})();