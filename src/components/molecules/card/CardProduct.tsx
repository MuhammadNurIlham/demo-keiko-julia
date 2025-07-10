"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  MapPinIcon,
  ShoppingCartIcon,
  HeartIcon,
  CheckIcon,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import StarRating from "@/components/ui/StartRating";

interface ProductCardProps {
  id: number;
  imageUrl: string;
  title: string;
  price: string;
  location: string;
  rating: number | string;
  sold: number | string;
}

const CardProduct = ({
  id,
  imageUrl,
  title,
  price,
  location,
  rating,
  sold,
}: ProductCardProps) => {
  const router = useRouter();
  const [isWishlist, setIsWishlist] = React.useState(false);

  return (
    <Card
      onClick={() => router.push(`/products/${id}`)}
      className="w-full p-0 border-0 rounded-xl shadow hover:shadow-md transition duration-300 cursor-pointer">
      {/* Product Image */}
      <CardContent className="p-0">
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl rounded-b-sm">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-contain"
          />
        </div>
      </CardContent>

      {/* Product Info */}
      <CardFooter className="flex flex-col items-start gap-1 p-3">
        <h3 className="text-sm font-medium leading-tight line-clamp-2">
          {title}
        </h3>
        <p className="text-base font-bold text-black">{price}</p>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPinIcon className="w-3.5 h-3.5 text-purple-600" />
          <span className="line-clamp-1">{location}</span>
        </div>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <StarRating
            rate={rating}
            count={Number(sold)}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between w-full mt-2 gap-2">
          {/* Wishlist Button */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border border-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              setIsWishlist(!isWishlist);
            }}>
            <HeartIcon
              className={cn(
                "w-4 h-4",
                isWishlist ? "text-red-500 fill-red-500" : "text-gray-500"
              )}
            />
          </Button>

          {/* Add to Cart Button */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border border-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Add to cart");
            }}>
            <ShoppingCartIcon className="w-4 h-4 text-gray-500" />
          </Button>

          {/* Buy Now Button */}
          <Button
            variant="default"
            className="flex-1 text-xs font-semibold flex items-center justify-center gap-1">
            <CheckIcon className="w-4 h-4" />
            Beli Sekarang
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
