import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happy Shopping with Keiko Julia Jewelry",
  description: "Best platform for your fashion needs with Keiko Julia Jewelry",
};
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-gray-50 min-h-screen">{children}</main>;
}
