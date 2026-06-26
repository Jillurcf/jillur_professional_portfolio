"use client";

import Link from "next/link";


export default function Navbar(){

return(

<nav className="
fixed top-0 w-full 
bg-black/50 backdrop-blur
z-50
">

<div className="
max-w-6xl mx-auto
flex justify-between
items-center
py-5

">

<h1 className="text-xl font-bold text-green-400">
Jillur.dev
</h1>


<div className="space-x-6 text-white">

<Link href="#about">
About
</Link>

<Link href="#skills">
Skills
</Link>

<Link href="#projects">
Projects
</Link>

<Link href="#contact">
Contact
</Link>

</div>


</div>

</nav>

)

}