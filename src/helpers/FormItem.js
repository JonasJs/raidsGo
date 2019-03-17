import React, { Component } from 'react';

class FormItem extends Component {
  render() {
    return (
      <div className="form-item">
        <label> { this.props.label } </label>
        <input type={ this.props.type } name={ this.props.name } required ></input>
      </div>
    );
  }
}

export default FormItem;
