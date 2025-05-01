import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

function ReserveNew() {
  return (
    <section className="h-full w-full bg-[#6f4e37] py-12">
      <div className="hidden h-full w-full flex-col md:flex md:flex-row">
        <div className="w-full md:w-1/3">
          <Image
            src="/images/home/reserve/1.png"
            width={560}
            height={877}
            alt="social"
            className="max-h-[700px] object-cover"
          />
        </div>
        <motion.div
          className="relative z-50 flex w-full flex-col justify-center gap-5 px-4 py-6 md:w-1/3 md:px-[60px]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 z-0 flex items-center justify-center pr-20">
            <Image
              src={"/images/home/about/bg.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-0 h-auto w-full object-cover"
            />
          </div>
          <p className="z-50 font-playfair capitalize text-[#000]">booking</p>
          <p className="z-50 font-times_new_roman text-6xl text-[#000]">
            Reserve Your Table <span className="italic">at Zalo’s Cafe</span>
          </p>
          <p className="z-50 font-inter text-sm font-[300] text-[#000]">
            Experience the warmth of Zalo’s Cafe, where great coffee meets a
            cozy ambiance. Book your table now and enjoy a delightful dining
            experience filled with rich flavours, handcrafted beverages, and a
            welcoming atmosphere.
          </p>
          <Button className="z-50 flex w-fit items-center justify-center gap-1 rounded-full bg-[#000] px-6 py-7 text-[#fff] hover:bg-[#111]">
            <Link href={"/table-booking"}>
              <span className="font-playfair text-lg">Book Now</span>
            </Link>
            <ArrowRight className="mt-1 h-5 w-5 text-[#fff]" />
          </Button>
        </motion.div>
        <div className="flex w-full gap-4 md:w-1/3">
          <Image
            src="/images/home/reserve/2.png"
            width={100}
            height={877}
            alt="social"
            className="max-h-[700px] object-cover"
          />
          <Image
            src="/images/home/reserve/3.png"
            width={478}
            height={877}
            alt="social"
            className="max-h-[700px] object-cover"
          />
        </div>
      </div>
      {/* mobile screen */}
      <div className="flex flex-col gap-6 md:hidden">
        <motion.div
          className="relative z-50 flex w-full flex-col justify-center gap-5 px-4 py-6 md:w-1/3 md:px-[60px]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <Image
              src={"/images/home/about/bg.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-0 h-auto w-full object-cover"
            />
          </div>
          <p className="z-50 text-center font-playfair capitalize text-[#000]">
            booking
          </p>
          <p className="z-50 text-center font-times_new_roman text-4xl text-[#000]">
            Reserve Your Table <span className="italic">at Zalo’s Cafe</span>
          </p>
          <p className="z-50 text-center font-inter text-sm font-[300] text-[#000]">
            Experience the warmth of Zalo’s Cafe, where great coffee meets a
            cozy ambiance. Book your table now and enjoy a delightful dining
            experience filled with rich flavours, handcrafted beverages, and a
            welcoming atmosphere.
          </p>
          <div className="z-50 flex items-center justify-center">
            <Button className="z-50 flex items-center justify-center gap-1 rounded-full bg-[#000] px-6 py-7 text-[#fff] hover:bg-[#111]">
              <Link href={"/table-booking"}>
                <span className="font-playfair text-lg">Book Now</span>
              </Link>
              <ArrowRight className="mt-1 h-5 w-5 text-[#fff]" />
            </Button>
          </div>
        </motion.div>
        <Image
          src="/images/home/reserve/4.png"
          width={560}
          height={877}
          alt="social"
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}

export default ReserveNew;
