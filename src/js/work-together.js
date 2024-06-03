import axios from 'axios';

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form-work-togezer');
  const footerModal = document.querySelector('.footer-modal-background');
  const modalBlock = document.querySelector('.modal-work-togezer');
  const closeButton = document.querySelector('.footer-modal-btn');
  const closeModalButton = document.querySelector('.work-togezer-close-btn');
  const emailInput = document.querySelector('.input-work-togezer');
  const emailValidIcon = document.querySelector('.email-valid-icon');
  const messageInput = document.querySelector('.textarea-work-togezer');
  const emailErrorMessage = document.querySelectorAll('.error-message')[0];
  const messageErrorMessage = document.querySelectorAll('.error-message')[1];

  footerModal.style.display = 'none';
  modalBlock.style.display = 'none';

  emailInput.addEventListener('input', function() {
    if (validateEmail(emailInput.value.trim())) {
      emailValidIcon.style.display = 'inline';
    } else {
      emailValidIcon.style.display = 'none';
    }
  });

  form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!validateEmail(email)) {
      emailErrorMessage.style.display = 'block';
      emailValidIcon.style.display = 'none';
      return;
    } else {
      emailErrorMessage.style.display = 'none';
    }

    if (message === '') {
      messageErrorMessage.style.display = 'block';
      return;
    } else {
      messageErrorMessage.style.display = 'none';
    }

    try {
      const response = await axios.post('https://portfolio-js.b.goit.study/api/requests', {
        email: email,
        comment: message
      });
      renderModal('Thank you!', 'Your message has been sent successfully.');
    } catch (error) {
      renderModal('Error', 'There was an error sending your message.');
    }

    form.reset();
    emailValidIcon.style.display = 'none';
  });

  closeButton.addEventListener('click', function() {
    footerModal.style.display = 'none';
  });

  closeModalButton.addEventListener('click', function() {
    modalBlock.style.display = 'none';
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      footerModal.style.display = 'none';
      modalBlock.style.display = 'none';
    }
  });

  footerModal.addEventListener('click', function(event) {
    if (event.target === footerModal) {
      footerModal.style.display = 'none';
    }
  });

  modalBlock.addEventListener('click', function(event) {
    if (event.target === modalBlock) {
      modalBlock.style.display = 'none';
    }
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function renderModal(title, message) {
    const modalTitle = modalBlock.querySelector('.modal-title');
    const modalP = modalBlock.querySelector('.modal-p');

    modalTitle.textContent = title;
    modalP.textContent = message;

    modalBlock.style.display = 'flex';
  }
});
