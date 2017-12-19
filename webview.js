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

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'service.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoYXRzYXBwL3dlYnZpZXcuanMiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJnZXRNZXNzYWdlcyIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY291bnQiLCJpIiwibGVuZ3RoIiwic2V0QmFkZ2UiLCJpbmplY3RDU1MiLCJqb2luIiwiX19kaXJuYW1lIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFrQkMsS0FBRCxJQUFXO0FBQzFCLFFBQU1DLGNBQWMsU0FBU0EsV0FBVCxHQUF1QjtBQUN6QyxVQUFNQyxXQUFXQyxTQUFTQyxnQkFBVCxDQUEwQixTQUExQixDQUFqQjtBQUNBLFFBQUlDLFFBQVEsQ0FBWjs7QUFFQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosU0FBU0ssTUFBN0IsRUFBcUNELEtBQUssQ0FBMUMsRUFBNkM7QUFDM0MsVUFBSUosU0FBU0ksQ0FBVCxFQUFZRixnQkFBWixDQUE2QixzQkFBN0IsRUFBcURHLE1BQXJELEtBQWdFLENBQXBFLEVBQXVFO0FBQ3JFRixpQkFBUyxDQUFUO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBTCxVQUFNUSxRQUFOLENBQWVILEtBQWY7QUFDRCxHQVpEOztBQWNBO0FBQ0FMLFFBQU1TLFNBQU4sQ0FBZ0JiLEtBQUtjLElBQUwsQ0FBVUMsU0FBVixFQUFxQixhQUFyQixDQUFoQjs7QUFFQTtBQUNBWCxRQUFNWSxJQUFOLENBQVdYLFdBQVg7QUFDRCxDQXBCRCIsImZpbGUiOiJ3aGF0c2FwcC93ZWJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoRnJhbnopID0+IHtcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBmdW5jdGlvbiBnZXRNZXNzYWdlcygpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bnJlYWQnKTtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGVsZW1lbnRzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1pY29uPVwibXV0ZWRcIl0nKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXQgRnJhbnogYmFkZ2VcbiAgICBGcmFuei5zZXRCYWRnZShjb3VudCk7XG4gIH07XG5cbiAgLy8gaW5qZWN0IGZyYW56LmNzcyBzdHlsZXNoZWV0XG4gIEZyYW56LmluamVjdENTUyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnc2VydmljZS5jc3MnKSk7XG5cbiAgLy8gY2hlY2sgZm9yIG5ldyBtZXNzYWdlcyBldmVyeSBzZWNvbmQgYW5kIHVwZGF0ZSBGcmFueiBiYWRnZVxuICBGcmFuei5sb29wKGdldE1lc3NhZ2VzKTtcbn07XG4iXX0=