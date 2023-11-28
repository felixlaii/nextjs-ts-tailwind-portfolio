import React, { useState } from "react";

interface ContactDarkProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactDarkProps> = ({ isDarkMode }) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState(false)
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
        isDarkMode ? "bg-dark text-white" : "bg-light text-black"
      } `}
    >
      <h2 className="sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest pb-5">
        Lets Talk ...
      </h2>

      {!successMessage && !errorMessage && (
        <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            className="px-2 rounded-lg mb-8 pt-1 pb-1"
            type="text"
            name="name"
            required
          />
          
          <label>Email:</label>
          <input
            className="px-2 rounded-lg mb-8 pt-1 pb-1"
            type="email"
            name="email"
            required

          />
          <label>Message:</label>
          <textarea
            className="px-2 rounded-lg mb-8 pt-6 pb-6"
            name="message"
            required

          ></textarea>
          <button className="mb-4" type="submit">Submit Form</button>
        </form>
      )}
      {successMessage && (<div className="text-green-600">{successMessage}</div>)}
      {errorMessage && (<div>{errorMessage}</div>)}
    </div>
  );
};

export default Contact;
