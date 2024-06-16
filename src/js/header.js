const navigationListEl = document.querySelector('.backdrop-menu-list');
const menuBtnEl = document.querySelector('.menu-btn');
const menuBackdrop = document.querySelector('.menu-backdrop');
const closeModalBtnEl = document.querySelector('.close-modal-btn ');

function toggleModal() {
  menuBackdrop.classList.toggle('is-open');
}

menuBtnEl.addEventListener('click', toggleModal);

closeModalBtnEl.addEventListener('click', toggleModal);

navigationListEl.addEventListener('click', event => {
  if (event.target) {
    toggleModal();
  }
});

const anchors = document.querySelectorAll('a[class="nav-link"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();

    const sectionsId = anchor.getAttribute('href').substring(1);

    document.getElementById(sectionsId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

const element = document.querySelector('h1');
element.classList.add('animate__animated', 'animate__bounce');

const btn = document.querySelector('.button-background');
const svgBlack = document.querySelector('.icon-btn-black');
const svgWhite = document.querySelector('.icon-btn');
const svgNext = document.querySelectorAll('.icon-next, .icon-back');
const head = document.querySelector('.header');
const menuMobile = document.querySelector('.menu-backdrop');
const modalTitle = document.querySelector('.h-modal');
const modalP = document.querySelector('.p-modal');

btn.addEventListener('click', () => {
  if (svgBlack.style.display === 'none' || svgBlack.style.display === '') {
    svgBlack.style.display = 'block';
    svgWhite.style.display = 'none';
    document.body.style.backgroundColor = '#292929';
    head.style.backgroundColor = '#292929';
    modalTitle.style.color = '#00b068';
    modalP.style.color = '#292929';
    menuMobile.style.backgroundColor = '#292929';
    svgNext.forEach(element => {
      element.style.stroke = '#FFFFFF';
    });
    document
      .querySelectorAll(
        'input, textarea, .links-section , .swiper-slide, .marquee2'
      )
      .forEach(element => {
        element.style.background = '#2a2d32';
      });
    document.querySelectorAll('h1, h2, h3, p, li, a').forEach(element => {
      element.style.color = '#FFFFFF';
    });
    document.querySelectorAll('.icon-faq-up, .header-icon').forEach(element => {
      element.style.stroke = '#FFFFFF';
      element.style.fill = '#FFFFFF';
    });
  } else {
    svgBlack.style.display = 'none';
    svgWhite.style.display = 'block';
    document.body.style.backgroundColor = '#FFFFFF';
    head.style.backgroundColor = '#FFFFFF';
    menuMobile.style.backgroundColor = '#FFFFFF';
    svgNext.forEach(element => {
      element.style.stroke = '#292929';
    });
    document.querySelectorAll('h1, h2, h3, p, li, a').forEach(element => {
      element.style.color = '#292929';
    });
    document
      .querySelectorAll(
        'input, textarea, .links-section , .swiper-slide, .marquee2'
      )
      .forEach(element => {
        element.style.background = 'var(--light-grey)';
      });
    document.querySelectorAll('.icon-faq-up, .header-icon').forEach(element => {
      element.style.stroke = '#292929';
      element.style.fill = '#292929';
    });
  }
});
