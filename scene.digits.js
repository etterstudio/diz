// - - - DIGITS - - - //

director.digits = {};
	
director.digits.start = function(){
		
	document.body.style.backgroundColor = "#000";
	doc.lock = "vertical";
	
	addCast({id:"digitGroupSVG", type:"svg", parent:"mother", shape:"container", addEase:"bounceSlow", render:"xy", sensor:"xy", x:0, y:0, r:0});
	//addCast({id:"digitGroupSVG", type:"svg", shape:"group", addEase:"bounceSlow", render:"xy", sensor:"xy", x:0, y:0, r:0});
	addCast({id:"digimoto", render:"digit", parent:"digitGroupSVG", addEase:"bounceFast", shape:"line", type:"svg", color:"#fff", stroke:1, p1x:0, p1y:0, p2x:0, p2y:0, p3x:0, p3y:0, p4x:0, p4y:0, p5x:0, p5y:0, p6x:0, p6y:0, p7x:0, p7y:0, p8x:0, p8y:0, p9x:0, p9y:0, p10x:0, p10y:0, p11x:0, p11y:0, p12x:0, p12y:0, p13x:0, p13y:0});
	
	moveThing("digitGroupSVG", {x:0, y:0})
	
	doc.act = "running";
	
}

director.digits.running = function(){
	
	if(input.buttonHit == "1"){
		changeScene("pingpong");
	};

	if(input.state == "click"){
	
		//switch on sound
		if(doc.sound == "on"){ //because of iOS needs to happen on first touch once
			sound.oscillator.start();
			doc.sound = "running";
			console.log("sound on");
		}
		
	}
	
	if(input.digit == "1"){
	
		moveThing("digimoto", {
			p1x:-3*doc.fontSize, 
			p1y:-3*doc.fontSize, 
			p2x:-2*doc.fontSize, 
			p2y:-4*doc.fontSize, 
			p3x:-1*doc.fontSize, 
			p3y:-5*doc.fontSize,
			p4x:0*doc.fontSize, 
			p4y:-6*doc.fontSize, 
			p5x:0*doc.fontSize, 
			p5y:-5*doc.fontSize, 
			p6x:0*doc.fontSize, 
			p6y:5*doc.fontSize, 
			p7x:0*doc.fontSize, 
			p7y:6*doc.fontSize, 
			p8x:-1*doc.fontSize,
			p8y:6*doc.fontSize,
			p9x:-1*doc.fontSize,
			p9y:6*doc.fontSize,
			p10x:-2*doc.fontSize,
			p10y:6*doc.fontSize,
			p11x:-1*doc.fontSize,
			p11y:6*doc.fontSize,
			p12x:1*doc.fontSize,
			p12y:6*doc.fontSize,
			p13x:2*doc.fontSize,
			p13y:6*doc.fontSize
		});

	}else if(input.digit == "2"){
	
		moveThing("digimoto", {
			p1x:-3*doc.fontSize, 
			p1y:-3*doc.fontSize, 
			p2x:-3*doc.fontSize, 
			p2y:-7*doc.fontSize, 
			p3x:3*doc.fontSize, 
			p3y:-7*doc.fontSize,
			p4x:3*doc.fontSize, 
			p4y:-3*doc.fontSize, 
			p5x:3*doc.fontSize, 
			p5y:0*doc.fontSize, 
			p6x:-3*doc.fontSize, 
			p6y:0*doc.fontSize, 
			p7x:-3*doc.fontSize, 
			p7y:6*doc.fontSize, 
			p8x:0*doc.fontSize,
			p8y:6*doc.fontSize,
			p9x:0*doc.fontSize,
			p9y:6*doc.fontSize,
			p10x:3*doc.fontSize,
			p10y:6*doc.fontSize,
			p11x:3*doc.fontSize,
			p11y:5*doc.fontSize,
			p12x:3*doc.fontSize,
			p12y:5*doc.fontSize,
			p13x:3*doc.fontSize,
			p13y:4*doc.fontSize
		});	

	}else if(input.digit == "3"){
	
		moveThing("digimoto", {
			p1x:-3*doc.fontSize, 
			p1y:-3*doc.fontSize, 
			p2x:-3*doc.fontSize, 
			p2y:-7*doc.fontSize, 
			p3x:3*doc.fontSize, 
			p3y:-7*doc.fontSize,
			p4x:3*doc.fontSize, 
			p4y:-3*doc.fontSize, 
			p5x:3*doc.fontSize, 
			p5y:-1*doc.fontSize, 
			p6x:2*doc.fontSize, 
			p6y:0*doc.fontSize, 
			p7x:0*doc.fontSize, 
			p7y:0*doc.fontSize, 
			p8x:2*doc.fontSize,
			p8y:0*doc.fontSize,
			p9x:3*doc.fontSize,
			p9y:1*doc.fontSize,
			p10x:3*doc.fontSize,
			p10y:3*doc.fontSize,
			p11x:3*doc.fontSize,
			p11y:7*doc.fontSize,
			p12x:-3*doc.fontSize,
			p12y:7*doc.fontSize,
			p13x:-3*doc.fontSize,
			p13y:3*doc.fontSize	
		});
		
	}else if(input.digit == "4"){
	
		moveThing("digimoto", {
			p1x:3*doc.fontSize,//
			p1y:2*doc.fontSize,
			p2x:0*doc.fontSize,
			p2y:2*doc.fontSize,
			p3x:0*doc.fontSize,
			p3y:2*doc.fontSize,
			p4x:-3*doc.fontSize,//
			p4y:2*doc.fontSize,
			p5x:-3*doc.fontSize,
			p5y:2*doc.fontSize,
			p6x:1*doc.fontSize,
			p6y:-6*doc.fontSize,
			p7x:1*doc.fontSize,//
			p7y:-6*doc.fontSize,
			p8x:1*doc.fontSize,
			p8y:-2*doc.fontSize,
			p9x:1*doc.fontSize,
			p9y:-2*doc.fontSize,
			p10x:1*doc.fontSize,//
			p10y:2*doc.fontSize,
			p11x:1*doc.fontSize,
			p11y:4*doc.fontSize,
			p12x:1*doc.fontSize,
			p12y:4*doc.fontSize,
			p13x:1*doc.fontSize,//
			p13y:6*doc.fontSize
		});
		
	}else if(input.digit == "5"){
	
		moveThing("digimoto", {
			p1x:3*doc.fontSize,//
			p1y:-6*doc.fontSize,
			p2x:1*doc.fontSize,
			p2y:-6*doc.fontSize,
			p3x:-1*doc.fontSize,
			p3y:-6*doc.fontSize,
			p4x:-3*doc.fontSize,//
			p4y:-6*doc.fontSize,
			p5x:-3*doc.fontSize,
			p5y:-4*doc.fontSize,
			p6x:-3*doc.fontSize,
			p6y:-4*doc.fontSize,
			p7x:-3*doc.fontSize,//
			p7y:-1*doc.fontSize,
			p8x:-2*doc.fontSize,
			p8y:-3*doc.fontSize,
			p9x:3*doc.fontSize,
			p9y:-4*doc.fontSize,
			p10x:3*doc.fontSize,//
			p10y:2*doc.fontSize,
			p11x:3*doc.fontSize,
			p11y:8*doc.fontSize,
			p12x:-3*doc.fontSize,
			p12y:7*doc.fontSize,
			p13x:-3*doc.fontSize,//
			p13y:3*doc.fontSize
		});
		
	}else if(input.digit == "6"){
	
		moveThing("digimoto", {
			p1x:3*doc.fontSize,//
			p1y:-3*doc.fontSize,
			p2x:3*doc.fontSize,
			p2y:-7*doc.fontSize,
			p3x:-3*doc.fontSize,
			p3y:-7*doc.fontSize,
			p4x:-3*doc.fontSize,//
			p4y:-3*doc.fontSize,
			p5x:-3*doc.fontSize,
			p5y:0*doc.fontSize,
			p6x:-3*doc.fontSize,
			p6y:0*doc.fontSize,
			p7x:-3*doc.fontSize,//
			p7y:3*doc.fontSize,
			p8x:-3*doc.fontSize,
			p8y:7*doc.fontSize,
			p9x:3*doc.fontSize,
			p9y:7*doc.fontSize,
			p10x:3*doc.fontSize,//
			p10y:3*doc.fontSize,
			p11x:3*doc.fontSize,
			p11y:0*doc.fontSize,
			p12x:0*doc.fontSize,
			p12y:0*doc.fontSize,
			p13x:0*doc.fontSize,//
			p13y:0*doc.fontSize
		});
		
	}else if(input.digit == "7"){
	
		moveThing("digimoto", {
			p1x:-3*doc.fontSize,//
			p1y:-4*doc.fontSize,
			p2x:-3*doc.fontSize,
			p2y:-5*doc.fontSize,
			p3x:-3*doc.fontSize,
			p3y:-5*doc.fontSize,
			p4x:-3*doc.fontSize,//
			p4y:-6*doc.fontSize,
			p5x:0*doc.fontSize,
			p5y:-6*doc.fontSize,
			p6x:0*doc.fontSize,
			p6y:-6*doc.fontSize,
			p7x:3*doc.fontSize,//
			p7y:-6*doc.fontSize,
			p8x:3*doc.fontSize,
			p8y:-4*doc.fontSize,
			p9x:3*doc.fontSize,
			p9y:-3*doc.fontSize,
			p10x:0*doc.fontSize,//
			p10y:0*doc.fontSize,
			p11x:-3*doc.fontSize,
			p11y:3*doc.fontSize,
			p12x:-3*doc.fontSize,
			p12y:6*doc.fontSize,
			p13x:-3*doc.fontSize,//
			p13y:6*doc.fontSize
		});
		
	}else if(input.digit == "8"){
	
		moveThing("digimoto", {
			p1x:-3*doc.fontSize,//
			p1y:-3*doc.fontSize,
			p2x:-3*doc.fontSize,
			p2y:-7*doc.fontSize,
			p3x:3*doc.fontSize,
			p3y:-7*doc.fontSize,
			p4x:3*doc.fontSize,//
			p4y:-3*doc.fontSize,
			p5x:3*doc.fontSize,
			p5y:1*doc.fontSize,
			p6x:-3*doc.fontSize,
			p6y:-1*doc.fontSize,
			p7x:-3*doc.fontSize,//
			p7y:3*doc.fontSize,
			p8x:-3*doc.fontSize,
			p8y:7*doc.fontSize,
			p9x:3*doc.fontSize,
			p9y:7*doc.fontSize,
			p10x:3*doc.fontSize,//
			p10y:3*doc.fontSize,
			p11x:3*doc.fontSize,
			p11y:-1*doc.fontSize,
			p12x:-3*doc.fontSize,
			p12y:1*doc.fontSize,
			p13x:-3*doc.fontSize,//
			p13y:-3*doc.fontSize
		});
		
	}else if(input.digit == "9"){
	
		moveThing("digimoto", {
			p1x:0*doc.fontSize,//
			p1y:0*doc.fontSize,
			p2x:0*doc.fontSize,
			p2y:0*doc.fontSize,
			p3x:-3*doc.fontSize,
			p3y:0*doc.fontSize,
			p4x:-3*doc.fontSize,//
			p4y:-3*doc.fontSize,
			p5x:-3*doc.fontSize,
			p5y:-7*doc.fontSize,
			p6x:3*doc.fontSize,
			p6y:-7*doc.fontSize,
			p7x:3*doc.fontSize,//
			p7y:-3*doc.fontSize,
			p8x:3*doc.fontSize,
			p8y:0*doc.fontSize,
			p9x:3*doc.fontSize,
			p9y:0*doc.fontSize,
			p10x:3*doc.fontSize,//
			p10y:3*doc.fontSize,
			p11x:3*doc.fontSize,
			p11y:7*doc.fontSize,
			p12x:-3*doc.fontSize,
			p12y:7*doc.fontSize,
			p13x:-3*doc.fontSize,//
			p13y:3*doc.fontSize
		});
		
	}else if(input.digit == "0"){
	
		moveThing("digimoto", {
			p1x:-3*doc.fontSize,//
			p1y:3*doc.fontSize,
			p2x:-3*doc.fontSize,
			p2y:0*doc.fontSize,
			p3x:-3*doc.fontSize,
			p3y:0*doc.fontSize,
			p4x:-3*doc.fontSize,//
			p4y:-3*doc.fontSize,
			p5x:-3*doc.fontSize,
			p5y:-7*doc.fontSize,
			p6x:3*doc.fontSize,
			p6y:-7*doc.fontSize,
			p7x:3*doc.fontSize,//
			p7y:-3*doc.fontSize,
			p8x:3*doc.fontSize,
			p8y:0*doc.fontSize,
			p9x:3*doc.fontSize,
			p9y:0*doc.fontSize,
			p10x:3*doc.fontSize,//
			p10y:3*doc.fontSize,
			p11x:3*doc.fontSize,
			p11y:7*doc.fontSize,
			p12x:-3*doc.fontSize,
			p12y:7*doc.fontSize,
			p13x:-3*doc.fontSize,//
			p13y:3*doc.fontSize
		});
		
	}
	
}


