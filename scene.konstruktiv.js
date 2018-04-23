// - - - KONSTRUKTIV - - - //
	
director.konstruktiv = {};

director.konstruktiv.start = function(){
	
	doc.lock = "vertical";		
	document.body.style.backgroundColor = "#1a1a1a";
	
	//create grid array storing if grid point is occupied (1) or not (0)
	grid.occupied = [];
	
	if(doc.lock == "no"){
	var grd = document.createElement("div");
	grd.id = "grd";
	//grd.style.transform = "translate(" + doc.xCenter + "px, " + doc.yCenter + "px)";
	grd.style.userSelect = "none";
	grd.style.position = "fixed";
	document.body.appendChild(grd);
	}

	for(var z = 0; z < grid.xy.length; z++){
		addCast({id:"circo_" + z, x:0, y:0, width:10, height:10, color:"#fff", type:"css", shape:"circle", addEase:"bounceSlow", render:"xys", parent:"mother"});
		grid.occupied.push(0);
	}
		
	doc.act = "running"
	director[doc.scene][doc.act]();
	
}

function freeChair(currentPos, allPos, availability){
	
	var getAllDistances = [];
		
	for(var k = 0; k < allPos.length; k++){
		if(availability[k] == 0){
			getAllDistances.push(basics.getDistance(currentPos, allPos[k]) + "_" + k);
		}
	}
	getAllDistances.sort();
	
	//take first entry as winner
	var winner = basics.arrayator(getAllDistances[0], "_");
	winner.shift();//removes distance (not needed anymore)
		
	//set spot as occupied
	availability[winner] = 1;
	
	return winner;
	//console.log("winner: " + winner);
		
}

director.konstruktiv.running = function(){
		
	//remove redundant cast
	var castCount = document.getElementById("mother").childElementCount;
	if(grid.xy.length < castCount){
		
		var toRemove = castCount - grid.xy.length;
		console.log("remove " + toRemove + " members");
		
		for(var r = 1; r < toRemove+1; r++){
			var number = castCount-r;
			removeCast("circo_" + number);
			
			//var closestSide = basics.closestSide([stage["circo_" + number].xNow, stage["circo_" + number].yNow]);
			
			//if(closestSide == "left"){
			//	moveThing("circo_" + number, {x: Math.round(-doc.xCenter/doc.scale)-60});
			//}else if(closestSide == "top"){
			//	moveThing("circo_" + number, {y: Math.round(-doc.yCenter/doc.scale)-60});			
			//}else if(closestSide == "right"){
			//	moveThing("circo_" + number, {x: Math.round(doc.xCenter/doc.scale)+60});			
			//}else{
			//	moveThing("circo_" + number, {y: Math.round(doc.yCenter/doc.scale)+60});						
			//}
			
		}
	}
	
	
	for(var i = 0; i < grid.xy.length; i++){
		
		if(stage["circo_" + i] !== undefined){
						
			var currentPosition = [stage["circo_" + i].x, stage["circo_" + i].y];
			var closeAndFree = freeChair(currentPosition, grid.xy, grid.occupied);
			moveThing("circo_" + i, {x: grid.xy[closeAndFree][0], y:grid.xy[closeAndFree][1], width:10, height:10});
			
		}else{
			
			//add missing cast
			console.log("add: circo_" + i);
			var closeAndFree = freeChair([0, 0], grid.xy, grid.occupied);
			
			var closestSide = basics.closestSide([grid.xy[closeAndFree][0], grid.xy[closeAndFree][1]]);
			if(closestSide == "left"){
				addCast({id:"circo_" + i, x:0, y:0, width:10, height:10, color:"#fff", type:"css", shape:"circle", addEase:"bounceSlow", render:"xys", parent:"mother"});	
				beamThing("circo_" + i, {x:Math.round(-doc.xCenter/doc.scale), y:grid.xy[closeAndFree][1]}); 
			}else if(closestSide == "top"){
				addCast({id:"circo_" + i, x:0, y:0, width:10, height:10, color:"#fff", type:"css", shape:"circle", addEase:"bounceSlow", render:"xys", parent:"mother"});	
				beamThing("circo_" + i, {x:grid.xy[closeAndFree][0], y:Math.round(-doc.yCenter/doc.scale)}); 
			}else if(closestSide == "right"){
				addCast({id:"circo_" + i, x:0, y:0, width:10, height:10, color:"#fff", type:"css", shape:"circle", addEase:"bounceSlow", render:"xys", parent:"mother"});	
				beamThing("circo_" + i, {x:Math.round(doc.xCenter/doc.scale), y:grid.xy[closeAndFree][1]}); 
			}else{
				addCast({id:"circo_" + i, x:0, y:0, width:10, height:10, color:"#fff", type:"css", shape:"circle", addEase:"bounceSlow", render:"xys", parent:"mother"});	
				beamThing("circo_" + i, {x:grid.xy[closeAndFree][0], y:Math.round(doc.yCenter/doc.scale)}); 
			}
			
			//addCast({id:"circo_" + i, x:0, y:0, width:10, height:10, color:"#fff", type:"css", shape:"circle", addEase:"bounceSlow", render:"xys", parent:"mother"});
			moveThing("circo_" + i, {x: grid.xy[closeAndFree][0], y:grid.xy[closeAndFree][1], width:10, height:10});
			
		}
	}
	//basics.delayedLoop(sesselTanz, 20, 0, grid.xy.length);
	
	//doc.resizeOff = {x:doc.xCenter, y:doc.yCenter}
	
}