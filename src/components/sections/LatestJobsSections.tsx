import Link from "next/link";
import HomePageJobCard from "./HomePageJobCard";
import { TypingAnimation } from "../ui/typing-animation";

export default function LatestJobsSections() {
  return (
    <div className="py-10 px-4 bg-second-bg flex flex-col text-center gap-20 pt-28">
      <TypingAnimation
        as={"p"}
        startOnView={true}
        className="text-5xl capitalize font-bold mx-auto">
        Latest job opportunities
      </TypingAnimation>
      {/* Jobs */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10">
        <HomePageJobCard />
        <HomePageJobCard />
        <HomePageJobCard />
      </div>

      <Link
        href={"/"}
        className="px-6 py-2.5 text-sm hover:bg-main-blue-color hover:border-main-blue-color hover:text-white duration-300 border border-soft-border w-fit mx-auto rounded-md text-main-blue-color dark:text-white font-medium">
        More opportunities
      </Link>
    </div>
  );
}
