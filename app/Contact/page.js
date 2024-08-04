"use client";

import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";
import Wa from "../components/Wa";
import Link from "next/link";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    const openModal = () => {
      document.getElementById("my_modal").showModal();
    };

    if (userName && userEmail && message) {
      emailjs
        .sendForm(
          "service_idf5xe9",
          "template_f18yjva",
          form.current,
          "s-gUBrpAU8bY-veel"
        )
        .then(
          (result) => {
            openModal();
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
    <>
      <Navbar />
      <section className="hero h-52 lg:h-72">
        <div className="hero-overlay bg-white"></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold text-red-700" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
              Kontak Kami
            </h1>
            <p className="lg:text-xl font-bold text-black" data-aos="fade-right" data-aos-duration="1100" data-aos-easing="ease-in-out">
              <span className="text-red-600">
                Kami Selalu Sedia Melayani anda!.
              </span>{" "}
              Silahkan kirimkan pertanyaan, masukkan atau pesan lainnya kepada
              kami.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="px-5 lg:px-44 xl:mx-80 text-center mb-5 lg:mb-20">
          <div className="text-sm lg:text-base">
            <h1 className="text-2xl lg:text-5xl font-bold text-center" data-aos="fade-right" data-aos-duration="1200" data-aos-easing="ease-in-out">
              Panglima Roqiiqu Group
            </h1>
            <p className="py-2 text-gray-600 font-semibold" data-aos="fade-right" data-aos-duration="1300" data-aos-easing="ease-in-out">
              Panglima Roti Jl. Ir. H. Juanda No.55a, Sidodadi, Kec. Samarinda
              Ulu, Kota Samarinda, Kalimantan Timur 75124
            </p>
            <p className="pb-2 lg:py-3 text-gray-600 font-bold" data-aos="fade-right" data-aos-duration="1400" data-aos-easing="ease-in-out">
              Senin - Sabtu Pukul 08.00 - 17.00 WIB (Kecuali Hari Libur
              Nasional)
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 text-sm xl:text-xl font-bold" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in-out">
              <div>
                <h3 className="lg:pb-3">Layanan Pelanggan :</h3>
                <p>0822-9999-9999</p>
              </div>
              <div>
                <h3 className="lg:pb-3 ">Email :</h3>
                <p>panglima@panglimaroqiiqu-group.co.id</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-5 lg:mx-44 2xl:mx-80 border shadow-xl rounded-lg p-10">
        <div>
          <h1 className="text-xl pb-2 font-bold" data-aos="fade-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
            Alamat <span className="text-red-500">Gerai Panglima</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card bg-base-100 image-full w-auto h-[17rem] -mx-5 lg:-mx-0 shadow-xl hover:scale-105 transition ease-in-out" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <figure>
              <img
                className="scale-125 xl:scale-[2]"
                src="assets/foto-gallery-1.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Juanda Samarinda</h2>
              <p>Jl Juanda no. 55A Samarinda, Kalimantan Timur</p>
              <div className="card-actions justify-end">
                <Link
                  target="_blank"
                  href="https://maps.app.goo.gl/JzcWLUEyba2JiPrNA"
                  className="btn text-white bg-red-700 hover:bg-white hover:text-black"
                >
                  Open Maps
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 image-full w-auto h-[17rem] -mx-5 lg:-mx-0 shadow-xl hover:scale-105 transition ease-in-out" data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <figure>
              <img
                className="scale-125 xl:scale-[2]"
                src="assets/foto-gallery-1.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Balikpapan</h2>
              <p>
                Sepinggan, Kecamatan Balikpapan Selatan, Kota Balikpapan,
                Kalimantan Timur
              </p>
              <div className="card-actions justify-end">
                <Link
                  target="_blank"
                  href="https://maps.app.goo.gl/S3gsBhcXgyzAMRGm8"
                  className="btn text-white bg-red-700 hover:bg-white hover:text-black"
                >
                  Open Maps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-10 px-5 lg:px-40 ">
        <div className="flex gap-20 justify-center flex-col lg:flex-row">
          <div data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <h1 className="text-3xl lg:text-5xl font-bold text-red-700">
              Social Media
            </h1>
            <ul>
              <li className="flex gap-2 lg:text-xl font-semibold pt-3">
                <svg
                  className="w-7 lg:w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 102 102"
                  id="instagram"
                >
                  <defs>
                    <radialGradient
                      id="a"
                      cx="6.601"
                      cy="99.766"
                      r="129.502"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".09" stop-color="#fa8f21"></stop>
                      <stop offset=".78" stop-color="#d82d7e"></stop>
                    </radialGradient>
                    <radialGradient
                      id="b"
                      cx="70.652"
                      cy="96.49"
                      r="113.963"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset=".64"
                        stop-color="#8c3aaa"
                        stop-opacity="0"
                      ></stop>
                      <stop offset="1" stop-color="#8c3aaa"></stop>
                    </radialGradient>
                  </defs>
                  <path
                    fill="url(#a)"
                    d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                  ></path>
                  <path
                    fill="url(#b)"
                    d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                  ></path>
                  <path
                    fill="#fff"
                    d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
                    transform="translate(-422.637 -426.196)"
                  ></path>
                </svg>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/geraipanglima/"
                >
                  @geraipanglima
                </Link>
              </li>
              <li className="flex gap-2 lg:text-xl font-semibold pt-3">
                <svg
                  className="w-7 lg:w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="facebook"
                >
                  <path
                    fill="#1976D2"
                    d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"
                  ></path>
                  <path
                    fill="#FAFAFA"
                    fill-rule="evenodd"
                    d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/oleholehkhaskaltim"
                >
                  Gerai Panglima
                </Link>
              </li>
              <li className="flex gap-2 lg:text-xl font-semibold pt-3">
                <svg
                  className="w-7 lg:w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  id="tiktok"
                >
                  <path
                    fill="#070201"
                    fill-rule="evenodd"
                    d="m60,12c0-4.42-3.58-8-8-8H12C7.58,4,4,7.58,4,12v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"
                  ></path>
                  <path
                    fill="#fe2c55"
                    fill-rule="evenodd"
                    d="m47.64,27.65c0,.3-.13.58-.37.77-.23.19-.53.22-.83.21-1.86-.05-4.77-.69-6.14-2v12.54c0,5.78-4.68,10.46-10.46,10.46h-1.08c-2.42,0-4.72-.88-6.58-2.39,1.43.71,3,1.13,4.63,1.13h1.08c5.78,0,10.46-4.68,10.46-10.46v-12.54c1.37,1.3,4.28,1.95,6.14,2,.3,0,.6-.02.83-.21.23-.19.37-.47.37-.77,0-1.42,0-3.78,0-5.02.38.11.77.2,1.16.29.46.1.79.5.79.97,0,1.24,0,3.61,0,5.02Zm-19.58,4.43c-.19.19-.44.29-.71.29-2.76,0-5,2.24-5,5,0,2.17,1.39,4,3.33,4.69-.85-.9-1.38-2.1-1.38-3.43,0-2.76,2.24-5,5-5,.27,0,.52-.1.71-.29.19-.19.29-.44.29-.71v-3c0-.26-.11-.52-.29-.71s-.44-.29-.71-.29h-.54c-.14,0-.27.04-.41.04v2.7c0,.27-.11.52-.29.71Zm13.67-12.69c-.83-.75-1.53-1.74-2.03-3.09-.15-.39-.52-.67-.94-.67h-.74c.87,1.91,2.16,3.03,3.71,3.75Z"
                  ></path>
                  <path
                    fill="#25f4ee"
                    fill-rule="evenodd"
                    d="m21.37,46.57c.25.25.55.45.82.67-1.01-.5-1.96-1.12-2.77-1.93-1.96-1.96-3.06-4.62-3.06-7.4v-.08c0-5.78,4.68-10.46,10.46-10.46h.54c.27,0,.52.11.71.29.19.19.29.44.29.71v.3c-5.58.22-10.05,4.78-10.05,10.42v.08c0,2.77,1.1,5.43,3.06,7.4Zm24.31-25.2h0c0-.47-.33-.88-.79-.97-1.12-.25-2.19-.55-3.17-1.01,1.11,1,2.47,1.57,3.95,1.98Zm-16.38,22.27c1.33,0,2.6-.53,3.54-1.46s1.46-2.21,1.46-3.54v-22c0-.55.45-1,1-1h2.72c-.09-.2-.19-.38-.27-.6-.15-.39-.52-.67-.94-.67h-3.46c-.55,0-1,.45-1,1v22c0,1.33-.53,2.6-1.46,3.54s-2.21,1.46-3.54,1.46c-.59,0-1.15-.12-1.67-.31.91.96,2.19,1.57,3.62,1.57Z"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="m27.9,48.37c5.78,0,10.46-4.68,10.46-10.46v-12.54c1.37,1.3,4.28,1.95,6.14,2,.3,0,.6-.02.83-.21.23-.19.37-.47.37-.77,0-1.42,0-3.78,0-5.02-1.48-.41-2.84-.98-3.95-1.98-1.54-.72-2.84-1.85-3.71-3.75h-2.72c-.55,0-1,.45-1,1v22c0,1.33-.53,2.6-1.46,3.54s-2.21,1.46-3.54,1.46c-1.43,0-2.71-.61-3.62-1.57-1.93-.69-3.33-2.52-3.33-4.69,0-2.76,2.24-5,5-5,.27,0,.52-.1.71-.29.19-.19.29-.44.29-.71v-2.7c-5.58.22-10.05,4.78-10.05,10.42v.08c0,2.77,1.1,5.43,3.06,7.4.25.25.55.45.82.67,1.43.71,3,1.13,4.63,1.13h1.08Z"
                  ></path>
                </svg>
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/@geraipanglimasamarinda"
                >
                  @geraipanglimasamarinda
                </Link>
              </li>
              <li className="flex gap-2 lg:text-xl font-semibold pt-3">
                <svg
                  className="w-7 lg:w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="5.368 13.434 53.9 37.855"
                  id="youtube"
                >
                  <path
                    fill="#FFF"
                    d="M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z"
                  ></path>
                  <path
                    fill="#E8E0E0"
                    d="M41.272 31.81c-4.942-2.641-14.511-7.604-14.511-7.604l12.758 8.575c.001 0-2.324 1.289 1.753-.971z"
                  ></path>
                  <path
                    fill="#CD201F"
                    d="M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"
                  ></path>
                </svg>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@geraipanglima7563"
                >
                  Gerai Panglima
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img
              src="assets/logo/LOGO-GERAI-PANGLIMA-02.jpg"
              className="w-[40rem] items-center"
            />
          </div>
        </div>
      </section>

      <section className="flex xl:mt-20 lg:mb-32">
        <div className="flex flex-col lg:justify-center px-6 lg:px-20 py-4 mx-auto space-y-6 lg:h-[32rem] xl:py-16 lg:flex-row lg:items-center z-20 bg-white w-full">
          <div className="flex items-center justify-end w-full h-96 lg:w-1/2" data-aos="fade-up-right" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img
              className=" w-full max-w-xl rounded-md"
              src="pesan.png"
              alt="message foto"
            />
          </div>
          <div className="mt-8 lg:w-2/3 lg:mx-6" data-aos="fade-up-left" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
              <form ref={form} onSubmit={sendEmail} className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
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
                    id="user_email"
                    name="user_email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <input
                  value="Send"
                  type="submit"
                  className="btn w-full text-center px-6 py-3 mt-6 text-sm font-bold text-white hover:text-red-700 tracking-wide  capitalize transition-colors duration-300 transform bg-kuning rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-red-900"
                />
              </form>
            </div>
          </div>
        </div>
      </section>

      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-kuning bg-hitam rounded-xl text-center py-2">
            Hay Sobat Gerai Panglima
          </h3>
          <div className="py-4 font-semibold text-xl">
            <h1 className="text-green-700 text-2xl">
              Pesanan anda sudah kami terima!
            </h1>
            <p className="text-lg">
              Terimakasih atas kritik dan masukannya akan kami kirim balasan
              secepatnya
            </p>
            <h3 className="mt-5">Terimakasih.</h3>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-black text-kuning rounded-xl">
                Tutup
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <Footer />
      <Wa />
    </>
  );
};

export default Contact;
