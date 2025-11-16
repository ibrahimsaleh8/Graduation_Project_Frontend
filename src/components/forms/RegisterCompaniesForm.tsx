import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterCompaniesForm() {
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  return (
    <form action="" className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="company-name" className="text-sm font-medium">
          Company name
        </Label>
        <Input
          className="h-10"
          type="text"
          id="company-name"
          placeholder="Company name"
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="first-name" className="text-sm font-medium">
            First name
          </Label>
          <Input
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
            type="text"
            id="last-name"
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Business email
        </Label>
        <Input
          className="h-10"
          type="email"
          id="email"
          placeholder="Business email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <InputGroup className="h-10">
          <InputGroupInput
            placeholder="Password"
            type={showPass ? "text" : "password"}
            id="password"
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
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="conf-pass" className="text-sm font-medium">
          Confirm Password
        </Label>
        <InputGroup className="h-10">
          <InputGroupInput
            placeholder="Confirm Password"
            type={showConfPass ? "text" : "password"}
            id="conf-pass"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Show Password"
              title="Show Password"
              size="sm"
              onClick={() => {
                setShowConfPass((pre) => !pre);
              }}>
              {showConfPass ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <Button className="cursor-pointer h-10 bg-main-blue-color text-white hover:bg-main-blue-color hover:text-white hover:opacity-75">
        Create Company Account
      </Button>
    </form>
  );
}
