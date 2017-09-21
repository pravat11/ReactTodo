import React, {Component} from 'react';

class AddButton extends Component {

  render() {
    let isShowingForm = this.props.isShowingTodoForm;
    return (
        <div className="button-wrapper">
          <button onClick={this.props.toggleTodoForm} className={isShowingForm? 'cancel-button': 'add-button'}>{isShowingForm? 'Cancel' : 'Add new todo'}</button>
        </div>
    );
  }
}

export default AddButton;