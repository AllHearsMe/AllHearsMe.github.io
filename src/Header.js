import React, { Component } from 'react';

const background = {backgroundSize : 'cover', margin: '0px'};
const textStyle = {
  position: 'absolute', 
  right: '5%',
  bottom: '5%'
};
class Header extends Component {
  componentWillMount() {
      const script = document.createElement('script');
      script.src = 'NetworkAnim.js';
      script.async = true;
      document.body.appendChild(script);
  }
	render() {
		return <div style={{padding: '0px', backgroundColor: '#111111'}}>
      <canvas id='c' style={background}/>
      <img src='https://ywc15.ywc.in.th/static/img/logo.png' style={textStyle}/>
    </div>;
	}
}

export default Header;
