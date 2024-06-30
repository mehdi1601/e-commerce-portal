export function loadLogin() {
    const content = `
        <h2>Login</h2>
        <form id="login-form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <br>
            <button type="submit">Login</button>
        </form>
    `;
    document.getElementById('main-content').innerHTML = content;

    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Logged in successfully!');
    });
}
