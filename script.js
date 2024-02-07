let cartItems = [];

function addToCart(product, price) {
    cartItems.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartList.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.product} - $${item.price}`;
        cartList.appendChild(listItem);
        total += item.price;
    });
    cartTotal.textContent = total;
}

function checkout() {
    alert('Thank you for your purchase!');
    cartItems = [];
    updateCart();
}
