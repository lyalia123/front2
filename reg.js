document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const resetButton = document.getElementById("resetButton");
    const loginForm = document.getElementById("contactForm");

    // Registration Form Validation and Storage
    if (registrationForm) {
        registrationForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let valid = true;

            // Validate Username
            const username = document.getElementById("username").value.trim();
            const usernameError = document.getElementById("usernameError");
            if (username === "") {
                usernameError.textContent = "Username is required";
                valid = false;
            } else {
                usernameError.textContent = "";
            }

            // Validate Email
            const email = document.getElementById("email").value.trim();
            const emailError = document.getElementById("emailError");
            if (!email.includes("@")) {
                emailError.textContent = "Please enter a valid email";
                valid = false;
            } else {
                emailError.textContent = "";
            }

            // Validate Password
            const password = document.getElementById("password").value;
            const passwordError = document.getElementById("passwordError");
            if (password.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters long";
                valid = false;
            } else {
                passwordError.textContent = "";
            }

            // Validate Confirm Password
            const confirmPassword = document.getElementById("confirmPassword").value;
            const confirmPasswordError = document.getElementById("confirmPasswordError");
            if (confirmPassword !== password) {
                confirmPasswordError.textContent = "Passwords do not match";
                valid = false;
            } else {
                confirmPasswordError.textContent = "";
            }

            if (valid) {
                const user = {
                    username: username,
                    email: email,
                    password: password
                };
                localStorage.setItem('user', JSON.stringify(user));
                alert("Registration successful! You can now log in.");
                window.location.href = 'front.html'; // Перенаправление на главную страницу после успешной регистрации
            }
        });

        // Reset Form
        resetButton.addEventListener("click", function() {
            registrationForm.reset();
            document.querySelectorAll(".error").forEach(function(error) {
                error.textContent = "";
            });
        });
    }

    // Login Form Handling
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;

            const user = JSON.parse(localStorage.getItem('user'));

            if (user && user.email === email && user.password === password) {
                localStorage.setItem('session', 'active');
                alert("Login successful!");
                window.location.href = 'front.html'; // Перенаправление на главную страницу после успешного входа
            } else {
                alert("Invalid email or password!");
            }
        });
    }

    // Logout Function
    function logout() {
        localStorage.removeItem('session');
        alert("You have logged out.");
        window.location.href = 'login.html'; // Перенаправление на страницу входа после выхода
    }

    // Check if User is Logged In
    window.addEventListener('load', function() {
        if (localStorage.getItem('session') === 'active') {
            const signInBtn = document.querySelector('.sign-in-btn');
            if (signInBtn) {
                signInBtn.textContent = 'Log out';
                signInBtn.addEventListener('click', logout);
            }
        }
    });
});
