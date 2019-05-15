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
controls.maxPolarAngle = (Math.PI/2);
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

var geometry = new THREE.PlaneGeometry( 12, 12 );
var material = new THREE.MeshLambertMaterial( {color: 0x2D2D2D} );
var floor = new THREE.Mesh( geometry, material );
// Turn floor 90 deg
floor.rotateX(-90 * Math.PI/180);
scene.add(floor);

var mtlLoader = new THREE.MTLLoader();
var objLoader = new THREE.OBJLoader();

function loadModel(format, path, modelname, adj) {
  // Clean existing models
  while (scene.children.length > 3) {
    scene.remove(scene.children[3]);
  };

  // Load new model
  switch (format) {
    case 'obj':
      mtlLoader.setPath(path);
      mtlLoader.load(modelname + ".mtl", function(materials) {
          materials.preload();
          objLoader.setMaterials(materials);
          objLoader.setPath(path);
          objLoader.load(modelname + ".obj", function(model) {
            model.scale.set(adj.scale, adj.scale, adj.scale);
            model.position.set(adj.posX, adj.posY, adj.posZ);
            model.rotateX(adj.rotX * Math.PI/180);
            model.rotateY(adj.rotY * Math.PI/180);
            model.rotateZ(adj.rotZ * Math.PI/180);
            scene.add(model);
          }, undefined, function(error) {
            console.error(error);
          });
      });
      break;
  };
};

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

//Load default model
loadModel('obj', 'models/4fl-residential/', 'city3', {
  scale: 0.4,
  posX: -8,
  posY: 1,
  posZ: 11,
  rotX: 0,
  rotY: 0,
  rotZ: 0
});
animate();
