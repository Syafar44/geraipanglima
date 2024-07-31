"use client";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { Carousel } from "@material-tailwind/react";

const Jajan = () => {
  return (
    <>
      {/* Carausel layar Lebar */}
      <section className="container mx-auto py-16 -mt-6 hidden lg:block lg:px-20 lg:h-[580px] xl:h-[700px] 2xl:h-[800px]">
        <Carousel loop={true} autoplay={true} className="rounded-xl">
          <img
            src="1.png"
            alt="image 1"
            className="h-full w-full object-cover object-top"
          />
          <img
            src="2.png"
            alt="image 1"
            className="h-full w-full object-cover object-top"
          />
          <img
            src="3.png"
            alt="image 1"
            className="h-full w-full object-cover object-top"
          />
        </Carousel>
      </section>
      {/* Carausel layar Kecil */}
      <section className="container px-5 mx-auto py-10 -mt-6 h-[25rem] lg:hidden">
        <Carousel loop={true} autoplay={true} className="rounded-xl">
          <img
            src="1.png"
            alt="image 1"
            className="h-full w-full object-cover object-top"
          />
          <img
            src="2.png"
            alt="image 1"
            className="h-full w-full object-cover object-top"
          />
          <img
            src="3.png"
            alt="image 1"
            className="h-full w-full object-cover object-top"
          />
        </Carousel>
      </section>

      <section className="-mt-16 px-4 xl:px-28">
        <div className="hero min-h-screen">
          <div className="text-center">
            {/* Oleh-oleh Gerai Panglima */}
            <div>
              <figure className="my-12">
                <figcaption className="font-bold text-xl lg:text-5xl">
                  Produk OLeh-Oleh
                </figcaption>
                <img
                  className="w-60 lg:w-80 mx-auto -mb-7"
                  src="assets/logo/LOGO-GERAI-PANGLIMA-02.jpg"
                />
              </figure>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                <div className="card card-compact bg-base-100 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets/produk/ROTI-DURIAN-ORIGINAL.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 text-sm lg:text-base">
                      ROTI DURIAN ORIGINAL
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets/produk/ROTI-DURIAN-KEJU.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 text-sm lg:text-base">
                      ROTI DURIAN KEJU
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets/produk/PIE-SUSU-COKLAT.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 text-sm lg:text-base">
                      PIE SUSU COKLAT
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets/produk/BROWNIES-ALMOND.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 text-sm lg:text-base">
                      BROWNIES ALMOND
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets/produk/BOLU-GULUNG-COKLAT.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 text-sm lg:text-base">
                      BOLU GULUNG COKLAT
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Resto Panglima */}
            <div className="mt-12">
              <figure>
                <figcaption className="font-bold text-xl lg:text-5xl">
                  Produk Resto
                </figcaption>
                <img
                  className="w-60 lg:w-80 mx-auto mb-8"
                  src="assets/logo/LOGO-GERAI-PANGLIMA-02.jpg"
                />
              </figure>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                <div className="card card-compact bg-base-100 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets\produk\Nas-Campur-Ayam-cabe-Hijau.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 text-sm lg:text-base">
                      Nasi Campur Ayam Cabe Hijau
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="/Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets\produk\Nas-Campur-Ayam-cabe-Hijau.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 text-sm lg:text-base">
                      Nasi Campur Ayam Cabe Hijau
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="/Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets\produk\Nas-Campur-Ayam-cabe-Hijau.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 text-sm lg:text-base">
                      Nasi Campur Ayam Cabe Hijau
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="/Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets\produk\Nas-Campur-Ayam-cabe-Hijau.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 text-sm lg:text-base">
                      Nasi Campur Ayam Cabe Hijau
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="/Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200">
                  <figure>
                    <img
                      className="h-56 scale-150"
                      src="assets\produk\Nas-Campur-Ayam-cabe-Hijau.jpg"
                      alt="Roti Durian Panglima"
                    />
                  </figure>
                  <div className="">
                    <h2 className="font-bold p-2 pt-2 text-sm lg:text-base">
                      Nasi Campur Ayam Cabe Hijau
                    </h2>
                    <div className="card-actions justify-center my-2">
                      <Link
                        href="/Produk-Panglima"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero bg-yellow-600 mt-10 -mb-10 lg:px-10 ">
        <div className="hero-content text-center mt-5">
          <div className="mt-5">
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
              <span className="text-red-700">12 Tahun</span> Berdiri: Gerai
              Panglima & Jajan Panglima, Mewujudkan Oleh-Oleh Kaltim Berkualitas
              dan Menguatkan UKM
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 xl:mx-20 xl:gap-0 mt-6 mb-10 text-xs lg:text-base xl:text-base">
              <div className="flex">
                <img
                  className="h-28 xl:h-40"
                  src="assets/keunggulan-home-1.png"
                />
                <div className="bg-[#a42023] ml-4 p-3 rounded-[30px] text-white">
                  <h6 className="font-bold text-xl mb-1">Alami</h6>
                  <p>
                    Semua produk Panglima dipilih dan diproses secara alami.
                    Kami juga menggunakan kemasan daur ulang dan sistem bisnis
                    ramah lingkungan
                  </p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="h-28 xl:h-40"
                  src="assets/keunggulan-home-3.png"
                />
                <div className="bg-[#a42023] ml-4 p-3 rounded-[30px] text-white">
                  <h6 className="font-bold text-xl mb-1">Berkualitas Tinggi</h6>
                  <p>
                    Panglima Roqiiqu Group menggunakan bahan yang terbaik untuk
                    memastikan setiap produk yang dihasilkan memiliki kualitas
                    yang terbaik dan autentik.
                  </p>
                </div>
              </div>
              <div className="flex ml-3">
                <img
                  className="h-24 xl:h-36"
                  src="assets/keunggulan-home-2.png"
                />
                <div className="bg-[#a42023] ml-4 p-3 rounded-[30px] text-white">
                  <h6 className="font-bold text-xl">Pelayanan 24/7</h6>
                  <p>
                    Dengan fokus pada kepuasan pelanggan, kami menyediakan
                    layanan yang ramah dan profesional untuk pengalaman
                    berbelanja yang menyenangkan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jajan;
