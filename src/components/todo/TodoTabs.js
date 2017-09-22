import React from 'react';

export default function TodoTabs(props) {
  const {selectedTab, switchTab} = props;
  return (
      <div>
        <button id="active" className={'todo-tabs ' + ((selectedTab === 'active') && 'active')} onClick={switchTab}>
          Active
        </button>
        <button id="completed" className={'todo-tabs ' + ((selectedTab === 'completed') && 'active')}
                onClick={switchTab}>Completed
        </button>
        <button id="all" className={'todo-tabs ' + ((selectedTab === 'all') && 'active')} onClick={switchTab}>All
        </button>
      </div>
  );
}