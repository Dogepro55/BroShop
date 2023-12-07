document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
        { id: 3, name: 'Product 3', price: 14.99 },
        { id: 4, name: 'Product 4', price: 39.99 },
        { id: 5, name: 'Product 5', price: 24.99 },
        { id: 6, name: 'Product 6', price: 49.99 },
        { id: 7, name: 'Product 7', price: 9.99 },
        { id: 8, name: 'Product 8', price: 34.99 },
        { id: 9, name: 'Product 9', price: 19.99 },
        { id: 10, name: 'Product 10', price: 29.99 },
        // Add more products as needed
    ];

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const buyNowButtons = document.querySelectorAll('.buy-now');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    buyNowButtons.forEach(button => {
        button.addEventListener('click', buyNow);
    });

    function addToCart(event) {
        const productId = event.target.closest('.product').getAttribute('data-product-id');
        const productName = event.target.closest('.product').querySelector('h2').innerText;

        const cartItemsContainer = document.getElementById('cart-items');
        const cartItem = document.createElement('div');
        cartItem.innerText = productName;
        cartItemsContainer.appendChild(cartItem);
    }

    function buyNow(productId) {
     window.location.href = 'order.html';
    }

    function searchProducts() {
        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput.value.toLowerCase();

        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm);
        });

        // Update the page with the filtered products
        displayFilteredProducts(filteredProducts);
    }

    function displayFilteredProducts(filteredProducts) {
        const productList = document.getElementById('productList');
        productList.innerHTML = ''; // Clear previous products

        // Display the filtered products
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.setAttribute('class', 'product');
            productElement.setAttribute('data-product-id', product.id);

            const productName = document.createElement('h2');
            productName.innerText = product.name;

            const productPrice = document.createElement('p');
            productPrice.innerText = `Price: $${product.price.toFixed(2)}`;

            const addToCartButton = document.createElement('button');
            addToCartButton.setAttribute('class', 'add-to-cart');
            addToCartButton.innerText = 'Add to Cart';
            addToCartButton.addEventListener('click', addToCart);

            const buyNowButton = document.createElement('button');
            buyNowButton.setAttribute('class', 'buy-now');
            buyNowButton.innerText = 'Buy Now';
            buyNowButton.addEventListener('click', () => buyNow(product.id));

            productElement.appendChild(productName);
            productElement.appendChild(productPrice);
            productElement.appendChild(buyNowButton);
            productElement.appendChild(addToCartButton);

            productList.appendChild(productElement);
        });
    }
});

function openOrderPage() {
    alert('Redirecting to order page!');
     window.location.href = 'order.html';
}
