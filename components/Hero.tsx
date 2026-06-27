"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import WebGLBackground from "./WebGLBackground";
import TechOrbit from "./TechOrbit";
import useMousePosition from "@/hooks/useMousePosition";


export default function Hero() {
  const mouse =
    useMousePosition();

  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };


  return (

    <section
      className="
relative
min-h-screen
overflow-hidden
bg-black
text-white
flex
items-center
"
    >


      {/* PARTICLE BACKGROUND */}

      <div className="
absolute
inset-0
z-0
">

        {/* <Particles

          id="tsparticles"

          init={particlesInit}

          options={{

            background: {
              color: {
                value: "#000000"
              }
            },


            fpsLimit: 60,


            particles: {


              number: {
                value: 80,
                density: {
                  enable: true,
                  area: 900
                }
              },


              color: {
                value: [
                  "#22c55e",
                  "#3b82f6",
                  "#a855f7"
                ]
              },


              links: {
                enable: true,
                distance: 150,
                color: "#22c55e",
                opacity: .2,
                width: 1
              },


              move: {
                enable: true,
                speed: 1,
                direction: "none",
                outModes: {
                  default: "bounce"
                }
              },


              size: {
                value: {
                  min: 1,
                  max: 4
                }
              },


              opacity: {
                value: {
                  min: .2,
                  max: .7
                }
              }


            },


            detectRetina: true

          }}

        /> */}
        <WebGLBackground />

      </div>





      {/* Animated Background Glow */}

      <motion.div

        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0]
        }}

        transition={{
          duration: 10,
          repeat: Infinity
        }}

        className="
absolute
top-20
left-20
w-96
h-96
bg-green-500
rounded-full
blur-[150px]
opacity-20
z-0
"

      />



      {/* <motion.div

        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0]
        }}

        transition={{
          duration: 12,
          repeat: Infinity
        }}

        className="
absolute
bottom-20
right-20
w-96
h-96
bg-blue-500
rounded-full
blur-[150px]
opacity-20
z-0
"

      /> */}

      <motion.div

        className="
relative
flex
justify-center
"

        animate={{

          rotateY:
            mouse.x * 15,

          rotateX:
            mouse.y * -15

        }}

        transition={{

          type: "spring",

          stiffness: 80

        }}

        style={{

          transformStyle:
            "preserve-3d"

        }}

      ></motion.div>




      {/* CONTENT */}

      <div

        className="
relative
z-10
max-w-6xl
mx-auto
px-0
grid
md:grid-cols-2
gap-10
items-center
"

      >
        {/* LEFT SIDE Element */}


        <motion.div

          initial={{
            opacity: 0,
            x: -60
          }}

          animate={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: .8
          }}

        >



          <p
            className="
text-green-400
font-semibold
mb-4
"
          >

            Hello, I'm

          </p>



          <h1

            className="
text-5xl
md:text-7xl
font-bold
leading-tight
"

          >

            Jillur

            <br />


            <span
              className="
text-green-400
"
            >
              Rahman
            </span>


          </h1>



          <h2

            className="
text-2xl
mt-5
text-gray-300
"

          >

            React Native Specialist

            <br />

            Full Stack Developer

          </h2>




          <p

            className="
mt-6
text-gray-400
max-w-xl
leading-8
"

          >

            I design and develop scalable mobile
            applications for Android and iOS using
            React Native, Expo, TypeScript and
            modern backend technologies.

            <br />

            Focused on performance, clean architecture
            and production-ready solutions.

          </p>





          {/* BUTTONS */}


          <div
            className="
flex
gap-4
mt-8
"
          >


            <a

              href="#projects"

              className="
bg-green-500
text-black
px-7
py-3
rounded-xl
font-semibold
hover:scale-105
transition
"

            >

              View My Apps

            </a>



            <a

              href="/react_native_developer.pdf"

              download

              className="
border
border-gray-700
px-7
py-3
rounded-xl
hover:border-green-400
transition
"

            >

              Resume

            </a>


          </div>







          {/* STATS */}

          <div

            className="
grid
grid-cols-3
gap-5
mt-12
"

          >


            <div>

              <h3 className="
text-3xl
font-bold
text-green-400
">

                5+

              </h3>

              <p className="
text-gray-400
text-sm
">

                Years Experience

              </p>

            </div>




            <div>

              <h3 className="
text-3xl
font-bold
text-green-400
">

                15+

              </h3>


              <p className="
text-gray-400
text-sm
">

                Projects

              </p>

            </div>




            <div>

              <h3 className="
text-3xl
font-bold
text-green-400
">

                2

              </h3>


              <p className="
text-gray-400
text-sm
">

                Platforms

              </p>


            </div>



          </div>



        </motion.div>










        {/* RIGHT SIDE IMAGE */}



        <motion.div

          initial={{
            opacity: 0,
            scale: .7
          }}

          animate={{
            opacity: 1,
            scale: 1
          }}

          transition={{
            duration: 1
          }}


          className="
relative
flex
justify-center
"

        >





          {/* ROTATING RING */}


          <motion.div

            animate={{
              rotate: 360
            }}

            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}

            className="
