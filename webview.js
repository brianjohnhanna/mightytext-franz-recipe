'use strict';

const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    const elements = document.querySelectorAll('.unread-msgs');
    let count = 0;

    for (let i = 0; i < elements.length; i += 1) {
      count += parseInt(elements[i].querySelector('.msgCounter').innerText);
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};