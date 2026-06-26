
// "use client";

// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { shaderMaterial } from "@react-three/drei";
// import * as THREE from "three";
// import { useRef } from "react";


// const FluidMaterial = shaderMaterial(

// {
//   uTime:0,
//   uMouse:new THREE.Vector2(0,0),
//   uColor1:new THREE.Color("#22c55e"),
//   uColor2:new THREE.Color("#2563eb"),
// },



// // Vertex Shader

// `

// uniform float uTime;
// uniform vec2 uMouse;

// varying vec2 vUv;
// varying float vElevation;


// float wave(
// vec2 position
// ){

// return sin(
// position.x * 3.0 +
// uTime
// )
// *
// 0.15
// +
// cos(
// position.y * 4.0 +
// uTime*0.7
// )
// *
// 0.12;

// }



// void main(){

// vUv = uv;


// vec3 pos = position;


// float elevation =
// wave(pos.xy);


// pos.z += elevation;


// pos.x +=
// uMouse.x *
// 0.15;

// pos.y +=
// uMouse.y *
// 0.15;


// vElevation =
// elevation;


// gl_Position =
// projectionMatrix *
// modelViewMatrix *
// vec4(
// pos,
// 1.0
// );


// }

// `,



// // Fragment Shader

// `

// uniform float uTime;

// uniform vec3 uColor1;
// uniform vec3 uColor2;


// varying vec2 vUv;
// varying float vElevation;



// void main(){


// float mixStrength =
// vUv.y +
// vElevation;


// vec3 color =
// mix(
// uColor1,
// uColor2,
// mixStrength
// );



// float glow =
// sin(
// vUv.x*15.0+
// uTime
// )
// *0.15;


// color += glow;



// gl_FragColor =
// vec4(
// color,
// 0.75
// );



// }

// `

// );



// function FluidWave(){


// const material =
// useRef<any>();


// const {pointer}=useThree();



// useFrame(({clock})=>{


// if(material.current){


// material.current.uTime =
// clock.elapsedTime;


// material.current.uMouse.set(
// pointer.x,
// pointer.y
// );


// }


// });



// return (

// <mesh
// rotation={[
// -0.25,
// 0,
// 0
// ]}
// >


// <planeGeometry

// args={[
// 8,
// 8,
// 250,
// 250
// ]}

// />


// <primitive

// object={
// new FluidMaterial()
// }

// ref={
// material
// }

// />


// </mesh>

// )

// }




// export default function WebGLBackground(){


// return (

// <div

// className="
// absolute
// inset-0
// overflow-hidden
// "

// >


// <Canvas

// camera={{
// position:[
// 0,
// 0,
// 3
// ]
// }}


// dpr={[1,2]}


// >


// <FluidWave/>


// </Canvas>


// </div>


// )

// }


"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";


function NeuralParticles(){

const points = useRef<THREE.Points>(null);


const count = 1800;


const positions = new Float32Array(
count * 3
);


for(let i=0;i<count;i++){

positions[i*3] =
( Math.random()-0.5 ) * 10;


positions[i*3+1] =
( Math.random()-0.5 ) * 10;


positions[i*3+2] =
( Math.random()-0.5 ) * 10;

}



useFrame((state)=>{


if(points.current){


points.current.rotation.y =
state.clock.elapsedTime * 0.05;


points.current.rotation.x =
Math.sin(
state.clock.elapsedTime*0.2
)
*
0.1;


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

)

}



function EnergyLines(){

const ref =
useRef<THREE.LineSegments>(null);



const geometry =
new THREE.BufferGeometry();



const vertices =
new Float32Array(300);



for(let i=0;i<300;i++){

vertices[i]=
(Math.random()-0.5)*8;

}


geometry.setAttribute(
"position",
new THREE.BufferAttribute(
vertices,
3
)
);



useFrame(({clock})=>{

if(ref.current){

ref.current.rotation.y =
clock.elapsedTime*0.1;

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

)

}



export default function WebGLBackground(){

return (

<div
className="
absolute
inset-0
"
>


<Canvas

camera={{
position:[
0,
0,
5
]
}}

>


<NeuralParticles/>

<EnergyLines/>


</Canvas>


</div>

)

}