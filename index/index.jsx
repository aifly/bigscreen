import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import ZmitiCanvasApp from './canvas.jsx';
import $ from 'jquery';
import Obserable from '../assets/libs/obserable';
let obserable  = new Obserable();
class ZmitiIndexApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			transX:200,
			direction:'',
			duration:30,
			scrollerHeight:280,
			bgW:0,
			bgTransX:0,
			result:'',
			waitingList:[
				
			],
			personList:[
				{
					style:{
						width:100,
						scale:4,
						height:234,
						left:200,
						transform:'translateX(200px)'
					},
					speed:1,
					id:'canvas1',
					transX:200,
					result:'r3',
					src:'./assets/images/p1.png'
				},{
					style:{
						width:100,
						scale:4,
						height:265,
						left:100,
						transform:'translateX(100px)'
					},
					speed:.5,
					id:'canvas2',
					transX:100,
					result:'r2',
					src:'./assets/images/p2.png'
				},{
					style:{
						width:100,
						scale:4,
						height:208,
						left:400,
						transform:'translateX(400px)'
					},
					speed:1.3,
					id:'canvas3',
					transX:400 ,
					result:'r1',
					src:'./assets/images/p3.png'
				},{
					style:{
						width:100,
						scale:4,
						height:236,
						left:700,
						transform:'translateX(700px)'
					},
					speed:.7,
					id:'canvas4',
					transX:700 ,
					result:'r1',
					src:'./assets/images/p4.png'
				},{
					style:{
						width:100,
						scale:4,
						height:239,
						left:900,
						transform:'translateX(900px)'
					},
					speed:.9,
					id:'canvas5',
					transX:900 ,
					result:'r3',
					src:'./assets/images/p5.png'
				},{
					style:{
						width:100,
						scale:4,
						height:190,
						left:500,
						transform:'translateX(500px)'
					},
					speed:.6,
					id:'canvas6',
					transX:500 ,
					result:'r3',
					src:'./assets/images/p6.png'
				},{
					style:{
						width:100,
						scale:4,
						height:248,
						left:0,
						transform:'translateX(0)'
					},
					speed:.6,
					id:'canvas7',
					transX:0 ,
					result:'r1',
					src:'./assets/images/p7.png'
				}
			],
			currentUser:{
				
			},
			submitList:[
				/*{
					
					nickname:'fly',
					headimgurl:'./assets/images/zmiti.jpg'
				}*/
			]
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;

	}

	render() {

		var scollerStyle ={
			transform:'translate('+this.state.transX+'px,0)',
			height:this.state.scrollerHeight
		}

		var bgStyle ={
			background:'url(./assets/images/grass.png) repeat-x left bottom'
		};

		var mainStyle = {
			width:this.state.bgW*2,
			transform:'translate('+this.state.bgTransX+'px,0) scale(1)'
		};
		return (
			<div  className='zmiti-index-main-ui'>
				<div className='zmiti-main-bg' style={mainStyle}>
					<img style={{width:this.state.bgW}} draggable='false' ref='bg'  src='./assets/images/bg.png'/>
					<img style={{width:this.state.bgW}} draggable='false' src='./assets/images/bg.png'/>
					
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
							<img draggable='false' src={this.state.isMove?'./assets/images/latter1.png':'./assets/images/latter.png'}/>
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
					<img src='./assets/images/text-bg.png'/>
					<svg xmlns='http://www.www.w3.org/2000/svg'>
						<path id='path1' d="M0 0 Q 260 150 400 0" stroke='' fill='none'/>
						<text x='-280' ref='zmiti-text-path' className='zmiti-text-path' fill='#cf000d'>
							<textPath className='zmiti-text-path' xlinkHref='#path1'>寻找党委书记</textPath>
						</text>
					</svg>
				</div>


				{this.state.personList.map((p,i)=>{
					var data = {
						...p.style,
						src:p.src,
						transX:p.transX,
						speed:p.speed||1,
						obserable,
						id:p.id
					}
					return 	<ZmitiCanvasApp personList={this.state.personList} key={i} {...data}></ZmitiCanvasApp>

				})}

				{this.state.qrcodeurl && <img className='zmiti-qrcodeurl' src={this.state.qrcodeurl}/>}

				{this.state.result && <div className='zmiti-mask lt-full'>
									<div><img src={'./assets/images/'+this.state.result+'.png'}/></div>
								</div>}

				{this.state.submitList.map((item,i)=>{
					return <div onAnimationEnd={this.animationEnd.bind(this,i)} key={i} className='zmiti-submit-item'>
				        <img src={item.headimgurl}/><span>{item.nickname}同志已成功递交了申请书</span>
					</div>;
				})}
				
			</div>
		);
	}

	animationEnd(i){
		this.state.submitList.splice(i,1);
		this.forceUpdate();
	}

	startMove(key){
		var speed = 3;
		var socket = io('http://socket.zmiti.com:2120');
		var s = this;
		var isMove = true;
		this.isMove = isMove;
		socket.on(key, function(msg){
            if(!msg){
                return;
            }
            msg = msg.replace(/&quot;/g,"\"");

            var data = JSON.parse(msg);
            if(s.state.currentUser.openid === data.openid){
            	s.isMove = data.type === 'left' || data.type === 'right';
            }
            switch(data.type){
            	case "left":

            		if(s.state.currentUser.openid === data.openid&& !s.state.result){
            			s.setState({
	            			isMove:true,
	            			direction:data.type
	            		});	
            			renderLeft();
            		}
            	break;
            	case "right":
	            	if(s.state.currentUser.openid === data.openid&& !s.state.result){
	            		s.setState({isMove:true,direction:data.type});
            			renderRight();	
	            	}
            		
            	break;
            	case "over":
            		if(s.state.currentUser.openid === data.openid&& !s.state.result){
	            		s.setState({isMove:false,direction:data.type});
            			s.isMove = false;
	            	}
            	break;
            	case 'beginGrab':
            		if(s.state.currentUser.openid === data.openid && !s.state.result){
		            	s.setState({isMove:false,direction:'over'});
	            		s.isMove = false;
	            		s.beginGrab();
	            	}
            		
            	break;
            	case 'login':
            		var has = false;
            		s.state.waitingList.map((item,i)=>{
            			if(item.openid === data.openid || data.openid === s.state.currentUser.openid && !s.state.result){
            				//当前等待列表中有刷新的用户。
            				has = true;
            			}
            		});
            		if(!has){
            			s.state.waitingList.push({
	            			headimgurl:data.headimgurl,
							name:data.nickname,
							openid:data.openid
	            		});	
	            		if(!s.state.currentUser.headimgurl){
	            			s.init();
	            			s.countdonwStart();
	            		}
	            		s.forceUpdate();
            		}
            	break;
            	case "continue"://继续游戏
            		if(s.state.currentUser.openid === data.openid && s.state.result){
		            	s.setState({
	            			result:''
	            		});
	            	}
            		
            	break;
            	case "finish":
            		s.state.submitList.push({
            			nickname:data.nickname,
            			headimgurl:data.headimgurl
            		})
            		if(s.state.currentUser.openid === data.openid){
		            	s.setState({
	            			result:'',
	            			duration:30,
	            			currentUser:{}
	            		});
	            	}
            	break;
            	
            }
        });


        var renderLeft = function(){

        	var transX = s.state.transX - speed;
        	if(transX <=0){
        		s.isMove = false;
        		transX = 0;
        	}
        	
        	s.setState({
        		transX
        	});
        	s.isMove && requestAnimationFrame(renderLeft);
        }

        var renderRight = function(){
        	var transX = s.state.transX + speed;
        	if(transX >= s.viewW - 70){
        		transX = s.viewW - 70;
        		isMove = false;
        	}
        		 
        	s.setState({
        		transX
        	});
        	s.isMove && requestAnimationFrame(renderRight);
        }
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
		var isStart = true;
		var speed = 30;
		var render = function(){
			this.setState({
				scrollerTransition:false
			})
			if(this.state.scrollerHeight>this.viewH -100 ){
				isStart = false;
				this.initGrab();
				return;
			}
			var height = this.state.scrollerHeight;
			this.state.personList.map((item,i)=>{
				if(height > item.offsetTop && this.state.transX+70>item.transX+item.style.left && this.state.transX<item.transX+item.style.left+item.style.width){
					isStart = false;
					this.setState({result:item.result});
					this.gameResult(item.result === 'r1' ? 'success' : 'fail');
					this.initGrab();
				}
			});
			if(isStart){
				speed +=2;
				speed = Math.min(200,speed);
				this.setState({
					scrollerHeight:this.state.scrollerHeight + this.viewH / speed
				});
				
				requestAnimationFrame(render);	
			}
			
		}.bind(this)
		render();
	}

	initGrab(){
		this.setState({
			scrollerHeight:280,
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
			var x =this.state.bgTransX;
			x-=2;
			if( -x >= this.state.bgW ){
				x = 0
			}
			this.setState({
				bgTransX:x
			})
			requestAnimationFrame(render);
		}.bind(this);
		render();
		
	}

	initPersonData(){
		this.state.personList.forEach((item,i)=>{
			item.offsetTop = $('.zmiti-person').eq(i)[0].offsetTop
		});
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

				this.setState({
					duration : this.state.duration - 1
				});	
				
				if(this.state.duration <= 0){
					if(this.state.waitingList.length<=0){
						this.gameResult('timeout');//时间到了、
						this.state.result = '';
						this.state.currentUser = {};
						this.countdonwEnd();
					}
					this.state.duration = 30;
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
		this.state.duration = 30;
		this.state.isMove = false;
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
		this.startMove(this.key);
		window.s = this;
		this.textAnimate();
		
		this.bgAnimate();//背景移动
		

		this.createQrcode();
		var s = this;
		var img = new Image();
		img.onload = function(){
			s.initPersonData();
			s.setState({
				bgW:this.width
			});
		}
		img.src=this.refs['bg'].src;

		obserable.on('updateTransX',(data)=>{
			this.state.personList.forEach((item,i)=>{
				item.transX = data.transX;
			});

			this.forceUpdate();
		});

		/*$(document).on('keydown',e=>{
			switch(e.keyCode){
				case 37:

				this.setState({
					direction:'left',
					isMove : true,
					transX:this.state.transX - 3
				});
				break;
				case 39:
				this.setState({
					direction:'right',
					isMove : true,
					transX:this.state.transX + 3
				});
				break;
			}
		}).on('keyup',e=>{
			switch(e.keyCode){
				case 37:
				case 39:
				this.setState({
					direction:'over',
					isMove : false,
				});
				break;
				case 39:
				break;
			}
		});*/

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
export default PubCom(ZmitiIndexApp);