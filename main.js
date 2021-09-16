const goUp = document.querySelector('.go-up');
window.onscroll = () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    goUp.style.display = 'block';
  } else {
    goUp.style.display = 'none';
  }
};

const mobMenu = document.getElementById('m_menu');
const openmobMenu = document.getElementById('ham_btn');
const closemobMenu = document.getElementById('close-menu');
const clickLinks = document.querySelectorAll('.header-link');

openmobMenu.addEventListener('click', () => {
  mobMenu.style.top = '0';
});

closemobMenu.addEventListener('click', () => {
  mobMenu.style.top = '-110%';
});

clickLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobMenu.style.top = '-110%';
  });
});