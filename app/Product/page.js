"use client";
import React, { useState } from "react";
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

// Daftar produk
const products = [
  {
    id: 1,
    nama: "BOLEN COKLAT",
    harga: 39000,
    gambar: "bolen coklat.jpg",
    produk: "bakery",
  },
  {
    id: 2,
    nama: "BOLEN KEJU",
    harga: 39000,
    gambar: "bolen keju.jpg",
    produk: "bakery",
  },
  {
    id: 3,
    nama: "BOLEN MIX",
    harga: 39000,
    gambar: "bolen mix.jpg",
    produk: "bakery",
  },
  {
    id: 4,
    nama: "BOLU GULUNG COKLAT",
    harga: 39000,
    gambar: "bolu gulung coklat.jpg",
    produk: "bakery",
  },
  {
    id: 5,
    nama: "BOLU GULUNG KEJU",
    harga: 39000,
    gambar: "bolu gulung keju.jpg",
    produk: "bakery",
  },
  {
    id: 6,
    nama: "BOLU GULUNG ORIGINAL",
    harga: 30000,
    gambar: "bolu gulung original.jpg",
    produk: "bakery",
  },
  {
    id: 7,
    nama: "BROWNIES ALMOND",
    harga: 39000,
    gambar: "brownies almond.jpg",
    produk: "bakery",
  },
  {
    id: 8,
    nama: "BROWNIES GANACHE",
    harga: 39000,
    gambar: "brownies ganache.jpg",
    produk: "bakery",
  },
  {
    id: 9,
    nama: "ELAT SAPI BESAR",
    harga: 39000,
    gambar: "elat sapi besar.jpg",
    produk: "oleh-oleh",
  },
  {
    id: 10,
    nama: "ELAT SAPI KECIL",
    harga: 39000,
    gambar: "elat sapi kecil.jpg",
    produk: "oleh-oleh",
  },
  {
    id: 11,
    nama: "FLOSS ROLL",
    harga: 39000,
    gambar: "floss roll.jpg",
    produk: "bakery",
  },
  {
    id: 12,
    nama: "GEMPIA COKLAT KEJU",
    harga: 39000,
    gambar: "gempia coklat keju.jpg",
    produk: "bakery",
  },
  {
    id: 13,
    nama: "GEMPIA COKLAT",
    harga: 39000,
    gambar: "gempia coklat.jpg",
    produk: "bakery",
  },
  {
    id: 14,
    nama: "GEMPIA DURIAN",
    harga: 39000,
    gambar: "gempia durian.jpg",
    produk: "bakery",
  },
  {
    id: 15,
    nama: "GEMPIA KEJU",
    harga: 39000,
    gambar: "gempia keju.jpg",
    produk: "bakery",
  },
  {
    id: 16,
    nama: "GEMPIA PISANG COKLAT",
    harga: 39000,
    gambar: "gempia pisang coklat.jpg",
    produk: "bakery",
  },
  {
    id: 17,
    nama: "IKAN BANDENG 100 Gr",
    harga: 39000,
    gambar: "ikan bandeng 100 gr.jpg",
    produk: "oleh-oleh",
  },
  {
    id: 18,
    nama: "KEMINTING DURIAN",
    harga: 39000,
    gambar: "keminting durian.jpg",
    produk: "oleh-oleh",
  },
  {
    id: 19,
    nama: "KEMINTING ORI",
    harga: 39000,
    gambar: "keminting ori.jpg",
    produk: "oleh-oleh",
  },
  {
    id: 20,
    nama: "KUKU MACAN 50 Gr (Isi 12)",
    harga: 39000,
    gambar: "KUKU MACAN 50 Gr ( Isi 12).jpg",
    produk: "oleh-oleh",
  },
  {
    id: 21,
    nama: "KUKU MACAN 50 Gr",
    harga: 39000,
    gambar: "KUKU MACAN 50 Gr.jpg",
    produk: "oleh-oleh",
  },
  {
    id: 22,
    nama: "KUKU MACAN 150 Gr",
    harga: 39000,
    gambar: "KUKU MACAN 150 Gr.jpg",
    produk: "oleh-oleh",
  },
  {
    id: 23,
    nama: "ROTI DURIAN KEJU",
    harga: 39000,
    gambar: "roti durian keju.jpg",
    produk: "bakery",
  },
  {
    id: 24,
    nama: "ROTI DURIAN ORI",
    harga: 39000,
    gambar: "roti durian ori.jpg",
    produk: "bakery",
  },
  {
    id: 25,
    nama: "AYAM KAMPUNG PENYET",
    harga: 39000,
    gambar: "Foto & Nama Makanan Gerai Panglima (AYAM KAMPUNG PENYET).jpg",
    produk: "resto",
  },
  {
    id: 26,
    nama: "BEBEK PENYET",
    harga: 39000,
    gambar: "Foto & Nama Makanan Gerai Panglima (BEBEK PENYET).jpg",
    produk: "resto",
  },
  {
    id: 27,
    nama: "MIE AYAM KALASAN",
    harga: 39000,
    gambar: "Foto & Nama Makanan Gerai Panglima (MIE AYAM KALASAN).jpg",
    produk: "resto",
  },
  {
    id: 28,
    nama: "MIE AYAM KARAGE",
    harga: 39000,
    gambar: "Foto & Nama Makanan Gerai Panglima (MIE AYAM KARAGE).jpg",
    produk: "resto",
  },
  {
    id: 29,
    nama: "MIE AYAM KLATEN",
    harga: 39000,
    gambar: "Foto & Nama Makanan Gerai Panglima (MIE AYAM KLATEN).jpg",
    produk: "resto",
  },
  {
    id: 30,
    nama: "MIE AYAM TALIWANG",
    harga: 39000,
    gambar: "Foto & Nama Makanan Gerai Panglima (MIE AYAM TALIWANG).jpg",
    produk: "resto",
  },
  {
    id: 31,
    nama: "SOTO BANJAR",
    harga: 39000,
    gambar: "Foto & Nama Makanan Gerai Panglima (SOTO BANJAR).jpg",
    produk: "resto",
  },
  {
    id: 32,
    nama: "SOUP IGA",
    harga: 39000,
    gambar: "Foto & Nama Makanan Gerai Panglima (SOUP IGA).jpg",
    produk: "resto",
  },
  {
    id: 33,
    nama: "SOUP PANGLIMA",
    harga: 39000,
    gambar: "Foto & Nama Makanan Gerai Panglima (SOUP PANGLIMA).jpg",
    produk: "resto",
  },
  {
    id: 34,
    nama: "TAMBAHAN NASI",
    harga: 39000,
    gambar: "Foto & Nama Makanan Gerai Panglima (TAMBAHAN NASI).jpg",
    produk: "resto",
  },
  {
    id: 35,
    nama: "TELUR DADAR PENYET",
    harga: 39000,
    gambar: "Foto & Nama Makanan Gerai Panglima (TELUR DADAR PENYET).jpg",
    produk: "resto",
  },
  {
    id: 36,
    nama: "NASI GORENG AYAM KALASAN",
    harga: 39000,
    gambar: "Foto_&_Nama_Makanan_Gerai_Panglima_NASI_GORENG_AYAM_KALASAN.jpg",
    produk: "resto",
  },
  {
    id: 37,
    nama: "NASI GORENG AYAM TALIWANG",
    harga: 39000,
    gambar: "Foto_&_Nama_Makanan_Gerai_Panglima_NASI_GORENG_AYAM_TALIWANG.jpg",
    produk: "resto",
  },
  {
    id: 38,
    nama: "NASI GORENG TELUR DADAR",
    harga: 39000,
    gambar: "Foto_&_Nama_Makanan_Gerai_Panglima_NASI_GORENG_TELUR_DADAR.jpg",
    produk: "resto",
  },
  {
    id: 39,
    nama: "GAMI AYAM",
    harga: 39000,
    gambar: "Gami Ayam-01.jpg",
    produk: "resto",
  },
  {
    id: 40,
    nama: "GAMI BEBEK",
    harga: 39000,
    gambar: "Gami Bebek-01.jpg",
    produk: "resto",
  },
  {
    id: 41,
    nama: "GAMI CUMI",
    harga: 39000,
    gambar: "Gami Cumi-01.jpg",
    produk: "resto",
  },
  {
    id: 42,
    nama: "GAMI IKAN LAYANG",
    harga: 39000,
    gambar: "Gami Ikan Layang-01.jpg",
    produk: "resto",
  },
  {
    id: 43,
    nama: "GAMI IKAN NILA",
    harga: 39000,
    gambar: "Gami Ikan Nila-01.jpg",
    produk: "resto",
  },
  {
    id: 44,
    nama: "GAMI IKAN PATIN",
    harga: 39000,
    gambar: "Gami Ikan Patin-01.jpg",
    produk: "resto",
  },
  {
    id: 45,
    nama: "GAMI TAHU",
    harga: 39000,
    gambar: "Gami Tahu-01.jpg",
    produk: "resto",
  },
  {
    id: 46,
    nama: "GAMI TELUR",
    harga: 39000,
    gambar: "Gami Telur-01.jpg",
    produk: "resto",
  },
  {
    id: 47,
    nama: "GAMI TEMPE",
    harga: 39000,
    gambar: "Gami Tempe-01.jpg",
    produk: "resto",
  },
  {
    id: 48,
    nama: "GAMI TERONG",
    harga: 39000,
    gambar: "Gami Terong-01.jpg",
    produk: "resto",
  },
  {
    id: 49,
    nama: "GAMI UDANG",
    harga: 39000,
    gambar: "Gami Udang-01.jpg",
    produk: "resto",
  },
  {
    id: 50,
    nama: "MIE AYAM KATZU",
    harga: 39000,
    gambar: "Mie Ayam Katzu-01.jpg",
    produk: "resto",
  },
  {
    id: 51,
    nama: "MIE AYAM KRISPY SAOS MADU",
    harga: 39000,
    gambar: "Mie ayam krispy saos madu-01.jpg",
    produk: "resto",
  },
  {
    id: 52,
    nama: "TAHU CRISPY LADA GARAM",
    harga: 39000,
    gambar: "Tahu crispy lada garam-01.jpg",
    produk: "resto",
  },
  {
    id: 53,
    nama: "TEMPE MENDOAN",
    harga: 39000,
    gambar: "Tempe Mendoan-01.jpg",
    produk: "resto",
  },
  {
    id: 54,
    nama: "AVOCADO CARAMEL",
    harga: 39000,
    gambar: "Avocado Caramel-01.jpg",
    produk: "minuman",
  },
  {
    id: 55,
    nama: "BLUE REVEALED",
    harga: 39000,
    gambar: "Blue Revealed-01.jpg",
    produk: "minuman",
  },
  {
    id: 56,
    nama: "AMERICANO",
    harga: 39000,
    gambar: "Americano-01.jpg",
    produk: "minuman",
  },
  {
    id: 57,
    nama: "CAFE LATTE",
    harga: 39000,
    gambar: "Cafe Latte-01.jpg",
    produk: "minuman",
  },
  {
    id: 58,
    nama: "CAPPUCCINO",
    harga: 39000,
    gambar: "Cappuccino-01.jpg",
    produk: "minuman",
  },
  {
    id: 59,
    nama: "CARAMEL MACCHIATO",
    harga: 39000,
    gambar: "Caramel Macchiato-01.jpg",
    produk: "minuman",
  },
  {
    id: 60,
    nama: "CREAM COFFEE",
    harga: 39000,
    gambar: "Cream Coffe-01.jpg",
    produk: "minuman",
  },
  {
    id: 61,
    nama: "DEPTH PURPLE",
    harga: 39000,
    gambar: "Depth Purple-01.jpg",
    produk: "minuman",
  },
  {
    id: 62,
    nama: "AIR MINERAL",
    harga: 39000,
    gambar: "Foto & Nama Minuman Gerai Panglima (AIR MINERAL).jpg",
    produk: "minuman",
  },
  {
    id: 63,
    nama: "AVOCADO LATTE",
    harga: 39000,
    gambar: "Foto & Nama Minuman Gerai Panglima (AVOCADO LATTE).jpg",
    produk: "minuman",
  },
  {
    id: 64,
    nama: "CHOCO VANILLA",
    harga: 39000,
    gambar: "Foto & Nama Minuman Gerai Panglima (CHOCO VANILLA).jpg",
    produk: "minuman",
  },
  {
    id: 65,
    nama: "FRESH ICE ORANGE",
    harga: 39000,
    gambar: "Foto & Nama Minuman Gerai Panglima (FRESH ICE ORANGE).jpg",
    produk: "minuman",
  },
  {
    id: 66,
    nama: "FRESH ICE TEA",
    harga: 39000,
    gambar: "Foto & Nama Minuman Gerai Panglima (FRESH ICE TEA).jpg",
    produk: "minuman",
  },
  {
    id: 67,
    nama: "GREEN TEA LATTE",
    harga: 39000,
    gambar: "Foto & Nama Minuman Gerai Panglima (GREEN TEA LATTE).jpg",
    produk: "minuman",
  },
  {
    id: 68,
    nama: "MATCHA LATTE",
    harga: 39000,
    gambar: "Foto & Nama Minuman Gerai Panglima (MATCHA LATTE).jpg",
    produk: "minuman",
  },
  {
    id: 69,
    nama: "MILO FULLO",
    harga: 39000,
    gambar: "Foto & Nama Minuman Gerai Panglima (MILO FULLO).jpg",
    produk: "minuman",
  },
  {
    id: 70,
    nama: "RASPBERRY LEMONADE",
    harga: 39000,
    gambar: "Foto & Nama Minuman Gerai Panglima (RASPBERRY LEMONADE).jpg",
    produk: "minuman",
  },
  {
    id: 71,
    nama: "CHOCO HAZELNUT MILK TEA",
    harga: 39000,
    gambar: "Foto_&_Nama_Minuman_Gerai_Panglima_CHOCO_HAZELNUT_MILK_TEA.jpg",
    produk: "minuman",
  },
  {
    id: 72,
    nama: "HAZELNUT LATTE",
    harga: 39000,
    gambar: "Hazelnut Latte-01.jpg",
    produk: "minuman",
  },
  {
    id: 73,
    nama: "KOPI AREN PANGLIMA",
    harga: 39000,
    gambar: "Kopi Aren Panglima-01.jpg",
    produk: "minuman",
  },
  {
    id: 74,
    nama: "MILK TEA PANGLIMA",
    harga: 39000,
    gambar: "Milk Tea Panglima-01.jpg",
    produk: "minuman",
  },
  {
    id: 75,
    nama: "MILO COFFEE",
    harga: 39000,
    gambar: "Milo Coffee-01.jpg",
    produk: "minuman",
  },
  {
    id: 76,
    nama: "MOCHACCINO",
    harga: 39000,
    gambar: "Mochaccino-01.jpg",
    produk: "minuman",
  },
  {
    id: 77,
    nama: "RED REVEALED",
    harga: 39000,
    gambar: "Red Revealed-01.jpg",
    produk: "minuman",
  },
  {
    id: 78,
    nama: "VANILLA LATTE",
    harga: 39000,
    gambar: "Vanilla Latte-01.jpg",
    produk: "minuman",
  },
  {
    id: 79,
    nama: "WATERMELON LATTE",
    harga: 39000,
    gambar: "Watermelon Latte-01.jpg",
    produk: "minuman",
  },
];

