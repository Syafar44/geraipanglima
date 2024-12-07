'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
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
} from '@material-tailwind/react';
import Footer from '../components/Footer';
import Wa from '@/app/components/Wa';
import useCart from '../utils/cart-handler';
import rupiah from '../utils/rupiah';

// Daftar produk
const products = [
  {
    id: 5,
    nama: 'AYAM KAMPUNG PENYET',
    harga: 40000,
    gambar: 'AYAM KAMPUNG PENYET.jpg',
    produk: 'makanan',
  },
  {
    id: 11,
    nama: 'BEBEK PENYET',
    harga: 45000,
    gambar: 'BEBEK PENYET.jpg',
    produk: 'makanan',
  },
  {
    id: 33,
    nama: 'GAMI AYAM',
    harga: 40000,
    gambar: 'Gami Ayam.jpg',
    produk: 'makanan',
  },
  {
    id: 34,
    nama: 'GAMI BEBEK',
    harga: 45000,
    gambar: 'Gami Bebek.jpg',
    produk: 'makanan',
  },
  {
    id: 35,
    nama: 'GAMI CUMI',
    harga: 40000,
    gambar: 'Gami Cumi.jpg',
    produk: 'makanan',
  },
  {
    id: 36,
    nama: 'GAMI IKAN LAYANG',
    harga: 35000,
    gambar: 'Gami Ikan Layang.jpg',
    produk: 'makanan',
  },
  {
    id: 37,
    nama: 'GAMI IKAN NILA',
    harga: 40000,
    gambar: 'Gami Ikan Nila.jpg',
    produk: 'makanan',
  },
  {
    id: 38,
    nama: 'GAMI IKAN PATIN',
    harga: 35000,
    gambar: 'Gami Ikan Patin.jpg',
    produk: 'makanan',
  },
  {
    id: 39,
    nama: 'GAMI TAHU',
    harga: 15000,
    gambar: 'Gami Tahu.jpg',
    produk: 'makanan',
  },
  {
    id: 40,
    nama: 'GAMI TELUR',
    harga: 20000,
    gambar: 'Gami Telur.jpg',
    produk: 'makanan',
  },
  {
    id: 41,
    nama: 'GAMI TEMPE',
    harga: 15000,
    gambar: 'Gami Tempe.jpg',
    produk: 'makanan',
  },
  {
    id: 42,
    nama: 'GAMI TERONG',
    harga: 15000,
    gambar: 'Gami Terong.jpg',
    produk: 'makanan',
  },
  {
    id: 43,
    nama: 'GAMI UDANG',
    harga: 45000,
    gambar: 'Gami Udang.jpg',
    produk: 'makanan',
  },
  {
    id: 59,
    nama: 'MIE AYAM KALASAN',
    harga: 35000,
    gambar: 'MIE AYAM KALASAN.jpg',
    produk: 'makanan',
  },
  {
    id: 60,
    nama: 'MIE AYAM KARAGE',
    harga: 35000,
    gambar: 'MIE AYAM KARAGE.jpg',
    produk: 'makanan',
  },
  {
    id: 61,
    nama: 'MIE AYAM KATZU',
    harga: 35000,
    gambar: 'Mie Ayam Katzu.jpg',
    produk: 'makanan',
  },
  {
    id: 62,
    nama: 'MIE AYAM KLATEN',
    harga: 35000,
    gambar: 'MIE AYAM KLATEN.jpg',
    produk: 'makanan',
  },
  {
    id: 63,
    nama: 'MIE AYAM KRISPY SAOS MADU',
    harga: 35000,
    gambar: 'Mie ayam krispy saos madu.jpg',
    produk: 'makanan',
  },
  {
    id: 64,
    nama: 'MIE AYAM TALIWANG',
    harga: 35000,
    gambar: 'MIE AYAM TALIWANG.jpg',
    produk: 'makanan',
  },
  {
    id: 69,
    nama: 'NASI GORENG AYAM KALASAN',
    harga: 35000,
    gambar: 'NASI GORENG AYAM KALASAN.jpg',
    produk: 'makanan',
  },
  {
    id: 70,
    nama: 'NASI GORENG AYAM TALIWANG',
    harga: 35000,
    gambar: 'NASI GORENG AYAM TALIWANG.jpg',
    produk: 'makanan',
  },
  {
    id: 71,
    nama: 'NASI GORENG TELUR DADAR',
    harga: 25000,
    gambar: 'NASI GORENG TELUR DADAR.jpg',
    produk: 'makanan',
  },
  {
    id: 80,
    nama: 'SOTO BANJAR',
    harga: 30000,
    gambar: 'SOTO BANJAR.jpg',
    produk: 'makanan',
  },
  {
    id: 81,
    nama: 'SOUP IGA',
    harga: 65000,
    gambar: 'SOUP IGA.jpg',
    produk: 'makanan',
  },
  {
    id: 82,
    nama: 'SOUP PANGLIMA',
    harga: 45000,
    gambar: 'SOUP PANGLIMA.jpg',
    produk: 'makanan',
  },
  {
    id: 83,
    nama: 'TAHU CRISPY LADA GARAM',
    harga: 10000,
    gambar: 'Tahu crispy lada garam.jpg',
    produk: 'makanan',
  },
  {
    id: 84,
    nama: 'TAMBAHAN NASI',
    harga: 7000,
    gambar: 'TAMBAHAN NASI.jpg',
    produk: 'makanan',
  },
  {
    id: 85,
    nama: 'TELUR DADAR PENYET',
    harga: 20000,
    gambar: 'TELUR DADAR PENYET.jpg',
    produk: 'makanan',
  },
  {
    id: 86,
    nama: 'TEMPE MENDOAN',
    harga: 10000,
    gambar: 'Tempe Mendoan.jpg',
    produk: 'makanan',
  },

  {
    id: 1,
    nama: 'AIR MINERAL',
    harga: 7000,
    gambar: 'AIR MINERAL.jpg',
    produk: 'minuman',
  },

  {
    id: 2,
    nama: 'AMERICANO',
    harga: 15000,
    gambar: 'Americano.jpg',
    produk: 'minuman',
  },

  {
    id: 3,
    nama: 'AVOCADO CARAMEL',
    harga: 25000,
    gambar: 'Avocado Caramel.jpg',
    produk: 'minuman',
  },

  {
    id: 4,
    nama: 'AVOCADO LATTE',
    harga: 23000,
    gambar: 'AVOCADO LATTE.jpg',
    produk: 'minuman',
  },

  {
    id: 12,
    nama: 'BLUE REVEALED',
    harga: 20000,
    gambar: 'Blue Revealed.jpg',
    produk: 'minuman',
  },

  {
    id: 21,
    nama: 'CAFE LATTE',
    harga: 20000,
    gambar: 'Cafe Latte.jpg',
    produk: 'minuman',
  },

  {
    id: 22,
    nama: 'CAPPUCCINO',
    harga: 20000,
    gambar: 'Cappuccino.jpg',
    produk: 'minuman',
  },

  {
    id: 23,
    nama: 'CARAMEL MACCHIATO',
    harga: 25000,
    gambar: 'Caramel Macchiato.jpg',
    produk: 'minuman',
  },

  {
    id: 24,
    nama: 'CHOCO HAZELNUT MILK TEA',
    harga: 25000,
    gambar: 'CHOCO HAZELNUT MILK TEA.jpg',
    produk: 'minuman',
  },

  {
    id: 25,
    nama: 'CHOCO VANILLA',
    harga: 25000,
    gambar: 'CHOCO VANILLA.jpg',
    produk: 'minuman',
  },

  {
    id: 26,
    nama: 'CREAM COFFEE',
    harga: 20000,
    gambar: 'Cream Coffee.jpg',
    produk: 'minuman',
  },

  {
    id: 27,
    nama: 'DEPTH PURPLE',
    harga: 25000,
    gambar: 'Depth Purple.jpg',
    produk: 'minuman',
  },

  {
    id: 31,
    nama: 'FRESH ICE ORANGE',
    harga: 10000,
    gambar: 'FRESH ICE ORANGE.jpg',
    produk: 'minuman',
  },

  {
    id: 32,
    nama: 'FRESH ICE TEA',
    harga: 10000,
    gambar: 'FRESH ICE TEA.jpg',
    produk: 'minuman',
  },

  {
    id: 50,
    nama: 'HAZELNUT LATTE',
    harga: 23000,
    gambar: 'Hazelnut Latte.jpg',
    produk: 'minuman',
  },

  {
    id: 54,
    nama: 'KOPI AREN PANGLIMA',
    harga: 18000,
    gambar: 'Kopi Aren Panglima.jpg',
    produk: 'minuman',
  },

  {
    id: 58,
    nama: 'MATCHA LATTE',
    harga: 23000,
    gambar: 'MATCHA LATTE.jpg',
    produk: 'minuman',
  },

  {
    id: 65,
    nama: 'MILK TEA PANGLIMA',
    harga: 15000,
    gambar: 'Milk Tea Panglima.jpg',
    produk: 'minuman',
  },

  {
    id: 66,
    nama: 'MILO COFFEE',
    harga: 23000,
    gambar: 'Milo Coffee.jpg',
    produk: 'minuman',
  },

  {
    id: 67,
    nama: 'MILO FULLO',
    harga: 20000,
    gambar: 'MILO FULLO.jpg',
    produk: 'minuman',
  },

  {
    id: 68,
    nama: 'MOCHACCINO',
    harga: 25000,
    gambar: 'Mochaccino.jpg',
    produk: 'minuman',
  },

  {
    id: 76,
    nama: 'RASPBERRY LEMONADE',
    harga: 18000,
    gambar: 'RASPBERRY LEMONADE.jpg',
    produk: 'minuman',
  },

  {
    id: 77,
    nama: 'RED REVEALED',
    harga: 23000,
    gambar: 'Red Revealed.jpg',
    produk: 'minuman',
  },

  {
    id: 87,
    nama: 'VANILLA LATTE',
    harga: 23000,
    gambar: 'Vanilla Latte.jpg',
    produk: 'minuman',
  },

  {
    id: 88,
    nama: 'WATERMELON LATTE',
    harga: 23000,
    gambar: 'Watermelon Latte.jpg',
    produk: 'minuman',
  },
];

