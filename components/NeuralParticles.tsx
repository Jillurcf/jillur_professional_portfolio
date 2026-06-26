import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";


export default function NeuralParticles() {

  const points = useRef<THREE.Points>(null);

  const count = 1800;


  const positions = new Float32Array(
    count * 3
  );


  for (let i = 0; i < count; i++) {

    positions[i * 3] =
      (Math.random() - 0.5) * 10;


    positions[i * 3 + 1] =
      (Math.random() - 0.5) * 10;


    positions[i * 3 + 2] =
      (Math.random() - 0.5) * 10;

  }



  useFrame(({ clock }) => {

    if (points.current) {

      points.current.rotation.y =
        clock.elapsedTime * 0.05;


      points.current.rotation.x =
        Math.sin(
          clock.elapsedTime * 0.2
        ) * 0.1;

    }

  });



  return (

    <Points

      ref={points}

      positions={positions}

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