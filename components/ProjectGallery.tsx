"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


interface ProjectGalleryProps {
    images?: string[];
}



export default function ProjectGallery({
    images = []
}: ProjectGalleryProps) {


    return (

        <Swiper

            spaceBetween={16}

            slidesPerView={1}

            grabCursor={true}


            breakpoints={{

                320: {
                    slidesPerView: 1,
                    spaceBetween: 12,
                },


                640: {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                },


                1024: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                },


            }}

        >


            {
                images.map((img,index)=>(


                    <SwiperSlide key={index}>


                        <div

                            className="
                            relative
                            w-full

                            h-[260px]
                            sm:h-[320px]
                            md:h-[200px]
                            lg:h-[200px]

                            rounded-xl

                            overflow-hidden

                            bg-gray-900

                            flex
                            items-center
                            justify-center
                            "

                        >


                            <Image

                                src={img}

                                alt={`Project image ${index + 1}`}

                                fill

                                sizes="
                                (max-width:640px) 100vw,
                                (max-width:1024px) 80vw,
                                800px
                                "


                                className="
                                object-contain
                                md:object-cover
                                rounded-xl
                                "

                            />


                        </div>


                    </SwiperSlide>


                ))
            }



        </Swiper>

    );

}