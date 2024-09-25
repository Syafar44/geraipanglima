"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wa from "../components/Wa";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="overflow-x-hidden">
        <div className="hero bg-red-700">
          <div className="hero-content my-4 lg:my-20">
            <div className="gap-20 items-center px-24">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <p className="text-2xl font-bold text-white text-center">
                  Panglima Roqiiqu Gorup (PRG) merupakan perusahaan yang
                  bergerak di bidang industri Consumer Product dimana saat ini
                  banyak mengeluarkan produk Oleh-Oleh & Daily Consume.
                </p>
              </div>
              <div
                className="list-disc py-4 text-sm lg:text-2xl text-gray-200 mx-5 text-center"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <p>
                  Didirikan pada Februari 2011 di Samarinda, Kalimantan Timur
                  dengan niatan untuk membangun usaha yang dilandaskan pada
                  prinsip syariah, maka perusahaan ini didirikan dengan
                  menggunakan pola syirkah mudharabah, dimana terdapat pengelola
                  (mudharib) dan penanam modal (shahibul maal).
                </p>
                <p>
                  Dalam pengelolaan bisnis, komitmen bahwa perusahaan ini
                  dikelola & dikembangkan sesuai prinsip syariah menjadi pijakan
                  & kekuatan dalam perkembangan perusahaan. PRG saat ini
                  memiliki 2 brand ternama yaitu Gerai Panglima & Jajan
                  Panglima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:hero my-4 lg:my-20 px-24">
          <div className="hero-content flex-col lg:flex-row lg:gap-10 lg:items-center">
            <img
              src="gallery/_DSC9707.jpg"
              className="w-3/4 lg:w-2/4 max-w-full rounded-lg object-cover object-center"
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out"
              alt="Image Gembung"
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
        <div className="lg:hero my-4 lg:my-20 px-24">
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
