var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2D2D2D);

var camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.y = 5;
camera.position.z = 30;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var ambientLight = new THREE.AmbientLight(0xDAEFFF);
scene.add(ambientLight);
var directionalLight = new THREE.DirectionalLight(0xFFFEE1);
scene.add(directionalLight);

var loader = new THREE.OBJLoader();
loader.load("models/frontpage_building/city3.obj", function(model) {
  scene.add(model);
}, undefined, function(error) {
  console.error(error);
});

var geometry = new THREE.PlaneGeometry( 12, 12 );
var material = new THREE.MeshLambertMaterial( {color: 0x2D2D2D} );
var floor = new THREE.Mesh( geometry, material );
floor.rotateX(-1.5708);
scene.add( floor );


function animate() {
  requestAnimationFrame( animate );

  renderer.render( scene, camera );
};

animate();
