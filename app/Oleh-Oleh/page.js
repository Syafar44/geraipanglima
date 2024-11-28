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
} from '@material-tailwind/react';
import Footer from '../components/Footer';
import Wa from '@/app/components/Wa';
import useCart from '../utils/cart-handler';
import rupiah from '../utils/rupiah';

// Daftar produk
const products = [
  {
    id: 6,
    nama: 'BANANA CAKE COKLAT',
    harga: 32000,
    gambar: 'BANANA CAKE COKLAT.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 7,
    nama: 'BANANA CAKE KEJU',
    harga: 39000,
    gambar: 'BANANA CAKE KEJU.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 8,
    nama: 'BANANA CAKE ORIGINAL',
    harga: 39000,
    gambar: 'BANANA CAKE ORIGINAL.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 9,
    nama: 'LONG CHIZ KEJU',
    harga: 19000,
    gambar: 'LONG CHIZ KEJU.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 10,
    nama: 'LONG CHIZ ORIGINAL',
    harga: 15000,
    gambar: 'LONG CHIZ ORIGINAL.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 13,
    nama: 'BOLEN COKLAT',
    harga: 52000,
    gambar: 'bolen coklat.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 14,
    nama: 'BOLEN KEJU',
    harga: 52000,
    gambar: 'bolen keju.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 15,
    nama: 'BOLEN MIX',
    harga: 52000,
    gambar: 'bolen mix.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 16,
    nama: 'BOLU GULUNG COKLAT',
    harga: 55000,
    gambar: 'BOLU GULUNG COKLAT.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 17,
    nama: 'BOLU GULUNG KEJU',
    harga: 55000,
    gambar: 'BOLU GULUNG KEJU.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 18,
    nama: 'BOLU GULUNG ORIGINAL',
    harga: 50000,
    gambar: 'BOLU GULUNG ORIGINAL.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 19,
    nama: 'BROWNIES ALMOND',
    harga: 50000,
    gambar: 'brownies almond.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 20,
    nama: 'BROWNIES GANACHE',
    harga: 50000,
    gambar: 'brownies ganache.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 28,
    nama: 'ELAT SAPI BESAR',
    harga: 25000,
    gambar: 'elat sapi besar.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 29,
    nama: 'ELAT SAPI KECIL',
    harga: 15000,
    gambar: 'elat sapi kecil.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 30,
    nama: 'FLOSS ROLL',
    harga: 60000,
    gambar: 'floss roll.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 44,
    nama: 'GEMPIA COKLAT KEJU',
    harga: 35000,
    gambar: 'gempia coklat keju.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 45,
    nama: 'GEMPIA COKLAT',
    harga: 33000,
    gambar: 'gempia coklat.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 46,
    nama: 'GEMPIA DURIAN',
    harga: 35000,
    gambar: 'gempia durian.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 47,
    nama: 'GEMPIA KEJU',
    harga: 35000,
    gambar: 'gempia keju.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 48,
    nama: 'GEMPIA PISANG COKLAT',
    harga: 38000,
    gambar: 'gempia pisang coklat.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 51,
    nama: 'IKAN BANDENG 100 Gr',
    harga: 22000,
    gambar: 'IKAN BANDENG 100 Gr.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 52,
    nama: 'KEMINTING DURIAN',
    harga: 34000,
    gambar: 'keminting durian.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 53,
    nama: 'KEMINTING ORI',
    harga: 30000,
    gambar: 'keminting ori.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 55,
    nama: 'AMPLANG 50 Gr (ISI 12)',
    harga: 109000,
    gambar: 'KUKU MACAN 50 Gr ( Isi 12).jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 56,
    nama: 'AMPLANG 50 Gr',
    harga: 9000,
    gambar: 'KUKU MACAN 50 Gr.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 57,
    nama: 'AMPLANG 150 Gr',
    harga: 27000,
    gambar: 'KUKU MACAN 150 Gr.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 72,
    nama: 'PIE SUSU COKLAT',
    harga: 20000,
    gambar: 'PIE SUSU COKLAT.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 73,
    nama: 'PIE SUSU KEJU',
    harga: 22000,
    gambar: 'PIE SUSU KEJU.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 74,
    nama: 'PIE SUSU MIX',
    harga: 22000,
    gambar: 'PIE SUSU MIX.jpg', 
    produk: 'oleh-oleh',
  },
  {
    id: 75,
    nama: 'PIE SUSU ORIGINAL',
    harga: 22000,
    gambar: 'PIE SUSU ORIGINAL.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 78,
    nama: 'ROTI DURIAN KEJU',
    harga: 44000,
    gambar: 'roti durian keju.jpg',
    produk: 'oleh-oleh',
  },
  {
    id: 79,
    nama: 'ROTI DURIAN ORI',
    harga: 39000,
    gambar: 'roti durian ori.jpg',
    produk: 'oleh-oleh',
  },
];

const OlehOleh = () => {
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
            className="text-center w-full lg:w-[300px]"
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
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 2xl:grid-cols-5 mt-6 gap-5 min-h-[calc(2*190px)] xl:min-h-[calc(2*230px)] 2xl:min-h-[calc(2*280px)]">
          {currentItems.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            return (
              <Card key={product.id} className="flex justify-between">
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

export default OlehOleh;
