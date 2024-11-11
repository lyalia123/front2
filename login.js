document.addEventListener("DOMContentLoaded", function() {
    setupFormValidation();
    handleLoginForm();
    handleRegisterButton();
    checkUserSession();
});

function setupFormValidation() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateLoginForm()) {
            performLogin();
        }
    });

    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function() {
        document.querySelectorAll('input').forEach(input => input.value = '');
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
    });
}

function validateLoginForm() {
    let valid = true;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    if (!email.includes('@')) {
        emailError.textContent = 'Please enter a valid email';
        emailError.style.color = 'red';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        passwordError.style.color = 'red';
        valid = false;
    } else {
        passwordError.textContent = '';
    }
    return valid;
}

function performLogin() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        localStorage.setItem('session', 'active');
        alert("Login successful!");
        window.location.href = 'front.html';
    } else {
        alert("Invalid email or password!");
    }
}

function handleRegisterButton() {
    const registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", function() {
        window.location.href = 'reg.html';
    });
}

function checkUserSession() {
    if (localStorage.getItem('session') === 'active') {
        const signInBtn = document.querySelector('.sign-in-btn');
        if (signInBtn) {
            signInBtn.textContent = 'Log out';
            signInBtn.addEventListener('click', logout);
        }
    }
}

function logout() {
    localStorage.removeItem('session');
    alert("You have logged out.");
    window.location.href = 'index.html';
}
function handleRegisterButton() {
    const registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", function() {
        window.location.href = 'reg.html'; // Убедитесь, что путь к файлу reg.html корректен
    });
}

document.addEventListener("DOMContentLoaded", function() {
    handleRegisterButton();
});
