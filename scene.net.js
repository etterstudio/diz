// - - - NET NEUTRALITY - - - //
	
director.net = {};

var slide = -1;


function parseURL(url, variable){
	var svalue = url.search.match(new RegExp("[\?\&]" + variable + "=([^\&]*)(\&?)","i"));
	return svalue ? svalue[1] : svalue;
}

var url = document.createElement('a');
url.href = window.location.href;


//votes

var round1_unklar = Number(parseURL(url, "v10"));
var round1_kodex = Number(parseURL(url, "v11"));
var round1_gesetz = Number(parseURL(url, "v12"));;

var round2_unklar = Number(parseURL(url, "v20"));
var round2_kodex = Number(parseURL(url, "v21"));
var round2_gesetz = Number(parseURL(url, "v22"));;

var round1_total = round1_kodex + round1_unklar + round1_gesetz;
var round2_total = round2_kodex + round2_unklar + round2_gesetz;

director.net.start = function(){
	
	doc.lock = "vertical";		
	document.body.style.backgroundColor = "#000";
	doc.fontSize = 64;
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s0", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("Netzneutralität<br>in der Schweiz", s0);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s1", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("Christian Etter", s1);

	//addCast({shape:"rect", type:"css", width:240, height:120, id:"s2", image:"net/muda_white.png", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s2", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	//s2.innerHTML = "muda.co/stream";
	typer.matrixo("muda.co/stream", s2);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s3", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("Daten / Algorithmen / Gesellschaft", s3);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s4", image:"net/partner.png", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s5", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("Verhaltenskodex oder Gesetz?", s5);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s6", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("Netzneutralität", s6);

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s7", color:"#ff0000", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	s7.style.color = "#000";
	typer.matrixo("Technisch", s7);

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s8", image:"net/tech_1_computer.png", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s9", image:"net/tech_2_os.png", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s10", image:"net/tech_3_app.png", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s11", image:"net/tech_4_isp.png", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s12", image:"net/tech_4_map.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s13", image:"net/tech_4_cable.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s14", parent:"mother", y:120, addEase:"bounceFast", render:"y"});	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s15", image:"net/tech_5_dns.png", parent:"mother", y:120, addEase:"bounceFast", render:"y"});	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s16", image:"net/tech_6_server.png", parent:"mother", y:120, addEase:"bounceFast", render:"y"});	

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s17", image:"net/refer.png", parent:"mother", y:120, addEase:"bounceFast", render:"y"});

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s18", color:"#ff0000", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	s18.style.color = "#000";
	typer.matrixo("Rechtlich", s18);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s19", image:"net/blocked.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});	

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s20", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});		
	typer.matrixo("turkeyblocks.org", s20);

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s21", image:"net/portugal.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});	
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s22", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("Niederlande", s22);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s23", color:"#ff0000", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	typer.matrixo("Schweiz", s23);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s24", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("Vorstoss", s24);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s25", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("Verhaltenskodex", s25);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s26", image:"net/kodex_1.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s27", image:"net/kodex_2.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s28", image:"net/kodex_3.png", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});	
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s29", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("networkneutrality.ch", s29);
	

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s30", color:"#ff0000", parent:"mother", y:120, addEase:"easeOutFast", render:"y"});
	s30.style.color = "#000";
	typer.matrixo("Die Debatte", s30);

	addCast({shape:"rect", type:"css", width:40, height:40, id:"s31", parent:"mother", y:120, addEase:"bounceFast", render:"y"});	

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s32", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("Schlussplädoyer", s32);

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s33", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("Kodex oder Gesetz?", s33);

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s34", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("Das Resultat", s34);

	addCast({shape:"rect", type:"css", width:240, height:120, id:"s35", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("Winner!", s35);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s36", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("Qubibi / Kids / Bot Summit", s36);
	
	addCast({shape:"rect", type:"css", width:240, height:120, id:"s37", parent:"mother", y:120, addEase:"bounceFast", render:"y"});
	typer.matrixo("muda.co", s37);


	//stats
	
	addCast({shape:"rect", type:"css", color:"#1bb23e", y:30, width:240, height:60, id:"dia13", parent:"mother", addEase:"easeOutMedi", render:"x"});
	addCast({shape:"rect", type:"css", color:"#1239ff", y:30, width:240, height:60, id:"dia12", parent:"mother", addEase:"easeOutMedi", render:"x"});
	addCast({shape:"rect", type:"css", color:"#666666", y:30, width:240, height:60, id:"dia11", parent:"mother", addEase:"easeOutMedi", render:"x"});

	addCast({shape:"rect", type:"css", y:30, width:240, height:60, id:"dia11txt", parent:"mother", addEase:"easeOutSlow", render:"x"});
	addCast({shape:"rect", type:"css", y:30, width:240, height:60, id:"dia12txt", parent:"mother", addEase:"easeOutSlow", render:"x"});
	addCast({shape:"rect", type:"css", y:30, width:240, height:60, id:"dia13txt", parent:"mother", addEase:"easeOutSlow", render:"x"});

	addCast({shape:"rect", type:"css", y:-30, color:"#32fe62", width:240, height:60, id:"dia23", parent:"mother", addEase:"easeOutMedi", render:"x"});
	addCast({shape:"rect", type:"css", y:-30, color:"#2580fd", width:240, height:60, id:"dia22", parent:"mother", addEase:"easeOutMedi", render:"x"});
	addCast({shape:"rect", type:"css", y:-30, color:"#cccccc", width:240, height:60, id:"dia21", parent:"mother", addEase:"easeOutMedi", render:"x"});

	addCast({shape:"rect", type:"css", y:-30, width:240, height:60, id:"dia21txt", parent:"mother", addEase:"easeOutSlow", render:"x"});
	addCast({shape:"rect", type:"css", y:-30, width:240, height:60, id:"dia22txt", parent:"mother", addEase:"easeOutSlow", render:"x"});
	addCast({shape:"rect", type:"css", y:-30, width:240, height:60, id:"dia23txt", parent:"mother", addEase:"easeOutSlow", render:"x"});

	dia11txt.style.color = "#000";
	dia12txt.style.color = "#000";
	dia13txt.style.color = "#000";
	dia11txt.innerHTML = round1_unklar + "<br>" + Math.round(round1_unklar/round1_total*1000)/10 + "%";
	dia12txt.innerHTML = round1_kodex + "<br>" + Math.round(round1_kodex/round1_total*1000)/10 + "%";;
	dia13txt.innerHTML = round1_gesetz + "<br>" + Math.round(round1_gesetz/round1_total*1000)/10 + "%";;

	dia21txt.style.color = "#000";
	dia22txt.style.color = "#000";
	dia23txt.style.color = "#000";
	dia21txt.innerHTML = round2_unklar + "<br>" + Math.round(round2_unklar/round2_total*1000)/10 + "%";
	dia22txt.innerHTML = round2_kodex + "<br>" + Math.round(round2_kodex/round2_total*1000)/10 + "%";
	dia23txt.innerHTML = round2_gesetz + "<br>" + Math.round(round2_gesetz/round2_total*1000)/10 + "%";



	//spotlight

	doc.fontSize = 32;
	
	addCast({shape:"circle", type:"css", color:"#ccc", width:50, height:50, id:"spot1", parent:"mother", y:140, addEase:"easeOutFast", render:"xy"});	
	addCast({shape:"rect", type:"css", a:0, width:120, height:40, id:"spot1txt", parent:"mother", y:120, addEase:"bounceFast", render:"xya"});	
	typer.matrixo("Christian Grasser<br>asut", spot1txt);

	addCast({shape:"circle", type:"css", color:"#ccc", width:50, height:50, id:"spot2", parent:"mother", y:140, addEase:"easeOutFast", render:"xy"});	
	addCast({shape:"rect", type:"css", a:0, width:120, height:40, id:"spot2txt", parent:"mother", y:120, addEase:"bounceFast", render:"xya"});	
	typer.matrixo("Adrian Raass<br>Swisscom", spot2txt);

	addCast({shape:"circle", type:"css", color:"#ccc", width:50, height:50, id:"spot3", parent:"mother", y:140, addEase:"easeOutFast", render:"xy"});	
	addCast({shape:"rect", type:"css", a:0, width:120, height:40, id:"spot3txt", parent:"mother", y:120, addEase:"bounceFast", render:"xya"});	
	typer.matrixo("Balthasar Glättli<br>Grüne Zürich", spot3txt);

	addCast({shape:"circle", type:"css", color:"#ccc", width:50, height:50, id:"spot4", parent:"mother", y:140, addEase:"easeOutFast", render:"xy"});	
	addCast({shape:"rect", type:"css", a:0, width:120, height:40, id:"spot4txt", parent:"mother", y:120, addEase:"bounceFast", render:"xya"});	
	typer.matrixo("Oliver Reichenstein<br>Information Architects", spot4txt);

	var zero = -240;

	moveThing("dia11", {x:zero});
	moveThing("dia11txt", {x:zero});
	moveThing("dia12", {x:zero});
	moveThing("dia12txt", {x:zero});
	moveThing("dia13", {x:zero});
	moveThing("dia13txt", {x:zero});

	moveThing("dia21", {x:zero});
	moveThing("dia21txt", {x:zero});
	moveThing("dia22", {x:zero});
	moveThing("dia22txt", {x:zero});
	moveThing("dia23", {x:zero});
	moveThing("dia23txt", {x:zero});

	doc.act = "running"
}

director.net.running = function(){


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

	//first vote asd

	var space11 = round1_unklar/round1_total*wide;
	var space12 = round1_kodex/round1_total*wide;
	var space13 = round1_gesetz/round1_total*wide;

	if(input.key == "65"){
		moveThing("dia11", {x:start+space11});
		moveThing("dia11txt", {x:start+space11+wide/2-space11/2});
	};
	if(input.key == "83"){
		moveThing("dia12", {x:start+space11+space12});
		moveThing("dia12txt", {x:start+space11+space12+wide/2-space12/2});
	};
	if(input.key == "68"){
		moveThing("dia13", {x:start+space11+space12+space13});
		moveThing("dia13txt", {x:start+space11+space12+space13+wide/2-space13/2});
	};

	//second vote fgh

	var space21 = round2_unklar/round2_total*wide;
	var space22 = round2_kodex/round2_total*wide;
	var space23 = round2_gesetz/round2_total*wide;

	if(input.key == "70"){
		moveThing("dia21", {x:start+space21});
		moveThing("dia21txt", {x:start+space21+wide/2-space21/2});
	};
	if(input.key == "71"){
		moveThing("dia22", {x:start+space21+space22});
		moveThing("dia22txt", {x:start+space21+space22+wide/2-space22/2});
	};
	if(input.key == "72"){
		moveThing("dia23", {x:start+space21+space22+space23});
		moveThing("dia23txt", {x:start+space21+space22+space23+wide/2-space23/2});
	};

	if(input.key == "74"){
		moveThing("dia11", {x:start});
		moveThing("dia11txt", {x:start});
		moveThing("dia12", {x:start});
		moveThing("dia12txt", {x:start});
		moveThing("dia13", {x:start});
		moveThing("dia13txt", {x:start});
		
		moveThing("dia21", {x:start});
		moveThing("dia21txt", {x:start});
		moveThing("dia22", {x:start});
		moveThing("dia22txt", {x:start});
		moveThing("dia23", {x:start});
		moveThing("dia23txt", {x:start});
	};

	
	//spotlight positions

	var pos1 = -75;
	var pos2 = -35;
	var pos3 = 5;
	var pos4 = 45;
	
	var ypos = -135; 

	if(input.digit == 1){
		moveThing("spot1", {x:pos1, y:ypos});
		moveThing("spot2", {x:pos1, y:ypos});
		moveThing("spot3", {x:pos1, y:ypos});
		moveThing("spot4", {x:pos1, y:ypos});
		moveThing("spot1txt", {x:pos1, y:-160, a:1});
		moveThing("spot2txt", {x:pos1, y:-160, a:0});
		moveThing("spot3txt", {x:pos1, y:-160, a:0});
		moveThing("spot4txt", {x:pos1, y:-160, a:0});

	}else if(input.digit == 2){
		moveThing("spot1", {x:pos2, y:ypos});
		moveThing("spot2", {x:pos2, y:ypos});
		moveThing("spot3", {x:pos2, y:ypos});
		moveThing("spot4", {x:pos2, y:ypos});
		moveThing("spot1txt", {x:pos2, y:-160, a:0});
		moveThing("spot2txt", {x:pos2, y:-160, a:1});
		moveThing("spot3txt", {x:pos2, y:-160, a:0});
		moveThing("spot4txt", {x:pos2, y:-160, a:0});
		
	}else if(input.digit == 3){
		moveThing("spot1", {x:pos3, y:ypos});
		moveThing("spot2", {x:pos3, y:ypos});
		moveThing("spot3", {x:pos3, y:ypos});
		moveThing("spot4", {x:pos3, y:ypos});
		moveThing("spot1txt", {x:pos3, y:-160, a:0});
		moveThing("spot2txt", {x:pos3, y:-160, a:0});
		moveThing("spot3txt", {x:pos3, y:-160, a:1});
		moveThing("spot4txt", {x:pos3, y:-160, a:0});

	}else if(input.digit == 4){
		moveThing("spot1", {x:pos4, y:ypos});
		moveThing("spot2", {x:pos4, y:ypos});
		moveThing("spot3", {x:pos4, y:ypos});
		moveThing("spot4", {x:pos4, y:ypos});
		moveThing("spot1txt", {x:pos4, y:-160, a:0});
		moveThing("spot2txt", {x:pos4, y:-160, a:0});
		moveThing("spot3txt", {x:pos4, y:-160, a:0});
		moveThing("spot4txt", {x:pos4, y:-160, a:1});

	}else if(input.digit == 5){
		moveThing("spot1", {x:pos1, y:ypos});
		moveThing("spot2", {x:pos2, y:ypos});
		moveThing("spot3", {x:pos3, y:ypos});
		moveThing("spot4", {x:pos4, y:ypos});
		moveThing("spot1txt", {x:pos1, y:-160, a:0.5});
		moveThing("spot2txt", {x:pos2, y:-160, a:0.5});
		moveThing("spot3txt", {x:pos3, y:-160, a:0.5});
		moveThing("spot4txt", {x:pos4, y:-160, a:0.5});

	}else if(input.digit == 0){
		moveThing("spot1", {y:0});
		moveThing("spot2", {y:0});
		moveThing("spot3", {y:0});
		moveThing("spot4", {y:0});
		moveThing("spot1txt", {a:0});
		moveThing("spot2txt", {a:0});
		moveThing("spot3txt", {a:0});
		moveThing("spot4txt", {a:0});
	}

	if(stage["s" + (slide-1)] !== undefined){
		if(slide < 9 || slide > 16){
			moveThing("s" + (slide-1), {y:-240});
		}
	}
	if(stage["s" + slide] !== undefined){
		moveThing("s" + slide, {y:-140});
	}
	if(stage["s" + (slide+1)] !== undefined){
		moveThing("s" + (slide+1), {y:0});
	}
	
	if(slide == 14){
		moveThing("s12", {y:-240});
		moveThing("s13", {y:-240});
	}
	
	if(slide == 17){
		moveThing("s8", {y:-240});
		moveThing("s9", {y:-240});
		moveThing("s10", {y:-240});
		moveThing("s11", {y:-240});
		moveThing("s12", {y:-240});
		moveThing("s13", {y:-240});
		moveThing("s14", {y:-240});
		moveThing("s15", {y:-240});
		moveThing("s16", {y:-240});
	}
	
	console.log("SLIDE " + slide)

}