var products = document.getElementById('products');
var dropmenu = document.getElementById('dropmenu');

products.addEventListener('mouseover', DropmenuShow)
products.addEventListener('mouseout', DropmenuHide)
dropmenu.addEventListener('mouseover', DropmenuShow)
dropmenu.addEventListener('mouseout', DropmenuHide);

function DropmenuShow() {
    dropmenu.style.display = 'block';
}

function DropmenuHide() {
    dropmenu.style.display = 'none';
}