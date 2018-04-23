

// - - - loop - - - //

function loop() {
	
	//get delta
	var now = Date.now();
	t = now - _t;
	_t = now;
	
	movePoints();
	
	//display framerate
	if(doc.debug == true){
		document.getElementById("spf").style.width = t*4 + "px";
	}
	
	//loop
	requestAnimationFrame(loop);
}

_t = Date.now();
loop();


			
// - - - move - - - //

function movePoints() {
	
	var count = 0;
	
	for(var obj in animationQueue){
	
		for(var att in animationQueue[obj]){
			
			var aim = animationQueue[obj][att];
			var now = stage[obj][att + "Now"];

			//console.log(obj + "/" + att + ": " + aim + " vs " + now);

			if(now == aim && !("sensor" in stage[obj])){//delete objects if = target value
				delete animationQueue[obj][att];
				if(isObjectEmpty(animationQueue[obj])){
					delete animationQueue[obj];
				}
			}else{
				if(input.device == "mobile" && "sensor" in stage[obj]){
					//console.log(obj);			
					if(att == "x"){
						aim += input.sensorX;
					}else if(att == "y"){
						aim += input.sensorY;						
					}
				}
				
				easa[stage[obj].ease](obj, att, now, aim);
				count++;
			}
		}
		
		if(isObjectEmpty(animationQueue[obj])){//delete object if all keys are deleted
			delete animationQueue[obj];
		}else{
			
			//console.log(objectosHTML[obj]);
			renders[stage[obj].render](obj);			
		}
	}
	if(doc.debug == true){
		document.getElementById('senso').innerHTML = count;	
	}
}
