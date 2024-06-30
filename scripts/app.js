import { loadProducts } from './products.js';
import { loadCart } from './cart.js';
import { loadLogin } from './auth.js';

document.getElementById('home-link').addEventListener('click', () => {
    document.getElementById('main-content').innerHTML = '<h2>Home</h2><p>Welcome to our e-commerce portal.</p>';
});

document.getElementById('products-link').addEventListener('click', loadProducts);

document.getElementById('cart-link').addEventListener('click', loadCart);

document.getElementById('login-link').addEventListener('click', loadLogin);

// Load the home content by default
document.getElementById('home-link').click();
