"use client";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import Link from "next/link";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { useState } from "react";
import { AtSign, Eye, EyeOff } from "lucide-react";
import {
  Checkbox,
  CheckboxIndicator,
} from "@/components/animate-ui/primitives/base/checkbox";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  loginDataType,
  loginValidatioSchema,
} from "@/validations/loginValidatioSchema";
import ErrorValidationMessage from "./ErrorValidationMessage";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginDataType>({
    resolver: zodResolver(loginValidatioSchema),
    mode: "onSubmit",
  });
  const submitLogin: SubmitHandler<loginDataType> = (data) => console.log(data);

  const [showPass, setShowPass] = useState(false);

  return (
    <motion.form
      onSubmit={handleSubmit(submitLogin)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.5,
      }}
      className="flex flex-col gap-5 md:w-3/4 w-full mx-auto">
      {/* Email */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="font-medium">
          Email
        </Label>
        <InputGroup className="h-10">
          <InputGroupInput
            {...register("email")}
            placeholder="Email"
            type="email"
            id="email"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton aria-label="Email" title="Email" size="sm">
              <AtSign />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      {errors.email && (
        <ErrorValidationMessage message={errors.email.message as string} />
      )}

      {/* Password */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <InputGroup className="h-10">
          <InputGroupInput
            {...register("password")}
            placeholder="Password"
            type={showPass ? "text" : "password"}
            id="password"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Show Password"
              title="Show Password"
              className="cursor-pointer"
              size="sm"
              onClick={() => {
                setShowPass((pre) => !pre);
              }}>
              {showPass ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      {errors.password && (
        <ErrorValidationMessage message={errors.password.message as string} />
      )}
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <Checkbox
            id="remember-me"
            className="w-4 h-4 flex items-center justify-center border border-low-text checked:bg-main-blue-color rounded-[3px]">
            <CheckboxIndicator className="w-3 h-3" />
          </Checkbox>
          <Label htmlFor="remember-me">Remeber Me</Label>
        </div>
        <Link className="text-sm w-fit" href={"/forgot-password"}>
          Forgot Password ?
        </Link>
      </div>

      <Button className="cursor-pointer h-11 bg-main-blue-color text-white hover:bg-main-blue-color hover:text-white hover:opacity-75">
        Login
      </Button>

      <p className="flex items-center gap-1 text-sm">
        {"Don't have an account yet ?"}
        <Link
          className="text-main-blue-color dark:text-blue-500 font-medium"
          href={"/register"}>
          Sign up
        </Link>
      </p>
    </motion.form>
  );
}
