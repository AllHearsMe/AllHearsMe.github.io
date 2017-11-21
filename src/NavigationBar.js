import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl } from 'react-bootstrap';

class NavigationBar extends Component {
	render() {
		return (
			<Navbar fixedTop inverse fluid>
				<Navbar.Header pullLeft>
					<Navbar.Brand>
						YWC15 Candidates
					</Navbar.Brand>
				</Navbar.Header>
				<Nav bsStyle="pills" activeKey={this.props.major} onSelect={this.props.handleSelect} pullLeft>
					{this.props.majors.map((x) => (<NavItem eventKey={x}>{x}</NavItem>))}
				</Nav>
				<Navbar.Form pullLeft>
					<FormGroup>
						<FormControl type="text" placeholder="Search" onChange={this.props.handleSearch}/>
					</FormGroup>
				</Navbar.Form>
				<Navbar.Link pullRight>
					<span><a href='https://ywc15.ywc.in.th' target='_blank'>Enter Site</a></span>
				</Navbar.Link>
			</Navbar>
		);
	}
}

export default NavigationBar;
