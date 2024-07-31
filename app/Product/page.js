"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Footer from "../components/Footer";
import Wa from "@/app/components/Wa";

const products = [
  {
    id: 5,
    nama: "BANANA CAKE COKLAT",
    harga: 39000,
    gambar: "BANANA-CAKE-COKLAT.jpg",
    produk: "bakery",
  },
  {
    id: 6,
    nama: "BANANA CAKE KEJU",
    harga: 39000,
    gambar: "BANANA-CAKE-KEJU.jpg",
    produk: "bakery",
  },
  {
    id: 7,
    nama: "BANANA CAKE ORIGINAL",
    harga: 30000,
    gambar: "BANANA-CAKE-COKLAT.jpg",
    produk: "bakery",
  },
  {
    id: 8,
    nama: "BOLU GULUNG COKLAT",
    harga: 39000,
    gambar: "BOLU-GULUNG-COKLAT.jpg",
    produk: "bakery",
  },
  {
    id: 9,
    nama: "BOLU GULUNG KEJU",
    harga: 40000,
    gambar: "BOLU-GULUNG-KEJU.jpg",
    produk: "bakery",
  },
  {
    id: 10,
    nama: "BOLU GULUNG ORIGINAL",
    harga: 30000,
    gambar: "BOLU-GULUNG-ORIGINAL.jpg",
    produk: "bakery",
  },
  {
    id: 11,
    nama: "BROWNIES-ALMOND",
    harga: 40000,
    gambar: "BROWNIES-ALMOND.jpg",
    produk: "bakery",
  },
  {
    id: 12,
    nama: "BROWNIES GANACHE",
    harga: 39000,
    gambar: "BROWNIES-GANACHE.jpg",
    produk: "bakery",
  },
  {
    id: 13,
    nama: "FLOSS ROLL",
    harga: 39000,
    gambar: "FLOSS-ROLL.jpg",
    produk: "bakery",
  },
  {
    id: 14,
    nama: "GEMPIA COKLAT",
    harga: 39000,
    gambar: "GEMPIA-COKLAT.jpg",
    produk: "bakery",
  },
  {
    id: 15,
    nama: "GEMPIA COKLAT KEJU",
    harga: 39000,
    gambar: "GEMPIA-COKLAT-KEJU.jpg",
    produk: "bakery",
  },
  {
    id: 16,
    nama: "GEMPIA DURIAN",
    harga: 30000,
    gambar: "GEMPIA-DURIAN.jpg",
    produk: "bakery",
  },
  {
    id: 17,
    nama: "GEMPIA KEJU",
    harga: 40000,
    gambar: "GEMPIA-KEJU.jpg",
    produk: "bakery",
  },
  {
    id: 18,
    nama: "GEMPIA PISANG COKLAT KEJU",
    harga: 50000,
    gambar: "GEMPIA-PISANG-COKLAT-KEJU.jpg",
    produk: "bakery",
  },
  {
    id: 19,
    nama: "IKAN BANDENG 100 Gr",
    harga: 39000,
    gambar: "IKAN-BANDENG-100-Gr.jpg",
    produk: "oleh-oleh",
  },
  {
    id: 20,
    nama: "KUKU MACAN 50Gr",
    harga: 39000,
    gambar: "KUKU-MACAN-50-Gr.jpg",
    produk: "oleh-oleh",
  },
  {
    id: 21,
    nama: "KUKU MACAN 50Gr isi 12",
    harga: 30000,
    gambar: "KUKU-MACAN-50-Gr-isi-12.jpg",
    produk: "oleh-oleh",
  },
  {
    id: 22,
    nama: "KUKU MACAN 150Gr",
    harga: 40000,
    gambar: "KUKU-MACAN-150-Gr.jpg",
    produk: "oleh-oleh",
  },
  {
    id: 23,
    nama: "LONG CHIZ KEJU",
    harga: 39000,
    gambar: "LONG-CHIZ-KEJU.jpg",
    produk: "bakery",
  },
  {
    id: 24,
    nama: "LONG CHIZ ORIGINAL",
    harga: 39000,
    gambar: "LONG-CHIZ-ORIGINAL.jpg",
    produk: "bakery",
  },
  {
    id: 25,
    nama: "MIE AYAM TALIWANG",
    harga: 39000,
    gambar: "Mie-Ayam-Taliwang.jpg",
    produk: "resto",
  },
  {
    id: 26,
    nama: "NASI CAMPUR AYAM CABE HIJAU",
    harga: 39000,
    gambar: "Nas-Campur-Ayam-cabe-Hijau.jpg",
    produk: "resto",
  },
  {
    id: 27,
    nama: "Nasi Bebebk Penyet 3 Sambel",
    harga: 30000,
    gambar: "Nasi-Bebebk-Penyet-3-Sambel.jpg",
    produk: "resto",
  },
  {
    id: 28,
    nama: "Nasi campur Empal Daging",
    harga: 40000,
    gambar: "Nasi-campur-Empal-Daging.jpg",
    produk: "resto",
  },
  {
    id: 29,
    nama: "Nasi Goreng Ayam kalasan",
    harga: 50000,
    gambar: "Nasi-Goreng-Ayam-kalasan-e.jpg",
    produk: "resto",
  },
  {
    id: 30,
    nama: "Sop Iga",
    harga: 40000,
    gambar: "SOP-IGA.jpg",
    produk: "resto",
  },
  {
    id: 31,
    nama: "Sop Panglima",
    harga: 39000,
    gambar: "SOP-PANGLIMA.jpg",
    produk: "resto",
  },
  {
    id: 32,
    nama: "PIE SUSU COKLAT",
    harga: 39000,
    gambar: "PIE-SUSU-COKLAT.jpg",
    produk: "bakery",
  },
  {
    id: 33,
    nama: "PIE SUSU KEJU",
    harga: 39000,
    gambar: "PIE-SUSU-KEJU.jpg",
    produk: "bakery",
  },
  {
    id: 34,
    nama: "PIE SUSU MIX",
    harga: 30000,
    gambar: "PIE-SUSU-MIX.jpg",
    produk: "bakery",
  },
  {
    id: 35,
    nama: "PIE SUSU ORIGINAL",
    harga: 40000,
    gambar: "PIE-SUSU-ORIGINAL.jpg",
    produk: "bakery",
  },
  {
    id: 36,
    nama: "PISANG BOLEN COKLAT",
    harga: 39000,
    gambar: "PISANG-BOLEN-COKLAT.jpg",
    produk: "bakery",
  },
  {
    id: 37,
    nama: "PISANG BOLEN KEJU",
    harga: 39000,
    gambar: "PISANG-BOLEN-KEJU.jpg",
    produk: "bakery",
  },
  {
    id: 38,
    nama: "PISANG BOLEN MIX",
    harga: 20000,
    gambar: "PISANG-BOLEN-MIX.jpg",
    produk: "bakery",
  },
  {
    id: 39,
    nama: "ROTI DURIAN KEJU",
    harga: 40000,
    gambar: "ROTI-DURIAN-KEJU.jpg",
    produk: "bakery",
  },
  {
    id: 40,
    nama: "ROTI DURIAN ORIGINAL",
    harga: 50000,
    gambar: "ROTI-DURIAN-ORIGINAL.jpg",
    produk: "bakery",
  },
];

