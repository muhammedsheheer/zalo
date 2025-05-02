// "use client";
// import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
// import { Button } from "@/components/ui/button";
// import { useRestaurant } from "@/context/RestaurantContext";
// import type { EmblaOptionsType } from "embla-carousel";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const OPTIONS: EmblaOptionsType = { loop: true };

// const Special = ({}) => {
//   const { modelData } = useRestaurant();
//   return (
//     <section className="relative flex h-full w-full justify-center bg-[#58100E] py-12">
//       <div className="lines">
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </div>
//       <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
//       <div className="flex flex-col items-center justify-center gap-2">
//         <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between md:gap-96 2xl:gap-[600px]">
//           <motion.div
//             className="flex flex-col items-center justify-center gap-2 md:items-start md:justify-start"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//           >
//             <span className="font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#F7F4ED]">
//               Specials
//             </span>
//             <h6 className="text-center font-italiana text-5xl font-[400] capitalize text-[#F7F4ED] md:text-7xl">
//               Zalo Specials
//             </h6>
//           </motion.div>
//           <div>
//             <Link href={"/menu"}>
//               <Button
//                 className={
//                   "flex flex-row items-center justify-center gap-1 rounded-full border border-[#fff] bg-transparent px-7 py-7 font-playfair text-sm font-[500] capitalize tracking-[1.08px] text-[#F7F4ED] hover:bg-[#58100E] hover:text-[#F7F4ED]"
//                 }
//               >
//                 View Menu <ArrowRight className="w-5 text-[#F7F4ED]" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//         <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
//           {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Special;

"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#070D0F] py-12">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        {/* <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <h1 className="font-marcellus z-10 text-center text-4xl font-[400] uppercase text-[#fff] md:text-6xl">
                  Mevlana signature specials{" "}
                </h1>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between md:gap-96 2xl:gap-[600px]">
          <motion.div
            className="flex flex-col items-center justify-center gap-2 md:items-start md:justify-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <span className="font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#F7F4ED]">
              Specials
            </span>
            <h6 className="text-center font-italiana text-5xl font-[400] capitalize text-[#F7F4ED] md:text-7xl">
              Zalo Specials
            </h6>
          </motion.div>
          <div>
            <Link href={"/menu"}>
              <Button
                className={
                  "flex flex-row items-center justify-center gap-1 rounded-full border border-[#fff] bg-transparent px-7 py-7 font-playfair text-sm font-[500] capitalize tracking-[1.08px] text-[#F7F4ED] hover:bg-[#58100E] hover:text-[#F7F4ED]"
                }
              >
                View Menu <ArrowRight className="w-5 text-[#F7F4ED]" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
