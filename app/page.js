import dynamic from 'next/dynamic';
import Footer from "./components/Footer";
import Gerai from "./components/Gerai";
import Navbar from "./components/Navbar";

// Memuat komponen `Wa` secara dinamis tanpa rendering di server
const Wa = dynamic(() => import('./components/Wa'), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <Gerai />
      <Footer />
      <Wa />
    </>
  );
}
