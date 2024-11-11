const backColors = [
    "linear-gradient(to bottom right, #476C9D, #7497CF, #2E4C72)",
    "linear-gradient(to bottom right, #18283D, #2F4E75, #18283D)"
];
const footBtnColor = [
    "#476C9D",
    "#18283D"
];
const setColor = [
    "#7497CF",
    "#35547E"
];
const containerColor = [
    "#FFFFFF",
    "#506682"
];
const navlinkColor = [
    "#2E4C72",
    "#FFFFFF"
];
const btnColor2 = [
    "#476C9D",
    "#284163"
];

let currentColorIndex = 0;

/* Change Background */

function changeBackground() {
    currentColorIndex++;

    if (currentColorIndex >= backColors.length) {
        currentColorIndex = 0;
    }

    document.body.style.background = backColors[currentColorIndex];
    
    document.getElementById("myFooter").style.background = footBtnColor[currentColorIndex];

    const buttons = document.getElementsByClassName('btn'); 
    Array.from(buttons).forEach(btn => btn.style.backgroundColor = footBtnColor[currentColorIndex]);
    document.getElementById("changeBtn").style.backgroundColor = btnColor2[currentColorIndex];
    document.getElementById("logoutButton").style.backgroundColor = btnColor2[currentColorIndex];

    const conytainerName = document.getElementsByClassName('container_name'); 
    Array.from(conytainerName).forEach(contName => contName.style.backgroundColor = footBtnColor[currentColorIndex]);

    const settings = document.getElementsByClassName('set'); 
    Array.from(settings).forEach(set => set.style.backgroundColor = setColor[currentColorIndex]);

    const conteiners = document.getElementsByClassName('col'); 
    Array.from(conteiners).forEach(col => col.style.backgroundColor = containerColor[currentColorIndex]);

    document.getElementById("fig_name").style.color = navlinkColor[currentColorIndex];

    const menuText = document.getElementsByClassName('nav-link'); 
    Array.from(menuText).forEach(navLink => navLink.style.color = navlinkColor[currentColorIndex]);

    const contactText = document.getElementsByClassName("contact_text");
    Array.from(contactText).forEach(contText => contText.style.color = navlinkColor[currentColorIndex]);

    const navbar = document.getElementById('myNavbar');
    if (navbar.classList.contains('navbar-light')) {
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
        document.body.classList.remove('bg-light');
        document.body.classList.add('bg-dark');
    } else {
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
        document.body.classList.remove('bg-dark');
        document.body.classList.add('bg-light');
    }

    if (document.querySelector('img').style.transform == 'rotate(0deg)') {
        document.querySelector('img').style.transform = 'rotate(180deg)';
    }
    else {
        document.querySelector('img').style.transform = 'rotate(0deg)';
    }

    document.getElementById('changeBtn').addEventListener('click', function() {
        let sound = document.getElementById('saveSound');
        sound.play();
    });

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
    window.location.href = "index.html";
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
    window.location.href = "index.html";
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


