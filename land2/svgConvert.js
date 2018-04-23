var svg = {};

//construct svg path string
//createD(["M", -20, 0, "C", -20, 0, -10, 0, 0, 0, "S", 0, 0, 10, 0, "S", 20, 0, 10, 0, "S", 0, 0, -20, 0, "Z"], doc.scale, 30, 0)
svg.edge = function(inputArray, scale, xOffset, yOffset){
	
	var constructString = "M ";
	
	//starting point
	constructString += (inputArray[0][0]+xOffset)*scale + " ";
	constructString += (inputArray[0][1]+yOffset)*scale + " ";
	
	//all other points
	for (i = 1; i < inputArray.length; i++) {
		constructString += (inputArray[i][0]+xOffset)*scale + " ";
		constructString += (inputArray[i][1]+yOffset)*scale + " ";
	}
	
	//end point
	constructString += (inputArray[0][0]+xOffset)*scale + " ";
	constructString += (inputArray[0][1]+yOffset)*scale + " ";

	constructString += "z";
	
	return constructString;	
}


svg.cubic = function(inputArray, scale, xOffset, yOffset){
	
	//adding copy of first point to end
	inputArray.push(inputArray[0]);
	inputArray.push(inputArray[1]);//is needed for ankers to last point = first point
	
	var constructString = "M ";
		
	for (i = 1; i < inputArray.length-1; i++) {
			
		constructString += Math.round((inputArray[i-1][0]+inputArray[i][0])/2*scale+xOffset) + " ";
		constructString += Math.round((inputArray[i-1][1]+inputArray[i][1])/2*scale+yOffset) + " Q ";
		
		constructString += Math.round(inputArray[i][0]*scale+xOffset) + " ";
		constructString += Math.round(inputArray[i][1]*scale+yOffset) + " ";
			
	}
	
	constructString += Math.round((inputArray[inputArray.length-2][0]+inputArray[inputArray.length-1][0])/2*scale+xOffset) + " ";
	constructString += Math.round((inputArray[inputArray.length-2][1]+inputArray[inputArray.length-1][1])/2*scale+yOffset) + " z";
		
	return constructString;	
	
}

svg.line = function(inputArray, scale, xOffset, yOffset){
	
	var constructString = "M ";
	
	for (i = 0; i < inputArray.length; i++) {		
		constructString += Math.round(inputArray[i][0]*scale+xOffset) + " ";
		constructString += Math.round(inputArray[i][1]*scale+yOffset) + " ";
	}
		
	return constructString;	
	
}

svg.cubicLine = function(inputArray, scale, xOffset, yOffset){
	
	var processArray = inputArray.slice();//clone, otherwise it's a draw mode

	//double first and last entry
	processArray.unshift(inputArray[0]);
	processArray.push(inputArray[inputArray.length-1]);
	
	var constructString = "M ";
	
	for (i = 1; i < processArray.length-1; i++) {
			
		constructString += Math.round((processArray[i-1][0]+processArray[i][0])/2*scale+xOffset) + " ";
		constructString += Math.round((processArray[i-1][1]+processArray[i][1])/2*scale+yOffset) + " Q ";
		
		constructString += Math.round(processArray[i][0]*scale+xOffset) + " ";
		constructString += Math.round(processArray[i][1]*scale+yOffset) + " ";
		
	}
	
	constructString += Math.round(processArray[processArray.length-1][0]*scale+xOffset) + " ";
	constructString += Math.round(processArray[processArray.length-1][1]*scale+yOffset);
	
	return constructString;	
	
}


svg.cubicMix = function(inputArray, scale, xOffset, yOffset){
	
	//adding copy of first point to end
	inputArray.push(inputArray[0]);
	inputArray.push(inputArray[1]);//is needed for ankers to last point = first point
	
	var constructString = "M ";
		
	for (i = 1; i < inputArray.length-1; i++) {
	
		if(inputArray[i][2] == 0){
			
			constructString += Math.round(inputArray[i][0]*scale+xOffset) + " ";
			constructString += Math.round(inputArray[i][1]*scale+yOffset) + " Q ";
			
			constructString += Math.round(inputArray[i+1][0]*scale+xOffset) + " ";
			constructString += Math.round(inputArray[i+1][1]*scale+yOffset) + " ";
			
		}else{
			
			constructString += Math.round((inputArray[i-1][0]+inputArray[i][0])/2*scale+xOffset) + " ";
			constructString += Math.round((inputArray[i-1][1]+inputArray[i][1])/2*scale+yOffset) + " Q ";
		
			constructString += Math.round(inputArray[i][0]*scale+xOffset) + " ";
			constructString += Math.round(inputArray[i][1]*scale+yOffset) + " ";
		
		}
			
	}
	
	constructString += Math.round((inputArray[inputArray.length-2][0]+inputArray[inputArray.length-1][0])/2*scale+xOffset) + " ";
	constructString += Math.round((inputArray[inputArray.length-2][1]+inputArray[inputArray.length-1][1])/2*scale+yOffset) + " z";
		
	return constructString;	
}
