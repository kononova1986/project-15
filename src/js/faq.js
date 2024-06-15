import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-list', {
  duration: 500,
  ariaEnabled: true,
  collapse: true,
  showMultiple: false,
  onlyChildNodes: false,
  openOnInit: [0],
  elementClass: 'accordion-item',
  triggerClass: 'icon-faq-up',
  panelClass: 'list-wrap',
  activeClass: 'active',
  beforeOpen: function (currElement) {
    console.log('Before opening:', currElement);
  },
  onOpen: function (currElement) {
    console.log('Opened:', currElement);
  },
  beforeClose: function (currElement) {
    console.log('Before closing:', currElement);
  },
  onClose: function (currElement) {
    console.log('Closed:', currElement);
  },
});
