import React, { Component } from 'react';
import './assets/css/index.css';
import $ from 'jquery';

export default class ZmitiRemarkApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			mainClass:'right'
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {

		var mainStyle = {
			background:'url(../assets/images/bg-c.jpg) no-repeat center top / cover'
		}
		return (
			<div style={mainStyle} className={'zmiti-remark-main-ui lt-full '+this.state.mainClass}>
				<section className='zmiti-remark'>
					<section className='zmiti-remark-header'>
						说明
					</section>
					<section>
						嘿~我亲爱的小伙伴
					</section>
					<section>在电脑上打开下方网址</section>
					<section>http://h5.zmiti.com/public/bigscreen/screen.html</section>
					<section>并扫描右上方的二维码，</section>
					<section>可进入电脑版的游戏进行互动哦~~</section>
				</section>
			</div>
		);
	}


	componentDidMount() {
		let {obserable} = this.props;
		obserable.on('toggleRemark', data => {
			this.setState({
				mainClass:data
			});
		});
	}
}