const Resto = () => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = React.useState({});
  const itemsPerPage = 20;

  const { cart, addToCart, decreaseQuantity, increaseQuantity } = useCart();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Mengfilter produk berdasarkan filter dan pencarian
  const filteredProducts = products.filter(
    (product) =>
      (filter === '' || product.produk === filter) &&
      (search === '' ||
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
    setSearch('');
    setCurrentPage(1);
  };

  // Mengatur pencarian produk
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setFilter('');
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
                <MenuItem onClick={() => handleFilterChange('')}>
                  Semua
                </MenuItem>
                <MenuItem onClick={() => handleFilterChange('makanan')}>
                  Makanan
                </MenuItem>
                <MenuItem onClick={() => handleFilterChange('minuman')}>
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
              <Card
                key={product.id}
                className="flex justify-between hover:scale-110 hover:z-40 transition-all ease-in-out"
              >
                <div>
                  <CardHeader floated={false}>
                    {isLoading ? (
                      <div className="skeleton h-60 lg:h-64 xl:h-96"></div>
                    ) : (
                      <div className="relative">
                        {!imageLoaded[product.id] && (
                          <div className="skeleton h-60 lg:h-64 xl:h-96 absolute inset-0"></div>
                        )}
                        <img
                          src={`./assets/produk/${product.produk}/${product.gambar}`}
                          loading="lazy"
                          alt={product.nama}
                          onLoad={() =>
                            setImageLoaded((prev) => ({
                              ...prev,
                              [product.id]: true,
                            }))
                          }
                          className={`transition-opacity ${
                            imageLoaded[product.id]
                              ? 'opacity-100'
                              : 'opacity-0'
                          }`}
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardBody className="text-center">
                    <Typography
                      variant="h4"
                      className="font-teko text-sm lg:text-base xl:text-xl"
                    >
                      {product.nama}
                    </Typography>
                    <Typography variant="h5" className="-mt-1 font-teko">
                      {rupiah(product.harga)}
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
                    currentPage === index + 1 ? 'bg-red-700' : 'bg-gray-300'
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

export default Resto;
