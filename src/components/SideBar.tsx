import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/images/home/hero/logo.png"
              width={162}
              height={35}
              alt="Foodo"
              className="w-28"
            />
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-start justify-start gap-7 pt-14">
            <Link
              href="/"
              className="flex w-full justify-start p-0 font-playfair text-2xl font-normal text-[#323232]"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="flex w-full justify-start p-0 font-playfair text-2xl font-normal text-[#323232]"
            >
              Menu
            </Link>
            <Link
              href="/about-us"
              className="flex w-full justify-start p-0 font-playfair text-2xl font-normal text-[#323232]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="flex w-full justify-start p-0 font-playfair text-2xl font-normal text-[#323232]"
            >
              Contact
            </Link>
            <Link
              href="/table-booking"
              className="flex w-full justify-start p-0 font-playfair text-2xl font-normal text-[#323232]"
            >
              Table Booking
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
