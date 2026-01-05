import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react/dist/cjs/lucide-react";
import SocialIcon from "./SocialIcon";

const MARQUEE_COPIES = 9;

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white ">
      {/* upper area: large text */}
      <div
        className="relative max-w-7xl mx-auto p-4 sm:p-8 py-18
        lg:py-24 overflow-hidden"
      >
        {/* Marquee Copies : Dynamic generated */}
        <div className="flex min-w-full whitespace-nowrap animate-marquee">
          {Array.from({ length: MARQUEE_COPIES }).map((_, index) => (
            <p
              key={index}
              aria-hidden={index !== 0 ? "true" : "false"}
              className="text-9xl lg:text-[250px] impact font-extrabold
                leading-none opacity-90 lg:opacity-95 pr-20"
            >
              FURNISHINGS
            </p>
          ))}
        </div>

        {/* sofa image */}
        <img
          src="/images/sofa.png"
          alt="sofa_image"
          className="bottom-0 left-1/2 -translate-1/2 lg:w-[400px] mt-10 lg:mt-20
                absolute hover:animate-wiggle duration-700 ease-in-out cursor-pointer"
        />
      </div>
      {/* bottom area: Copyright and social icons */}
      <div className="border-t border-zinc-800 py-6 lg:py-10">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between
            items-center space-y-4 sm:space-y-0 text-sm"
        >
          {/* Copyright */}
          <p className="text-zinc-400">
            <strong> Copyright © 2024</strong> All rights reserved
          </p>

          {/* Social icons */}

          <div className="flex space-x-3">
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Linkedin} />
            <SocialIcon Icon={Youtube} />
          </div>

          {/* Design Credit */}
          <p className="text-zinc-400">
            Design by <strong>Gaurav(kirito)</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
