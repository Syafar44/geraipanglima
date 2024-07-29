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
import Wa from "../components/Wa";

const Product = () => {
  return (
    <>
      <Navbar />
      <section className="mt-12 px-5 md:px-20 xl:px-30 2xl:px-52">
        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold">
          Product Kategori
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-6 gap-2 lg:gap-5">
          <Link href="/Product/Gembung">
            <Card>
              <CardHeader floated={false} className=" ">
                <img src="tes-5.jpg" alt="roti gembung" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="-my-2 lg:my-0"
                >
                  Gembung
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Pizza">
            <Card>
              <CardHeader floated={false}>
                <img src="tes-5.jpg" alt="roti gembung" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="-my-2 lg:my-0"
                >
                  Pizza
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Bakpia">
            <Card>
              <CardHeader floated={false}>
                <img src="tes-5.jpg" alt="roti gembung" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="-my-2 lg:my-0"
                >
                  Bakpia
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Cromboloni">
            <Card>
              <CardHeader floated={false}>
                <img src="tes-5.jpg" alt="roti gembung" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="-my-2 lg:my-0"
                >
                  Cromboloni
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Donat">
            <Card>
              <CardHeader floated={false}>
                <img src="tes-5.jpg" alt="roti gembung" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="-my-2 lg:my-0"
                >
                  Donat
                </Typography>
              </CardBody>
            </Card>
          </Link>
        </div>
      </section>
      <Footer />
      <Wa />
    </>
  );
};

export default Product;
