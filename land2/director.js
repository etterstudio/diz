
var cast = {};

cast.yellowRect = { shape:"rect", type:"css", width:20, height:20, color:"#ff0" };
cast.circle = { shape:"circle", type:"css", width:20, height:20 };
cast.circleShadow = { shape:"circle", type:"css", width:24, height:9, color:"#190e8c" };
cast.ellipse = { shape:"ellipse", type:"svg", width:40, height:20, color:"#f0f"};
cast.digito = { shape:"path", type:"svg", color:"#fff", stroke:3, p1x:0, p1y:0, p2x:0, p2y:0, p3x:0, p3y:0, p4x:0, p4y:0, p5x:0, p5y:0, p6x:0, p6y:0, p7x:0, p7y:0, p8x:0, p8y:0, p9x:0, p9y:0, p10x:0, p10y:0, p11x:0, p11y:0, p12x:0, p12y:0, p13x:0, p13y:0 };
cast.screen = { shape:"rect", type:"css", width:360, height:360 };
cast.eye = { shape:"shape", type:"svg", color:"#fff"};
cast.pupile = { shape:"circle", type:"css", color:"#000", width:22, height:24 };




var stage = {};

function addCast(inputObject){
	
	//check if cast member already on stage
	if(stage[inputObject.id] == undefined){
		
		//create new stage object
		stage[inputObject.id] = inputObject;
		
		//add form keys
		if(inputObject.addForm !== undefined){
			Object.assign(stage[inputObject.id], cast[inputObject.addForm]);//merge
			delete stage[inputObject.id].addForm;
		}

		//add easing keys
		if(inputObject.addEase !== undefined){
			Object.assign(stage[inputObject.id], easing[inputObject.addEase]);//merge
			delete stage[inputObject.id].addEase;
		}
		
		if(inputObject.x == undefined){
			stage[inputObject.id].x = 0;
		}
		if(inputObject.y == undefined){
			stage[inputObject.id].y = 0;
		}
		if(inputObject.r == undefined){
			stage[inputObject.id].r = 0;
		}
		
		createDivs(stage[inputObject.id]);
	}
	
}

function removeCast(member){
	if(member == "all"){
		for (var children in animationQueue) delete animationQueue[children];
		for (var children in stage) delete stage[children];
		for (var children in objectosHTML){
			if(document.getElementById(children) !== null){//needs to be done because sometimes when parents are deleted before children are not there anymore
				document.getElementById(children).remove();
			}
			delete objectosHTML[children];
		}
	}else{
		if(objectosHTML[member] !== undefined){
			delete stage[member];
			delete animationQueue[member];
			delete objectosHTML[member];
			document.getElementById(member).remove();
		}
	}
}

function moveThing(id, inputObject, ease){
	
	//check if object already in animation queue
	if(animationQueue[id] == undefined){
		animationQueue[id] = {};
	}

	//add easing info
	if(ease != undefined){
		Object.assign(stage[id], easing[ease]);
	}
		
	for(var b in inputObject){
		animationQueue[id][b] = inputObject[b];
		//console.log("animate " + id + ": " + b + "/" + animationQueue[id][b]);
	
		//check if "now" of that object already exists	
		if(stage[id][b + "Now"] == undefined){
			stage[id][b + "Now"] = stage[id][b];
			stage[id][b + "Momentum"] = 0;
		}
	}
	//console.log(stage[id])
}

function beamThing(id, position){
	
	//var object = document.getElementById(id);
	stage[id].x = position.x;
	stage[id].y = position.y;
		
}


function changeScene(newScene){
	
	removeCast("all");
	doc.act = "start";
	input.digit = "";
	input.state = "";
	doc.scene = newScene;
//	director[doc.scene][doc.act]();
	console.log("scene: " + doc.scene);
	
	if(doc.debug == true){
		document.getElementById('conso').innerHTML = "state: " + input.state + ", x: " + input.x + ", y: " + input.y + ", d: " + input.digit;
	}
	
}




