"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    if (userName && userEmail && message) {
      emailjs
        .sendForm(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          form.current,
          process.env.USER_ID
        )
        .then(
          (result) => {
            alert("Email successfully sent!", result.text);
            form.current.reset();
          },
          (error) => {
            console.error("Email sending failed:", error.text);
          }
        );
    } else {
      alert("harap isi semua data terlebih dahulu");
    }
  };

  return (
    <div className="mx-5 lg:mx-44 xl:mx-80 my-20">
      <form ref={form} onSubmit={sendEmail}>
        <label class="input input-bordered flex items-center gap-2 my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" id="user_name" name="user_name" />
        </label>
        <label class="input input-bordered flex items-center gap-2 my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="email" id="user_email" name="user_email" />
        </label>
        <label>
          <textarea
            type="text"
            id="message"
            name="message"
            className="textarea textarea-bordered  my-3 w-full h-40"
            placeholder="Kritik dan saran Anda"
          />
        </label>
        <div className="flex justify-end">
          <input
            className="btn bg-red-700 text-white"
            type="submit"
            value="Kirim Pesan"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
