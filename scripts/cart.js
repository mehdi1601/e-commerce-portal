export function loadCart() {
    const content = `
        <h2>Cart</h2>
        <p>Your cart is empty.</p>
    `;
    document.getElementById('main-content').innerHTML = content;
}
