'use strict';

const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    const allMessages = document.querySelectorAll('.unread-msgs').length;
    const indirectMessages = document.querySelectorAll('.groupThread.unread-msgs').length;
    const directMessages = allMessages - indirectMessages;
    

    // set Franz badge
    Franz.setBadge(directMessages, indirectMessages);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};