"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ProjectGalleryProps {
    images?: string[];
}

export default function ProjectGallery({ images = [] }: ProjectGalleryProps) {
    console.log(images, "Images++++++++++")
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1.25}
            grabCursor={true}
            breakpoints={{
                320: {
                    slidesPerView: 1.15,
                },
                640: {
                    slidesPerView: 1.25,
                },
                1024: {
                    slidesPerView: 1.4,
                },
            }}
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={img}
                        alt={`Project image ${index + 1}`}
                        width={800}
                        height={600}
                        className="rounded-xl object-cover w-full"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}