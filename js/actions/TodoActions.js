var AppDispatcher = require('../dispatcher/AppDispatcher');

var TodoActions = {
  createTodo: function(text) {
    AppDispatcher.dispatch({
      actionType: 'create',
      text: text
    });
  }
};

module.exports = TodoActions;