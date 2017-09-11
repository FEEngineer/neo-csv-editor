import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function InputComponent(props) {
	return (
		<input onChange={props.onChange} value={props.value} />
	);
}

function GenerateTableButton(props) {
	return (<button onClick={props.buttonOnClick} > generate table </button>);
}

class Square extends Component  {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button className='square'>
				1
			</button>
		);
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
		};
	}

	recalcContainValues(containValues) {
		let curState = {
			rowNumber: this.props.rowNumber, 
			colNumber: this.props.colNumber, 
			containValues: containValues, 
		}

		this.setState(curState);
	}

	renderSquare() {
		return (
			<Square />
		);
	}

	render() {
		let rowNumber = this.props.rowNumber;
		let colNumber = this.props.colNumber;

		let rowArray = Array(rowNumber);

		return (
			<div>
				{rowArray.map((e, i) => {renderSquare()})}
			</div>
		);
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gridNumbers: [3, 3],
		};
	}

	genButtonOnClick() {
		let that = this;

		return function(event) {
			const rowNumber = that.state.gridNumbers[0];
			const colNumber = that.state.gridNumbers[1];

			ReactDOM.render( <Table rowNumber = {rowNumber} colNumber = {colNumber} />, document.getElementById("table-dom"));
		}
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

				<GenerateTableButton buttonOnClick={this.genButtonOnClick()} />

				<div id="table-dom">
				</div>
			</div>
		);
	}
}

export default App;
