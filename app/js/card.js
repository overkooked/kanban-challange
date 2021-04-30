
(function () {
    let counter = 1;
    function addCard() {
        console.log('add card button is clicked');
        const cardsSection = document.getElementById('kbCards');
        const span = document.createElement('div');
        span.innerHTML = counter + ` : add card button is clicked <button id="kbDeleteCard' + counter + '" class="kb-btn-link"> <i class="far fa-trash-alt"></i> delete</button>`;
        span.querySelector('button').addEventListener('click', function () {
            console.log(this);
            span.remove();
        })
        counter++;
        cardsSection.append(span);
    }

    function deleteCard(x) {
        console.log(x);
    }

    document.getElementById('kbAddCardBtnLink').addEventListener('click', addCard);
})();