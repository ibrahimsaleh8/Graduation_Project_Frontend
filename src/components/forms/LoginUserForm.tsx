import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import Link from "next/link";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginUserForm() {
  const [showPass, setShowPass] = useState(false);
  return (
    <form action="" className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-1">
        <Label htmlFor="email" className="text-sm font-medium">
          Email
        </Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <InputGroup>
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

      <Button className="cursor-pointer bg-main-blue-color text-white hover:bg-main-blue-color hover:text-white hover:opacity-75">
        Login
      </Button>
      <Link className="text-sm opacity-80 w-fit" href={"/"}>
        Forgot Password ?
      </Link>
    </form>
  );
}
