"use client";

import React, { useEffect, useState } from "react";
import CardProduct from "../molecules/card/CardProduct";
import { apiFetch } from "@/lib/apiInstance";
import { formatCurrency } from "@/lib/formatCurrency";

interface ProductRecommendationProps {
  category: string;
  excludeProductId: number;
}

const ProductRecommendation = ({
  category,
  excludeProductId,
}: ProductRecommendationProps) => {
  const [recommendedProducts, setRecommendedProducts] = useState<
    ProductResponse[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true);
        const allProducts = await apiFetch<ProductResponse[]>("/products");
        const filtered = allProducts.filter(
          (p) => p.category === category && p.id !== excludeProductId
        );
        setRecommendedProducts(filtered);
      } catch (err) {
        console.error("Failed to fetch recommendations", err);
        setError("Gagal memuat rekomendasi produk");
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [category, excludeProductId]);

  return (
    <div className="py-6">
      <h2 className="text-lg font-semibold mb-4">Products you might like</h2>

      {loading && <p>Loading Product Recommendation...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {recommendedProducts.map((product) => (
          <CardProduct
            key={product.id}
            id={product.id}
            imageUrl={product.image}
            title={product.title}
            price={formatCurrency(product.price)}
            location="Jakarta"
            rating={product.rating.rate}
            sold={product.rating.count}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendation;
