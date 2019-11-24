import React from 'react';
import { Input, Button } from 'antd';
import Header from '../Header';
import Services from '../services/quickOrderServicesImpl';
class RequestorStore extends React.Component {
  state = {
      requestorStoreName: '',
      address1:'',
      address2:'',
      address3:'',
      city:'',
      eircode:'',
      storeApprovalLimit:'',
      email:'',
      allRequestorStores:[],
  };
    componentDidMount() {
      Services.get('requestorStore/all/')
    .then(res => {
      this.setState({allRequestorStores: res.data});
    });
    } 
  handleChange = (e,key) => {
    this.setState({[key]: e.target.value});
  };

  handleSubmit = (event) => {
    alert('RequestorStore was created on: ' + this.state.value);
    event.preventDefault();
  }

  renderAllRequestorStores = () =>{
    return this.state.allRequestorStores.map(element => {
      return <li key={element.id}>{element.store_name}</li>;
    });
  }

  render() {
    return (
      <div>
      <form style={{ width: '50%', margin: 'auto'}} onSubmit={this.handleSubmit}>
		<label>
          RequestorStore Name:
          <Input value={this.state.value} onChange={(e) => this.handleChange(e,'requestorStoreName')} />
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
		Store Approval Limit
		<Input value={this.state.value} onChange={(e) => this.handleChange(e,'storeApprovalLimit')} />
        </label><br/>

		<label>
		Email
		<Input value={this.state.value} onChange={(e) => this.handleChange(e,'email')} />
        </label><br/>

        <div>
          <Button type="primary">Save Config</Button>
          <Button type="danger">Cancel</Button>
        </div>

      </form>
      <div>
        {
          this.renderAllRequestorStores()
        }
      </div>
      </div>
    );
  }
}
export default RequestorStore;
