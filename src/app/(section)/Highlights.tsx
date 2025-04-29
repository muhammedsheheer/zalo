import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Highlights: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#fff6eb] px-0 py-8 md:px-0 md:py-16">
      <div className="hidden flex-col gap-6 md:flex md:flex-row">
        <div className="relative w-full md:hidden md:w-[25%]">
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <Image
              src={"/images/home/about/bg.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-0 h-[300px] w-full md:h-[650px]"
            />
          </div>
          <div className="relative flex flex-col items-center justify-center gap-2">
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <Image
                src={"/images/home/about/bg.png"}
                width={281}
                height={74}
                alt="logo"
                className="z-0 h-[300px] w-full md:h-[650px]"
              />
            </div>
            <span className="text-center font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#000]">
              Specials
            </span>
            <h1 className="text-center font-times_new_roman text-5xl font-[400] capitalize text-[#000] md:text-7xl">
              Zalo’s <br /> CAFE <br /> highlights
            </h1>
          </div>
        </div>
        <motion.div
          className="w-full md:w-[28%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Link href={"/menu"}>
            <Image
              src={"/images/home/highlights/image1.png"}
              width={677}
              height={503}
              alt="image"
              className="h-[300px] w-full object-cover md:h-[600px]"
            />
          </Link>
        </motion.div>
        <motion.div
          className="flex w-full flex-col gap-6 md:w-[19%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Link href={"/menu"}>
            {" "}
            <Image
              src={"/images/home/highlights/image2.png"}
              width={677}
              height={503}
              alt="image"
              className="h-[300px] w-full object-cover md:h-[290px]"
            />
          </Link>

          <Link href={"/menu"}>
            <Image
              src={"/images/home/highlights/image3.png"}
              width={677}
              height={503}
              alt="image"
              className="h-[300px] w-full object-cover md:h-[290px]"
            />
          </Link>
        </motion.div>
        <motion.div
          className="w-full md:w-[28%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Link href={"/menu"}>
            <Image
              src={"/images/home/highlights/image4.png"}
              width={677}
              height={503}
              alt="image"
              className="h-[300px] w-full object-cover md:h-[600px]"
            />
          </Link>
        </motion.div>
        <motion.div
          className="ml-8 mt-[12%] hidden w-full md:block md:w-[25%]"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="relative flex flex-col items-start justify-start gap-2">
            <div className="absolute inset-0 z-0 flex items-center justify-center pr-20">
              <Image
                src={"/images/home/about/bg.png"}
                width={281}
                height={74}
                alt="logo"
                className="z-0 h-auto w-full object-cover"
              />
            </div>
            <span className="font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#000]">
              Specials
            </span>
            <h1 className="font-times_new_roman text-5xl font-[400] capitalize text-[#000] md:text-5xl">
              Zalo’s <br /> CAFE <br /> highlights
            </h1>
          </div>
        </motion.div>
      </div>
      {/*mobile screen */}
      <div className="flex flex-row gap-2 md:hidden">
        <motion.div
          className="w-full md:w-[28%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Link href={"/menu"}>
            <Image
              src={"/images/home/highlights/image1.png"}
              width={677}
              height={503}
              alt="image"
              className="h-[400px] w-full object-cover md:h-[600px]"
            />
          </Link>
        </motion.div>
        <motion.div
          className="flex w-full flex-col gap-2 md:w-[19%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Link href={"/menu"}>
            {" "}
            <Image
              src={"/images/home/highlights/image2.png"}
              width={677}
              height={503}
              alt="image"
              className="h-[195px] w-full object-cover md:h-[290px]"
            />
          </Link>

          <Link href={"/menu"}>
            <Image
              src={"/images/home/highlights/image3.png"}
              width={677}
              height={503}
              alt="image"
              className="h-[195px] w-full object-cover md:h-[290px]"
            />
          </Link>
        </motion.div>
        <motion.div
          className="w-full md:w-[28%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Link href={"/menu"}>
            <Image
              src={"/images/home/highlights/image4.png"}
              width={677}
              height={503}
              alt="image"
              className="h-[400px] w-full object-cover md:h-[600px]"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
