"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type * as THREE from "three";

const NUM_NODES = 60;
const SPHERE_RADIUS = 2.8;

function randomInSphere(radius: number) {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = radius * Math.cbrt(Math.random() * 0.7 + 0.3);
  return [
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi),
  ] as const;
}

function NetworkSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: NUM_NODES }, () => ({
        pos: randomInSphere(SPHERE_RADIUS),
        size: 0.02 + Math.random() * 0.04,
      })),
    [],
  );

  const edges = useMemo(() => {
    const result: [number, number][] = [];
    for (let i = 0; i < NUM_NODES; i++) {
      for (let j = i + 1; j < NUM_NODES; j++) {
        if (Math.random() < 0.06) {
          result.push([i, j]);
        }
      }
    }
    return result;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={`node-${i}`} position={node.pos}>
          <sphereGeometry args={[node.size, 8, 8]} />
          <meshPhysicalMaterial
            color="#1e40af"
            transparent
            opacity={0.6 + Math.random() * 0.3}
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>
      ))}

      {edges.map(([i, j], idx) => {
        const start = nodes[i].pos;
        const end = nodes[j].pos;
        const mid: [number, number, number] = [
          (start[0] + end[0]) / 2,
          (start[1] + end[1]) / 2,
          (start[2] + end[2]) / 2,
        ];
        const length = Math.sqrt(
          (end[0] - start[0]) ** 2 +
            (end[1] - start[1]) ** 2 +
            (end[2] - start[2]) ** 2,
        );
        const dir: [number, number, number] = [
          (end[0] - start[0]) / length,
          (end[1] - start[1]) / length,
          (end[2] - start[2]) / length,
        ];
        return (
          <mesh
            key={`edge-${idx}`}
            position={mid}
            rotation={[
              Math.PI / 2,
              0,
              Math.atan2(dir[1], dir[0]),
            ]}
          >
            <cylinderGeometry args={[0.005, 0.005, length, 4]} />
            <meshPhysicalMaterial
              color="#0ea5e9"
              transparent
              opacity={0.2 + Math.random() * 0.15}
              roughness={0.4}
              metalness={0.2}
            />
          </mesh>
        );
      })}

      <mesh>
        <sphereGeometry args={[SPHERE_RADIUS * 0.25, 24, 24]} />
        <meshPhysicalMaterial
          color="#1e40af"
          transparent
          opacity={0.06}
          roughness={0.1}
          metalness={0.5}
          envMapIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

export function HeroNetwork() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.4} />
        <directionalLight position={[-5, -3, 2]} intensity={0.2} />
        <NetworkSphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
