
(function () {
    if (!window.kb) {
        window.kb = {};
    }
    
    window.kb.getHtml = function getHtml(html, className) {

        const div = document.createElement('div');
        div.classList.add(className);
        div.innerHTML = html;
        return div;

    }
})()
