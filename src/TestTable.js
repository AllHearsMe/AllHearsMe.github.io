import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

function fetchCandidates(target) {
	return fetch('https://ywc15.ywc.in.th/api/interview')
	.then((resp) => resp.json())
	.then((resp) => {target.setState({data: resp})});
}

class TestTable extends Component {
	constructor(props) {
		super(props);
		this.state = {data: []};
		fetchCandidates(this);
	}
  render() {
    return (
      <div className="TestTable">
			<BootstrapTable data={this.state.data} striped hover>
				<TableHeaderColumn isKey dataField='firstName'>First Name</TableHeaderColumn>
				<TableHeaderColumn dataField='lastName'>Last Name</TableHeaderColumn>
				<TableHeaderColumn dataField='major'>Major</TableHeaderColumn>
				<TableHeaderColumn dataField='interviewRef'>Ref. No</TableHeaderColumn>
			</BootstrapTable>
      </div>
    );
  }
}

export default TestTable;
