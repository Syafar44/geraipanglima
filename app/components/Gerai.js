"use client";
import React from "react";
import Link from "next/link";
import { Carousel, IconButton } from "@material-tailwind/react";

const gerai = [
  {
    id: 1001,
    produk: "ROTI DURIAN ORIGINAL",
    image: "roti durian ori.jpg",
    duration: 1500,
    file: "oleh-oleh",
  },
  {
    id: 1002,
    produk: "ROTI DURIAN KEJU",
    image: "roti durian keju.jpg",
    duration: 1400,
    file: "oleh-oleh",
  },
  {
    id: 1003,
    produk: "BOLU GULUNG COKLAT",
    image: "BOLU GULUNG COKLAT.jpg",
    duration: 1300,
    file: "oleh-oleh",
  },
  {
    id: 1004,
    produk: "KUKU MACAN",
    image: "KUKU MACAN 150 Gr.jpg",
    duration: 1200,
    file: "oleh-oleh",
  },
  {
    id: 1005,
    produk: "KEMINTING DURIAN",
    image: "keminting durian.jpg",
    duration: 1100,
    file: "oleh-oleh",
  },
];

const resto = [
  {
    id: 2001,
    produk: "GAMI AYAM",
    image: "Gami Ayam.jpg",
    duration: 1500,
    file: "makanan",
  },
  {
    id: 2002,
    produk: "GAMI CUMI",
    image: "Gami Cumi.jpg",
    duration: 1400,
    file: "makanan",
  },
  {
    id: 2003,
    produk: "GAMI MIE",
    image: "Gami Mie.jpg",
    duration: 1300,
    file: "makanan",
  },
  {
    id: 2004,
    produk: "SOUP PANGLIMA",
    image: "SOUP PANGLIMA.jpg",
    duration: 1200,
    file: "makanan",
  },
  {
    id: 2005,
    produk: "SOUP IGA",
    image: "SOUP IGA.jpg",
    duration: 1100,
    file: "makanan",
  },
];

const posterDesktop = [
  {
    id: 1,
    image: "./poster/Stiker Amplang Kuku Macan 116.7 X 54.2.jpg",
    alt: "poster gerai panglima",
  },
  {
    id: 2,
    image: "./poster/Stiker Roti Durian 116.7 X 54.2.jpg",
    alt: "poster gerai panglima",
  },
];

const posterMobile = [
  {
    id: 1,
    image: "./poster/abcc-01.jpg",
    alt: "poster gerai panglima",
  },
  {
    id: 2,
    image: "./poster/abcc-02.jpg",
    alt: "poster gerai panglima",
  },
];

const Gerai = () => {
  return (
    <>
      {/* Carausel Desktop */}
      <section className="container mx-auto px-28 2xl:px-0 pt-16 -mt-6 hidden lg:block lg:h-[480px] xl:h-[550px] 2xl:h-[800px] z-10">
        <Carousel
          loop={true}
          autoplay={true}
          className="rounded-xl shadow-xl"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          {posterDesktop.map((poster) => {
            return (
              <img
                key={poster.id}
                src={poster.image}
                alt={poster.alt}
                className="w-full object-cover object-top"
              />
            );
          })}
        </Carousel>
      </section>

      {/* Carausel Mobile */}
      <section className="container px-5 mx-auto py-10 -mt-6 h-[25rem] lg:hidden">
        <Carousel
          loop={true}
          autoplay={true}
          className="rounded-xl"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="md"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="black"
              size="md"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          {posterMobile.map((poster) => {
            return (
              <img
                key={poster.id}
                src={poster.image}
                alt={poster.alt}
                className="w-full object-cover object-top"
              />
            );
          })}
        </Carousel>
      </section>

      <section className="-mt-16 px-4 xl:px-28">
        <div className="hero min-h-screen">
          <div className="text-center ">
            {/* Oleh-oleh Gerai Panglima */}
            <div className="pt-20">
              <h1
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                className="py-10 font-bold text-xl lg:text-5xl"
              >
                PRODUK BEST SELLER OLEH-OLEH
              </h1>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                {gerai.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="card card-compact bg-white md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200"
                      data-aos="fade-right"
                      data-aos-duration={item.duration}
                      data-aos-easing="ease-in-out"
                    >
                      <figure>
                        <img
                          className="h-56 scale-150"
                          src={`assets/produk/${item.file}/${item.image}`}
                          alt={item.produk}
                        />
                      </figure>
                      <div>
                        <h2 className="font-bold p-2 pt-2 text-sm lg:text-base">
                          {item.produk}
                        </h2>
                        <div className="card-actions justify-center my-2">
                          <Link
                            href="/Product"
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                          >
                            Lihat Produk
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Resto Panglima */}
            <div className="py-5">
              <h1
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                className="py-10 font-bold text-xl lg:text-5xl"
              >
                PRODUK BEST SELLER RESTO
              </h1>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                {resto.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="card card-compact bg-white md:w-56 shadow-xl transition ease-in-out hover:scale-105 duration-200"
                      data-aos="fade-right"
                      data-aos-duration={item.duration}
                      data-aos-easing="ease-in-out"
                    >
                      <figure>
                        <img
                          className="h-56 scale-100"
                          src={`assets/produk/${item.file}/${item.image}`}
                          alt={item.produk}
                        />
                      </figure>
                      <div className="">
                        <h2 className="font-bold p-2 pt-2 text-sm lg:text-base">
                          {item.produk}
                        </h2>
                        <div className="card-actions justify-center my-2">
                          <Link
                            href="/Product"
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 xl:px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                          >
                            Lihat Produk
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero bg-yellow-600 mt-10 -mb-10 lg:px-10">
        <div className="hero-content text-center mt-5">
          <div className="mt-5">
            <h1
              className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <span className="text-red-700">12 Tahun</span> Berdiri: Gerai
              Panglima & Gerai Panglima, Mewujudkan Oleh-Oleh Kaltim Berkualitas
              dan Menguatkan UKM
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 xl:mx-20 xl:gap-0 mt-6 mb-10 text-xs lg:text-base xl:text-base">
              <div
                className="flex"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
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
              <div
                className="flex"
                data-aos="fade-right"
                data-aos-duration="1300"
                data-aos-easing="ease-in-out"
              >
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
              <div
                className="flex ml-3"
                data-aos="fade-right"
                data-aos-duration="1600"
                data-aos-easing="ease-in-out"
              >
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

export default Gerai;
