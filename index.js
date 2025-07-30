document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const loginBtn = document.getElementById('login');
    const registerBtn = document.getElementById('register');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Toggle between forms
    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });

    // Form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your login logic here
        alert('Login functionality will be implemented here');
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your registration logic here
        alert('Registration functionality will be implemented here');
    });
});

// Toggle password visibility
function togglePassword(inputId, eyeIcon) {
    const input = document.getElementById(inputId);
    const eye = eyeIcon.querySelector('.fa-eye');
    const eyeSlash = eyeIcon.querySelector('.fa-eye-slash');
    
    if (input.type === 'password') {
        input.type = 'text';
        eye.style.display = 'none';
        eyeSlash.style.display = 'inline';
    } else {
        input.type = 'password';
        eye.style.display = 'inline';
        eyeSlash.style.display = 'none';
    }
}