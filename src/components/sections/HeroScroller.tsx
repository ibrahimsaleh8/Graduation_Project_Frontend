"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import Image from "next/image";

// Import all icons
import airbnb from "@images/Icons/airbnb.svg";
import amazonDark from "@images/Icons/logo-amazon.svg";
import discord from "@images/Icons/discord-wordmark-1.svg";
import ebay from "@images/Icons/ebay.svg";
import Google from "@images/Icons/google-6.svg";
import ibm from "@images/Icons/ibm.svg";
import microsoft from "@images/Icons/microsoft-6.svg";
import netflix from "@images/Icons/netflix-2015-logo.svg";
import spotify from "@images/Icons/spotify-logo-with-text-2.svg";
import yahoo from "@images/Icons/yahoo-7.svg";
import apple from "@images/Icons/apple-11.svg";
import godady from "@images/Icons/GoDaddy_light.svg";
import facebook from "@images/Icons/facebook-7.svg";
import samsung from "@images/Icons/samsung-electronics.svg";
// ✅ All icons in one array (light + dark)
const ICONS = [
  airbnb,
  amazonDark,
  discord,
  ebay,
  Google,
  ibm,
  microsoft,
  netflix,
  spotify,
  yahoo,
  apple,
  godady,
  facebook,
  samsung,
];

export default function HeroScroller() {
  return (
    <ScrollVelocityContainer className="py-8">
      {/* First row */}
      <ScrollVelocityRow baseVelocity={5} direction={1}>
        {ICONS.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt="Brand Logo"
            width={160}
            height={80}
            loading="lazy"
            decoding="async"
            className="mx-6 w-32 grayscale dark:invert object-contain transition duration-300"
          />
        ))}
      </ScrollVelocityRow>
      <ScrollVelocityRow baseVelocity={5} direction={-1} className="mt-5">
        {ICONS.reverse().map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt="Brand Logo"
            width={160}
            height={80}
            loading="lazy"
            decoding="async"
            className="mx-6 w-32 grayscale dark:invert object-contain transition duration-300"
          />
        ))}
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  );
}
