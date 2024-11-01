"use client";

import Pagination from "@/components/pagination";
import { API } from "@/constants/config";
import { useEffect, useState } from "react";

export default function DashboardOrders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAddProducts = async () => {
    setLoading(true);
    fetch(`${API}orders`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        setOrders((prev) => [...prev, ...data]);
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
      <h2 className="text-2xl font-bold mb-16">Ordenes</h2>
      <div className="flex flex-col h-full w-full items-center">
        <div className="h-4/6 px-10 overflow-x-auto w-full">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left text-gray-600">
                  Product ID
                </th>
                <th className="px-4 py-2 border-b text-left text-gray-600">
                  Cliente
                </th>
                <th className="px-4 py-2 border-b text-left text-gray-600">
                  Email Cliente
                </th>
                <th className="px-4 py-2 border-b text-left text-gray-600">
                  Cantidad
                </th>
                <th className="px-4 py-2 border-b text-left text-gray-600">
                  Fecha de creacion
                </th>
                <th className="px-4 py-2 border-b text-left text-gray-600">
                  Ciudad
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{order.product_id}</td>
                  <td className="px-4 py-2 border-b">{order.customer_name}</td>
                  <td className="px-4 py-2 border-b">{order.customer_email}</td>
                  <td className="px-4 py-2 border-b text-center">
                    {order.quantity}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {new Date(order.order_date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {order.destination_city}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination onPagination={handleAddProducts} limit={3} />
      </div>
    </section>
  );
}
