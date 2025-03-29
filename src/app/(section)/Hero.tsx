import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#fff]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>

      <div className="relative flex flex-col items-center justify-center gap-5 px-4">
        <Image
          src={"/images/home/hero/logo.png"}
          width={281}
          height={74}
          alt="logo"
          className="w-32"
        />
        <h1 className="text-center font-italiana text-5xl font-[400] capitalize text-[#394F3B] md:text-8xl">
          Blending Coffee & <br /> Comfort
        </h1>
        <div className="">
          <Link href={"/menu"}>
            <Button
              className={
                "flex flex-row items-center justify-center gap-1 rounded-full bg-[#394F3B] px-7 py-7 font-playfair text-sm font-[600] capitalize tracking-[1.08px] text-[#F7F4ED] hover:bg-[#536e55] hover:text-[#F7F4ED]"
              }
            >
              View Menu <ArrowRight className="w-5 text-[#F7F4ED]" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
