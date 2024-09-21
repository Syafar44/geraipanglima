"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Teko } from "next/font/google";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
  Badge,
  MenuItem,
  Menu,
  MenuHandler,
  MenuList,
  Collapse,
} from "@material-tailwind/react";

const teko = Teko({
  weight: ["300", "700"],
  subsets: ["latin"],
});

import {
  ChevronRightIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Shopee = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      className="w-24"
      viewBox="0 0 48 48"
    >
      <path
        fill="#ef4e2d"
        d="M36.683,43H11.317c-2.136,0-3.896-1.679-3.996-3.813l-1.272-27.14C6.022,11.477,6.477,11,7.048,11 h33.904c0.571,0,1.026,0.477,0.999,1.047l-1.272,27.14C40.579,41.321,38.819,43,36.683,43z"
      ></path>
      <path
        d="M24.066,16.073c-4.029,0-7.067,2.596-7.067,6.039c0,3.955,3.624,5.28,6.271,6.247 c3.21,1.173,4.278,1.83,4.278,3.41c0,1.255-1.653,2.314-3.609,2.314c-2.463,0-4.673-1.864-4.695-1.882l-0.104-0.097 c-0.186-0.171-0.428-0.264-0.677-0.264c-0.038,0-0.077,0.002-0.115,0.007c-0.289,0.034-0.549,0.191-0.712,0.432l-1.046,1.542 c-0.291,0.429-0.206,1.008,0.195,1.336l0.106,0.087c0.78,0.631,3.582,2.683,7.049,2.683c4.18,0,7.454-2.705,7.454-6.158 c0-4.535-3.93-5.971-6.8-7.019c-2.767-1.011-3.749-1.562-3.749-2.638c0-1.272,1.356-2.195,3.224-2.195 c1.464,0,2.767,0.584,3.413,0.933c0.089,0.048,0.411,0.241,0.59,0.361l0.13,0.087c0.166,0.111,0.36,0.169,0.556,0.169 c0.071,0,0.143-0.008,0.213-0.023c0.266-0.058,0.496-0.222,0.639-0.453l0.958-1.558c0.283-0.461,0.149-1.064-0.304-1.36 l-0.157-0.103C29.267,17.404,26.979,16.073,24.066,16.073L24.066,16.073z"
        opacity=".05"
      ></path>
      <path
        d="M24.066,16.573c-3.744,0-6.567,2.381-6.567,5.539c0,3.606,3.295,4.81,5.942,5.778 c3.132,1.145,4.607,1.9,4.607,3.88c0,1.552-1.843,2.814-4.109,2.814c-2.664,0-4.997-1.983-5.021-2.003L18.8,32.472 c-0.093-0.085-0.214-0.132-0.338-0.132c-0.019,0-0.038,0.001-0.058,0.003c-0.144,0.017-0.275,0.096-0.356,0.216l-1.046,1.542 c-0.145,0.214-0.103,0.504,0.098,0.668l0.106,0.087c0.746,0.604,3.43,2.571,6.732,2.571c3.9,0,6.954-2.485,6.954-5.658 c0-4.185-3.589-5.496-6.472-6.55c-2.772-1.013-4.078-1.65-4.078-3.107c0-1.561,1.566-2.695,3.724-2.695 c1.574,0,2.963,0.622,3.65,0.992c0.11,0.059,0.443,0.26,0.631,0.385l0.13,0.087c0.083,0.056,0.18,0.084,0.278,0.084 c0.036,0,0.071-0.004,0.107-0.011c0.133-0.029,0.248-0.111,0.319-0.227l0.958-1.558c0.142-0.23,0.074-0.532-0.152-0.68 l-0.157-0.103C29.026,17.844,26.841,16.573,24.066,16.573L24.066,16.573z"
        opacity=".07"
      ></path>
      <path
        fill="#ef4e2d"
        d="M32.5,11.5h-2C30.5,7.364,27.584,4,24,4s-6.5,3.364-6.5,7.5h-2C15.5,6.262,19.313,2,24,2 S32.5,6.262,32.5,11.5z"
      ></path>
      <path
        fill="#fff"
        d="M24.248,25.688c-2.741-1.002-4.405-1.743-4.405-3.577c0-1.851,1.776-3.195,4.224-3.195 c1.685,0,3.159,0.66,3.888,1.052c0.124,0.067,0.474,0.277,0.672,0.41l0.13,0.087l0.958-1.558l-0.157-0.103 c-0.772-0.521-2.854-1.733-5.49-1.733c-3.459,0-6.067,2.166-6.067,5.039c0,3.257,2.983,4.347,5.615,5.309 c3.07,1.122,4.934,1.975,4.934,4.349c0,1.828-2.067,3.314-4.609,3.314c-2.864,0-5.326-2.105-5.349-2.125l-0.128-0.118l-1.046,1.542 l0.106,0.087c0.712,0.577,3.276,2.458,6.416,2.458c3.619,0,6.454-2.266,6.454-5.158C30.393,27.933,27.128,26.741,24.248,25.688z"
      ></path>
    </svg>
  );
};

