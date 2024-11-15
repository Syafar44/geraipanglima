'use client';
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import useCart from '@/app/utils/cart-handler';
import { Button, Chip } from '@material-tailwind/react';
import rupiah from '@/app/utils/rupiah';
import Link from 'next/link';
import Wa from '@/app/components/Wa';

const snackBox1 = [
  { id: 7221, nama: 'Roti Coklat', harga: 4500 },
  { id: 7222, nama: 'Roti Pisang Coklat', harga: 4500 },
  { id: 7223, nama: 'Roti Sarikaya', harga: 4500 },
  { id: 7224, nama: 'Roti Durian', harga: 4500 },
  { id: 7225, nama: 'Roti Maxican Coklat', harga: 4500 },
  { id: 7226, nama: 'Roti Boy', harga: 4500 },
  { id: 7227, nama: 'Roti Pisang Coklat Keju', harga: 4500 },
  { id: 7228, nama: 'Roti Keju Susu', harga: 4500 },
  { id: 7229, nama: 'Roti Toping Keju', harga: 4500 },
  { id: 9330, nama: 'Roti Abon', harga: 4500 },
  { id: 9331, nama: 'Roti Kari Ayam', harga: 4500 },
  { id: 9332, nama: 'Roti Kacang', harga: 4500 },
  { id: 9333, nama: 'Roti Sosis', harga: 4500 },
  { id: 9334, nama: 'Roti Pizza', harga: 4500 },
  { id: 9335, nama: 'Donat Keju Topping', harga: 4500 },
  { id: 9336, nama: 'Donat Coklat Topping', harga: 4500 },
  { id: 9337, nama: 'Donat Meses Topping', harga: 4500 },
  { id: 9338, nama: 'Donat Coklat Filling', harga: 4500 },
  { id: 9339, nama: 'Donat Gula', harga: 4500 },
  { id: 5220, nama: 'Banana Cake', harga: 4500 },
  { id: 5221, nama: 'Banana Cake Keju', harga: 5000 },
  { id: 5222, nama: 'Banana Cake Coklat', harga: 5000 },
  { id: 5223, nama: 'Brownies Almond', harga: 4500 },
  { id: 5224, nama: 'Brownies Coklat', harga: 4500 },
  { id: 5225, nama: 'Roll Cake Durian', harga: 4500 },
  { id: 5226, nama: 'Roll Cake Coklat', harga: 4500 },
];

const snackBox2 = [
  { id: 8767, nama: 'Roll Cake Mocca', harga: 4500 },
  { id: 8768, nama: 'Roll Cake Keju', harga: 4500 },
  { id: 8769, nama: 'Muffin Coklat', harga: 4500 },
  { id: 8760, nama: 'Muffin Keju', harga: 4500 },
  { id: 8761, nama: 'Muffin Blueberry', harga: 4500 },
  { id: 8762, nama: 'Muffin Strawberry', harga: 4500 },
  { id: 8763, nama: 'Lapis Surabaya', harga: 5000 },
  { id: 7984, nama: 'Lapis Malang', harga: 5000 },
  { id: 7985, nama: 'Pie Susu', harga: 4500 },
  { id: 7986, nama: 'Pie Keju', harga: 4500 },
  { id: 7987, nama: 'Pie Coklat', harga: 4500 },
  { id: 7988, nama: 'Pisang Bolen Coklat', harga: 4500 },
  { id: 7989, nama: 'Pisang Bolen Keju', harga: 4500 },
  { id: 7710, nama: 'Puff Kacang', harga: 4500 },
  { id: 3711, nama: 'Puff Ayam Kari', harga: 4500 },
  { id: 3712, nama: 'Puff Sosis', harga: 4500 },
  { id: 3713, nama: 'Puff Abon', harga: 4500 },
  { id: 3714, nama: 'Puff Keju', harga: 4500 },
  { id: 3715, nama: 'Kroket Ayam Kari', harga: 4500 },
  { id: 3716, nama: 'Risoles Ayam Kari', harga: 4500 },
  { id: 3717, nama: 'Risoles Sosis Mayo', harga: 4500 },
  { id: 9718, nama: 'Sus Vanilla', harga: 4500 },
  { id: 9719, nama: 'Sus Keju', harga: 4500 },
  { id: 9910, nama: 'Sus Coklat', harga: 4500 },
  { id: 9911, nama: 'Sus Kari Ayam', harga: 4500 },
  { id: 9912, nama: 'Sus Sosis Mayo', harga: 4500 },
];

const minuman = [
  { id: 9661, nama: 'Mineral Gelas', harga: 1000 },
  { id: 9662, nama: 'Air Minum 300 ML', harga: 3000 },
  { id: 9663, nama: 'TehKotak', harga: 5000 },
  { id: 9664, nama: 'Buavita', harga: 8000 },
];

const other = [
  { id: 1491, nama: 'Permen', harga: 500 },
  { id: 1492, nama: 'Kotak', harga: 2000 },
  { id: 1493, nama: 'Kacang Atom', harga: 2000 },
  { id: 1494, nama: 'Kacang Telur', harga: 2000 },
];

