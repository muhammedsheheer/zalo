import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function ReserveNew() {
  return (
    <section className="flex h-full w-full flex-col py-12 md:flex-row">
      <div className="w-full md:w-1/3">
        <Image
          src="/images/home/reserve/1.png"
          width={560}
          height={877}
          alt="social"
          className="max-h-[700px] object-cover"
        />
      </div>
      <div className="flex w-full flex-col justify-center gap-5 px-4 py-6 md:w-1/3 md:px-[60px]">
        <p className="font-playfair capitalize text-black">booking</p>
        <p className="font-times_new_roman text-6xl text-black">
          Reserve Your Table <span className="italic">at Zola’s Cafe</span>
        </p>
        <p className="font-inter text-sm font-[300] text-black">
          Experience the warmth of Zola’s Cafe, where great coffee meets a cozy
          ambiance. Book your table now and enjoy a delightful dining experience
          filled with rich flavours, handcrafted beverages, and a welcoming
          atmosphere.
        </p>
        <Button className="flex w-fit items-center justify-center gap-1 rounded-full bg-[#714c23] px-6 py-7">
          <span className="font-playfair text-lg">Book Now</span>
          <ArrowRight className="mt-1 h-5 w-5" />
        </Button>
      </div>
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
    </section>
  );
}

export default ReserveNew;
