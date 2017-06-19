import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import ZmitiIndexApp from './index/index.jsx'

if(1){
	var ZmitiIndexApp = require('./index/index.jsx');
}
export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				{ZmitiIndexApp && <ZmitiIndexApp></ZmitiIndexApp>}
			</div>
		);
	}

	
}

ReactDOM.render(<App></App>,document.getElementById('fly-main'));