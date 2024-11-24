document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can replace this with your own logic)
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').innerText = 'Login successful!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password.';
    }
});