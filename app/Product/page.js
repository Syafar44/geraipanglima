"use client";
import React from "react";
import Navbar from "../components/Navbar";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import Footer from "../components/Footer";

const Product = () => {
  return (
    <>
      <Navbar />
      <section className="mt-12 mx-5 lg:mx-52">
        <h1 className="text-2xl lg:text-5xl font-bold">Product Kategori</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 gap-5 lg:mx-20">
          <Link href="/Product/Gembung">
            <Card className="lg:w-72">
              <CardHeader floated={false} className="lg:h-60 ">
                <img src="tes-5.jpg" alt="roti gembung" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Gembung
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Pizza">
            <Card className="lg:w-72">
              <CardHeader floated={false} className="lg:h-60">
                <img src="tes-5.jpg" alt="roti gembung" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Pizza
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Bakpia">
            <Card className="lg:w-72">
              <CardHeader floated={false} className="lg:h-60">
                <img src="tes-5.jpg" alt="roti gembung" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Bakpia
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Cromboloni">
            <Card className="lg:w-72">
              <CardHeader floated={false} className="lg:h-60">
                <img src="tes-5.jpg" alt="roti gembung" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Cromboloni
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Donat">
            <Card className="lg:w-72">
              <CardHeader floated={false} className="lg:h-60">
                <img src="tes-5.jpg" alt="roti gembung" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Donat
                </Typography>
              </CardBody>
            </Card>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
