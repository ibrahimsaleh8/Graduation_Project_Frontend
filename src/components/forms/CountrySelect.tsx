import {
  Command,
  CommandCheck,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { countries } from "@/lib/Countries";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { UseFormSetValue } from "react-hook-form";
import { UserRegisterDataType } from "@/validations/RegisterValidationSchema";

export default function CountrySelect({
  setCountryValue,
}: {
  setCountryValue: UseFormSetValue<UserRegisterDataType>;
}) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="bg-second-bg h-10 border text-black dark:text-white flex justify-start hover:bg-transparent">
          <span className="flex items-center gap-3 justify-between w-full">
            {value ? (
              countries.find((country) => country === value)
            ) : (
              <>
                Select Country <ChevronDown />
              </>
            )}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popper-anchor-width) p-0">
        <Command>
          <CommandInput placeholder="Search city..." />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country}
                  value={country}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    setCountryValue("location", currentValue);
                  }}>
                  <span className="truncate">{country}</span>
                  {value === country && <CommandCheck />}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
