'use client'
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useEffect } from "react"
import * as THREE from "three"

const TechIcon = ({model} : ModelType) => {

    const scene = useGLTF(model.modelPath)

    useEffect(()=> {
        if(model.name === 'Interactive Developer')  {
            scene.scene.traverse((child) => {
               if (
                  child instanceof THREE.Mesh &&
                  child.name === 'Object_5'
                ) {
                    child.material = new THREE.MeshStandardMaterial({
                        color : 'white',
                    })
                }
            })
        }
    }, [scene, model.name])


  return (
   <Canvas>
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <OrbitControls enableZoom={false} />
    <Environment preset="city" />
    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group>
            <primitive
                object={scene.scene}
                scale={model.scale}
                rotation={model.rotation}
                position={[0, 0, 0]}
            />
        </group>
    </Float>
   </Canvas>
  )
}

export default TechIcon