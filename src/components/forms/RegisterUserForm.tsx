import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";

import { Eye, EyeOff, Phone } from "lucide-react";
import { useState } from "react";
import CountrySelect from "./CountrySelect";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  UserRegisterDataType,
  userRegisterValidatioSchema,
} from "@/validations/RegisterValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorValidationMessage from "./ErrorValidationMessage";

export default function RegisterUserForm() {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserRegisterDataType>({
    resolver: zodResolver(userRegisterValidatioSchema),
    mode: "onSubmit",
  });
  const submitRegisterUser: SubmitHandler<UserRegisterDataType> = (data) =>
    console.log(data);

  return (
    <form
      onSubmit={handleSubmit(submitRegisterUser)}
      className="flex flex-col gap-5 w-full ">
      {/* Name */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="first-name" className="text-sm font-medium">
            First name
          </Label>
          <Input
            {...register("firstName")}
            className="h-10"
            type="text"
            id="first-name"
            placeholder="First name"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="last-name" className="text-sm font-medium">
            Last name
          </Label>
          <Input
            className="h-10"
            {...register("lastName")}
            type="text"
            id="last-name"
            placeholder="Last name"
          />
        </div>
      </div>
      {(errors.firstName || errors.lastName) && (
        <div className="flex items-center gap-6 flex-wrap">
          {errors.firstName && (
            <ErrorValidationMessage
              message={errors.firstName.message as string}
            />
          )}
          {errors.lastName && (
            <ErrorValidationMessage
              message={errors.lastName.message as string}
            />
          )}
        </div>
      )}

      {/* Email */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email
        </Label>
        <Input
          {...register("email")}
          type="email"
          className="h-10"
          id="email"
          placeholder="Email"
        />
        {errors.email && (
          <ErrorValidationMessage message={errors.email.message as string} />
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <InputGroup className="h-10">
          <InputGroupInput
            placeholder="Password"
            type={showPass ? "text" : "password"}
            id="password"
            {...register("password")}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Show Password"
              title="Show Password"
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
        {errors.password && (
          <ErrorValidationMessage message={errors.password.message as string} />
        )}
      </div>

      {/* Country */}
      <div className="flex flex-col gap-1">
        <Label className="text-sm font-medium">Country</Label>
        <CountrySelect setCountryValue={setValue} />
        {errors.location && (
          <ErrorValidationMessage message={errors.location.message as string} />
        )}
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone-number" className="text-sm font-medium">
          Phone Number
        </Label>
        <InputGroup className="h-10">
          <InputGroupInput
            placeholder="Phone Number"
            type="text"
            id="phone-number"
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, "");
              e.target.value = onlyNums;
              setValue("phoneNumber", e.target.value);
            }}
          />

          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Phone Number"
              title="Phone Number"
              size="sm">
              <Phone />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        {errors.phoneNumber && (
          <ErrorValidationMessage
            message={errors.phoneNumber.message as string}
          />
        )}
      </div>

      <Button className="cursor-pointer h-10 bg-main-blue-color text-white hover:bg-main-blue-color hover:text-white hover:opacity-75">
        Create Employee Account
      </Button>
    </form>
  );
}
