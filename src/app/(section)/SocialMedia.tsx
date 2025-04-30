import { Icons } from "@/components/Icon";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function SocialMedia() {
  return (
    <section className="h-full w-full bg-[#fff6eb] px-2 pt-20 md:px-[60px]">
      <div className="hidden h-fit w-full flex-col gap-7 md:flex">
        <p className="w-full text-center font-times_new_roman text-4xl text-black md:text-6xl">
          Slide Into Our socials
        </p>
        <div className="flex w-full items-center justify-between px-4 py-3 md:px-[100px] md:py-16">
          <Link
            href={
              "https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
            }
            target="_blank"
          >
            <Icons.instagram className="h-12 w-12 text-[#58100E] md:h-24 md:w-24" />
          </Link>

          <Link
            href={
              "https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
            }
            target="_blank"
            className="font-sofia_sans text-xl font-[600] uppercase tracking-[2px] text-[#58100E] md:text-4xl"
          >
            @loremepsum
          </Link>
        </div>
        <motion.div
          className="grid w-full grid-cols-1 gap-3 md:grid-cols-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
      {/* mobile screen */}
      <div className="flex flex-col gap-8 md:hidden md:gap-20">
        <div className="flex w-full flex-col gap-4 px-4 md:px-[60px] 2xl:px-[80px]">
          <p className="w-full pb-6 text-center font-times_new_roman text-4xl text-black md:text-6xl">
            Slide Into Our socials
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/social/1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="flex w-full flex-col items-center justify-center gap-2 md:mt-16 md:w-[25%]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              {/* <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-12"
              /> */}
              <Link
                href={
                  "https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
                }
                target="_blank"
              >
                <Icons.instagram className="h-24 w-24 text-[#58100E]" />
              </Link>
              <div>
                <Link
                  href={
                    "https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
                  }
                  target="_blank"
                  className="font-sofia_sans text-xl font-[600] uppercase tracking-[2px] text-[#58100E] md:text-4xl"
                >
                  @loremepsum
                </Link>
              </div>
            </motion.div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/social/3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/social/4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/social/5.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            {/* <div className="w-full md:w-[50%]">
              {" "}
              <motion.img
                src={"/images/home/follow/5.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div> */}

            <div className="z-0 flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/social/6.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-0 h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
