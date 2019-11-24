import React from 'react';
import { Input, Button } from 'antd';
import Header from '../Header';
class Invoice extends React.Component {
  state = {
      invoiceNumber: '',
      status:'',
      quoteDate:'',
      totalAmount:'',
      
      
  };

  handleChange = (e,key) => {
    this.setState({[key]: e.target.value});
  };

  handleSubmit = (event) => {
    alert('Invoice was created on: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <div>
        <Header headerText='Requestor Store Page'/>
      <form style={{ width: '50%', margin: 'auto'}} onSubmit={this.handleSubmit}>
		<label>
          Invoice Number
          <Input value={this.state.value} onChange={(e) => this.handleChange(e,'invoiceNumber')} />
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
      </div>
    );
  }
}
export default Invoice;
