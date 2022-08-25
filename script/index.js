const page = document.querySelector('.page');
const nameProfile = page.querySelector('.profile__name');
const specializationProfile = page.querySelector('.profile__specialization');
const changeProfile = page.querySelector('.profile__change');
const popup = document.querySelector('.popup');
const buttonPopup = popup.querySelector('.popup__button');
const formElement = popup.querySelector('.popup__form');
const namePopup = formElement.querySelector('.popup__field_name_input');
const specializationPopup = formElement.querySelector('.popup__field_specialization_input');

// создаем функции по открытию popup

const openedPopup = function () {
    popup.classList.add('popup_opened');
    namePopup.value = nameProfile.textContent;
    specializationPopup.value = specializationProfile.textContent;
}

// создаем функции по закрытию popup

const closedPopup = function () {
    popup.classList.remove('popup_opened');
}

// создаем функцию по добавление полей из popup в profile

function submitFormHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = namePopup.value;
    specializationProfile.textContent = specializationPopup.value;
    closedPopup();
}



changeProfile.addEventListener('click', openedPopup);
buttonPopup.addEventListener('click', closedPopup);
formElement.addEventListener('submit', submitFormHandler);