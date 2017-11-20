import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button} from 'react-bootstrap';

function fetchCandidates(target) {
	fetch('https://ywc15.ywc.in.th/api/interview')
		.then((resp) => resp.json())
		.then((resp) => {target.setState({data: resp})});
}

class TestTable extends Component {
	constructor(props) {
		super(props);
		this.state = {data: []};
	}

	componentWillMount(){
		fetchCandidates(this);
	}

  render() {
    return (
			<div>
				<BootstrapTable data={this.state.data} bordered>
					<TableHeaderColumn dataField='firstName' width="200" isKey>First Name</TableHeaderColumn>
					<TableHeaderColumn dataField='lastName' width="200">Last Name</TableHeaderColumn>
					<TableHeaderColumn dataField='major' width="200">Major</TableHeaderColumn>
					<TableHeaderColumn dataField='interviewRef' width="200">Ref. No</TableHeaderColumn>
				</BootstrapTable>
			</div>
    );
  }
}

export default TestTable;
