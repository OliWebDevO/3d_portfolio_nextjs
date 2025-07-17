'use client'

import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { Room } from "./Room"
import HeroLights from "./HeroLights"
import Particles from "./Particles"

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return isMobile ? (
    <img
      src="/images/hero-mobile.png"
      alt="Room Model"
      style={{ width: "100%", height: "auto", marginTop: "15rem" }}
    />
  ) : (
    <Canvas 
      camera={{position : [0,0,15], fov: 45}}
    >
      <HeroLights/>
      <Particles count={7}/>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group
        scale={1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room/>
      </group>
    </Canvas>
  )
}

export default HeroExperience