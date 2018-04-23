
//type effects

var typer = {};
typer.tracker = "";

//matrix effect
typer.matrixo = function(inputString, target){

	var solution = inputString;
	var display = solution;

	//var letters = "QWERTZUIOPASDFGHJKLYXCVBNMqwertzuiopasdfghjklyxcvbnm1234567890O/*.:_8=@-[]";	
	var letters = "/*.:_012%+=@-[]";

	letters = letters.concat(solution);

	function setCharAt(str,index,chr) {
		if(index > str.length-1) return str;
		return str.substr(0,index) + chr + str.substr(index+1);
	}

	var matrixFocus1 = 0;
	var matrixFocus2 = 0;
	var matrixFocus3 = 0;

	function matrixEffect() {
		
		var pickLetter1 = letters[Math.floor(Math.random() * letters.length)];
		//var pickLetter2 = letters[Math.floor(Math.random() * letters.length)];
		//var pickLetter3 = letters[Math.floor(Math.random() * letters.length)];
		
		display = setCharAt(display, matrixFocus1, pickLetter1);
		//display = setCharAt(display, matrixFocus2, pickLetter2);
		//display = setCharAt(display, matrixFocus3, pickLetter3);
		
		if(display[matrixFocus1] == solution[matrixFocus1]){
			matrixFocus1 = Math.floor(Math.random() * solution.length);
		}

		//if(display[matrixFocus2] == solution[matrixFocus2]){
		//	matrixFocus2 = Math.floor(Math.random() * solution.length);
		//}

		//if(display[matrixFocus3] == solution[matrixFocus3]){
		//	matrixFocus3 = Math.floor(Math.random() * solution.length);
		//}

		target.innerHTML = display;

		setTimeout(matrixEffect, 30);
		
	}
	
	function matrixoEffect() {
		
		var pickLetter1 = letters[Math.floor(Math.random() * letters.length)];
		var pickLetter2 = letters[Math.floor(Math.random() * letters.length)];
		var pickLetter3 = letters[Math.floor(Math.random() * letters.length)];
		
		display = setCharAt(display, matrixFocus1, pickLetter1);
		display = setCharAt(display, matrixFocus2, pickLetter2);
		display = setCharAt(display, matrixFocus3, pickLetter3);
		
		if(display[matrixFocus1] == solution[matrixFocus1]){
			matrixFocus1 = Math.floor(Math.random() * solution.length);
		}

		if(display[matrixFocus2] == solution[matrixFocus2]){
			matrixFocus2 = Math.floor(Math.random() * solution.length);
		}

		if(display[matrixFocus3] == solution[matrixFocus3]){
			matrixFocus3 = Math.floor(Math.random() * solution.length);
		}

		target.innerHTML = display;

		setTimeout(matrixEffect, 30);
		
	}
	
	if(typer.tracker !== inputString){
		console.log("running: " + solution);
		typer.tracker == inputString;
		matrixEffect();
	}else{
		console.log("already running" + typer.tracker);
		
	}
}

//matrix effect
typer.matrixooo = function(inputString, target){

	var solution = inputString;
	var display = solution;

	//var letters = "QWERTZUIOPASDFGHJKLYXCVBNMqwertzuiopasdfghjklyxcvbnm1234567890O/*.:_8=@-[]";	
	var letters = "/*.:_012%+=@-[]";

	letters = letters.concat(solution);

	function setCharAt(str,index,chr) {
		if(index > str.length-1) return str;
		return str.substr(0,index) + chr + str.substr(index+1);
	}

	var matrixFocus1 = 0;
	var matrixFocus2 = 0;
	var matrixFocus3 = 0;

	function matrixEffect() {
		
		var pickLetter1 = letters[Math.floor(Math.random() * letters.length)];
		//var pickLetter2 = letters[Math.floor(Math.random() * letters.length)];
		//var pickLetter3 = letters[Math.floor(Math.random() * letters.length)];
		
		display = setCharAt(display, matrixFocus1, pickLetter1);
		//display = setCharAt(display, matrixFocus2, pickLetter2);
		//display = setCharAt(display, matrixFocus3, pickLetter3);
		
		if(display[matrixFocus1] == solution[matrixFocus1]){
			matrixFocus1 = Math.floor(Math.random() * solution.length);
		}

		target.innerHTML = display;
		
		setTimeout(matrixEffect, 30);
		
	}
	
	function matrixoEffect() {
		
		var pickLetter1 = letters[Math.floor(Math.random() * letters.length)];
		var pickLetter2 = letters[Math.floor(Math.random() * letters.length)];
		var pickLetter3 = letters[Math.floor(Math.random() * letters.length)];
		
		display = setCharAt(display, matrixFocus1, pickLetter1);
		display = setCharAt(display, matrixFocus2, pickLetter2);
		display = setCharAt(display, matrixFocus3, pickLetter3);
		
		if(display[matrixFocus1] == solution[matrixFocus1]){
			matrixFocus1 = Math.floor(Math.random() * solution.length);
		}

		if(display[matrixFocus2] == solution[matrixFocus2]){
			matrixFocus2 = Math.floor(Math.random() * solution.length);
		}

		if(display[matrixFocus3] == solution[matrixFocus3]){
			matrixFocus3 = Math.floor(Math.random() * solution.length);
		}

		target.innerHTML = display;

		setTimeout(matrixoEffect, 20);
		
	}
	
	if(typer.tracker !== inputString){
		console.log("running: " + solution);
		typer.tracker == inputString;
		matrixoEffect();
	}else{
		console.log("already running" + typer.tracker);
		
	}
	
}
