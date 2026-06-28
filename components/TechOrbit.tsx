

"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaRobot,
  FaCode,
} from "react-icons/fa";

import {
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiKotlin,
  SiSwift,
} from "react-icons/si";



const techs = [

  // Existing

  {
    icon:<FaReact />,
    color:"#61dafb",
    position:"top-10 left-10"
  },

  {
    icon:<FaNodeJs />,
    color:"#68a063",
    position:"top-20 right-10"
  },

  {
    icon:<SiTypescript />,
    color:"#3178c6",
    position:"bottom-20 left-5"
  },

  {
    icon:<SiMongodb />,
    color:"#47A248",
    position:"bottom-10 right-20"
  },

  {
    icon:<SiNextdotjs />,
    color:"#ffffff",
    position:"top-1/2 left-0"
  },

  {
    icon:<SiRedux />,
    color:"#764ABC",
    position:"bottom-1/2 right-0"
  },

  {
    icon:<SiTailwindcss />,
    color:"#38BDF8",
    position:"top-5 right-1/3"
  },

  {
    icon:<SiJavascript />,
    color:"#F7DF1E",
    position:"bottom-5 left-1/3"
  },


  // Added Technologies


  {
    icon:<FaJava />,
    color:"#f89820",
    position:"top-32 left-1/3"
  },


  {
    icon:<SiKotlin />,
    color:"#7F52FF",
    position:"bottom-32 right-1/3"
  },


  {
    icon:<SiSwift />,
    color:"#FA7343",
    position:"top-1/3 right-5"
  },


  {
    icon:<FaGitAlt />,
    color:"#F1502F",
    position:"bottom-5 right-1/2"
  },


  {
    icon:<FaGithub />,
    color:"#ffffff",
    position:"top-1/2 right-1/4"
  },


  {
    icon:<FaRobot />,
    color:"#22c55e",
    position:"top-5 left-1/2"
  },


  {
    icon:<FaCode />,
    color:"#38bdf8",
    position:"bottom-1/4 left-1/4"
  }


];




export default function TechOrbit(){


return (

<div
className="
absolute
inset-0
pointer-events-none
"
>


{
techs.map((tech,index)=>(


<motion.div

key={index}


className={`
absolute
${tech.position}
bg-black/70
border
border-white/10
rounded-2xl
p-4
shadow-xl
backdrop-blur-md
`}


animate={{

y:[
0,
-20,
0
],

rotate:[
0,
180,
360
]


}}


transition={{

duration:
4 + index,

repeat:Infinity,

ease:"easeInOut"

}}


style={{
color:tech.color
}}

>


{
tech.icon
}


</motion.div>


))

}


</div>

)

}