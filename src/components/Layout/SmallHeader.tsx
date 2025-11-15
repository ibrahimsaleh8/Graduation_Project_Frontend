import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { useState } from "react";
import Image from "next/image";
import logoImage from "@images/logo.webp";

export default function SmallHeader() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="cursor-pointer w-fit block lg:hidden">
          <Menu className="w-5 h-5 " />
        </button>
      </SheetTrigger>
      <SheetContent className="p-0">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <SheetBody className="h-full">
          <Link
            onClick={() => setOpen(false)}
            href={"/"}
            className="mx-auto w-fit block">
            <Image
              src={logoImage}
              alt="Logo"
              width={1000}
              height={1000}
              className="w-16 "
              priority={true}
              loading="eager"
            />
          </Link>
          <div className="pt-10 flex flex-col gap-9 h-full">
            <ul className="flex flex-col items-center gap-6 w-full justify-center font-medium text-sm ">
              <li className="w-full">
                <Link
                  onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-center text-center hover:bg-hover-color py-2 duration-300"
                  href={"/"}>
                  Jobs
                </Link>
              </li>
              <li className="w-full">
                <Link
                  onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-center text-center hover:bg-hover-color py-2 duration-300"
                  href={"/"}>
                  About us
                </Link>
              </li>
              <li className="w-full">
                <Link
                  onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-center text-center hover:bg-hover-color py-2 duration-300"
                  href={"/"}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="flex items-center justify-center w-full sm:gap-3 gap-2 text-sm font-medium">
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  className={`hover:bg-hover-color duration-300 py-1.5 border-2 border-soft-border px-6 dark:text-white text-main-blue-color rounded-md`}
                  href={"/employee"}>
                  Login
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  className={`hover:opacity-90 duration-300 py-1.5 border-2 border-main-blue-color px-6 text-white bg-main-blue-color rounded-md`}
                  href={"/companies"}>
                  Sign Up
                </Link>
              </li>
              <li></li>
            </ul>
            <div className="mt-auto p-4 pb-10">
              <AnimatedThemeToggler className="w-8 h-8 flex items-center justify-center cursor-pointer" />
            </div>
          </div>
        </SheetBody>
      </SheetContent>
    </Sheet>
  );
}
