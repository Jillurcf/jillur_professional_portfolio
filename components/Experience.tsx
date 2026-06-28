"use client";

import { motion } from "framer-motion";


const experiences = [

  {
    role: "React Native Developer",
    company: "Betopia Group",
    duration: "May 2024 - Present",
    project: "Deligo Rider (Delivery Application)",
    description:
      "Developing and maintaining scalable cross-platform mobile applications using React Native. Building production-ready features, integrating APIs, optimizing performance, and improving application stability.",
    achievements: [
      "Developed Android and iOS features using React Native and TypeScript",
      "Integrated REST APIs and collaborated with backend teams",
      "Implemented GPS tracking and distance calculation using Haversine formula",
      "Improved location accuracy and application performance",
      "Debugged Android issues and supported Play Store releases"
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "REST API",
      "Firebase",
      "GPS Services",
      "Android"
    ]
  },


  {
    role: "Software Developer",
    company: "Waymarks",
    duration: "July 2022 - March 2024",
    project: "Terminal - Contactless Payment Application",
    description:
      "Worked on mobile solutions focused on payment workflows, authentication, and user experience improvements using React Native CLI.",
    achievements: [
      "Developed tap-to-pay mobile application features",
      "Integrated Stripe payment functionality",
      "Implemented authentication workflows",
      "Created reusable React Native components",
      "Optimized application performance"
    ],
    technologies: [
      "React Native CLI",
      "Redux",
      "Stripe",
      "REST API",
      "JavaScript"
    ]
  },


  {
    role: "Mobile Application Developer",
    company: "Full Circle Detailing",
    duration: "Project Experience",
    project: "Car Service Booking Application",
    description:
      "Built customer-focused mobile application features for appointment booking and service management.",
    achievements: [
      "Developed reusable UI components",
      "Integrated backend APIs",
      "Improved application responsiveness",
      "Prepared production release for Google Play Store"
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Android",
      "Google Play Console"
    ]
  }


];



export default function Experience() {


  return (

    <section
      id="experience"
      className="
      py-16
      sm:py-20
      bg-black
      text-white
      "
    >


      <div
        className="
        max-w-6xl
        mx-auto
        px-5
        sm:px-8
        "
      >


        <h2
          className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          font-bold
          "
        >
          Experience
        </h2>



        <p
          className="
          mt-3
          text-gray-400
          max-w-2xl
          text-sm
          sm:text-base
          "
        >
          Professional experience building scalable mobile
          applications, integrating modern technologies, and
          delivering production-ready solutions.
        </p>




        <div
          className="
          mt-10
          space-y-6
          "
        >


          {
            experiences.map((experience, index) => (

              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  y:30
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:.5,
                  delay:index * .1
                }}

                viewport={{
                  once:true
                }}


                className="
                border
                border-gray-800
                bg-gray-950
                rounded-2xl
                p-5
                sm:p-7
                hover:border-green-500/50
                transition
                "

              >



                <div
                  className="
                  flex
                  flex-col
                  md:flex-row
                  md:justify-between
                  md:items-start
                  gap-3
                  "
                >

                  <div>


                    <h3
                      className="
                      text-xl
                      sm:text-2xl
                      font-semibold
                      text-green-400
                      "
                    >
                      {experience.role}
                    </h3>


                    <p
                      className="
                      text-gray-300
                      mt-1
                      "
                    >
                      {experience.company}
                    </p>


                  </div>



                  <span
                    className="
                    text-sm
                    text-gray-400
                    "
                  >
                    {experience.duration}
                  </span>


                </div>





                <h4
                  className="
                  mt-5
                  font-semibold
                  text-white
                  "
                >
                  {experience.project}
                </h4>




                <p
                  className="
                  mt-3
                  text-gray-400
                  leading-7
                  text-sm
                  sm:text-base
                  "
                >
                  {experience.description}
                </p>





                <ul
                  className="
                  mt-5
                  space-y-2
                  text-gray-300
                  text-sm
                  "
                >

                  {
                    experience.achievements.map((item)=>(

                      <li
                        key={item}
                        className="
                        flex
                        gap-2
                        "
                      >

                        <span
                          className="
                          text-green-400
                          "
                        >
                          ✓
                        </span>

                        {item}

                      </li>

                    ))
                  }

                </ul>





                <div
                  className="
                  flex
                  flex-wrap
                  gap-2
                  mt-6
                  "
                >

                  {
                    experience.technologies.map((tech)=>(

                      <span

                        key={tech}

                        className="
                        px-3
                        py-1
                        rounded-full
                        bg-gray-900
                        border
                        border-gray-700
                        text-xs
                        text-gray-300
                        "

                      >

                        {tech}

                      </span>

                    ))
                  }


                </div>




              </motion.div>

            ))
          }


        </div>


      </div>


    </section>

  );

}