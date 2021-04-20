// console.log('I am running fine. Thanks to parcel')
// document.write(' I am running fine.')
async function importHTML(name) {
    const res = await fetch(`./app/partials/${name}`, {
        headers: {
            'Content-Type': 'text/html'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    const result = await res.text();
    const x = document.createElement('template');
    const div = document.createElement('div');
    div.innerHTML = result;
    let count = 0;
    while (count < div.children.length) {
        x.content.append(div.children.item(count));
        count++
    }

    console.log(x);
}

importHTML('footer.html');


let counter = 1;

function addCard() {
    console.log('add card button is clicked');
    const cardsSection = document.getElementById('kbCards');
    const span = document.createElement('div');
    span.innerHTML = counter + `: add card button is clicked <button id="kbDeleteCard' + counter + '" class="kb-btn-link"> <i class="far fa-trash-alt"></i> delete</button>`;
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