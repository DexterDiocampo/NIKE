       let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

document.addEventListener('DOMContentLoaded', function () {
    updateCart();
});

function addToCart(itemName, price) {
    cartItems.push({ name: itemName, price: price });
    updateCart();

    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');

    cartList.innerHTML = '';

    let total = 0;
    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₱${item.price}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = () => removeFromCart(index);

        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
        total += item.price;
    });

    totalSpan.textContent = total.toFixed(2);
}

function checkout() {

    window.location.href = 'checkout.html';
}

function showPurchases() {
    alert('Showing item purchases');
}

function logout() {

    alert('Logging out');
}
function toggleMenu() {
            const dropdownContent = document.querySelector('.dropdown-content');
            dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
        }

        function showPurchases() {
            window.location.href = 'checkout.html';
        }

        function logout() {

            window.location.href = 'index.html';
        }
        function toggleMenu() {
            const dropdownContent = document.querySelector('.dropdown-content');
            dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
        }