// - - - renders - - - //

var renders = {};

renders.translate = function(attribute, value){
	if(attribute == "r" || attribute == "a"){
		return value;
	}else{
		return value*doc.scale;
	}
};

renders.eye = function(obj){
	//M10 80 Q 52.5 10, 95 80 T 180 80

	if(doc.sound == "running"){
		sound.oscillator.frequency.value = Math.round(stage[obj].p8yNow)*doc.scale*5;
	}

	objectosHTML["whiteL"].setAttributeNS(null, "d", 
	" M " + Math.round(((stage[obj].p1xNow)*doc.scale)) + "," + Math.round(((stage[obj].p1yNow)*doc.scale)) + 
	" C " + Math.round(((stage[obj].p2xNow)*doc.scale)) + "," + Math.round(((stage[obj].p2yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p3xNow)*doc.scale)) + "," + Math.round(((stage[obj].p3yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p4xNow)*doc.scale)) + "," + Math.round(((stage[obj].p4yNow)*doc.scale)) + 
	" S " + Math.round(((stage[obj].p5xNow)*doc.scale)) + "," + Math.round(((stage[obj].p5yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p6xNow)*doc.scale)) + "," + Math.round(((stage[obj].p6yNow)*doc.scale)) + 
	" S " + Math.round(((stage[obj].p7xNow)*doc.scale)) + "," + Math.round(((stage[obj].p7yNow)*doc.scale)) + 
	" " + Math.round(((stage[obj].p8xNow)*doc.scale)) + "," + Math.round(((stage[obj].p8yNow)*doc.scale)) +
	" S " + Math.round(((stage[obj].p9xNow)*doc.scale)) + "," + Math.round(((stage[obj].p9yNow)*doc.scale)) +
	" " + Math.round(((stage[obj].p1xNow)*doc.scale)) + "," + Math.round(((stage[obj].p1yNow)*doc.scale)) + " Z ");
	
	objectosHTML["whiteR"].setAttributeNS(null, "d", 
	" M " + Math.round(((-stage["whiteL"].p1xNow)*doc.scale)) + "," + Math.round(((stage["whiteL"].p1yNow)*doc.scale)) + 
	" C " + Math.round(((-stage["whiteL"].p2xNow)*doc.scale)) + "," + Math.round(((stage["whiteL"].p2yNow)*doc.scale)) + 
	" " + Math.round(((-stage["whiteL"].p3xNow)*doc.scale)) + "," + Math.round(((stage["whiteL"].p3yNow)*doc.scale)) + 
	" " + Math.round(((-stage["whiteL"].p4xNow)*doc.scale)) + "," + Math.round(((stage["whiteL"].p4yNow)*doc.scale)) + 
	" S " + Math.round(((-stage["whiteL"].p5xNow)*doc.scale)) + "," + Math.round(((stage["whiteL"].p5yNow)*doc.scale)) + 
	" " + Math.round(((-stage["whiteL"].p6xNow)*doc.scale)) + "," + Math.round(((stage["whiteL"].p6yNow)*doc.scale)) + 
	" S " + Math.round(((-stage["whiteL"].p7xNow)*doc.scale)) + "," + Math.round(((stage["whiteL"].p7yNow)*doc.scale)) + 
	" " + Math.round(((-stage["whiteL"].p8xNow)*doc.scale)) + "," + Math.round(((stage["whiteL"].p8yNow)*doc.scale)) +
	" S " + Math.round(((-stage["whiteL"].p9xNow)*doc.scale)) + "," + Math.round(((stage["whiteL"].p9yNow)*doc.scale)) +
	" " + Math.round(((-stage["whiteL"].p1xNow)*doc.scale)) + "," + Math.round(((stage["whiteL"].p1yNow)*doc.scale)) + " Z ");
}

renders.xy = function(obj){
	objectosHTML[obj].style.transform = "translateX(" + stage[obj].xNow*doc.scale + "px) translateY(" + stage[obj].yNow*doc.scale + "px)";
}

renders.xya = function(obj){
	objectosHTML[obj].style.transform = "translateX(" + stage[obj].xNow*doc.scale + "px) translateY(" + stage[obj].yNow*doc.scale + "px)";
	objectosHTML[obj].style.opacity = stage[obj].aNow;
}

renders.xyr = function(obj){
	objectosHTML[obj].style.transform = "translateX(" + stage[obj].xNow*doc.scale + "px) translateY(" + stage[obj].yNow*doc.scale + "px) rotate(" + stage[obj].rNow + "deg";
}

renders.xys = function(obj){
	objectosHTML[obj].style.transform = "translateX(" + stage[obj].xNow*doc.scale + "px) translateY(" + stage[obj].yNow*doc.scale + "px";
	objectosHTML[obj].style.width = stage[obj].widthNow*doc.scale + "px";
	objectosHTML[obj].style.height = stage[obj].heightNow*doc.scale + "px";
}

renders.x = function(obj){
	objectosHTML[obj].style.transform = "translateX(" + stage[obj].xNow*doc.scale + "px)";
}

renders.y = function(obj){
	objectosHTML[obj].style.transform = "translateY(" + stage[obj].yNow*doc.scale + "px)";
}

renders.wh = function(obj){
	objectosHTML[obj].style.width = stage[obj].widthNow*doc.scale + "px";
	objectosHTML[obj].style.height = stage[obj].heightNow*doc.scale + "px";
}

renders.pingpong = function(obj){
	objectosHTML[obj].style.transform = "translateY(" + stage[obj].yNow*doc.scale + "px)";
	var factor = stage[obj].yNow*doc.scale/doc.height+0.5
	objectosHTML["shadow" + obj[obj.length -1]].style.marginLeft = -100+factor*100 + "px";
	objectosHTML["shadow" + obj[obj.length -1]].style.marginTop = -30+factor*30 + "px";
	//objectosHTML["shadow" + obj[obj.length -1]].style.transform = "translateX(" + (factor*100) + "px) translateY(" + (factor*30) + "px)";

	objectosHTML["shadow" + obj[obj.length -1]].style.width = 200-factor*200 + "px";
	objectosHTML["shadow" + obj[obj.length -1]].style.height = 60-factor*60 + "px";
	//objectosHTML["shadow" + obj[obj.length -1]].style.opacity = factor;
}