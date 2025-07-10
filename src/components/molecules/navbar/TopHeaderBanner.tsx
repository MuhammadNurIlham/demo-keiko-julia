import { useMediaQuery } from "@/lib/useMediaQuery";
import { Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopHeaderBanner = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="bg-[#E5F2E9] text-xs md:text-sm py-2 px-4 text-gray-800">
      {isMobile ? (
        <div className="flex justify-center items-center w-full h-10">
          <Link href="/">
            <Image
              src="/images/keiko-logo.webp"
              width={100}
              height={32}
              alt="Keikojulia Logo"
              className="h-9"
            />
          </Link>
        </div>
      ) : (
        <div className="flex justify-between items-center w-full">
          {/* Kiri: Promo Mobile */}
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4" />
            <p className="flex items-center gap-1 font-semibold">
              Book on Mobile and get more offers
            </p>
          </div>

          {/* Kanan: Link Nav */}
          <div className="flex items-center gap-6 text-gray-700 text-sm">
            <Link
              className="hover:underline hover:text-gray-900 hover:font-semibold"
              href="/about">
              About Keiko Julia
            </Link>
            <Link
              className="hover:underline hover:text-gray-900 hover:font-semibold"
              href="/promo">
              Promo
            </Link>
            <Link
              className="hover:underline hover:text-gray-900 hover:font-semibold"
              href="/care">
              Keiko Julia Care
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopHeaderBanner;
