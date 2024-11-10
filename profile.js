const backColors = [
    "linear-gradient(to bottom right, #476C9D, #7497CF, #2E4C72)",
    "linear-gradient(to bottom right, #18283D, #2F4E75, #18283D)"
];
const footBtnColor = ["#476C9D", "#18283D"];
const setColor = ["#7497CF", "#35547E"];
const containerColor = ["#FFFFFF", "#4A4A4A"];
const navlinkColor = ["#2E4C72", "#FFFFFF"];

let currentColorIndex = 0;

function changeBackground() {
    currentColorIndex = (currentColorIndex + 1) % backColors.length;
    applyColors();
}

function applyColors() {
    document.body.style.background = backColors[currentColorIndex];
    document.getElementById("myFooter").style.background = footBtnColor[currentColorIndex];
    Array.from(document.getElementsByClassName('btn')).forEach(btn => btn.style.backgroundColor = footBtnColor[currentColorIndex]);
    Array.from(document.getElementsByClassName('set')).forEach(set => set.style.backgroundColor = setColor[currentColorIndex]);
    Array.from(document.getElementsByClassName('col')).forEach(col => col.style.backgroundColor = containerColor[currentColorIndex]);
    Array.from(document.getElementsByClassName('nav-link')).forEach(navLink => navLink.style.color = navlinkColor[currentColorIndex]);
    updateNavbar();
}

function updateNavbar() {
    const navbar = document.getElementById('myNavbar');
    navbar.classList.toggle('navbar-light');
    navbar.classList.toggle('navbar-dark');
    navbar.classList.toggle('bg-light');
    navbar.classList.toggle('bg-dark');
    document.body.classList.toggle('bg-light');
    document.body.classList.toggle('bg-dark');
}

document.addEventListener('DOMContentLoaded', () => {
    const readMoreButton = document.getElementById('readMoreBtn');
    const extraContentInfo = document.getElementById('extraContent');

    function readMore(){
        if (extraContentInfo.style.display === 'none' || extraContentInfo.style.display === '') {
            extraContentInfo.style.display = 'block';
            readMoreButton.innerText = 'Hide'; 
        } else {
            extraContentInfo.style.display = 'none';
            readMoreButton.innerText = 'Read more'; 
        }
    }

    readMoreButton.addEventListener('click', readMore);

    const showTimeBtn = document.getElementById('timeBtn');

    /* Time */

    function showTime() {
        showTimeBtn.innerHTML = Date();
    }
    showTimeBtn.addEventListener('click', showTime);

    function displayGreeting() {
        const greetingElement = document.getElementById("greeting");
        const currentHour = new Date().getHours(); 
        let greeting;

        switch (true) {
            case (currentHour >= 5 && currentHour < 12):
                greeting = "Good morning!";
                break;
            case (currentHour >= 12 && currentHour < 18):
                greeting = "Good afternoon!";
                break;
            case (currentHour >= 18 && currentHour < 22):
                greeting = "Good evening!";
                break;
            default:
                greeting = "Good night!";
        }

        greetingElement.textContent = greeting;
    }

    displayGreeting();

    /* Keyboard Event Handling */

    const menuItems = document.querySelectorAll('#menu li');
    let currentIndex = 0;

    menuItems[currentIndex].focus();

    document.addEventListener('keydown', (type) => {
        if (type.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % menuItems.length;
        } else if (type.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        }

        menuItems[currentIndex].focus();
    });

    
    document.getElementById("geo_btn").addEventListener("click", function() {
        const button = document.getElementById("geo_btn");
        button.textContent = button.textContent === "Off" ? "On" : "Off";
    });
    document.getElementById("lang_btn").addEventListener("click", function() {
        const button = document.getElementById("lang_btn");
        button.textContent = button.textContent === "Off" ? "On" : "Off";
    });
    document.getElementById("notif_btn").addEventListener("click", function() {
        const button = document.getElementById("notif_btn");
        button.textContent = button.textContent === "Off" ? "On" : "Off";
    });

    
});


function loadProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('fig_name').textContent = user.username;
        document.getElementById('fig_email').textContent = user.email;
    }
    attachEventListeners();
}

function handleLogout() {
    if (confirm("Save your data before logout?")) {
        localStorage.setItem('username', document.getElementById('fig_name').textContent);
        localStorage.setItem('email', document.getElementById('fig_email').textContent);
    }
    localStorage.removeItem('sessionActive');
    window.location.href = "login.html";
}

function attachEventListeners() {
    document.getElementById('changeBtn').addEventListener('click', changeBackground);
    document.getElementById('logoutButton').addEventListener('click', handleLogout);
    document.getElementById('timeBtn').addEventListener('click', () => {
        document.getElementById('timeBtn').textContent = new Date().toLocaleTimeString();
    });
    document.getElementById('readMoreBtn').addEventListener('click', toggleReadMore);
}

function toggleReadMore() {
    const extraContent = document.getElementById('extraContent');
    extraContent.style.display = extraContent.style.display === 'block' ? 'none' : 'block';
    document.getElementById('readMoreBtn').textContent = extraContent.style.display === 'block' ? 'Hide' : 'Read More';
}
document.addEventListener("DOMContentLoaded", function() {
    let username = localStorage.getItem("username");
    let email = localStorage.getItem("email");

    if (username && email) {
        document.getElementById("fig_name").textContent = username;
        document.getElementById("fig_email").textContent = email;
    }
});

// Добавление функциональности кнопки "Logout"
document.getElementById("logoutButton").addEventListener("click", function() {
    // Если нужно очистить данные после логаута
    // localStorage.removeItem("username");
    // localStorage.removeItem("email");

    // Перенаправление на страницу логина
    window.location.href = "login.html";
});
document.addEventListener('DOMContentLoaded', function () {
    // Получаем данные из localStorage
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    // Обновляем информацию на странице профиля
    if (username) {
        document.getElementById('fig_name').textContent = username;
    }

    if (email) {
        document.getElementById('fig_email').textContent = email;
    }
});


