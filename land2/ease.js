// - - - easing - - - //


var easing = {};

easing.bounceFast = { ease:"bounce", mass:0.1, springStiffness:-30, springDamping:-0.97 };
easing.bounceSlow = { ease:"bounce", mass:0.3, springStiffness:-30, springDamping:-0.97 };
easing.easeOutFast = { ease:"easeOut", speed:100 };
easing.easeOutMedi = { ease:"easeOut", speed:200 };
easing.easeOutSlow = { ease:"easeOut", speed:300 };
easing.pingPong = { ease:"pingpong", speed:100 };

var easa = {}

easa.bounce = function(obj, att, now, aim){
	var spring = stage[obj]["springStiffness"] * (now - aim);
	var damper = stage[obj]["springDamping"] * stage[obj][att + "Momentum"];
	var acceleration = (spring + damper) / stage[obj].mass;
	stage[obj][att + "Momentum"] += acceleration * (t/1000);
	stage[obj][att + "Now"] = Math.round((now + stage[obj][att + "Momentum"] * (t/1000))*100)/100;	
}

easa.easeOut = function(obj, att, now, aim){
	stage[obj][att + "Now"] = Math.round((now+(aim-now)/stage[obj].speed*t)*100)/100;
//	stage[obj][att + "Now"] = Math.round(easeIn(t, now, aim-now, stage[obj]["speed"])*100)/100;
}

easa.pingpong = function(obj, att, now, aim){

	//aim = floor
	var target = aim - stage[obj].drop + aim; //doubling distance to aim to account floor in middle
	
	if(stage[obj][att + "Now"] > aim-1 && stage[obj].ping !== "up"){
		pongs["p" + basics.random(5)].play();
		stage[obj].ping = "up";
	}
	if(stage[obj][att + "Now"] < stage[obj].drop+1 && stage[obj].ping == "up"){
		stage[obj].ping = "down";
	}
	
	if(stage[obj].ping == "down"){
		//stage[obj][att + "Now"] += Math.round((aim - now)/10*100)/100;
		stage[obj][att + "Now"] = Math.round((now-(stage[obj].drop-now)/stage[obj].speed*t)*100)/100;
	}else if(stage[obj].ping == "up"){
		stage[obj][att + "Now"] = Math.round((now+(stage[obj].drop-now)/stage[obj].speed*t)*100)/100;
	}else if(stage[obj].ping == "dropped"){
		stage[obj][att + "Now"] = Math.round((now-(stage[obj].drop-now-40)/stage[obj].speed*t)*100)/100;
	}
}

function easeIn(t, b, c, d) { 
    return -c *(t/=d)*(t-2) + b;  
};

var easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

var pow = Math.pow;

function easeInO(n) {
  return pow(n, 1.7);
}

function easeOutO(n) {
  return pow(n, .48);
}

function process(min, max, intervals, fN) {
	var diff = 1 / intervals,
	difference = max - min,
	curve = [];
	for (i = diff; i <= 1; i += diff) {
		curve.push(Math.round(min + (difference * fN(i))*100)/100);
	}
	return curve;
}

//console.log(process(0, 400, 5, easeInO));