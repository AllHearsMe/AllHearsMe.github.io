import React, { Component } from 'react';
import DataTable from './DataTable.js';
import NavigationBar from './NavigationBar.js';

const majors = ['content', 'design', 'marketing', 'programming'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], major: majors[0]};
  }
  componentWillMount() {
    fetch('https://ywc15.ywc.in.th/api/interview')
      .then((resp) => resp.json())
      .then((resp) => {this.setState({data: resp})});
  }
	handleSelect = (selectedKey) => {this.setState({major: selectedKey})};
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"/>
        <NavigationBar major={this.state.major} majors={majors} handleSelect={this.handleSelect}/>
        <DataTable data={this.state.data} major={this.state.major}/>
      </div>
    );
  }
}

export default App;
