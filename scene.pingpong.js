// - - - PING PONG - - - //
	
director.pingpong = {};
	
director.pingpong.start = function(){
	
	doc.lock = "vertical";		
	document.body.style.backgroundColor = "#17169c";
	
	//addCast({addForm:"screen", id:"background", color:"#17169c", parent:"testGroup", x:0, y:0, r:0});
	addCast({addForm:"circleShadow", id:"shadow1", parent:"mother", x:-30, y:41, r:0});
	addCast({addForm:"circleShadow", id:"shadow2", parent:"mother", x:0, y:41, r:0});
	addCast({addForm:"circleShadow", id:"shadow3", parent:"mother", x:30, y:41, r:0});
	addCast({addForm:"circle", id:"ball1", parent:"mother", color:"#f8f9ff", drop:0, ping:"down", render:"pingpong", addEase:"bounceSlow", x:-30, y:0, r:0});
	addCast({addForm:"circle", id:"ball2", parent:"mother", color:"#f8f9ff", drop:0, ping:"down", render:"pingpong", addEase:"bounceSlow", x:0, y:0, r:0});
	addCast({addForm:"circle", id:"ball3", parent:"mother", color:"#fff665", drop:0, ping:"down", render:"pingpong", addEase:"bounceSlow", x:30, y:0, r:0});
	
	makeInvisibleButton("b1", -40, -60, 20, 120);
	makeInvisibleButton("b2", -10, -60, 20, 120);
	makeInvisibleButton("b3", 20, -60, 20, 120);
	
	doc.act = "running"
}

director.pingpong.running = function(){
	
	if(input.state == "drag" || input.state == "click"){
		if(input.buttonHit == "b1"){
			moveThing("ball1", {y:input.y}, "bounceSlow");
		}else if(input.buttonHit == "b2"){
			moveThing("ball2", {y:input.y}, "bounceSlow");
		}else if(input.buttonHit == "b3"){
			moveThing("ball3", {y:input.y}, "bounceSlow");
		}
	}

	if(input.state == "end"){
		if(input.buttonHit == "b1"){
			stage.ball1.drop = Math.round(input.y/10)*10;
			stage.ball1.ping = "dropped";
			moveThing("ball1", {y:30}, "pingPong");
		}else if(input.buttonHit == "b2"){
			stage.ball2.drop = Math.round(input.y/10)*10;
			stage.ball2.ping = "dropped";
			moveThing("ball2", {y:30}, "pingPong");
		}else if(input.buttonHit == "b3"){
			stage.ball3.drop = Math.round(input.y/10)*10;;
			stage.ball3.ping = "dropped";
			moveThing("ball3", {y:30}, "pingPong");
		}
	}
	
	if(input.buttonHit == "2"){
		changeScene("eyes");
	};
	if(input.buttonHit == "3"){
		changeScene("digits");
	};
	if(input.buttonHit == "4"){
		changeScene("banana");
	};
	
	//makeButton("b1", "Hey");
	//document.getElementById("b1").onclick = function(){
	//	moveThing("tester3", {x:30, y:30});
	//};

}