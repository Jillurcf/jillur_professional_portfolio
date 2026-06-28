
"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function NeuralParticles() {
  const points = useRef<THREE.Points>(null);

  const [positions] = useState(() => {
    const count = 1800;
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      array[i * 3] =
        (Math.random() - 0.5) * 10;

      array[i * 3 + 1] =
        (Math.random() - 0.5) * 10;

      array[i * 3 + 2] =
        (Math.random() - 0.5) * 10;
    }

    return array;
  });


  useFrame(({ clock }) => {
    if (!points.current) return;

    points.current.rotation.y =
      clock.elapsedTime * 0.05;

    points.current.rotation.x =
      Math.sin(clock.elapsedTime * 0.2) * 0.1;
  });


  return (
    <Points
      ref={points}
      positions={positions}
      stride={3}
    >
      <PointMaterial
        transparent
        color="#22c55e"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}