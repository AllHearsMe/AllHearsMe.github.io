import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

const majors = ['content', 'design', 'marketing', 'programming'];

class NavigationBar extends Component {
	handleSelect = (selectedKey) => {this.setState({selected: selectedKey})};
	constructor(props) {
		super(props);
		this.state = {selected: majors[0]};
	}
	render() {
		return (
			<Navbar fixedTop inverse>
				<Navbar.Header>
					<Navbar.Brand>
						YWC15 Candidates
					</Navbar.Brand>
				</Navbar.Header>
				<Nav bsStyle="pills" activeKey={this.state.selected} onSelect={this.handleSelect}>
					{/* <NavItem eventKey={1}>NavItem 1 content</NavItem>
					<NavItem eventKey={2}>NavItem 2 content</NavItem> */}
					{majors.map((x) => (<NavItem eventKey={x}>{x}</NavItem>))}
					<Navbar.Text>{this.state.selected}</Navbar.Text>
				</Nav>
			</Navbar>
		);
	}
}

export default NavigationBar;
