import React from 'react';
import { Input, Button } from 'antd';
import Header from '../Header';
import Services from '../services/quickOrderServicesImpl';
class PurchaseRequest extends React.Component {
  state = {
      prNumber: '',
      title:'',
      requestedBy:'',
      status:'',
      expectedDateofDelivery:'',
      grandTotal:'',
allPurchaseRequests:[],
  };
    componentDidMount() {
      Services.get('purchaseRequisition/all/')
    .then(res => {
      this.setState({allPurchaseRequests: res.data});
    });
    } 
  handleChange = (e,key) => {
    this.setState({[key]: e.target.value});
  };

  handleSubmit = (event) => {
    alert('PR was created on: ' + this.state.value);
    event.preventDefault();
  }

renderAllPurchaseRequests = () =>{
    return this.state.allPurchaseRequests.map(element => {
      return <li key={element.id}>{element.title}</li>;
    });
  }
  render() {
    return (
      <div>
      <form style={{ width: '50%', margin: 'auto'}} onSubmit={this.handleSubmit}>
		<label>
          PR Number
          <Input value={this.state.value} onChange={(e) => this.handleChange(e,'prNumber')} />
        </label><br/>

		<label>
		 Title
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'title')} />
        </label><br/>

		<label>
		Requested By
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'requestedBy')} />
        </label><br/>


		<label>
		Status
        <select value={this.state.value} onChange={(e) => this.handleChange(e,'status')} >
            <option value="Draft">Draft</option>
            <option value="InProgress">In Progress</option>
            <option value="Approved">Approved</option>
        </select>
        </label><br/>


		<label>
		Expected Date of Delivery
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'expectedDateofDelivery')} />
        </label><br/>




        <div>
          <Button type="primary">Save</Button>
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
export default PurchaseRequest;
