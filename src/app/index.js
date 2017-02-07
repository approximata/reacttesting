import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todoItem';
import AddItem from './addItem';

require('./css/index.css');

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.state =
    {
      todos: ['do it', 'not do it'],
      counter: 0,
    };
  }

  onAdd(item) {
    const updatedTodos = this.state.todos;
    console.log("eccco");
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos,
    });
  }

  onDelete(item) {
    const updateTodos = this.state.todos.filter(value => value !== item);
    this.setState({
      todos: updateTodos,
    });
  }

  render() {
    let todos = this.state.todos;
    todos = todos.map((item, index) =>
      (<TodoItem item={item} key={index} onDelete={this.onDelete} />)
    );
    return (
      <div className="todo-list">
        <h1>Helloa</h1>
        <ul>{todos}</ul>
        <p>{this.state.counter}</p>
        <AddItem />

      </div>
    );
  }
}

ReactDOM.render(<TodoComponent />, document.querySelector('.todo-wrapper'));
