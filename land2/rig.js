


var rig = {};

rig.snake = function(inputArray, lead, distance){

	inputArray[0] = lead;
	
	for(i = 1; i < inputArray.length; i++){
		inputArray[i] = basics.link(skelet[i], skelet[i-1], distance);
	}

	return inputArray;

}

rig.arm = function(inputArray, lead, distance, fix){

	inputArray[0] = lead;
	
	for(i = 1; i < inputArray.length; i++){
		inputArray[i] = basics.link(skelet[i], skelet[i-1], distance);
	}

	//offset to fixed point	
	var offX = fix[0] - inputArray[inputArray.length-1][0];
	var offY = fix[1] - inputArray[inputArray.length-1][1];
	
	for(i = 0; i < inputArray.length; i++){
		inputArray[i][0] += offX;
		inputArray[i][1] += offY;
	}

	return inputArray;

}

rig.zip = function(inputArray, lead, distance, fix){

	inputArray[0] = lead;
	
	for(i = 1; i < inputArray.length; i++){
		inputArray[i] = basics.link(skelet[i], skelet[i-1], distance);
	}

	//offset to fixed point	
	var offX = fix[0] - inputArray[inputArray.length-1][0];
	var offY = fix[1] - inputArray[inputArray.length-1][1];
	
	for(i = 0; i < inputArray.length; i++){
		if(inputArray[inputArray.length-1][0] < 0 && inputArray[inputArray.length-1][0] > 40){
			console.log(inputArray[inputArray.length-1][0]);
			inputArray[i][0] += offX;
		}
		inputArray[i][1] += offY;
	}

	return inputArray;

}

rig.elastic = function(inputArray, lead, distance, fix){

	inputArray[0] = lead;
	
	for(i = 1; i < inputArray.length; i++){
		inputArray[i] = basics.link(skelet[i], skelet[i-1], distance);
	}
	
	if(fix !== undefined){
		
		var offX = fix[0] - inputArray[inputArray.length-1][0];
		var offY = fix[1] - inputArray[inputArray.length-1][1];
		
		for(i = 1; i < inputArray.length; i++){
			inputArray[i][0] += offX;
			inputArray[i][1] += offY;
		}

	}

	return inputArray;

}