const SnackBox15 = () => {
  const { cart, addToCart, decreaseQuantity, increaseQuantity } = useCart();

  return (
    <>
      <Navbar />
      <section className="px-5 py-10 md:px-20 md:py-10 lg:px-32 lg:py-24 2xl:px-80">
        <h1 className="text-center text-xl md:text-4xl pb-10 font-bold">
          Pilih Paket{' '}
          <Link href="/Snack-box" className="text-red-700 hover:text-red-900">
            Ala Carte
          </Link>{' '}
          Sesuai Keinginan Anda
        </h1>
        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-5">
          <div>
            {snackBox1.map((snack) => {
              const cartItem = cart.find((item) => item.id === snack.id);
              return (
                <div
                  key={snack.id}
                  className="flex px-5 md:px-6 justify-between mb-3 py-2 md:py-2 rounded-lg relative border border-red-700"
                >
                  <h3 className="md:text-lg font-semibold">{snack.nama}</h3>
                  <div className="flex items-center gap-5">
                    <p className="font-semibold pr-20 md:pr-28">
                      {rupiah(snack.harga)}
                    </p>
                    {cartItem ? (
                      cartItem.quantity > 0 ? (
                        <div className="flex bg-white items-center px-2 py-2 rounded-xl gap-2 scale-50 md:scale-75 absolute -right-7 md:-right-3">
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
                        <button
                          onClick={() => addToCart(snack)}
                          className="bg-white text-red-700 md:text-lg font-teko text-center py-1 px-5 md:py-2 md:px-9 absolute right-2 md:right-2 rounded-lg"
                        >
                          Tambah
                        </button>
                      )
                    ) : (
                      <button
                        onClick={() => addToCart(snack)}
                        className="bg-white text-red-700 md:text-lg font-teko text-center py-1 px-5 md:py-2 md:px-9 absolute right-2 md:right-2 rounded-lg"
                      >
                        Tambah
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="-mt-5 lg:mt-0">
            {snackBox2.map((snack) => {
              const cartItem = cart.find((item) => item.id === snack.id);
              return (
                <div
                  key={snack.id}
                  className="flex px-5 md:px-6 justify-between mb-3 py-2 md:py-2 rounded-lg relative border border-red-700"
                >
                  <h3 className="md:text-xl font-semibold">{snack.nama}</h3>
                  <div className="flex items-center gap-5">
                    <p className="text-lg font-semibold pr-20 md:pr-32">
                      {rupiah(snack.harga)}
                    </p>
                    {cartItem ? (
                      cartItem.quantity > 0 ? (
                        <div className="flex bg-white items-center px-2 py-2 rounded-xl gap-2 scale-50 md:scale-75 absolute -right-7 md:-right-3">
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
                        <button
                          onClick={() => addToCart(snack)}
                          className="bg-white text-red-700 md:text-lg font-teko text-center py-1 px-5 md:py-2 md:px-9 absolute right-2 md:right-2 rounded-lg"
                        >
                          Tambah
                        </button>
                      )
                    ) : (
                      <button
                        onClick={() => addToCart(snack)}
                        className="bg-white text-red-700 md:text-lg font-teko text-center py-1 px-5 md:py-2 md:px-9 absolute right-2 md:right-2 rounded-lg"
                      >
                        Tambah
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-5 mt-5">
          <div>
            <h3 className="md:text-2xl font-bold text-center mb-2">MINUMAN</h3>
            {minuman.map((snack) => {
              const cartItem = cart.find((item) => item.id === snack.id);
              return (
                <div
                  key={snack.id}
                  className="flex px-5 md:px-6 justify-between mb-3 py-2 md:py-2 rounded-lg relative border border-red-700"
                >
                  <h3 className="md:text-xl font-semibold">{snack.nama}</h3>
                  <div className="flex items-center gap-5">
                    <p className="text-lg font-semibold pr-20 md:pr-32">
                      {rupiah(snack.harga)}
                    </p>
                    {cartItem ? (
                      cartItem.quantity > 0 ? (
                        <div className="flex bg-white items-center px-2 py-2 rounded-xl gap-2 scale-50 md:scale-75 absolute -right-7 md:-right-3">
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
                        <button
                          onClick={() => addToCart(snack)}
                          className="bg-white text-red-700 md:text-lg font-teko text-center py-1 px-5 md:py-2 md:px-9 absolute right-2 md:right-2 rounded-lg"
                        >
                          Tambah
                        </button>
                      )
                    ) : (
                      <button
                        onClick={() => addToCart(snack)}
                        className="bg-white text-red-700 md:text-lg font-teko text-center py-1 px-5 md:py-2 md:px-9 absolute right-2 md:right-2 rounded-lg"
                      >
                        Tambah
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <h3 className="md:text-2xl font-bold text-center mb-2">OTHER</h3>
            {other.map((snack) => {
              const cartItem = cart.find((item) => item.id === snack.id);
              return (
                <div
                  key={snack.id}
                  className="flex px-5 md:px-6 justify-between mb-3 py-2 md:py-2 rounded-lg relative border border-red-700"
                >
                  <h3 className="md:text-xl font-semibold">{snack.nama}</h3>
                  <div className="flex items-center gap-5">
                    <p className="text-lg font-semibold pr-20 md:pr-32">
                      {rupiah(snack.harga)}
                    </p>
                    {cartItem ? (
                      cartItem.quantity > 0 ? (
                        <div className="flex bg-white items-center px-2 py-2 rounded-xl gap-2 scale-50 md:scale-75 absolute -right-7 md:-right-3">
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
                        <button
                          onClick={() => addToCart(snack)}
                          className="bg-white text-red-700 md:text-lg font-teko text-center py-1 px-5 md:py-2 md:px-9 absolute right-2 md:right-2 rounded-lg"
                        >
                          Tambah
                        </button>
                      )
                    ) : (
                      <button
                        onClick={() => addToCart(snack)}
                        className="bg-white text-red-700 md:text-lg font-teko text-center py-1 px-5 md:py-2 md:px-9 absolute right-2 md:right-2 rounded-lg"
                      >
                        Tambah
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-center md:text-2xl pt-10 font-semibold text-gray-700">
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
