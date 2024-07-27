import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="bg-putih dark:bg-gray-900 lg:-mt-32">
        <div className="relative flex lg:z-10">
          <div className="lg:min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

          <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Jajan <span className="text-kuning bg-hitam p-1 rounded-lg opacity-80">Panglima</span> <br />{" "}
              Teman asik ngemil bersama
            </h1>

            <div className="mt-10 lg:mt-10 lg:flex lg:items-center">
              <img
                className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                src="tes-1.jpg"
                alt=""
              />

              <div className="mt-8 px-2 lg:px-10 lg:mt-0  text-gray-800">
                <h1 className="text-4xl font-bold dark:text-putih lg:w-72">
                   Visi Misi <br />
                  <span className="text-2xl text-kuning bg-hitam p-1 rounded-lg opacity-80">Jajan Panglima</span>{" "}
                </h1>
                <h3 className="text-3xl font-semibold mt-6">Visi</h3>
                <p className="max-w-lg  text-gray-600 dark:text-gray-400">
                  Menginspirasi Indonesia! Menjadi Perusahaan Syariah kelas
                  dunia dicintai, berperan nyata dalam peradaban mulia dan
                  mensejahterakan karyawan.
                </p>
                <h3 className="text-3xl font-semibold mt-3">Misi</h3>
                <ul className="list-disc text-gray-600 ml-4">
                  <li>
                    Mengelola perusahaan murni sesuai syariat islam oleh
                    individu yang saleh dengan standart kelas dunia
                  </li>
                  <li>
                    Menyediakan produk yang halal, berkualitas dan memberi nilai
                    yang terbaik bagi pelanggan
                  </li>
                  <li>
                    Menyebar manfaat serta berperan nyata dalam peradaban mulia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-putih dark:bg-gray-900 lg:-mt-80 -mt-10 -mb-10">
        <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

          <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Core <span className="text-kuning bg-hitam p-1 rounded-lg opacity-80">Value</span> <br />
              Janan Panglima
            </h1>

            <div className="lg:mt-10 lg:flex lg:items-center lg:ml-20">
              <div className=" lg:px-10 lg:mt-0 text-gray-800">
                <ul className="text-gray-800 text-lg lg:text-xl font-bold p-2">
                  <li>
                    <span className="text-3xl lg:text-5xl">P</span>roduktif diiringi inovasi
                  </li>
                  <li>
                    <span className="text-3xl lg:text-5xl">R</span>asa saling menghormati
                  </li>
                  <li>
                    <span className="text-3xl lg:text-5xl">O</span>ptimis
                  </li>
                  <li>
                    <span className="text-3xl lg:text-5xl">G</span>esit & Tangguh
                  </li>
                  <li>
                    <span className="text-3xl lg:text-5xl">R</span>asional & dapat diandalkan
                  </li>
                  <li>
                    <span className="text-3xl lg:text-5xl">E</span>mpati melayani sepenuh hati
                  </li>
                  <li>
                    <span className="text-3xl lg:text-5xl">S</span>mpati melayani sepenuh hati
                  </li>
                  <li>
                    <span className="text-3xl lg:text-5xl">S</span>yar‘i
                  </li>
                </ul>
              </div>
              <img
                className="object-cover object-center lg:ml-40 w-full lg:w-[32rem] rounded-lg h-96"
                src="outlet-jajan.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
