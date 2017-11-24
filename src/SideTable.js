import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const assignments = {
	content: "ให้น้อง ๆ เลือกทำคอนเทนต์ใด คอนเทนต์หนึ่งจาก 2 หัวข้อด้านล่าง โดยต้องทำเป็นคอนเทนต์ออกมาจริงเท่านั้น ไม่จำกัดรูปแบบการนำเสนอ<br><p>หัวข้อที่ให้เลือก</p><br>1. คอนเทนต์ที่ทำให้ผู้ใช้ Social เข้าใจ Cyberbullying และตระหนักถึงปัญหาที่เกิดขึ้นจาก Cyberbullying<br>2. คอนเทนต์ที่ทำให้คนไทยเปลี่ยนพฤติกรรมเสพติดหน้าจอ เสพติด Social หันมาพูดคุยกัน เจอหน้ากันในชีวิตจริง ๆ มากกว่าที่เป็นอยู่"

};

class SideTable extends Component {
	render() {
		return <div>
        <Grid>
					<Row>
						
					</Row>
					<Row>
						{assignments[this.props.major]}
					</Row>
				</Grid>
		</div>
	}
}

export default SideTable;
