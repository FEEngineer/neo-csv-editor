import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function isNumberic(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function InputComponent(props) {
	return (
		<input onChange={props.onChange} value={props.value} />
	);
}

class Square extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div> abc </div>
	}
}

class TestTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rowNumber: props.rowNumber,
			colNumber: props.colNumber,
		}
	}

	render() {
		return <div> {this.props.rowNumber} {this.props.colNumber}  </div>
	}
}

class Table extends Component {
	constructor(props) {
		super(props);

		let rowNumber = props.rowNumber;
		let colNumber = props.colNumber;

		let totalNumber = rowNumber * colNumber;
		let containValues = [];

		for (let i = 0; i < totalNumber; i++) {
			containValues.push('');
		}

		this.state = {
			rowNumber: rowNumber,
			colNumber: colNumber,
			containValues: containValues, 
		}
	}

	render() {
		return (
			<div>
				{this.state.containValues.map((e, i) => {return <Square />})}
			</div>
		);
	}
}

class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return 
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gridNumbers: [3, 3],
		};
	}

	onSubmit(event) {
		let rowNumber = this.state.rowNumber;
		let colNumber = this.state.colNumber;

		ReactDOM.render( <Table rowNumber = {rowNumber} colNumber = {colNumber} />, document.getElementById("table-dom"));
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

				rows : <InputComponent onChange={this.onChangeValue(rowIndex)} componentIndex={rowIndex} value={this.state.gridNumbers[rowIndex]} />
				rows : <InputComponent onChange={this.onChangeValue(colIndex)} componentIndex={colIndex} value={this.state.gridNumbers[colIndex]} />


				<br />
				<br />

				<button type="button" onClick={this.onSubmit}> generate table </button>

				<div id="table-dom">
				</div>

				<TestTable rowNumber={this.state.gridNumbers[rowIndex]} colNumber={this.state.gridNumbers[colIndex]} />

			</div>
		);
	}
}

export default App;
