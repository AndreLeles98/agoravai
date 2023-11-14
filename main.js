var lastUpdate = Date.now();
var myInterval = setInterval(tick, 0);

const loader = new THREE.GLTFLoader();

function start(){
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xFFFF00);
	
	camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);
	camera.rotation.y = 45/180*Math.PI;
	camera.position.x = 800;
	scene.add(camera);
	
	
	globalLight = new THREE.AmbientLight(0xffffff, 100);
	
	renderer = new THREE.WebGLRenderer({antialias:true})
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	loader.load("helpCube.gltf", function(gltf){
		scene.add( gltf.scene );
	});
	
	renderer.render(scene, camera);
}

function update() {
	
}


function render() {
	
}


function tick() {
    var now = Date.now();
    var dt = now - lastUpdate;
    lastUpdate = now;
    update(dt);
    render(dt);
}

start();
//while (true){
	//tick();
//}