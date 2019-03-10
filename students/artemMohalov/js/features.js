
let modalWindow = document.querySelector(".write-to-us");
document.querySelector("#write-to-us-button").addEventListener("click", function(evt){
  evt.preventDefault();
  modalWindow.classList.add("is-showed");
  modalWindow.querySelector("input").focus();
});


document.querySelector(".close-form-button").addEventListener("click", function(evt){
  event.preventDefault();
  document.querySelector(".popap.is-showed").classList.remove("is-showed");
  modalWindow.classList.remove("modal-error");
});




ymaps.ready(init);
function init(){
  // Создание карты.

  let myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [59.939000, 30.321600],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 17
  });
  //coordinates: [59.938631, 30.323055
  myPlacemark = new ymaps.Placemark(
    [59.938750, 30.323155]
    , {
      hintContent: "Б.Конюшенная, д. 19/8",
      balloonContent: "Б.Конюшенная, д. 19/8"
    }
    , {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-marker.png',
      // Размеры метки.
      iconImageSize: [260, 200],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-55, -200]
    }
  );
  myMap.geoObjects.add(myPlacemark);
};

let templateItems = document.querySelectorAll(".templates-item");
document.addEventListener("focusin", onFocusTemplate);
document.addEventListener("focusout",onFocusoutTemplate);


function onFocusTemplate(evt){
  for (let i = 0; i < templateItems.length; i++) {
    // Ищем карточку в которой ссылка с фокусом
    if (templateItems[i].querySelector("a:focus"))
    {
      // Если ховер карточки показан - выходим
      if (templateItems[i].querySelector("hover-showed")) {
        return;
      }
      else {
        // Скрываем ховер у передыдущей карточки с посказанным ховером, если такая еть
        let forClear = this.querySelector(".templates-item-hover.hover-showed");
        if (forClear) {
          forClear.classList.remove("hover-showed");
        }
        // Показываем ховер у текущей карточки
        templateItems[i].querySelector(".templates-item-hover").classList.add("hover-showed");
        return;
      }
    }
  }
  // Если сфокусированный элемент не пренадлежит ни одной карточке,
  // то ищем карточку с показанным ховером (если такая есть) и скрываем ховер
  let forClear = this.querySelector(".templates-item-hover.hover-showed");
  if (forClear) {
    forClear.classList.remove("hover-showed");
  }
};

//Одрабатка события потери фокуса необходима на случай, когда ссылка в ховере
// потеряла фокус ввода, но при этом ни какой другой элемент страницы фокус ввода не получил
function onFocusoutTemplate(){
  setTimeout(delayFocusoutHandler,100);
};

function delayFocusoutHandler(){
  //Проверяем есть ли сфокусированная ссылка в карточах
  if (document.querySelector(".templates-item a:focus")) return;
  //Фокуса в карточках нет - убираем с экрана ховер
  let forClear = document.querySelector(".templates-item-hover.hover-showed");
  if (forClear) {
    forClear.classList.remove("hover-showed");
  }
};

let slides = document.querySelectorAll(".slides-list-item");
let slideButtons = document.querySelectorAll(".slides-switch-button");
let slideLinks = document.querySelectorAll(".slides-list-item .button");
function sliderSwitchClickHandler(num){
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("is-showed");
    slides[i].classList.add("visually-hidden");
  }
  for (let i = 0; i < slideButtons.length; i++) {
    slideButtons[i].classList.remove("active-button");
  }
  for (let i = 0; i < slideLinks.length; i++) {
    slideLinks[i].setAttribute("tabindex","-1");
  }
  slides[num].classList.remove("visually-hidden");
  slides[num].classList.add("is-showed");
  slideButtons[num].classList.add("active-button");
  slideLinks[num].setAttribute("tabindex","0");
};

//let modalWindow = document.querySelector(".write-to-us");
let formFields = modalWindow.querySelectorAll(".form-field");

modalWindow.querySelector("[type='submit']").addEventListener("click", function(evt){
  let res = true;
  modalWindow.classList.remove("modal-error");
  modalWindow.offsetWidth = modalWindow.offsetWidth;
  for (let i = 0; i < formFields.length; i++) {
    res = res && formFields[i].value && formFields[i].checkValidity();
  }
  if (!res) {
    evt.preventDefault();
    modalWindow.classList.add("modal-error");
  }
});

