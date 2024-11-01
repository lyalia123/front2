
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}


document.addEventListener('DOMContentLoaded', () => {
   
    const toggleButton = document.querySelector('.btn.btn-secondary');
   
    toggleButton.addEventListener('click', toggleTheme);

   
    const categories = document.querySelectorAll('.nav-item .nav-link');
    
    categories.forEach(category => {
        category.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedCategory = category.getAttribute('href').substring(1);
            localStorage.setItem('selectedCategory', selectedCategory); 
        });
    });
    document.getElementById('submitNameButton').addEventListener('click', function() {
        const name = document.getElementById('nameInput').value;
  
        if (name.trim() !== "") {
            document.getElementById('greetingMessage').textContent = 'Hello, ' + name + '! Thank you for your question.';
        } else {
            document.getElementById('greetingMessage').textContent = 'Please enter your name.';
        }
    });
    greetingMessage.style.transform = 'scale(1.1)';
    setTimeout(() => {
        greetingMessage.style.transform = 'scale(1)';
    }, 500); 

function updateLanguage(language) {
    switch (language) {
        case 'en':
            document.getElementById('greetingMessage').textContent = 'Hello, welcome to CODS!';
            document.querySelector('.why h2').textContent = 'Why CODS?';
            document.querySelectorAll('.card-title')[0].textContent = 'Fast Delivery';
            document.querySelectorAll('.card-text')[0].textContent = 'Receive your order in no time with CODS\'s quick delivery options.';
            document.querySelectorAll('.card-title')[1].textContent = 'Best Prices';
            document.querySelectorAll('.card-text')[1].textContent = 'Browse top brands at affordable prices with CODS.';
            document.querySelectorAll('.card-title')[2].textContent = 'Variety';
            document.querySelectorAll('.card-text')[2].textContent = 'CODS offers a wide variety of clothing from many retailers.';
            document.querySelector('.faq h2').textContent = 'Frequently Asked Questions';
            document.querySelectorAll('.accordion-button')[0].textContent = 'What is CODS?';
            document.querySelectorAll('.accordion-body')[0].textContent = 'CODS is an online platform offering a variety of products at competitive prices.';
            document.querySelectorAll('.accordion-button')[1].textContent = 'How fast is the delivery?';
            document.querySelectorAll('.accordion-body')[1].textContent = 'We guarantee fast delivery within 2-3 days, depending on your location.';
            document.querySelectorAll('.accordion-button')[2].textContent = 'What products are available?';
            document.querySelectorAll('.accordion-body')[2].textContent = 'We offer a range of clothing, shoes, and accessories from various top retailers and brands.';
            break;

        case 'ru':
            document.getElementById('greetingMessage').textContent = 'Привет, добро пожаловать в CODS!';
            document.querySelector('.why h2').textContent = 'Почему CODS?';
            document.querySelectorAll('.card-title')[0].textContent = 'Быстрая доставка';
            document.querySelectorAll('.card-text')[0].textContent = 'Получите свой заказ в кратчайшие сроки с помощью быстрых вариантов доставки CODS.';
            document.querySelectorAll('.card-title')[1].textContent = 'Лучшие цены';
            document.querySelectorAll('.card-text')[1].textContent = 'Просматривайте лучшие бренды по доступным ценам с CODS.';
            document.querySelectorAll('.card-title')[2].textContent = 'Разнообразие';
            document.querySelectorAll('.card-text')[2].textContent = 'CODS предлагает широкий ассортимент одежды от многих ритейлеров.';
            document.querySelector('.faq h2').textContent = 'Часто задаваемые вопросы';
            document.querySelectorAll('.accordion-button')[0].textContent = 'Что такое CODS?';
            document.querySelectorAll('.accordion-body')[0].textContent = 'CODS — это онлайн-платформа, предлагающая разнообразные товары по конкурентоспособным ценам.';
            document.querySelectorAll('.accordion-button')[1].textContent = 'Насколько быстрая доставка?';
            document.querySelectorAll('.accordion-body')[1].textContent = 'Мы гарантируем быструю доставку в течение 2-3 дней в зависимости от вашего местоположения.';
            document.querySelectorAll('.accordion-button')[2].textContent = 'Какие продукты доступны?';
            document.querySelectorAll('.accordion-body')[2].textContent = 'Мы предлагаем широкий ассортимент одежды, обуви и аксессуаров от различных ведущих ритейлеров и брендов.';
            break;

        case 'kz':
            document.getElementById('greetingMessage').textContent = 'Сәлеметсіз бе, CODS-қа қош келдіңіз!';
            document.querySelector('.why h2').textContent = 'Неге CODS?';
            document.querySelectorAll('.card-title')[0].textContent = 'Жылдам жеткізу';
            document.querySelectorAll('.card-text')[0].textContent = 'CODS жылдам жеткізу нұсқаларымен тапсырысыңызды лезде алыңыз.';
            document.querySelectorAll('.card-title')[1].textContent = 'Үздік бағалар';
            document.querySelectorAll('.card-text')[1].textContent = 'CODS арқылы қолжетімді бағамен үздік брендтерді қараңыз.';
            document.querySelectorAll('.card-title')[2].textContent = 'Әртүрлілік';
            document.querySelectorAll('.card-text')[2].textContent = 'CODS көптеген бөлшек саудагерлерден киімдердің кең ассортиментін ұсынады.';
            document.querySelector('.faq h2').textContent = 'Жиі қойылатын сұрақтар';
            document.querySelectorAll('.accordion-button')[0].textContent = 'CODS дегеніміз не?';
            document.querySelectorAll('.accordion-body')[0].textContent = 'CODS - бәсекеге қабілетті бағамен әртүрлі өнімдерді ұсынатын онлайн платформа.';
            document.querySelectorAll('.accordion-button')[1].textContent = 'Жеткізу қаншалықты жылдам?';
            document.querySelectorAll('.accordion-body')[1].textContent = 'Біз жеткізуді сіздің орналасқан жеріңізге байланысты 2-3 күн ішінде жылдам жүзеге асырамыз.';
            document.querySelectorAll('.accordion-button')[2].textContent = 'Қандай өнімдер қол жетімді?';
            document.querySelectorAll('.accordion-body')[2].textContent = 'Біз әртүрлі жетекші бөлшек саудагерлер мен брендтерден киім, аяқ киім және аксессуарларды ұсынамыз.';
            break;

        default:
            console.error('Unsupported language selected');
    }
}

document.getElementById('languageSelector').addEventListener('change', function() {
    const selectedLanguage = this.value;
    updateLanguage(selectedLanguage);
});
document.addEventListener('keydown', function(event) {
    const categories = document.querySelectorAll('.nav-item .nav-link');
    let currentIndex = Array.from(categories).findIndex(item => document.activeElement === item);

    if (event.key === 'ArrowRight' && currentIndex < categories.length - 1) {
        categories[currentIndex + 1].focus();
    } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
        categories[currentIndex - 1].focus();
    }
});

    
});
