// - - - pelang - - - //
	
director.pelang = {};

var slide = -1;

director.pelang.start = function(){
	
	doc.lock = "vertical";		
	document.body.style.backgroundColor = "#000";
	doc.fontSize = 64;
		
	var slides = [
	
		{image:"pelang/muda.png", addEase:"easeOutFast"},
		{video:"pelang/gv.mp4", addEase:"easeOutFast"},
		{typer:"CAROLINE HIRT / CHRISTIAN ETTER", typerColor:"#000", typerClass:"matrixooo", color:"#00f", addEase:"easeOutFast"},
		{image:"pelang/partner.png", addEase:"easeOutFast"},
		{typer:"ALGORITHMS / DATA / SOCIETY", typerClass:"matrixooo", addEase:"bounceFast"},
		{typer:"BOT SUMMIT 2018", typerClass:"matrixooo", image:"pelang/bot.png", addEase:"easeOutFast"},
		{typer:"FRAGMENTIN WORKSHOP", typerClass:"matrixooo", image:"pelang/fragmentin.jpg", addEase:"easeOutFast"},
		{typer:"MACHINE LEARNING", typerClass:"matrixooo", image:"pelang/supsi.jpg", addEase:"easeOutFast"},
		{typer:"MODULAR FEST", typerClass:"matrixooo", image:"pelang/modular.jpg", addEase:"easeOutFast"},
		{typer:"VINCENT MORISSET", typerClass:"matrixooo", image:"pelang/vinc.jpg", addEase:"easeOutFast"},
		{typer:"006", typerClass:"matrixooo", addEase:"bounceFast"},
		{typer:"PE LANG", typerClass:"matrixooo", image:"pelang/pelang.png", addEase:"easeOutFast"},
		{typer:"CODING MATTER", typerClass:"matrixooo", typerColor:"#000", image:"pelang/disk.jpg", addEase:"easeOutFast"},
		{typer:"TALK", typerClass:"matrixooo", addEase:"bounceFast"},
		{typer:"THANKS", typerClass:"matrixooo", addEase:"bounceFast"},
		{typer:"ENJOY THE TOUR", typerClass:"matrixooo", addEase:"bounceFast"},
	
	];
	
	powerpoint(slides);
	
	doc.act = "running"
}

director.pelang.running = function(){

	//down, right arrow, enter or space
	if(input.key == "40" || input.key == "39" || input.key == "32" || input.key == "39" || input.key == "13"){
		slide++;
		input.key = "";
	};
	
	//up, left arrow or delete
	if(input.key == "38" || input.key == "37" || input.key == "46"){
		slide--;
		input.key = "";
	};

	var start = -240;
	var wide = 240;
	var ypos = -120;
	
	//previous
	if(stage["slide" + (slide-1)] !== undefined){
		moveThing("slide" + (slide-1), {y:start});
		
		if(document.getElementById("slide" + (slide-1)).childNodes[0] !== undefined && document.getElementById("slide" + (slide-1)).childNodes[0].nodeName == "VIDEO"){
			var playa = document.getElementById("slide" + (slide-1)).childNodes[0];
			playa.pause();
			playa.currentTime = 0;
		}
	}
	
	//now
	if(stage["slide" + slide] !== undefined){
		moveThing("slide" + slide, {y:ypos});
		
		if(document.getElementById("slide" + (slide)).childNodes[0] !== undefined &&document.getElementById("slide" + slide).childNodes[0].nodeName == "VIDEO"){
			var playa = document.getElementById("slide" + slide).childNodes[0];
			playa.play();
			console.log("VIDEO");
		}
	
	}
	
	//future
	if(stage["slide" + (slide+1)] !== undefined){
		moveThing("slide" + (slide+1), {y:0});
		
		if(document.getElementById("slide" + (slide+1)).childNodes[0] !== undefined && document.getElementById("slide" + (slide+1)).childNodes[0].nodeName == "VIDEO"){
			var playa = document.getElementById("slide" + (slide+1)).childNodes[0];
			playa.pause();
			playa.currentTime = 0;
		}
	}
	
	console.log("SLIDE " + slide)

}