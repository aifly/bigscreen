import React, { Component } from 'react';
import './assets/css/index.css';
import ZmitiCanvasApp from './canvas.jsx';
import $ from 'jquery';
 
export default class ZmitiMainApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			transY:0,
			direction:'',
			duration:60,
			scrollerWidth:280,
			bgH:0,
			bgTransY:0,
			mainClass:'active',
			result:'',
			text1:'',
			isStopCount:false,//是否停止倒计时
			waitingList:[
				
			],
			personList:[
				{
					style:{
						height:100,
						scale:4,
						width:234,
					},
					speed:6,
					transY:0,
					src:'../assets/images/m-p1.png'
				}
				,
				{
					style:{
						height:100,
						scale:4,
						width:265,
					},
					speed:6,
					transY:200,
					src:'../assets/images/m-p2.png'
				},{
					style:{
						height:100,
						scale:4,
						width:208,
					},
					speed:6,
					transY:400 ,
					src:'../assets/images/m-p3.png'
				},{
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
				},{
					style:{
						height:100,
						scale:4,
						width:190,
					},
					speed:6,
					transY:1000 ,
					src:'../assets/images/m-p6.png'
				},{
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
				
			},
			submitList:[
				/*{
					
					nickname:'fly',
					headimgurl:'../assets/images/zmiti.jpg'
				}*/
			]
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;

	}

	render() {

		var scollerStyle ={
			transform:'translate('+this.state.transY+'px,0)',
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
			maskClassName='active';
		}else if(this.state.maskDelete){
			maskClassName ='delete';
		}

		return (
			<div style={style} className={'zmiti-main-main-ui lt-full '+(this.state.mainClass)}>
				<div className='zmiti-main-bg' style={mainStyle}>
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
						<div>正在游戏...</div>
					</div>
				</div>}

				<section style={scollerStyle} className={'zmiti-scroller '+ (this.state.scrollerTransition?'transition':'')}>
					<div className='zmiti-scroller-gear'></div>
					<section className={this.state.direction}>
						<div className='zmiti-scroller-rod'></div>
						<div className='zmiti-scroller-latter'>
							<img draggable='false' src={this.state.isMove?'../assets/images/m-latter.png':'../assets/images/m-latter.png'}/>
						</div>
					</section>
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

					<ul className='zmiti-waiting-C'>
						{this.state.waitingList.map((item,i)=>{
							return <li key={i}>
								<img src={item.headimgurl}/>{i===0?this.state.duration+'S后进入游戏':'正在等待......'}
							</li>
						})}
					</ul>

				</div>

				<div className='zmiti-logo'>
					<img src='../assets/images/text-bg.png'/>
					<svg xmlns='http://www.www.w3.org/2000/svg'>
						<path id='path1' d="M0 0 Q 260 150 400 0" stroke='' fill='none'/>
						<text x='-280' ref='zmiti-text-path' className='zmiti-text-path' fill='#cf000d'>
							<textPath className='zmiti-text-path' xlinkHref='#path1'>寻找党委书记</textPath>
						</text>
					</svg>
				</div>

				<ZmitiCanvasApp obserable={this.props.obserable} personList={this.state.personList}></ZmitiCanvasApp>
 				

 				{false && <div onAnimationEnd={()=>{this.setState({showAddone:false})}} className={'zmiti-addone ' +(this.state.showAddone?'active':'')}>
 				 					<img src='../assets/images/1.png'/>
 				 				</div>}

				{this.state.qrcodeurl && <img className='zmiti-qrcodeurl' src={this.state.qrcodeurl}/>}

				{this.state.result && <div className={'zmiti-mask lt-full '}>
									<div className={maskClassName}>
										<img src={'../assets/images/'+this.state.result+'.png'}/>
										<div className={'zmiti-mask-text ' + this.state.result}>{this.state.text1}</div>
									</div>
								</div>}

				
			</div>
		);
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

	beginGrab(){//开始抓取
		//this.startGrab = this.startGrab || false;
		if(!this.startGrab){
			this.startGrab = true;

			var isStart = true;
			var speed = 30;
			var render = function(){
				this.setState({
					scrollerTransition:false
				})
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
						setTimeout(()=>{
							this.setState({
								result:item.result,
								text1:item.text1
							});
						},100)
						this.isStopCount = true;//停止计时
						this.gameResult(item.result === 'r1' ? 'success' : 'fail');
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
		
	}

	initGrab(){
		this.setState({
			scrollerWidth:280,
			scrollerTransition:true
		});
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

	

	countdonwStart(){
		clearInterval(this.durationTimer);
		this.durationTimer = setInterval(()=>{
			

			if( this.state.currentUser.openid ){

				if(!this.isStopCount){
					this.setState({
						duration : this.state.duration - 1
					});	
				}
				
				
				if(this.state.duration <= 0){
					if(this.state.waitingList.length<=0){
						this.gameResult('timeout');//时间到了、
						this.state.result = '';
						this.state.currentUser = {};
						this.countdonwEnd();
					}
					this.state.duration = 60;
					this.setState({
						hasController:false
					})
					if(this.state.waitingList.length<=0){
						//clearInterval(this.durationTimer);
					}
					else{
						this.init();
					}
				}
				
			}
			else{
				
				
			}

			
		},1000);
	}
	countdonwEnd(){
		this.state.currentUser = {};//清空当前用户
		this.state.duration = 60;
		this.state.isMove = false;
		this.state.result = '';
	    this.state.direction = 'over';
	    this.isMove = false;
		this.forceUpdate();
		clearInterval(this.durationTimer);
	}

	createQrcode(){
		var s = this;
		var code = window.localStorage.getItem('zmiti-bigscreen-qrcode');
		if(code){

			var img = new Image();
			img.onerror = function(){
				s.requestQrcode();
			}
			img.src = code;

			s.setState({
				qrcodeurl:code
			})
		}else{
			s.requestQrcode();
		}
		
	}

	requestQrcode(){
		$.ajax({
			url:'http://api.zmiti.com/v2/share/create_qrcode',
			data:{
				url:window.href+ '?key=' + this.key
			}
		}).done(data=>{
			this.setState({
				qrcodeurl:data.qrcodeurl
			});
			window.localStorage.setItem('zmiti-bigscreen-qrcode',data.qrcodeurl);

		});
	}

	componentDidMount() {
		this.key = window.localStorage.getItem('zmiti-bigscreen-key') || this.randomString();
		window.localStorage.setItem('zmiti-bigscreen-key',this.key);
		//this.startMove(this.key);
		window.s = this;
		
		$(window).on('deviceorientation',e => {

			 var alpha = event.alpha,
            beta = event.beta,
            gamma = event.gamma;

	        if(alpha != null || beta != null || gamma != null){
	           // dataContainerOrientation.innerHTML = "alpha:" + alpha + "<br />beta:" + beta + "<br />gamma:" + gamma;
	            //判断屏幕方向
	            var html = "";
	            /*if( Math.abs(gamma) < GAMMA_MIN && Math.abs(beta) > BETA_MAX ){
	                html = "屏幕方向：Portrait";
	            }

	            if( Math.abs(beta) < BETA_MIN && Math.abs(gamma) > GAMMA_MAX ){
	                html = "屏幕方向：Landscape";
	            }*/

	            var gamma_html = "";
	            if( gamma > 0 ){
	                gamma_html = "向右倾斜";
	            }else{
	                gamma_html = "向左倾斜";
	            }
	            html += "<br />"+gamma_html
	           // stage.innerHTML = html;
	        }else{
	            //dataContainerOrientation.innerHTML = "当前浏览器不支持DeviceOrientation";
	        }

		});
		
		//this.bgAnimate();//背景移动
		

		let {obserable} = this.props;

		obserable.on('toggleMain',data =>{
			this.setState({
				mainClass:data
			})
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
				
				.zmiti-mask>div.active{
					-webkit-transform-origin:-${(s.viewW-500)/2}px -${(s.viewH-500)/2}px;
					transform-origin:-${(s.viewW-500)/2}px -${(s.viewH-500)/2}px;
					-webkit-transform:translate3d(-50%,-50%,0) scale(.1) !important;
					transform:translate3d(-50%,-50%,0) scale(.1) !important;
				}
				.zmiti-mask>div.delete{
					-webkit-transform-origin:${s.viewW - 500}px ${s.viewH- 300}px;
					transform-origin:${s.viewW - 500}px ${s.viewH- 300}px;
					-webkit-transform:translate3d(-50%,-50%,0) scale(.1) !important;
					transform:translate3d(-50%,-50%,0) scale(.1) !important;
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
