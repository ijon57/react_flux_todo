var React = require('react');
var TodoStore = require('../stores/TodoStore');
var TodoItem = require('./TodoItem');
var TodoActions = require('../actions/TodoActions');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {todos: TodoStore.getAll(), inputValue: ''};
  },
  
  onInputKeyDown: function(event){
    if(event.keyCode === 13){
      TodoActions.createTodo(event.target.value);
      this.setState({
        todos: this.state.todos,
        inputValue: ''
      });
    }
  },
  
  componentDidMount: function() {
    TodoStore.addUpdateListener(this.onUpdate);
  },

  onInputChange: function(event) {
    this.setState({
      todos: this.state.todos,
      inputValue: event.target.value
    });
  },

  onUpdate: function(){
    this.setState({
      todos: TodoStore.getAll(),
      inputValue: this.state.inputValue
    });
  },
  
  render: function(){
    var todos = [];
    for(var id in this.state.todos){
      var todo = this.state.todos[id];
      todos.push(
        <TodoItem key={todo.id} todo={todo} />
      )
    }
    return (
      <div>
        <input onKeyDown={this.onInputKeyDown} onChange={this.onInputChange} value={this.state.inputValue} />
        <ul className="todo-list">
          {todos}
        </ul>
      </div>
    );
  }
});

module.exports = TodoApp;