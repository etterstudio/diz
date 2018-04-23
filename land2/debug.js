
function debugView() {
	
	var debug = document.createElement("div");
	debug.id = "debug";
	debug.style.zIndex = "100";
	debug.style.position = "fixed";
	document.body.appendChild(debug);
		
	var divH = document.createElement("div");
	divH.style.top = "50%";
	divH.style.width = "100%";
	divH.style.height = "1px";
	divH.style.background = "#333";
	divH.style.userSelect = "none";
	divH.style.position = "fixed";
	debug.appendChild(divH);

	var divV = document.createElement("div");
	divV.style.left = "50%";
	divV.style.width = "1px";
	divV.style.height = "100%";
	divV.style.background = "#333";
	divV.style.userSelect = "none";
	divV.style.position = "fixed";
	debug.appendChild(divV);
		
	var spf = document.createElement("div");
	spf.style.height = "5px";
	spf.style.background = "#999";
	spf.style.userSelect = "none";
	spf.style.position = "fixed";
	spf.id = "spf";
	debug.appendChild(spf);
	
	var spf20 = document.createElement("div");
	spf20.style.top = "5px";
	spf20.style.height = "2px";
	spf20.style.width = "80px";
	spf20.style.background = "#999";
	spf20.style.userSelect = "none";
	spf20.style.position = "fixed";
	spf20.id = "spf20";
	debug.appendChild(spf20);
	
	var spf40 = document.createElement("div");
	spf40.style.top = "5px";
	spf40.style.left = "160px";
	spf40.style.height = "2px";
	spf40.style.width = "80px";
	spf40.style.background = "#999";
	spf40.style.userSelect = "none";
	spf40.style.position = "fixed";
	spf40.id = "spf40";
	debug.appendChild(spf40);
	
	var fsize = document.createElement("div");
	fsize.style.right = "0";
	fsize.style.userSelect = "none";
	fsize.style.position = "fixed";
	fsize.id = "fsize";
	debug.appendChild(fsize);
	
	var senso = document.createElement("div");
	senso.style.bottom = "0";
	senso.style.userSelect = "none";
	senso.style.position = "fixed";
	senso.id = "senso";
	debug.appendChild(senso);
	
	var conso = document.createElement("div");
	conso.style.bottom = "0";
	conso.style.right = "0";
	conso.style.userSelect = "none";
	conso.style.position = "fixed";
	conso.id = "conso";
	debug.appendChild(conso);
	
	document.getElementById('conso').innerHTML = "doc.scale: " + doc.scale + ", doc.yCenter: " + doc.yCenter;	
	document.getElementById('fsize').innerHTML = doc.width + "/" + doc.height;
	
	makeButton("1", "1");
	makeButton("2", "2");
	makeButton("3", "3");
	makeButton("4", "4");

}