const Tiktok = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520.48 520.48"
      className="w-24"
      id="tiktok"
    >
      <rect width="520.48" height="520.48" rx="49.82" ry="49.82"></rect>
      <path
        fill="#ff004f"
        d="m392.19,206.7v49.13c-8.6-.84-19.74-2.78-32.09-7.31-16.13-5.91-28.13-13.99-35.98-20.25v99.32l-.19-.31c.14,1.96.19,3.97.19,5.99,0,49.33-40.13,89.48-89.48,89.48s-89.48-40.15-89.48-89.48,40.13-89.5,89.48-89.5c4.82,0,9.57.39,14.2,1.13v48.43c-4.45-1.6-9.22-2.45-14.2-2.45-23.36,0-42.38,19-42.38,42.38s19.02,42.38,42.38,42.38,42.38-19.02,42.38-42.38c0-.88-.02-1.75-.08-2.63v-193.01h49.11c.18,4.16.35,8.34.53,12.51.33,8.19,3.25,16.05,8.32,22.49,5.97,7.57,14.76,16.36,27.13,23.38,11.57,6.56,22.45,9.38,30.15,10.7Z"
      ></path>
      <path
        fill="#00f7ef"
        d="m375.32,166.81v49.13c-8.6-.84-19.74-2.78-32.09-7.31-16.13-5.91-28.13-13.99-35.98-20.25v99.32l-.19-.31c.14,1.96.19,3.97.19,5.99,0,49.33-40.13,89.48-89.48,89.48s-89.48-40.15-89.48-89.48,40.13-89.5,89.48-89.5c4.82,0,9.57.39,14.2,1.13v48.43c-4.45-1.6-9.22-2.45-14.2-2.45-23.36,0-42.38,19-42.38,42.38s19.02,42.38,42.38,42.38,42.38-19.02,42.38-42.38c0-.88-.02-1.75-.08-2.63V97.74h49.11c.18,4.16.35,8.34.53,12.51.33,8.19,3.25,16.05,8.33,22.49,5.97,7.57,14.76,16.36,27.13,23.38,11.57,6.56,22.45,9.38,30.15,10.7Z"
      ></path>
      <path
        fill="#fff"
        d="m386.06,188.29v49.13c-8.6-.84-19.74-2.78-32.09-7.31-16.13-5.91-28.13-13.99-35.98-20.25v99.32l-.19-.31c.14,1.96.19,3.97.19,5.99,0,49.33-40.13,89.48-89.48,89.48s-89.48-40.15-89.48-89.48,40.13-89.5,89.48-89.5c4.82,0,9.57.39,14.2,1.13v48.43c-4.45-1.6-9.22-2.45-14.2-2.45-23.36,0-42.38,19-42.38,42.38s19.02,42.38,42.38,42.38,42.38-19.02,42.38-42.38c0-.88-.02-1.75-.08-2.63V119.22h49.11c.18,4.16.35,8.34.53,12.51.33,8.19,3.25,16.05,8.32,22.49,5.97,7.57,14.76,16.36,27.13,23.38,11.57,6.56,22.45,9.38,30.15,10.7Z"
      ></path>
    </svg>
  );
};

