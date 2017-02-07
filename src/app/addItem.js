import React, { PropTypes } from 'react';

class AddItem extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    onAdd(this.refs.newItem.value);
  }
  render() {
    return (
      <form className="add-todo" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" required ref="newItem"/>
        <input type="submit" value="Hit me" />
      </form>
    );
  }

}

// AddItem.propTypes = {
//   onAdd: PropTypes.func.isRequired,
// };

export default AddItem;
