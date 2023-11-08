import Link from "next/link";
import Image from "next/image";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FooterProps } from "@/types/component-types";
import { FELIX_DETAILS } from "../../../../data/portfolio-info";

interface FooterDarkProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const iconClassName = "mr-2 w-4 h-4 text-white";
const divClassName = " flex flex-row justify-center mt-2 mb-1";
const socialIconClassName = "mt-3 mb-3 mr-4 w-7 h-7 text-brand-gold";

const LogoFooter = () => {
  return (
    <div>
      <div className="relative">
        <Image
          className="sm:w-[8rem] sm:h-[2.5rem] md:w-[6rem] md:h-[9rem] lg:w-[12rem] lg:h-[3rem]"
          width={100}
          height={40}
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
        <div className="mx-5">
          <a href="https://github.com/felixlaii" target="_blank">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#FFFFFF" // Change this to your desired color
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.22 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.492-4.042-1.492-.546-1.385-1.333-1.754-1.333-1.754-1.088-.743.083-.727.083-.727 1.203.085 1.838 1.236 1.838 1.236 1.07 1.832 2.81 1.304 3.493.995.108-.776.416-1.303.76-1.605-2.665-.302-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.54-1.523.117-3.176 0 0 1.007-.322 3.3 1.23.958-.267 1.98-.4 3-.405 1.02.005 2.042.138 3 .405 2.28-1.552 3.287-1.23 3.287-1.23.66 1.653.24 2.873.12 3.176.75.84 1.206 1.91 1.206 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.102.81 2.22 0 1.602-.015 2.888-.015 3.28 0 .32.21.696.825.576C20.565 21.798 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <div className="mx-5 mb-2">
          <a href="https://www.linkedin.com/in/felixlaii" target="_blank">
            {" "}
            <Image
              width={35}
              height={35}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="socials"
            />
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
            className="hover:underline font-primary text-[.8em] text-zinc-300 tracking-widest"
            href={`tel:${FELIX_DETAILS.phone}`}
          >
            {FELIX_DETAILS.phone}
          </a>
        </div>
        <div className={divClassName}>
          <AiOutlineMail className={iconClassName} />
          <a
            className="font-primary text-[.8em] hover:underline tracking-[.3em] text-zinc-300"
            href={`mailto:${FELIX_DETAILS.email}`}
          >
            {FELIX_DETAILS.email}
          </a>
        </div>
      </div>
    </div>
  );
};
const Footer: React.FC<FooterDarkProps> = ({ isDarkMode }) => {
  return (
<footer
  className={`h-full mt-10 font-custom ${
    isDarkMode ? "bg-dark text-white" : "bg-light text-black"
  }`}
>
      <div className="flex flex-col items-center justify-center">
        <div className="md:inline-block">
          <LogoFooter />
        </div>

        <div>
          <PortfolioContact />
        </div>
        <div>
          <PortfolioSocials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
