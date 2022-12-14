import * as THREE from "three"

export default class Experience {
    constructor(canvas) {
       this.canvas = canvas
       const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;
        const clock = new THREE.Clock
        function animate() {
            requestAnimationFrame( animate );
            // let time = clock.getElapsedTime()
            let delta = clock.getDelta()
            cube.rotation.x += 0.01 + delta % 5;
            cube.rotation.y += 0.01 + delta % 5;;

            renderer.render( scene, camera );
        };

        animate();
    }
    
	
}