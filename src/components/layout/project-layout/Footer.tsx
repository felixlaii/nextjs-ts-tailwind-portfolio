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
      
    </div>
  )
}
const Footer: React.FC = () => {
  return <div className="w-screen"></div>;
};

export default Footer;
