const dropmenu = document.getElementById('dropmenu');
const dropmenuElementsId = [
    {button: 'products', menu: 'dropmenu_products'},
    {button: 'documents', menu: 'dropmenu_documents'},
    {button: 'application', menu: 'dropmenu_application'},
    {button: 'support', menu: 'dropmenu_support'}
]
const dropmenuElements = [];
for (let i = 0; i < dropmenuElementsId.length; i++) {
    dropmenuElements[i] = {button: document.getElementById(dropmenuElementsId[i].button), menu: document.getElementById(dropmenuElementsId[i].menu)}
}

for (let i = 0; i < dropmenuElements.length; i++) {
    const button = dropmenuElements[i].button;
    const menu = dropmenuElements[i].menu;

    button.addEventListener('mouseenter', function() {
        dropmenu.style.display = 'block';
        for (let j = 0; j < dropmenuElements.length; j++) {
            dropmenuElements[j].menu.style.display = menu.id === dropmenuElements[j].menu.id ? 'block' : 'none';
        }
    });
    button.addEventListener('mouseleave', function() {
        dropmenu.style.display = 'none';
    });
}

dropmenu.addEventListener('mouseenter', function() {
    dropmenu.style.display = 'block';
});

dropmenu.addEventListener('mouseleave', function() {
    dropmenu.style.display = 'none';
});