const dropmenu = document.getElementById('dropmenu');
const dropmenuElementsId = [
    {button: 'products', menu: 'dropmenu_products'},
    {button: 'documents', menu: 'dropmenu_documents'},
    {button: 'application', menu: 'dropmenu_application'},
]

for (let i = 0; i < dropmenuElementsId.length; i++) {
    const button = document.getElementById(dropmenuElementsId[i].button);
    const menu = document.getElementById(dropmenuElementsId[i].menu);

    console.log(button);
    button.addEventListener('mouseenter', function() {
        dropmenu.style.display = 'block';
        for (let j = 0; j < dropmenuElementsId.length; j++) {
            document.getElementById(dropmenuElementsId[j].menu).style.display = menu.id === dropmenuElementsId[j].menu ? 'block' : 'none';
        }
    });
    button.addEventListener('mouseleave', function() {
        dropmenu.style.display = 'none';
    });
}
