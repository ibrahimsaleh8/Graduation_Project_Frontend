"use client";

import RegisterUserForm from "@/components/forms/RegisterUserForm";

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/radix/tabs";
import RegisterCompaniesForm from "@/components/forms/RegisterCompaniesForm";
import { motion } from "framer-motion";
import Image from "next/image";
import registerImage from "@images/register-image.png";
import Link from "next/link";
import { House } from "lucide-react";
import logoImage from "@images/logo.webp";

export default function RegisterPage() {
  return (
    <div className="w-full md:h-screen min-h-screen flex p-2 md:pb-0 pb-10">
      {/* Image */}
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
            src={registerImage}
            alt="auth Image"
            width={1000}
            height={1000}
            className="w-full"
          />
        </motion.div>
      </motion.div>

      {/* Form */}
      <div className="lg:w-1/2 w-full rounded-md p-5 md:pt-36 pt-24 flex flex-col gap-8 relative">
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
          <p className="text-3xl font-medium">Create An Account</p>
          <p className="text-low-text text-center">
            Enter your details to join us (Employee or Company)
          </p>
        </motion.div>

        <div className="md:w-3/4 w-full mx-auto">
          <Tabs defaultValue="employee">
            <TabsList className="w-60 h-10 bg-[#eeee] dark:bg-bcard-bg">
              <TabsTrigger className="h-9 cursor-pointer" value="employee">
                Employee
              </TabsTrigger>
              <TabsTrigger className="h-9 cursor-pointer" value="company">
                Company
              </TabsTrigger>
            </TabsList>
            <TabsContents className="!overflow-visible mt-2">
              <TabsContent className="overflow-visible" value="employee">
                <RegisterUserForm />
              </TabsContent>
              <TabsContent value="company">
                <RegisterCompaniesForm />
              </TabsContent>
            </TabsContents>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
