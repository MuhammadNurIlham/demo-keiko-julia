import { useProductStore } from "@/store/useProductStore";

export const useProducts = () => {
  const products = useProductStore((s) => s.products);
  const productId = useProductStore((s) => s.productDetail);
  const loading = useProductStore((s) => s.loading);
  const error = useProductStore((s) => s.error);
  const fetchProducts = useProductStore((s) => s.fetchProducts);
  const fetchProductId = useProductStore((s) => s.fetchProductId);

  return { products, productId, loading, error, fetchProducts, fetchProductId };
};
