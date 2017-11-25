import React, { Component } from 'react';
import DataTable from './DataTable.js';
import SideTable from './SideTable.js';
import { Grid, Row, Col, PageHeader, Panel } from 'react-bootstrap';
import MyUtils from './MyUtils.js'

class Body extends Component {
	render() {
		return <div style={{minHeight: window.innerHeight}}>
        <Grid>
          <Col xs={12} md={7}>
            <Panel>
              <PageHeader>ประกาศรายชื่อผู้มีสิทธิ์เข้าสัมภาษณ์ สาขา {MyUtils.capitalize(this.props.major)}</PageHeader>
              <DataTable data={this.props.data} major={this.props.major} keyword={this.props.keyword}/>
            </Panel>
          </Col>
          <Col xs={4} xsPush={1}>
            <SideTable major={this.props.major}/>
          </Col>
          
        </Grid>
		</div>
	}
}

export default Body;
