// components/Sidebar.tsx
import { APP_ROUTES } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaClipboardList, FaBoxOpen, FaChartLine } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const currentPath = usePathname();
  return (
    <aside className="w-64 bg-white shadow-lg h-screen p-5 flex flex-col items-center">
      <div className="flex flex-col items-center mb-8">
        {/* Logo */}
        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-2">
          {/* Icono o imagen del logo */}
          <span className="text-white text-2xl font-bold">🔥</span>{" "}
          {/* Cambia esto según el icono o imagen */}
        </div>
        {/* Nombre de la app y descripción */}
        <h2 className="text-gray-800 text-lg font-semibold">Nombre Empresa</h2>
        <p className="text-gray-500 text-sm text-center">
          Sound trading mudah untuk semua
        </p>
      </div>

      {/* Menú de navegación */}
      <nav className="flex flex-col gap-6 w-full">
        <Link
          href={APP_ROUTES.DASHBOARD}
          className={`flex items-center gap-4 ${
            APP_ROUTES.DASHBOARD === currentPath
              ? "text-sky-600"
              : "text-gray-700 hover:text-blue-500"
          }`}
        >
          <FaChartLine className="text-xl" />
          <span className="text-md font-medium">Analisis</span>
        </Link>
        <Link
          href={APP_ROUTES.PRODUCTS}
          className={`flex items-center gap-4 ${
            APP_ROUTES.PRODUCTS === currentPath
              ? "text-sky-600"
              : "text-gray-700 hover:text-blue-500"
          }`}
        >
          <FaBoxOpen className="text-xl" />
          <span className="text-md font-medium">Productos</span>
        </Link>
        <Link
          href={APP_ROUTES.ORDERS}
          className={`flex items-center gap-4 ${
            APP_ROUTES.ORDERS === currentPath
              ? "text-sky-600"
              : "text-gray-700 hover:text-blue-500"
          }`}
        >
          <FaClipboardList className="text-xl" />
          <span className="text-md font-medium">Ordenes</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
