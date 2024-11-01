"use client";

import Pagination from "@/components/pagination";
import { API } from "@/constants/config";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

export default function DashboardProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAddProducts = async () => {
    setLoading(true);
    fetch(`${API}products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        setProducts((prev) => [...prev, ...data]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleAddProducts();
  }, []);
  return (
    <section className="flex flex-col h-full w-full items-center ">
      <h2 className="text-2xl font-bold mb-16">Productos</h2>
      <div className="flex flex-col h-full w-full items-center">
        <div className="h-4/6 px-10 overflow-x-auto w-full">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left text-gray-600">
                  Nombre
                </th>
                <th className="px-4 py-2 border-b text-left text-gray-600">
                  Categoria
                </th>
                <th className="px-4 py-2 border-b text-left text-gray-600">
                  Precio
                </th>
                <th className="px-4 py-2 border-b text-left text-gray-600">
                  Stock
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{p.name}</td>
                  <td className="px-4 py-2 border-b">{p.category}</td>
                  <td className="px-4 py-2 border-b">{p.price}</td>
                  <td className="px-4 py-2 border-b text-center">{p.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {loading ? <>
        Cargando ... <AiOutlineLoading size={30}/></> : null }
        <Pagination onPagination={handleAddProducts} limit={3} />
      </div>
    </section>
  );
}
