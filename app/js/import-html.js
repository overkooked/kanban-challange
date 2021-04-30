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