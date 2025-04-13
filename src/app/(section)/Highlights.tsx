import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Highlights: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#F7F4ED] px-8 py-8 md:px-0 md:py-16">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-full md:hidden md:w-[25%]">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-center font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#000]">
              Specials
            </span>
            <h1 className="text-center font-times_new_roman text-5xl font-[400] capitalize text-[#000] md:text-7xl">
              Zalo’s <br /> CAFE <br /> highlights
            </h1>
          </div>
        </div>
        <div className="w-full md:w-[28%]">
          <Image
            src={"/images/home/highlights/image1.png"}
            width={677}
            height={503}
            alt="image"
            className="h-[300px] w-full object-cover md:h-[600px]"
          />
        </div>
        <div className="flex w-full flex-col gap-6 md:w-[19%]">
          <Image
            src={"/images/home/highlights/image2.png"}
            width={677}
            height={503}
            alt="image"
            className="h-[300px] w-full object-cover md:h-[290px]"
          />
          <Image
            src={"/images/home/highlights/image3.png"}
            width={677}
            height={503}
            alt="image"
            className="h-[300px] w-full object-cover md:h-[290px]"
          />
        </div>
        <div className="w-full md:w-[28%]">
          <Image
            src={"/images/home/highlights/image4.png"}
            width={677}
            height={503}
            alt="image"
            className="h-[300px] w-full object-cover md:h-[600px]"
          />
        </div>
        <div className="ml-8 mt-[12%] hidden w-full md:block md:w-[25%]">
          <div className="flex flex-col items-start justify-start gap-2">
            <span className="font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#000]">
              Specials
            </span>
            <h1 className="font-times_new_roman text-5xl font-[400] capitalize text-[#000] md:text-5xl">
              Zalo’s <br /> CAFE <br /> highlights
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
