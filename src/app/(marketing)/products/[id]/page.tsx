/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/(main)/product/[id]/page.tsx
import { formatCurrency } from "@/lib/formatCurrency";
import { apiFetch } from "@/lib/apiInstance";
import Image from "next/image";
import { Metadata } from "next";
import CustomContainer from "@/components/molecules/CustomContainer";
import { Button } from "@/components/ui/button";
import ProductRecommendation from "@/components/organisms/ProductRecomendation";
import StarRating from "@/components/ui/StartRating";
import { CustomBreadcrumbs } from "@/components/molecules/CustomBreadcumbs";

interface Params {
  id: string;
}

// 1. Generate Metadata (SEO)
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  try {
    const { id } = await params;
    const product = await apiFetch<ProductResponse>(`/products/${id}`, {
      // ✅ Tambahkan ini agar metadata fetch tidak error
      next: { revalidate: 60 },
    } as any);

    return {
      title: "Keiko Julia Jewelry | " + product.title,
      description: product.description,
      openGraph: {
        images: [product.image],
      },
    };
  } catch (err) {
    return {
      title: "Product Not Found",
      description: "The product you're looking for does not exist.",
    };
  }
}

// 2. Generate Static Paths
export async function generateStaticParams() {
  const products = await apiFetch<ProductResponse[]>("/products");

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// 3. Halaman detail produk
export default async function ProductDetailPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  const product = await apiFetch<ProductResponse>(`/products/${id}`);

  return (
    <CustomContainer className="pt-16">
      <div className="max-w-7xl w-full px-6 py-10 mx-auto">
        <CustomBreadcrumbs
          items={[
            { title: "Home", href: "/" },
            { title: "Products", href: "/products" },
            { title: product.category, href: `/products` },
            { title: product.title },
          ]}
        />

        <div className="flex flex-col md:flex-row gap-10 mt-6">
          <div className="flex gap-3">
            <div className="sm:flex flex-col gap-3">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer">
                  <Image
                    src={product.image}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="object-contain w-full h-full p-4"
                  />
                </div>
              ))}
            </div>

            <div className="border border-gray-500/30 max-w-md rounded overflow-hidden">
              <Image
                src={product.image}
                alt="Main Product Image"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-3xl font-medium">{product.title}</h1>

            <div className="mt-2">
              <StarRating
                rate={product.rating.rate}
                count={product.rating.count}
                size={16}
              />
            </div>

            <div className="mt-6">
              <p className="text-2xl font-medium">
                {formatCurrency(product.price)}
              </p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>

            <p className="text-base font-medium mt-6">About Product</p>
            <ul className="list-disc ml-4 text-gray-500/70 text-sm">
              <li>{product.description}</li>
            </ul>

            <div className="flex items-center mt-10 gap-4 text-base">
              <Button
                variant="outline"
                className=" px-6 py-4">
                Add to Cart
              </Button>
              <Button className=" px-6 py-4">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-4 border-t pt-6">
        <ProductRecommendation
          category={product.category}
          excludeProductId={product.id}
        />
      </section>
    </CustomContainer>
  );
}
