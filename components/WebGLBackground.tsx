

// "use client

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// import { useRef } from "react";
// import * as THREE from "three";


// function NeuralParticles(){

// const points = useRef<THREE.Points>(null);


// const count = 1800;


// const positions = new Float32Array(
// count * 3
// );


// for(let i=0;i<count;i++){

// positions[i*3] =
// ( Math.random()-0.5 ) * 10;


// positions[i*3+1] =
// ( Math.random()-0.5 ) * 10;


// positions[i*3+2] =
// ( Math.random()-0.5 ) * 10;

// }



// useFrame((state)=>{


// if(points.current){


// points.current.rotation.y =
// state.clock.elapsedTime * 0.05;


// points.current.rotation.x =
// Math.sin(
// state.clock.elapsedTime*0.2
// )
// *
// 0.1;


// }


// });



// return (

// <Points

// ref={points}

// positions={positions}

// >


// <PointMaterial

// transparent

// color="#22c55e"

// size={0.025}

// sizeAttenuation

// depthWrite={false}

// />


// </Points>

// )

// }



// function EnergyLines(){

// const ref =
// useRef<THREE.LineSegments>(null);



// const geometry =
// new THREE.BufferGeometry();



// const vertices =
// new Float32Array(300);



// for(let i=0;i<300;i++){

// vertices[i]=
// (Math.random()-0.5)*8;

// }


// geometry.setAttribute(
// "position",
// new THREE.BufferAttribute(
// vertices,
// 3
// )
// );



// useFrame(({clock})=>{

// if(ref.current){

// ref.current.rotation.y =
// clock.elapsedTime*0.1;

// }

// });



// return (

// <lineSegments
// ref={ref}
// geometry={geometry}
// >


// <lineBasicMaterial

// color="#2563eb"

// transparent

// opacity={0.25}

// />


// </lineSegments>

// )

// }



// export default function WebGLBackground(){

// return (

// <div
// className="
// absolute
// inset-0
// "
// >


// <Canvas

// camera={{
// position:[
// 0,
// 0,
// 5
// ]
// }}

// >


// <NeuralParticles/>

// <EnergyLines/>


// </Canvas>


// </div>

// )

// }



"use client";

import { Canvas } from "@react-three/fiber";
import NeuralParticles from "./NeuralParticles";
import EnergyLines from "./EnergyLines";
import { CodeSymbols } from "./CodeSymbols";


export default function WebGLBackground() {

  return (

    <div className="absolute inset-0 overflow-hidden">

      <Canvas

        camera={{
          position:[
            0,
            0,
            5
          ]
        }}

        dpr={[1,2]}

      >

        <NeuralParticles />

        <EnergyLines />

        <CodeSymbols />

      </Canvas>

    </div>

  );

}