const Product = () => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);
    let newCart;
    if (existingProductIndex >= 0) {
      newCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const decreaseQuantity = (productId) => {
    const newCart = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // Remove item if quantity is 0
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increaseQuantity = (productId) => {
    const newCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const filteredProducts = products.filter(
    (product) =>
      (filter === "" || product.produk === filter) &&
      (search === "" ||
        product.nama.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <Navbar />
      <section className="mt-12 px-5 lg:px-20 xl:px-30 2xl:px-60">
        <div className="lg:flex justify-between ">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
            Product Gerai Panglima
          </h1>
          <div className="flex gap-6 text-center">
            <Input
              className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-md bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]"
              type="text"
              label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Menu>
              <MenuHandler>
                <button className="bg-red-700 px-10 text-putih font-bold text-xl rounded-lg">
                  Filter
                </button>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={() => setFilter("oleh-oleh")}>
                  Oleh-oleh
                </MenuItem>
                <MenuItem onClick={() => setFilter("bakery")}>Bakery</MenuItem>
                <MenuItem onClick={() => setFilter("resto")}>Resto</MenuItem>
                <MenuItem onClick={() => setFilter("")}>Semua</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 mt-6 gap-5">
          {filteredProducts.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            return (
              <Card key={product.id} className="flex justify-between">
                <div>
                  <CardHeader floated={false}>
                    <img
                      src={`./assets/produk/${product.gambar}`}
                      alt={product.nama}
                    />
                  </CardHeader>
                  <CardBody className="text-center">
                    <Typography
                      variant="h4"
                      className="font-teko text-sm lg:text-base xl:text-xl"
                    >
                      {product.nama}
                    </Typography>
                    <Typography variant="h5" className="-mt-1 font-teko">
                      Rp{product.harga}
                    </Typography>
                  </CardBody>
                </div>
                <CardFooter className="flex justify-center -mt-10">
                  {cartItem ? (
                    cartItem.quantity > 0 ? (
                      <div className="flex transition ease-in-out gap-1 lg:gap-2 bg-kuning scale-[0.7] lg:scale-75 -mt-3 lg:-mt-2 -mb-3  lg:px-3 px-2 lg:mx-6 py-3 rounded-lg">
                        <Button
                          className="px-4"
                          onClick={() => decreaseQuantity(product.id)}
                        >
                          -
                        </Button>
                        <Chip
                          value={cartItem.quantity}
                          variant="ghost"
                          size="lg"
                          className="rounded-lg text-putih"
                        />
                        <Button
                          className="px-4"
                          onClick={() => increaseQuantity(product.id)}
                        >
                          +
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => addToCart(product)}
                        className="bg-kuning text-putih font-teko text-center"
                      >
                        Tambah
                      </Button>
                    )
                  ) : (
                    <Button
                      onClick={() => addToCart(product)}
                      className="bg-kuning text-putih font-teko text-center"
                    >
                      Tambah
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
      <Footer />
      <Wa />
    </>
  );
};

export default Product;
