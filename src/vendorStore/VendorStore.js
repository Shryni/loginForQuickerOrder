import React from 'react';
import { Input, Button } from 'antd';
import Header from '../Header';
class VendorStore extends React.Component {
  state = {
      vendorStoreName: '',
      address1:'',
      address2:'',
      address3:'',
      city:'',
      eircode:'',
      storeApprovalLimit:'',
      email:'',
  };

  handleChange = (e,key) => {
    this.setState({[key]: e.target.value});
  };

  handleSubmit = (event) => {
    alert('VendorStore was created on: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form style={{ width: '50%', margin: 'auto'}} onSubmit={this.handleSubmit}>
		<label>
          VendorStore Name:
          <Input value={this.state.value} onChange={(e) => this.handleChange(e,'vendorStoreName')} />
        </label><br/>

		<label>
		Address 1:
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'address1')} />
        </label><br/>

		<label>
		Address 2:
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'address2')} />
        </label><br/>


		<label>
		City:
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'city')} />
        </label><br/>


		<label>
		EIR Code:
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'eircode')} />
        </label><br/>

		<label>
		Contact:
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'contact')} />
        </label><br/>


		<label>
		Email
		<Input value={this.state.value} onChange={(e) => this.handleChange(e,'email')} />
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
export default VendorStore;
