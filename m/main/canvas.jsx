import React, { Component } from 'react';

export default class ZmitiCanvasApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			
		}
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
		this.texts = window.texts;
		
	}

	render() {
		var mainStyle = {
			//background:'url(../assets/images/m-bg.png) no-repeat center / cover'
		}
		return (
			<canvas style={mainStyle} className='zmiti-person zmiti-person1' ref='canvas' width={this.viewW-90} height={this.viewH}></canvas>
		);
	}

	componentDidMount() {
		
		var self = this;
		let {personList,obserable} = this.props;
		let img = new Image();
		this.obserable = obserable;
		
		var canvas = self.refs['canvas'];

		var arr = ['../assets/images/question.png'];
		personList.forEach((per,i)=>{
			arr.push(per.src);
			per.transY = (this.viewH + 150) / 7 * i;
		});

		var width = canvas.width,
			height = canvas.height;
		this.loading(arr,null,()=>{
			var context = canvas.getContext('2d');
			
			this.initPerson(personList);
			var timer = setInterval(()=>{
				context.clearRect(0,0,width,height);
				personList.forEach((person,i)=>{
					var img = new Image();
					img.src=person.src;

					var img1 =new Image();
					img1.src= arr[0];


					person.iNow = person.iNow || 0;



					person.transY+=person.speed;
					if(person.transY>this.viewH ){
						person.transY = -100;
						var index = Math.random()*this.texts.length|0;
						person.question = this.texts[index].text
						person.result = this.texts[index].result;
						person.text1 = this.texts[index].text1;
					}

					if(person.transY>this.viewW / 5 && person.transY < this.viewW /3 ||(person.transY>this.viewW / 2.5 && person.transY < this.viewW /1.5 )){
						context.fillStyle= 'green';
						context.font = "bold 14px '微软雅黑'"; //设置字体
						//context.fillText (person.question, ,200);
						//this.canvasTextAutoLine(person.question,context,person.transY+54,canvas.height - person.style.height-75,20);
						//context.drawImage(img1,0,0,200,136,person.transY,canvas.height - person.style.height-120,200,136);
					}
					
					context.drawImage(img,
							0,person.iNow*100,
							person.style.width,100,
							0,person.transY,
							person.style.width,100
							);	

					person.iNow++;

					if(person.iNow>=person.style.scale){
						person.iNow  = 0;
						
					}
				});

				
			},100);


			
			
			//var img1 = new createjs.Bitmap(person.src);
			//stage.addChild(img1);
			//stage.update();
		});
		

		
		
	}

	canvasTextAutoLine(str,ctx,initX,initY,lineHeight){
	    var lineWidth = 0;
	    var canvasWidth = 200; 
	    var lastSubStrIndex= 0; 
	    for(let i=0;i<str.length;i++){ 
	        lineWidth+=ctx.measureText(str[i]).width; 
	        if(lineWidth>canvasWidth/8*5){
	            ctx.fillText(str.substring(lastSubStrIndex,i),initX,initY);
	            initY+=lineHeight;
	            lineWidth=0;
	            lastSubStrIndex=i;
	        } 
	        if(i==str.length-1){
	            ctx.fillText(str.substring(lastSubStrIndex,i+1),initX,initY);
	        }
	    }
  }

	initPerson(personList){
		personList.forEach((item,i)=>{
			 
			var index= Math.random()*this.texts.length|0;
			item.question = this.texts[index].text;
			item.result = this.texts[index].result;
			item.text1 = this.texts[index].text1;
		})
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

	
}
