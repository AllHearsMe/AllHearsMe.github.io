import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class DataTable extends Component {
	dataFilter = (item) => (item.major === this.props.major && (item.firstName.includes(this.props.keyword) || item.lastName.includes(this.props.keyword)));
	sortOptions = {
		defaultSortName: 'interviewRef',
		defaultSortOrder: 'asc',
		sortIndicator: false,
		noDataText: 'ไม่พบชื่อที่ค้นหา'
	};
	nameFormatter = (cell, row) => (row.firstName + ' ' + row.lastName);
	render() {
    return (
			<div>
				<BootstrapTable data={this.props.data.filter(this.dataFilter)} options={this.sortOptions} bordered striped hover>
					<TableHeaderColumn dataField='interviewRef' width="200" isKey dataSort>Ref. No</TableHeaderColumn>
					<TableHeaderColumn dataField='firstName' width="200" dataFormat={this.nameFormatter}>Name</TableHeaderColumn>
				</BootstrapTable>
			</div>
    );
  }
}

export default DataTable;
