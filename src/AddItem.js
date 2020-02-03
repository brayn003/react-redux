import React from 'react';

import { Input, Button } from 'antd';


class AddItem extends React.Component {
  state = {
    inputVal: ''
  }

  onChangeInput = (e) => {
    this.setState({inputVal: e.target.value})
  }

  onClickButton = () => {
    this.setState({ inputVal: ''})
    this.props.onClickButton(this.state.inputVal);
  }

  render() {
    return (
      <div>
        <h2>Add Item</h2>
        <div style={{display: 'flex'}}>
          <Input 
            size="large" 
            placeholder="Basic usage"
            onChange={this.onChangeInput}
            value={this.state.inputVal}
          />
          <Button
            onClick={this.onClickButton} 
            size="large"
            type="primary" 
            icon="arrow-right"
          />
        </div>
      </div>
    )
  }
}

export default AddItem;