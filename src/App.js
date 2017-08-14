import React, { Component } from 'react';
import './App.css';

function isNumberic(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function InputComponent(props) {
	return (
		<input onChange={props.onChange} value={props.value} />
	);
}

function Square(props) {
	return (
		<button className="square" onClick={props.onClick} >
			{props.value}
		</button>
	);
}

class Table extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rowNumber: 0,
			colNumber: 0,
			gridVals: null,
		}
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			gridNumbers: [1, 1],
		};
	}

	onSubmit(e) {

	}

	onChangeValue(index) {
		let that = this;

		return function (event) {
			const newGridNumbers = that.state.gridNumbers.slice();
			newGridNumbers[index] = event.target.value;
			that.setState(
				{ gridNumbers: newGridNumbers, }
			);
		}
	}

	render() {
		const rowIndex = 0;
		const colIndex = 1;

		return (
			<div className="Container">
				<br />
				<br />

				rows : <InputComponent onChange={this.onChangeValue(rowIndex)} componentIndex={rowIndex} value = {this.state.gridNumbers[rowIndex]} /> 
				rows : <InputComponent onChange={this.onChangeValue(colIndex)} componentIndex={colIndex} value = {this.state.gridNumbers[colIndex]} /> 

				<br />
				<br />

				<button type="button" onClick={this.onSubmit}> generate table </button>

			</div>
		);
	}
}

export default App;
