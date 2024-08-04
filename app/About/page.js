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
        <header>
          <figure className="flex items-center -mt-10">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/Syafar44/assets/main/assets/image/bg-tentang-2.jpg"
              alt="Background Tentang Gerai Panglima"
            />
          </figure>
        </header>
      </section>

      <section>
        <div className="hero bg-red-700">
          <div className="hero-content my-4 lg:my-20">
            <div className="lg:flex gap-20 items-center">
              <div
                data-aos="fade-right"
                data-aos-duration="1800"
                data-aos-easing="ease-in-out"
              >
                <h1 className="text-3xl lg:text-6xl font-bold text-center text-white">
                  Differentiation
                </h1>
                <p className="text-xl lg:text-3xl text-gray-100 font-semibold text-center">
                  Gerai Panglima
                </p>
              </div>
              <ul
                className="list-disc py-4 text-sm lg:text-2xl text-gray-200 mx-5"
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-easing="ease-in-out"
              >
                <li>Produk berkualitas wahid dengan pricing Value for Money</li>
                <li>Rapid Experimentation new product</li>
                <li>Strong Data Analytic to measure the Goals</li>
                <li>Tersedia Menu Anak Muda</li>
                <li>Loyalty Program dengan Personalized Offer</li>
                <li>Program Promo Rutin</li>
                <li>
                  Kemasan Unik & mengangkat budaya lokal dengan menggandeng
                  komunitas
                </li>
                <li>
                  Mudah Didapat dengan tersebar di banyak area mendekati
                  pemukiman padat penduduk
                </li>
                <li>Aktif di Social Media Facebook & Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:hero my-4 lg:my-20">
          <div className="hero-content flex-col lg:flex-row lg:gap-10 lg:items-center">
            <img
              src="assets/img-gembung.png"
              className="w-3/4 lg:max-w-sm"
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out"
              alt="Image Gembung"
            />
            <div
              data-aos="fade-left"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out"
            >
              <h1 className="text-3xl lg:text-5xl font-bold">Marketing Mix</h1>
              <p className="text-xl lg:text-3xl font-semibold text-red-700">
                Gerai Panglima
              </p>
              <ul className="lg:py-6 text-wrap text-sm">
                <li className="py-2">
                  <h4 className="font-bold text-xl">Product</h4>
                  <p className="mr-3">
                    Roti Gembung berkualitas wahid dengan varian yang selalu
                    di-update dengan kemasan modern & mengangkat budaya lokal
                  </p>
                </li>
                <li className="py-2">
                  <h4 className="font-bold text-xl">Price</h4>
                  <p className="mr-3">
                    Strategi harga Value for Money dengan range harga lebar
                    mulai dari produk promo sangat murah hingga produk premium
                  </p>
                </li>
                <li className="py-2">
                  <h4 className="font-bold text-xl">Place</h4>
                  <p className="mr-3">
                    Outlet tersebar di banyak titik pemukiman padat penduduk
                    (ubiquitous network strategy) dengan jam buka panjang
                    06.30-21.00
                  </p>
                </li>
                <li className="py-2">
                  <h4 className="font-bold text-xl">Promotion</h4>
                  <ul className="list-disc ml-8">
                    <li>Sales promotion untuk umum & khusus member</li>
                    <li>Social media Facebook & Instagram</li>
                    <li>Photo & Video Contest</li>
                    <li>Selebgram endorse</li>
                    <li>Public Event booth & print out spreading</li>
                    <li>Event Sponsorship</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="hero bg-red-700 text-center -mb-10 lg:px-20">
          <div className="my-4 lg:my-20 px-10">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-center text-white">
                Position
              </h1>
              <p className="text-xl lg:text-3xl text-gray-100 font-semibold text-center">
                Jajan Panglima
              </p>
              <p className="py-4 text-sm lg:text-xl text-gray-200">
                Untuk Middle Class Urban berusia 20-45 tahun yang sudah tinggal
                di Kaltim ≻ 3 tahun, Jajan Panglima adalah Outlet Roti Gembung
                Zaman Now yang menghadirkan produk berkualitas & Rapid
                Experimentation New Product dengan strategi pricing Value for
                Money
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Wa />
    </>
  );
};

export default About;
