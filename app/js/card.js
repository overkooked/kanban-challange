
(function () {

    const addBtn = document.getElementById('kbAddCardBtnLink');

    let counter = 1;
    function addCard(text) {

        const cardHtml = `
        <div class='kb-card-header'>
        ${text}

        <button id="kbDeleteCard${counter}" class="kb-btn-link"> <i class="fas fa-ellipsis-v"></i></button>
        </div>
        <div class='kb-card-body'></div>
        `

        const kbCardContainer = document.getElementById('kbCardContainer');
        const card = kb.getHtml(cardHtml, 'kb-card');
        card.querySelector('button').addEventListener('click', function () {
            console.log(this);
            card.remove();
        })
        counter++;
        kbCardContainer.append(card);
    }

    function deleteCard(x) {
        console.log(x);
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
        console.log(div);

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

    addBtn.addEventListener('click', showCardAddSection);
})();