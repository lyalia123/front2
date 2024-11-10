document.addEventListener("DOMContentLoaded", function() {
    setupFormHandlers();
});

function setupFormHandlers() {
    const registrationForm = document.getElementById("registrationForm");
    const resetButton = document.getElementById("resetButton");
    const loginForm = document.getElementById("contactForm");

    if (registrationForm) {
        registrationForm.addEventListener("submit", handleRegistration);
    }

    if (resetButton) {
        resetButton.addEventListener("click", function() {
            registrationForm.reset();
            document.querySelectorAll(".error").forEach(function(error) {
                error.textContent = "";
            });
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }

    if (localStorage.getItem('session') === 'active') {
        const signInBtn = document.querySelector('.sign-in-btn');
        if (signInBtn) {
            signInBtn.textContent = 'Log out';
            signInBtn.addEventListener('click', logout);
        }
    }
}

function handleRegistration(event) {
    event.preventDefault();
    let valid = true;
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    valid &= setError("usernameError", username === "", "Username is required");
    valid &= setError("emailError", !email.includes('@'), "Please enter a valid email");
    valid &= setError("passwordError", password.length < 6, "Password must be at least 6 characters long");
    valid &= setError("confirmPasswordError", confirmPassword !== password, "Passwords do not match");

    if (valid) {
        const user = { username, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert("Registration successful! You can now log in.");
        window.location.href = 'login.html';  // Рекомендуется перенаправить на страницу входа
    }
}

function handleLogin(event) {
    event.preventDefault();
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

function logout() {
    localStorage.removeItem('session');
    alert("You have logged out.");
    window.location.href = 'login.html';
}

function setError(fieldId, condition, message) {
    const errorElement = document.getElementById(fieldId);
    if (condition) {
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    // Сохранение данных пользователя в localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    // Перенаправление на страницу профиля
    window.location.href = "profile.html";
});
