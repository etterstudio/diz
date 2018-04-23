// - - - hello - - - //

//setup time variables
var _t, t;

//setup doc object
var doc = {};
doc.width = window.innerWidth;
doc.height = window.innerHeight;
doc.xCenter = doc.width/2;
doc.yCenter = doc.height/2;
doc.resolution = 120;
doc.scale = 1;
doc.svg = "on";
doc.svgNameSpace = "http://www.w3.org/2000/svg";
doc.acceleration = "on";
doc.lock = "vertical";
doc.fontSize = 5;
doc.debug = false;
doc.sound = "on";
doc.scene = "banana";
doc.act = "start";
//doc.mode = "grid";

if(doc.mode == "grid"){
	//grid units
	var grid = {};
	grid.distance = 20;
	grid.xy = [];
}

//setup input object
var input = {};
input.sensorX = 0;
input.sensorY = 0;
input.digit = 0;
input.buttons = {};

var director = {};

if(doc.sound == "on"){
	var sound = {};
	soundSettings();
}
console.log("sound: " + doc.sound);

var objectosHTML = {};
var animatedPoints = [];
var animationQueue = {};

//adding the mother div of all mothers
var div = document.createElement("div");
div.id = "mother";
div.style.transform = "translate(" + doc.xCenter + "px, " + doc.yCenter + "px)";
div.style.userSelect = "none";
div.style.position = "fixed";
document.body.appendChild(div);



function resize() {
	
	console.log("RESIZE");
	
	doc.width = window.innerWidth;
	doc.height = window.innerHeight;
	
	if(doc.lock == "horizontal"){
		doc.scale = Math.round(doc.width/doc.resolution*100)/100; // *100)/100 rounds to 2 dec
	}else{
		doc.scale = Math.round(doc.height/doc.resolution*100)/100;	
	}
	doc.xCenter = doc.width/2;		
	doc.yCenter = doc.height/2;
	
	if(doc.width < doc.height){
		doc.orientation = "portrait";
	}else{
		doc.orientation = "landscape";
	}
	
	//center mother element
	document.getElementById("mother").style.transform = "translate(" + doc.xCenter + "px, " + doc.yCenter + "px)";
	
	//define grid
	if(doc.mode == "grid"){
		
		//grid update
		grid.xy = []; //clear array
		grid.gridX = Math.floor(doc.width/doc.scale/grid.distance);
		grid.gridY = Math.floor(doc.height/doc.scale/grid.distance);
	
		for(var z = 1; z < grid.gridY; z++){
			for(var t = 1; t < grid.gridX; t++){
				//x, y
				grid.xy.push([0 - grid.gridX*grid.distance/2 + t*grid.distance, 0 - grid.gridY*grid.distance/2 + z*grid.distance]);
			}
		}
	
		grid.occupied = []; //clear array
		for(var z = 0; z < grid.xy.length; z++){
			grid.occupied.push(0);
		}
	}
	
	director[doc.scene][doc.act]();
	
}
//window.addEventListener('resizeend', function () {
//	resize();
//});
window.addEventListener('resize', function () {
	resize();
});


console.log("orientation: " + doc.orientation);
console.log("lock: " + doc.lock);
console.log("scale: " + doc.scale);

// add listeners
if(mobileCheck() == false) {
	addDeskListeners();
	input.device = "desktop";
}else{
	addMobileListeners();
	input.device = "mobile";
}
console.log("device: " + input.device);

if(doc.debug == true){
	debugView();
}



// - - - functions - - - //

function ifUndefined(inputObject) {
	if(inputObject != undefined){
		return 0;
	}else{
		return inputObject;
	}
}

function mobileCheck() { 
	if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
		return true;
	}else{
		return false;
	}
}


// style.getPropertyValue("transform")
function getCssTransform(inputObject) {

	var string = inputObject.style.transform.toString();
	return string.replace(/[^0-9\-.,\s]/g, '').split(' ');
	
}

function isObjectEmpty(obj) {
	for(var prop in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			return false;
		}
	}
	return true;
}

function validateObject(key){
	if(animationQueue[key] == undefined){
		animationQueue[key] = {};
	}
}

function makeButton(id, text){

	var button = document.createElement("div");
	button.style.padding = "10px";
	button.style.background = "#333";
	button.style.userSelect = "none";
	button.style.position = "relative";
	button.style.cursor = "crosshair";
	button.id = id;
	debug.appendChild(button);
	document.getElementById(id).innerHTML = text;
	input.buttons[id] = button.getBoundingClientRect();
}

function makeInvisibleButton(id, x, y, width, height){

	var button = document.createElement("div");
	button.style.userSelect = "none";
	button.style.position = "fixed";
	//button.style.background = "#333";
	button.style.cursor = "crosshair";
	button.style.left = Math.round(x*doc.scale+doc.xCenter) + "px";
	button.style.top = Math.round(y*doc.scale+doc.yCenter) + "px";
	button.style.width = Math.round(width*doc.scale) + "px";
	button.style.height = Math.round(height*doc.scale) + "px";
	button.id = id;
	document.body.appendChild(button);
	input.buttons[id] = button.getBoundingClientRect();
}

function powerpoint(inputArray){
		
	for(var i = 0; i < inputArray.length; i++){
		inputArray[i].shape = "rect";
		inputArray[i].type = "css";
		inputArray[i].width = 240;
		inputArray[i].height = 120;
		inputArray[i].y = 120;
		inputArray[i].id = "slide" + i;
		inputArray[i].parent = "mother";
		inputArray[i].render = "y";
		
		addCast(inputArray[i]);
	}
	
}


var timerTracker = {};

function timer(id, action, duration){
	if(!(id in timerTracker)){
		timerTracker.id = "running";
		setTimeout(function(){
			action();
			delete timerTracker.id;
		}, duration);
	}
}


