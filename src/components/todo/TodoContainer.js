import React, {Component} from 'react';

import AddButton from './AddButton';
import TodoTabs from './TodoTabs';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

import * as todoActions from '../../actions/todoActions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TodoContainer extends Component {

  constructor() {
    super();
    this.state = {
      isShowingTodoForm: false,
      todos: [],
      visibilityFilter: 'active'
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.todos !== nextProps.todos) {
      this.setState({todos: nextProps.todos});
    }
    if(this.props.visibilityFilter !== nextProps.visibilityFilter) {
      this.setState({visibilityFilter: nextProps.visibilityFilter});
    }
  }

  toggleTodoForm = () => {
    this.setState({isShowingTodoForm: !this.state.isShowingTodoForm})
  };

  addTodo = (todo) => {
    this.setState({
      isShowingTodoForm: !this.state.isShowingTodoForm
    });
    this.props.actions.addTodo(todo);
  };

  switchTab = (e) => {
    this.props.actions.changeVisibilityFilter(e.target.id);
  };

  toggleTodo = (e) => {
    this.props.actions.toggleTodo(parseInt(e.target.id, 10));
  };

  removeTodo = (e) => {
    this.props.actions.removeTodo(parseInt(e.target.id, 10));
  };

  render() {
    return (
        <div className="todo-container">
          <AddButton toggleTodoForm={this.toggleTodoForm} isShowingTodoForm={this.state.isShowingTodoForm}/>
          {
            (this.state.isShowingTodoForm) ?
                <AddTodoForm addTodo={this.addTodo}/>
                :
                <div>
                  <TodoTabs
                      switchTab={this.switchTab}
                      selectedTab={this.state.visibilityFilter}/>
                  <TodoList
                      todos={this.state.todos}
                      toggleTodo={this.toggleTodo}
                      removeTodo={this.removeTodo}
                      isShowing={this.state.visibilityFilter}/>
                </div>
          }
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  };
}

function mapDispatchToProps(dispatch) {
 return {
   actions: bindActionCreators(todoActions, dispatch)
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);