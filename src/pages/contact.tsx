import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div className="bg-brand-base text-brand-light dark:bg-brand-light dark:text-white flex flex-col items-center font-custom mt-10">
      <div data-aos="zoom-in-up">
        <h2 className="text-3d text-brand-light dark:text-brand-lightest text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest pb-5">
          Lets Talk ...
        </h2>
      </div>

      <form
        name="contact"
        action="/success"
        method="POST"
        data-netlify="true"
        className="flex flex-col w-1/2"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>Name:</label>
        <input
          className="shadow-none border-none border-b border-gray-500 focus:outline-none px-2 rounded-sm mb-8 pt-1 pb-1"
          type="text"
          name="name"
          placeholder="John/Jane Doe"
          required
        />
        <label>Email:</label>
        <input
          className="shadow-none border-none border-b border-gray-500 focus:outline-none px-2 rounded-sm mb-8 pt-1 pb-1"
          placeholder="email@email.com"
          type="email"
          name="email"
          required
        />
        <label>Message:</label>
        <textarea
          className="shadow-xl px-2 rounded-sm mb-8 pt-1 pb-12"
          placeholder="what should we do?"
          name="message"
          required
        ></textarea>
        <button
          className="mb-4 border w-full border-brand-dark font-custom tracking-wider rounded-sm hover:text-brand-darkest bg-gradient-to-r from-brand-light/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
