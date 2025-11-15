import Link from "next/link";
import logo from "@images/logo.webp";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className=" py-10 pt-16 px-4 bg-second-bg ">
      <div className="container mx-auto  flex flex-col gap-6">
        {/* Links */}
        <div className="flex items-center justify-between flex-wrap gap-7 pb-4">
          <Link href={"/"} className="w-fit">
            <Image
              src={logo}
              alt="logo"
              width={1000}
              height={1000}
              className="w-32"
            />
          </Link>

          <div className="flex flex-col gap-6 min-w-32">
            <p className="font-bold">Main Links</p>
            <ul className="flex flex-col gap-6">
              <li>
                <Link href={"/"}>Jobs</Link>
              </li>
              <li>
                <Link href={"/"}>Login</Link>
              </li>
              <li>
                <Link href={"/"}>Register</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 min-w-32">
            <p className="font-bold">Our Links</p>
            <ul className="flex flex-col gap-6">
              <li>
                <Link href={"/"}>About us</Link>
              </li>
              <li>
                <Link href={"/"}>Contact us</Link>
              </li>
              <li>
                <Link href={"/"}>Latest News</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 min-w-32">
            <p className="font-bold">Our Socials</p>
            <ul className="flex flex-col gap-6">
              <li>
                <Link className="flex items-center gap-2" href={"/"}>
                  <FaFacebook className="w-5 h-5" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2" href={"/"}>
                  <FaLinkedin className="w-5 h-5" />
                  Linkedin
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2" href={"/"}>
                  <FaInstagram className="w-5 h-5" />
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center sm:justify-between justify-center gap-3 flex-wrap pt-4 border-t border-soft-border">
          <p>Copyright &#169; 2025 Jobify</p>
          <p>
            Developed By ❤️{" "}
            <Link
              href={"/"}
              className="underline text-main-blue-color font-medium dark:text-blue-600">
              Our Team
            </Link>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
