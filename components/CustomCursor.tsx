"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function CustomCursor(){

const [position,setPosition] = useState({
x:0,
y:0
});


useEffect(()=>{


const move = (e:MouseEvent)=>{

setPosition({
x:e.clientX,
y:e.clientY
});

};


window.addEventListener(
"mousemove",
move
);


return()=>{

window.removeEventListener(
"mousemove",
move
);

};


},[]);



return (

<motion.div

className="
fixed
top-0
left-0
w-8
h-8
rounded-full
border
border-green-400
pointer-events-none
z-[9999]
"

animate={{

x:position.x-16,

y:position.y-16

}}


transition={{

type:"spring",

stiffness:500,

damping:28

}}


/>

)

}