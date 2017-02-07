import React, { PropTypes } from 'react';

require('./css/todoItem.css');


const TodoItem = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item);
  };
  return (
    <li>
      <div className="todo-item">
        <span className="item-name">{item}</span>
        <span className="item-remove" onClick={handleDelete}> x </span>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};


export default TodoItem;
