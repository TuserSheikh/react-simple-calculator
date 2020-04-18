import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bg from "./../images/bg.jpg";
import "./calculator.css";
class Calculator extends Component {
	render() {
		return (
			<div className="calculatorArea" style={{ backgroundImage: `url(${bg})` }}>
				<Container>
					<div className="calculatorBody">
						<Row>
							<Col xs="12">
								<div className="mainInfoBox">
									<div className="calculateItem">
										<p>33x33</p>
									</div>
									<div className="calculateTotal">
										<p>999</p>
									</div>
								</div>
							</Col>
							<Col xs="12">
								<div className="allButton">
									<Button>c</Button>
									<Button>+/-</Button>
									<Button>%</Button>
									<Button>/</Button>
									<Button>7</Button>
									<Button>8</Button>
									<Button>9</Button>
									<Button>x</Button>
									<Button>4</Button>
									<Button>5</Button>
									<Button>6</Button>
									<Button>-</Button>
									<Button>1</Button>
									<Button>2</Button>
									<Button>3</Button>
									<Button>+</Button>
									<Button>0</Button>
									<Button>.</Button>
									<Button className="doubleWidth">=</Button>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		);
	}
}

export default Calculator;
