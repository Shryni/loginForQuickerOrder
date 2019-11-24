import React from 'react';
import { Input, Button } from 'antd';
import Header from '../Header';
import Services from '../services/quickOrderServicesImpl';
class Requestor extends React.Component {
  state = {
      firstName: '',
      lastName:'',
      role:'',
      store:'',
      starcustomer:'',
      allRequestor:[],
  };
  componentDidMount() {
    Services.get('requestor/all/')
  .then(res => {
    this.setState({allRequestor: res.data});
  });
  } 
  handleChange = (e,key) => {
    this.setState({[key]: e.target.value});
  };

  handleSubmit = (event) => {
    alert('Requestor was created on: ' + this.state.value);
    event.preventDefault();
  }

  renderAllRequestor = () =>{
    return this.state.allRequestor.map(element => {
      return <li key={element.id}>{element.first_name}</li>;
    });
  }

  render() {
    return (
      <div>
        <Header headerText='Requestor Page'/>
      <form style={{ width: '50%', margin: 'auto'}} onSubmit={this.handleSubmit}>
		<label>
          First Name
          <Input value={this.state.value} onChange={(e) => this.handleChange(e,'firstName')} />
        </label><br/>

		<label>
		Last Name
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'lastName')} />
        </label><br/>

		<label>
		Role
        <select value={this.state.value} onChange={(e) => this.handleChange(e,'role')} >
            <option value="Manager">Manager</option>
            <option value="Supervisor">Supervisor</option>
        </select>
        </label><br/>



		<label>
		Store
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'store')} />
        </label><br/>


		<label>
		Star Customer:
    <Input value={this.state.value} onChange={(e) => this.handleChange(e,'starcustomer')} />
        </label><br/>

		
        <div>
          <Button type="primary">Save Config</Button>
          <Button type="danger">Cancel</Button>
        </div>
      </form>
      <div>
        {
          this.renderAllRequestor()
        }
      </div>
      </div>
    );
  }
}
export default Requestor;
