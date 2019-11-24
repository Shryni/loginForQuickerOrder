import React from 'react';
import { Input, Button } from 'antd';
import Header from '../Header';
import Services from '../services/quickOrderServicesImpl';
class Quotation extends React.Component {
  state = {
      quoteNumber: '',
      quotedFrom:'',
      requestedBy:'',
      status:'',
      transport:'',
      grandTotal:'',
      deliveryDate:'',
      allquotation:[],
  };
componentDidMount() {
      Services.get('quotation/all/')
    .then(res => {
      this.setState({allquotation: res.data});
    });
    } 
  handleChange = (e,key) => {
    this.setState({[key]: e.target.value});
  };

  handleSubmit = (event) => {
    alert('Quotation was created on: ' + this.state.value);
    event.preventDefault();
  }
renderAllquotation = () =>{
    return this.state.allquotation.map(element => {
      return <li key={element.id}>{element.status}</li>;
    });
  }
  render() {
    return (
      <div>
      <form style={{ width: '50%', margin: 'auto'}} onSubmit={this.handleSubmit}>
		<label>
          Quote Number
          <Input value={this.state.value} onChange={(e) => this.handleChange(e,'quoteNumber')} />
        </label><br/>

		<label>
		 Quoted From
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'quotedFrom')} />
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
		Transport
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'transport')} />
        </label><br/>

		<label>
		Grand Total
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'grandTotal')} />
        </label><br/>

        <label>
		Delivery Date
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'deliveryDate')} />
        </label><br/>


        <div>
          <Button type="primary">Save</Button>
          <Button type="danger">Cancel</Button>
        </div>
      </form>
      <div>
        {
          this.renderAllquotation()
        }
      </div>
      </div>
    );
  }
}
export default Quotation;
