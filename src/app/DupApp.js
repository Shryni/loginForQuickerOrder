
import React from 'react';
import './app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import { ACCESS_TOKEN } from '../constants';
import { Layout, notification } from 'antd';
const { Content } = Layout;

class App extends React.Component {
  
  state = {
    activePage: 'purchase-request'
  };

  setActivePage = (key) => {
    this.setState({ activePage: key });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/requestor_store" component={RequestorStore} />
            <Route path="/requestor" component={Requestor} />
            <Route path="/quotation" component={Quotation} />
            <Route path="/purchase_request" component={PurchaseRequest} />
            <Route path="/purchase_order" component={PurchaseOrder} />
            <Route path="/items" component={Items} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
};


export default App;
