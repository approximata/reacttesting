import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import TodoItem from './todoItem';
import AddItem from './addItem';
import About from './about';


require('./css/index.css');

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.state =
    {
      todos: ['wash up', 'eat some cheese', 'take a nap'],
    };
  }

  onAdd(item) {
    const updatedTodos = this.state.todos;
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
        <Link to={'/about'}>About</Link>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    );
  }
}

const App = () =>
  (
    <Router history={browserHistory}>
      <Route path={'/'} component={TodoComponent} />
      <Route path={'/about'} component={About} />
    </Router>
  );

ReactDOM.render(<App />, document.querySelector('.todo-wrapper'));
