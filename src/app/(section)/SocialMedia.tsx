import { Icons } from "@/components/Icon";
import Image from "next/image";
import React from "react";

function SocialMedia() {
  return (
    <section className="flex h-fit w-full flex-col gap-7 px-4 pt-20 md:px-[60px]">
      <p className="font-times_new_roman w-full text-center text-4xl text-black md:text-6xl">
        Slide Into Our socials
      </p>
      <div className="flex w-full items-center justify-between px-4 py-3 md:px-[100px] md:py-16">
        <Icons.instagram className="h-12 w-12 text-[#714C23] md:h-24 md:w-24" />
        <p className="font-sofia_sans text-xl font-[600] uppercase tracking-[2px] text-[#714C23] md:text-4xl">
          @loremepsum
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
        <Image
          src="/images/home/social/1.png"
          width={553}
          height={541}
          alt="social"
        />
        <div className="relative hidden h-full w-full md:block">
          <Image
            src="/images/home/social/2.png"
            width={553}
            height={541}
            alt="social"
            className="absolute -top-[250px]"
          />
        </div>
        <Image
          src="/images/home/social/3.png"
          width={553}
          height={541}
          alt="social"
        />
        <Image
          src="/images/home/social/4.png"
          width={553}
          height={541}
          alt="social"
        />
        <Image
          src="/images/home/social/5.png"
          width={553}
          height={541}
          alt="social"
        />
        <Image
          src="/images/home/social/6.png"
          width={553}
          height={541}
          alt="social"
        />
      </div>
    </section>
  );
}

export default SocialMedia;
