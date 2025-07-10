import { apiFetch } from "@/lib/apiInstance";
import { HttpError } from "@/lib/httpErrors";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Ganti path berikut dengan endpoint aslimu jika bukan fakestoreapi
    const products = await apiFetch("/products");

    return NextResponse.json(products);
  } catch (error: unknown) {
    if (error instanceof Error) {
      const httpError = error as HttpError;
      console.error("❌ Error fetching products:", httpError.message);
      return NextResponse.json(
        {
          error: httpError.message || "Internal Server Error",
        },
        {
          status: httpError.statusCode || 500,
        }
      );
    }
  }
}
