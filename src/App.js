import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
import Header from './Header.js';
import Body from './Body.js';
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
  }
  handleSelect = (selectedKey) => {
    this.setState({major: selectedKey});
    this.scrollToBody(selectedKey);
  };
  handleSearch = (event) => {
    this.setState({keyword: event.target.value});
  };
  scrollToBody = (event) => {this.body.scrollIntoView({behavior: 'smooth', block: 'start'})};
  render() {
    return (
      <div style={{
        backgroundImage: 'url(ep_naturalblack.png)',
        backgroundSize: 'cover',
        overflow: 'hidden'
      }}>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <NavigationBar
          major={this.state.major}
          majors={majors}
          handleSelect={this.handleSelect}
          handleSearch={this.handleSearch}
          handleFocus={this.scrollToBody}
          />
        <Header/>
        <div ref={(b) => {this.body = b}} style={{height: '50px', background: 'linear-gradient(rgba(17,17,17,1), rgba(17,17,17,0))', margin: '0px'}}/>
        <Body data={this.state.data} major={this.state.major} keyword={this.state.keyword}/>
      </div>
    );
  }
}

export default App;
