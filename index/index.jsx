import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';

class ZmitiIndexApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
		
		

	}

	render() {

		return (
			<div>
				124
			</div>
		);
	}


	componentDidMount() {

	}
}
export default PubCom(ZmitiIndexApp);