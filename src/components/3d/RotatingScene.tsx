'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Torus } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = 0.5
      meshRef.current.rotation.y += delta * 0.8
      // meshRef.current.rotation.z = 0.8
    }
  })

  return (
    <Box ref={meshRef} args={[1, 1, 1]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#ff6b6b" />
    </Box>
  )
}

function RotatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3
      meshRef.current.rotation.z += delta * 0.6
    }
  })

  return (
    <Sphere ref={meshRef} args={[0.8, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#4ecdc4" />
    </Sphere>
  )
}

function RotatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <Torus ref={meshRef} args={[0.8, 0.3, 16, 32]} position={[2, 0, 0]}>
      <meshStandardMaterial color="#45b7d1" />
    </Torus>
  )
}

export default function RotatingScene() {
  return (
    <div className="bg-red-500/10 w-full h-full">
      <Canvas
        // change camera position
        camera={{ position: [0, 0, 5], fov: 20 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[0, -10, -10]} intensity={1} color="#ff6b6b" />
        <pointLight position={[10, -10, -10]} intensity={1} color="#4ecdc4" />

        {/* Rotating objects */}
        <RotatingCube />
        {/* <RotatingSphere /> */}
        {/* <RotatingTorus /> */}

        {/* Controls for user interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
} 