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
    <section className="pt-[2.5rem] lg:pt-[6rem] pb-[6rem] bg-brand-base text-brand-light dark:bg-brand-light dark:text-white flex flex-col items-center font-custom mt-10">
      <form
        name="contact"
        action="/success"
        method="POST"
        data-netlify="true"
        className="container w-full max-w-sm lg:max-w-xl p-8 mx-auto space-y-4 rounded-md shadow-2xl"
      >
        <div data-aos="zoom-in-up">
          <h2 className="text-center text-3d text-brand-light dark:text-brand-lightest text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest pb-5">
            Lets Talk ...
          </h2>
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <label className="dark:text-brand-base block ml-1">Name:</label>
        <input
          className="placeholder-brand-lightish dark:placeholder-brand-light block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri focus:ring-brand-light focus:border-brand-light dark:focus:ring-brand-dark dark:focus:border-brand-dark focus:ring-1 dark:bg-brand-cardbg"
          type="text"
          name="name"
          placeholder="John/Jane Doe"
          required
        />
        <label className="dark:text-brand-base block mb-1 ml-1">Email:</label>
        <input
          className="placeholder-brand-lightish dark:placeholder-brand-light block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri focus:ring-brand-light focus:border-brand-light dark:focus:ring-brand-dark dark:focus:border-brand-dark focus:ring-1 dark:bg-brand-cardbg"
          placeholder="john/jane@email.com"
          type="email"
          name="email"
          required
        />
        <label className="dark:text-brand-base block mb-1 ml-1">Message:</label>
        <textarea
          className="placeholder-brand-lightish dark:placeholder-brand-light block w-full p-2 rounded  focus:outline-none focus:ring focus:ri focus:ring-brand-light focus:border-brand-light dark:focus:ring-brand-dark dark:focus:border-brand-dark focus:ring-1 focus:ri dark:bg-brand-cardbg"
          placeholder="what should we do?"
          name="message"
          required
        ></textarea>
        <button
          className="w-full bg-brand-light text-brand-base px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring  focus:ri dark:bg-brand-lightish focus:ri hover:ri dark:text-brand-darkest tracking-widest"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
