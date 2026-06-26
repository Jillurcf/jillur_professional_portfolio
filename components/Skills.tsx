const skills=[

"React Native",
"Expo",
"TypeScript",
"React.js",
"Next.js",
"Redux Toolkit",
"Node.js",
"Express.js",
"MongoDB",
"REST API",
"Firebase",
"Git"

]


export default function Skills(){

return(

<section id="skills"
className="py-20 bg-black text-white"
>

<div className="max-w-5xl mx-auto">

<h2 className="text-3xl font-bold">
Technical Skills
</h2>


<div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
mt-10
">


{
skills.map(skill=>(

<div
key={skill}
className="
border
border-gray-700
p-4
rounded-lg
text-center
hover:border-green-500
"
>

{skill}

</div>

))
}


</div>


</div>


</section>

)

}