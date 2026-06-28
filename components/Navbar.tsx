"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  const menuItems = [
    {
      name: "About",
      href: "#about"
    },
    {
      name: "Skills",
      href: "#skills"
    },
    {
      name: "Projects",
      href: "#projects"
    },
    {
      name: "Contact",
      href: "#contact"
    }
  ];


  return (

    <nav
      className="
      fixed
      top-0
      w-full
      bg-black/50
      backdrop-blur-xl
      z-50
      border-b
      border-white/10
      "
    >


      <div

        className="
        max-w-6xl
        mx-auto
        flex
        justify-between
        items-center
        px-5
        sm:px-8
        py-4
        "

      >



        {/* LOGO */}


        <Link

          href="/"

          className="
          text-xl
          sm:text-2xl
          font-bold
          text-green-400
          "

        >

          Jillur.dev

        </Link>





        {/* DESKTOP MENU */}


        <div

          className="
          hidden
          md:flex
          items-center
          gap-6
          text-white
          "

        >

          {
            menuItems.map((item)=>(

              <Link

                key={item.name}

                href={item.href}

                className="
                text-sm
                lg:text-base
                hover:text-green-400
                transition
                "

              >

                {item.name}

              </Link>

            ))
          }


        </div>






        {/* MOBILE BUTTON */}


        <button

          onClick={() => setOpen(!open)}

          className="
          md:hidden
          text-white
          text-xl
          "

        >

          {
            open ?

            <FaTimes />

            :

            <FaBars />

          }

        </button>



      </div>






      {/* MOBILE MENU */}


      {
        open && (

          <div

            className="
            md:hidden
            bg-black/90
            backdrop-blur-xl
            px-5
            pb-5
            "

          >

            <div

              className="
              flex
              flex-col
              gap-4
              text-white
              "

            >

              {
                menuItems.map((item)=>(

                  <Link

                    key={item.name}

                    href={item.href}

                    onClick={() => setOpen(false)}

                    className="
                    hover:text-green-400
                    transition
                    "

                  >

                    {item.name}

                  </Link>

                ))
              }


            </div>


          </div>

        )
      }



    </nav>

  );

}