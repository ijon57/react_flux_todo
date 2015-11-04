
var React = require('react');

var TodoItem = React.createClass({
  render: function(){
    return (
      <li key={this.props.todo.id}>{this.props.todo.text}</li>
    );
  }
});

module.exports = TodoItem;