let listCart = [];

// Define your product data as an array of objects
let products = [
        {
            "id": 1,
            "name": "Product 1",
            "price": 520,
            "image": "images/1.webp"
        },
        {
            "id": 2,
            "name": "Product 2",
            "price": 220,
            "image": "images/2.webp"
        },
        {
            "id": 3,
            "name": "Product 3",
            "price": 250,
            "image": "images/3.webp"
        }
        ,
        {
            "id": 4,
            "name": "Product 4",
            "price": 420,
            "image": "images/4.webp"
        },
        {
            "id": 5,
            "name": "Product 5",
            "price": 120,
            "image": "images/5.webp"
        },
        {
            "id": 6,
            "name": "Product 6",
            "price": 120,
            "image": "images/6.webp"
        }
    
];

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}
checkCart();
addCartToHTML();

function addCartToHTML() {
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;

    // if has product in Cart
    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newCart = document.createElement('div');
                newCart.classList .add('item');
                newCart.innerHTML =
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        });
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}

// Add event listeners, update the cart, etc., as needed