absolute
w-[420px]
h-[420px]
rounded-full
border
border-green-500/30
"

          />



          <TechOrbit />
          <Image
            src="/profilepic1.png"
            width={480}
            height={480}
            alt="Jillur Rahman"
            className="
    relative
    z-50
    w-[400px]
    h-[400px]
    rounded-full
    border-4
    border-green-400
    shadow-2xl
    object-cover
  "
          />






          {/* FLOATING ICONS */}


          <motion.div

            animate={{
              y: [0, -20, 0]
            }}

            transition={{
              duration: 3,
              repeat: Infinity
            }}

            className="
absolute
top-10
right-10
bg-gray-900
p-4
rounded-xl
z-20
"

          >

            <FaReact
              size={35}
              color="#61dafb"
            />


          </motion.div>






          <motion.div

            animate={{
              y: [0, 20, 0]
            }}

            transition={{
              duration: 3,
              repeat: Infinity
            }}

            className="
absolute
bottom-20
left-10
bg-gray-900
p-4
rounded-xl
z-20
"

          >


            <SiTypescript
              size={35}
            />


          </motion.div>





        </motion.div>




      </div>



    </section>


  );
}


// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// import {
//   FaReact,
//   FaNodeJs,
//   FaGithub,
//   FaLinkedin
// } from "react-icons/fa";

// import {
//   SiTypescript,
//   SiMongodb,
//   SiNextdotjs
// } from "react-icons/si";


// export default function Hero(){

// return(

// <section
// className="
// min-h-screen
// bg-black
// text-white
// flex
// items-center
// overflow-hidden
// "
// >


// <div
// className="
// max-w-7xl
// mx-auto
// px-6
// grid
// md:grid-cols-2
// gap-10
// items-center
// "
// >


// {/* LEFT */}

// <motion.div

// initial={{
// opacity:0,
// x:-60
// }}

// animate={{
// opacity:1,
// x:0
// }}

// transition={{
// duration:.8
// }}

// >


// <p
// className="
// text-green-400
// font-semibold
// mb-4
// "
// >

// Hello, I'm

// </p>



// <h1
// className="
// text-5xl
// md:text-7xl
// font-bold
// leading-tight
// "
// >

// Jillur
// <br/>

// <span
// className="
// text-green-400
// "
// >
// Rahman
// </span>

// </h1>



// <h2
// className="
// text-2xl
// mt-5
// text-gray-300
// "
// >

// React Native Specialist
// <br/>

// Full Stack Developer

// </h2>



// <p
// className="
// mt-6
// text-gray-400
// max-w-xl
// leading-8
// "
// >

// I design and develop scalable mobile applications
// for Android and iOS with React Native, Expo,
// TypeScript and modern backend technologies.

// Focused on performance, clean architecture
// and production-ready solutions.

// </p>



// {/* Buttons */}

// <div
// className="
// flex
// gap-4
// mt-8
// "
// >


// <a
// href="#projects"
// className="
// bg-green-500
// text-black
// px-7
// py-3
// rounded-xl
// font-semibold
// hover:scale-105
// transition
// "
// >

// View My Apps

// </a>



// <a
// href="/resume.pdf"
// download

// className="
// border
// border-gray-700
// px-7
// py-3
// rounded-xl
// hover:border-green-400
// transition
// "
// >

// Resume

// </a>


// </div>



// {/* Stats */}

// <div
// className="
// grid
// grid-cols-3
// gap-5
// mt-12
// "
// >


// <div>
// <h3 className="text-3xl font-bold text-green-400">
// 2+
// </h3>

// <p className="text-gray-400 text-sm">
// Years Experience
// </p>

// </div>



// <div>

// <h3 className="text-3xl font-bold text-green-400">
// 15+
// </h3>

// <p className="text-gray-400 text-sm">
// Projects
// </p>

// </div>



// <div>

// <h3 className="text-3xl font-bold text-green-400">
// 2
// </h3>

// <p className="text-gray-400 text-sm">
// Platforms
// </p>

// </div>


// </div>



// </motion.div>





// {/* RIGHT */}

// <motion.div

// initial={{
// opacity:0,
// scale:.7
// }}

// animate={{
// opacity:1,
// scale:1
// }}

// transition={{
// duration:1
// }}

// className="
// flex
// justify-center
// relative
// "

// >


// {/* Animated Circle */}

// <motion.div

// animate={{
// rotate:360
// }}

// transition={{
// duration:20,
// repeat:Infinity,
// ease:"linear"
// }}

// className="
// absolute
// w-[420px]
// h-[420px]
// rounded-full
// border
// border-green-500/30
// "

// />



// <Image

// src="/profile.png"

// width={380}

// height={380}

// alt="Jillur Rahman"

// className="
// rounded-full
// border-4
// border-green-400
// relative
// z-10
// shadow-2xl
// "

// />



// {/* Floating Tech */}

// <motion.div

// animate={{
// y:[0,-15,0]
// }}

// transition={{
// duration:3,
// repeat:Infinity
// }}

// className="
// absolute
// top-10
// right-10
// bg-gray-900
// p-4
// rounded-xl
// "
// >

// <FaReact
// size={35}
// color="#61dafb"
// />

// </motion.div>



// <motion.div

// animate={{
// y:[0,15,0]
// }}

// transition={{
// duration:3,
// repeat:Infinity
// }}

// className="
// absolute
// bottom-20
// left-10
// bg-gray-900
// p-4
// rounded-xl
// "
// >

// <SiTypescript
// size={35}
// />

// </motion.div>



// </motion.div>


// </div>


// </section>


// )

// }