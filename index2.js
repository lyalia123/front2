
const backColors = [
  "linear-gradient(to bottom right, #476C9D, #7497CF, #2E4C72)",
  "linear-gradient(to bottom right, #18283D, #2F4E75, #18283D)"
];
const footColor = [
  "#476C9D",
  "#18283D"
];
const btnColor = [
  "#476C9D",
  "#18283D"
];
const btnColor2 = [
  "#476C9D",
  "#284163"
];
const setColor = [
  "#7497CF",
  "#35547E"
];
const containerColor = [
  "#FFFFFF",
  "#506682"
];
const containerShadow = [
  "0px 4px 8px rgba(69, 101, 145, 0.5)", 
  "0px 4px 8px rgba(31, 46, 65, 0.5)"
];
const navlinkColor = [
  "#2E4C72",
  "#FFFFFF"
];
const contsctUsColor = [
  "#476C9D",
  "#FFFFFF"
];
const userColor = [
  "#476C9D",
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
  
  document.getElementById("myFooter").style.background = footColor[currentColorIndex];

  const buttons = document.getElementsByClassName('btn'); 
  Array.from(buttons).forEach(btn => btn.style.backgroundColor = btnColor[currentColorIndex]);
  document.getElementById("changeBtn").style.backgroundColor = btnColor2[currentColorIndex];
  document.getElementById("logoutButton").style.backgroundColor = btnColor2[currentColorIndex];

  const product_item = document.getElementsByClassName('product-item'); 
  Array.from(product_item).forEach(product => {
    product.style.backgroundColor = containerColor[currentColorIndex]
    product.style.boxShadow = containerShadow[currentColorIndex]
  });

  document.getElementById("colorFilter").style.backgroundColor = containerColor[currentColorIndex];
  document.getElementById("sizeFilter").style.backgroundColor = containerColor[currentColorIndex];
  document.getElementById("priceRange").style.backgroundColor = containerColor[currentColorIndex];
  const select = document.getElementsByClassName('mySelect'); 
  Array.from(select).forEach(sel => sel.style.color = navlinkColor[currentColorIndex]);

  document.getElementById("myCatalog").style.color = navlinkColor[currentColorIndex];

  const productName = document.getElementsByClassName('product_name'); 
  Array.from(productName).forEach(prodName => prodName.style.color = navlinkColor[currentColorIndex]);

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

}
function validateForm() {
  let email = document.forms["myForm"]["email"].value;
 
  
  if (email == "" || !email.includes("@")) { 
    alert("Please enter a valid email.");
    return false;
  }
  return true;
}

function showForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}


// Rating system
document.querySelectorAll('.rating').forEach((rating) => {
  const stars = rating.querySelectorAll('.star');
  stars.forEach((star) => {
      star.addEventListener('click', () => {
          const productID = star.getAttribute('data-product');
          const starIndex = parseInt(star.getAttribute('data-index'));

          stars.forEach((s, i) => {
              s.style.color = i <= starIndex ? 'gold' : 'black';
          });
          
          console.log(`Product ${productID} rated ${starIndex + 1} stars`);
      });
  });
});

// Toggle additional content
document.getElementById('toggleButton').addEventListener('click', function() {
  const content = document.getElementById('additionalContent');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
});

let currentStep = 0;

// Function to show the multi-step form
function showForm() {
    document.getElementById('popupForm').style.display = 'block';
    showStep(currentStep);
}

// Function to close the multi-step form
function closeForm() {
    document.getElementById('popupForm').style.display = 'none';
}

// Function to display the current step
function showStep(step) {
    const steps = document.getElementsByClassName('step');
    for (let i = 0; i < steps.length; i++) {
        steps[i].style.display = 'none'; // Hide all steps
    }
    steps[step].style.display = 'block'; // Show current step
}

// Function to navigate to the next step
function nextStep() {
    const steps = document.getElementsByClassName('step');
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

// Function to navigate to the previous step
function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

// Function to display confirmation details
function displayConfirmation() {
    const confirmationDiv = document.getElementById('confirmation');
    const formData = new FormData(document.getElementById('formSteps'));
    confirmationDiv.innerHTML = '';
    formData.forEach((value, key) => {
        confirmationDiv.innerHTML += `<p><strong>${key}</strong>: ${value}</p>`;
    });
}
function playSound() {
  var sound = document.getElementById('notificationSound');
  sound.play();
}

function showForm() {
  document.getElementById('popupForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('popupForm').style.display = 'none';
}

// Функция фильтрации продуктов
function filterProducts() {
  const colorFilter = document.getElementById('colorFilter').value;
  const sizeFilter = document.getElementById('sizeFilter').value;
  const priceFilter = document.getElementById('priceRange').value;

  const products = document.querySelectorAll('.product-item');

  products.forEach((product) => {
      const productColor = product.getAttribute('data-color');
      const productSize = product.getAttribute('data-size');
      const productPrice = parseInt(product.getAttribute('data-price'));

      // Проверяем фильтры
      const matchesColor = !colorFilter || productColor === colorFilter;
      const matchesSize = !sizeFilter || productSize === sizeFilter;
      const matchesPrice = (priceFilter === 'low' && productPrice <= 10000) ||
                           (priceFilter === 'medium' && productPrice > 10000 && productPrice <= 50000) ||
                           (priceFilter === 'high' && productPrice > 50000) ||
                           !priceFilter;

      // Показываем или скрываем продукт на основе фильтров
      if (matchesColor && matchesSize && matchesPrice) {
          product.style.display = 'block'; // Показываем продукт
      } else {
          product.style.display = 'none'; // Скрываем продукт
      }
  });

  // Сохраняем настройки фильтров в локальное хранилище
  saveFilterSettings();
}

// Сохраняем настройки фильтров в локальное хранилище
function saveFilterSettings() {
  const selectedFilters = {
      color: document.getElementById("colorFilter").value,
      size: document.getElementById("sizeFilter").value,
      priceRange: document.getElementById("priceRange").value,
  };

  localStorage.setItem("filterSettings", JSON.stringify(selectedFilters));
}

// Применяем настройки фильтров из локального хранилища при загрузке страницы
function applyFilterSettings() {
  const savedFilters = JSON.parse(localStorage.getItem("filterSettings"));

  if (savedFilters) {
      document.getElementById("colorFilter").value = savedFilters.color || "";
      document.getElementById("sizeFilter").value = savedFilters.size || "";
      document.getElementById("priceRange").value = savedFilters.priceRange || "";
      
      // Применяем фильтры после загрузки
      filterProducts();
  }
}
document.getElementById("logoutButton").addEventListener("click", function() {
  // Если нужно очистить данные после логаута
  // localStorage.removeItem("username");
  // localStorage.removeItem("email");

  // Перенаправление на страницу логина
  window.location.href = "login.html";
});

// Вызываем applyFilterSettings при загрузке страницы
document.addEventListener("DOMContentLoaded", applyFilterSettings);

// Добавляем слушатели событий, чтобы сохранять настройки фильтров при изменении
document.getElementById("colorFilter").addEventListener("change", filterProducts);
document.getElementById("sizeFilter").addEventListener("change", filterProducts);
document.getElementById("priceRange").addEventListener("change", filterProducts);
