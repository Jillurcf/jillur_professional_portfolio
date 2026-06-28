
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaReact,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiTypescript,
} from "react-icons/si";

import WebGLBackground from "./WebGLBackground";
import TechOrbit from "./TechOrbit";
import useMousePosition from "@/hooks/useMousePosition";


export default function Hero() {

  const mouse = useMousePosition();


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
      py-20
      "
    >


      {/* Background */}

      <div
        className="
        absolute
        inset-0
        z-0
        "
      >
        <WebGLBackground />
      </div>



      {/* Glow */}

      <motion.div

        animate={{
          x:[0,80,0],
          y:[0,-50,0]
        }}

        transition={{
          duration:10,
          repeat:Infinity
        }}

        className="
        absolute
        top-20
        left-10
        sm:left-20
        w-60
        sm:w-96
        h-60
        sm:h-96
        bg-green-500
        rounded-full
        blur-[120px]
        opacity-20
        z-0
        "
      />



      {/* Content */}

      <div

        className="
        relative
        z-10
        max-w-6xl
        w-full
        mx-auto
        px-5
        sm:px-8
        grid
        grid-cols-1
        md:grid-cols-2
        gap-12
        items-center
        "
      >



        {/* LEFT CONTENT */}


        <motion.div

          initial={{
            opacity:0,
            x:-50
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:.8
          }}

        >


          <p
            className="
            text-green-400
            font-semibold
            mb-4
            text-sm
            sm:text-base
            "
          >
            Hello, I'm
          </p>



          <h1

            className="
            text-4xl
            sm:text-5xl
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
            text-xl
            sm:text-2xl
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
            leading-7
            max-w-xl
            text-sm
            sm:text-base
            "

          >

            I design and develop scalable Android and iOS
            applications using React Native, Expo,
            TypeScript and modern backend technologies.

            <br />

            Focused on performance, clean architecture
            and production-ready solutions.

          </p>




          {/* Buttons */}

          <div

            className="
            flex
            flex-wrap
            gap-3
            mt-8
            "

          >


            <a
              href="#projects"
              className="
              bg-green-500
              text-black
              px-4
              py-2
              rounded-xl
              text-sm
              sm:text-base
              font-semibold
              hover:scale-105
              transition
              "
            >
              View Apps
            </a>



            <a

              href="/react_native_developer.pdf"

              download

              className="
              border
              border-gray-700
              px-4
              py-2
              rounded-xl
              text-sm
              sm:text-base
              hover:border-green-400
              transition
              "

            >
              Resume
            </a>




            <a

              href="https://github.com/your-github"

              target="_blank"

              rel="noopener noreferrer"

              className="
              flex
              items-center
              gap-2
              border
              border-gray-700
              px-4
              py-2
              rounded-xl
              text-sm
              hover:border-green-400
              "

            >

              <FaGithub />

              GitHub

            </a>




            <a

              href="https://linkedin.com/in/your-linkedin"

              target="_blank"

              rel="noopener noreferrer"

              className="
              flex
              items-center
              gap-2
              border
              border-gray-700
              px-4
              py-2
              rounded-xl
              text-sm
              hover:border-green-400
              "

            >

              <FaLinkedin />

              LinkedIn

            </a>


          </div>




          {/* Stats */}


          <div

            className="
            grid
            grid-cols-3
            gap-4
            mt-10
            "

          >


            {[
              ["3+", "Years Experience"],
              ["15+", "Projects"],
              ["2", "Platforms"]
            ].map(([number,title])=>(

              <div key={title}>

                <h3
                  className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-green-400
                  "
                >
                  {number}
                </h3>


                <p
                  className="
                  text-gray-400
                  text-xs
                  sm:text-sm
                  "
                >
                  {title}
                </p>

              </div>

            ))}


          </div>


        </motion.div>






        {/* IMAGE SECTION */}


        <motion.div

          initial={{
            opacity:0,
            scale:.7
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:1
          }}


          className="
          relative
          flex
          justify-center
          "

        >



          {/* Ring */}

          <motion.div

            animate={{
              rotate:360
            }}

            transition={{
              duration:20,
              repeat:Infinity,
              ease:"linear"
            }}

            className="
            absolute
            w-[260px]
            h-[260px]
            sm:w-[360px]
            sm:h-[360px]
            md:w-[420px]
            md:h-[420px]
            rounded-full
            border
            border-green-500/30
            "

          />



          <TechOrbit />



          <Image

            src="/profilepic.jpg"

            width={480}

            height={480}

            alt="Jillur Rahman"

            className="
            relative
            z-10
            w-[240px]
            h-[240px]
            sm:w-[320px]
            sm:h-[320px]
            md:w-[400px]
            md:h-[400px]
            rounded-full
            border-4
            border-green-400
            object-cover
            shadow-2xl
            "

          />





          {/* Floating Icons */}


          <motion.div

            animate={{
              y:[0,-20,0]
            }}

            transition={{
              duration:3,
              repeat:Infinity
            }}

            className="
            absolute
            top-5
            right-5
            sm:right-10
            bg-gray-900
            p-3
            rounded-xl
            z-20
            "

          >

            <FaReact
              size={30}
              color="#61dafb"
            />

          </motion.div>





          <motion.div

            animate={{
              y:[0,20,0]
            }}

            transition={{
              duration:3,
              repeat:Infinity
            }}

            className="
            absolute
            bottom-10
            left-5
            sm:left-10
            bg-gray-900
            p-3
            rounded-xl
            z-20
            "

          >

            <SiTypescript size={30}/>

          </motion.div>



        </motion.div>



      </div>


    </section>

  );
}