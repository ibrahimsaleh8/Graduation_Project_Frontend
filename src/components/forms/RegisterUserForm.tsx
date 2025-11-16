import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";

import MultipleSelector from "../ui/multiselect";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
const specializations = [
  {
    value: "frontend_development",
    label: "Frontend Development",
  },
  {
    value: "backend_development",
    label: "Backend Development",
  },
  {
    value: "fullstack_development",
    label: "Full-Stack Development",
  },
  {
    value: "mobile_development",
    label: "Mobile App Development",
  },
  {
    value: "ui_ux_design",
    label: "UI/UX Design",
  },
  {
    value: "graphic_design",
    label: "Graphic Design",
  },
  {
    value: "data_science",
    label: "Data Science",
  },
  {
    value: "machine_learning",
    label: "Machine Learning / AI",
  },
  {
    value: "cybersecurity",
    label: "Cybersecurity",
  },
  {
    value: "devops_engineering",
    label: "DevOps Engineering",
  },
  {
    value: "cloud_computing",
    label: "Cloud Computing",
  },
  {
    value: "database_administration",
    label: "Database Administration",
  },
  {
    value: "game_development",
    label: "Game Development",
  },
  {
    value: "software_testing",
    label: "Software Testing / QA",
  },
  {
    value: "blockchain_development",
    label: "Blockchain Development",
  },
  {
    value: "digital_marketing",
    label: "Digital Marketing",
  },
  {
    value: "content_writing",
    label: "Content Writing / Copywriting",
  },
  {
    value: "project_management",
    label: "Project Management",
  },
  {
    value: "it_support",
    label: "IT Support / Helpdesk",
  },
  {
    value: "network_engineering",
    label: "Network Engineering",
  },
];

export default function RegisterUserForm() {
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  return (
    <form className="flex flex-col gap-5 w-full ">
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
          Email
        </Label>
        <Input type="email" className="h-10" id="email" placeholder="Email" />
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

      <div className="flex flex-col gap-1">
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

      <div className="flex flex-col gap-1">
        <Label className="text-sm font-medium">Specialization</Label>
        <MultipleSelector
          className="bg-second-bg h-10"
          commandProps={{
            label: "Specialization",
          }}
          defaultOptions={specializations}
          onChange={(e) => console.log(e)}
          placeholder="Select Specialization"
          hidePlaceholderWhenSelected
          emptyIndicator={
            <p className="text-center text-sm">No results found</p>
          }
        />
      </div>

      <Button className="cursor-pointer h-10 bg-main-blue-color text-white hover:bg-main-blue-color hover:text-white hover:opacity-75">
        Create Employee Account
      </Button>
    </form>
  );
}
