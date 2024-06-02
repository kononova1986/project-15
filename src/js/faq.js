import Accordion from 'accordion-js';
//import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  var options = {
    duration: 600,
    ariaEnabled: true,
    collapse: true,
    showMultiple: false,
    openOnInit: [0], 
    elementClass: 'accordion-item',
    triggerClass: 'list-title-box',
    panelClass: 'accordion-text',
    activeClass: 'active',
    beforeOpen: function (element) {
      console.log('Before opening:', element);
    },
    onOpen: function (element) {
      console.log('Opened:', element);
    },
    beforeClose: function (element) {
      console.log('Before closing:', element);
    },
    onClose: function (element) {
      console.log('Closed:', element);
    },
  };

  new Accordion('.accordion', options);

  document
    .querySelectorAll('.accordion-item .list-title-box')
    .forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var parentItem = trigger.closest('.accordion-item');
        var wasActive = parentItem.classList.contains('active');

        document.querySelectorAll('.accordion-item').forEach(function (item) {
          item.classList.remove('active');
        });

        if (!wasActive) {
          parentItem.classList.add('active');
        }
      });
    });
});