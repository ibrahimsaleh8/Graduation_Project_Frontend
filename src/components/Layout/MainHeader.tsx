"use client";
import Container from "./Container";
import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { usePathname } from "next/navigation";
export default function MainHeader() {
  const route = usePathname();

  console.log(route);
  return (
    <header>
      <Container>
        <div className="flex items-center gap-4 justify-between w-full">
          <Link href={"/"} className="font-bold">
            JobWay
          </Link>
          <nav className="w-full flex items-center justify-end">
            <ul className="flex items-center sm:gap-7 gap-2 text-sm font-medium">
              <li>
                <Link
                  className={`hover:bg-hover-color duration-300 py-2 px-4 rounded-md ${
                    route == "/employee" ? "bg-hover-color" : ""
                  } `}
                  href={"/employee"}>
                  Employee
                </Link>
              </li>
              <li>
                <Link
                  className={`hover:bg-hover-color duration-300 py-2 px-4  rounded-md ${
                    route == "/companies" ? "bg-hover-color" : ""
                  }`}
                  href={"/companies"}>
                  Companies
                </Link>
              </li>
              <li>
                <AnimatedThemeToggler className="w-6 h-6 flex items-center justify-center cursor-pointer" />
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
