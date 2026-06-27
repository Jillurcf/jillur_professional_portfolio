"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import ProjectGallery from "./ProjectGallery";


const projects = [

    {
        title: "Deligo Rider",

        images: [
            "/project/Deligo_live.png",
            "/project/Deligo_live1.png",
            "/project/Deligo_live2.png",
            // "/project/Deligo_live.png",
        ],

        video: "/videos/deligo.mp4",

        desc:
            "Real-world rider application with location tracking, navigation, and optimized delivery workflow.",

        tech:
            "React Native, TypeScript, Firebase, Google Maps",

        features: [
            "Real-time location tracking",
            "Haversine distance calculation",
            "Performance optimization",
            "Scalable mobile architecture"
        ],

        live: "https://your-live-link.com",

        github: "https://github.com/yourusername/deligo"
    },



    {
        title: "Terminal APK",

        image: "/projects/terminal.png",

        video: "/videos/terminal.mp4",

        desc:
            "Tap-to-Pay contactless payment application enabling users to receive payments without external card readers.",

        tech:
            "React Native CLI, Stripe",

        features: [
            "Secure payment workflow",
            "Stripe integration",
            "Authentication system"
        ],

        live: "https://your-live-link.com",

        github: "https://github.com/yourusername/terminal"

    },



    {
        title: "PawsAndBuy",

        image: "/projects/paws.png",

        video: "/videos/paws.mp4",

        desc:
            "Pet marketplace application connecting sellers and buyers.",

        tech:
            "React Native CLI, Stripe",

        features: [
            "Seller account",
            "Product management",
            "Payment integration"
        ],

        live: "https://your-live-link.com",

        github: "https://github.com/yourusername/paws"

    }

];





export default function Projects() {


    return (

        <section
            id="projects"
            className="
py-24
bg-gray-950
text-white
"
        >


            <div
                className="
max-w-7xl
mx-auto
px-6
"
            >


                <h2
                    className="
text-4xl
font-bold
"
                >
                    Featured Projects
                </h2>




                <div
                    className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-12
"
                >


                    {
                        projects.map((project, index) => (


                            <motion.div

                                key={project.title}

                                whileHover={{
                                    y: -10
                                }}

                                className="
bg-gray-900
rounded-2xl
overflow-hidden
border
border-gray-800
"

                            >



                                {/* Project Image */}

                                {/* <div
                                    className="
relative
h-52
"
                                >


                                    <Image

                                        src={project.image}

                                        fill

                                        alt={project.title}

                                        className="
object-cover
"

                                    />


                                </div> */}

                                <ProjectGallery images={project.images} />



                                {/* Content */}

                                <div
                                    className="
p-6
"
                                >


                                    <h3
                                        className="
text-2xl
font-bold
text-green-400
"
                                    >

                                        {project.title}

                                    </h3>



                                    <p
                                        className="
text-gray-400
mt-3
"
                                    >

                                        {project.desc}

                                    </p>




                                    <p
                                        className="
mt-4
text-sm
text-green-300
"
                                    >

                                        {project.tech}

                                    </p>




                                    <ul
                                        className="
mt-4
space-y-2
text-sm
text-gray-400
"
                                    >

                                        {
                                            project.features.map(item => (

                                                <li key={item}>
                                                    ✓ {item}
                                                </li>

                                            ))
                                        }

                                    </ul>





                                    {/* Buttons */}

                                    <div
                                        className="
flex
gap-3
mt-6
"
                                    >


                                        <a

                                            href={project.live}

                                            target="_blank"

                                            className="
flex
items-center
gap-2
bg-green-500
text-black
px-4
py-2
rounded-lg
text-sm
font-semibold
"
                                        >

                                            <FaExternalLinkAlt />

                                            Live

                                        </a>




                                        <a

                                            href={project.github}

                                            target="_blank"

                                            className="
flex
items-center
gap-2
border
border-gray-700
px-4
py-2
rounded-lg
text-sm
"
                                        >

                                            <FaGithub />

                                            Github

                                        </a>


                                    </div>




                                    {/* Video */}

                                    {
                                        project.video &&

                                        <a

                                            href={project.video}

                                            target="_blank"

                                            className="
mt-5
flex
items-center
gap-2
text-blue-400
text-sm
"
                                        >

                                            <FaPlay />

                                            Watch Demo

                                        </a>

                                    }



                                </div>



                            </motion.div>


                        ))
                    }



                </div>


            </div>


        </section>

    )

}