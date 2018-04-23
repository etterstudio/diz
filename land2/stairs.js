// - - - build divs - - - //

function createDivs(inputObject) {
	
	    
	if(inputObject.type == "svg"){
	
		if(inputObject.shape == "container"){
			
			var svgContainer = document.createElementNS(doc.svgNameSpace, "svg");
			//svgContainer.style.display = "block";
			svgContainer.style.overflow = "visible";
			svgContainer.style.position = "fixed";
		    
		    svgContainer.id = inputObject.id;
		    console.log("ADD " + inputObject.id);
			document.getElementById(inputObject.parent).appendChild(svgContainer);

    		//document.getElementById(inputObject.id).style.left = -doc.xCenter + "px";
    		//document.getElementById(inputObject.id).style.top = -doc.yCenter + "px";
    		document.getElementById(inputObject.id).transform = "translate(" + inputObject.x + "px, " + inputObject.y + "px) rotate(" + inputObject.r + "deg)";
		    		    
		}else if(inputObject.shape == "group"){

			var svgGroup = document.createElementNS(doc.svgNameSpace, "g");
			svgGroup.id = inputObject.id;
			document.getElementById(inputObject.parent).appendChild(svgGroup);
				
    		document.getElementById(inputObject.id).style.transform = "translateX(" + inputObject.x + "px) translateY(" + inputObject.y + "px) rotate(" + inputObject.r + "deg)";

	    }else{
	    
			var patho;
				
			if(inputObject.shape == "shape"){	
			
				patho = document.createElementNS(doc.svgNameSpace, "path"); 
				patho.setAttributeNS(null, "fill", inputObject.color);
				patho.setAttributeNS(null, "d", inputObject.d);
			
			}else if(inputObject.shape == "line"){	
			
				patho = document.createElementNS(doc.svgNameSpace, "path"); 
				patho.setAttributeNS(null, "fill", "none");
				patho.setAttributeNS(null, "stroke-width", inputObject.stroke);
				patho.setAttributeNS(null, "stroke", inputObject.color);
				patho.setAttributeNS(null, "transform", "translate(" + inputObject.x + ", " + inputObject.y + ") rotate(" + inputObject.r + ")");
				patho.setAttributeNS(null, "stroke-linecap", inputObject.cap);
				patho.setAttributeNS(null, "stroke-linejoin", inputObject.join);
				patho.setAttributeNS(null, "d", inputObject.d);
				
			}else if(inputObject.shape == "ellipse"){	
			
				patho = document.createElementNS(doc.svgNameSpace, "ellipse"); 
				patho.setAttributeNS(null, "fill", inputObject.color);//none
				//patho.setAttributeNS(null, "stroke-width", "1");
				//patho.setAttributeNS(null, "stroke", inputObject.color);
				patho.setAttributeNS(null, "cx", inputObject.x);//offset not needed when part of parent
				patho.setAttributeNS(null, "cy", inputObject.y);
				patho.setAttributeNS(null, "rx", inputObject.width/2);
				patho.setAttributeNS(null, "ry", inputObject.height/2);
				patho.setAttributeNS(null, "transform", "rotate(" + inputObject.r + " " + inputObject.x + " " + inputObject.y + ")");
			
			}else if(inputObject.shape == "circle"){	
			
				patho = document.createElementNS(doc.svgNameSpace, "circle"); 
				patho.setAttributeNS(null, "fill", "none");
				patho.setAttributeNS(null, "stroke-width", "1");
				patho.setAttributeNS(null, "stroke", inputObject.color);
				patho.setAttributeNS(null, "cx", inputObject.x);//offset not needed when part of parent
				patho.setAttributeNS(null, "cy", inputObject.y);
				patho.setAttributeNS(null, "r", inputObject.radius);

			}
		
			patho.id = inputObject.id;
			document.getElementById(inputObject.parent).appendChild(patho);
			
    	}
    	
	}else{
		
		//css content
		var div = document.createElement("div");
		
		if(inputObject.shape == "circle"){
			
			div.style.left = inputObject.x + "px";
			div.style.top = inputObject.y + "px";
			div.style.width = inputObject.width + "px";
			div.style.height = inputObject.height + "px";
//			div.style.transform = "rotate(" + inputObject.r + "deg)";
			div.style.marginLeft = -inputObject.width/2 + "px";
			div.style.marginTop = -inputObject.height/2 + "px";
			div.style.background = inputObject.color;
			div.style.borderRadius = "50%";
			
		}else if(inputObject.shape == "rect"){
		
			div.style.left = inputObject.x + "px";
			div.style.top = inputObject.y + "px";
			div.style.width = inputObject.width + "px";
			div.style.height = inputObject.height + "px";
			div.style.transform = "rotate(" + inputObject.r + "deg)";
			div.style.marginLeft = -inputObject.width/2 + "px";
			div.style.marginTop = -inputObject.height/2 + "px";
			div.style.background = inputObject.color;
			div.style.backgroundImage = "url(" + inputObject.image + ")";
			div.style.fontSize = doc.fontSize + "px";
			div.style.textAlign = "center";
			div.style.display = "flex";
			div.style.justifyContent = "center";
			div.style.alignItems = "center";
			div.style.backgroundPosition = "center center";
			div.style.backgroundRepeat = "no-repeat";
			div.style.opacity = inputObject.a;

		}else if(inputObject.shape == "triangle"){
	
			div.style.width = "0px";
			div.style.height = "0px";
			div.style.borderLeft = (inputObject.width/2*1.22) + "px solid transparent";
			div.style.borderRight = (inputObject.width/2*1.22) + "px solid transparent";
			div.style.borderBottom = inputObject.height + "px solid " + inputObject.color;
			
		}else if(inputObject.shape == "container"){
			
			//sub group
			//div.style.left = inputObject.x + "px";
			//div.style.top = inputObject.y + "px";
			div.style.transform = "translateX(" + inputObject.x + "px) translateY(" + inputObject.y + "px) rotate(" + inputObject.r + "deg)";
			div.style.opacity = inputObject.a;
			
		}
		
		//check for type stuff
		if(inputObject.typer !== undefined){
			typer[inputObject.typerClass](inputObject.typer, div);
			
			if(inputObject.typerColor !== undefined){
				div.style.color = inputObject.typerColor;
			}

		}
		
		//check for video stuff
		if(inputObject.video !== undefined){
			
			var video = document.createElement("video");
			//video.setAttribute("controls", "");
			video.setAttribute("preload", "none");
			video.setAttribute("loop", "");
			div.appendChild(video);
			
			var source = document.createElement("source");
			video.appendChild(source);
			
			source.setAttribute("src", inputObject.video);
		}
		
		//global
		div.id = inputObject.id;
		div.style.userSelect = "none";
		div.style.position = "fixed";
		
		//add to view
		document.getElementById(inputObject.parent).appendChild(div);		
		
    }
	
}