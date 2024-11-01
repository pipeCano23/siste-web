import React from "react";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  country: string;
  districts: string;
  handleBuy: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  country,
  districts,
  handleBuy,
}) => {
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <h2 className="text-white text-2xl font-semibold uppercase tracking-wide">
            {title}
          </h2>
        </div>
      </div>
      <div className="p-6 bg-gray-100">
        <div className="flex justify-between text-center text-sm">
          <div>
            <p className="text-gray-500 uppercase">Categoria</p>
            <p className="font-bold text-gray-800">{country}</p>
          </div>
          <div>
            <p className="text-gray-500 uppercase">Precio</p>
            <p className="font-bold text-gray-800">{districts}</p>
          </div>
        </div>
        <button
          onClick={handleBuy}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
