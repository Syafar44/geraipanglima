import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

const Karir = () => {
  return (
    <div className="h-s">
      <Navbar />
      <div className="flex-col p-20 flex gap-10">
        <p className="text-center text-2xl font-bold">
          PEMUDA yang RAJIN IBADAH, PEKERJA KERAS & Siap Berkembang jadi lebih
          SHALIH ?
        </p>
        <ul className="flex justify-center">
          <li className="border-4 border-red-700 rounded-2xl shadow-xl flex justify-center">
            <a href="https://bit.ly/FormulirLamaranKerjaPRG" target="_blank">
              <img
                src="/assets/Karir/photo_2024-09-19_13-26-27.jpg"
                className="w-[20rem] rounded-xl"
              />
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Karir;
