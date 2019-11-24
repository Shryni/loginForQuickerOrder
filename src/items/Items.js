import React from 'react';
import { Input, Button } from 'antd';

class Items extends React.Component {
  state = {
      itemNumber: '',
      quantity:'',
      price:'',


  };

  handleChange = (e,key) => {
    this.setState({[key]: e.target.value});
  };

  handleSubmit = (event) => {
    alert('Items was created on: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form style={{ width: '50%', margin: 'auto'}} onSubmit={this.handleSubmit}>
		<label>
          Item Number
          <Input value={this.state.value} onChange={(e) => this.handleChange(e,'itemNumber')} />
        </label><br/>

		<label>
		 Quantity
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'quantity')} />
        </label><br/>

		<label>
		Price
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'price')} />
        </label><br/>

        <div>
          <Button type="primary">Save</Button>
          <Button type="danger">Cancel</Button>
        </div>
      </form>
      </div>
    );
  }
}
export default Items;
