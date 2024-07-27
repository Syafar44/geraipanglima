import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="flex mx-auto lg:mt-20 lg:mb-32">
        <div className="flex flex-col lg:justify-center px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center z-20 bg-white w-full">
          <div className="flex items-center justify-end w-full h-96 lg:w-1/2">
            <img
              className=" w-full max-w-xl rounded-md"
              src="pesan.png"
              alt="apple watch photo"
            />
          </div>
          <div className="mt-8 lg:w-2/3 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
              <h1 className="text-lg font-semibold text-gray-900">Contact Us</h1>
              <div className="lg:flex gap-10 ml-3">
                <div className="flex lg:block gap-2 text-lg font-medium text-gray-700">
                  <h1>Chat:</h1>
                  <h1>+62 822 5085 1457</h1>
                </div>
                <div className="flex lg:block gap-2 text-lg font-medium text-gray-700">
                  <h1>Email:</h1>
                  <h1>Panglima@panglima.com</h1>
                </div>
              </div>

              <form className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-6 text-sm font-bold hover:text-white tracking-wide  capitalize transition-colors duration-300 transform bg-kuning rounded-md hover:bg-hitam focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50">
                  Send Me
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
