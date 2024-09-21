import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

const Career = () => {
  return (
    <div className="h-s">
      <Navbar />
      <div className="flex justify-center items-center mt-[5%] mb-[5%] px-5">
        <div className="p-10 bg-red-700 rounded-xl text-white">
          <h1 className="text-xl font-bold">ASSISTANT COOK</h1>
          <ul>
            <li>
              <p>Kualifikasi :</p>
              <ul className="pl-5">
                <li>1. Laki-Laki Maksimal 30 Tahun</li>
                <li>
                  2. Taat Beribadah Wajib & sunnah serta bersedia diatur sesuai
                  Syariat Islam
                </li>
                <li>
                  3. Pendidikan Minimal SMA/Sederajat (tidak sedang berkuliah)
                </li>
                <li>4. Fresh Graduate Silahkan Melamar</li>
                <li>5. Wajib memiliki Smartphone</li>
                <li>
                  6. Memiliki kemampuan Interpesonal dan Komunikasi yang baik
                </li>
                <li>7. Jujur, Pekerja Keras & Terpercaya</li>
                <li>8. Bersedia Bekerja Shift</li>
                <li>9. Penempatan Samarinda</li>
              </ul>
            </li>
            <li className="font-bold">
              BENEFIT: GAJI POKOK, CUTI 18 HARI/TAHUN, FASILITAS KESEHATAN
            </li>
          </ul>
          <button className="bg-white p-2 rounded-md w-full mt-2 text-red-700 font-bold">
            Apply Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
