import React from 'react';
import { Input, Button } from 'antd';
import Header from '../Header';
import Services from '../services/quickOrderServicesImpl';
class PurchaseOrder extends React.Component {
  state = {
      poNumber: '',
      status:'',
      quoteDate:'',
      totalAmount:'',
allPurchaseOrders:[],

  };
    componentDidMount() {
      Services.get('purchaseorder/all/')
    .then(res => {
      this.setState({allPurchaseOrders: res.data});
    });
    } 
  handleChange = (e,key) => {
    this.setState({[key]: e.target.value});
  };

  handleSubmit = (event) => {
    alert('PO was created on: ' + this.state.value);
    event.preventDefault();
  }

renderAllPO = () =>{
    return this.state.allPurchaseOrders.map(element => {
      return <li key={element.id}>{element.quote_date}</li>;
    });
  }
  render() {
    return (
      <div>
      <form style={{ width: '50%', margin: 'auto'}} onSubmit={this.handleSubmit}>
		<label>
          PO Number
          <Input value={this.state.value} onChange={(e) => this.handleChange(e,'poNumber')} />
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
		Quote Date
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'quoteDate')} />
        </label><br/>

        <label>
		Total Amount
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'totalAmount')} />
        </label><br/>



        <div>
          <Button type="primary">Save</Button>
          <Button type="danger">Cancel</Button>
        </div>
      </form>
<div>
        {
          this.renderAllPO()
        }
      </div>
      </div>
    );
  }
}
export default PurchaseOrder;
