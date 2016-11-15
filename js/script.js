var letter = document.querySelector(".letter");
  
var popup = document.querySelector(".popup-container");
var overlay = document.querySelector(".popup-overlay");
var close = popup.querySelector(".popup-container-close");
  
var form = popup.querySelector(".popup-form");
var username = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message-text]");

var storage = localStorage.getItem("username");

var map = document.querySelector (".map");
var popupmap = document.querySelector (".popup-map");
var mapclose = popupmap.querySelector (".popup-container-close");

//Модальное окно
letter.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-container-display");
  overlay.classList.add("popup-overlay-display");
    
  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-container-display");
  overlay.classList.remove("popup-overlay-display");
});

overlay.addEventListener("click", function(event) {
  if (popup.classList.contains("popup-container-display")) {
    popup.classList.remove("popup-container-display");
    overlay.classList.remove("popup-overlay-display");
  }
});

form.addEventListener("submit", function(event) {
  if (!username.value || !email.value || !message.value) {
    event.preventDefault();
  } else {
    localStorage.setItem("username", username.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup-container-display")) {
      popup.classList.remove("popup-container-display");
      overlay.classList.remove("popup-overlay-display");
    }
  }
});

//Карта
map.addEventListener("click", function(event) {
  event.preventDefault();
  popupmap.classList.add("popup-map-display");
  overlay.classList.add("popup-overlay-display");
});

mapclose.addEventListener("click", function(event) {
  event.preventDefault();
  popupmap.classList.remove("popup-map-display");
  overlay.classList.remove("popup-overlay-display");
});

overlay.addEventListener("click", function(event) {
  if (popupmap.classList.contains("popup-map-display")) {
    popupmap.classList.remove("popup-map-display");
    overlay.classList.remove("popup-overlay-display");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupmap.classList.contains("popup-map-display")) {
      popupmap.classList.remove("popup-map-display");
      overlay.classList.remove("popup-overlay-display");
    }
  }
});
  