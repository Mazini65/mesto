let page = document.querySelector('.page');
console.log(page);
let changeContent = page.querySelector('.profile__content_change');
console.log(changeContent);
let popup = document.querySelector('.popup');
console.log(popup);
let openedPopup = document.querySelector('.popup_opened');
console.log(openedPopup);
let closePopup = popup.querySelector('.popup__button');
console.log(closePopup);

let togglePopup = function () {
    popup.classList.toggle('popup_opened');
}

changeContent.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);

let formElement = document.querySelector('.popup__form');
let formPopupField = formElement.querySelector('.popup__form_field');
let formPopupSpecialization = formElement.querySelector('.popup__form_specialization');

function formSubmitHandler (evt) {
    evt.preventDefault();

    let name = formPopupField.value;
    let specialization = formPopupSpecialization.value;

    let nameProfileContent = page.querySelector('.profile__content_name')
    let specializationProfile = page.querySelector('.profile__specialization')

    nameProfileContent.textContent = name;
    specializationProfile.textContent = specialization;
}

formElement.addEventListener('submit', formSubmitHandler);