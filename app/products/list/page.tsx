"use client";
import Pagination from "@/components/pagination";
import ProductCard from "@/components/products";
import { API, BUCKET } from "@/constants/config";
import { useEffect, useState } from "react";

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Asegura que el mes tenga dos dígitos
  const day = date.getDate().toString().padStart(2, "0"); // Asegura que el día tenga dos dígitos
  return `${year}-${month}-${day}`;
};

export default function ProductsList() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleBuy = (product: number) => () => {
    setLoading(true);
    const customerEmail = localStorage.getItem("email");
    const customerName = localStorage.getItem("nombre");
    fetch(`${API}orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: product,
        customer_name: customerName,
        customer_email: customerEmail,
        quantity: 1,
        order_date: formatDate(new Date()),
        destination_city: "New York",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log("Purchase successful:", result);
        // Aquí puedes actualizar el estado o los datos según lo necesites
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error making purchase:", error);
        setLoading(false);
      });
  };

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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {products.map((product, index) => {
          return (
            <div key={index} className="p-6">
              <ProductCard
                imageUrl={product.image}
                title={product.name}
                country={product.category}
                districts={`$${product.price}`}
                handleBuy={handleBuy(index)}
              />
            </div>
          );
        })}
      </div>
      <Pagination onPagination={handleAddProducts} limit={3} />
    </>
  );
}
