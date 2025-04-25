import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="h-full w-full bg-[#F7F4ED] py-12 pl-0 pr-0 md:py-0 md:pl-0 md:pr-0">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 md:flex-row md:items-start md:justify-start md:gap-0">
        <motion.div
          className="hidden w-full bg-[#9B3733] md:block md:w-[16%]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={"/images/home/about/image4.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-[300px] w-full md:h-[650px]"
          />
        </motion.div>
        <motion.div
          className="w-full md:ml-24 md:w-[33%]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={"/images/home/about/image2.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-[300px] w-full object-cover md:h-[650px]"
          />
        </motion.div>
        <motion.div
          className="relative z-50 flex w-full flex-col gap-4 md:ml-[10%] md:mt-[12%] md:w-[40%]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <Image
              src={"/images/home/about/bg.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-0 h-[300px] w-full object-cover md:h-[650px]"
            />
          </div>
          <div className="z-50 flex flex-col gap-2">
            <span className="text-center font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#040404] md:text-start">
              About us
            </span>
            <h1 className="text-center font-times_new_roman text-4xl font-[400] capitalize text-[#040404] md:text-start md:text-5xl">
              Welcome <br />
              to Zalo’s Cafe
            </h1>
          </div>
          <p className="z-50 w-full max-w-[400px] px-4 text-center font-inter text-sm font-[300] text-[#262626] md:px-0 md:text-start md:text-base">
            At Zalo’s Cafe, we believe in more than just great coffee—we create
            experiences. Nestled in the heart, our cafe is a haven for coffee
            lovers, food enthusiasts, and those looking for a warm, inviting
            space to relax or work.
          </p>
          <div className="z-50 flex items-center justify-center md:items-start md:justify-start">
            <Link href={"/menu"}>
              <Button
                className={
                  "flex flex-row items-center justify-center gap-1 rounded-none bg-[#9B3733] px-7 py-7 font-playfair text-sm font-[600] capitalize tracking-[1.08px] text-[#F7F4ED] hover:bg-[#8a4846] hover:text-[#F7F4ED]"
                }
              >
                View Menu <ArrowRight className="w-5 text-[#F7F4ED]" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
