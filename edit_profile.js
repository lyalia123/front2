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


    document.getElementById('changeBtn').addEventListener('click', function() {
        let sound = document.getElementById('saveSound');
        sound.play();
    });

}

document.addEventListener('DOMContentLoaded', () => {
    /* Manipulating */
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



});

/* Form */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("saveButton").addEventListener("click", function(event) {

        const username = document.getElementById("exampleInputUsername").value;
        const email = document.getElementById("exampleInputEmail").value;
        const password = document.getElementById("exampleInputPassword").value;

        if (username === '' || email === '' || password === '') {
            alert("Please fill in all fields.");
            return;
        }

        if (!email.includes('@')) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        alert("Form submitted successfully!");

    

    });
    document.getElementById('saveButton').addEventListener('click', function() {
        var sound = document.getElementById('saveSound');
        sound.play();
    });
});


