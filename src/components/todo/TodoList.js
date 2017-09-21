import React, {Component} from 'react';

class TodoList extends Component {
  render() {
    let todos = [];
    let text = '';
    if(this.props.isShowing === 'all') {
      todos = this.props.todos;
      text = 'No todos available';
    }
    else if(this.props.isShowing === 'active') {
      todos = this.props.todos.filter(todo => {return todo.completed === false});
      text = 'No active todos';
    }
    else {
      todos = this.props.todos.filter(todo => {return todo.completed === true});
      text = 'No completed todos';
    }
    return (
        <div>
          <ul>
          {
            (todos.length === 0) && <li style={{textAlign: 'center'}}>{text}</li>
          }
          {
            todos.map(todo => {
              return (
                <li key={todo.id}>
                  <div className="todo-text">{todo.text}</div>
                  <div className="action-buttons">
                    <span id = {todo.id} title="Delete task" className="remove-button" onClick={this.props.removeTodo}>&times;</span>
                    {
                      todo.completed?
                        <span id={todo.id} title="Make todo active" className="remove-button" onClick={this.props.toggleTodo}>&#x21bb;</span>
                      :
                        <span id={todo.id} title="Mark as completed" className="remove-button" onClick={this.props.toggleTodo}>&#10003;</span>
                    }
                  </div>
                  </li>
              );
            })
          }
          </ul>
        </div>
    );
  }
}

export default TodoList;