// const { contains } = require("micromatch");

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelectorAll('.nav__link');
const tabContainer = document.querySelector('.operations__tab-container');
const btnTab = document.querySelectorAll('.operations__tab');
const content = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav')

/// ////////////////////////////////////
// Modal window

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

navLinks.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})

tabContainer.addEventListener('click', (e) => {
  e.preventDefault()
  const btn = e.target.closest('.operations__tab');

  if (!btn) return

  btnTab.forEach((el) => {
    el.classList.remove('operations__tab--active');
  })
  btn.classList.add('operations__tab--active');

  content.forEach((con) => {
    con.classList.remove('operations__content--active');
  })
  document
    .querySelector(`.operations__content--${btn.dataset.tab}`)
    .classList.add('operations__content--active');
})

function handleNavLink(e) {
  e.preventDefault()
  
  if (e.target.classList.contains('nav__link')) {
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((sibling) => {
      if (sibling !== link)
      {sibling.classList.toggle('opaque')}
    })
    logo.classList.toggle('opaque')
  }
}

nav.addEventListener('mouseover', handleNavLink)
nav.addEventListener('mouseout', handleNavLink)
