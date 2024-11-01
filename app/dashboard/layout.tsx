"use client";
import Sidebar from "@/components/sidebar";
import { BUCKET } from "@/constants/config";
import React, { useState } from "react";
import { FaFileExcel } from "react-icons/fa";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [hovered, setHovered] = useState(false);
  const [fileUrl, setFileUrl] = useState("predicciones_inventario.csv");
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = BUCKET + fileUrl;
    link.download = "inventario.csv";
    link.click();
  };
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-200 to-white flex flex-row items-center">
      <section>
        <Sidebar />
      </section>
      <section className="h-screen w-full flex flex-col">
        <header className="w-full px-4 py-6 flex justify-end items-center">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 ease-out overflow-hidden space-x-2"
            style={{ width: "48px", height: "48px" }}
            onMouseEnter={(e) => (e.currentTarget.style.width = "200px")}
            onMouseLeave={(e) => (e.currentTarget.style.width = "48px")}
          >
            <FaFileExcel className="text-2xl absolute right-7" />
            <span
              className="py-2 pr-8 text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out"
              style={{ whiteSpace: "nowrap" }}
            >
              Descargar Inventario
            </span>
          </button>
        </header>
        {children}
      </section>
    </section>
  );
}
