let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

document.addEventListener('DOMContentLoaded', function () {
    updateCheckout();
});

function updateCheckout() {
    const checkoutSection = document.getElementById('checkout-items');
    const totalAmountSpan = document.getElementById('total-amount');

    checkoutSection.innerHTML = '';

    let totalAmount = 0;
    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'checkout-item';

        const itemName = document.createElement('p');
        itemName.textContent = item.name;
        itemDiv.appendChild(itemName);

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `Price: ₱${item.price.toFixed(2)}`;
        itemDiv.appendChild(itemPrice);

        checkoutSection.appendChild(itemDiv);
        totalAmount += item.price;
    });

    totalAmountSpan.textContent = `Total Amount: ₱${totalAmount.toFixed(2)}`;

    const buyNowButton = document.querySelector('.buy-now-btn');
    buyNowButton.disabled = cartItems.length === 0;
}

function goBack() {
    window.location.href = 'mainpage.html';
}

function buyNow() {
    const buyNowButton = document.querySelector('.buy-now-btn');
    
    if (buyNowButton.disabled) {
        return;
    }

    buyNowButton.textContent = 'Back';
    buyNowButton.onclick = goBack;

    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'flex';

    setTimeout(() => {
        if (validateEmail()) {
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                const itemPurchased = document.getElementById('item-purchased');
                itemPurchased.style.display = 'block';
                itemPurchased.style.top = `${buyNowButton.offsetTop - 50}px`;
            }, 2000);
        } else {
            loadingScreen.style.display = 'none';
            buyNowButton.textContent = 'Buy Now';
            buyNowButton.onclick = buyNow;
        }
    }, 2000);
}

function validateEmail() {
    return true;
}
