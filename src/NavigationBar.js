import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {
	render() {
		return (
			<Navbar fixedTop inverse>
				<Navbar.Header>
					<Navbar.Brand>
						YWC15 Candidates
					</Navbar.Brand>
				</Navbar.Header>
				<Nav bsStyle="pills" activeKey={this.props.major} onSelect={this.props.handleSelect}>
					{this.props.majors.map((x) => (<NavItem eventKey={x}>{x}</NavItem>))}
				</Nav>
			</Navbar>
		);
	}
}

export default NavigationBar;
