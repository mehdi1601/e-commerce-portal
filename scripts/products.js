export function loadProducts() {
    const content = `
        <h2>Products</h2>
        <div class="product">
            <img src="assets/images/product1.jpg" alt="Product 1">
            <p>Product 1</p>
            <button>Add to Cart</button>
        </div>
        <div class="product">
            <img src="assets/images/product2.jpg" alt="Product 2">
            <p>Product 2</p>
            <button>Add to Cart</button>
        </div>
    `;
    document.getElementById('main-content').innerHTML = content;
}
