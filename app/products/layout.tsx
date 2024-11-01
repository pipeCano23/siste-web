"use client";
import { APP_ROUTES } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPath = usePathname();
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-200 flex flex-col items-center ">
      <header className="w-full max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-3xl font-semibold text-blue-500">O</div>
        <div className="flex space-x-8 text-gray-700">
          {APP_ROUTES.PRODUCT_HOME === currentPath ? (
            <>
              <p className="text-gray-500 font-semibold text-base">Home</p>
            </>
          ) : (
            <>
              <Link
                href={APP_ROUTES.PRODUCT_HOME}
                className="text-blue-500 font-semibold text-base"
              >
                Home
              </Link>
            </>
          )}
          {APP_ROUTES.PRODUCT_LIST === currentPath ? (
            <>
              <p className="text-gray-500 font-semibold text-base">Productos</p>
            </>
          ) : (
            <>
              <Link
                href={APP_ROUTES.PRODUCT_LIST}
                className="text-blue-500 font-semibold text-base"
              >
                Productos
              </Link>
            </>
          )}
        </div>
      </header>
      {children}
    </section>
  );
}
