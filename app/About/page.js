"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wa from "../components/Wa";

const About = () => {
  return (
    <>
      <Navbar />

      <section>
        <div className="lg:hero lg:pt-20 md:px-24 bg-red-700">
          <div className="hero-content flex-col lg:flex-row lg:gap-10 lg:items-center relative">
            <img
              src="visiMisi.jpg"
              className="w-3/4 lg:w-2/4 max-w-full rounded-lg object-cover object-center"
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out"
              alt="Image Gembung"
              loading="lazy"
            />
            <div className="mt-8 md:mt-0 px-2 md:pl-5 xl:pl-32 xl:mt-0 text-white text-sm xl:text-base">
              <h3
                className="text-3xl font-semibold mt-6"
                data-aos="fade-left"
                data-aos-duration="1400"
                data-aos-easing="ease-in-out"
              >
                Visi
              </h3>
              <p
                className="max-w-lg  text-white"
                data-aos="fade-left"
                data-aos-duration="1600"
                data-aos-easing="ease-in-out"
              >
                Menginspirasi Indonesia! Menjadi Perusahaan Syariah Kelas Dunia
                Yang Dicintai, Berperan Dalam Peradaban Mulia, Dan Bermanfaat
                Bagi Semua.
              </p>
              <h3
                className="text-3xl font-semibold mt-3"
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-easing="ease-in-out"
              >
                Misi
              </h3>
              <ul
                className="list-disc text-white ml-4"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <li>
                  Mengelola perusahaan Murni sesuai Syariat Islam oleh individu
                  yang Saleh dengan standart Kelas Dunia
                </li>
                <li>
                  Menyediakan produk yang halal, berkualitas dan memberi nilai
                  yang terbaik bagi pelanggan
                </li>
                <li>
                  Menyebar manfaat serta berperan nyata dalam peradaban mulia
                </li>
                <li>
                  Bertumbuh dengan Cepat dan Berkesinambungan sehingga dapat
                  Semakin Bermanfaat Bagi Semua
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:hero lg:py-20 md:px-24 bg-red-700">
          <div className="hero-content lg:flex-row lg:gap-10 lg:items-center flex-col-reverse relative">
            {/* <h1 className="absolute -top-10 left-20 text-4xl font-bold text-white">Value Gerai Panglima</h1> */}
            <div className="xl:px-10 lg:mt-0 text-white">
              <ul className="text-white text-2xl lg:text-4xl 2xl:text-5xl font-bold p-2">
                <li
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  Syar&apos;i
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1300"
                  data-aos-easing="ease-in-out"
                >
                  Profesional
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                >
                  Customer Centric
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1700"
                  data-aos-easing="ease-in-out"
                >
                  Innovation
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1900"
                  data-aos-easing="ease-in-out"
                >
                  Helpful
                </li>
              </ul>
            </div>
            <img
              src="value.jpg"
              className="w-3/4 lg:w-2/4 max-w-full rounded-lg object-cover object-center"
              data-aos="fade-left"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out"
              alt="Image Gembung"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="lg:hero my-4 lg:my-20 md:px-24">
          <div className="hero-content flex-col lg:flex-row lg:gap-10 lg:items-center">
            <img
              src="gallery/_DSC9707.jpg"
              className="w-3/4 lg:w-2/4 max-w-full rounded-lg object-cover object-center"
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out"
              alt="Image Gembung"
              loading="lazy"
            />
            <div
              data-aos="fade-left"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out"
              className="text-xl flex flex-col gap-5"
            >
              <h1 className="text-3xl lg:text-5xl font-bold">Oleh-oleh</h1>
              <p className="text-xl lg:text-3xl font-semibold text-red-700">
                Gerai Panglima
              </p>
              <p>
                Gerai panglima merupakan pusat oleh-oleh khas kaltim serta
                memiliki Resto Panglima yang mengangkat kuliner lokal autentik
                khas Kaltim.
              </p>
              <p>
                Gerai Panglima sebagai pusat oleh-oleh khas kaltim mengeluarkan
                berbagai produk Oleh-Oleh berkualitas yang diposisikan sebagai
                pusat oleh-oleh Kaltim di Samarinda dan Balikpapan. Berbagai
                produk Panglima maupun produk-produk rekan-rekan UMKM lain
                disediakan di Gerai Panglima. Selain memberikan pelayanan yang
                berkualitas ke Pelanngan, Gerai Panglima juga mengangkat taraf
                perekonomian rekan-rekan UMKM.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:hero my-4 lg:my-20 md:px-24">
          <div className="hero-content lg:flex-row lg:gap-10 lg:items-center flex-col-reverse">
            <div
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out"
              className="text-xl flex flex-col gap-5"
            >
              <h1 className="text-3xl lg:text-5xl font-bold">Resto</h1>
              <p className="text-xl lg:text-3xl font-semibold text-red-700">
                Resto Panglima
              </p>
              <p>
                Resto Panglima sebagai kuliner lokal yang autentik khas kaltim
                memberikan pengalaman untuk costumer yang ingin merasakan rasa
                kuliner outentik khas klatim seperti Sambal Gami yang memiliki
                banyak pilihan serta kuliner lainnya yang bisa di nikmati di
                Gerai panglima dalam 1 tempat.
              </p>
            </div>
            <img
              src="gallery/photo_2024-09-19_16-20-46.jpg"
              className="w-3/4 lg:w-2/4 max-w-full rounded-lg object-cover object-center"
              data-aos="fade-left"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out"
              alt="Image Gembung"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
      <Wa />
    </>
  );
};

export default About;
