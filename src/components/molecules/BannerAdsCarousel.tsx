"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BannerAdsCarousel = () => {
  const banners = [
    "https://picsum.photos/id/1011/1600/500",
    "https://picsum.photos/id/1015/1600/500",
    "https://picsum.photos/id/1016/1600/500",
    "https://picsum.photos/id/1020/1600/500",
    "https://picsum.photos/id/1025/1600/500",
  ];

  return (
    <div className="relative group w-full cursor-pointer">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}>
        <CarouselContent>
          {banners.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="relative overflow-hidden rounded-lg aspect-[24/5]">
                  <Image
                    src={src}
                    alt={`Banner ${index + 1}`}
                    fill
                    objectFit="cover"
                    className=" transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Show arrows only on hover */}
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Carousel>
    </div>
  );
};

export default BannerAdsCarousel;
