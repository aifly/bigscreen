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
			background:'url(../assets/images/bg-c.jpg) no-repeat center top / cover'
		}
		return (
			<div style={mainStyle} className={'zmiti-index-main-ui lt-full '+ this.state.mainClass}>
				<section className='zmiti-index'>
					<div>
						<img src='../assets/images/m-logo.png'/>
					</div>
					<div>
						<img className={this.state.bigscreenTap?'active':''} onTouchTap={this.entryBigScreen.bind(this)} src='../assets/images/m-big-screen.png'/>
					</div>
					<div>
						<img className={this.state.singleTap?'active':''} onTouchTap={this.entrySingleGame.bind(this)} src='../assets/images/m-single.png'/>
					</div>
				</section>
			</div>
		);
	}


	entryBigScreen(){
		let {obserable} = this.props;
		this.setState({
			bigscreenTap:true
		});

		setTimeout(()=>{
			this.setState({
				bigscreenTap:false
			});
			obserable.trigger({
				type:'toggleRemark',
				data:'active'
			});

			obserable.trigger({
				type:'toggleIndex',
				data:'left'
			});

		},150);
	}

	entrySingleGame(){
		this.setState({
			singleTap:true
		});
		let {obserable} = this.props;
		setTimeout(()=>{
			this.setState({
				singleTap:false
			});
			obserable.trigger({
				type:'toggleMain',
				data:'active'
			});
			obserable.trigger({
				type:'toggleIndex',
				data:'left'
			});
		},150)
	}


	componentDidMount() {
		let {obserable} = this.props;
		obserable.on('toggleIndex', data => {
			this.setState({
				mainClass:data
			});
		});
	}
}
