import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class DataTable extends Component {
	dataFilter = (item) => (item.major === this.props.major && (item.firstName.includes(this.props.keyword) || item.lastName.includes(this.props.keyword)));
  render() {
    return (
			<div>
				<BootstrapTable data={this.props.data.filter(this.dataFilter)} bordered striped hover>
					<TableHeaderColumn dataField='interviewRef' width="200" isKey>Ref. No</TableHeaderColumn>
					<TableHeaderColumn dataField='firstName' width="200">First Name</TableHeaderColumn>
					<TableHeaderColumn dataField='lastName' width="200">Last Name</TableHeaderColumn>
				</BootstrapTable>
			</div>
    );
  }
}

export default DataTable;
