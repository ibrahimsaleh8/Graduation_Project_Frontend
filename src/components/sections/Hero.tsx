"use client";
import { MapPin, Search } from "lucide-react";
import { TextAnimate } from "../ui/text-animate";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import user1Image from "@images/user1.webp";
import user2Image from "@images/user2.webp";
import user3Image from "@images/user3.webp";
import Image from "next/image";
import HeroScroller from "./HeroScroller";

export default function Hero() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 90px)",
      }}
      className="pt-14 flex flex-col gap-6">
      <div className="container mx-auto flex flex-col gap-6 px-1">
        {/* Text */}
        <div className="flex flex-col items-center text-center gap-10 ">
          <motion.p
            className="text-main-blue-color dark:text-white uppercase font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}>
            #1 job portal
          </motion.p>
          <div className="flex flex-col gap-2 capitalize lg:text-6xl text-5xl font-bold w-full">
            <TextAnimate once={true} duration={0.5} animation="blurIn" as="p">
              Build your very own job
            </TextAnimate>
            <TextAnimate
              once={true}
              duration={0.5}
              delay={0.5}
              animation="blurIn"
              as="p">
              portal with Jobify
            </TextAnimate>
          </div>
          <TextAnimate
            delay={0.3}
            duration={0.5}
            className="text-low-text text-2xl font-medium "
            animation="slideUp"
            by="word"
            once={true}
            as={"p"}>
            Discover your next career move with confidence and ease
          </TextAnimate>
        </div>

        {/* Search & Rating */}
        <div className="lg:w-[60%] w-full mx-auto flex flex-col gap-10 px-2">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 border border-soft-border flex flex-col md:flex-row items-center rounded-lg bg-second-bg">
            <div className="flex items-center gap-3 px-3 w-full">
              <Search className="w-5 h-5 opacity-50" />
              <input
                type="text"
                placeholder="Search job"
                className="py-4 w-full focus:outline-0 placeholder:opacity-50 placeholder:text-black dark:placeholder:text-white"
              />
            </div>

            <div className="flex pb-2 md:pb-0 flex-col md:flex-row items-center gap-3 pl-3 pr-1 w-full md:border-l border-t md:border-t-0">
              <div className="flex items-center gap-3 w-full">
                <MapPin className="w-5 h-5 opacity-50" />
                <input
                  type="text"
                  placeholder="Location"
                  className="py-4 w-full focus:outline-0 placeholder:opacity-50 placeholder:text-black dark:placeholder:text-white"
                />
              </div>
              <button className="bg-main-blue-color  px-6 md:w-fit w-full hover:opacity-80 duration-300 py-3 rounded-md cursor-pointer text-sm text-white">
                Search
              </button>
            </div>
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex gap-6 items-center mx-auto">
            {/* Images */}
            <div className="flex -space-x-[0.9rem]">
              <div className="rounded-full ring-2 ring-background w-12 h-12 bg-main-blue-color">
                <Image
                  src={user1Image}
                  alt="user 1 image"
                  width={1000}
                  height={1000}
                  className="w-12 h-12 object-cover object-top rounded-full"
                />
              </div>
              <div className="rounded-full ring-2 ring-background w-12 h-12 bg-main-blue-color">
                <Image
                  src={user2Image}
                  alt="user 2 image"
                  width={1000}
                  height={1000}
                  className="w-12 h-12 object-cover object-top rounded-full"
                />
              </div>
              <div className="rounded-full ring-2 ring-background w-12 h-12 bg-main-blue-color">
                <Image
                  src={user3Image}
                  alt="user 3 image"
                  width={1000}
                  height={1000}
                  className="w-12 h-12 object-cover object-top rounded-full"
                />
              </div>
            </div>
            {/* Stars & TXT */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  <FaStar className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="font-bold pt-1">4.9</p>
              </div>
              <p className="text-sm">Over 100+ reviews</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative flex w-full mt-auto flex-col items-center justify-center overflow-hidden py-8">
        <HeroScroller />
      </div>
    </div>
  );
}
