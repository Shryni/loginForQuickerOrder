import React from 'react';

const obj = ['name 1', 'name 2', 'name 3'];

class RequestorList extends React.Component {

  renderLists = () => {
    return obj.map(name => <li>{name}</li>);
  }

  render() {
    return (
      <ul>
        {this.renderLists()}
      </ul>
    );
  }
}

export default RequestorList;

// Only for demo purpose
