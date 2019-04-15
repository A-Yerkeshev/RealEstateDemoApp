function init() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x666565);

  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var ambientLight = new THREE.AmbientLight(0xDAEFFF);
  var directionalLight = new THREE.DirectionalLight(0xFFFEE1);
  scene.add(ambientLight, directionalLight);
};

function render() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
};

init();
render();
