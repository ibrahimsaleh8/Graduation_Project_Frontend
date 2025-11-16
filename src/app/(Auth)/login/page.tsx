"use client";
import LoginUserForm from "@/components/forms/LoginUserForm";
import Image from "next/image";
import logoImage from "@images/logo.webp";
import Link from "next/link";
import authImage from "@images/auth-image.png";
import { House } from "lucide-react";
import { motion } from "framer-motion";
export default function LoginPage() {
  return (
    <div className="w-full md:h-screen min-h-screen flex p-2 ">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "98%" }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 lg:flex overflow-hidden items-center justify-center m-4 rounded-2xl hidden bg-main-blue-color">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.6,
          }}
          className="w-3/4 mx-auto mb-32">
          <Image
            src={authImage}
            alt="auth Image"
            width={1000}
            height={1000}
            className="w-full"
          />
        </motion.div>
      </motion.div>

      <div className="lg:w-1/2 w-full rounded-md p-5 pt-36 flex flex-col gap-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
          }}
          className="bg-main-blue-color text-white hover:bg-transparent hover:text-main-blue-color border-2 duration-300 border-main-blue-color w-13 h-13 flex items-center justify-center rounded-full absolute right-7 top-7">
          <Link
            className="w-full h-full flex items-center justify-center"
            href={"/"}>
            <House className="w-6 h-6" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
          className="flex flex-col gap-5 items-center justify-center w-full">
          <Link href={"/"}>
            <Image
              src={logoImage}
              alt="Logo"
              width={1000}
              height={1000}
              className="w-28"
            />
          </Link>
          <p className="text-3xl font-medium">Welcome Back!</p>
          <p className="text-low-text text-center">
            Enter your details to login into your account (Employee or Company)
          </p>
        </motion.div>

        <LoginUserForm />
      </div>
    </div>
  );
}
