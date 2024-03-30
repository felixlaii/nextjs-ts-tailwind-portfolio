import Image from "next/image";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FELIX_DETAILS } from "../../../../data/portfolio-info";

const LogoFooter = () => {
  return (
    <div>
      <div className="relative">
        <Image
          className="w-[8.3rem] h-[2.7rem] md:w-[8rem] md:h-[2.5rem] lg:w-[11.5rem] lg:h-[2.5rem] pt-4 pb-2"
          width={100}
          height={40}
          src="/images/felixlaii-logo-white.svg"
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
              fill="#FFFFFF"
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
        <div className="mx-5 mb-2">
          <a
            href="https://www.instagram.com/felixlaii_codes?igsh=MTd0a3g4MGJsd3RtYQ%3D%3D&utm_source=qr"
            target="_blank"
          >
            {" "}
            <Image
              width={35}
              height={35}
              src="/images/Instagram_Glyph_Gradient.png"
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
        <div className=" flex flex-row justify-center mt-2 mb-1">
          <AiOutlinePhone className="mr-2 w-4 h-4 text-white" />
          <a
            className="hover:underline font-primary text-[.8em] text-zinc-300 tracking-widest"
            href={`tel:${FELIX_DETAILS.phone}`}
          >
            {FELIX_DETAILS.phone}
          </a>
        </div>
        <div className=" flex flex-row justify-center mt-2 mb-1">
          <AiOutlineMail className="mr-2 w-4 h-4 text-white" />
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
const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-headerbg text-white dark:bg-brand-altDarkMode dark:text-black w-full font-custom">
      <div className="flex flex-col items-center justify-center">
        <div>
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
