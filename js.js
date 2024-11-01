

function setupFormValidation() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
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

        if (!valid) {
            event.preventDefault();
        } else {
            login();
        }
    });

    document.getElementById('resetButton').addEventListener('click', function() {
        document.querySelectorAll('input').forEach(input => input.value = '');
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("contactForm");
    const registerButton = document.getElementById("registerButton");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;

            const user = JSON.parse(localStorage.getItem('user'));

            if (user && user.email === email && user.password === password) {
                localStorage.setItem('session', 'active');
                alert("Login successful!");
                window.location.href = 'front.html'; // Redirect to homepage
            } else {
                alert("Invalid email or password!");
            }
        });

        // Logout Function
        window.logout = function() {
            localStorage.removeItem('session');
            alert("You have logged out.");
            window.location.href = 'login.html'; // Redirect to login page
        };
    }

    // Register Button Handling
    if (registerButton) {
        registerButton.addEventListener("click", function() {
            window.location.href = 'reg.html'; // Redirect to registration page
        });
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

