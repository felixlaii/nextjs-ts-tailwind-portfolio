import React from "react";

interface ContactDarkProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactDarkProps> = ({ isDarkMode }) => {
  return (
    <div
      className={`flex flex-col items-center font-custom mt-10 mb-15 ${
        isDarkMode
          ? "bg-brand-light text-black"
          : "bg-brand-base text-brand-light"
      } `}
    >
      <h2
        className={`text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest pb-5 ${
          isDarkMode ? "text-brand-lightest" : "text-brand-light"
        }`}
      >
        Lets Talk ...
      </h2>
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
