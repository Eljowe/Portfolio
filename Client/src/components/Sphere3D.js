import React from 'react'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


// Home 3D object viewer window. Custom STL-files are supported. For now the object is a sphere
const Home3D = ({ theme }) => {
    const mountRef = useRef(null)
    useEffect(() => {
        var scene = new THREE.Scene()
        const helper = new THREE.GridHelper( 1000, 40, 0x303030, 0x303030 )
        helper.position.y = -40

        //scene.add(helper)

        var camera = new THREE.PerspectiveCamera( 35, 1.2, 1, 1000 )
        camera.position.set( 0, 0, 0 )


        var renderer = new THREE.WebGLRenderer()
        renderer.clear()
        renderer.outputEncoding = THREE.sRGBEncoding
        renderer.setClearColor( 0xffffff, 0)
        renderer.setPixelRatio( window.devicePixelRatio )


        const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 )
        hemiLight.position.set( 0, 100, 0 )
        scene.add( hemiLight )

        const dirLight = new THREE.DirectionalLight( 0xffffff )
        dirLight.position.set( - 0, 40, 50 )
        dirLight.castShadow = true
        dirLight.shadow.camera.top = 50
        dirLight.shadow.camera.bottom = - 25
        dirLight.shadow.camera.left = - 25
        dirLight.shadow.camera.right = 25
        dirLight.shadow.camera.near = 0.1
        dirLight.shadow.camera.far = 200
        dirLight.shadow.mapSize.set( 1024, 1024 )
        scene.add( dirLight )

        const container = document.getElementById('3DBox');
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.setPixelRatio( window.devicePixelRatio )
        container.appendChild(renderer.domElement);
        camera.aspect =container.offsetWidth/container.offsetHeight
        camera.updateProjectionMatrix()
        mountRef.current.innerHTML = ''
        mountRef.current.appendChild( renderer.domElement )

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enabled = false
        controls.enablePan = false
        controls.enableZoom = true
        controls.autoRotate = true
        controls.autoRotateSpeed = 2
        //scene.userData.controls = controls //this allowed continuing scrolling div when in render view
        controls.minDistance = 400 //50
        controls.maxDistance = 800 //400

        camera.position.z = 5

        window.addEventListener( 'resize', onWindowResize, false )

        var insidecolor = 0x000000
        var linecolor = 0xFFFFFF


        if(theme === 'light') {
            insidecolor = 0xFFFFFF
            linecolor = 0x000000
        }


        const sphereg = new THREE.SphereGeometry( 100, 15, 17, 0, 2*Math.PI, 0, 5.7428 )
        const sphereM = new THREE.MeshBasicMaterial(  { color: insidecolor } )
        const spheremesh = new THREE.Mesh( sphereg, sphereM )

        const material = new THREE.MeshBasicMaterial( { color: linecolor , wireframe: true, wireframeLinewidth: 1.3 } )
        const sphere = new THREE.Mesh( sphereg, material )
        sphere.scale.set(1.1, 1.1, 1.1)

        function onWindowResize(){
            renderer.setPixelRatio( window.devicePixelRatio )
            const container = document.getElementById('3DBox');
            renderer.setSize(container.offsetWidth, container.offsetHeight);
            camera.aspect =container.offsetWidth/container.offsetHeight
            camera.updateProjectionMatrix()
            container.appendChild(renderer.domElement);
        }

        scene.add( sphere )
        scene.add( spheremesh )

        function animate() {
            requestAnimationFrame(animate)
            controls.update()

            render()
            //stats.update()
        }

        function render() {
            renderer.render(scene, camera)
        }

        
        animate()
    }, [theme])

    return (
        <div ref={mountRef} className="ThreeJSWindow">

        </div>
    )
}

export default Home3D