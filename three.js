var camera, scene, renderer;

var meshRed, meshDark, meshBlue;

var bananaSimplex = new SimplexNoise();

init();
animate();

function init() {
                
    camera = new THREE.PerspectiveCamera( 40, (doc.width/doc.height), 0.1, 10 );
    camera.position.z = 10;

    scene = new THREE.Scene();

    var geometry = new THREE.SphereGeometry( 2, 4, 64 );
    var material = new THREE.MeshBasicMaterial( { color: 0xcc0000 } );
    meshRed = new THREE.Mesh( geometry, material );
    scene.add(meshRed);

    var geometry = new THREE.SphereGeometry( 7, 5, 2 );
    var material = new THREE.MeshBasicMaterial( { color: 0x11006a } );
    meshDark = new THREE.Mesh( geometry, material );
    scene.add(meshDark);
    meshDark.position.z = -4;

    var geometry = new THREE.SphereGeometry( 3, 2, 64 );
    var material = new THREE.MeshBasicMaterial( { color: 0x0000cc } );
    meshBlue = new THREE.Mesh( geometry, material );
    scene.add(meshBlue);


    canvasDiv = document.getElementById("canvas");

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(doc.width, doc.height);
    renderer.setClearColor( 0x000033, 1 );
    canvasDiv.appendChild(renderer.domElement);
    
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    
    doc.width = window.innerWidth;
    doc.height = window.innerHeight;
    doc.xCenter = doc.width/2;
    doc.yCenter = doc.height/2;

    camera.aspect = doc.width/doc.height;
    camera.updateProjectionMatrix();
    renderer.setSize(doc.width, doc.height);

}



var lastTime, scrollTime = 0, scrollSpeed = 1;

function animate(time) {

    var dt = 0;
	if (lastTime) {
		dt = time - lastTime;
		if (dt > 1) dt = 0.02;
	}
    lastTime = time;
    
    scrollTime =  Math.round((scrollTime+(scrollFactor-scrollTime)*scrollSpeed*dt)*100)/100;
    
    meshRed.position.x = bananaSimplex.noise2D(time/20000, 0);
    //meshRed.position.y = bananaSimplex.noise2D(time/20000, 100);
    meshRed.position.y = (scrollTime-scrollFactor)/1000;
    meshRed.position.z = bananaSimplex.noise2D(time/40000, 200)+1;

    meshRed.rotation.x = 0.001*scrollTime;
    meshRed.rotation.z = 0.003*scrollTime;

    meshDark.position.x = bananaSimplex.noise2D(time/40000, 0);
//    meshDark.position.y = bananaSimplex.noise2D(time/40000, 100);
    meshDark.position.y = (scrollFactor-scrollTime)/200;
    //meshDark.position.z = bananaSimplex.noise2D(time/20000, 200);
    
    meshDark.rotation.x = -0.0005*scrollTime;
    meshDark.rotation.z = bananaSimplex.noise2D(time/40000, 50);

    meshBlue.position.x = bananaSimplex.noise2D(time/40000, 200);
    //meshBlue.position.y = bananaSimplex.noise2D(time/40000, 0);
    meshBlue.position.y = (scrollFactor-scrollTime)/500;

    meshBlue.rotation.x = -0.002*scrollTime;
    meshBlue.rotation.z = -0.001*scrollTime;

    renderer.render( scene, camera );

    requestAnimationFrame( animate );

}