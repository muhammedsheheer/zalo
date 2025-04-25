import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

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
        <motion.div
          className="w-full md:w-[28%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={"/images/home/highlights/image1.png"}
            width={677}
            height={503}
            alt="image"
            className="h-[300px] w-full object-cover md:h-[600px]"
          />
        </motion.div>
        <motion.div
          className="flex w-full flex-col gap-6 md:w-[19%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
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
        </motion.div>
        <motion.div
          className="w-full md:w-[28%]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={"/images/home/highlights/image4.png"}
            width={677}
            height={503}
            alt="image"
            className="h-[300px] w-full object-cover md:h-[600px]"
          />
        </motion.div>
        <motion.div
          className="ml-8 mt-[12%] hidden w-full md:block md:w-[25%]"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="flex flex-col items-start justify-start gap-2">
            <span className="font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#000]">
              Specials
            </span>
            <h1 className="font-times_new_roman text-5xl font-[400] capitalize text-[#000] md:text-5xl">
              Zalo’s <br /> CAFE <br /> highlights
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
