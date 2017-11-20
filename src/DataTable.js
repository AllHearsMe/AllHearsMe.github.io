import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class DataTable extends Component {
  render() {
    return (
			<div>
				<BootstrapTable data={this.props.data.filter((item) => item.major === this.props.major)} bordered>
					<TableHeaderColumn dataField='interviewRef' width="200">Ref. No</TableHeaderColumn>
					<TableHeaderColumn dataField='firstName' width="200" isKey>First Name</TableHeaderColumn>
					<TableHeaderColumn dataField='lastName' width="200">Last Name</TableHeaderColumn>
					<TableHeaderColumn dataField='major' width="200">Major</TableHeaderColumn>
				</BootstrapTable>
			</div>
    );
  }
}

export default DataTable;