const navListMenuItems = [
  {
    title: "Shopee",
    description: "Ayo belanja Oleh-oleh di gerai panglima",
    icon: Shopee,
    link: "https://shopee.co.id/geraipanglima",
  },
  {
    title: "Tiktok",
    description: "Gerai Panglima Samarinda",
    icon: Tiktok,
    link: "https://vt.tiktok.com/ZSYTfd4An/?page=Mall",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
      >
        <MenuHandler>
          <Typography as="div" className={teko.className}>
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-bold text-putih"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              MarketPleace
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

const Navbar = () => {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const [totalItems, setTotalItems] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = savedCart.reduce((sum, product) => sum + product.quantity, 0);
    setTotalItems(total);
  }, []);

  return (
    <>
      <nav className="hidden lg:block lg:px-8 lg:py-4 bg-kuning sticky top-0 z-50">
        <div className="flex justify-center gap-20 font-bold">
          <div className="flex items-center gap-5">
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-putih hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/"
            >
              HOME
            </Link>
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-putih hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/About"
            >
              ABOUT
            </Link>
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-putih hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/Gallery"
            >
              GALLERY
            </Link>
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-putih hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/Contact"
            >
              CONTACT
            </Link>
          </div>
          <div className="bg-white scale-[2.5] translate-y-7 border-2 p-2 border-kuning rounded-lg w-24">
            <Link href="/">
              <img
                className="w-full"
                src="https://raw.githubusercontent.com/Syafar44/assets/main/assets/image/LOGO%20GERAI%20PANGLIMA-02.png"
              />
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-putih hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/Product"
            >
              PRODUCT
            </Link>
            {totalItems > 0 ? (
              <Badge className="right-0" content={totalItems}>
                <Link
                  href="/Order"
                  className="px-6 py-2 bg-white rounded-lg flex items-center text-red-700 hover:shadow-[inset_2px_2px_4px_rgba(255,_255,_255,_1),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.3)] transition duration-300 ease-linear "
                >
                  🛒 ORDER
                </Link>
              </Badge>
            ) : (
              <Link
                href="/Order"
                className="px-6 py-2 bg-white rounded-lg flex items-center text-putih hover:shadow-[inset_2px_2px_4px_rgba(255,_255,_255,_1),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.3)] transition duration-300 ease-linear "
              >
                🛒 ORDER
              </Link>
            )}
            <NavListMenu />
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-putih hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/Career"
            >
              CAREER
            </Link>
          </div>
        </div>
      </nav>



      <nav className="lg:hidden bg-kuning p-2 block sticky top-0 z-50">
        <div className="flex justify-between mx-2">
          <div className="flex gap-3 justify-center items-center">
            <IconButton variant="text" size="lg" onClick={openDrawer}>
              {isDrawerOpen ? (
                <XMarkIcon className="h-8 w-8 stroke-2 text-white" />
              ) : (
                <Bars3Icon className="h-8 w-8 stroke-2 text-white" />
              )}
            </IconButton>
            <Drawer
              open={isDrawerOpen}
              onClose={closeDrawer}
              className="bg-kuning"
            >
              <Card
                color="transparent"
                shadow={false}
                className="h-[calc(100vh-2rem)] w-full p-4"
              >
                <div className="flex items-center justify-between p-2">
                  <Link href="/" className="bg-white p-2 rounded-xl">
                    <img
                      src="https://raw.githubusercontent.com/Syafar44/assets/main/assets/image/LOGO%20GERAI%20PANGLIMA-02.png"
                      alt="brand"
                      className="w-20"
                    />
                  </Link>
                  <div className="flex mr-5 items-center text-kuning font-bold bg-putih px-4 py-1 rounded-xl">
                    {totalItems > 0 ? (
                      <Badge className="-right-3" content={totalItems}>
                        <Link href="/Order">🛒 Order</Link>
                      </Badge>
                    ) : (
                      <Link href="/Order">🛒 Order</Link>
                    )}
                  </div>
                </div>

                <List>
                  <Accordion
                    className="border border-putih rounded-xl"
                    open={open === 1}
                    icon={
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${
                          open === 1 ? "rotate-180" : ""
                        }`}
                      />
                    }
                  >
                    <ListItem className="p-0" selected={open === 1}>
                      <AccordionHeader
                        onClick={() => handleOpen(1)}
                        className="border-b-0 p-3"
                      >
                        <Typography className="mr-auto font-normal text-putih">
                          marketplace
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                      <List className="p-0 text-putih">
                        <Link
                          href="https://shopee.co.id/geraipanglima"
                          target="_blank"
                        >
                          <ListItem>
                            <ListItemPrefix>
                              <ChevronRightIcon
                                strokeWidth={3}
                                className="h-3 w-5"
                              />
                            </ListItemPrefix>
                            Shopee
                          </ListItem>
                        </Link>
                        <Link
                          href="https://vt.tiktok.com/ZSYTfd4An/?page=Mall"
                          target="_blank"
                        >
                          <ListItem>
                            <ListItemPrefix>
                              <ChevronRightIcon
                                strokeWidth={3}
                                className="h-3 w-5"
                              />
                            </ListItemPrefix>
                            TikTok
                          </ListItem>
                        </Link>
                      </List>
                    </AccordionBody>
                  </Accordion>
                  <hr className="my-2 border-putih" />
                  <div className="font-bold text-putih">
                    <Link href="/Product">
                      <ListItem>Product</ListItem>
                    </Link>
                    <Link href="/">
                      <ListItem>Home</ListItem>
                    </Link>
                    <Link href="/About">
                      <ListItem>About</ListItem>
                    </Link>
                    <Link href="/Gallery">
                      <ListItem>Gallery</ListItem>
                    </Link>
                    <Link href="/Contact">
                      <ListItem>Contact</ListItem>
                    </Link>
                    <Link href="/Career">
                      <ListItem>Career</ListItem>
                    </Link>
                  </div>
                </List>
              </Card>
            </Drawer>
            <Link href="/" className="bg-putih p-2 rounded-xl">
              <img
                className="item-center w-16 mr-2"
                src="https://raw.githubusercontent.com/Syafar44/assets/main/assets/image/LOGO%20GERAI%20PANGLIMA-02.png"
              />
            </Link>
          </div>
          <div className="flex mr-5 items-center text-kuning font-bold bg-putih px-4 my-2 rounded-2xl">
            {totalItems > 0 ? (
              <Badge className="-right-3" content={totalItems}>
                <Link href="/Order">🛒 Order</Link>
              </Badge>
            ) : (
              <Link href="/Order">🛒 Order</Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
