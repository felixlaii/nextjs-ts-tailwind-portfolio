import { ContactFormProps } from '@/types/component-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineError } from 'react-icons/md';

interface ContactDarkProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Contact: React.FC<ContactDarkProps> = ({ isDarkMode, toggleDarkMode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormProps>();
  const [formData, setFormData] = useState({
    firstLastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data: ContactFormProps) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  

  return (
    <div
      className={`flex flex-col items-center font-custom min-h-screen mt-10 ${
        isDarkMode ? 'bg-dark text-white' : 'bg-light text-black'
      } `}
    >
      <h2 className='text-[3rem] tracking-widest'>Lets Talk</h2>
      <form className='flex flex-col w-1/2' onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
        <input
          className='px-2 rounded-lg mb-8 pt-1 pb-1'
          placeholder='Name'
          type='text'
          {...register('firstLastName', { required: true, maxLength: 80 })}
          aria-invalid={errors.firstLastName ? 'true' : 'false'}
        />
        {errors.firstLastName?.type === 'required' && (
          <div className='text-red-700 pb-2 pl-4 flex gap-2' role='alert'>
            <MdOutlineError className='mt-1' /> First name is required
          </div>
        )}

        <label>Email:</label>
        <input
          className='px-2 rounded-lg mb-8 pt-1 pb-1'
          placeholder='Email'
          type='text'
          {...register('email', { required: true, maxLength: 80 })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />{errors.email?.type === 'required' && (
            <div className='text-red-700 pb-2 pl-4 flex gap-2' role='alert'>
              <MdOutlineError className='mt-1' /> Email is required
            </div>
          )}

<label>Message:</label>
<textarea
  className='px-2 rounded-lg mb-8 pt-6 pb-6'
  placeholder='Type your message'
  name='message'
  value={formData.message}
  onChange={handleChange}  
  aria-invalid={errors.message ? 'true' : 'false'}
/>
{errors.message?.type === 'required' && (
  <div className='text-red-700 pb-2 pl-4 flex gap-2' role='alert'>
    <MdOutlineError className='mt-1' /> Message is required
  </div>
)}


        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
