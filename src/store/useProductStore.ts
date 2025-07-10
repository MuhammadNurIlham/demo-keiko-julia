import { apiFetch } from "@/lib/apiInstance";
import { HttpError } from "@/lib/httpErrors";
import { create } from "zustand";

interface ProductState {
  products: ProductResponse[];
  productDetail: ProductResponse | null;
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  fetchProductId: (id: number) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  productDetail: null,
  loading: false,
  error: null,

  fetchProducts: async () => {
    try {
      set({ loading: true, error: null });
      const data = await apiFetch<ProductResponse[]>("/products");
      set({ products: data, loading: false });
    } catch (error: unknown) {
      const message =
        error instanceof HttpError ? error.message : "Gagal memuat data produk";
      set({ error: message, loading: false });
    }
  },

  fetchProductId: async (id: number) => {
    try {
      set({ loading: true, error: null });
      const data = await apiFetch<ProductResponse>(`/products/${id}`);
      set({ productDetail: data, loading: false });
    } catch (error: unknown) {
      const message =
        error instanceof HttpError
          ? error.message
          : "Gagal memuat detail produk";
      set({ error: message, loading: false });
    }
  },
}));
