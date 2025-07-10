"use client";

import React from "react";
import {
  HomeIcon,
  TagIcon,
  ReceiptIcon,
  UserIcon,
  PackageSearch,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // opsional kalau kamu pakai classNames helper

const BottomBar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/products", label: "Product", icon: PackageSearch },
    { href: "/promo", label: "Promo", icon: TagIcon },
    { href: "/transactions", label: "Transaction", icon: ReceiptIcon },
    { href: "/login", label: "Account", icon: UserIcon },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-gray-200 flex justify-around items-center py-2">
      {navItems.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-col items-center text-xs transition-all",
              isActive ? "text-green-600 font-semibold" : "text-gray-600"
            )}>
            <Icon className="w-5 h-5" />
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
