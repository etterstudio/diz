// - - - EGERIA - - - //
	
director.egeria = {};

var slide = -1;

director.egeria.start = function(){
	
	doc.lock = "vertical";		
	document.body.style.backgroundColor = "#000";
	doc.fontSize = 64;
		
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s0", image:"egeria/muda.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});	

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s1", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixooo("ALGORITHMS / DATA / SOCIETY", s1);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s2", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixooo("EXHIBITIONS", s2);

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s3", image:"egeria/men.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s4", image:"egeria/facepalm.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	
	//video exhibits
	addCast({shape:"video", type:"css", width:240, height:120, id:"s5", url:"egeria/gv.mp4", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});

	//video apps
	addCast({shape:"video", type:"css", width:240, height:120, id:"s6", url:"egeria/lab212.mp4", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	
	//collection
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s7", image:"egeria/juggle.gif", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s8", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixooo("DIGITAL SHIFT", s8);
	
	//net neurality
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s9", image:"egeria/ai.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s10", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixooo("INSPIRE", s10);
	
	//kibit
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s11", image:"egeria/girls.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	//pavillion
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s12", image:"egeria/robotic.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	//workshops
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s13", image:"egeria/workshop.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s14", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixooo("STRUCTURE", s14);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s15", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixooo("NUMBERS", s15);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s16", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixooo("FUTURE", s16);
	
	addCast({shape:"video", type:"css", url:"egeria/hood.mp4", width:240, height:120, id:"s17", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	addCast({shape:"video", type:"css", url:"egeria/slow.mp4", width:240, height:120, id:"s18", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	
	addCast({shape:"rect", type:"css", image:"egeria/farming.png", width:240, height:120, id:"s19", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	typer.matrixooo("ROBOTS FOR HUMANITY", s19);
	
	addCast({shape:"rect", type:"css", image:"egeria/kibit.png", width:240, height:120, id:"s20", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	typer.matrixooo("EDUCATION", s20);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s21", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixooo("DANK JE", s21);
	

	doc.act = "running"
}

director.egeria.running = function(){


	if(input.key == "40"){
		slide++;
		input.key = "";
	};
	if(input.key == "38"){
		slide--;
		input.key = "";
	};

	var start = -240;
	var wide = 240;
	var ypos = -120;
	
	//previous
	if(stage["s" + (slide-1)] !== undefined){
		moveThing("s" + (slide-1), {y:start});
		
		if(document.getElementById("s" + (slide-1)).childNodes[0] !== undefined && document.getElementById("s" + (slide-1)).childNodes[0].nodeName == "VIDEO"){
			var playa = document.getElementById("s" + (slide-1)).childNodes[0];
			playa.pause();
			playa.currentTime = 0;
		}
	}
	
	//now
	if(stage["s" + slide] !== undefined){
		moveThing("s" + slide, {y:ypos});
		
		if(document.getElementById("s" + (slide)).childNodes[0] !== undefined &&document.getElementById("s" + slide).childNodes[0].nodeName == "VIDEO"){
			var playa = document.getElementById("s" + slide).childNodes[0];
			playa.play();
			console.log("VIDEO");
		}
	
	}
	
	//future
	if(stage["s" + (slide+1)] !== undefined){
		moveThing("s" + (slide+1), {y:0});
		
		if(document.getElementById("s" + (slide+1)).childNodes[0] !== undefined && document.getElementById("s" + (slide+1)).childNodes[0].nodeName == "VIDEO"){
			var playa = document.getElementById("s" + (slide+1)).childNodes[0];
			playa.pause();
			playa.currentTime = 0;
		}
	}
	
	console.log("SLIDE " + slide)

}