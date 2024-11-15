import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Wa from '../components/Wa';

const snackBox = [
  {
    id: 1,
    title: 'Paket Lengkap Harga 15K',
    link: 'Snack-box/Paket-15',
  },
  {
    id: 2,
    title: 'Paket Lengkap Harga 20K',
    link: 'Snack-box/Paket-20',
  },
  {
    id: 3,
    title: 'Paket Ala Certe',
    link: 'Snack-box/Paket-ala-carte',
  },
];

const SnackBox = () => {
  return (
    <>
      <Navbar />
      <section className="px-5 py-10 md:px-20 md:py-10 lg:px-32 lg:py-24">
        <h1 className="text-center text-4xl pb-10 font-bold">
          Pilih Paket <span className="text-red-700">Snack Box</span> Sesuai
          Keinginan anda. Atau pilih Paket{' '}
          <span className="text-red-700">Ala Carte</span> yang ada semua
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {snackBox.map((snack) => {
            return (
              <Link
                href={snack.link}
                key={snack.id}
                className="bg-red-700 text-white py-28 rounded-xl shadow-lg hover:bg-white hover:text-red-700 transition-all duration-300 ease-in-out border-4 border-red-700"
              >
                <p className="text-2xl font-semibold text-center py-3">
                  {snack.title}
                </p>
              </Link>
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

export default SnackBox;
