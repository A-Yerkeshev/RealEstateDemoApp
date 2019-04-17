var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2D2D2D);

var camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var controls = new THREE.OrbitControls(camera);
camera.position.set(0, 5, 10);
controls.update();
controls.target = new THREE.Vector3(0, 4, 0);
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
controls.minDistance = 6;
controls.maxDistance = 15;

function onWindowResize() {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};
window.addEventListener('resize', onWindowResize, false);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var ambientLight = new THREE.AmbientLight(0xDAEFFF);
scene.add(ambientLight);
var directionalLight = new THREE.DirectionalLight(0xFFFEE1);
scene.add(directionalLight);

// Import model
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath("models/frontpage_building/");
mtlLoader.load("city3.mtl", function(materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath("models/frontpage_building/");
    objLoader.load("city3.obj", function (object) {
      object.scale.set(0.4, 0.4, 0.4);
      object.position.set(-8, 1, 11);
      scene.add(object);
    }, undefined, function(error) {
      console.error(error);
    });
});

var geometry = new THREE.PlaneGeometry( 12, 12 );
var material = new THREE.MeshLambertMaterial( {color: 0x2D2D2D} );
var floor = new THREE.Mesh( geometry, material );
// Turn floor 90 deg
floor.rotateX(-90 * Math.PI/180);
scene.add( floor );


function animate() {
  requestAnimationFrame( animate );

  controls.update();

  renderer.render( scene, camera );
};

animate();
