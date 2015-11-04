var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var todos = {};

function generateRandomId(){
  return Math.random().toString(36).substr(2, 16);
}

function createTodo(text){
  var id = generateRandomId();
  todos[id] = {id: id, status: 'open', text: text};
}

var TodoStore = assign({}, EventEmitter.prototype, {
  getAll: function(){
    return todos;
  },

  emitUpdate: function() {
    this.emit('update');
  },

  addUpdateListener: function(callback) {
    this.on('update', callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
  case 'create':
    createTodo(action.text);
    TodoStore.emitUpdate();
    break;
  }
});


module.exports = TodoStore;