import React, {Component} from 'react';

class TodoTabs extends Component {
  render() {
    let selectedTab = this.props.selectedTab;
    return (
        <div>
          <button id="active" className={'todo-tabs '+ ((selectedTab === 'active') && 'active')} onClick={this.props.switchTab}>Active</button>
          <button id="completed" className={'todo-tabs ' + ((selectedTab === 'completed') && 'active')} onClick={this.props.switchTab}>Completed</button>
          <button id="all" className={'todo-tabs ' + ((selectedTab === 'all') && 'active')} onClick={this.props.switchTab}>All</button>
        </div>
    );
  }
}

export default TodoTabs;