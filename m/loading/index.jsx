import React, { Component } from 'react';

import './assets/css/index.css';

export default class ZmitiLoadingApp extends Component {
	constructor(props) {
		super(props);
		 
		this.doc = document;
		this.viewW = this.doc.documentElement.clientWidth;
		this.viewH = this.doc.documentElement.clientHeight;

	}

	render() {
		var mainStyle = {
			background:'url(../assets/images/loading.jpg) no-repeat center / cover'
		}
		return (
			<div className='zmiti-loading-ui' style={mainStyle}>
				  <a href="#">
				  		<section className='zmiti-head' style={{background:'url('+(this.props.myHeadImg || '../assets/images/zmiti.png')+') no-repeat center / cover'}}></section>
				        <div className="line1"></div>
				        <div className="line2"></div>
				        <div className="line3"></div>
				        <div className='zmiti-progress' style={{fontFamily:'hy'}}>{this.props.progress}</div>
				    </a>

				    {<div className='zmiti-screen' style={{fontFamily:'hy'}}>
				    				    	<img src='../assets/images/screen.png'/>
				    				    	请横屏浏览
				    				    </div>}
			</div>
		);
	}

	componentDidMount() {

	}

	r(m, n) {
		return (m + Math.random() * (n - m));
	} 
}
