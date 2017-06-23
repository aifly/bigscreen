import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';

var data ={
	count:0,
	canvas:[],
	widths:[],
	heights:[],
	srcs:[],
	imgs:[],
	transX:[]
};
window.data = data;
class ZmitiCanvasApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			
		}
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;

	}

	render() {

		this.state.transX = this.state.transX===undefined ? this.props.transX : this.state.transX;
		this.state.transX += this.props.speed||2;

		if(data.count>=7){

		}

		if(this.state.transX>this.viewW){
			this.state.transX = 0;
		}

		var mainStyle = {
			transform:'translate('+(this.state.transX)+'px,0)'
		}
		return (
			<canvas style={mainStyle} className='zmiti-person zmiti-person1' ref='canvas' width={this.props.width} height={this.props.height}></canvas>
		);
	}

	componentDidMount() {
	
		var self = this;
		let {src,width,height,scale,obserable,personList} = this.props;
		let img = new Image();
		this.obserable = obserable;
		data.widths.push(width);
		data.heights.push(height);
		data.srcs.push(src);
		var canvas = self.refs['canvas'];
				
				data.canvas.push(canvas);
			img.onload = function(){
				
				data.count++;
				data.imgs.push(this);


				if(data.count>=7){
					self.iNow = 0;
				
					self.timer = setInterval(()=>{
						canvas.transX =self.state.transX;


						
						personList.map((item,i)=>{

							var mycanvas = data.canvas[i];
							var context = mycanvas.getContext('2d');
							context.clearRect(0,0,data.widths[i],data.heights[i]);
							self.iNow+=1;
							if(self.iNow >= scale){
								self.iNow = 0;
							};

							if(self.obserable){
								self.obserable.trigger({
									type:'updateTransX',
									data:{
										transX:mycanvas
									}
								});
							}
							context.drawImage(data.imgs[i],-self.iNow*width,0,data.widths[i]*scale,data.heights[i]);
						});
						self.forceUpdate();
						

						/**/


						
					},120);
				}

		
			}

			img.src= src;
		
	}

	
}
export default PubCom(ZmitiCanvasApp);