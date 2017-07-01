import React, { Component } from 'react';
import './assets/css/index.css';
import $ from 'jquery';

export default class ZmitiIndexApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			mainClass:'active'
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {

		var mainStyle = {
			background:'url(../assets/images/m-bg.png) no-repeat center top / cover'
		}
		return (
			<div style={mainStyle} className={'zmiti-index-main-ui lt-full '+ this.state.mainClass}>
				<section className='zmiti-index'>
					<div>
						<img src='../assets/images/m-logo1.png'/>
					</div>
					
					<div>
						<img className={this.state.singleTap?'active':''} onTouchTap={this.entrySingleGame.bind(this)} src='../assets/images/m-single.png'/>
					</div>
				</section>
			</div>
		);
	}


	entryBigScreen(){

		this.refs['bg'].play();
		let {obserable} = this.props;
		this.setState({
			bigscreenTap:true
		});

		setTimeout(()=>{
			this.setState({
				bigscreenTap:false
			});
			 
			obserable.trigger({
				type:'toggleIndex',
				data:'left'
			});

		},150);
	}

	entrySingleGame(e){
		e.preventDefault();
		this.setState({
			singleTap:true
		});
		let {obserable} = this.props;
		setTimeout(()=>{
			this.setState({
				singleTap:false
			});

			obserable.trigger({
				type:'toggleIndex',
				data:'left'
			});

			obserable.trigger({
				type:'toggleMain',
				data:'active'
			});
			
		},150)

		return false;
	}


	componentDidMount() {
		let {obserable} = this.props;
		obserable.on('toggleIndex', data => {
			this.setState({
				mainClass:data
			});
		});

		obserable.on('getBgSource',()=>{
			return this.refs['bg'];
		});
	}
}
