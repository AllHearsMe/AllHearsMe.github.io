import React, { Component } from 'react';
import DataTable from './DataTable.js';
import SideTable from './SideTable.js';
import { Grid, Row, Col } from 'react-bootstrap';

class Body extends Component {
	render() {
		return <div style={{minHeight: window.innerHeight}}>
        <Grid>
          <Col xs={12} md={6} style={{backgroundColor: 'white'}}>
            <DataTable data={this.props.data} major={this.props.major} keyword={this.props.keyword}/>
          </Col>
          {/* <Col xs={4} xsPush={1} style={{backgroundColor: 'white'}}>
            <SideTable major={this.props.major}/>
          </Col> */}
          
        </Grid>
		</div>
	}
}

export default Body;
