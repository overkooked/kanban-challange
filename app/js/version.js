
(async function () {
    const resPromise = await fetch('../data/version.json');
    const versions = await resPromise.json();

    const versionSelector = document.getElementById('kbVersionList');

    const val  = location.pathname && location.pathname.split('/')[1];
    versions.forEach(x => {
        const option = document.createElement('option');
        option.value = x;
        option.innerText = x;
        option.selected = x === val;
        versionSelector.append(option);
    });


    versionSelector.addEventListener('change', (x) => {
        console.log(x.target.value);
        const path = x.target.value;
        if (path && location.pathname.indexOf(path) === -1) {
            window.location.assign(`${location.origin}/${path}/`);
        }
    })

})()
