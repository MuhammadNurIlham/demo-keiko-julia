"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import Image from "next/image";

export type CardVariant = "default" | "featured";
export type CardType =
  | "hotel"
  | "destination"
  | "guide"
  | "transport"
  | "accommodation";

interface CustomCardProps {
  type: CardType; // ✅ identitas wajib
  variant?: CardVariant;
  imageUrl: string;
  title: string;
  subtitle?: string;
  meta?: ReactNode;
  footer?: ReactNode;
  badge?: ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({
  type,
  variant = "default",
  imageUrl,
  title,
  subtitle,
  meta,
  footer,
  badge,
}) => {
  return (
    <div
      data-type={type} // 🧠 identitas DOM
      className={cn(
        "overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-900",
        variant === "featured"
          ? "flex w-full max-w-3xl"
          : "w-full flex flex-col"
      )}>
      <div className={variant === "featured" ? "w-1/2" : "w-full"}>
        <div
          className={cn(
            "relative w-full",
            variant === "default" ? "h-48 sm:h-64" : "aspect-[4/3]"
          )}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div
        className={cn(
          "p-4 text-gray-800",
          variant === "featured"
            ? "w-1/2 flex flex-col justify-between gap-4 bg-black text-white"
            : "flex flex-col gap-2"
        )}>
        <span className="sr-only">Card Type: {type}</span> {/* Untuk A11y */}
        {badge && <div>{badge}</div>}
        <div>
          <div className="text-lg font-semibold">{title}</div>
          {subtitle && (
            <div className="text-sm text-gray-500 dark:text-gray-300">
              {subtitle}
            </div>
          )}
          {meta && <div className="mt-1">{meta}</div>}
        </div>
        {footer && <div className="mt-2">{footer}</div>}
      </div>
    </div>
  );
};

export default CustomCard;
