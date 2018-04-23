

// - - - controls - - - //

function checkHit(x, y){
	for(var key in input.buttons) {
      	if(x < input.buttons[key].right && x > input.buttons[key].left && y < input.buttons[key].bottom && y > input.buttons[key].top){
      		input.buttonHit = key;
      		//document.getElementById('fsize').innerHTML = x + "/" + y + " in " + input.buttons[key].right + "/" + input.buttons[key].left + "-" + input.buttons[key].bottom + "/" + input.buttons[key].top;
      	}
	}	
}

function addDeskListeners() {

	window.addEventListener('mousedown', function(e) {
		input.x = Math.round((e.pageX-doc.xCenter)/doc.scale*100)/100;
		input.y = Math.round((e.pageY-doc.yCenter)/doc.scale*100)/100;
		input.state = "click";
		checkHit(e.pageX, e.pageY);
		director[doc.scene][doc.act]();
		input.state = "beforeDrag";
	});
	
	window.addEventListener('mousemove', function(e) {
		if(input.state == "beforeDrag" || input.state == "drag"){
			input.state = "drag";
			input.x = Math.round((e.pageX-doc.xCenter)/doc.scale*100)/100;
			input.y = Math.round((e.pageY-doc.yCenter)/doc.scale*100)/100;
			director[doc.scene][doc.act]();
		}
		
	});
	
	window.addEventListener('mouseup', function(e) {
		input.state = "end";
		director[doc.scene][doc.act]();
		input.state = "";
	});
	
	window.onkeydown = function(e) {
		input.key = e.keyCode ? e.keyCode : e.which;
		if(input.key == 48){
			input.digit = 0;
		}else if(input.key == 49){
			input.digit = 1;
		}else if(input.key == 50){
			input.digit = 2;
		}else if(input.key == 51){
			input.digit = 3;
		}else if(input.key == 52){
			input.digit = 4;
		}else if(input.key == 53){
			input.digit = 5;
		}else if(input.key == 54){
			input.digit = 6;
		}else if(input.key == 55){
			input.digit = 7;
		}else if(input.key == 56){
			input.digit = 8;
		}else if(input.key == 57){
			input.digit = 9;
		}
		director[doc.scene][doc.act]();
	}
}


function addMobileListeners() {
	
	if(doc.acceleration == "on"){
		window.ondevicemotion = function(e) {
			if(doc.orientation == "portrait"){
				input.sensorX = Math.round(e.accelerationIncludingGravity.x/doc.scale*400)/100;
				input.sensorY = Math.round(e.accelerationIncludingGravity.y/doc.scale*400)/100;
			}else{
				input.sensorX = -Math.round(e.accelerationIncludingGravity.y/doc.scale*400)/100;
				input.sensorY = Math.round(e.accelerationIncludingGravity.x/doc.scale*400)/100;
			}
		}
	}
		
	window.addEventListener('touchstart', function(e) {
		input.state = "click";
		input.x = Math.round((e.touches[0].pageX-doc.xCenter)/doc.scale*100)/100;
		input.y = Math.round((e.touches[0].pageY-doc.yCenter)/doc.scale*100)/100;
		input.digit = e.touches.length;
		checkHit(e.touches[0].pageX, e.touches[0].pageY);
		director[doc.scene]();
		input.state = "";

		e.returnValue = false; //disables magnifying glass to pop up on safari on touch hold
	});
	
	window.addEventListener('touchmove', function(e) {
		input.state = "drag";
		input.x = Math.round((e.touches[0].pageX-doc.xCenter)/doc.scale*100)/100;
		input.y = Math.round((e.touches[0].pageY-doc.yCenter)/doc.scale*100)/100;
		director[doc.scene][doc.act]();
	});
	
	window.addEventListener('touchend', function(e) {
		input.state = "end";
		input.digit = 0;
		director[doc.scene]();
		input.state = "";
	});
}