renders.digit = function(obj){
	
	if(doc.sound == "running"){
		sound.oscillator.frequency.value = Math.round(stage[obj].p13xMomentum+stage[obj].p1yMomentum)*5;
	}

	objectosHTML[obj].setAttributeNS(null, "d", 
	"M" + Math.round(((stage[obj].p1xNow)*doc.scale)) + "," + Math.round(((stage[obj].p1yNow)*doc.scale)) + 
	" C" + Math.round(((stage[obj].p2xNow)*doc.scale)) + "," + Math.round(((stage[obj].p2yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p3xNow)*doc.scale)) + "," + Math.round(((stage[obj].p3yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p4xNow)*doc.scale)) + "," + Math.round(((stage[obj].p4yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p5xNow)*doc.scale)) + "," + Math.round(((stage[obj].p5yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p6xNow)*doc.scale)) + "," + Math.round(((stage[obj].p6yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p7xNow)*doc.scale)) + "," + Math.round(((stage[obj].p7yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p8xNow)*doc.scale)) + "," + Math.round(((stage[obj].p8yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p9xNow)*doc.scale)) + "," + Math.round(((stage[obj].p9yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p10xNow)*doc.scale)) + "," + Math.round(((stage[obj].p10yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p11xNow)*doc.scale)) + "," + Math.round(((stage[obj].p11yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p12xNow)*doc.scale)) + "," + Math.round(((stage[obj].p12yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p13xNow)*doc.scale)) + "," + Math.round(((stage[obj].p13yNow)*doc.scale)));
}