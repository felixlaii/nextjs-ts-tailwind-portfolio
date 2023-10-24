import Link from "next/link";
import Image from "next/image"
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FooterProps } from "@/types/component-types";
import { snakeCaseToTitleCase } from "@/lib/functions";
import { FELIX_DETAILS } from "../../../../data/portfolio-info";
import {
  PiTiktokLogoLight,
  PiFacebookLogo,
  PiInstagramLogoLight,
} from "react-icons/pi";

const iconClassName = "mr-2 w-4 h-4 text-white";
const divClassName = " flex flex-row justify-center mt-2 mb-1";
const socialIconClassName = "mt-3 mb-3 mr-4 w-7 h-7 text-brand-gold";

const LogoFooter = () => {
  return (
    <div>
         <div className="relative">
        <Image className="h-[6.5rem]" src="/images/blue-logo-1.png" alt="logo" />
      </div>
    </div>
  )
}

const PortfolioSocials = () => {
  return (
    <div>
       <div className="flex flex-row mb-1">
        <div>
          <a href="https://www.instagram.com/mix.6ix/" target="_blank">
            {" "}
            <PiInstagramLogoLight className={socialIconClassName} />
          </a>
        </div>
        <div>
          <a
            href="https://www.tiktok.com/@mix.6ix?_t=8dTWCTllNv4&_r=1"
            target="_blank"
          >
            <PiTiktokLogoLight className={socialIconClassName} />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/MIXX6IX" target="_blank">
            {" "}
            <PiFacebookLogo className={socialIconClassName} />
          </a>
        </div>
      </div>
    </div>
  )
}
const Footer: React.FC = () => {
  return <div className="w-screen"></div>;
};

export default Footer;
