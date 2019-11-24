
import React from 'react';
import './app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoadingIndicator from '../common/LoadingIndicator';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';
import Login from '../user/login/Login';


import PrivateRoute from '../common/PrivateRoute';
import RequestorStore from '../requestorStore/RequestorStore';
import VendorStore from '../vendorStore/VendorStore';
import PurchaseOrder from '../purchaseorder/PurchaseOrder';
import PurchaseRequest from '../purchaseRequest/PurchaseRequest';
import Quotation from '../quotation/Quotation';
import Home from '../home/Home';
import Header from '../Header';
import Items from '../items/Items';
import Invoice from '../invoice/Invoice';
import Requestor from '../requestor/Requestor';
import { getCurrentUser } from '../utils/APIUtils';
import { ACCESS_TOKEN } from '../constants/Constants';
import { Layout, notification } from 'antd';
const { Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });    
  }
  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        isAuthenticated: true,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        isLoading: false
      });  
    });
  }
  
  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
    
    notification[notificationType]({
      message: 'Quicker Order',
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: 'Quicker Order',
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }

  render() {
    if(this.state.isLoading) {
      return <LoadingIndicator />
    }
    return (
      <Layout className="app-container">
         <AppHeader isAuthenticated={this.state.isAuthenticated} 
            currentUser={this.state.currentUser} 
            onLogout={this.handleLogout} />
            <Content className="app-content">
           <div className="container">
           <Switch>
           
                <Route path="/login" exact
                  render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>
                
                <Route component={NotFound}></Route> 
             </Switch>
           </div>
        </Content>
        </Layout>
        
    );
  }
};


export default App;
