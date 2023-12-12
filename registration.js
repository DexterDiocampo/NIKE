function validateAndRegister(event) {
  setTimeout(function() {
    document.getElementById('success-message').style.display = 'block';
    document.getElementById('go-to-login-button').style.display = 'block';
  }, 1000);
  event.preventDefault();
}

function goToLogin() {
  window.location.href = 'index.html';
}