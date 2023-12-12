function validateEmail() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();

    var isGmail = email.toLowerCase().endsWith("@gmail.com");

    return isGmail;
}

function handleLogin(event) {
    event.preventDefault();

    var passwordInput = document.getElementById('password');
    var password = passwordInput.value.trim();

    var loadingScreen = document.getElementById('loading-screen');
    var loginButton = document.querySelector('button[type="submit"]');
    
    loadingScreen.style.display = 'flex';
    loginButton.disabled = true;

    setTimeout(function () {
        if (validateEmail() && (password === 'Diocampo07' || password === 'Admin' || password !=='')) {
            window.location.replace('mainpage.html');
        } else {
            showInvalidAlert();
        }

        loadingScreen.style.display = 'none';
        loginButton.disabled = false;
    }, 1000);
}