const navigationListEl = document.querySelector('.backdrop-menu-list');
const menuBtnEl = document.querySelector('.menu-btn');
const menuBackdrop = document.querySelector('.menu-backdrop');
const closeModalBtnEl = document.querySelector('.close-modal-btn ');

function toggleModal() {
    menuBackdrop.classList.toggle('is-open');
}

menuBtnEl.addEventListener('click', toggleModal);

closeModalBtnEl.addEventListener('click', toggleModal);

navigationListEl.addEventListener('click', (event) => {
    if (event.target) {
        toggleModal();
    }
})