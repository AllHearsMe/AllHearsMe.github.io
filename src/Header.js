import React, { Component } from 'react';

class Header extends Component {
  componentWillMount() {
      const script = document.createElement('script');
      script.src = 'NetworkAnim.js';
      script.async = true;
      document.body.appendChild(script);
  }
	render() {
		return <canvas id='c'/>;
	}
}

export default Header;
