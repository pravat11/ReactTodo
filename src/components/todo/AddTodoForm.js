import React, {Component} from 'react';

class AddTodoForm extends Component {

  constructor() {
    super();
    this.state = {
      todo: ''
    }
  }

  render() {
    return (
        <div className="form-elements">
          <span className="todo-form-header">Add a new todo</span>
          <textarea type="text" onChange={(e) => this.setState({todo: e.target.value})}/>
          <button onClick={this.props.closeForm} className='cancel-button'>Cancel</button>
          <input className="submit-button" type="submit" onClick={() => this.props.addTodo(this.state.todo)}/>
        </div>
    );
  }
}

export default AddTodoForm;