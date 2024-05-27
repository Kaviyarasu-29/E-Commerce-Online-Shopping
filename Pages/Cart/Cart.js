document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    function displayCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(product => {
            const { id, name, price, image, quantity } = product;
            totalPrice += parseFloat(price) * quantity; 

            const cartItem = `
                <div class="cart-item" data-id="${id}">
                    <div class="cart-image">
                    <img src="${image}" alt="${name}" style="width: 50px;">
                    </div>
                    <div class="cart-product-details row">
                        <div class="product-details col-9">
                            <span>${name}</span>
                            <span>Price: $${price}</span> 
                            <span>Quantity: ${quantity}</span>
                        </div>
                        <div class="remove-from-cart-button col-3">
                            <button class="remove-from-cart btn btn-danger" style="width : fit-content "  data-id="${id}"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>`;
            cartItemsContainer.insertAdjacentHTML('beforeend', cartItem);
        });

        totalPriceContainer.innerHTML = ` <h1> Total Price: $ ${totalPrice.toFixed(2)} </h1>`;
    }

    function removeFromCart(id) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(product => product.id !== id);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex >= 0) {
            cart[existingProductIndex].quantity += 1;
        } else {
            product.quantity = 1;
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
        displayCart();
    }


    cartItemsContainer.addEventListener('click', event => {
        if (event.target.classList.contains('remove-from-cart')) {
            const id = event.target.getAttribute('data-id');
            removeFromCart(id);
        }
    });

    displayCart();
});
