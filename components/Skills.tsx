// import {
//     FaReact,
//     FaNodeJs,
//     FaGitAlt,
//     FaDatabase
// } from "react-icons/fa";

// import {
//     SiExpo,
//     SiTypescript,
//     SiNextdotjs,
//     SiRedux,
//     SiExpress,
//     SiMongodb,
//     SiFirebase
// } from "react-icons/si";


// const skills = [
//     {
//         name: "React Native",
//         icon: FaReact
//     },
//     {
//         name: "Expo",
//         icon: SiExpo
//     },
//     {
//         name: "TypeScript",
//         icon: SiTypescript
//     },
//     {
//         name: "React.js",
//         icon: FaReact
//     },
//     {
//         name: "Next.js",
//         icon: SiNextdotjs
//     },
//     {
//         name: "Redux Toolkit",
//         icon: SiRedux
//     },
//     {
//         name: "Node.js",
//         icon: FaNodeJs
//     },
//     {
//         name: "Express.js",
//         icon: SiExpress
//     },
//     {
//         name: "MongoDB",
//         icon: SiMongodb
//     },
//     {
//         name: "REST API",
//         icon: FaDatabase
//     },
//     {
//         name: "Firebase",
//         icon: SiFirebase
//     },
//     {
//         name: "Git",
//         icon: FaGitAlt
//     }
// ];


// export default function Skills(){

// return(

// <section
// id="skills"
// className="py-20 bg-black text-white"
// >

// <div className="max-w-5xl mx-auto px-5">

// <h2 className="text-3xl font-bold">
// Technical Skills
// </h2>


// <div
// className="
// grid
// grid-cols-2
// md:grid-cols-4
// gap-5
// mt-10
// "
// >


// {
// skills.map((skill)=>{

// const Icon = skill.icon;

// return (

// <div
// key={skill.name}
// className="
// border
// border-gray-700
// p-5
// rounded-lg
// flex
// flex-col
// items-center
// justify-center
// gap-3
// hover:border-green-500
// transition
// duration-300
// hover:-translate-y-1
// "
// >

// <Icon
// size={40}
// className="text-green-400"
// />


// <span className="text-sm md:text-base">
// {skill.name}
// </span>


// </div>

// )

// })
// }


// </div>


// </div>


// </section>

// )

// }


"use client";

import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaDatabase,
    FaJava,
    FaGithub,
    FaAndroid,
    FaApple,
    FaRobot,
    FaCode
} from "react-icons/fa";


import {
    SiExpo,
    SiTypescript,
    SiJavascript,
    SiNextdotjs,
    SiRedux,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiTailwindcss,
    SiKotlin,
    SiSwift,
    SiPostman,
    SiStripe,
    SiGooglemaps,
    SiMui,
    SiJsonwebtokens
} from "react-icons/si";



const skills = [

    // Existing Skills

    {
        name: "React Native",
        icon: FaReact
    },

    {
        name: "Expo",
        icon: SiExpo
    },

    {
        name: "TypeScript",
        icon: SiTypescript
    },

    {
        name: "React.js",
        icon: FaReact
    },

    {
        name: "Next.js",
        icon: SiNextdotjs
    },

    {
        name: "Redux Toolkit",
        icon: SiRedux
    },

    {
        name: "Node.js",
        icon: FaNodeJs
    },

    {
        name: "Express.js",
        icon: SiExpress
    },

    {
        name: "MongoDB",
        icon: SiMongodb
    },

    {
        name: "REST API",
        icon: FaDatabase
    },

    {
        name: "Firebase",
        icon: SiFirebase
    },

    {
        name: "Git",
        icon: FaGitAlt
    },


    // Added Skills


    {
        name: "JavaScript",
        icon: SiJavascript
    },

    {
        name: "Java",
        icon: FaJava
    },

    {
        name: "Kotlin",
        icon: SiKotlin
    },

    {
        name: "Swift",
        icon: SiSwift
    },


    {
        name: "Android",
        icon: FaAndroid
    },


    {
        name: "iOS",
        icon: FaApple
    },


    {
        name: "Tailwind CSS",
        icon: SiTailwindcss
    },


    {
        name: "Material UI",
        icon: SiMui
    },


    {
        name: "Stripe Payment",
        icon: SiStripe
    },


    {
        name: "Google Maps API",
        icon: SiGooglemaps
    },


    {
        name: "JWT Authentication",
        icon: SiJsonwebtokens
    },


    {
        name: "GitHub",
        icon: FaGithub
    },


    {
        name: "Postman",
        icon: SiPostman
    },


    {
        name: "AI & Automation",
        icon: FaRobot
    },


    {
        name: "System Design & DSA",
        icon: FaCode
    }

];



export default function Skills(){

return(

<section
id="skills"
className="
py-20
bg-black
text-white
"
>

<div
className="
max-w-6xl
mx-auto
px-5
"
>


<h2
className="
text-2xl
sm:text-3xl
font-bold
"
>
Technical Skills
</h2>



<div

className="
grid
grid-cols-2
sm:grid-cols-3
md:grid-cols-4
lg:grid-cols-5
gap-4
sm:gap-5
mt-10
"

>


{
skills.map((skill)=>{


const Icon = skill.icon;


return(


<div

key={skill.name}

className="
border
border-gray-700
p-4
sm:p-5
rounded-lg
flex
flex-col
items-center
justify-center
gap-3
hover:border-green-500
transition
duration-300
hover:-translate-y-1
"

>


<Icon

size={35}

className="
text-green-400
"

/>



<span

className="
text-xs
sm:text-sm
md:text-base
text-center
"

>

{skill.name}

</span>


</div>


)


})

}


</div>


</div>


</section>

)

}