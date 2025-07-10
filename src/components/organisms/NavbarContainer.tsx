"use client";

import {
  // AlignRightIcon,
  BellIcon,
  MailIcon,
  // SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useMediaQuery } from "@/lib/useMediaQuery";
import BottomBar from "../molecules/navbar/BottomBar";
import SearchBar from "../ui/SearchBar";
import TopHeaderBanner from "../molecules/navbar/TopHeaderBanner";

const NavbarContainer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isScrolled, setIsScrolled] = React.useState(false);
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Top Header */}
        <TopHeaderBanner />

        {/* Main Navbar */}
        {!isMobile ? (
          // Desktop View
          <nav
            className={`bg-white w-full flex items-center justify-between px-4 md:px-8 xl:px-16 transition-all duration-300 py-2 border-b border-gray-200 ${
              isScrolled
                ? "bg-white/40 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
                : "py-4 md:py-6"
            }`}>
            <div className="flex items-center gap-6">
              <Link href="/">
                <Image
                  src="/images/keiko-logo.webp"
                  width={96}
                  height={32}
                  alt="Keikojulia Logo"
                  className="h-9 w-auto"
                />
              </Link>
            </div>
            {/* Middle: SearchBar */}
            <div className="flex-1 mx-10 max-w-xl w-full">
              <SearchBar />
            </div>

            <div className="flex items-center gap-4">
              {/* Keranjang Icon */}
              <div className="relative cursor-pointer">
                <svg
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18M3 3l1.5 13.5a1.5 1.5 0 001.49 1.5h11.02a1.5 1.5 0 001.49-1.5L21 3"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 text-xs bg-green-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-gray-300" />
              <Button
                variant="outline"
                className="text-green-600 border-green-600">
                Masuk
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                Daftar
              </Button>
            </div>
          </nav>
        ) : (
          // Mobile/Tablet View Top Bar
          <nav
            className={` bg-white w-full flex items-center justify-between px-4 py-2 border-b border-gray-200 gap-3 ${
              isScrolled
                ? "bg-white/40 shadow-md text-gray-700 backdrop-blur-lg"
                : ""
            }`}>
            <SearchBar />
            <MailIcon className="w-5 h-5 text-gray-700" />
            <BellIcon className="w-5 h-5 text-gray-700" />
            <ShoppingCartIcon className="w-5 h-5 text-gray-700" />
          </nav>
        )}
      </header>

      {/* Bottom Bar for Mobile/Tablet */}
      {isMobile && <BottomBar />}
    </>
  );
};

export default NavbarContainer;
