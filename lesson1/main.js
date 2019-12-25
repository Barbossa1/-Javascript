'use strick';

const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse',    price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad',  price: 4500},
];

const renderProduct = (title, price, img = 'ЗАГЛУШЕЧКА') => {
    return `<div class="product-item">
                <h3 class="name">${title}</h3>
                ${img}
                <p class="price">${price} руб</p>
                <button class="by-btn">Add in cart</button>
            </div>`;
};

const renderProducts = list => {
    const productList = list.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);
    