var products = document.getElementById('products');
var documents = document.getElementById('documents');
var application = document.getElementById('application');
var dropmenu = document.getElementById('dropmenu');
var dropmenu_1 = document.getElementById('dropmenu_1');
var dropmenu_2 = document.getElementById('dropmenu_2');
var dropmenu_3 = document.getElementById('dropmenu_3');


products.addEventListener('mouseover', DropmenuShow_1);
products.addEventListener('mouseout', DropmenuHide);
documents.addEventListener('mouseover', DropmenuShow_2);
documents.addEventListener('mouseout', DropmenuHide);
application.addEventListener('mouseover', DropmenuShow_3);
application.addEventListener('mouseout', DropmenuHide);
// dropmenu.addEventListener('mouseover', DropmenuShow);
// dropmenu.addEventListener('mouseout', DropmenuHide);

function DropmenuShow_1() {
    dropmenu.style.display = 'block';
    dropmenu_1.style.display = 'block';
    dropmenu_2.style.display = 'none';
    dropmenu_3.style.display = 'none';
}

function DropmenuShow_2() {
    dropmenu.style.display = 'block';    
    dropmenu_1.style.display = 'none';
    dropmenu_2.style.display = 'block';
    dropmenu_3.style.display = 'none';
}

function DropmenuShow_3() {
    dropmenu.style.display = 'block';    
    dropmenu_1.style.display = 'none';
    dropmenu_2.style.display = 'none';
    dropmenu_3.style.display = 'block';
}

function DropmenuHide() {
    dropmenu.style.display = 'none';
    dropmenu_1.style.display = 'none';
    dropmenu_2.style.display = 'none';
    dropmenu_3.style.display = 'none';
}
