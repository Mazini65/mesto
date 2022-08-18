let page = document.querySelector('.page');
console.log(page);
let changeProfile = page.querySelector('.profile__change');
console.log(changeProfile);
let popup = document.querySelector('.popup');
console.log(popup);
let openedPopup = document.querySelector('.popup__opened');
console.log(openedPopup);
let closePopup = popup.querySelector('.popup__button');
console.log(closePopup);

let togglePopup = function () {
    popup.classList.toggle('popup__opened');
}

changeProfile.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);

let formElement = document.querySelector('.popup__form');
let fieldPopup = formElement.querySelector('.popup__field');
let specializationPopup = formElement.querySelector('.popup__specialization');

function formSubmitHandler (evt) {
    evt.preventDefault();

    let name = fieldPopup.value;
    let specialization = specializationPopup.value;

    let nameProfile = page.querySelector('.profile__name')
    let specializationProfile = page.querySelector('.profile__specialization')

    nameProfile.textContent = name;
    specializationProfile.textContent = specialization;
}

formElement.addEventListener('submit', formSubmitHandler);