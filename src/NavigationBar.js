import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl } from 'react-bootstrap';
import MyUtils from './MyUtils.js'

class NavigationBar extends Component {
	render() {
		return (
			<Navbar fixedTop inverse collapseOnSelect>
				<Navbar.Header pullLeft>
					<Navbar.Brand>
						YWC15 Candidates
					</Navbar.Brand>
      		<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav bsStyle="pills" activeKey={this.props.major} onSelect={this.props.handleSelect} pullLeft>
						{this.props.majors.map((x) => (<NavItem eventKey={x}>{MyUtils.capitalize(x)}</NavItem>))}
					</Nav>
					<Navbar.Form pullLeft>
						<FormGroup>
							<FormControl type="text" placeholder="Search" onChange={this.props.handleSearch} onFocus={this.props.handleFocus}/>
						</FormGroup>
					</Navbar.Form>
					<Navbar.Text pullRight>
						<Navbar.Link href='https://ywc15.ywc.in.th' target='_blank'>Enter YWC Site</Navbar.Link>
					</Navbar.Text>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavigationBar;
