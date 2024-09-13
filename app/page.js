"use client";
import Footer from "./components/Footer";
import Gerai from "./components/Gerai";
import Navbar from "./components/Navbar";
import Wa from "./components/Wa";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Gerai />
      <Footer />
      <Wa />
    </>
  );
}






