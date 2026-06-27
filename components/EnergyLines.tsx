import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";


export default function EnergyLines() {

  const ref =
    useRef<THREE.LineSegments>(null);



  const geometry =
    new THREE.BufferGeometry();



  const vertices =
    new Float32Array(200);



  for (let i = 0; i < 200; i++) {

    vertices[i] =
      (Math.random() - 0.5) * 8;

  }



  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
      vertices,
      3
    )
  );



  useFrame(({ clock }) => {

    if (ref.current) {

      ref.current.rotation.y =
        clock.elapsedTime * 0.1;

    }

  });



  return (

    <lineSegments

      ref={ref}

      geometry={geometry}

    >

      <lineBasicMaterial

        color="#2563eb"

        transparent

        opacity={0.25}

      />

    </lineSegments>

  );

}