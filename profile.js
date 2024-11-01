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
    "#4A4A4A"
];
const navlinkColor = [
    "#2E4C72",
    "#FFFFFF"
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

    const settings = document.getElementsByClassName('set'); 
    Array.from(settings).forEach(set => set.style.backgroundColor = setColor[currentColorIndex]);

    const conteiners = document.getElementsByClassName('col'); 
    Array.from(conteiners).forEach(col => col.style.backgroundColor = containerColor[currentColorIndex]);

    const menuText = document.getElementsByClassName('nav-link'); 
    Array.from(menuText).forEach(navLink => navLink.style.color = navlinkColor[currentColorIndex]);

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

/* Manipulating Attributes */

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

});


