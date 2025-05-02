import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const data = [
  {
    name: "ROASTED LAMB RUMP",
    description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
    price: 25,
  },
  {
    name: "PAN SEARED SEA BASS",
    description: "Saffron and mussel's broth, new potatoes, edamame beans",
    price: 38,
  },
  {
    name: "KING PRAWNS AND LOBSTER",
    description: "Creamy saffron, sauce Vierge",
    price: 38,
  },
  {
    name: "BEEF BURGER MEAL",
    description: "Classic greek salad, barrel aged feta cheese, bread",
    price: 32,
  },
  {
    name: "ROASTED LAMB RUMP",
    description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
    price: 25,
  },
];

const Menu: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#2c2323] px-4 py-8 md:px-0 md:py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 md:gap-16">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-center font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#fff]">
            Menu
          </span>
          <h1 className="text-center font-times_new_roman text-5xl font-[400] capitalize text-[#fff] md:text-7xl">
            Explore our menu
          </h1>
        </div>
        {/* bigscreen */}
        <div className="hidden h-full w-full flex-col gap-8 md:flex md:flex-row">
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[20%]">
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Link href={"/menu"}>
                <Image
                  src={"/images/home/menu/image1.png"}
                  width={677}
                  height={503}
                  alt="image"
                  className="h-[300px] w-full object-cover md:h-[500px]"
                />
              </Link>
            </motion.div>
            <h6 className="text-center font-times_new_roman text-2xl font-[400] capitalize text-[#fff] md:text-3xl md:tracking-[1.52px]">
              Shawarma Manouche
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[30%]">
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Link href={"/menu"}>
                <Image
                  src={"/images/home/menu/image2.png"}
                  width={677}
                  height={503}
                  alt="image"
                  className="h-[300px] w-full object-cover md:h-[500px]"
                />
              </Link>
            </motion.div>
            <h6 className="text-center font-times_new_roman text-2xl font-[400] capitalize text-[#fff] md:text-3xl md:tracking-[1.52px]">
              breakfast
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[20%]">
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Link href={"/menu"}>
                <Image
                  src={"/images/home/menu/image3.png"}
                  width={677}
                  height={503}
                  alt="image"
                  className="h-[300px] w-full object-cover md:h-[500px]"
                />
              </Link>
            </motion.div>
            <h6 className="text-center font-times_new_roman text-2xl font-[400] capitalize text-[#fff] md:text-3xl md:tracking-[1.52px]">
              wraps
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[30%]">
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Link href={"/menu"}>
                <Image
                  src={"/images/home/menu/image4.png"}
                  width={677}
                  height={503}
                  alt="image"
                  className="h-[300px] w-full object-cover md:h-[500px]"
                />
              </Link>
            </motion.div>
            <h6 className="text-center font-times_new_roman text-2xl font-[400] capitalize text-[#fff] md:text-3xl md:tracking-[1.52px]">
              desserts
            </h6>
          </div>
        </div>
        {/* mobile screen */}
        <div className="grid h-full w-full grid-cols-2 gap-2 md:hidden">
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[20%]">
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Link href={"/menu"}>
                <Image
                  src={"/images/home/menu/image1.png"}
                  width={677}
                  height={503}
                  alt="image"
                  className="h-[250px] w-full object-cover md:h-[500px]"
                />
              </Link>
            </motion.div>
            <h6 className="text-center font-times_new_roman text-2xl font-[400] capitalize text-[#fff] md:text-3xl md:tracking-[1.52px]">
              Shawarma Manouche
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[30%]">
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Link href={"/menu"}>
                <Image
                  src={"/images/home/menu/image2.png"}
                  width={677}
                  height={503}
                  alt="image"
                  className="h-[250px] w-full object-cover md:h-[500px]"
                />
              </Link>
            </motion.div>
            <h6 className="text-center font-times_new_roman text-2xl font-[400] capitalize text-[#fff] md:text-3xl md:tracking-[1.52px]">
              breakfast
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[20%]">
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Link href={"/menu"}>
                <Image
                  src={"/images/home/menu/image3.png"}
                  width={677}
                  height={503}
                  alt="image"
                  className="h-[250px] w-full object-cover md:h-[500px]"
                />
              </Link>
            </motion.div>
            <h6 className="text-center font-times_new_roman text-2xl font-[400] capitalize text-[#fff] md:text-3xl md:tracking-[1.52px]">
              wraps
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[30%]">
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Link href={"/menu"}>
                {" "}
                <Image
                  src={"/images/home/menu/image4.png"}
                  width={677}
                  height={503}
                  alt="image"
                  className="h-[250px] w-full object-cover md:h-[500px]"
                />
              </Link>
            </motion.div>
            <h6 className="text-center font-times_new_roman text-2xl font-[400] capitalize text-[#fff] md:text-3xl md:tracking-[1.52px]">
              desserts
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
