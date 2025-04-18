import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="h-full w-full bg-[#F7F4ED] py-12 pl-4 pr-4 md:py-0 md:pl-0 md:pr-0">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 md:flex-row md:items-start md:justify-start md:gap-0">
        <div className="hidden w-full md:block md:w-[22%]">
          <Image
            src={"/images/home/about/image1.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-[300px] w-full md:h-[650px]"
          />
        </div>
        <div className="w-full md:ml-4 md:w-[33%]">
          <Image
            src={"/images/home/about/image2.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-[300px] w-full object-cover md:h-[650px]"
          />
        </div>
        <div className="flex w-full flex-col gap-4 md:ml-[10%] md:mt-[12%] md:w-[40%]">
          <div className="flex flex-col gap-2">
            <span className="font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#040404]">
              About us
            </span>
            <h1 className="font-times_new_roman text-4xl font-[400] capitalize text-[#040404] md:text-5xl">
              Welcome <br />
              to Zalo’s Cafe
            </h1>
          </div>
          <p className="w-full max-w-[400px] font-inter text-sm font-[300] text-[#262626] md:text-base">
            At Zalo’s Cafe, we believe in more than just great coffee—we create
            experiences. Nestled in the heart, our cafe is a haven for coffee
            lovers, food enthusiasts, and those looking for a warm, inviting
            space to relax or work.
          </p>
          <div className="">
            <Link href={"/menu"}>
              <Button
                className={
                  "flex flex-row items-center justify-center gap-1 rounded-none bg-[#714C23] px-7 py-7 font-playfair text-sm font-[600] capitalize tracking-[1.08px] text-[#F7F4ED] hover:bg-[#976935] hover:text-[#F7F4ED]"
                }
              >
                View Menu <ArrowRight className="w-5 text-[#F7F4ED]" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden w-full md:block md:w-[5%]">
          <Image
            src={"/images/home/about/image3.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-auto w-full md:h-[650px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
