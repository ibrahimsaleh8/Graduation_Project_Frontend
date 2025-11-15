"use client";
import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { usePathname } from "next/navigation";
import SmallHeader from "./SmallHeader";
import Image from "next/image";
import logoImage from "@images/logo.webp";
export default function MainHeader() {
  const route = usePathname();

  return (
    <header className="lg:w-[90%] w-full bg-second-bg px-4 py-5 mx-auto lg:mt-5 border border-soft-border lg:rounded-md header-shadow">
      <div className="flex items-center gap-4 justify-between w-full">
        <Link href={"/"} className="font-bold w-fit lg:w-full">
          <Image
            src={logoImage}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-16"
            priority={true}
            loading="eager"
          />
        </Link>
        <ul className="lg:flex hidden items-center gap-10 w-full justify-center font-medium text-sm ">
          <li>
            <Link className="hover:opacity-80 duration-300" href={"/"}>
              Jobs
            </Link>
          </li>
          <li>
            <Link className="hover:opacity-80 duration-300" href={"/"}>
              About us
            </Link>
          </li>
          <li>
            <Link className="hover:opacity-80 duration-300" href={"/"}>
              Contact Us
            </Link>
          </li>
        </ul>
        <ul className="lg:flex hidden items-center w-full sm:gap-3 gap-2 text-sm font-medium justify-end">
          <li>
            <Link
              className={`hover:bg-hover-color duration-300 py-1.5 border-2 border-soft-border px-6 dark:text-white text-main-blue-color rounded-md ${
                route == "/employee" ? "bg-hover-color" : ""
              } `}
              href={"/employee"}>
              Login
            </Link>
          </li>
          <li>
            <Link
              className={`hover:opacity-90 duration-300 py-1.5 border-2 border-main-blue-color px-6 text-white bg-main-blue-color rounded-md ${
                route == "/companies" ? "bg-hover-color" : ""
              }`}
              href={"/companies"}>
              Sign Up
            </Link>
          </li>
          <li>
            <AnimatedThemeToggler className="w-6 h-6 flex items-center justify-center cursor-pointer" />
          </li>
        </ul>
        <SmallHeader />
      </div>
    </header>
  );
}
