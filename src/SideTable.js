import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import MyUtils from './MyUtils.js'

const assignments = {
	content: <span>
			<p>ให้น้อง ๆ เลือกทำคอนเทนต์ใด คอนเทนต์หนึ่งจาก 2 หัวข้อด้านล่าง โดยต้องทำเป็นคอนเทนต์ออกมาจริงเท่านั้น ไม่จำกัดรูปแบบการนำเสนอ</p>
			<p><b>หัวข้อที่ให้เลือก</b></p>
			<p>1. คอนเทนต์ที่ทำให้ผู้ใช้ Social เข้าใจ Cyberbullying และตระหนักถึงปัญหาที่เกิดขึ้นจาก Cyberbullying</p>
			<p>2. คอนเทนต์ที่ทำให้คนไทยเปลี่ยนพฤติกรรมเสพติดหน้าจอ เสพติด Social หันมาพูดคุยกัน เจอหน้ากันในชีวิตจริง ๆ มากกว่าที่เป็นอยู่</p>
		</span>,
	design: <span>
			<p>ให้ผู้ผ่านเข้ารอบสัมภาษณ์ออกแบบเว็บไซต์ของ <b>"คณะรักษาความสงบแห่งชาติ หรือ คสช."</b> เพื่อเป็นสื่อกลางในการประชาสัมพันธ์นโยบายต่าง ๆ และเป็นสื่อกลางระหว่างประชาชนกับคณะรักษาความสงบแห่งชาติ โดยให้ออกแบบในลักษณะของ One Page Design Website</p>
			<p>** สำหรับผู้ผ่านเข้ารอบสัมภาษณ์คนใดทำ CSS มา คณะกรรมการจะพิจารณาเป็นพิเศษ</p>
		</span>,
	marketing: <span>
			<p>ให้ทำแผนการตลาด (Marketing Plan) สำหรับเว็บไซต์หนึ่งเว็บไซต์ โดยเลือกเว็บไซต์ใด ๆ ก็ได้ ทั้งเว็บไซต์ของไทยและเว็บไซต์ของต่างประเทศ</p>
			<p>นำเสนอในรูปแบบพรีเซนเทชั่น <b>ไม่เกิน 10 หน้า ภายในเวลา 5 นาที</b></p>
		</span>,
	programming: <span>
			<p>ให้เขียน <b>เว็บไซต์ประกาศผลผู้ผ่านเข้ารอบสัมภาษณ์ของ YWC#15</b> โดยใช้ข้อมูลจาก <a href='https://ywc15.ywc.in.th/api/interview' target='_blank'>API</a> โดยมี Feature ดังนี้</p>
			<ul>
				<li>ดึงข้อมูลจาก API โดยตรง</li>
				<li>ให้แสดงผลแยกแต่ละสาขา</li>
				<li>มีระบบค้นหาชื่อผ่านกล่อง Search</li>
				<li>ความสามารถหรือ Feature พิเศษอื่น ๆ ที่มีความแตกต่าง และแสดงความสามารถของน้องออกมาให้ได้มากที่สุด</li>
			</ul>
			<p>เมื่อทำเสร็จแล้วให้ Push Source Code ขึ้น GitHub ก่อนเวลาสัมภาษณ์</p>
		</span>
};

class SideTable extends Component {
	render() {
		return <div>
			  <ListGroup>
					<ListGroupItem header={"การบ้านสาขา " + MyUtils.capitalize(this.props.major)}>{assignments[this.props.major]}</ListGroupItem>
					{/* <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
					<ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem> */}
				</ListGroup>
		</div>
	}
}

export default SideTable;
