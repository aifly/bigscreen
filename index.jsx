import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
//import ZmitiIndexApp from './index/index.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';
import $ from 'jquery';
injectTapEventPlugin();

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score:0,
			result:''
		};

		this.zmitiMap = [
				{"name":"北京市", "log":"116.46", "lat":"39.92"},
				{"name":"上海市", "log":"121.48", "lat":"31.22"},
				{"name":"天津市", "log":"117.2", "lat":"39.13"},
				{"name":"重庆市", "log":"106.54", "lat":"29.59"},
				{"name":"石家庄", "log":"114.48", "lat":"38.03"},
				{"name":"太原市", "log":"112.53", "lat":"37.87"},
				{"name":"沈阳市", "log":"123.38", "lat":"41.8"},
				{"name":"长春市", "log":"125.35", "lat":"43.88"},
				{"name":"哈尔滨市", "log":"126.63", "lat":"45.75"},
				{"name":"杭州市", "log":"120.19", "lat":"30.26"},
				{"name":"福州市", "log":"119.3", "lat":"26.08"},
				{"name":"济南市", "log":"106.54", "lat":"29.59"},
				{"name":"郑州市", "log":"113.65", "lat":"34.76"},
				{"name":"武汉市", "log":"114.31", "lat":"30.52"},
				{"name":"长沙市", "log":"113", "lat":"28.21"},
				{"name":"广州市", "log":"113.23", "lat":"23.16"},
				{"name":"海口市", "log":"110.35", "lat":"20.02"},
				{"name":"成都市", "log":"104.06", "lat":"30.67"},
				{"name":"贵阳市", "log":"106.71", "lat":"26.57"},
				{"name":"昆明市", "log":"102.73", "lat":"25.04"},
				{"name":"南昌市", "log":"115.89", "lat":"28.68"},
				{"name":"西安市", "log":"108.95", "lat":"34.27"},
				{"name":"西宁市", "log":"101.74", "lat":"36.56"},
				{"name":"兰州市", "log":"103.73", "lat":"36.03"},
				{"name":"南宁市", "log":"106.54", "lat":"29.59"},
				{"name":"乌鲁木齐市", "log":"87.68", "lat":"43.77"},
				{"name":"呼和浩特市", "log":"111.65", "lat":"40.82"},
				{"name":"拉萨市", "log":"91.11", "lat":"29.97"},
				{"name":"银川市", "log":"106.27", "lat":"38.47"},
				{"name":"台北市", "log":"121.5", "lat":"25.14"},
				{"name":"香港", "log":"114.17", "lat":"22.27"},
				{"name":"澳门", "log":"113.33", "lat":"22.13"},
				{"name":"合肥市", "log":"117.27", "lat":"31.86"},
				{"name":"南京市", "log":"118.78", "lat":"32.04"}
			]
	}
	render() {

		var mainStyle = {
			background:'url(./assets/images/bg-c.jpg) no-repeat center top / cover'
		}
		return (
			<div className='zmiti-main-ui lt-full' style={mainStyle}>
				<header>
					<aside>
						<img src={this.state.headimgurl||'./assets/images/zmiti.jpg'}/>
						{this.state.nickname||'zmiti'}
					</aside>
					<aside>
						<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg"
						 width="100%" viewBox="0 0 1000 500" enableBackground="new 0 0 1000 500">
					<path transform='translate(-120 -100) scale(1.1)' stroke='#999'  strokeWidth={4} className='path' fill="#fff" d="M985.369,394.032l-13.452-9.474l-23.4-10.656l-20.472-3.552l15.208-21.313l15.207-21.905l8.774-23.09
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

					</aside>
				</header>
				<div className='zmiti-cloud-line'>
					<aside></aside>
					<aside></aside>
					<div className='zmiti-duration'>{'积分：'+(this.state.integral||0)}</div>
				</div>

				<div className='zmiti-controller'>
					<section>
						<aside>
							<div style={{background:'url(./assets/images/btn-l.png) no-repeat center / contain'}} onTouchStart={this.leftStart.bind(this)} onTouchEnd={this.leftEnd.bind(this)} className={this.state.lefttap?'active':''}>
								
							</div>
						</aside>
						<aside>
							<div style={{background:'url(./assets/images/btn-r.png) no-repeat center / contain'}} onTouchStart={this.rightStart.bind(this)} onTouchEnd={this.rightEnd.bind(this)} className={this.state.righttap?'active':''} >
								
							</div>
						</aside>
					</section>
						
					<section>
						<aside>
							<img onTouchTap={this.sure.bind(this)} onTouchStart={this.sureStart.bind(this)} onTouchEnd={this.sureEnd.bind(this)} className={this.state.suretap?'active':''} src='./assets/images/btn-ok.png'/>
						</aside>
					</section>
				</div>

				{this.state.result && <section onTouchStart={this.sendMsg.bind(this)} className='zmiti-mask lt-full'>
					<img src={'./assets/images/'+this.state.result+'.png'}/>					
				</section>}
			</div>
		);
	}

	sendMsg(){


		switch(this.state.result){
			case "success":
				$.ajax({
					url:'http://api.zmiti.com/v2/msg/send_msg',
		            data:{
		                type:this.key,
		                content:JSON.stringify({type:'finish',openid:this.state.openid}),
		                to:''
		            }
				});
				
			break;
			case 'fail':
				$.ajax({
					url:'http://api.zmiti.com/v2/msg/send_msg',
		            data:{
		                type:this.key,
		                content:JSON.stringify({type:'continue',openid:this.state.openid}),
		                to:''
		            }
				});	
			break;
		}
		this.setState({result:''});
		
	}

	leftStart(e){

		e.preventDefault();
		this.setState({
			lefttap:true
		});
		var leftOpt = {
			type:'left',
			isOver:false,
			openid:this.state.openid
		}
		$.ajax({
			url:'http://api.zmiti.com/v2/msg/send_msg',
            data:{
                type:this.key,
                content:JSON.stringify(leftOpt),
                to:leftOpt.to||''
            }
		});
		return !1;
	}
	leftEnd(){
		this.setState({
			lefttap:false
		});
		return false;
	}
	rightStart(e){
		e.preventDefault();
		this.setState({
			righttap:true
		});
		var rightOpt = {
			type:'right',
			isOver:false,
			openid:this.state.openid
		}
		
		$.ajax({
			url:'http://api.zmiti.com/v2/msg/send_msg',
            data:{
                type:this.key,
                content:JSON.stringify(rightOpt),
                to:rightOpt.to||''
            }
		});
		return false;
	}
	rightEnd(){
		this.setState({
			righttap:false
		})
		return false;
	}
	sureStart(){
		this.setState({
			suretap:true
		});
		return false;
	}
	sureEnd(){
		this.setState({
			suretap:false
		})
	}
	sure(e){
		e.preventDefault();
		$.ajax({
			url:'http://api.zmiti.com/v2/msg/send_msg',
            data:{
                type:this.key,
                content:JSON.stringify({type:'beginGrab',openid:this.state.openid}),
                to:''
            }
		});
	}
	getPos(nickname,headimgurl){

			
	    	var s = this;
	    	 $.ajax({
	        	url:`http://restapi.amap.com/v3/geocode/regeo?key=10df4af5d9266f83b404c007534f0001&location=${wx.posData.longitude},${wx.posData.latitude}&poitype=&radius=100&extensions=base&batch=false&roadlevel=1`+'',
				type:'get',
				error(){

				},
				 
				success(data){
					if(data.status === '1' && data.infocode === '10000'){
						
						var addressComponent = data.regeocode.addressComponent;
						var opt = {
					   		type:'map',
					   		address:(addressComponent.city[0]||addressComponent.province)+addressComponent.district,
					   		pos:[wx.posData.longitude,wx.posData.latitude],
					   		nickname:nickname,
					   		headimgurl:headimgurl
					   	}

					   	s.setState({
					   		nickname,
					   		headimgurl,
					   		showUI:true,
					   		latitude:wx.posData.latitude,
					   		longitude:wx.posData.longitude,
					   		usercity:(addressComponent.city[0]||addressComponent.province)+addressComponent.district
					   	});
					   	$.ajax({
							url:'http://api.zmiti.com/v2/weixin/save_userview/',
							type:'post',
							data:{
								worksid:s.worksid,
								wxopenid:s.openid,
								wxname:nickname,
								usercity:opt.address,
								longitude:wx.posData.longitude,
								latitude:wx.posData.latitude
							}
						}).done((data)=>{
							if(data.getret === 0 ){
								
							}else{
								alert('save_userview getret : '+ data.getret +' msg : '+ data.getmsg)
							}
						},()=>{
							//alert('save_userview error');
						})

					   	$.ajax({
					   		url:'http://api.zmiti.com/v2/weixin/add_wxuser/',
					   		type:'post',
					   		data:{
					   			wxopenid:s.openid,
					   			worksid:s.worksid,
					   			nickname:nickname,
					   			headimgurl:headimgurl,
					   			longitude:wx.posData.longitude,
					   			latitude:wx.posData.latitude,
					   			accuracy:wx.posData.accuracy,
					   			wxappid:s.wxappid,
					   			integral:localStorage.getItem('nickname'+s.worksid)?0:10
					   		},
					   		error(){
					   			alert('add_wxuser: 服务器返回错误');
					   		},
					   		success(data){
					   			if(data.getret === 0){
					   				s.setState({
										integral:data['userinfo'].totalintegral
									});
					   				
					   			}else{
					   				alert('getret  : '+ data.getret + ' msg : ' + data.getmsg+ ' .....');
					   			}
					   		}
					   	});

					   

					   	//获取用户积分
						//
				   		$.ajax({
							url:'http://api.zmiti.com/v2/msg/send_msg/',
							data:{
								type:s.worksid,
								content:JSON.stringify(opt),
								to:opt.to||''
							},
							success(data){
								s.state.showUI = true;
								s.forceUpdate();
								//console.log(data);
							}
						})
					}
					else{
						alert('地址信息获取失败')
					}
				}						        	
	        })
    }

    get_userrank(){
    	var s = this;
    	$.ajax({
	   		url:'http://api.zmiti.com/v2/weixin/get_userrank/',
	   		data:{
	   			wxopenid:s.openid
	   		}
	   	}).done(data=>{
	   		if(data.getret === 0){
	   			s.setState({integral:data.integral});
	   		}else{
	   			//alert('data.getret => '+data.getret + ' \n data.getmsg => '+data.getmsg);
	   		}
	   	},e=>{
	   		//alert('get_userrank error')
	   	})
    }

	wxConfig(title,desc,img,appId='wxfacf4a639d9e3bcc',worksid){
		   var durl = location.href.split('#')[0]; //window.location;
		        var code_durl = encodeURIComponent(durl);

		       // alert('title => '+ title +  '\n'+ 'desc => '+ desc + '\n'+ 'img => '+img+'\n appId => '+appId+'\n worksid => '+worksid);
		        var s = this;

			$.ajax({
				type:'get',
				url: "http://api.zmiti.com/weixin/jssdk.php?type=signature&durl="+code_durl+"&worksid="+worksid,
				dataType:'jsonp',
				jsonp: "callback",
			    jsonpCallback: "jsonFlickrFeed",
			    error(){
			    },
			    success(data){
			    	wx.config({
							    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
							    appId:appId, // 必填，公众号的唯一标识
							    timestamp:'1488558145' , // 必填，生成签名的时间戳
							    nonceStr: 'Wm3WZYTPz0wzccnW', // 必填，生成签名的随机串
							    signature: data.signature,// 必填，签名，见附录1
							    jsApiList: [ 'checkJsApi',
											  'onMenuShareTimeline',
											  'onMenuShareAppMessage',
											  'onMenuShareQQ',
											  'onMenuShareWeibo',
											  'hideMenuItems',
											  'showMenuItems',
											  'hideAllNonBaseMenuItem',
											  'showAllNonBaseMenuItem'
									] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
							});

			    	wx.ready(()=>{

			    		wx.getLocation({
						    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
						    fail(){
						    	//alert('location fail');
						    	var idx = Math.random()*s.zmitiMap.length|0;

						    	var latitude = s.zmitiMap[idx].lat; // 纬度，浮点数，范围为90 ~ -90
						        
						        var longitude = s.zmitiMap[idx].log; // 经度，浮点数，范围为180 ~ -180。
						       
						        var accuracy = 100; // 位置精度
						    	wx.posData = {
						        	longitude,
						        	latitude,
						        	accuracy
						        };
						        if((s.nickname || s.headimgurl) && s.openid){
						        	s.getPos(s.nickname,s.headimgurl);
						        }
						    },
						    cancel:function(){
						    	var idx = Math.random()*s.zmitiMap.length|0;

						    	var latitude = s.zmitiMap[idx].lat; // 纬度，浮点数，范围为90 ~ -90
						        
						        var longitude = s.zmitiMap[idx].log; // 经度，浮点数，范围为180 ~ -180。
						       
						        var accuracy = 100; // 位置精度
						    	wx.posData = {
						        	longitude,
						        	latitude,
						        	accuracy
						        };
						        if((s.nickname || s.headimgurl) && s.openid){
						        	s.getPos(s.nickname,s.headimgurl);
						        }
						    },
						    success: function (res) {
						        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
						        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
						        var speed = res.speed; // 速度，以米/每秒计
						        var accuracy = res.accuracy; // 位置精度

						        wx.posData = {
						        	longitude,
						        	latitude,
						        	accuracy
						        };
						        if((s.nickname || s.headimgurl) && s.openid){
						        	s.getPos(s.nickname,s.headimgurl);
						        }
						       
						    }
						});

			    			 		//朋友圈
	                    wx.onMenuShareTimeline({
	                        title: title, // 分享标题
	                        link: durl, // 分享链接
	                        imgUrl: img, // 分享图标
	                        desc: desc,
	                        success: function () { },
	                        cancel: function () { }
	                    });
	                    //朋友
	                    wx.onMenuShareAppMessage({
	                        title: title, // 分享标题
	                        link: durl, // 分享链接
	                        imgUrl: img, // 分享图标
	                        type: "link",
	                        dataUrl: "",
	                        desc: desc,
	                        success: function () {
	                        },
	                        cancel: function () { 
	                        }
	                    });
	                    //qq
	                    wx.onMenuShareQQ({
	                        title: title, // 分享标题
	                        link: durl, // 分享链接
	                        imgUrl: img, // 分享图标
	                        desc: desc,
	                        success: function () { },
	                        cancel: function () { }
	                    });
			    	});
			    }
			});
		
	}
	componentDidMount() {

		this.key = this.getQueryString('key');

		var s = this;
		$.getJSON({
			url:'./assets/js/data.json',
			data:{},

		}).done(data=>{
			
			if(typeof data === 'string'){
				data = JSON.parse(data);
			}

			var key = this.getQueryString('key');
			this.key = key;

			this.setState({
				worksid:data.worksid,
				wxappid:data.wxappid,
				wxappsecret:data.wxappsecret
			});
			s.worksid = data.worksid;
			
			
			this.wxConfig('寻找党委书记','寻找党委书记','http://h5.zmiti.com/public/xwords/imaegs/300.jpg',this.state.wxappid,this.state.worksid);



			s.loadingImg = ['./assets/images/btn-r.png',
								'./assets/images/btn-l.png',
								'./assets/images/btn-ok.png',
								];

			if(localStorage.getItem('nickname'+s.worksid) && localStorage.getItem('headimgurl'+s.worksid)&&
				localStorage.getItem('openid'+s.worksid)){
			
				s.setState({
					headimgurl:localStorage.getItem('headimgurl'+s.worksid)
				});
				
				/*s.loading(s.loadingImg,(scale)=>{
							s.setState({
								progress:(scale*100|0)+'%'
							})
						},()=>{
						
							
						});*/

				s.openid = localStorage.getItem('openid'+s.worksid)
				s.nickname = localStorage.getItem('nickname'+s.worksid);
				s.headimgurl = localStorage.getItem('headimgurl'+s.worksid);
				
				s.setState({
					showLoading:false,
					nickname:s.nickname,
					headimgurl:s.headimgurl,
					openid:s.openid
				});

				s.listen();

				s.login();

				
				if (wx.posData && wx.posData.longitude) {
					s.getPos(s.nickname, s.headimgurl);
				}
				return;
			}

			$.ajax({
				url:'http://api.zmiti.com/v2/weixin/getwxuserinfo/',
				data:{
					code:s.getQueryString('code'),
					wxappid:data.wxappid,
					wxappsecret:data.wxappsecret
				},
				error(e){
				},
				success(dt){
					 
					if(dt.getret === 0){
						s.setState({
							headimgurl:dt.userinfo.headimgurl
						});
						s.loading(s.loadingImg,(scale)=>{
							s.setState({
								progress:(scale*100|0)+'%'
							})
						},()=>{
							
							//s.defaultName = dt.userinfo.nickname || data.username || '智媒体';

							localStorage.setItem('nickname'+s.worksid,dt.userinfo.nickname );
							localStorage.setItem('headimgurl'+s.worksid,dt.userinfo.headimgurl);
							localStorage.setItem('openid'+s.worksid,dt.userinfo.openid);
							s.openid = dt.userinfo.openid;
							s.nickname = dt.userinfo.nickname;
							s.headimgurl = dt.userinfo.headimgurl;
							
							s.setState({
								showLoading:false,
								nickname:s.nickname,
								headimgurl:s.headimgurl,
								openid:s.openid
							});
							s.listen();
							s.login();

							if (wx.posData && wx.posData.longitude) {
								s.getPos(dt.userinfo.nickname, dt.userinfo.headimgurl);
							}

						});
						
					}
					else{
						
						s.setState({
							showLoading:true
						});



						if( s.isWeiXin() ){

							/*if(localStorage.getItem('oauthurl'+s.worksid)){
								window.location.href = localStorage.getItem('oauthurl'+s.worksid);
								return;
							}*/

							$.ajax({
								url:'http://api.zmiti.com/v2/weixin/getoauthurl/',
								type:'post',
								data:{
									redirect_uri:window.location.href.replace(/code/ig,'zmiti'),
									scope:'snsapi_userinfo',
									worksid:s.worksid,
									state:new Date().getTime()+''
								},
								error(){
								},
								success(dt){
									if(dt.getret === 0){
										
										localStorage.setItem('oauthurl'+s.worksid,dt.url);
										window.location.href =  dt.url;
									}
									else{
										s.setDefaultInfo();										
										s.login();
									}
								}
							})
						}
						else{

							s.loading(s.loadingImg,(scale)=>{
								s.setState({
									progress:(scale*100|0)+'%'
								})
							},()=>{
								s.setState({
									showLoading:false
								});

								$.ajax({
									url:'http://api.zmiti.com/v2/works/update_pvnum/',
									data:{
										worksid:s.worksid
									},
									success(data){
										if(data.getret === 0){
											console.log(data);
										}
									}
								});
								s.setDefaultInfo();
								s.login();


								s.defaultName =  data.username || '智媒体';
							
								
								s.forceUpdate();

						});


						 
						}

					}


				}
			});






		})

		$(document).on('touchend mouseup',function(e){
			e.preventDefault();

			$.ajax({
				url:'http://api.zmiti.com/v2/msg/send_msg',
                data:{
                    type:s.key,
                    content:JSON.stringify({type:'over',openid:s.state.openid}),
                    to:''
                }
			});
			return !1;
		});


	}

	listen(){
		var socket = io('http://socket.zmiti.com:2120');
		var s = this;
		
		socket.on(s.openid+'-over', function(msg){
			if(!msg){
                return;
            }
            msg = msg.replace(/&quot;/g,"\"");

			var data = JSON.parse(msg);

        	s.setState({
        		result:data.msg
        	});
		});
	}

	setDefaultInfo(){
		var s = this;
		s.openid = s.randomString();
		s.nickname = 'zmiti';
		s.headimgurl = './assets/images/zmiti.jpg';
		s.listen();
		s.setState({
			openid:s.openid,
			nickname:s.nickname,
			headimgurl:s.headimgurl
		});
	}

	login(){

		var s = this;
		$.ajax({
			url:'http://api.zmiti.com/v2/msg/send_msg',
            data:{
                type:s.key,
                content:JSON.stringify({
                	type:'login',
                	nickname:s.nickname||s.state.nickname,
            		headimgurl:s.headimgurl||s.state.headimgurl,
            		openid:s.openid||s.state.openid
                }),
                to:''
            }
		});
	}

	loading(arr, fn, fnEnd){
        var len = arr.length;
        var count = 0;
        var i = 0;
        
        function loadimg() {
            if (i === len) {
                return;
            }
            var img = new Image();
            img.onload = img.onerror = function(){
                count++;
                if (i < len - 1) {
                    i++;
                    loadimg();
                    fn && fn(i / (len - 1), img.src);
                } else {
                    fnEnd && fnEnd(img.src);
                }
            };
            img.src = arr[i];
        }
       loadimg();
    }

    getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]);
        return null;
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

    isWeiXin(){
	    var ua = window.navigator.userAgent.toLowerCase();
	    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	        return true;
	    }else{
	        return false;
	    }
    }
	
}

ReactDOM.render(<App></App>,document.getElementById('fly-main'));