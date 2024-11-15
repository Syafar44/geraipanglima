import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Wa from '../components/Wa';

const lanchBox = [
  {
    id: 1,
    title: 'Paket 25/Pax',
    image: 'assets/lanch-box/photo_2024-11-13_09-04-29.jpg',
    link: 'Lanch-box/Paket-25',
  },
  {
    id: 2,
    title: 'Paket 35/Pax',
    image: 'assets/lanch-box/photo_2024-11-13_09-04-43.jpg',
    link: 'Lanch-box/Paket-35',
  },
  {
    id: 3,
    title: 'Paket 45/Pax',
    image: 'assets/lanch-box/photo_2024-11-13_09-04-47.jpg',
    link: 'Lanch-box/Paket-45',
  },
];

const LanchBox = () => {
  return (
    <>
      <Navbar />
      <section className="px-5 py-10 md:px-20 md:py-10 lg:px-32 lg:pt-24">
        <h1 className="text-center text-4xl pb-10 font-bold">
          Pilih Paket <span className="text-red-700">Lanch Box</span> Sesuai
          Kebutuhan Anda
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {lanchBox.map((lanch) => {
            return (
              <div
                key={lanch.id}
                className="hover:bg-red-700 hover:text-white rounded-b-xl transition-all duration-300 ease-in-out"
              >
                <Link href={lanch.link}>
                  <img
                    src={lanch.image}
                    alt={lanch.link}
                    className="w-full shadow-md"
                  />
                  <p className="text-2xl font-semibold text-center py-3">
                    {lanch.title}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
        <p className="text-center md:text-2xl pt-10  text-gray-700">
          <span className="text-black">Minimal order: </span>10 pax |
          Pemesanan minimal di lakukan 1 hari sebelumnya
        </p>
      </section>
      <Wa />
      <Footer />
    </>
  );
};

export default LanchBox;
