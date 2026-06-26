const projects=[

{
title:"Food Delivery App",
desc:"Home food marketplace mobile application",
tech:"React Native, Expo, Node.js"
},

{
title:"Alarm Application",
desc:"Background alarm scheduling app",
tech:"React Native Native Modules"
},

{
title:"Quiz Management System",
desc:"Full stack quiz platform",
tech:"React, Node.js, MySQL"
}

]


export default function Projects(){

return(

<section id="projects"
className="py-20 bg-gray-950 text-white"
>


<div className="max-w-6xl mx-auto">


<h2 className="text-3xl font-bold">
Projects
</h2>


<div className="
grid md:grid-cols-3
gap-6 mt-10
">


{
projects.map(project=>(


<div
key={project.title}
className="
bg-gray-900
p-6
rounded-xl
"
>

<h3 className="text-xl font-bold">
{project.title}
</h3>


<p className="text-gray-400 mt-3">
{project.desc}
</p>


<p className="text-green-400 mt-4">
{project.tech}
</p>


</div>


))
}


</div>


</div>


</section>

)

}