const Product = () => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Menambahkan produk ke keranjang
  const addToCart = (product) => {
    const updatedCart = cart.some((item) => item.id === product.id)
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Mengurangi kuantitas produk di keranjang
  const decreaseQuantity = (productId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Menambah kuantitas produk di keranjang
  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Mengfilter produk berdasarkan filter dan pencarian
  const filteredProducts = products.filter(
    (product) =>
      (filter === "" || product.produk === filter) &&
      (search === "" ||
        product.nama.toLowerCase().includes(search.toLowerCase()))
  );

  // Paginasi produk
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  // Mengatur filter produk
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSearch("");
    setCurrentPage(1);
  };

  // Mengatur pencarian produk
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setFilter("");
    setCurrentPage(1);
  };

  return (
    <>
      <Navbar />
      <section className="mt-12 px-5 lg:px-20 xl:px-30 2xl:px-60">
        <div id="top" className="lg:flex justify-between">
          <h1
            className="text-2xl lg:text-3xl xl:text-4xl font-bold"
            data-aos="fade-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            Product Gerai Panglima
          </h1>
          <div
            className="flex gap-6 text-center"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <Input
              className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-md bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]"
              type="text"
              label="Search"
              value={search}
              onChange={handleSearchChange}
            />
            <Menu>
              <MenuHandler>
                <button className="bg-red-700 px-10 text-putih font-bold text-xl rounded-lg">
                  Filter
                </button>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={() => handleFilterChange("")}>
                  Semua
                </MenuItem>
                <MenuItem onClick={() => handleFilterChange("oleh-oleh")}>
                  Oleh-oleh
                </MenuItem>
                <MenuItem onClick={() => handleFilterChange("bakery")}>
                  Bakery
                </MenuItem>
                <MenuItem onClick={() => handleFilterChange("resto")}>
                  Resto
                </MenuItem>
                <MenuItem onClick={() => handleFilterChange("minuman")}>
                  Minuman
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 2xl:grid-cols-5 mt-6 gap-5 min-h-[calc(2*190px)] xl:min-h-[calc(2*230px)] 2xl:min-h-[calc(2*280px)]">
          {currentItems.map((product) => {
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
                      <div className="flex transition ease-in-out gap-1 lg:gap-2 bg-kuning scale-[0.7] lg:scale-75 -mt-3 lg:-mt-2 -mb-3 lg:px-3 px-2 lg:mx-6 py-3 rounded-lg">
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
        <div className="flex justify-between mt-6">
          <a href="#top">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="bg-red-700 text-putih font-bold"
            >
              Prev
            </Button>
          </a>
          <div className="hidden lg:flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <a key={index + 1} href="#top">
                <Button
                  onClick={() => setCurrentPage(index + 1)}
                  className={`${
                    currentPage === index + 1 ? "bg-red-700" : "bg-gray-300"
                  } text-putih font-bold`}
                >
                  {index + 1}
                </Button>
              </a>
            ))}
          </div>
          <a href="#top">
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-red-700 text-putih font-bold"
            >
              Next
            </Button>
          </a>
        </div>
      </section>
      <Footer />
      <Wa />
    </>
  );
};

export default Product;
