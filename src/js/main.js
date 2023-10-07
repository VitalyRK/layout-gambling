import '../scss/style.scss'

// CHANGE LANGUAGE
const changeLanguageText = document.getElementById('change-language-text');
document.getElementById('change-language-button').addEventListener('click', () => {
  changeLanguageText.innerHTML = changeLanguageText.innerHTML === 'EN' ? 'RU' : 'EN';
})

// ADAPTIVE MENU

const openMenuButton = document.getElementById('header__button-menu');
const iconOpenButton = document.getElementById('header__button-open');
const iconCloseButton = document.getElementById('header__button-close');
const navigationMenu = document.getElementById('navigation');

openMenuButton.addEventListener('click', () => {
  iconOpenButton.classList.toggle('hidden-button');
  iconCloseButton.classList.toggle('hidden-button');
  navigationMenu.classList.toggle('navigation__active');
})