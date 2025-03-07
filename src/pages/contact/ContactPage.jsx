import React, { useState, useEffect } from "react";
import { ContactContainer, ContactResponsive } from "../../components/ui/contactForm";
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isValid } } = useForm({
    mode: 'onChange',
  });
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      reset();
      setSuccessMessage("Your message has been sent successfully!");
    } catch (error) {
      setSuccessMessage("There was an error sending your message. Please try again later.");
    }
  };
  

  useEffect(() => {
    // Validation is handled by React Hook Form now
  }, [errors]);

  return (
    <ContactContainer>
      <ContactResponsive>
        <div className="flex-basis-1/2 ">
          <h1 className="text-black text-3xl font-extrabold">Let's Talk</h1>
          <div className="contact-page">
            <h1 className="text-black font-semibold">Contact Us</h1>
            <p className="text-sm text-black mt-4">
              If you can’t find the information you need in our Help articles,
              and would like to get in touch with us, we’re here to help..
            </p>
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#007bff"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      />
                    </svg>
                  </div>
                  <div className="text-blue-900 text-sm ml-4">
                    <small className="block font-semibold">Mail</small>
                    <strong>natnoppol@gmail.com</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <form className="flex-basis-1/2 ml-auto space-y-4" onSubmit={handleSubmit(onSubmit)}>
         {/* Name Field */}
        <label htmlFor="fullName" className="sr-only">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Name"
            {...register("name", {
              required: "Name is required.",
              maxLength: { value: 50, message: "Name cannot exceed 50 characters." }
            })}
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
            aria-label="Full Name"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          {/* Subject Field */}
          <label htmlFor="subject" className="sr-only">subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            {...register("subject", {
              required: "Subject is required.",
              maxLength: { value: 100, message: "Subject cannot exceed 100 characters." }
            })}
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
            aria-label="Subject"
          />
           {errors.subject && <p className="error">{errors.subject.message}</p>}
          {/* Email Field */}
          <label htmlFor="email" className="sr-only">email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            {...register("email", { 
              required: "Email is required.", 
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address"
              }
            })}
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          {/* Message Field */}
          <label htmlFor="body" className="sr-only">body</label>
          <textarea
            id="body"
            name="body"
            placeholder="Message"
            {...register("message", {
              required: "Message is required.",
              minLength: { value: 10, message: "Message must be at least 10 characters." }
            })}
            className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
            rows="6"
            aria-label="Message"
          />
          {errors.message && <p className="error">{errors.message.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="text-white bg-blue-600 hover:bg-blue-700 tracking-wide rounded-md text-sm px-4 py-3 w-full mt-6"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {successMessage && (
            <p className="text-green-600 font-semibold">{successMessage}</p>
          )}
        </form>
      </ContactResponsive>
    </ContactContainer>
  );
};

export default ContactForm;
