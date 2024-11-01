function toggleAnswer(id) {
  var answer = document.getElementById(id);
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}
function displayDateTime() {
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('dateTime').innerHTML = date.toLocaleDateString('ru', options);
}

function displayCurrentTime() {
  const time = new Date().toLocaleTimeString('ru');
  document.getElementById('dateTime').innerHTML = time;
}

// Update date and time every second
setInterval(displayDateTime, 1000);

// Add click event listener to the button
document.getElementById('timeButton').addEventListener('click', displayCurrentTime);



// Function to handle keydown events for menu navigation
function handleKeyDown(event) {
  const navItems = document.querySelectorAll('#navMenu .nav-link');
  const currentIndex = Array.from(navItems).findIndex(item => document.activeElement === item);

  if (event.key === 'ArrowDown') {
      // Move focus down
      event.preventDefault(); // Prevent scrolling
      const nextIndex = (currentIndex + 1) % navItems.length; // Loop back to start
      navItems[nextIndex].focus();
  } else if (event.key === 'ArrowUp') {
      // Move focus up
      event.preventDefault(); // Prevent scrolling
      const prevIndex = (currentIndex - 1 + navItems.length) % navItems.length; // Loop to end
      navItems[prevIndex].focus();
  }
}

// Добавляем обработчик события нажатия клавиш на весь документ
document.addEventListener('keydown', handleKeyDown);

window.addEventListener('DOMContentLoaded', () => {
    const firstNavItem = document.querySelector('#navMenu .nav-link');
    if (firstNavItem) {
        firstNavItem.focus();
    }
});

// Function to display greeting based on the time of day
function displayGreeting() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
      greeting = "Good morning!";
  } else if (hour < 18) {
      greeting = "Good afternoon!";
  } else {
      greeting = "Good evening!";
  }

  document.getElementById('greeting').innerHTML = greeting;
}

// // Call displayGreeting when the page loads
// window.addEventListener('DOMContentLoaded', displayGreeting);

// // Функция для сохранения фильтров в localStorage
// function saveFilters() {
//   const selectedCategory = document.getElementById("category").value;
//   localStorage.setItem("selectedCategory", selectedCategory);
// }

// // Функция для загрузки и применения сохраненных фильтров
// function applySavedFilters() {
//   const savedCategory = localStorage.getItem("selectedCategory");

//   if (savedCategory) {
//       document.getElementById("category").value = savedCategory;
//       applyFilters();
//   }
// }


// // Функция для применения фильтров к элементам каталога
// function applyFilters() {
//   const selectedCategory = document.getElementById("category").value;
//   const products = document.querySelectorAll(".product-item");

//   products.forEach((product) => {
//       const productCategory = product.getAttribute("data-category");

//       // Показать/скрыть товар в зависимости от выбранной категории
//       if (selectedCategory === "" || productCategory === selectedCategory) {
//           product.style.display = "block";
//       } else {
//           product.style.display = "none";
//       }
//   });
// }

// // Событие для сохранения фильтров при изменении выбора
// document.getElementById("category").addEventListener("change", () => {
//   saveFilters();
//   applyFilters();
// });

// // Вызов функции для применения сохранённых фильтров при загрузке страницы
// window.addEventListener("load", applySavedFilters);
