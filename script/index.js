let page = document.querySelector('.page');
console.log(page);
let changeProfile = page.querySelector('.profile_change');
console.log(changeProfile);
let popup = document.querySelector('.popup');
console.log(popup);
let openedPopup = document.querySelector('.popup_opened');
console.log(openedPopup);
let closePopup = popup.querySelector('.popup_button');
console.log(closePopup);

let togglePopup = function () {
    popup.classList.toggle('popup_opened');
}

changeProfile.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);

let formElement = document.querySelector('.popup_form');
let fieldPopup = formElement.querySelector('.popup_field');
let specializationPopup = formElement.querySelector('.popup_specialization');

function formSubmitHandler (evt) {
    evt.preventDefault();

    let name = fieldPopup.value;
    let specialization = specializationPopup.value;

    let nameProfile = page.querySelector('.profile_name')
    let specializationProfile = page.querySelector('.profile_specialization')

    nameProfile.textContent = name;
    specializationProfile.textContent = specialization;
}

formElement.addEventListener('submit', formSubmitHandler);