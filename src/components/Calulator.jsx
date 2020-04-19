import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bg from "./../images/bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace,faSquareRootAlt } from "@fortawesome/free-solid-svg-icons";
import "./calculator.css";

class Calculator extends Component {
	state = {
		calculation: "0",
		result: "0",
	};

	handleClick = (type, button) => {
		if (button === "c") {
			this.setState({ calculation: "0", result: "0" });
		} else if (button === "=") {
			const mapReplace = { x: "*", "^": "**" };
			const calculation = this.state.calculation.replace(
				/x|\^/gi,
				(match) => mapReplace[match]
			);
			try {
				let result = Number.parseFloat(eval(calculation).toFixed(6));
				if (result > 100000000000000) result = Infinity;
				this.setState({ calculation: "0", result });
			} catch (error) {
				this.setState({ result: "syntex error" });
			}
		} else if (button === "b") {
			const newCalculation = this.state.calculation.slice(0, -1);
			const calculation = newCalculation.length === 0 ? "0" : newCalculation;
			this.setState({ calculation });
		} else if (type === "sign" && typeof this.state.result !== "string") {
			const calculation = this.state.result + button;
			this.setState({ calculation, result: 0 });
		} else {
			const pervCalculation =
				this.state.calculation === "0" ? "" : this.state.calculation;
			const calculation = pervCalculation + button;
			this.setState({ calculation });
		}
	};

	render() {
		const { calculation, result } = this.state;
		return (
			<div className="calculatorArea" style={{ backgroundImage: `url(${bg})` }}>
				<Container>
					<div className="calculatorBody">
						<Row>
							<Col xs="12">
								<div className="mainInfoBox">
									<div className="calculateItem">
										<p> {calculation} </p>
									</div>
									<div className="calculateTotal">
										<p> {result} </p>
									</div>
								</div>
							</Col>
							<Col xs="12">
								<div className="allButton">
									<Button onClick={() => this.handleClick("control", "c")}>
										c
									</Button>
									<Button style={{fontSize:'22px'}} onClick={() => this.handleClick("control", "b")}>
										<FontAwesomeIcon icon={faBackspace} />
									</Button>
									<Button onClick={() => this.handleClick("sign", "^")}>
										<FontAwesomeIcon icon={faSquareRootAlt}/>
									</Button>
									<Button onClick={() => this.handleClick("sign", "/")}>
										/
									</Button>
									<Button onClick={() => this.handleClick("number", "7")}>
										7
									</Button>
									<Button onClick={() => this.handleClick("number", "8")}>
										8
									</Button>
									<Button onClick={() => this.handleClick("number", "9")}>
										9
									</Button>
									<Button onClick={() => this.handleClick("sign", "x")}>
										x
									</Button>
									<Button onClick={() => this.handleClick("number", "4")}>
										4
									</Button>
									<Button onClick={() => this.handleClick("number", "5")}>
										5
									</Button>
									<Button onClick={() => this.handleClick("number", "6")}>
										6
									</Button>
									<Button onClick={() => this.handleClick("sign", "-")}>
										-
									</Button>
									<Button onClick={() => this.handleClick("number", "1")}>
										1
									</Button>
									<Button onClick={() => this.handleClick("number", "2")}>
										2
									</Button>
									<Button onClick={() => this.handleClick("number", "3")}>
										3
									</Button>
									<Button onClick={() => this.handleClick("sign", "+")}>
										+
									</Button>
									<Button onClick={() => this.handleClick("number", "0")}>
										0
									</Button>
									<Button onClick={() => this.handleClick("number", ".")}>
										.
									</Button>
									<Button
										onClick={() => this.handleClick("control", "=")}
										className="doubleWidth"
									>
										=
									</Button>
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
