'use client'

import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { Room } from "./Room"
import HeroLights from "./HeroLights"
import Particles from "./Particles"

const HeroExperience = () => {

    // const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    

  return (
    <Canvas 
      camera={{position : [0,0,15], fov: 45}}
      style={isMobile ? { pointerEvents: "none" } : {}}
    >
        <HeroLights/>
        <Particles count={7}/>
        <OrbitControls
        enablePan={false}
        // enableZoom={!isTablet || !isMobile}
        enableZoom={false}
        enableRotate={!isMobile}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        />
        {/* <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="teal" />
        </mesh> */}
        <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        >
        <Room/>
        </group>
    </Canvas>
  )
}

export default HeroExperience