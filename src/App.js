import React, { Component } from 'react';
import TestTable from './TestTable.js';

class App extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <TestTable/>
      </div>
    );
  }
}

export default App;
