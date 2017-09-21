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
        <div>
          <textarea type="text" onChange={(e) => this.setState({todo: e.target.value})}/>
          <input className="submit-button" type="submit" onClick={() => this.props.addTodo(this.state.todo)}/>
        </div>
    );
  }
}

export default AddTodoForm;