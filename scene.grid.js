// - - - GRID - - - //

director.grid = {};
	
director.grid.start = function(){
		
	document.body.style.backgroundColor = "#333";
	doc.lock = "horizontal";
	
	addCast({id:"gridContainer", type:"css", parent:"mother", shape:"container", a:0.5});
	addCast({id:"gridLine0", type:"css", render:"x", parent:"gridContainer", addEase:"bounceFast", shape:"rect", color:"#fff", width:0.25, height:160, x:-40, y:0});
	addCast({id:"gridLine1", type:"css", render:"x", parent:"gridContainer", addEase:"bounceFast", shape:"rect", color:"#fff", width:0.25, height:160, x:-20, y:0});
	addCast({id:"gridLine2", type:"css", render:"x", parent:"gridContainer", addEase:"bounceFast", shape:"rect", color:"#fff", width:0.25, height:160, x:0, y:0});
	addCast({id:"gridLine3", type:"css", render:"x", parent:"gridContainer", addEase:"bounceFast", shape:"rect", color:"#fff", width:0.25, height:160, x:20, y:0});
	addCast({id:"gridLine4", type:"css", render:"x", parent:"gridContainer", addEase:"bounceFast", shape:"rect", color:"#fff", width:0.25, height:160, x:40, y:0});

	addCast({id:"gridLine01", type:"css", render:"y", parent:"gridContainer", addEase:"bounceFast", shape:"rect", color:"#fff", width:100, height:0.25, x:0, y:-40});
	addCast({id:"gridLine02", type:"css", render:"y", parent:"gridContainer", addEase:"bounceFast", shape:"rect", color:"#fff", width:100, height:0.25, x:0, y:0});
	addCast({id:"gridLine03", type:"css", render:"y", parent:"gridContainer", addEase:"bounceFast", shape:"rect", color:"#fff", width:100, height:0.25, x:0, y:20});
		
	doc.act = "running";
	
}

director.grid.running = function(){
	
	
	
}


renders.grid = function(obj){
	
	
	
}