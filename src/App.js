import React, { Component } from 'react';
import DataTable from './DataTable.js';
import NavigationBar from './NavigationBar.js';
import { Grid, Row } from 'react-bootstrap';
import './NetworkAnim.css';

const majors = ['content', 'design', 'marketing', 'programming'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], major: majors[0], keyword: ''};
  }
  componentWillMount() {
    fetch('https://ywc15.ywc.in.th/api/interview')
      .then((resp) => resp.json())
      .then((resp) => {this.setState({data: resp})});
    
      const script = document.createElement('script');
      script.src = 'NetworkAnim.js';
      script.async = true;
      document.body.appendChild(script);
  }
  handleSelect = (selectedKey) => this.setState({major: selectedKey});
  handleSearch = (event) => this.setState({keyword: event.target.value});
  render() {
    console.log(this.state.keyword);
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <NavigationBar major={this.state.major} majors={majors} handleSelect={this.handleSelect} handleSearch={this.handleSearch}/>
        <canvas id='c'/>
        {/* <script type="text/javascript" src="NetworkAnim.js"/> */}
        {/* <Grid>
          <Row>

          </Row>
        </Grid> */}
        <DataTable data={this.state.data} major={this.state.major} keyword={this.state.keyword}/>
      </div>
    );
  }
}

export default App;
