import React, { Component } from 'react';
import './assets/css/index.css';
import $ from 'jquery';

export default class ZmitiIndexApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {


		return (
			<div className='zmiti-index-main-ui lt-full'>
				<section className='zmiti-index'>
					<div>
						<img src='../assets/images/m-logo.png'/>
					</div>
					<div>
						<img src='../assets/images/m-big-screen.png'/>
					</div>
					<div>
						<img src='../assets/images/m-single.png'/>
					</div>
				</section>
			</div>
		);
	}


	componentDidMount() {

	}
}
