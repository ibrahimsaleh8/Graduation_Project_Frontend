"use client";
import Link from "next/link";
import { NumberTicker } from "../ui/number-ticker";
import { TextAnimate } from "../ui/text-animate";
import { motion } from "framer-motion";
import heroImage from "@images/heroImage.webp";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-between items-center pt-14 ">
      {/* Text */}
      <div className="flex flex-col lg:items-start lg:text-start items-center text-center gap-8 lg:w-1/2 w-full">
        <TextAnimate
          duration={0.7}
          className="lg:text-6xl text-5xl font-medium w-full"
          animation="blurIn"
          as="h1">
          Find Your Dream Job or Perfect Candidate
        </TextAnimate>
        <TextAnimate
          delay={0.3}
          duration={0.5}
          className="w-3/4"
          animation="slideUp"
          by="word"
          as={"p"}>
          Connect companies with talented professionals on the leading
          recruitment platform
        </TextAnimate>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex items-center gap-5 flex-wrap">
          <Link
            className="py-4 px-6 w-full sm:w-fit rounded-xl text-sm text-white font-medium bg-[#1942be] hover:opacity-75 duration-300"
            href={"/companies"}>
            Join as Company
          </Link>
          <Link
            className="py-4 px-6 w-full sm:w-fit rounded-xl text-sm dark:text-black bg-black text-white font-medium dark:bg-white hover:opacity-75 duration-300"
            href={"/employee"}>
            Join as Job Seeker
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex items-center flex-wrap gap-10 mt-10">
          <div>
            <p>
              <NumberTicker delay={0.6} value={10000} />+
            </p>

            <p>Active Jobs</p>
          </div>
          <div>
            <p>
              <NumberTicker delay={0.6} value={5000} />+
            </p>
            <p>Companies</p>
          </div>
          <div>
            <p>
              <NumberTicker delay={0.6} value={50000} />+
            </p>
            <p>Job Seekers</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="lg:w-[38rem] w-full h-[30rem] bg-white rounded-2xl overflow-hidden">
        <Image
          src={heroImage}
          alt="Hero Image"
          width={1000}
          height={1000}
          className="lg:w-[38rem] w-full h-[30rem] object-center object-cover"
        />
      </motion.div>
    </div>
  );
}
