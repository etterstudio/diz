// - - - EYES - - - //

var eyesState = {};
var eyeDistance = 31; //between eyes

director.eyes = {};
	
director.eyes.start = function(){
		
		eyesState.open = {
		p1x:-20-eyeDistance,// 
		p1y:-1, 
		p2x:-20-eyeDistance, 
		p2y:-2, 
		p3x:-13-eyeDistance,
		p3y:-13,
		p4x:1-eyeDistance,//
		p4y:-13,
		p5x:20-eyeDistance,
		p5y:-4,
		p6x:20-eyeDistance,//
		p6y:-1,
		p7x:15-eyeDistance,
		p7y:11,
		p8x:0-eyeDistance,//
		p8y:11,
		p9x:-20-eyeDistance,
		p9y:0
	};

	eyesState.suspicious = {
		p1x:-22-eyeDistance,// 
		p1y:0, 
		p2x:-22-eyeDistance, 
		p2y:-2, 
		p3x:-12-eyeDistance,
		p3y:-6,
		p4x:0-eyeDistance,//
		p4y:-6,
		p5x:20-eyeDistance,
		p5y:-3,
		p6x:20-eyeDistance,//
		p6y:0,
		p7x:15-eyeDistance,
		p7y:5,
		p8x:0-eyeDistance,//
		p8y:5,
		p9x:-22-eyeDistance,
		p9y:2
	};

	eyesState.closed = {
		p1x:-22-eyeDistance,// 
		p1y:0, 
		p2x:-22-eyeDistance, 
		p2y:0, 
		p3x:-10-eyeDistance,
		p3y:0,
		p4x:1-eyeDistance,//
		p4y:0,
		p5x:20-eyeDistance,
		p5y:0,
		p6x:20-eyeDistance,//
		p6y:0,
		p7x:15-eyeDistance,
		p7y:0,
		p8x:0-eyeDistance,//
		p8y:0,
		p9x:-22-eyeDistance,
		p9y:0
	};

	document.body.style.backgroundColor = "#000";
	doc.lock = "horizontal";

	addCast({id:"face", parent:"mother", shape:"container", render:"xy", type:"svg", x:0, y:0, r:0});
	
	var eyeLKeys = {addForm:"eye", id:"whiteL", render:"eye", parent:"face", d:""};
	Object.assign(eyeLKeys, eyesState.closed);
	
	var eyeRKeys = {addForm:"eye", id:"whiteR", render:"eye", parent:"face", d:""};
	Object.assign(eyeRKeys, eyesState.closed);
	
	addCast(eyeLKeys);
	addCast(eyeRKeys);
				
	addCast({id:"eyesGroup", shape:"group", parent:"mother", render:"xy", type:"css", x:0, y:10, r:0});
	addCast({addForm:"pupile", id:"blackL", parent:"eyesGroup", x:-30, y:0});
	addCast({addForm:"pupile", id:"blackR", parent:"eyesGroup", x:30, y:0});
	
	moveThing("whiteL", eyesState.open, "easeOutMedi");
	moveThing("eyesGroup", {x:0, y:0}, "easeOutSlow");
	
	
	timer("hah", function(){
		moveThing("whiteL", eyesState.closed, "easeOutFast")
	}, 2000);
	
	timer("ah", function(){
		moveThing("whiteL", eyesState.open, "easeOutMedi");
		doc.act = "running";
	}, 2200);


}

director.eyes.running = function(){
	
	moveThing("eyesGroup", {x:input.x/4, y:input.y/8}, "easeOutSlow");
	moveThing("face", {x:input.x/16, y:input.y/32}, "easeOutSlow");
	
	if(input.state == "click"){
		
		moveThing("whiteL", eyesState.closed, "easeOutFast");
		moveThing("eyesGroup", {y:0}, "easeOutSlow");
	
	}
	
	if(input.state == "drag"){
		
		moveThing("whiteL", eyesState.suspicious, "bounceSlow");
		moveThing("eyesGroup", {x:-20, y:0}, "easeOutSlow");

	}
	
	if(input.state == "end"){
		
		moveThing("whiteL", eyesState.open, "easeOutFast");
		moveThing("eyesGroup", {x:0, y:0}, "easeOutSlow");
	
	}
	
	if(input.buttonHit == "3"){
		changeScene("digits");
	};

}