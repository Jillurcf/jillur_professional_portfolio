import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaDatabase
} from "react-icons/fa";

import {
    SiExpo,
    SiTypescript,
    SiNextdotjs,
    SiRedux,
    SiExpress,
    SiMongodb,
    SiFirebase
} from "react-icons/si";


const skills = [
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
    }
];


export default function Skills(){

return(

<section
id="skills"
className="py-20 bg-black text-white"
>

<div className="max-w-5xl mx-auto px-5">

<h2 className="text-3xl font-bold">
Technical Skills
</h2>


<div
className="
grid
grid-cols-2
md:grid-cols-4
gap-5
mt-10
"
>


{
skills.map((skill)=>{

const Icon = skill.icon;

return (

<div
key={skill.name}
className="
border
border-gray-700
p-5
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
size={40}
className="text-green-400"
/>


<span className="text-sm md:text-base">
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