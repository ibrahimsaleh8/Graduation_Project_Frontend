import Image from "next/image";
import whyChooseImage from "@images/why-choose.png";
import { BarChart3, RefreshCcw, Sparkles, Users } from "lucide-react";
export default function WhyChooseUs() {
  return (
    <div className="py-10 px-4 flex flex-col text-center gap-20 pt-28">
      <p className="text-5xl capitalize font-bold mx-auto">Why choose Jobify</p>

      <div className="container mx-auto flex flex-col gap-9">
        <div className="w-full pt-14 border border-soft-border flex items-center justify-center bg-white rounded-2xl">
          <Image
            src={whyChooseImage}
            alt="Why choose Jobify"
            width={1000}
            height={1000}
            className="w-3/4"
          />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="w-full min-h-48 bg-white text-black rounded-2xl border border-soft-border p-4 flex flex-col gap-5 items-center justify-center">
            {/* Icon */}
            <div className="w-10 h-10 bg-glass-main-blue text-main-blue-color flex items-center rounded-full justify-center">
              <RefreshCcw className="w-5 h-5" />
            </div>
            <p className="font-medium lg:w-[60%] w-full">
              Pioneering Career Growth Through Innovative Solutions
            </p>
          </div>

          <div className="w-full min-h-48 bg-white text-black rounded-2xl border border-soft-border p-4 flex flex-col gap-5 items-center justify-center">
            {/* Icon */}
            <div className="w-10 h-10 bg-glass-main-blue text-main-blue-color flex items-center rounded-full justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="font-medium lg:w-[60%] w-full">
              Offering Detailed Insights into New Positions and Career Paths
            </p>
          </div>

          <div className="w-full min-h-48 bg-white text-black rounded-2xl border border-soft-border p-4 flex flex-col gap-5 items-center justify-center">
            {/* Icon */}
            <div className="w-10 h-10 bg-glass-main-blue text-main-blue-color flex items-center rounded-full justify-center">
              <Users className="w-5 h-5" />
            </div>
            <p className="font-medium lg:w-[60%] w-full">
              Tailored Career Solutions for Every Professional
            </p>
          </div>

          <div className="w-full min-h-48 bg-white text-black rounded-2xl border border-soft-border p-4 flex flex-col gap-5 items-center justify-center">
            {/* Icon */}
            <div className="w-10 h-10 bg-glass-main-blue text-main-blue-color flex items-center rounded-full justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <p className="font-medium lg:w-[60%] w-full">
              Transforming Career Trajectories with Strategic Insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
