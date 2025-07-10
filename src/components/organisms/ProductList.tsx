"use client";

import React, { useEffect, useState } from "react";
import CustomContainer from "../molecules/CustomContainer";
import CardProduct from "../molecules/card/CardProduct";
import { useProducts } from "@/hooks/useProductsHooks";
import { formatCurrency } from "@/lib/formatCurrency";
import BannerAdsCarousel from "../molecules/BannerAdsCarousel";

const ProductList = () => {
  const { products, loading, error, fetchProducts } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Ambil kategori unik dari produk
  useEffect(() => {
    if (products.length) {
      const uniqueCategories = Array.from(
        new Set(products.map((p) => p.category))
      );
      setCategories(uniqueCategories);
    }
  }, [products]);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const renderedList = filteredProducts.flatMap((product, index) => {
    const elements = [
      <CardProduct
        key={product.id}
        id={product.id}
        imageUrl={product.image}
        title={product.title}
        price={formatCurrency(product.price)}
        location="Jakarta"
        rating={product.rating.rate}
        sold={product.rating.count}
      />,
    ];

    if ((index + 1) % 12 === 0 && index !== filteredProducts.length - 1) {
      elements.push(
        <div
          key={`banner-${index}`}
          className="col-span-full my-4">
          <BannerAdsCarousel />
        </div>
      );
    }

    return elements;
  });

  if (loading) return <p>Loading produk...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <CustomContainer>
      <div className="w-full py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
          <h1 className="text-md md:text-lg font-bold">
            Products All you needs
          </h1>
          <div className="flex items-center gap-2">
            <label
              htmlFor="category"
              className="text-sm font-medium">
              Filter by Category:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {renderedList}
        </div>
      </div>
    </CustomContainer>
  );
};

export default ProductList;
