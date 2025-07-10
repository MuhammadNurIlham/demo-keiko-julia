import React from "react";
import { cn } from "@/lib/utils";

interface CustomContainerProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string; // optional inner wrapper
}

const CustomContainer = ({
  children,
  className,
  innerClassName,
}: CustomContainerProps) => {
  return (
    <div className={cn("w-full pt-24 md:pt-28", className)}>
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6",
          innerClassName
        )}>
        {children}
      </div>
    </div>
  );
};

export default CustomContainer;
