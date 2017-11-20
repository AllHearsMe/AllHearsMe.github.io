import React, { Component } from 'react';
import DataTable from './DataTable.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], major: 'programming'};
  }
  componentWillMount() {
    fetch('https://ywc15.ywc.in.th/api/interview')
      .then((resp) => resp.json())
      .then((resp) => {this.setState({data: resp})});
  }
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"/>
        <DataTable data={this.state.data} major={this.state.major}/>
      </div>
    );
  }
}

export default App;
