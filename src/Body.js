import React, { Component } from 'react';
import DataTable from './DataTable.js';
import { Grid, Row, Col } from 'react-bootstrap';

class Body extends Component {
	render() {
		return <div style={{minHeight: window.innerHeight}}>
        <Grid>
          <Col xs={7}>
            <DataTable data={this.props.data} major={this.props.major} keyword={this.props.keyword}/>
          </Col>
        </Grid>
		</div>
	}
}

export default Body;
