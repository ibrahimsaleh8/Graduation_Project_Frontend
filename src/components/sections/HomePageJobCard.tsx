import { Bookmark, ChevronRight } from "lucide-react";
import { PiBuildingFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";
import Link from "next/link";

export default function HomePageJobCard() {
  return (
    <div className="border border-soft-border w-full flex flex-col gap-8 rounded-lg p-6 bg-card-bg">
      {/* Top */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Logo */}
        <div className="bg-main-blue-color rounded-full w-10 h-10"></div>
        {/* Text */}
        <div className="flex flex-col gap-0 items-start">
          <p className="font-medium capitalize">Mobile App Developer</p>
          <p className="capitalize text-xs font-medium">Samsung</p>
        </div>

        {/* Icon */}
        <Bookmark className="w-5 h-5 text-main-blue-color dark:text-blue-500 ml-auto" />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-5 pl-1 border-b border-soft-border pb-5">
        {/* Text */}
        <div className="grid grid-cols-2 gap-5 text-start text-[#878b94]">
          <div className="flex items-center gap-1 text-sm font-medium ">
            <PiBuildingFill className="w-4 h-4" />
            <p>Samsung</p>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <FaLocationDot className="w-4 h-4" />
            <p>Cairo</p>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <FaChartPie className="w-4 h-4" />
            <p>Technology</p>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <HiCurrencyDollar className="w-4 h-4" />
            <p>15K-25K</p>
          </div>
        </div>

        {/* Keywords */}
        <div className="flex items-center gap-3 flex-wrap">
          <p className="px-6 py-1.5 text-xs bg-glass-main-blue text-main-blue-color w-fit rounded-md">
            Key 1
          </p>
          <p className="px-6 py-1.5 text-xs bg-glass-main-blue text-main-blue-color w-fit rounded-md">
            Key 1
          </p>
          <p className="px-6 py-1.5 text-xs bg-glass-main-blue text-main-blue-color w-fit rounded-md">
            Key 1
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between text-sm flex-wrap">
        <p className="text-main-blue-color dark:text-blue-600">14 June 2025</p>
        <Link
          href={"/"}
          className="bg-main-blue-color text-white px-6 py-2 rounded-md flex items-center gap-2">
          Job Details
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
