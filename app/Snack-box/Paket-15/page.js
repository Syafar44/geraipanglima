'use client';
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import useCart from '@/app/utils/cart-handler';
import { Button, Chip } from '@material-tailwind/react';
import rupiah from '@/app/utils/rupiah';
import Link from 'next/link';
import Wa from '@/app/components/Wa';

const snackBox = [
  {
    id: 791,
    nama: 'Snack Box 15K Paket A',
    isian: ['Roti Coklat', 'Risoles Sosis Mayo', 'Air Mineral 300ML', 'Kotak'],
    harga: 15000,
  },
  {
    id: 792,
    nama: 'Snack Box 15K Paket B',
    isian: [
      'Roti Pisang Coklat',
      'Risoles Mayo Beef',
      'Air Mineral 300ML',
      'Kotak',
    ],
    harga: 15000,
  },
  {
    id: 793,
    nama: 'Snack Box 15K Paket C',
    isian: ['Roti Mexican Coklat', 'Pastel', 'Air Mineral 300ML', 'Kotak'],
    harga: 15000,
  },
  {
    id: 794,
    nama: 'Snack Box 15K Paket D',
    isian: ['Sus Vanilla', 'Pastel', 'Air Mineral 300ML', 'Kotak'],
    harga: 15000,
  },
  {
    id: 795,
    nama: 'Snack Box 15K Paket E',
    isian: ['Banana Cake Coklat', 'Pastel', 'Air Mineral 300ML', 'Kotak'],
    harga: 15000,
  },
];

const SnackBox15 = () => {
  const { cart, addToCart, decreaseQuantity, increaseQuantity } = useCart();

  return (
    <>
      <Navbar />
      <section className="px-5 py-10 md:px-20 md:py-10 lg:px-32 lg:py-24 2xl:px-80">
        <h1 className="text-center text-4xl pb-10 font-bold">
          Pilih Paket{' '}
          <Link href="/Snack-box" className="text-red-700 hover:text-red-900">
            Snack Box
          </Link>{' '}
          Sesuai Kebutuhan Anda
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {snackBox.map((snack) => {
            const cartItem = cart.find((item) => item.id === snack.id);
            return (
              <div
                key={snack.id}
                className="bg-red-700 text-white p-5 shadow-xl rounded-xl"

              >
                <div className="pb-5 flex flex-col gap-3 items-center">
                  <h3 className="text-2xl font-semibold">
                    {snack.nama}
                  </h3>
                  <ul className='list-disc'>
                    {snack.isian.map((isi) => (
                      <li key={isi} className="text-lg font-semibold">
                        {isi}
                      </li>
                    ))}
                  </ul>
                  <p className="text-center text-lg font-semibold">
                    {rupiah(snack.harga)}
                  </p>
                  <div className="flex justify-center">
                    {cartItem ? (
                      cartItem.quantity > 0 ? (
                        <div className="flex transition ease-in-out gap-1 lg:gap-2 bg-white scale-[0.7] lg:scale-75 -mt-3 lg:-mt-2 -mb-3 lg:px-3 px-2 lg:mx-6 py-3 rounded-lg">
                          <Button
                            className="px-4 bg-red-700"
                            onClick={() => decreaseQuantity(snack.id)}
                          >
                            -
                          </Button>
                          <Chip
                            value={cartItem.quantity}
                            variant="ghost"
                            size="lg"
                            className="rounded-lg text-black"
                          />
                          <Button
                            className="px-4 bg-red-700"
                            onClick={() => increaseQuantity(snack.id)}
                          >
                            +
                          </Button>
                        </div>
                      ) : (
                        <Button
                          onClick={() => addToCart(snack)}
                          className="text-putih font-teko text-center"
                        >
                          Tambah
                        </Button>
                      )
                    ) : (
                      <Button
                        onClick={() => addToCart(snack)}
                        className="bg-white text-red-700 font-teko text-center"
                      >
                        Tambah
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-2xl pt-10 font-semibold text-gray-700">
          <span className="font-bold text-black">Minimal order: </span>10 pax |
          Pemesanan minimal di lakukan 1 hari sebelumnya
        </p>
      </section>
      <Wa />
      <Footer />
    </>
  );
};

export default SnackBox15;