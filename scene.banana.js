
director.banana = {};

var bananaSimplex = new SimplexNoise();
var noiser = 0;

var skelet = [[-30, -20], [-20, -30], [-10, -20], [-20, -10], [10, -20], [20, -10], [30, -20], [40, -15]];
var mantscho = [[-40, -20], [-30, 30], [10, 20], [-40,-10], [30, 20], [40, 15], [20, -10], [20, 10]];

director.banana.start = function(){
		
	doc.lock = "vertical";		
	document.body.style.backgroundColor = "#00219c";
	
	addCast({id:"banana", type:"svg", shape:"container", parent:"mother", sensor:"xy"});
	
	var banano = [[-20, 0], [-5, -50], [15, -50], [5, 0], [15, 50], [-5, 50]];
	
	addCast({id:"static", type:"svg", shape:"shape", d:svg.cubic(banano, doc.scale, 0, 0), color:"#fff", parent:"banana"}); 
	addCast({id:"bano", type:"svg", mouseX:0, mouseY:0, addEase:"bounceSlow", render:"banana", shape:"shape", d:svg.cubic(banano, doc.scale, 0, 0), color:"#ff0", parent:"banana"}); 

	var pealo = [[-10, 10, 0], [10, 0], [20, 40], [0, 10]];
	addCast({id:"pilo", type:"svg", shape:"shape", d:svg.cubicMix(pealo, doc.scale, 0, 0), color:"#0ff", parent:"banana"}); 
	
	addCast({id:"circo", x:-30, y:20, width:10, height:10, color:"#fff", type:"css", shape:"circle", addEase:"bounceSlow", render:"xy", parent:"mother"});
	addCast({id:"boxo", x:0, y:0, r:0, width:40, height:2.5, color:"#fff", type:"css", shape:"rect", parent:"mother"});

	
	addCast({id:"lino", x:0, y:0, r:0, d:svg.line(skelet, doc.scale, 0, 0), stroke:2, color:"#f0f", type:"svg", shape:"line", parent:"banana"});
	addCast({id:"fino", x:0, y:0, r:0, d:svg.cubicLine(mantscho, doc.scale, 0, 0), stroke:10, color:"#0f0", type:"svg", shape:"line", parent:"banana"});

	addCast({id:"linetest", x:0, y:0, r:0, d:svg.cubicLine([[-20, 20], [-10, 30], [0, 20]], doc.scale, 0, 0), stroke:10, color:"#fff", type:"svg", shape:"line", parent:"banana"});
	
	//var 2dnoise = simplex.noise2D(x, y);
	var r = bananaSimplex.noise2D(100, 100);

	doc.act = "running"
	
}

director.banana.running = function(){
	
	var angle1 = 0.0, segLength = 150;
	
	if(input.state == "drag"){
		moveThing("bano", {mouseX:input.x, mouseY:input.y});
	}

	if(input.buttonHit == "1"){
		changeScene("pingpong");
	};
	if(input.buttonHit == "2"){
		changeScene("eyes");
	};
	if(input.buttonHit == "3"){
		changeScene("digits");
	};
	if(input.buttonHit == "4"){
		changeScene("botsummit");
	};
	
}

renders.banana = function(obj){
	
	//if(doc.sound == "running"){
	//	sound.oscillator.frequency.value = Math.round(stage[obj].p13xMomentum+stage[obj].p1yMomentum)*5;
	//}
	
	var mouse = [];
	mouse[0] = stage["bano"]["mouseXNow"];
	mouse[1] = stage["bano"]["mouseYNow"];
	
	//var data = basics.link([[stage["boxo"].x], [stage["boxo"].y]], mouse, 20);
	//objectosHTML["boxo"].style.transform = "translateX(" + data[0]*doc.scale + "px) translateY(" + data[1]*doc.scale + "px) rotate(" + data[2]*180/Math.PI + "deg";

	//noise
	objectosHTML["circo"].style.transform = "translateX(" + (bananaSimplex.noise2D(noiser/100, 0)*10*doc.scale) + "px) translateY(" + (bananaSimplex.noise2D(0, noiser/100)*10*doc.scale) + "px)";
	noiser++;
	
	var overlap = 15;
	var height = 100;
	
	var lamping = mouse[1]+height/2;

	var hingeDistance = 10;
	var leftHinge = [mouse[0] - hingeDistance, mouse[1]-mouse[1]*height/2/100, 0];
	var rightHinge = [mouse[0] + hingeDistance, mouse[1]-mouse[1]*height/2/100, 0];
	var splitPoint = mouse[1]-lamping/2.25;
	var tip = [mouse[0], mouse[1]-mouse[1]*height/2/200, 0];
	
	var peal = [
		[-20, 0], 
		[-5, -50], 
		[5, -50, 0], 
		[5, splitPoint, 0], 
		[5+hingeDistance, splitPoint, 0],
		[15, 50], 
		[-5, 50]
	];
	
	var tip = [
		[5, splitPoint, 0],
		[mouse[0]-hingeDistance/2, mouse[1]],  //tip
		[mouse[0]+hingeDistance/2, mouse[1]],
		[5+hingeDistance, splitPoint, 0]
	];
	

	objectosHTML[obj].setAttributeNS(null, "d", svg.cubicMix(peal, doc.scale, 0, 0));
	objectosHTML["pilo"].setAttributeNS(null, "d", svg.cubicMix(tip, doc.scale, 0, 0));
	
	skelet = rig.zip(skelet, [input.x, input.y], 10, [-20, -30]);
	//console.log("A " + mouse);
	objectosHTML["lino"].setAttributeNS(null, "d", svg.cubicLine(skelet, doc.scale, 0, 0));
	
	
	//mantscho = rig.snake(mantscho, [input.x, input.y], 15, [-40, -50]);
	//console.log("B " + mouse);
	//objectosHTML["fino"].setAttributeNS(null, "d", svg.line(mantscho, doc.scale, 0, 0));
	
	
}

