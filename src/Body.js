import React, { Component } from 'react';
import DataTable from './DataTable.js';
import { Grid, Row } from 'react-bootstrap';

class Body extends Component {
	render() {
		return <div style={{minHeight: window.innerHeight}}>
        {/* <Grid>
          <Row>

          </Row>
        </Grid> */}
        <DataTable data={this.props.data} major={this.props.major} keyword={this.props.keyword}/>
		</div>
	}
}

export default Body;
