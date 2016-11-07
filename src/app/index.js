import React from 'react';
import ReactDOM from 'react-dom';

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.changing = this.changing.bind(this);
    this.state =
    {
      todos: ['do it', 'not do it'],
      counter: 0,
    };
  }

  render() {
    let todos = this.state.todos;
    todos = todos.map((item, index) =>
      (<TodoItem item={item} key={index} />)
    );
    // setTimeout(() => {
    //   this.setState({
    //     counter: 1,
    //   });
    // }, 1000);
    return (
      <div>
        <h1>Helloa</h1>
        <ul>{todos}</ul>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

const TodoItem = ({ item, handleDelete }) => (
  <li>
    <div className="todo-item">
      <span className="item-name">{item}</span>
      <span className="item-delete" onClick={handleDelete}> x </span>
    </div>
  </li>
);

TodoItem.propTypes = {
  item: React.PropTypes.string.isRequired,
};

// functional component

// const TodoComponent = ({ cheese }) => (
//   <div>
//     <h1>Helloa</h1>
//     <p>{cheese.name}</p>
//     <p>{cheese.price}</p>
//   </div>
// );
//
// TodoComponent.propTypes = {
//   cheese: React.PropTypes.object.isRequired,
// };
//
// const myCheese = { name: 'camabert', price: 234 };

// class solution

// class TodoComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <h1>Helloa</h1>
//     );
//   }
// }

ReactDOM.render(<TodoComponent />, document.querySelector('.todo-wrapper'));
