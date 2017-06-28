import React, { Component } from 'react';
import './assets/css/index.css';
import ZmitiCanvasApp from './canvas.jsx';
import $ from 'jquery';
 
export default class ZmitiMainApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			transY:100,
			direction:'',
			duration:60,
			count:0,
			defaultScrollerWidth:200,
			scrollerWidth:200,
			bgH:0,
			bgTransY:0,
			isBgMove:false,
			showQ:true,
			defaultDuration:60,
			mainClass:'right',
			result:'',
			showResult:false,
			isStopCount:false,//是否停止倒计时
			waitingList:[
				
			],
			personList:[
				/*{
					style:{
						height:100,
						scale:4,
						width:234,
					},
					speed:6,
					transY:0,
					src:'../assets/images/m-p1.png'
				}*/
				
				{
					style:{
						height:100,
						scale:4,
						width:265,
					},
					speed:6,
					transY:200,
					src:'../assets/images/m-p2.png'
				},/*{
					style:{
						height:100,
						scale:4,
						width:208,
					},
					speed:6,
					transY:400 ,
					src:'../assets/images/m-p3.png'
				},*/{
					style:{
						height:100,
						scale:4,
						width:236,
					},
					speed:6,
					transY:600 ,
					src:'../assets/images/m-p4.png'
				},{
					style:{
						height:100,
						scale:4,
						width:239,
					},
					speed:6,
					transY:800 ,
					src:'../assets/images/m-p5.png'
				}/*,{
					style:{
						height:100,
						scale:4,
						width:190,
					},
					speed:6,
					transY:1000 ,
					src:'../assets/images/m-p6.png'
				}*/,{
					style:{
						height:100,
						scale:4,
						width:248,
					},
					speed:6,
					transY:1200 ,
					src:'../assets/images/m-p7.png'
				}
				
			],
			currentUser:{
				headimgurl:'../assets/images/zmiti.png',
			},
			currentQ:{
				text:'',
				text1:''
			}
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
		this.texts = window.texts;
		this.grabed = true;

	}

	render() {

		var scollerStyle ={
			transform:'translate(0,'+this.state.transY+'px)',
			width:this.state.scrollerWidth
		}

		var bgStyle ={
			background:'url(../assets/images/grass.png) repeat-x left bottom'
		};

		var mainStyle = {
			height:this.state.bgH*2,

			//transform:'translate('+this.state.bgTransY+'px,0) scale(1)'
		};

		var style ={
			background:'url(../assets/images/m-bg.png) no-repeat center / cover'
		}

		var maskClassName = '';
		if(this.state.maskActive){
			//maskClassName='active';
		}else if(this.state.maskDelete){
			//maskClassName ='delete';
		}

		return (
			<div style={style} className={'zmiti-main-main-ui lt-full '+(this.state.mainClass)}>
				<div className={'zmiti-main-bg '+(this.state.isBgMove?'animate':'')} style={mainStyle}>
					<img style={{height:this.state.bgH}} draggable='false' ref='bg'  src='../assets/images/m-bg.png'/>
					<img style={{height:this.state.bgH}} draggable='false' src='../assets/images/m-bg.png'/>
					
				</div>
				<header className='zmiti-scroll-bar'>
					<div></div>
				</header>

				{this.state.currentUser.headimgurl && <div className={'zmiti-controller ' + (this.state.hasController?'active':'')}>
					<div>
						<img draggable='false' src={this.state.currentUser.headimgurl}/>
					</div>
					<div>
						<div>{this.state.currentUser.name}</div>
						<div>答对了<span>{this.state.count}</span>道题目</div>
					</div>
				</div>}

				<section onTouchTap={this.beginGrab.bind(this)} className={'zmiti-begingrab '+(this.state.grabtap?'active':'')}>
					点名答题
				</section>

				<section style={scollerStyle} className={'zmiti-scroller '+ (this.state.scrollerTransition?'transition':'')}>
					<div className='zmiti-scroller-gear'></div>
					<section className={this.state.direction}>
						<div className='zmiti-scroller-rod'></div>
						<div className='zmiti-scroller-latter'>
							<img draggable='false' src={this.state.isMove?'../assets/images/m-latter.png':'../assets/images/m-latter.png'}/>
						</div>
					</section>
					{this.state.showQ && <div className='zmiti-question'>
											<img src='../assets/images/m-question.png'/>
											<span>{this.state.currentQ.text}</span>
										</div>}
				</section>
				<div className='zmiti-waitint-list'>
					<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg"
						 width="500px" height="1000px" viewBox="0 0 2000 500" enableBackground="new 0 0 1000 500">
					<path  className='path' fill="#fff" d="M985.369,394.032l-13.452-9.474l-23.4-10.656l-20.472-3.552l15.208-21.313l15.207-21.905l8.774-23.09
	l1.169-16.578l-5.851-25.458l-12.284-17.761l-23.399-22.496l-27.491-16.578L871.3,190.963l-22.813-10.656l-35.684-13.026
	l-16.712-1.939c-3.497,0.007-6.993-0.073-10.488-0.215c-21.61,0.763-43.08,3.649-64.067,9.81c-0.969,0.285-1.905,0.461-2.824,0.593
	l-1.254,0.635l-21.645,18.354l-12.87,10.657l-11.697,13.615l-2.342,3.552l-19.883-13.022l-25.154-14.802l-38.021-13.615
	l-31.588-5.328l-38.021-1.183l-28.663,8.88l-23.985,18.944l-19.304,16.578l-18.135,23.682l-8.774,23.682l-15.208-1.776
	l-19.304-1.775l-21.645,8.287l-19.303,7.104l-14.625-5.921l-18.717-4.146l-24.568,1.776l-18.718,8.88l-12.871,10.064l-11.115,7.104
	l-15.791-11.84l-18.717-5.921l-18.718-2.369l-18.717-1.183l-16.38,3.552l-22.227,10.657l-13.453,8.287l-9.977,8.262
	c-4.227,6.436-9.189,12.389-12.6,19.354c-0.021,0.038-0.048,0.066-0.065,0.104c-0.945,5.936-1.48,11.93-1.792,17.785l1.618,13.105
	l3.51,12.434l-21.059,4.734l-26.909,9.474l-26.323,12.433l-18.135,20.13L3,425.718c0.278,5.612,0.806,11.159,2.526,15.984
	c1.107,3.115,2.571,6.063,4.127,8.971l8.785,6.112l25.154,7.104l41.531,5.329h25.737l11.698-1.776l11.116,11.839l14.039,8.287
	l12.284,5.329L173.448,500h14.625l752.252-5.921l28.664-20.72l15.794-20.13l11.115-20.72v-20.13L985.369,394.032z"/>

					</svg>



					<div className='zmiti-cloud-line'>
						<aside></aside>
						<aside></aside>
						<div className='zmiti-duration'>{this.state.duration}S</div>
					</div>

					<div className='zmiti-cloud-line' style={{height:this.state.waitingList.length*70}}>
						<aside></aside>
						<aside></aside>
					</div>

				</div>

				
				<ZmitiCanvasApp obserable={this.props.obserable} personList={this.state.personList}></ZmitiCanvasApp>
 				

 				{ <div onAnimationEnd={()=>{this.setState({showAddone:false})}} className={'zmiti-addone ' +(this.state.showAddone?'active':'')}>
 				 					<img src='../assets/images/1.png'/>
 				 				</div>}

				{this.state.qrcodeurl && <img className='zmiti-qrcodeurl' src={this.state.qrcodeurl}/>}

				{this.state.result && <div onTouchTap={this.clearMask.bind(this)} className={'zmiti-mask lt-full '}>
									<div className={maskClassName}>
										<img src={'../assets/images/'+this.state.result+'.png'}/>
										<div className={'zmiti-mask-text1 ' + this.state.result}>{this.state.currentQ.text}</div>
										<div className={'zmiti-mask-text ' + this.state.result}>{this.state.currentQ.text1}</div>
									</div>
								</div>}
				{this.state.showResult && <div onTouchTap={this.closeShare.bind(this)} className='zmiti-result-C lt-full'>
					 {!this.state.showShare &&  <div>
					 	<img src='../assets/images/result-bg.png'/>
					 	<span>恭喜你在您在“建党96周年”游戏中答对了{this.state.count}道题目</span>
					 	<img className='zmiti-restart' onTouchTap={this.restart.bind(this)} src='../assets/images/m-restart.png'/>
					 	<img className='zmiti-share' onTouchTap={()=>{this.setState({showShare:true})}} src='../assets/images/m-share.png'/>
					 </div>}
					 {this.state.showShare && <div className='zmiti-share-ar'>
					 	<img src='../assets/images/m-share-ico.png'/>
					 </div>}
				</div>}
				
			</div>

		);
	}


	closeShare(){
		if(this.state.showShare){
			this.setState({
				showShare:false,
				showResult:false
			})
		}
	}

	animationEnd(i){
		this.state.submitList.splice(i,1);
		this.forceUpdate();
	}

 

	textAnimate(){
		var textPath = this.refs['zmiti-text-path'];
		var x = textPath.getAttribute('x');
		var speed = 40;
		var timer = setInterval(()=>{
			x++;
			x = x + speed;
			speed*=.88;
			if(x>=70){
				x = 70;
				clearInterval(timer);
			}
			textPath.setAttribute('x',x);
		},20);
	}

	clearMask(){
		var mask = 'maskActive';
		if(this.state.result === 'r2'){
			mask = 'maskDelete';
		}
		
		this.setState({
			result:'',
			text1:'',
			[mask]:'',
			showAddone:mask === 'maskActive'
		});
		this.renderText();
		this.grabed = true;
	}

	renderText(){
		this.defaultText = this.defaultText || this.texts.concat([]);
		this.defaultText.length <=0 && (this.defaultText = this.texts.concat([]));
		var index = Math.random()*texts.length|0;
		var data = this.defaultText.splice(index,1)[0];

		this.setState({
			currentQ:{
				text:data.text,
				text1:data.text1
			}
		})
		return data;
	}

	beginGrab(){//开始抓取
		//this.startGrab = this.startGrab || false;
		this.setState({
			grabtap:true,
			showQ:false
		});
		this.grabed = false;
		setTimeout(()=>{
			this.setState({
				grabtap:false
			});
			if(!this.startGrab && this.state.isBgMove){
				this.startGrab = true;

				var isStart = true;
				var speed = 30;

				var render = function(){
					this.setState({
						scrollerTransition:false
					});
					if(this.state.scrollerWidth>this.viewW -90 ){
						isStart = false;
						this.startGrab = false;
						this.initGrab();

						return;
					}
					var height = this.state.scrollerWidth;
					this.state.personList.map((item,i)=>{

						
						if(height > this.viewW - 90 - item.style.width && this.state.transY+70>item.transY && this.state.transY < item.transY+item.style.height){
							isStart = false;
							this.startGrab = false;
							this.state.count++;

							setTimeout(()=>{
								this.setState({
									result:item.result,
									text1:item.text1
								});

							},100)
							
							//this.gameResult(item.result === 'r1' ? 'success' : 'fail');
							this.initGrab();
						}
					});
					if(this.startGrab){
						speed +=2;
						speed = Math.min(200,speed);
						this.setState({
							scrollerWidth:this.state.scrollerWidth + this.viewH / speed
						});
						
						requestAnimationFrame(render);	
					}
					
				}.bind(this)
				render();	
			}

		},150)
		
		
	}

	initGrab(){
		this.setState({
			scrollerWidth:this.state.defaultScrollerWidth,
			scrollerTransition:true
		});
		setTimeout(()=>{
			this.setState({
				showQ:true
			})
			
		},500)
		this.grabed = true;
	}

	init(){

		if(this.state.waitingList.length>0){
			this.state.currentUser = this.state.waitingList.shift();
			this.forceUpdate();

			setTimeout(()=>{
				this.state.hasController = true;
				this.forceUpdate();			
			},10);
		}
		

	}

	bgAnimate(){
		var render = function(){
			var x =this.state.bgTransY;
			x-=2;
			if( -x >= this.state.bgH ){
				x = 0
			}
			this.setState({
				bgTransY:x
			})
			requestAnimationFrame(render);
		}.bind(this);
		render();
		
	}

	initPersonData(){
		/*this.state.personList.forEach((item,i)=>{
			item.offsetTop = $('.zmiti-person').eq(i)[0].offsetTop
		});*/
	}

	
	/**
		游戏结果。失败 成功 超时
	*/
	gameResult(type){//type:游戏类型：success fail timeout
		var s = this;
		
		$.ajax({
			url:'http://api.zmiti.com/v2/msg/send_msg',
            data:{
                type:s.state.currentUser.openid+'-over',
                content:JSON.stringify({
                	msg:type||'timeout'
                }),
                to:''
            }
		});
	}

	
 
 
	componentDidMount() {
		this.key = window.localStorage.getItem('zmiti-bigscreen-key') || this.randomString();
		window.localStorage.setItem('zmiti-bigscreen-key',this.key);
		let {wxConfig} = this.props;

		wxConfig('点名答题，建党96周年之际你来当主考官','一起来学理论知识吧！');

		this.renderText();
		//this.startMove(this.key);
		window.s = this;


		$(window).on('deviceorientation',e => {

			 var alpha = event.alpha,
            beta = event.beta,
            gamma = event.gamma;

	        if(alpha != null || beta != null || gamma != null){
	           
	            this.beta = beta;
	            
	        }else{
	        	$(window).off('deviceorientation');
	        	this.unSurpport = true;
	            //dataContainerOrientation.innerHTML = "当前浏览器不支持DeviceOrientation";
	        }

		});
	 
		
		//this.bgAnimate();//背景移动
		

		let {obserable} = this.props;

		 

		obserable.on('controllerAnimate',()=>{
				
			
			if(!this.unSurpport){

				 if(this.grabed){
					if(this.state.transY > this.viewH - 70){
		            	this.state.transY = this.viewH - 70
		            }
		            if(this.state.transY<0){
		            	this.state.transY = 0;
		            }	
				}

				var beta = (this.beta||0);
				this.setState({
	            	transY:this.state.transY + beta
	            });

			}else{
				this.beta = this.beta || 10;
				if(this.state.transY > this.viewH - 70||this.state.transY<0){
	            	this.beta *=-1;
	            }
				this.setState({
	            	transY:this.state.transY + this.beta
	            });
			}
            
		});


		obserable.on('countdown',()=>{
			if(this.state.duration <=0){
				this.state.duration = this.state.defaultDuration;
				this.state.isBgMove = false;
				this.state.showResult = true;
				this.forceUpdate();
				obserable.trigger({
					type:'stop'
				});
				return;
			}
			this.setState({
				duration:this.state.duration -1
			});
		})

		obserable.on('toggleMain',data =>{
			/*this.state.currentUser={
				headimgurl:this.props.headimgurl,
				name:this.props.nickname
			}*/
			this.setState({
				mainClass:data,

			});
			if(data === 'active'){
				obserable.trigger({
					type:'animate'
				});

				this.setState({
					isBgMove:true
				});	
			}
			
	 	})
		var s = this;
		var img = new Image();
		img.onload = function(){
			s.initPersonData();
			s.setState({
				bgH:this.height
			});

			var style  = `
				
				@keyframes bgMove{
					to{transform:translate3d(0,-${this.height}px,0)}
				}
				@-webkit-keyframes bgMove{
					to{-webkit-transform:translate3d(0,-${this.height}px,0)}
				}
			`;
			document.getElementsByTagName('style')[0].innerHTML += style;
 
		}
		img.src=this.refs['bg'].src;
		
		obserable.on('updatePersonList',(data)=>{
			this.state.personList = data;

			this.forceUpdate();
		});
 
	}

	restart(){//重新开始游戏

		let {obserable} = this.props;
		obserable.trigger({
			type:'animate',

		});
		this.setState({
			duration:this.state.defaultDuration,
			count:0,
			isBgMove:true,
			showResult:false
		})
	}

	randomString(len){
		　var len = len || 8;
		　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
		　　var maxPos = $chars.length;
		　　var pwd = '';
		　　for (var i = 0; i < len; i++) {
		　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
		　　}
		　　return pwd;
	}
}
