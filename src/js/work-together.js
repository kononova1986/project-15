import axios from 'axios';

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form-work-togezer');
  const footerModal = document.querySelector('.footer-modal-background');
  const closeButton = document.querySelector('.footer-modal-btn');
  const emailInput = document.querySelector('.input-work-togezer');
  const messageInput = document.querySelector('.textarea-work-togezer');
  const emailErrorMessage = document.querySelectorAll('.error-message')[0];
  const messageErrorMessage = document.querySelectorAll('.error-message')[1];

  footerModal.style.display = 'none';

  function toggleKeyboardListener(isOpen) {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKeyPress);
    } else {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    }
  }

  function handleEscapeKeyPress(event) {
    if (event.key === 'Escape') {
      footerModal.style.display = 'none';
    }
  }

  form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!validateEmail(email)) {
      emailErrorMessage.style.display = 'block';
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
      await axios.post('https://portfolio-js.b.goit.study/api/requests', {
        email: email,
        comment: message
      });
      footerModal.style.display = 'flex';
      toggleKeyboardListener(true);
    } catch (error) {
      alert('Произошла ошибка при отправке сообщения.');
    }

    form.reset();
  });

  closeButton.addEventListener('click', function() {
    footerModal.style.display = 'none';
    toggleKeyboardListener(false); 
  });

  footerModal.addEventListener('click', function(event) {
    if (event.target === footerModal) {
      footerModal.style.display = 'none';
      toggleKeyboardListener(false); 
    }
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});