'use client';
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import useCart from '@/app/utils/cart-handler';
import { Button, Chip } from '@material-tailwind/react';
import rupiah from '@/app/utils/rupiah';
import Link from 'next/link';
import Wa from '@/app/components/Wa';

const lanchBox = [
  {
    id: 650,
    nama: 'Lanch Box 45 Paket A',
    harga: 45000,
    image: '../assets/lanch-box/45-a.jpg',
  },
  {
    id: 974,
    nama: 'Lanch Box 45 Paket B',
    harga: 45000,
    image: '../assets/lanch-box/45-b.jpg',
  },
  {
    id: 308,
    nama: 'Lanch Box 45 Paket C',
    harga: 45000,
    image: '../assets/lanch-box/45-c.jpg',
  },
];

const LanchBox45 = () => {
  const { cart, addToCart, decreaseQuantity, increaseQuantity } = useCart();

  return (
    <>
      <Navbar />
      <section className="px-5 py-10 md:px-20 md:py-10 lg:px-32 lg:py-24 2xl:px-80">
        <h1 className="text-center text-4xl pb-10 font-bold">
          Pilih Paket{' '}
          <Link href="/Lanch-box" className="text-red-700 hover:text-red-900">
            Lanch Box
          </Link>{' '}
          Sesuai Kebutuhan Anda
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {lanchBox.map((lanch) => {
            console.log(lanch);

            const cartItem = cart.find((item) => item.id === lanch.id);
            return (
              <div
                key={lanch.id}
                className="bg-red-700 text-white rounded-b-xl shadow-xl"
              >
                <div className="pb-5 flex flex-col gap-3">
                  <img
                    src={lanch.image}
                    alt={lanch.name}
                    className="w-full shadow-md"
                  />
                  <p className="text-2xl font-semibold text-center">
                    {lanch.nama}
                  </p>
                  <p className="text-center text-lg font-semibold">
                    {rupiah(lanch.harga)}
                  </p>
                  <div className="flex justify-center">
                    {cartItem ? (
                      cartItem.quantity > 0 ? (
                        <div className="flex transition ease-in-out gap-1 lg:gap-2 bg-white scale-[0.7] lg:scale-75 -mt-3 lg:-mt-2 -mb-3 lg:px-3 px-2 lg:mx-6 py-3 rounded-lg">
                          <Button
                            className="px-4 bg-red-700"
                            onClick={() => decreaseQuantity(lanch.id)}
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
                            onClick={() => increaseQuantity(lanch.id)}
                          >
                            +
                          </Button>
                        </div>
                      ) : (
                        <Button
                          onClick={() => addToCart(lanch)}
                          className="text-putih font-teko text-center"
                        >
                          Tambah
                        </Button>
                      )
                    ) : (
                      <Button
                        onClick={() => addToCart(lanch)}
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
        <p className="text-center md:text-2xl pt-10  text-gray-700">
          <span className="text-black">Minimal order: </span>10 pax | Pemesanan
          minimal di lakukan 1 hari sebelumnya
        </p>
      </section>
      <Wa />
      <Footer />
    </>
  );
};

export default LanchBox45;
