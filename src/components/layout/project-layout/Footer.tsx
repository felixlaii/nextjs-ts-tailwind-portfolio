import Link from "next/link";
import Image from "next/image";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FooterProps } from "@/types/component-types";
import { snakeCaseToTitleCase } from "@/lib/functions";
import { FELIX_DETAILS } from "../../../../data/portfolio-info";
import { PiTiktokLogoLight, PiInstagramLogoLight } from "react-icons/pi";

const iconClassName = "mr-2 w-4 h-4 text-white";
const divClassName = " flex flex-row justify-center mt-2 mb-1";
const socialIconClassName = "mt-3 mb-3 mr-4 w-7 h-7 text-brand-gold";

const LogoFooter = () => {
  return (
    <div>
      <div className="relative">
        <Image
          className="h-[6.5rem]"
          width={150}
          height={150}
          src="/images/blue-logo-1.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

const PortfolioSocials = () => {
  return (
    <div>
      <div className="flex flex-row mb-1">
        <div>
          <a
            href="https://instagram.com/felixlaii?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            target="_blank"
          >
            {" "}
            <PiInstagramLogoLight className={socialIconClassName} />
          </a>
        </div>
        <div>
          <a
            href="https://www.tiktok.com/@felixlaii?_t=8gmTSGiRDUc&_r=1"
            target="_blank"
          >
            {" "}
            <PiTiktokLogoLight className={socialIconClassName} />
          </a>
        </div>
      </div>
    </div>
  );
};

const PortfolioContact = () => {
  return (
    <div>
      <div className="pb-1">
        <div className={divClassName}>
          <AiOutlinePhone className={iconClassName} />
          <a
            className="hover:underline font-primary text-[.7em] text-zinc-300 tracking-widest"
            href={`tel:${FELIX_DETAILS.phone}`}
          >
            {FELIX_DETAILS.phone}
          </a>
        </div>
        <div className={divClassName}>
          <AiOutlineMail className={iconClassName} />
          <a
            className="font-primary text-[.7em] hover:underline tracking-[.3em] text-zinc-300"
            href={`mailto:${FELIX_DETAILS.email}`}
          >
            {FELIX_DETAILS.email}
          </a>
        </div>
      </div>
    </div>
  );
};
const Footer: React.FC = () => {
  return (
    <div className="h-full mt-18 bg-brand-lightest">
      <div className="flex flex-col items-center justify-center">
        <div className="hidden md:inline-block">
          <LogoFooter />
        </div>

        <div>
          <PortfolioContact />
        </div>
        <div>
          <PortfolioSocials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
