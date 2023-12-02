import React, { useState } from "react";

interface ContactDarkProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactDarkProps> = ({ isDarkMode }) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState(false);
  async function handleSubmit(event: any) {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);

      formData.append("access_key", "755d948f-86c6-4a71-a3a7-beb325a0b965");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Form submitted successfully!");
      } else {
        setErrorMessage(true);
        console.error("Error submitting form:", result);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(true);
    }
  }

  return (
    <div
      className={`flex flex-col items-center font-custom mt-10 ${
        isDarkMode ? "bg-brand-light text-black" : "bg-brand-base text-brand-light"
      } `}
    >
      <h2 className={`text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest pb-5 ${isDarkMode ? "text-brand-lightest" : "text-brand-light"}`}>
        Lets Talk ...
      </h2>

      {!successMessage && !errorMessage && (
        <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            className="px-2 rounded-sm mb-8 pt-1 pb-1"
            type="text"
            name="name"
            placeholder="John/Jane Doe"
            required
          />

          <label>Email:</label>
          <input
            className="px-2 rounded-sm mb-8 pt-1 pb-1"
            placeholder="email@email.com"
            type="email"
            name="email"
            required
          />
          <label>Message:</label>
          <textarea
            className="px-2 rounded-sm mb-8 pt-1 pb-12"
            placeholder="what should we do?"
            name="message"
            required
          ></textarea>
          <button className="mb-4 border w-full border-brand-dark font-custom tracking-wider rounded-sm hover:text-brand-lightest bg-gradient-to-r from-brand-light/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" type="submit">
            Submit
          </button>
        </form>
      )}
      {successMessage && <div className="text-white mb-4">{successMessage}</div>}
      {errorMessage && <div className="text-red mb-4">{errorMessage}</div>}
    </div>
  );
};

export default Contact;
