import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div>
        Quick Order
        <Link to="/">Home</Link>
         <Divider type="vertical" />
        <Link to="/requestor_store">Store Details</Link>
         <Divider type="vertical" />
        <Link to="/purchase_request">Purchase Requests</Link>
         <Divider type="vertical" />
         <Link to="/quotation">Quotation</Link>
          <Divider type="vertical" />
      </div>
    </div>
  );
};

export default Header;
