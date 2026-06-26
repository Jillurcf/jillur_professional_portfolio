"use client";

import { useEffect, useState } from "react";


export default function useMousePosition(){

const [mouse,setMouse]=useState({
x:0,
y:0
});


useEffect(()=>{


const move=(e:MouseEvent)=>{


setMouse({

x:
(e.clientX /
window.innerWidth -
0.5),


y:
(e.clientY /
window.innerHeight -
0.5)

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



return mouse;

}