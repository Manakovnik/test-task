//---------------------- бургер меню-----------------------

// создаем переменные
const burgerButton = document.querySelector(".burger__btn");
const burgerMenu = document.querySelector(".burger__menu");
const burgerLink = document.querySelectorAll(".burger__link");

// обработчик событий на кнопку бургера для открытия/закрытия панели
burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("burger-active");
  burgerMenu.classList.toggle("burger__menu-active");
});

// закрытие бургер-меню при клике на ссылку из меню
burgerLink.forEach((elem) => {
  elem.addEventListener("click", () => {
    burgerButton.classList.toggle("burger-active");
    burgerMenu.classList.toggle("burger__menu-active");
  });
});

// -------------------------кнопка help-----------------------
// создаем переменные
const help = document.querySelector(".header__help-btn");
const modal = document.querySelector(".modal");

// обработчик событий на кнопку
help.addEventListener("click", () => {
  modal.classList.toggle("modal-active");
});

// закрытие модального окна при клике в любом месте окна браузера
window.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest(".modal") && !target.closest(".header__help-btn")) {
    modal.classList.remove("modal-active");
  }
});

//---------------- модальное окно авторизации пользователя--------------
// создаем переменные
const authorLink = document.querySelector(".private-link");
const loginModal = document.querySelector(".login");
const loginModalBackground = document.querySelector(".modal__backgrnd");
const loginCloseBtn = document.querySelector(".login__close-btn");
const submitBtn = document.querySelector(".login__btn");

// открываем модальное окно авторизации по клику на ссылку в бургер меню
authorLink.addEventListener("click", () => {
  loginModal.style.display = "flex";

  // затемняем фон
  loginModalBackground.style.visibility = "visible";
});

// функция закрытия модального окна авторизации
function closeLoginModal() {
  loginModal.style.display = "none";
  loginModalBackground.style.visibility = "hidden";
}

// вызываем функцию закрытия модального окна при клике на крестик
loginCloseBtn.addEventListener("click", () => {
  closeLoginModal();
});

// либо при клике на кнопку войти
submitBtn.addEventListener("click", () => {
  closeLoginModal();
});
