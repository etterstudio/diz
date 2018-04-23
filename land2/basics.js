// - - - basics - - - //

//[0] = x
//[1] = y
//[2] = r = rotate = angle 

var basics = {};

basics.getRadian = function(a, b){
	return angleRadian = Math.atan2(b[1] - a[1], b[0] - a[0]);
}

basics.getMiddleRadian = function(a, b, c){

	var p12 = Math.sqrt(Math.pow((a[0] - b[0]),2) + Math.pow((a[1] - b[1]),2));
	var p13 = Math.sqrt(Math.pow((a[0] - c[0]),2) + Math.pow((a[1] - c[1]),2));
	var p23 = Math.sqrt(Math.pow((b[0] - c[0]),2) + Math.pow((b[1] - c[1]),2));
	
	//angle in radians
	var resultRadian = Math.acos(((Math.pow(p12, 2)) + (Math.pow(p13, 2)) - (Math.pow(p23, 2))) / (2 * p12 * p13));

	//angle in degrees
	//var resultDegree = Math.acos(((Math.pow(p12, 2)) + (Math.pow(p13, 2)) - (Math.pow(p23, 2))) / (2 * p12 * p13)) * 180 / Math.PI;
	
	return resultRadian;

}

basics.random = function(max){
	return Math.floor((Math.random() * max) + 1);
}

basics.isOdd = function(number){
	if(number % 2 == 1){
		return true;
	}else{
		return false;
	}
}

basics.getDistance = function(a, b) {
	var aa = a[0] - b[0];
	var bb = a[1] - b[1];
	return Math.sqrt(aa*aa + bb*bb);
}

basics.circlePoint = function(point, circleWidth, circleHeight, radian){
	var output = [];
	output[0] = point[0] + circleWidth/2 * Math.cos(radian+6);
	output[1] = point[1] + circleHeight/2 * Math.sin(radian+6);
	return output;
}

basics.radianPoint = function(point, distance, radian){
	
	var output = [];
	
	output[0] = Math.round(Math.cos(radian) * distance + point[0]);
    output[1] = Math.round(Math.sin(radian) * distance + point[1]);

	return output;
}

basics.link = function(a, b, distance) {
	
	var dx = b[0] - a[0];
	var dy = b[1] - a[1];
	
	a[2] = Math.atan2(dy, dx);//angle
	
	a[0] = Math.round((b[0] - Math.cos(a[2]) * distance)*100)/100;
	a[1] = Math.round((b[1] - Math.sin(a[2]) * distance)*100)/100;
	
	return(a);
}

basics.linkReverse = function(a, b, distance) {

	b[0] = Math.round(a[0] + Math.cos(a[2]) * distance);
	b[1] = Math.round(a[1] + Math.sin(a[2]) * distance);

	return b;
}

basics.link2d = function(a, b, distance) {
	
	var dx = b[0] - a[0];
	var dy = b[1] - a[1];
	
	a[2] = Math.atan2(dy, dx);//angle
	
	a[0] = Math.round((b[0] - Math.cos(a[2]) * distance)*100)/100;
	a[1] = Math.round((b[1] - Math.sin(a[2]) * distance)*100)/100;
	
	return(a);
}

basics.delayedLoop = function(action, duration, i, iMax){
	setTimeout(function () {
		action(i);
		if (i < iMax-1) {
			i++;
			basics.delayedLoop(action, duration, i, iMax);
      	}
	}, duration)
}

basics.closestSide = function(inputArray){
	
	var position = inputArray.slice(0);//clone array
	
	for (z = 0; z < position.length; z++) {
		if(position[z] < 0){
			position[z] *= -1;
		}
	}
	var indexOfMaxValue = position.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);	
	
	var side;
	
	if(inputArray[indexOfMaxValue] <= 0){
		if(indexOfMaxValue == 0){
			side = "left";
		}else{
			side = "top";
		}
	}else{
		if(indexOfMaxValue == 0){
			side = "right";
		}else{
			side = "bottom";		
		}
	}
	
	return side;
}


basics.arrayator = function(inputArray, separator){
	
	//console.log("ARRAYATOR: " + inputArray + "/" + separator);
	var wordSpaces = [];
	
	//find out where spaces are
	for (z = 0; z < inputArray.length; z++) {
		if (inputArray[z] === separator) {
			wordSpaces.push(z);
		}
	}
	
	var labelArrayo = [];
	
	//first label
	labelArrayo.push(inputArray.slice(0, wordSpaces[0]));

	//all other labels
	for (k = 1; k < wordSpaces.length+1; k++) {
		labelArrayo.push(inputArray.slice(wordSpaces[k-1]+1, wordSpaces[k]));
	}
	
	return labelArrayo;
}