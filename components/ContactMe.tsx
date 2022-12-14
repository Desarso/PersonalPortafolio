import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:malek.gabriel33@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.%0D%0A %0D%0A 
    ${formData.message} %0D%0A%0D%0A
    You can reach me at ${formData.email}`;
  };

  return (
    <div
      className="h-screen flex flex-col relative md:text-left md:flex-row
    max-w-7xl justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex= flex-col space-y-10 contact-me mt-12">
        <h4 className="sm-display-none text-4xl font-semibold text-center">
          Let&apos;s work together
          <span className="decoration-[#F7AB0A]/50 underline"></span>
        </h4>

        <div className="space-y-2 contact-info ">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-gray-500 text-2xl">+1 978 873 0012</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-gray-500 text-2xl">malek.gabriel33@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 text-[#F7AB0A] animate-pulse " />
            <p className="text-gray-500 text-2xl">Sacramento</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 mx-auto max-w-[100vw]"
          >
            <div className="flex name-email-container space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput name-field"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput email-field"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md
                     text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
